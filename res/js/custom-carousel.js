var images = [
    './res/images/imgs/tea-farm.png',
    './res/images/imgs/beans.png',
    './res/images/imgs/sunflower.png'
];

var currentImage = 0;

function changeImageContinuously() {
    // Get the next image in the array.
    currentImage = (currentImage + 1) % images.length;

    // Set the background image of the element to the new image.
    //document.getElementById('image').style.backgroundImage = 'url(' + images[currentImage] + ')';
    document.getElementById('jumboNew').style.backgroundImage = 'url(' + images[currentImage] + ')';
    
    // Create a transition effect.
    // backgroundImageElement.style.transition = "background-image 2s ease-in-out";
    //document.getElementById('jumboNew').style.transition = "2s ease-in-out";
    //document.getElementById('jumboNew').style.animation = "slide 3s ease-in-out infinite";
    
    // Set a timeout to call the function again after 2 seconds.
    setTimeout(changeImageContinuously, 3000);
}

// Start the carousel by calling the function to change the background image continuously.
changeImageContinuously();