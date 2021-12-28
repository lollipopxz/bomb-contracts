
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const jira = await ethers.getContract("Jira");
    //  testnet
    //const btcAddress = "0x8BaBbB98678facC7342735486C851ABD7A0d17Ca";
    // mainnet
    const btcAddress = "0x0dE8FCAE8421fc79B29adE9ffF97854a424Cad09"

    //testnet 
    //const pairAddress = "0x742957Dd7b4D4bB7177CF63B61Fd5f0f050Ebaa4";
    //mainnet
    pairAddress = "0x3c7747978d56dE9a0B275E7c840B89c168a363c9"

    await deploy("TaxOracle", {
        from: deployer,
        args: [jira.address, btcAddress, pairAddress],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["JiraOracle","Step2"];