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

/* DRY - НЕ ПОВТОРЯЙТЕ КОДА ПОЖАЛУСТО  */

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

const close = document.querySelector(".close");

burger.addEventListener("click", () => {
  menu.classList.add("menu_open");

  close.addEventListener("click", () => {
    menu.classList.remove("menu_open");
  });
});
const message = document.querySelector(".message");
const message_burger = document.querySelector(".message_burger");
const message_tablet = document.querySelector(".message_tablet");
const message_menu = document.querySelector(".message_menu");
const message_menu_close = document.querySelector(".message_menu_close");

message.addEventListener("click", () => {
  message_menu.classList.add("message_menu_open");

  message_menu_close.addEventListener("click", () => {
    message_menu.classList.remove("message_menu_open");
  });
});

message_burger.addEventListener("click", () => {
  message_menu.classList.add("message_menu_open");

  message_menu_close.addEventListener("click", () => {
    message_menu.classList.remove("message_menu_open");
  });
});
message_tablet.addEventListener("click", () => {              
  message_menu.classList.add("message_menu_open");

  message_menu_close.addEventListener("click", () => {
    message_menu.classList.remove("message_menu_open");
  });
});

const call = document.querySelectorAll(".call");
const call_menu = document.querySelector(".call_menu");
const call_menu_close = document.querySelector(".call_menu_close");

call.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("call_menu_open");
    call_menu.classList.add("call_menu_open")
  });
});

call_menu_close.addEventListener("click", () => {
  call_menu.classList.remove("call_menu_open");
});

call_menu_close.addEventListener("click", () => {
  call_menu.classList.remove("call_menu_open");
});

const subtitle_1 = document.querySelector(".subtitle_1")
const subtitle_readmore = document.querySelector(".pin")
const subtitle_text = document.querySelector (".subtitle__readmore--text")
const strelka = document.querySelector (".subtitle__readmore--list--icon")

subtitle_readmore.addEventListener("click", () => {
  
  if (subtitle_1.classList.contains ("subtitle_1")){
    subtitle_1.classList.remove("subtitle_1")
    subtitle_text.textContent = "Свернуть"
    strelka.classList.add ("rotate")
  }
  else {
    subtitle_1.classList.add("subtitle_1")
    subtitle_text.textContent = "Читать далее"
    strelka.classList.remove ("rotate")
  }

})