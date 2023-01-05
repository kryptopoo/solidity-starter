# Solidity Starter

A project template to start developing solidity smart contracts with "full options" :)

## Features
- [Hardhat](https://hardhat.org/) to compile, test and deploy smart contracts
- Hardhat plugins: `solhint`, `solidity-coverage`,  `hardhat-contract-sizer`, `hardhat-gas-reporter`, `hardhat-abi-exporter`
- [OpenZeppelin smart contract](https://github.com/OpenZeppelin/openzeppelin-contracts) 
- [OpenZeppelin Upgradable smart contract](https://github.com/OpenZeppelin/openzeppelin-upgrades) 
- Unit testing: [Mocha](https://mochajs.org/), [chaijs](https://www.chaijs.com/)
- [Ethers](https://docs.ethers.org/v5/) for interacting with the Ethereum Blockchain
- Coding format: Prettier 


## Installation

1. Install packages `npm install`
2. Copy and update  `.env.example` into `.env`

## Getting Start

### Compile
```
npx hardhat compile
```

To force a compilation you can use the `--force` argument, or run `npx hardhat clean` to clear the cache and delete the artifacts.

### Test
```
npx hardhat test
```

### Test coverage
```
npx hardhat coverage
```

### Contract size
```
npx hardhat size-contracts
```

### Contract check
```
npx hardhat check
```

### Correct coding format
```
npm run prettier
```

### Deploy contract
```
npx hardhat run scripts/deploy.js --network <network-name>
```

### Verify contract
```
npx hardhat verify --network <network-name> <address> 
```

