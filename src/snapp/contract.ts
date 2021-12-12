import {
  Field,
  PublicKey,
  SmartContract,
  state,
  State,
  method,
  UInt64,
  Bool,
} from 'snarkyjs';

export class MuchFlipContract extends SmartContract {
  @state(Field) value: State<Bool>;

  constructor(initialBalance: UInt64, address: PublicKey, x: Field) {
    super(address);
    this.balance.addInPlace(initialBalance);
    this.value = State.init(new Bool(false));
  }

  @method async startRound() {
    const winningSide = Math.random() < 0.5;
    this.value.set(new Bool(winningSide));
  }

  @method async submitGuess(guess: boolean) {
    const guessField = new Bool(guess);
    const result = await this.value.get();
    result.assertEquals(guessField);
  }
}
