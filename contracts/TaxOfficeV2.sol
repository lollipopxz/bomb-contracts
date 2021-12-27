// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "./owner/Operator.sol";
import "./interfaces/ITaxable.sol";
import "./interfaces/IUniswapV2Router.sol";
import "./interfaces/IERC20.sol";

/*

$$$$$$$\   $$$$$$\  $$\      $$\ $$$$$$$\                                                            
$$  __$$\ $$  __$$\ $$$\    $$$ |$$  __$$\                                                           
$$ |  $$ |$$ /  $$ |$$$$\  $$$$ |$$ |  $$ |    $$$$$$\$$$$\   $$$$$$\  $$$$$$$\   $$$$$$\  $$\   $$\ 
$$$$$$$\ |$$ |  $$ |$$\$$\$$ $$ |$$$$$$$\ |    $$  _$$  _$$\ $$  __$$\ $$  __$$\ $$  __$$\ $$ |  $$ |
$$  __$$\ $$ |  $$ |$$ \$$$  $$ |$$  __$$\     $$ / $$ / $$ |$$ /  $$ |$$ |  $$ |$$$$$$$$ |$$ |  $$ |
$$ |  $$ |$$ |  $$ |$$ |\$  /$$ |$$ |  $$ |    $$ | $$ | $$ |$$ |  $$ |$$ |  $$ |$$   ____|$$ |  $$ |
$$$$$$$  | $$$$$$  |$$ | \_/ $$ |$$$$$$$  |$$\ $$ | $$ | $$ |\$$$$$$  |$$ |  $$ |\$$$$$$$\ \$$$$$$$ |
\_______/  \______/ \__|     \__|\_______/ \__|\__| \__| \__| \______/ \__|  \__| \_______| \____$$ |
                                                                                           $$\   $$ |
                                                                                           \$$$$$$  |
    http://jira.money                                                                      \______/ 
*/
contract TaxOfficeV2 is Operator {
    using SafeMath for uint256;

    address public jira = address(0x522348779DCb2911539e76A1042aA922F9C47Ee3);
    address public weth = address(0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c);
    address public uniRouter = address(0x10ED43C718714eb63d5aA57B78B54704E256024E);

    mapping(address => bool) public taxExclusionEnabled;

    function setTaxTiersTwap(uint8 _index, uint256 _value) public onlyOperator returns (bool) {
        return ITaxable(jira).setTaxTiersTwap(_index, _value);
    }

    function setTaxTiersRate(uint8 _index, uint256 _value) public onlyOperator returns (bool) {
        return ITaxable(jira).setTaxTiersRate(_index, _value);
    }

    function enableAutoCalculateTax() public onlyOperator {
        ITaxable(jira).enableAutoCalculateTax();
    }

    function disableAutoCalculateTax() public onlyOperator {
        ITaxable(jira).disableAutoCalculateTax();
    }

    function setTaxRate(uint256 _taxRate) public onlyOperator {
        ITaxable(jira).setTaxRate(_taxRate);
    }

    function setBurnThreshold(uint256 _burnThreshold) public onlyOperator {
        ITaxable(jira).setBurnThreshold(_burnThreshold);
    }

    function setTaxCollectorAddress(address _taxCollectorAddress) public onlyOperator {
        ITaxable(jira).setTaxCollectorAddress(_taxCollectorAddress);
    }

    function excludeAddressFromTax(address _address) external onlyOperator returns (bool) {
        return _excludeAddressFromTax(_address);
    }

    function _excludeAddressFromTax(address _address) private returns (bool) {
        if (!ITaxable(jira).isAddressExcluded(_address)) {
            return ITaxable(jira).excludeAddress(_address);
        }
    }

    function includeAddressInTax(address _address) external onlyOperator returns (bool) {
        return _includeAddressInTax(_address);
    }

    function _includeAddressInTax(address _address) private returns (bool) {
        if (ITaxable(jira).isAddressExcluded(_address)) {
            return ITaxable(jira).includeAddress(_address);
        }
    }

    function taxRate() external returns (uint256) {
        return ITaxable(jira).taxRate();
    }

    function addLiquidityTaxFree(
        address token,
        uint256 amtJira,
        uint256 amtToken,
        uint256 amtJiraMin,
        uint256 amtTokenMin
    )
        external
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        require(amtJira != 0 && amtToken != 0, "amounts can't be 0");
        _excludeAddressFromTax(msg.sender);

        IERC20(jira).transferFrom(msg.sender, address(this), amtJira);
        IERC20(token).transferFrom(msg.sender, address(this), amtToken);
        _approveTokenIfNeeded(jira, uniRouter);
        _approveTokenIfNeeded(token, uniRouter);

        _includeAddressInTax(msg.sender);

        uint256 resultAmtJira;
        uint256 resultAmtToken;
        uint256 liquidity;
        (resultAmtJira, resultAmtToken, liquidity) = IUniswapV2Router(uniRouter).addLiquidity(
            jira,
            token,
            amtJira,
            amtToken,
            amtJiraMin,
            amtTokenMin,
            msg.sender,
            block.timestamp
        );

        if (amtJira.sub(resultAmtJira) > 0) {
            IERC20(jira).transfer(msg.sender, amtJira.sub(resultAmtJira));
        }
        if (amtToken.sub(resultAmtToken) > 0) {
            IERC20(token).transfer(msg.sender, amtToken.sub(resultAmtToken));
        }
        return (resultAmtJira, resultAmtToken, liquidity);
    }

    function addLiquidityETHTaxFree(
        uint256 amtJira,
        uint256 amtJiraMin,
        uint256 amtEthMin
    )
        external
        payable
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        require(amtJira != 0 && msg.value != 0, "amounts can't be 0");
        _excludeAddressFromTax(msg.sender);

        IERC20(jira).transferFrom(msg.sender, address(this), amtJira);
        _approveTokenIfNeeded(jira, uniRouter);

        _includeAddressInTax(msg.sender);

        uint256 resultAmtJira;
        uint256 resultAmtEth;
        uint256 liquidity;
        (resultAmtJira, resultAmtEth, liquidity) = IUniswapV2Router(uniRouter).addLiquidityETH{value: msg.value}(
            jira,
            amtJira,
            amtJiraMin,
            amtEthMin,
            msg.sender,
            block.timestamp
        );

        if (amtJira.sub(resultAmtJira) > 0) {
            IERC20(jira).transfer(msg.sender, amtJira.sub(resultAmtJira));
        }
        return (resultAmtJira, resultAmtEth, liquidity);
    }

    function setTaxableJiraOracle(address _jiraOracle) external onlyOperator {
        ITaxable(jira).setJiraOracle(_jiraOracle);
    }

    function transferTaxOffice(address _newTaxOffice) external onlyOperator {
        ITaxable(jira).setTaxOffice(_newTaxOffice);
    }

    function taxFreeTransferFrom(
        address _sender,
        address _recipient,
        uint256 _amt
    ) external {
        require(taxExclusionEnabled[msg.sender], "Address not approved for tax free transfers");
        _excludeAddressFromTax(_sender);
        IERC20(jira).transferFrom(_sender, _recipient, _amt);
        _includeAddressInTax(_sender);
    }

    function setTaxExclusionForAddress(address _address, bool _excluded) external onlyOperator {
        taxExclusionEnabled[_address] = _excluded;
    }

    function _approveTokenIfNeeded(address _token, address _router) private {
        if (IERC20(_token).allowance(address(this), _router) == 0) {
            IERC20(_token).approve(_router, type(uint256).max);
        }
    }
}
