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
  const playerXPrompt = document.querySelector('.playerX-prompt');
  const playerOPrompt = document.querySelector('.playerO-prompt');
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

  let playChoice = [];
  let choiceArchive = [];
 
  // players
  const Players = (name, key) => {
    renderGame(key);
    return {name}
  };
  
  // binder

  gameBoard.forEach((target) => {
    target.addEventListener('click', (event) => {
      console.log(event.target);
      console.log(gameBoard);
      console.log(playChoice);
      console.log(choiceArchive);
      let boxTarget = event.target;
      if (playChoice.length === 0 || playChoice.length % 2 === 0) {
        let boxInput = document.createElement('span');
        boxTarget.append(boxInput);
        boxInput.innerHTML = 'X';
        playChoice.push('X');
        playerXPrompt.classList.add('hide');
        playerOPrompt.classList.remove('hide');

      } else {
        let boxInput = document.createElement('span');
        boxTarget.append(boxInput);
        boxInput.innerHTML = 'O';
        playChoice.push('O');
        playerOPrompt.classList.add('hide');
        playerXPrompt.classList.remove('hide');

      }
      
      
    })
  });

  // xButton.addEventListener('click', ()=> {
  //   playChoice.push('X');
  //   choiceArchive.push('X');
  // });

  // oButton.addEventListener('click', ()=> {
  //   playChoice.push('O');
  //   choiceArchive.push('O');
  // })


  return { Players }

  

})()

// 1. Have Player X and Player O

// 2. When Player X click on box, it fills in with X, and then the next click in a box will automatially be O, and so one