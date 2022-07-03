const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach((item) => {
  item.addEventListener('click', function (e) {
    // Only toggle if clicked on the header elements or toggler directly, not just anywhere inside (prevents theme-toggle breaking)
    if (e.target.closest('.collapsible__header') || e.target.closest('.nav__toggler')) {
      this.classList.toggle('collapsible--expanded');
    }
  });
});

// Theme Toggle Logic
const themeToggleBtn = document.querySelector('.theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

// Check for saved user preference, if any
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
}

themeToggleBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let theme = document.documentElement.getAttribute('data-theme');

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }
});
