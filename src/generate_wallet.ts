// This code is designed to assist you understand the concept of solana wallet functionality

import { Keypair, PublicKey } from '@solana/web3.js';

// Generate a new Solana wallet (keypair)
const wallet = Keypair.generate();
console.log("Loading new wallet...");

console.log(`You've generated a new Solana wallet: ${wallet.publicKey.toBase58()}

To save your wallet, copy and paste the following into dev-wallet.json file:

[${wallet.secretKey}]`)

// run the following command to get the required file
// > touch dev-wallet.json


// console.log("run > 'touch dev-wallet.json' in your terminal to create the json file");
// Loading new wallet...
// You've generated a new Solana wallet: 4FLbueqNJa98pakLayPjZ6XSbWt7hF8cKmxFBZKeNmZp

// To save your wallet, copy and paste the following into dev-wallet.json file:

// [94,81,39,202,131,31,228,129,112,181,236,54,93,141,224,141,35,152,240,63,93,225,108,212,41,136,202,68,254,16,20,116,48,63,91,34,180,6,102,205,196,222,124,137,7,184,165,210,21,87,7,244,174,4,53,115,74,50,209,12,15,233,28,119]
// run > 'touch dev-wallet.json' in your terminal to create the json file

