let { networkConfig } = require('../hardhat-helper-config')
const fs = require('fs')

require("dotenv").config();

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer, account_1, account_2 } = await getNamedAccounts()
    const chainId = await getChainId()

    const accounts = await hre.ethers.getSigners()
    const signer = accounts[0]

    const FQONE_TOKEN = process.env.FQONE_TOKEN;
    const BLUEBLOCK_TOKEN = process.env.BLUEBLOCK_TOKEN;

    log("----------------------------------------------------")

    console.log(FQONE_TOKEN)

    const SwapperContract = await ethers.getContractFactory("swapper")
    const swapperContract = await SwapperContract.deploy()
    await swapperContract.deployed()

    log(`Contract has been deployed at the address ${swapperContract.address}`)

    const amountToBeSwapped = 1000 * 10^18;
    let swap = await swapperContract.SwapTokens(FQONE_TOKEN, BLUEBLOCK_TOKEN, amountToBeSwapped);

    console.log(`Swap has been performed`)

}
module.exports.tags = ['all', 'svg']