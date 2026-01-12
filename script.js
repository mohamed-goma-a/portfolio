// =======================
// Sticky header with opacity change on scroll
// =======================
const header = document.getElementById('site-header');
function onScrollHeader() {
  if (window.scrollY > 8) {
    header.classList.add('nav-scrolled');
  } else {
    header.classList.remove('nav-scrolled');
  }
}
window.addEventListener('scroll', onScrollHeader);
onScrollHeader();

// =======================
// Mobile hamburger menu
// =======================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu on link click
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});

// =======================
// Intersection Observer for scroll reveal
// =======================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// =======================
// Form validation and success modal
// =======================
const form = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');
const closeModalBtn = document.getElementById('close-modal');

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form?.addEventListener('submit', e => {
  e.preventDefault();

  const data = new FormData(form);
  const firstName = (data.get('firstName') || '').toString().trim();
  const lastName = (data.get('lastName') || '').toString().trim();
  const email = (data.get('email') || '').toString().trim();
  const message = (data.get('message') || '').toString().trim();

  const errors = [];
  if (!firstName) errors.push('First name is required.');
  if (!lastName) errors.push('Last name is required.');
  if (!email || !validateEmail(email)) errors.push('A valid email is required.');
  if (!message || message.length < 10) errors.push('Message should be at least 10 characters.');

  if (errors.length) {
    alert(errors.join('\n'));
    return;
  }

  successModal.classList.remove('hidden');
  successModal.classList.add('flex');

  form.reset();
});

function closeModal() {
  successModal.classList.add('hidden');
  successModal.classList.remove('flex');
}

closeModalBtn?.addEventListener('click', closeModal);
successModal?.addEventListener('click', e => {
  if (e.target === successModal) closeModal();
});

// =======================
// Certificates Modal
// =======================
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.getElementById('closeBtn');

  function openModal(src) {
    modalImg.src = src;
    modal.classList.remove('hidden');
    modal.style.display = "flex";
  }

  // ربط الصور وأزرار "View" بالمودال
  document.querySelectorAll('.certificate-img, .view-btn').forEach(el => {
    el.addEventListener('click', () => openModal(el.dataset.src));
  });

  // إغلاق المودال
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.style.display = "none";
    modalImg.src = '';
  });

  // إغلاق عند الضغط على الخلفية
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modal.style.display = "none";
      modalImg.src = '';
    }
  });
});
