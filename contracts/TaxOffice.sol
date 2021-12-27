// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "./owner/Operator.sol";
import "./interfaces/ITaxable.sol";

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
contract TaxOffice is Operator {
    address public jira;

    constructor(address _jira) public {
        require(_jira != address(0), "jira address cannot be 0");
        jira = _jira;
    }

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
        return ITaxable(jira).excludeAddress(_address);
    }

    function includeAddressInTax(address _address) external onlyOperator returns (bool) {
        return ITaxable(jira).includeAddress(_address);
    }

    function setTaxableJiraOracle(address _jiraOracle) external onlyOperator {
        ITaxable(jira).setJiraOracle(_jiraOracle);
    }

    function transferTaxOffice(address _newTaxOffice) external onlyOperator {
        ITaxable(jira).setTaxOffice(_newTaxOffice);
    }
}
