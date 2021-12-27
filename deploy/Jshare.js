
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev, community_fund } = await getNamedAccounts();

    await deploy("JShare", {
        from: deployer,
        args: [1638334800, dev, community_fund],
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["JShare","Step1"];