# Bitnation Holon DAO — Bytecode Verification

**Contract address:** `0x5aaeb6053f3e94c9b9a09f33669435e7ef1beaed`  
**Deployed:** Feb 17, 2016 (block 1,019,844)  
**Deployer:** `0xd1220a0cf47c7b9be7a2e6ba89f429762e7b9adb` (alex.vandesande.eth)  
**Compiler:** Solidity v0.2.2 (optimizer enabled)  
**Match:** Exact (0 byte differences)  

## Source

[`holon.sol`](holon.sol) — Bitnation Holon DAO contract, first proposal contract for the Bitnation DAO seed.

The source was reconstructed by matching the original bytecode exactly. Key discovery: in Solidity 0.2.2, state variable auto-getter continuations are queued at their **source declaration position**, not at the top of the contract. The `string public constitutionLink` variable must be declared between `updateConstitutionLink` and `changeMembership` to produce the correct continuation order.

## Verification

```bash
npm install solc@0.2.2
node verify.js
```

## Links

- [EthereumHistory.com](https://ethereumhistory.com/contract/0x5aaeb6053f3e94c9b9a09f33669435e7ef1beaed)
- [Etherscan](https://etherscan.io/address/0x5aaeb6053f3e94c9b9a09f33669435e7ef1beaed)
