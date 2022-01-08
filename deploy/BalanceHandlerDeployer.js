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

    const BalanceHandlerContract = await ethers.getContractFactory("BalanceHandler")
    const balanceHandlerContract = await BalanceHandlerContract.deploy()
    await balanceHandlerContract.deployed()

    log(`Contract has been deployed at the address ${balanceHandlerContract.address}`)

    let balance_BN = await balanceHandlerContract.checkBalance("0x451A3C5ae32A0800Ef2668Ceb07DFC294fd43775");
    let balance = balance_BN.toNumber()

    console.log(`User has a balance of ${balance}`)

    await balanceHandlerContract.rewardStudent("0x451A3C5ae32A0800Ef2668Ceb07DFC294fd43775", 100);

    console.log(`Money is sent`)

}
module.exports.tags = ['all', 'svg']