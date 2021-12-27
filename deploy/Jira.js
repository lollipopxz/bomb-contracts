
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    await deploy("Jira", {
        from: deployer,
        args: [0, dev],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["Jira", "Step1"];