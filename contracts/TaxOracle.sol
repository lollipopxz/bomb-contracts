// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

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


contract TaxOracle is Ownable {
    using SafeMath for uint256;

    IERC20 public jira;
    IERC20 public btcb;
    address public pair;

    constructor(
        address _jira,
        address _btcb,
        address _pair
    ) public {
        require(_jira != address(0), "jira address cannot be 0");
        require(_btcb != address(0), "btcb address cannot be 0");
        require(_pair != address(0), "pair address cannot be 0");
        jira = IERC20(_jira);
        btcb = IERC20(_btcb);
        pair = _pair;
    }

    function consult(address _token, uint256 _amountIn) external view returns (uint144 amountOut) {
        require(_token == address(jira), "token needs to be jira");
        uint256 jiraBalance = jira.balanceOf(pair);
        uint256 btcbBalance = btcb.balanceOf(pair);
        return uint144(jiraBalance.mul(_amountIn).div(btcbBalance));
    }

    function getJiraBalance() external view returns (uint256) {
	return jira.balanceOf(pair);
    }

    function getBtcbBalance() external view returns (uint256) {
	return btcb.balanceOf(pair);
    }

    function getPrice() external view returns (uint256) {
        uint256 jiraBalance = jira.balanceOf(pair);
        uint256 btcbBalance = btcb.balanceOf(pair);
        return jiraBalance.mul(1e18).div(btcbBalance);
    }


    function setJira(address _jira) external onlyOwner {
        require(_jira != address(0), "jira address cannot be 0");
        jira = IERC20(_jira);
    }

    function setBtcb(address _btcb) external onlyOwner {
        require(_btcb != address(0), "btcb address cannot be 0");
        btcb = IERC20(_btcb);
    }

    function setPair(address _pair) external onlyOwner {
        require(_pair != address(0), "pair address cannot be 0");
        pair = _pair;
    }



}