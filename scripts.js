// === Gallery Thumbnail Click & Keyboard Accessibility ===
const mainImage = document.getElementById('mainImage');
const mainCaption = document.getElementById('mainCaption');
const thumbnails = document.querySelectorAll('.thumbnails img');

function setActiveThumbnail(thumb) {
  thumbnails.forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {
    mainImage.src = thumb.dataset.large;
    mainImage.alt = thumb.alt;
    mainCaption.textContent = thumb.dataset.caption;
    setActiveThumbnail(thumb);
  });

  // Keyboard accessible: Enter or Space triggers click
  thumb.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      thumb.click();
    }
  });
});

// === Slideshow ===
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.nav-left');
const nextBtn = document.querySelector('.nav-right');
const totalSlides = slides.length;
let currentIndex = 0;
let slideInterval;

function showSlide(index) {
  if (index < 0) index = totalSlides - 1;
  if (index >= totalSlides) index = 0;
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 4000); //   4 seconds per slide

}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

// Keyboard support for slideshow arrows
[prevBtn, nextBtn].forEach(btn => {
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});

// Pause slideshow on hover/focus
const slideshow = document.querySelector('.slideshow');
slideshow.addEventListener('mouseenter', stopAutoSlide);
slideshow.addEventListener('mouseleave', startAutoSlide);
slideshow.addEventListener('focusin', stopAutoSlide);
slideshow.addEventListener('focusout', startAutoSlide);

// Keyboard arrows to navigate slideshow when focused
slideshow.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') {
    prevBtn.click();
  } else if (e.key === 'ArrowRight') {
    nextBtn.click();
  }
});
// === Fade-In Effect on Image Load ===
document.querySelectorAll('img').forEach(img => {
  if (img.complete) {
    img.classList.add('loaded');
  } else {
    img.addEventListener('load', () => {
      img.classList.add('loaded');
    });
  }
});

// Initialize
showSlide(0);
startAutoSlide();
