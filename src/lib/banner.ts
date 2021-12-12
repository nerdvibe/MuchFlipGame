import { delay } from "./lib";

export const banner = () => {
  console.log(`
  
                      ████████████          
                  ████░░░░░░░░░░░░████      
                ██░░░░▒▒▒▒▒▒▒▒▒▒▒▒░░░░██    
              ██░░░░▒▒░░░░░░░░░░░░░░░░░░██  
              ██░░▒▒░░░░      ░░░░░░  ░░██  
            ██░░▒▒░░░░░░  ░░░░▒▒░░░░░░  ░░██
            ██░░▒▒░░      ░░░░░░  ░░░░  ░░██
            ██░░▒▒░░  ░░░░░░░░░░░░▒▒░░  ░░██
            ██░░▒▒░░  ░░░░░░░░░░░░▒▒░░  ░░██
            ██░░▒▒░░░░▒▒░░░░░░▒▒▒▒▒▒░░  ░░██
            ██░░▒▒░░░░░░  ░░░░▒▒░░░░░░  ░░██
              ██░░▒▒░░░░░░▒▒▒▒▒▒░░░░  ░░██  
              ██░░░░░░░░░░░░░░░░░░  ░░░░██  
                ██░░░░            ░░░░██    
                  ████░░░░░░░░░░░░████      
                      ████████████               

                      
             Much Flip Game using SnarkyJS 
            - a tiny game by WeStake.Club ⚡️ -
 
  `);
};

export const youWon = async (result: boolean) => {
  console.log("");
  await delay();
  console.log(
    "\x1b[1m",
    `... Congrats! The result is ${result ? "Heads" : "Tails"}!

  `
  );
};

export const youLost = (level: number) => {
  console.log(`
 
                                                                                        
            ██              ██                                  
              ██          ██                                    
                ██      ██                                      
              ████      ████                                    
              ████      ████                                    
                                                                
                  ██████                                        
                ██      ██                                      
                                                                                        
    Oh no! you lost and your level was ${level}. 
    Play another game to beat your score!

    
  `);
};
