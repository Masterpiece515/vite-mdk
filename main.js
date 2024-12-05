import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Pagination]);
const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  observer: true,
  breakpoints: {
    1119: {
      enabled: false,
    }, 
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
});

const burger = document.querySelector('.burger');
const menu  = document.querySelector('.menu');

const close = document.querySelector('.close');


burger.addEventListener('click',()=>{
    menu.classList.add('menu_open')




    close.addEventListener('click',()=>{
        menu.classList.remove('menu_open')
    })
})
