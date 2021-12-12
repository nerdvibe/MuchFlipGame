import inquirer from "inquirer";

export interface Answer {
  selected: string;
}

export const interactivePrompt = async () => {
  const userPick = await inquirer.prompt({
    type: "rawlist",
    name: "selected",
    message: "Which side of the coin will you pick?",
    choices: ["Heads", "Tails"],
  });
  return (userPick as any as Answer).selected === "Heads";
}

export const delay = async() => new Promise((res) => setTimeout(res, 300))
