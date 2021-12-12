import {
  PrivateKey,
  PublicKey,
  method,
  UInt64,
  Mina,
  Party,
  isReady,
  Bool,
} from 'snarkyjs';
import { MuchFlipContract } from './contract';

export const initChain = async() => {
  await isReady;
  const Local = Mina.LocalBlockchain();
  Mina.setActiveInstance(Local);
  const account1 = Local.testAccounts[0].privateKey;
  const account2 = Local.testAccounts[1].privateKey;

  const snappPrivkey = PrivateKey.random();
  const snappPubkey = snappPrivkey.toPublicKey();

  return {
    account1,
    account2,
    snappPubkey
  }
}

export const deployContract = async (
  account1: PrivateKey,
  account2: PrivateKey,
  snappPubkey: PublicKey
) => {

  const initSnappState = new Bool(false);
  let snappInstance: any;

  await Mina.transaction(account1, async () => {
    const amount = UInt64.fromNumber(1000000000);
    const p = await Party.createSigned(account2);
    p.balance.subInPlace(amount);

    snappInstance = new MuchFlipContract(
      amount,
      snappPubkey,
      initSnappState as any
    );
  })
    .send()
    .wait();

  return snappInstance;
};

export const createRound = async (
  account1: PrivateKey,
  snappInstance: MuchFlipContract
) => {
  await Mina.transaction(account1, async () => {
    await snappInstance.startRound();
  })
    .send()
    .wait();
};

export const submitGuess = async (
  account1: PrivateKey,
  snappInstance: MuchFlipContract,
  guess: boolean
) => {
  await Mina.transaction(account1, async () => {
    await snappInstance.submitGuess(guess);
  })
    .send()
    .wait()
};
