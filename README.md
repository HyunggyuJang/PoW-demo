## What is it?

To solve a PoW puzzle. Score is the number of leading 0s of the sha256 hash of the message (in the source code, it is set to `'<YourMessage'>`) and the nonce. You can only change the nonce during the game, the message should be set before you start.

## How to run?

To execute it, you should first install ts-node:

``` sh
npm install ts-node -g
```

Then, run it with

``` sh
ts-node pow.ts
```

at the root directory (where this repo placed in your machine).

## Places can be improved

- Use async process
  Currently it uses synchronous process, but, it can be run parallel

In real world mining machine, they optimized this point to the extreme, by using dedicated GPU, etc.
