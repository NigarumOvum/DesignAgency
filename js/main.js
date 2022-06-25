// menu toggler

const burger = document.querySelector('.burger');
const cllose = document.querySelector('.close');
const navUl = document.querySelector('.nav-ul');

burger.addEventListener("click", function boo() {
    navUl.classList.toggle('show');
    burger.classList.toggle('hide')
})




cllose.addEventListener("click", function booo() {
    navUl.classList.toggle('show');
    burger.classList.toggle('hide')
})


// search bar
var search = document.querySelector('.search');
var closebtn = document.querySelector('.close-modal')
var modal = document.querySelector('.modal') 


search.addEventListener("click", function(){
    modal.style.display = "block"
})
closebtn.addEventListener("click", function(){
    modal.style.display = "none"
})


//btn
var btn = Array.from(document.querySelectorAll(".btn"))
    for(var i = 0; i < btn.length; i++){
        btn[i].addEventListener("click", function(e){
            e.preventDefault()
            console.log(e.target.click)
        })
    }
  
  console.log( document.event) 

// page animation
AOS.init({
    duration : 2000
});