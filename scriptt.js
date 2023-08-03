let img = document.querySelectorAll('.slider-item');
let slider = document.querySelector(".slider");
let sliderLine = document.querySelector('.slider-line');
let btnprev = document.querySelector('.btn-prev');
let btnnext = document.querySelector('.btn-next');
let count = 0;
let widthSlider;

function f1 (){
    widthSlider = slider.clientWidth;
    for (let i = 0; i < img.length; i++){
        img[i].style.width = widthSlider + 'px';
    }
    sliderLine.style.width = widthSlider * img.length + 'px';
move();
}
window.addEventListener('resize',f1 )
f1();

function move(){
    sliderLine.style.transform = 'translate(-' + count * widthSlider + 'px';
}
function moveForvard(){
    count++;
    if (count > img.length - 1) {
        count = 0;
    }
    move();
}
function moveBack(){
    count--;
    if (count < 0){
        count = img.length - 1;
    }

    move();
}
btnnext.onclick = moveForvard;
btnprev.onclick = moveBack;
