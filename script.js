// hamburger_menu - bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navBar");
const close = document.getElementById("close");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
// singleproduct -> Show amall to big image
var main_Img = document.getElementById("main_Img");
var sml_Img = document.getElementsByClassName("sml_Img");

sml_Img[0].addEventListener('click', () => {
    main_Img.src = sml_Img[0].src;
})
sml_Img[1].addEventListener('click', () => {
    main_Img.src = sml_Img[1].src;
})
sml_Img[2].addEventListener('click', () => {
    main_Img.src = sml_Img[2].src;
})
sml_Img[3].addEventListener('click', () => {
    main_Img.src = sml_Img[3].src;
})