const playGame = (numberOfRounds) => {
  // wyświetlanie wyniku
  //

  console.log('To play a game you have to pick your choose your sign!');

  const gameData = {
    roundNumber: 0,
    computerScore: 0,
    userScore: 0,
  };
  const roundsThreshold = numberOfRounds / 2;

  const shouldPlayNextRound = () => {
    return (
      gameData.userScore <= roundsThreshold &&
      gameData.computerScore <= roundsThreshold &&
      gameData.roundNumber !== numberOfRounds
    );
  };

  const scoreCheck = () => {
    if (gameData.userScore === gameData.computerScore) {
      return console.log("It's a tie");
    }

    console.log(`Score => User:${gameData.userScore} | Computer: ${gameData.computerScore}`);
    return gameData.userScore > gameData.computerScore ? console.log('User wins!') : console.log('Computer wins');
  };

  const playRound = () => {
    const getHumanChoice = () => {
      let userChoice = prompt('Type your choice: "Rock", "Paper", "Scissors".');
      userChoice = userChoice.toLocaleLowerCase();
      if (!userChoice) return null;
      if (!['rock', 'paper', 'scissors'].includes(userChoice)) {
        return console.log('Sign that u picked is invalid, please try again.');
      }

      return userChoice;
    };

    const getComputerChoice = () => {
      let computerChoice = Math.floor(Math.random() * 3);
      switch (computerChoice) {
        case 0:
          console.log('Computer picked rock');
          return 'rock';
        case 1:
          console.log('Computer picked paper');
          return 'paper';
        case 2:
          console.log('Computer picked scissors');
          return 'scissors';
      }
    };

    const userChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
      const { userScore, computerScore } = gameData;
      alert("It's a tie");
      console.log(`Score => User:${userScore} | Computer: ${computerScore}`);
      playRound();
      return;
    }

    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      gameData.userScore++;
    } else {
      gameData.computerScore++;
    }
  };

  while (shouldPlayNextRound()) {
    gameData.roundNumber++;
    console.log(`Score => User:${gameData.userScore} | Computer: ${gameData.computerScore}`);
    playRound();
  }

  scoreCheck();
};
