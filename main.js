// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector("#modal");
let modalText = document.getElementById('modal-message');
let heartLikersArray = [...document.getElementsByClassName('like-glyph')];
modal.classList.add('hidden');


function serverCall(event) {
  mimicServerCall()
  .then(() => handleResponse(event))
  .catch(error => handleError(error));
}

function handleError(errorMessage) {
  modal.classList.remove('hidden');
  modalText.textContent = errorMessage
  setTimeout(() => {
    modal.classList.add('hidden');
    modalText.textContent = '';
  }, 3000)
}

function handleResponse(event) {
  if (event.target.textContent === EMPTY_HEART) {
    event.target.classList.add('activated-heart')
  } else {
    event.target.classList.remove('activated-heart')
    event.target.textContent = EMPTY_HEART
  }
  

}

heartLikersArray.map(heartNode => {
  heartNode.addEventListener('click', serverCall);
})
// heartLikersArray.forEach(heart => {
//   heart.addEventListener("click", () => {
//     if (heart.textContent === EMPTY_HEART) {
//       mimicServerCall()
//         .then(() => {
//           heart.className = "activated-heart"
//           heart.textContent = FULL_HEART
//         })
//         .catch(() => {
//           document.querySelector("#modal").hidden = false
//           setTimeout(() => {
//             document.querySelector("#modal").hidden = true
//           }, 3000)
//         })
//     } else {
//       heart.textContent = EMPTY_HEART
//       heart.classList.remove("activated-heart")
//     }
//   })
// })


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
