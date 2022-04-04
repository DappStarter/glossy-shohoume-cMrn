require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name rifle payment unfair hunt problem flock genuine'; 
let testAccounts = [
"0x890871fb5956208629423a2e60f9c71de3b416714313c1e545072162a8c2c30f",
"0xb309020678e285a0d184e3ee793212a31ebe26795a6e1f64a686b16a45d7894d",
"0x3ecbfbe6fb4ee744b623254e79d1e8b1b197b258de56719e4aa3043db0274e62",
"0x853b0aaa78f75c6547e5991773213d1f5423001811e360c8189d995619ccb93c",
"0x2ac7bd369f1ba9b2f183eb1c378e0b830bf597ed0de5c3b3e9418c6811f60833",
"0xe2b922ae30edce82d06b1a56be44c66a2fa7b01a04eb8ce8f910d41e84c1f92f",
"0x7022eef566ad21b9f6ffe2c74bbfda2313309ea9b2a062df2907cd8996cd8ef6",
"0x1016f6f96dcd6e67f255ae723e227a7f099a1870b6507f550c1f5204059ec91b",
"0x140e1f3e8536be06f601f67adb03a546cd2f0cdd8e932847ccdea06f938efee7",
"0x900242f48b5b045a761cc5b4c438eb5f6a420a8ab2e8c0f5d0e7e333b7d9386a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

