
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const jira = await ethers.getContract("Jira");

    await deploy("JiraRewardPool", {
        from: deployer,
        args: [jira.address, 1637535600], // Should be 1 day after Genesis pool starts
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["JiraRewardPool", "Step3"];
//module.exports.dependencies = ["Jira"];
