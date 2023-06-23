const images = [
    './res/images/imgs/tea-farm.png',
    './res/images/imgs/beans.png',
    './res/images/imgs/sunflower.png'
];

const currentImage = 0;

function changeImage() {
  const nextImage = currentImage + 1;
  if (nextImage >= images.length) {
    nextImage = 0;
  }

  const imageUrl = images[nextImage];
  document.getElementById("background").style.backgroundImage = `url(${imageUrl})`;

  currentImage = nextImage;
}

setInterval(changeImage, 3000);