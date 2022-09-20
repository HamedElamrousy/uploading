var moonIcon= document.querySelector('.moonIcon');
var sunIcon = document.querySelector('.sunIcon');


var link=document.querySelector('#link') ;


moonIcon.addEventListener('click',()=>{
    link.setAttribute("href",'css/darkmode.css')
    localStorage.setItem('dark-mode','css/darkmode.css') })

if(localStorage.getItem('dark-mode')){
    link.setAttribute('href','css/darkmode.css')
}

sunIcon.addEventListener('click',()=>{
    link.setAttribute("href",'css/style.css')
    localStorage.removeItem("dark-mode")
})
