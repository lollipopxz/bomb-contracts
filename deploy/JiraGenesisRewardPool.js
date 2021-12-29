
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const jira = await ethers.getContract("Jira");

    await deploy("JiraGenesisRewardPool", {
        from: deployer,
        args: [jira.address, "0x0dE8FCAE8421fc79B29adE9ffF97854a424Cad09", 1640810148],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["JiraGenesisRewardPool", "Step3"];
//module.exports.dependencies = ["Jira"];
