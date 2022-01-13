let { networkConfig } = require('../hardhat-helper-config')
const fs = require('fs')

module.exports = async ({
    getNamedAccounts,
    deployments,
    getChainId
}) => {

    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = await getChainId()

    log("----------------------------------------------------")

    const ManualNFTContract = await ethers.getContractFactory("manualNFT")
    const manualNFTContract = await ManualNFTContract.deploy({
        gasLimit: 250000
    })
    await manualNFTContract.deployed()

    log(`You have deployed an NFT contract to ${manualNFTContract.address}`)

    log(`Verify with:\n npx hardhat verify --network ropsten ${manualNFTContract.address}`)
    log("Let's create an NFT now!")

    // let filepath = "./media/small.svg"
    // let svg = fs.readFileSync(filepath, { encoding: "utf8" })
    // log(`We will use ${filepath} as our SVG, and this will turn into a tokenURI. `)

    // tx = await manualNFTContract.create(svg)

    // log(`You've made your first NFT!`)
    // log(`You can view the tokenURI here ${await manualNFTContract.tokenURI(0)}`)
}

module.exports.tags = ['all', 'svg']