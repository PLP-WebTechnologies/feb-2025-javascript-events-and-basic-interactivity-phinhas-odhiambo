// 1. Event Handling

// Button Click
document.getElementById('clickBtn').addEventListener('click', () => {
  alert('You clicked the button!');
});

// Hover
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseenter', () => hoverBox.style.backgroundColor = 'lightblue');
hoverBox.addEventListener('mouseleave', () => hoverBox.style.backgroundColor = '');

// Keypress
document.addEventListener('keydown', (e) => {
  document.getElementById('keyOutput').textContent = `You pressed: ${e.key}`;
});

// Secret double-click
document.getElementById('secretBtn').addEventListener('dblclick', () => {
  alert('🎉 Secret unlocked!');
});

// 2. Interactive Elements

// Change button
const changeBtn = document.getElementById('changeBtn');
changeBtn.addEventListener('click', () => {
  changeBtn.textContent = 'You Fancy Now ✨';
  changeBtn.style.backgroundColor = '#ff4081';
});

// Image Gallery
const galleryImage = document.getElementById('galleryImage');
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let currentImage = 0;

document.getElementById('nextImage').addEventListener('click', () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImage.src = images[currentImage];
});

// Tabs
const tabButtons = document.querySelectorAll('.tabBtn');
const tabContents = document.querySelectorAll('.tabContent');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;
    tabContents.forEach(tc => tc.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
  });
});

// 3. Form Validation

const form = document.getElementById('userForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');
const formMessage = document.getElementById('formMessage');

emailInput.addEventListener('input', () => {
  const emailValid = /^\S+@\S+\.\S+$/.test(emailInput.value);
  emailFeedback.textContent = emailValid ? '✅ Valid email' : '❌ Invalid email';
  emailFeedback.style.color = emailValid ? 'green' : 'red';
});

passwordInput.addEventListener('input', () => {
  const isLongEnough = passwordInput.value.length >= 8;
  passwordFeedback.textContent = isLongEnough ? '✅ Strong password' : '❌ Too short';
  passwordFeedback.style.color = isLongEnough ? 'green' : 'red';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = /^\S+@\S+\.\S+$/.test(emailInput.value);
  const passwordValid = passwordInput.value.length >= 8;

  if (!emailValid || !passwordValid) {
    formMessage.textContent = 'Please fix errors before submitting.';
  } else {
    formMessage.textContent = '';
    alert('Form submitted successfully!');
    form.reset();
    emailFeedback.textContent = '';
    passwordFeedback.textContent = '';
  }
});
