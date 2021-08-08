const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/476e7137ecf94e0da1e0090f792faa33');
const signer = provider.getSigner();

// Signer Methods
async function connectWallet() {
    await signer.connect(provider);
}

async function transact() {
    await signer.call();
}

async function sign() {
    await signer.signTransaction();

}

async function send() {
    await signer.sendTransaction();
}

//Account Methods
async function accountBalance() {
    const resolver = await provider.getResolver("ricmoo.eth");
    let address = await resolver.getAddress();
   let balance = ethers.utils.formatEther(
        await provider.getBalance(address,"latest"))
        console.log(balance)
    }