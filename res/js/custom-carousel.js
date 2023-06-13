var images = [
    '/res/images/imgs/tea-farm.png',
    '/res/images/imgs/beans.png',
    '/res/images/imgs/sunflower.png'
];

var currentImage = 0;

function changeImage() {
    // Get the next image in the array.
    currentImage = (currentImage + 1) % images.length;

    // Set the background image of the element to the new image.
    document.getElementById('image').style.backgroundImage = 'url(' + images[currentImage] + ')';
}

// Set up the event listener for the click event on the "Next" button.
document.getElementById('next').addEventListener('click', changeImage);

// Start the carousel by changing the background image to the first image in the array.
changeImage();