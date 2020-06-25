const homePage = () => {
  let pScore = 0;
  let cScore = 0;
  const landingPage = () => {
    const playBtn = document.querySelector(".loading-page button");
    const loadingScreen = document.querySelector(".loading-page");
    const letPlay = document.querySelector(".let-play");

    playBtn.addEventListener("click", () => {
      loadingScreen.classList.remove("fadeIn");
      loadingScreen.classList.add("fadeOut");
      letPlay.classList.remove("fadeOut");
      letPlay.classList.add("fadeIn");
    });
  };

  const playGame = () => {
    const buttons = document.querySelectorAll(".let-play button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".images img");
    // console.log(hands);
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    const computerOutput = ["rock", "paper", "scissors"];
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        let randomNumber = Math.floor(Math.random() * 3);
        let computerChoice = computerOutput[randomNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const title = document.querySelector(".let-play h1");
    if (playerChoice === computerChoice) {
      title.textContent = "Its a tie";
      return;
    }

    if (playerChoice === "rock") {
      if (computerChoice === "paper") {
        title.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        title.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        title.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        title.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        title.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        title.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player h2");
    const computerScore = document.querySelector(".computer h2");

    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  landingPage();
  playGame();
};

homePage();
