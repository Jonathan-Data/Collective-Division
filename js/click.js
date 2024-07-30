const images = document.querySelectorAll('.lookbook-image');
let currentIndex = 0;

images[currentIndex].style.display = 'block';

function showNextImage() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'block';
}

images.forEach(image => {
  image.addEventListener('click', showNextImage);
});
