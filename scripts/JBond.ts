// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import {ethers} from 'hardhat';
require('dotenv').config({path: '../.env'});


async function main() {
    const deployer_factory = process.env.DEPLOYER;
    const dev = process.env.DEV;

    const [deployer] = await ethers.getSigners();

    console.log('Account balance:', (await deployer.getBalance()).toString());
    console.log('Deploying contracts with the account:', deployer.address);

    const JBond = await ethers.getContractFactory('JBond');
    const contract_JBond = await JBond.deploy();

    console.log('Contract Address:', contract_JBond.address);
    console.log('TX Hash:', contract_JBond.deployTransaction.hash);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
