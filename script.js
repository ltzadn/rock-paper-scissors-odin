const score = {
  computer: 0,
  user: 0,
};

console.log('To play a game you have to pick your choose your sign!');

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
    return (alert("It's a tie!"), console.log(`Score: You: ${score.user} | Computer: ${score.computer}`));
  }

  if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    score.user++;
    return alert('User wins.');
  } else {
    score.computer++;
    alert('Computer wins.');
  }

  console.log(`Score: You: ${score.user} | Computer: ${score.computer}`);
};
