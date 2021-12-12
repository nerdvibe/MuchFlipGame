# Much Flip Game using SnarkyJS

<p align="center"> 
<img height="300" src="https://i.ibb.co/NC249nx/muchflipbanner2.png">
</p>
Much Flip Coin is a very hard game built with SnarkyJS. You'll have to guess what your computer thinks and you'll have to defeat it 🧙‍♀️

## Motivation
SnarkyJS from Mina Protocol is here. The first version is out and ready to be explored. With this repository I wanted to create an engaging and fun experience to geting started with SnarkyJS. The logic of the game is very simple. The game is played in rounds, at the beginning of each round the code picks a "Heads" or "Tails", you as a player, you'll have to guess what the the code picked.

## How it works under the hood

The game-logic is simple. The user starts the game, the game deploys the contract, the app sets the winning side with a transaction and then the user sends a transaction with the guessed side. 
Technically the project is divided in two parts. The "smart contract" logic in the folder `src/snapp` and the "rest of the logic/UI" in the `src/lib`. Obviously the interesting part lays in the folder `snapp`.

In the `snapp` folder there are two files:
- `contract.ts`
- `helpers.ts`

The `contract.ts` is the actual contract which hosts two methods `startRound()` and `submitGuess()`.
The `helpers.ts` are all the helpers to invoke the contract methods (e.g. variables casting, validation etc.).

## Getting started:
Much Flip Game is an interactive game. You can start the game by following these commands:
```
npm install
npm start
```

## Todos

To make this repository a good starting point for new commers, it requires:
- Comments in the code
- Prettier & co.

### Ideas for next version
- Implement the scores as transaction
