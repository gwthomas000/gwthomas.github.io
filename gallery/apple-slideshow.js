let index = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}

// Initial + Loop
showSlide();
setInterval(showSlide, 5000); // 5s fade cycle