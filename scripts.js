document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for text
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
      element.style.opacity = 0;
      element.style.transition = 'opacity 2s';
      window.addEventListener('scroll', () => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
          element.style.opacity = 1;
        }
      });
    });
  
    // Copy text to clipboard
    const copyButton = document.getElementById('copy-button');
    const copyText = document.getElementById('copy-text');
    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(copyText.textContent).then(() => {
        alert('Text copied to clipboard!');
      });
    });
  
    // Scroll-triggered animations
    const aboutBox = document.querySelector('.about-box');
    const featureBoxes = document.querySelectorAll('.feature-box, .feature-box1');
    window.addEventListener('scroll', () => {
      if (aboutBox.getBoundingClientRect().top < window.innerHeight) {
        aboutBox.classList.add('fade-in');
      }
      featureBoxes.forEach(box => {
        if (box.getBoundingClientRect().top < window.innerHeight) {
          box.classList.add('fade-in');
        }
      });
    });
  
    // Gallery photo hover effect
    const galleryPhotos = document.querySelectorAll('#gallery .photo-row img');
    galleryPhotos.forEach(photo => {
      photo.addEventListener('mouseover', () => {
        photo.style.transform = 'scale(1.1)';
        photo.style.transition = 'transform 0.3s';
      });
      photo.addEventListener('mouseout', () => {
        photo.style.transform = 'scale(1)';
      });
    });
  });
  