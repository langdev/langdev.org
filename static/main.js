'use strict'

// Play initial animations on page load.
window.addEventListener('load', function() {
  window.setTimeout(function() {
    document.body.classList.remove('is-preload')
  }, 100)
})


//
// Slideshow Background.
//
var settings = {
  images: {
    'static/bg01.jpg': 'center',
    'static/bg02.jpg': 'center',
    'static/bg03.jpg': 'center',
  },
  delay: 6000,
}

var pos = 0, lastPos = 0, $bgs = [], k;

// Create BG wrapper, BGs.
var $wrapper = document.createElement('div')
$wrapper.id = 'bg'
document.body.appendChild($wrapper)

for (k in settings.images) {
  // Create BG.
  var $bg = document.createElement('div')
  $bg.style.backgroundImage = 'url("' + k + '")'
  $bg.style.backgroundPosition = settings.images[k]
  $wrapper.appendChild($bg)

  // Add it to array.
  $bgs.push($bg)
}

// Main loop.
$bgs[pos].classList.add('visible');
$bgs[pos].classList.add('top');

// Bail if we only have a single BG or the client doesn't support transitions.
if ($bgs.length > 1) {
  window.setInterval(function() {
    lastPos = pos;
    pos++;

    // Wrap to beginning if necessary.
    if (pos >= $bgs.length) { pos = 0; }

    // Swap top images.
    $bgs[lastPos].classList.remove('top');
    $bgs[pos].classList.add('visible');
    $bgs[pos].classList.add('top');

    // Hide last image after a short delay.
    window.setTimeout(function() {
      $bgs[lastPos].classList.remove('visible');
    }, settings.delay / 2);
  }, settings.delay);
}
