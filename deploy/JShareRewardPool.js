
module.exports = async function ({
    getNamedAccounts,
    deployments,
}) {
    const { deploy } = deployments;

    const { deployer, dev } = await getNamedAccounts();

    const jshare = await ethers.getContract("JShare");

    await deploy("JShareRewardPool", {
        from: deployer,
        args: [jshare.address, 1637881200], // 6 days after genesis
        log: true,
        deterministicDeployment: false,
    });
};

module.exports.tags = ["JShareRewardPool"];
// module.exports.dependencies = ["JShare"];
