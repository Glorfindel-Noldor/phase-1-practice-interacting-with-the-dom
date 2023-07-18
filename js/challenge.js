//------------------------------------------------------------------------------
//buttons
//-------------------------------------------------------------------------------
const submit_Button = document.querySelector("#submit"),
  heart_button = document.querySelector("#heart"),
  pause_resume_button = document.querySelector("#pause"),
  plus_button = document.querySelector("#plus"),
  minus_button = document.querySelector("#minus"),
  user_input = document.querySelector("#comment-imput");
//-------------------------------------------------------------------------------
//actions
//-------------------------------------------------------------------------------
plus_button.addEventListener("click", () => {
  let a = document.getElementById("counter"),
    b = parseInt(a.innerText);
  a.innerText = b + 1;
});
minus_button.addEventListener("click", () => {
  let a = document.getElementById("counter"),
    b = parseInt(a.innerText);
  a.innerText = b - 190;
});

//----------------------------------------------------------------------------
//user interactions
function oneLikeonePrayer() {
  let a = document.getElementById("counter"),
    b = parseInt(a.innerText);
  a.innerText = b + 1;
}//setInterval(oneLikeonePrayer, 1e4);

function like4JesusIgnor4DaDevil() {
  let a = document.getElementById("counter"),
    b = parseInt(a.innerText);
  a.innerText = b - 1;
}//setInterval(like4JesusIgnor4DaDevil, 1e1);

const formElement = document.getElementById("comment-form");
formElement.addEventListener("submit", function (a) {
  a.preventDefault();
  let b = this.children[0],
    c = b.value;
  b.value = "";
  let d = document.querySelector(".comments"),
    e = document.createElement("h4");
  (e.innerText = c), d.appendChild(e);
});//adding comments

heart_button.addEventListener("click", function () {
  const audio = new Audio("js/super_like.mp3");
  audio.play();
  let a = document.getElementById("counter"),
    b = parseInt(a.innerText);
  a.innerText = b + 10000;
});//This will let out a silly sound when the user gives a heart, along with 10,000 likes!