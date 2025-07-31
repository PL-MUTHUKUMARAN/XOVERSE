const texts = [];
const rects = [];

let startPlayer = localStorage.getItem("startingPlayer") || "X";
localStorage.setItem("startingPlayer", startPlayer === "X" ? "O" : "X");
let playerScore = localStorage.getItem("playerScore") || "0";
let computerScore = localStorage.getItem("computerScore") || "0";
let tieScore = localStorage.getItem("tieScore") || "0";
document.getElementById("playerScore").textContent = playerScore;
document.getElementById("computerScore").textContent = computerScore;
document.getElementById("tieScore").textContent = tieScore;

let winner = "";
let isGameOver = false;

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const corners = [1, 3, 7, 9];
const center = 5;
const edges = [2, 4, 6, 8];

function checkWinner() {
  for (const [a, b, c] of wins) {
    if (
      texts[a].textContent !== "" &&
      texts[a].textContent === texts[b].textContent &&
      texts[b].textContent === texts[c].textContent
    ) {
      isGameOver = true;
      const sfx = document.getElementById("sfxGameOver");
      sfx.currentTime = 0.4;
      sfx.play();
      winner = texts[a].textContent;
      if (winner == "X") {
        playerScore++;
        localStorage.setItem("playerScore", playerScore);
        document.getElementById("playerScore").textContent = playerScore;
      } else {
        computerScore++;
        localStorage.setItem("computerScore", computerScore);
        document.getElementById("computerScore").textContent = computerScore;
      }
      for (let i = 1; i <= 12; i++) {
        const content = i % 2 === 0 ? winner : "";
        setTimeout(() => {
          texts[a].textContent = content;
          texts[b].textContent = content;
          texts[c].textContent = content;
        }, 100 * i);
      }
      for (let i = 1; i <= 9; i++) {
        setTimeout(() => {
          texts[i].textContent = "";
          rects[i].style.display = "none";
        }, 1400);
      }
      setTimeout(() => {
        document.getElementById("resultText").textContent = winner + " - WIN!";
        document.getElementById("resultCard").style.display = "flex";
      }, 1600);
      return;
    }
  }

  const allFilled = [1, 2, 3, 4, 5, 6, 7, 8, 9].every(
    (i) => texts[i].textContent !== ""
  );
  if (allFilled && winner === "") {
    tieScore++;
    localStorage.setItem("tieScore", tieScore);
    document.getElementById("tieScore").textContent = tieScore;
    isGameOver = true;
    const sfxDraw = document.getElementById("sfxDraw");
    sfxDraw.currentTime = 0;
    sfxDraw.play();
    setTimeout(() => {
      for (let i = 1; i <= 9; i++) {
        texts[i].textContent = "";
        rects[i].style.display = "none";
      }
      document.getElementById("resultText").textContent = "DRAW!";
      document.getElementById("resultCard").style.display = "flex";
    }, 500);
  }
}

function player1Turn() {
  for (let i = 1; i <= 9; i++) {
    rects[i] = document.getElementById("r" + i);
    texts[i] = document.getElementById("t" + i);
    rects[i].addEventListener("click", () => {
      if (texts[i].textContent === "" && !isGameOver) {
        const sfxText = document.getElementById("sfxText");
        sfxText.currentTime = 0.25;
        sfxText.play();
        texts[i].textContent = "X";
        checkWinner();
        if (winner === "") {
          setTimeout(player2Turn, 300);
        }
      }
    });
  }
}

function tryMove(a, b, c, symbol) {
  if (
    texts[a].textContent === symbol &&
    texts[b].textContent === symbol &&
    texts[c].textContent === ""
  ) {
    texts[c].textContent = "O";
    checkWinner();
    return true;
  }
  if (
    texts[a].textContent === symbol &&
    texts[b].textContent === "" &&
    texts[c].textContent === symbol
  ) {
    texts[b].textContent = "O";
    checkWinner();
    return true;
  }
  if (
    texts[a].textContent === "" &&
    texts[b].textContent === symbol &&
    texts[c].textContent === symbol
  ) {
    texts[a].textContent = "O";
    checkWinner();
    return true;
  }
  return false;
}

function player2Turn() {
  if (isGameOver) return;
  const sfxText = document.getElementById("sfxText");
  sfxText.currentTime = 0.25;
  sfxText.play();

  for (const [a, b, c] of wins) if (tryMove(a, b, c, "O")) return;
  for (const [a, b, c] of wins) if (tryMove(a, b, c, "X")) return;

  if (texts[center].textContent === "") {
    texts[center].textContent = "O";
    checkWinner();
    return;
  }

  const emptyCorners = corners.filter((i) => texts[i].textContent === "");
  if (texts[center].textContent === "X" && emptyCorners.length > 0) {
    const cornerChoice =
      emptyCorners[Math.floor(Math.random() * emptyCorners.length)];
    texts[cornerChoice].textContent = "O";
    checkWinner();
    return;
  }

  const emptyCenters = edges.filter((i) => texts[i].textContent === "");
  if (texts[center].textContent === "O" && emptyCenters.length > 0) {
    const edgeChoice = emptyCenters[Math.floor(Math.random() * emptyCenters.length)];
    texts[edgeChoice].textContent = "O";
    checkWinner();
    return;
  }

  for (let i = 1; i <= 9; i++) {
    if (texts[i].textContent === "") {
      texts[i].textContent = "O";
      checkWinner();
      return;
    }
  }
}

function randomOStart() {
  const box = [1, 3, 5, 7, 9];
  const pos = box[Math.floor(Math.random() * box.length)];
  texts[pos].textContent = "O";
  checkWinner();
}

player1Turn();
if (startPlayer === "O") {
  setTimeout(randomOStart, 100);
}
