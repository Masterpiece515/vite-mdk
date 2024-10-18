const burger = document.querySelector('.burger');
const menu  = document.querySelector('.menu');

const close = document.querySelector('.close');


burger.addEventListener('click',()=>{
    menu.classList.add('menu_open')




    close.addEventListener('click',()=>{
        menu.classList.remove('menu_open')
    })
})