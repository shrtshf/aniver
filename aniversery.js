let modalBottom = document.querySelector(".modalBottom");
let modalTop = document.querySelector(".modalTop");
let hFour = document.querySelector("h4");

let txt = "Sath hoty to 2nd anniversary hota aaj anyway HAPPY ANNIVERSARY ISH";

let one = setTimeout(() => {
        modalBottom.classList.add("active");
}, 5000);

let two = setTimeout(() => {
        modalTop.classList.add("active");
}, 5000);

let i = 0;
let myInt = setInterval(function(){
        
     hFour.innerHTML += txt.charAt(i);
     i++;
    if(i > txt.length){
       clearInterval(myInt);
    }
      
}, 90)

// let two = setTimeout(() => {
//         modal[1].classList.add("active");
// }, 10000);

// let two = setTimeout(() => {
//         modal[2].classList.add("active");
// }, 15000);