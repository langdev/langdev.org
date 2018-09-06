const images = [
  'static/bg01.jpg', 'static/bg02.jpg', 'static/bg03.jpg'
].map(url => {
  const bg = document.createElement('div')
  bg.style.backgroundImage = `url("${url}")`
  bg.style.backgroundPosition = 'center'
  return bg
})

// Insert images to document
const container = document.getElementById('bg')
if (container != null) {
  for (const dom of images) {
    container.appendChild(dom)
  }
}

// Main loop.
let pos = 0
images[pos].classList.add('visible')
images[pos].classList.add('top')

const delay = 6000
setInterval(_ => {
  const lastPos = pos
  pos = (pos + 1) % images.length

  // Swap top imageURLs.
  images[lastPos].classList.remove('top')
  images[pos].classList.add('visible')
  images[pos].classList.add('top')

  // Hide last image after a short delay.
  setTimeout(_ => {
    images[lastPos].classList.remove('visible')
  }, delay / 2)
}, delay)

// Play initial animations on page load.
setTimeout(_ => {
  document.body.classList.remove('is-preload')
}, 100)
