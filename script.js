// Optional: Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });

  function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
  
    modal.style.display = "block";
    modalImage.src = image.src;
    caption.innerHTML = image.alt;
  }
  
  function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
  }
  