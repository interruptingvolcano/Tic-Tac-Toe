const game = (function() {

  // Cache DOM
  const grid = document.querySelector('.grid');
  const topLeft = document.querySelector('.top-left');
  const midTop = document.querySelector('.mid-top');
  const topRight = document.querySelector('.top-right');
  const midLeft = document.querySelector('.mid-left');
  const center = document.querySelector('.center');
  const midRight = document.querySelector('.mid-right');
  const bottomLeft = document.querySelector('.bottom-left');
  const midBottom = document.querySelector('.mid-bottom'
  );
  const bottomRight = document.querySelector('.bottom-right');
  const playerPromptContainer = document.querySelector('.player-prompt-container')
  const playerXPrompt = document.querySelector('.playerX-prompt');
  const playerOPrompt = document.querySelector('.playerO-prompt');
  const instructions = document.querySelector('.instructions');
  let value = 0;

  let gameBoard = [
      topLeft,
      midTop,
      topRight,
      midLeft,
      center,
      midRight,
      bottomLeft,
      midBottom,
      bottomRight,
  ];

  let X_left = [];
  let X_right = [];
  let X_vMiddle = [];
  let X_hMiddle = [];
  let X_top = [];
  let X_bottom = [];
  let X_tLeftDiagonal = [];
  let X_tRightDiagonal = [];

  let O_left = [];
  let O_right = [];
  let O_vMiddle = [];
  let O_hMiddle = [];
  let O_top = [];
  let O_bottom = [];
  let O_tLeftDiagonal = [];
  let O_tRightDiagonal = [];

  let playChoice = [];
  let xWins = [];
  let oWins = [];
 
  // players
  const Players = (name, key) => {
    renderGame(key);
    return {name}
  };

  function checkGame() {

    if (X_left.length === 3 || X_right.length === 3 || X_vMiddle.length === 3 ||
    X_hMiddle.length === 3 ||
    X_top.length === 3 ||
    X_bottom.length === 3 ||
    X_tLeftDiagonal.length === 3 || X_tRightDiagonal.length === 3) {
      playerOPrompt.classList.add('hide');
      playerXPrompt.classList.add('hide');
      instructions.classList.add('hide');
      playerPromptContainer.innerText = 'Game Over, player X wins!!';
      xWins.push(1);
      return;
    };
    if (O_left.length === 3 || O_right.length === 3 || O_vMiddle.length === 3 ||
      O_hMiddle.length === 3 ||
      O_top.length === 3 ||
      O_bottom.length === 3 ||
      O_tLeftDiagonal.length === 3 || O_tRightDiagonal.length === 3) {
        playerOPrompt.classList.add('hide');
        playerXPrompt.classList.add('hide');
        instructions.classList.add('hide');
        playerPromptContainer.innerText = 'Game Over, player O wins!!';
        oWins.push(1);
      };
  };
  
  // binder

  gameBoard.forEach((target) => {
    target.addEventListener('click', () => {
      if (xWins.length > 0 || oWins.length > 0 ||           playerPromptContainer.innerText === 'Game Over, it\'s a tie!!'
      ) {
        return;
      }
      let boxTarget = target;
      if (playChoice.length === 0 || playChoice.length % 2 === 0) {
        let boxInput = document.createElement('span');
        boxTarget.append(boxInput);
        boxInput.innerHTML = 'X';
        boxInput.style.color = 'green';
        playChoice.push('X');
        target = 'X';
        if (boxTarget.className === 'top-left') {
          X_left.push(target) && X_top.push(target) &&
          X_tLeftDiagonal.push(target);
        };
        if (boxTarget.className === 'mid-top') {
          X_vMiddle.push(target);
          X_top.push(target);
        };
        if (boxTarget.className === 'top-right') {
          X_right.push(target);
          X_top.push(target);
          X_tRightDiagonal.push(target);
        };
        if (boxTarget.className === 'mid-left') {
          X_left.push(target);
          X_hMiddle.push(target);
        };
        if (boxTarget.className === 'center') {
          X_vMiddle.push(target);
          X_hMiddle.push(target);
          X_tLeftDiagonal.push(target);
          X_tRightDiagonal.push(target);
        };
        if (boxTarget.className === 'mid-right') {
          X_right.push(target);
          X_hMiddle.push(target);
        };
        if (boxTarget.className === 'bottom-left') {
          X_left.push(target);
          X_bottom.push(target);
          X_tRightDiagonal.push(target);
        };
        if (boxTarget.className === 'mid-bottom') {
          X_vMiddle.push(target);
          X_bottom.push(target);
        };
        if (boxTarget.className === 'bottom-right') {
          X_right.push(target);
          X_bottom.push(target);
          X_tLeftDiagonal.push(target);
        };

        checkGame();

        // check for tie
        if (playChoice.length === 9 && xWins.length === 0 && oWins.length === 0) {
          playerXPrompt.classList.add('hide');
          playerOPrompt.classList.add('hide');
          instructions.classList.add('hide');
          playerPromptContainer.innerText = 'Game Over, it\'s a tie!!';        
        };
        
        playerXPrompt.classList.add('hide');
        playerOPrompt.classList.remove('hide');

      } else {
        let boxInput = document.createElement('span');
        boxTarget.append(boxInput);
        boxInput.innerHTML = 'O';
        boxInput.style.color = url = 'rgb(200, 91, 7)';
        playChoice.push('O');
        target = 'O';
        if (boxTarget.className === 'top-left') {
          O_left.push(target) && O_top.push(target) &&
          O_tLeftDiagonal.push(target);
        };
        if (boxTarget.className === 'mid-top') {
          O_vMiddle.push(target);
          O_top.push(target);
        };
        if (boxTarget.className === 'top-right') {
          O_right.push(target);
          O_top.push(target);
          O_tRightDiagonal.push(target);
        };
        if (boxTarget.className === 'mid-left') {
          O_left.push(target);
          O_hMiddle.push(target);
        };
        if (boxTarget.className === 'center') {
          O_vMiddle.push(target);
          O_hMiddle.push(target);
          O_tLeftDiagonal.push(target);
          O_tRightDiagonal.push(target);
        };
        if (boxTarget.className === 'mid-right') {
          O_right.push(target);
          O_hMiddle.push(target);
        };
        if (boxTarget.className === 'bottom-left') {
          O_left.push(target);
          O_bottom.push(target);
          O_tRightDiagonal.push(target);
        };
        if (boxTarget.className === 'mid-bottom') {
          O_vMiddle.push(target);
          O_bottom.push(target);
        };
        if (boxTarget.className === 'bottom-right') {
          O_right.push(target);
          O_bottom.push(target);
          O_tLeftDiagonal.push(target);
        };

        checkGame();

        playerOPrompt.classList.add('hide');
        playerXPrompt.classList.remove('hide');

      }    
    })
  });

  return { Players }

})()

// 1. Have Player X and Player O

// 2. When Player X click on box, it fills in with X, and then the next click in a box will automatially be O, and so one