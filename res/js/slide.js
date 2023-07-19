const slide = () => {

    const images = [
        '../res/images/imgs/tea-farm.png',
        '../res/images/imgs/beans.png',
        '../res/images/imgs/sunflower.png'
    ];

    const currentImage = -1;

    const nextImage = currentImage + 1;
    if (nextImage >= images.length) {
        nextImage = 0;
        
    }

    const imageUrl = images[nextImage];
    document.getElementById("background").style.backgroundImage = `url(${imageUrl})`;


    const width = document.getElementById("background").offsetWidth;
    const left = document.getElementById("background").style.left;
  
    if (left === "0") {
      document.getElementById("background").style.left = width + "px";
    } else {
      document.getElementById("background").style.left = "0px";
    }
  };
  
  setInterval(slide, 1000);
  