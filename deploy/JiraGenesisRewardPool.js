
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const jira = await ethers.getContract("Jira");

    await deploy("JiraGenesisRewardPool", {
        from: deployer,
        args: [jira.address, "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82", 1637449200],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["JiraGenesisRewardPool", "Step3"];
//module.exports.dependencies = ["Jira"];
