let turn = localStorage.getItem("startTurn") || "X";
localStorage.setItem("startTurn", turn === "X" ? "O" : "X");
document.getElementById("turnSpan").textContent = turn;

let win = "";
let isGameOver = false;

const texts = [];
const rects = [];

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

function checkWin() {
  for (const [a, b, c] of wins) {
    if (
      texts[a].textContent !== "" &&
      texts[a].textContent === texts[b].textContent &&
      texts[b].textContent === texts[c].textContent
    ) {
      document.getElementById("turnBanner").textContent = "";
      isGameOver = true;

      const sfx = document.getElementById("sfxGameOver");
      sfx.currentTime = 0.4;
      sfx.play();
      win = texts[a].textContent;

      for (let i = 1; i <= 12; i++) {
        const content = i % 2 === 0 ? win : "";
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
        document.getElementById("resultText").textContent = win + " - WIN!";
        document.getElementById("resultCard").style.display = "flex";
      }, 1600);
      return;
    }
  }

  const allFilled = [1, 2, 3, 4, 5, 6, 7, 8, 9].every(
    (i) => texts[i].textContent !== ""
  );
  if (!isGameOver && allFilled && win === "") {
    isGameOver = true;
    const sfxDraw = document.getElementById("sfxDraw");
    sfxDraw.currentTime = 0;
    sfxDraw.play();

    setTimeout(() => {
      for (let i = 1; i <= 9; i++) {
        texts[i].textContent = "";
        rects[i].style.display = "none";
      }
      document.getElementById("turnBanner").textContent = "";
      document.getElementById("resultText").textContent = "DRAW!";
      document.getElementById("resultCard").style.display = "flex";
    }, 300);
  }
}

function player1Turn() {
  for (let i = 1; i <= 9; i++) {
    rects[i] = document.getElementById("r" + i);
    texts[i] = document.getElementById("t" + i);

    rects[i].addEventListener("click", () => {
      if (isGameOver) return;

      const sfxText = document.getElementById("sfxText");
      sfxText.currentTime = 0.25;
      sfxText.play();

      if (texts[i].textContent === "") {
        texts[i].textContent = turn;
        turn = turn === "X" ? "O" : "X";
        document.getElementById("turnSpan").textContent = turn;
        checkWin();
      }
    });
  }
}

player1Turn();
