// Check if user has a preference saved
const userPreference = localStorage.getItem('darkMode');
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if the user has dark mode enabled in their system
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Function to apply dark or light mode
function applyDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

// Apply saved preference or system default
if (userPreference === null) {
  applyDarkMode(prefersDarkScheme);
  darkModeToggle.checked = prefersDarkScheme;
} else {
  applyDarkMode(userPreference === 'dark');
  darkModeToggle.checked = userPreference === 'dark';
}

// Toggle dark mode and save preference
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    applyDarkMode(true);
    localStorage.setItem('darkMode', 'dark');
  } else {
    applyDarkMode(false);
    localStorage.setItem('darkMode', 'light');
  }
});

// Show settings menu on button click
document.querySelector('.settings-button').addEventListener('click', () => {
  const settingsMenu = document.getElementById('dark-mode-settings');
  settingsMenu.style.display = settingsMenu.style.display === 'none' ? 'block' : 'none';
});
