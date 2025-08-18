const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector("ul.navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});


let slideIndex = 0;
const sliders = document.querySelectorAll(".hero-slideshow img");

function showSlides() {
    sliders.forEach((img, i) => {
        img.classList.remove("active");
    });

    slideIndex++;
    if (slideIndex > sliders.length) {
        slideIndex = 1;
    }

    sliders[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 4000); // ganti gambar tiap 4 detik
}

// mulai slideshow
showSlides();

// Back to top
const backToTop=document.getElementById("backToTop");
window.addEventListener("scroll",()=>{
    if(window.scrollY>200){backToTop.style.display="block";}
    else{backToTop.style.display="none";}
});
backToTop.addEventListener("click",()=>{
    window.scrollTo({top:0,behavior:"smooth"});
});

// Slider
const slides=document.querySelector(".slides");
const slideElements=document.querySelectorAll(".slide");
const dotsContainer=document.querySelector(".dots");
let index=0;

slideElements.forEach((_,i)=>{
    const dot=document.createElement("span");
    dot.classList.add("dot");
    if(i===0) dot.classList.add("active");
    dot.addEventListener("click",()=>moveToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots=document.querySelectorAll(".dot");
function moveToSlide(i){
    index=i;
    slides.style.transform=`translateX(${-i*100}%)`;
    dots.forEach(dot=>dot.classList.remove("active"));
    dots[i].classList.add("active");
}

function autoSlide(){
    index=(index+1)%slideElements.length;
    moveToSlide(index);
}

setInterval(autoSlide,5000);