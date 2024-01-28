const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

window.onscroll = () => {
    let header = document.querySelector('.navbar');
    
    header.classList.toggle('stiky', window.scrollY > 100);
    }



const carousel = document.querySelector(".carousel1")
const slide = document.querySelectorAll(".slide1")
const controlLinks = document.querySelectorAll(".controls a")

let i = 0,
j=1,
intervalId;

const intervalFn = () => {
  intervalId= setInterval(() => {
      carousel.style.rotate = `-${++i*90}deg`;

      document.querySelector(".slide1.active").classList.remove("active");
      const activeSlide=document.querySelector(`.slide1:nth-child(${++j})`);
      activeSlide.classList.add("active");

      document.querySelector("a.active").classList.remove("active");
      const activeLinks=document.querySelector(`.controls a:nth-child(${j})`);
      activeLinks.classList.add("active")

      j === 4 && (j = 0 )
  }, 4000);
};

intervalFn();


controlLinks.forEach((control) => {
  control.addEventListener("click", () => {
      clearInterval(intervalId);
      carousel.style.rotate= `-${(i - j + Number(control.dataset.index))* 90}deg`

      document.querySelector(".slide1.active").classList.remove("active");
      const activeSlide=document.querySelector(`.slide1:nth-child(${control.dataset.index})`);
      activeSlide.classList.add("active");

      document.querySelector("a.active").classList.remove("active");
      control.classList.add("active")
  });
}

);

carousel.addEventListener("mouseenter", () => {
  clearInterval(intervalId);
  console.log("pause")
});
carousel.addEventListener("mouseleave", () => {
 intervalFn();
  console.log("play");
});