const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

navbarLinks.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});


const lightModeButton = document.getElementById('light-mode-button');
const darkModeButton = document.getElementById('dark-mode-button');

// Function to switch to light mode

function switchToLightMode() {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('theme', 'light');
}


// Function to switch to dark mode
function switchToDarkMode() {
  document.body.classList.add('dark-mode');
  localStorage.setItem('theme', 'dark');
}

// Event listeners for the buttons
lightModeBtn.addEventListener('click', switchToLightMode);
darkModeBtn.addEventListener('click', switchToDarkMode);

// Check and apply the saved theme on page load
window.onload = function() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
      switchToDarkMode();
  } else {
      switchToLightMode();
  }
};