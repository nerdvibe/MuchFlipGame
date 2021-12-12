import { shutdown } from "snarkyjs";
import { banner, youLost, youWon } from "./lib/banner";
import { interactivePrompt } from "./lib/lib";
import {
  createRound,
  deployContract,
  submitGuess,
  initChain,
} from "./snapp/helpers";

const startGame = async () => {
  let level = 1;
  let playing = true;
  const { account1, account2, snappPubkey } = await initChain();

  const snappInstance = await deployContract(account1, account2, snappPubkey);

  while (playing) {
    await createRound(account1, snappInstance);

    const userPick = await interactivePrompt();

    try {
      await submitGuess(account1, snappInstance, userPick);
      await youWon(userPick);
      level = level + 1;
    } catch {
      youLost(level);
      playing = false;
    }
  }
};

banner();
startGame();
shutdown();
