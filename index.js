let sky = document.getElementById("sky");
let mtns = document.getElementById("mtns");
let text = document.getElementById("text");
let city = document.getElementById("city");

let canyon = document.getElementById("canyon");
let arch1 = document.getElementById("arch1");
let arch2 = document.getElementById("arch2");
let text2 = document.getElementById("text2");
let button = document.getElementById("button");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    sky.style.top = value * 0.5 + 'px';
    mtns.style.top = value * 0.3 + 'px';
    text.style.top = value * 0.5 + 'px';
    city.style.top = value * 0.15 + 'px';
})

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    canyon.style.right = value * 0.5 + 'px';
    arch1.style.left = value * 0.08 + 'px';
    arch2.style.left = value * 0.08 + 'px';
    text2.style.left = value * 0.3 + 'px';
    button.style.left = value * 0.3 + 'px';
})