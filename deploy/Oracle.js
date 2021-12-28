
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const Jira = await ethers.getContract("Jira");


    //testnet mumbai
    //const pairAddress = "0x742957Dd7b4D4bB7177CF63B61Fd5f0f050Ebaa4";

    //testnet bsc-testnet
    const pairAddress = "0x3c7747978d56dE9a0B275E7c840B89c168a363c9";


    // pancake
    //pairAddress = "0x84392649eb0bC1c1532F2180E58Bae4E1dAbd8D6";

    await deploy("Oracle", {
        from: deployer,
        args: [pairAddress, 21600, 1638572400],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["Oracle","Step2"];