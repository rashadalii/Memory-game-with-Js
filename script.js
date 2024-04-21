const emojis = ["🎃", "🎃", "😈", "😈", "👻", "👻", "🤖", "🤖", "🧠", "🧠", "🧶", "🧶", "😍", "😍", "👺", "👺"];

const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffledEmojis[i];
  document.querySelector('.game').appendChild(box);




  box.addEventListener('click', function(event) {
    event.target.classList.add('boxOpen');
    setTimeout(() => {
      if (document.querySelectorAll('.boxOpen').length > 1) {
        const openBoxes = document.querySelectorAll('.boxOpen');
        if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
          openBoxes[0].classList.add('boxMatch');
          openBoxes[1].classList.add('boxMatch');
          openBoxes[0].classList.remove('boxOpen');
          openBoxes[1].classList.remove('boxOpen');
  
          // Hide the matched boxes from the game board
          openBoxes[0].style.visibility = 'hidden';
          openBoxes[1].style.visibility = 'hidden';
          
          if (document.querySelectorAll('.boxMatch').length === document.querySelectorAll('.box').length) {
            alert('Congratulations! You have matched all the boxes!');
          }
          
        } else {
          openBoxes[0].classList.remove('boxOpen');
          openBoxes[1].classList.remove('boxOpen');
        }
      }
    }, 500);

    
    document.querySelector('.reset').addEventListener('click', function() {
      window.location.reload();
    });


});
}  


// we can also dont hidden box visibility

//   box.addEventListener('click', function(event) {
//     event.target.classList.add('boxOpen');
//     setTimeout(() => {
//         if (document.querySelectorAll('.boxOpen').length > 1) {
//             const openBoxes = document.querySelectorAll('.boxOpen');
//             if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
//                 openBoxes[0].classList.add('boxMatch');
//                 openBoxes[1].classList.add('boxMatch');
//                 openBoxes[0].classList.remove('boxOpen');
//                 openBoxes[1].classList.remove('boxOpen');

//                 if (document.querySelectorAll('.boxMatch').length === emojis.length * 2) {
//                     alert('You win!');
//                 }
//             } else {
//                 openBoxes[0].classList.remove('boxOpen');
//                 openBoxes[1].classList.remove('boxOpen');
//             }
//         }
//     }, 500);
// });





