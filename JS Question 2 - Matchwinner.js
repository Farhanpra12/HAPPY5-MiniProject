const matchList = [
    ["mu", "city"],
    ["munchen", "mu"],
    ["city", "munchen"]
  ]
  
  const resultMatch = [1, 0, 1]
  
  const generateWinner = () => {
    const scoreBoard = {};
    matchList.forEach((match, i) => {
      const macthWinner = resultMatch[i];
      const winningTeam = match[macthWinner];
  
      if (scoreBoard[winningTeam] >= 3) {
        scoreBoard[winningTeam] += 3;
      } else {
        scoreBoard[winningTeam] = 3;
      }
    });
  
    let score = 0;
    let team = "";
    Object.keys(scoreBoard).forEach((t, i) => {
      if (scoreBoard[t] >= score) {
        score = scoreBoard[t];
        team = t;
      }
    });
  
    return team;
  }
  
  const winner = generateWinner()
  
  console.log(winner)