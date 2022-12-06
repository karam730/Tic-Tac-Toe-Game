const choices = document.querySelectorAll(".xo");
const choicesBox = document.querySelectorAll(".box");
const btn = document.querySelector("#reset-btn");
const resolte = document.querySelector("#resolte");
let rowsContainerX = [0, 0, 0];
let rowsContainerO = [0, 0, 0];
let columnContainerX = [0, 0, 0];
let columnContainerO = [0, 0, 0];
let diagonalContainerX = [0, 0, 0];
let diagonalContainerO = [0, 0, 0];
let oppositeDiagonalContainerX = [0, 0, 0];
let oppositeDiagonalContainerO = [0, 0, 0];
let lastChois;

choicesBox.forEach((box) =>
  box.addEventListener("click", (e) => {
    if (!e.target.innerText && !resolte.innerText) {
      addXO(e.target);
      lastChois = e.target.innerText;
      let rowNum = e.target.getAttribute("data-row");
      let columnNum = e.target.getAttribute("data-column");
      rowWinner(rowNum, lastChois);
      columnWinner(columnNum, lastChois);
      diagonalWinner(rowNum, columnNum, lastChois);
      oppositeDiagonalWinner(rowNum, columnNum, lastChois);
      tie()
    }
  })
);

function rowWinner(rowNumper, value) {
  if (value === "X") {
    rowsContainerX[rowNumper] += 1;
  }
  if (value === "O") {
    rowsContainerO[rowNumper] += 1;
  }
  if (rowsContainerO[rowNumper] === 3 || rowsContainerX[rowNumper] === 3) {
    resolte.innerText = `Player ${value} won`;
  }
}
function columnWinner(columnNumper, value) {
  if (value === "X") {
    columnContainerX[columnNumper] += 1;
  }
  if (value === "O") {
    columnContainerO[columnNumper] += 1;
  }
  if (
    columnContainerX[columnNumper] === 3 ||
    columnContainerO[columnNumper] === 3
  ) {
    resolte.innerText = `Player ${value} won`;
  }
}

function diagonalWinner(rowNumper, columnNumper, value) {
  if (rowNumper === columnNumper && value === "X") {
    diagonalContainerX[rowNumper] += 1;
  }
  if (rowNumper === columnNumper && value === "O") {
    diagonalContainerO[rowNumper] += 1;
  }
  if (
    diagonalContainerO.reduce((pre, cur) => pre + cur) === 3 ||
    diagonalContainerX.reduce((pre, cur) => pre + cur) === 3
  ) {
    resolte.innerText = `Player ${value} won`;
  }
}
function oppositeDiagonalWinner(rowNumper, columnNumper, value) {
  
  if (+rowNumper + +columnNumper === 2 && value === "X") {
    oppositeDiagonalContainerX[rowNumper] += 1;
  }
  if (+rowNumper + +columnNumper === 2 && value === "O") {
    oppositeDiagonalContainerO[rowNumper] += 1;
  }
  if (
    oppositeDiagonalContainerX.reduce((pre, cur) => pre + cur) === 3 ||
    oppositeDiagonalContainerO.reduce((pre, cur) => pre + cur) === 3
  ) {
    resolte.innerText = `Player ${value} won`;
  }
}

function addXO(box) {
  if (lastChois === "X") {
    box.firstElementChild.innerText = "O";
  } else {
    box.firstElementChild.innerText = "X";
  }
}

function tie() {
  if (
        (choices[0].innerText && !resolte.innerText)
      && (choices[1].innerText && !resolte.innerText)
      && (choices[2].innerText && !resolte.innerText)
      && (choices[3].innerText && !resolte.innerText)
      && (choices[4].innerText && !resolte.innerText)
      && (choices[5].innerText && !resolte.innerText)
      && (choices[6].innerText && !resolte.innerText)
      && (choices[7].innerText && !resolte.innerText)
      && (choices[8].innerText && !resolte.innerText)
      ) {
    resolte.innerText = "Tie";
  }
}

btn.addEventListener("click", (e) => {
  choices.forEach((choice) => {
    choice.innerText = "";
  });
  resolte.innerText = "";
  lastChois = "";
  rowsContainerX = [0, 0, 0];
  rowsContainerO = [0, 0, 0];
  columnContainerX = [0, 0, 0];
  columnContainerO = [0, 0, 0];
  diagonalContainerX = [0, 0, 0];
  diagonalContainerO = [0, 0, 0];
  oppositeDiagonalContainerX = [0, 0, 0];
  oppositeDiagonalContainerO = [0, 0, 0];
});

