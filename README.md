
```

  npx hardhat test


  AucEngine
0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
    √ sets owner
    createsAuction
[
  '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  BigNumber { value: "100000000000000" },
  BigNumber { value: "100000000000000" },
  BigNumber { value: "1666877180" },
  BigNumber { value: "1666877240" },
  BigNumber { value: "3" },
  'fake item',
  false,
  seller: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
  startingPrice: BigNumber { value: "100000000000000" },
  finalPrice: BigNumber { value: "100000000000000" },
  startAt: BigNumber { value: "1666877180" },
  endsAt: BigNumber { value: "1666877240" },
  discountRate: BigNumber { value: "3" },
  item: 'fake item',
  stopped: false
]
      √ create auction correctly (79ms)
    buy
      1) alllows to buy


  2 passing (3s)
  1 failing

  1) AucEngine
       buy
         alllows to buy:
     AssertionError: Expected the ether balance of "0x70997970C51812dc3A010C7d01b50e0d17dc79C8" to change by 90000000000000 wei, but it changed by 89999999999998 wei
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
      at runNextTicks (node:internal/process/task_queues:65:3)
      at listOnTimeout (node:internal/timers:528:9)
      at processTimers (node:internal/timers:502:7)
      at Context.<anonymous> (test\AucEngine-test.js:74:13)

```
