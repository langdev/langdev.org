"use strict";
var images = [
    'static/bg01.jpg', 'static/bg02.jpg', 'static/bg03.jpg'
].map(function (url) {
    var bg = document.createElement('div');
    bg.style.backgroundImage = "url(\"" + url + "\")";
    bg.style.backgroundPosition = 'center';
    return bg;
});
// Insert images to document
var container = document.getElementById('bg');
if (container != null) {
    for (var _i = 0, images_1 = images; _i < images_1.length; _i++) {
        var dom = images_1[_i];
        container.appendChild(dom);
    }
}
// Main loop.
var pos = 0;
images[pos].classList.add('visible');
images[pos].classList.add('top');
var delay = 6000;
setInterval(function () {
    var lastPos = pos;
    pos = (pos + 1) % images.length;
    // Swap top imageURLs.
    images[lastPos].classList.remove('top');
    images[pos].classList.add('visible');
    images[pos].classList.add('top');
    // Hide last image after a short delay.
    setTimeout(function () {
        images[lastPos].classList.remove('visible');
    }, delay / 2);
}, delay);
// Play initial animations on page load.
setTimeout(function () {
    document.body.classList.remove('is-preload');
}, 100);
