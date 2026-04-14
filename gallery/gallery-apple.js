// Fade + Slide Reveal
const faders = document.querySelectorAll('.fade-slide');

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;
  faders.forEach(el => {
    const rect = el.getBoundingClientRect().top;
    if (rect < trigger) el.classList.add('visible');
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Parallax Images
const parallaxImgs = document.querySelectorAll('.parallax-image, .hero-slide-bg');

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset * 0.25;
  parallaxImgs.forEach(img => img.style.transform = `translateY(${offset}px)`);
});