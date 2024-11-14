let sidebar = document.querySelector(".sidebar");
let logoClick = document.querySelector(".logo");
let link = document.querySelectorAll(".link");

// Crea un evento onclick

sidebar.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
  for (var i = 0; i < link.length; i++) {
    link[i].classList.toggle("blink");
  }

});


//Otra forma de  crear un evento con js
// logoClick.addEventListener("click", myfuntion);
// function myfuntion() {
//   sidebar.classList.toggle("close");
// }


// Ontouchend


console.log(link.length);

sidebar.ontouchend = funtionOntouchend;
function funtionOntouchend() {
  sidebar.classList.toggle("close");

  for (var i = 0; i < link.length; i++) {
    link[i].classList.toggle("blink");
  }
}
