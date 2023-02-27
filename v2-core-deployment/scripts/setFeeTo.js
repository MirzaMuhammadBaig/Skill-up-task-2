const { ethers } = require("ethers");
require("dotenv").config();
const { API_URL_INFURA, PRIVATE_KEY, uniswapV2FactoryAddress, PUBLIC_KEY} = process.env;

// set up provider and signer
const provider = new ethers.providers.JsonRpcProvider(API_URL_INFURA);
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// set up contract interface
const uniswapV2FactoryABI = require("../artifacts/contracts/UniswapV2Factory.sol/UniswapV2Factory.json");
const uniswapV2FactoryContract = new ethers.Contract(uniswapV2FactoryAddress, uniswapV2FactoryABI.abi, signer);

// call setFeeTo function
const feeToAddress = PUBLIC_KEY; // example feeTo address

async function setFeeTo() {
    const tx = await uniswapV2FactoryContract.setFeeTo(feeToAddress, {gasLimit:1000000});
    console.log("Transaction hash:", tx.hash);
    // Transaction hash: 0x34dd41e73eae170321e0147a19df8b5673233f2bb0ff24d609c2fffdcd07d340
};
setFeeTo();
