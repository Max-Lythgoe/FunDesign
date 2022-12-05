let sky = document.getElementById("sky");
let mtns = document.getElementById("mtns");
let text = document.getElementById("text");
let city = document.getElementById("city");

window.addEventListener('scroll', function(){
    var value = window.scrollY;

    sky.style.top = value * 0.5 + 'px';
    mtns.style.top = value * 0.3 + 'px';
    text.style.top = value * 0.5 + 'px';
    city.style.top = value * 0.15 + 'px';
})