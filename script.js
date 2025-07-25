// Nav meny toggle
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
})

const closeLi = document.querySelectorAll('.close-li');
closeLi.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  })
})



// Toggle between tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    // Remove active state from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add active state to clicked button and matching tab content
    button.classList.add('active');
    document.querySelector(`.tab-content[data-tab="${tab}"]`).classList.add('active');
  });
});


// For animation
AOS.init();