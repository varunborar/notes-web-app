// Nav Bar
const navbarLinks = document.getElementsByClassName('nav-link');

for (const link of navbarLinks) {
    link.parentElement.addEventListener('click', function(event) {
        for (const link of navbarLinks) {
            link.classList.remove("active");
        }
        event.currentTarget.firstChild.classList.add('active');
    });
}

// Nav Bar

// Theme Switch

const themeSwitch = document.getElementsByClassName('theme-switch');
themeSwitch[0].addEventListener('click', function(event) {
    themeIcon = document.getElementById('theme-icon');
    theme = themeIcon.dataset.theme;
    if (theme == "light") {
        themeIcon.classList.remove('fa-moon-o');
        themeIcon.classList.add('fa-sun');
        themeIcon.dataset.theme = "dark";
        document.documentElement.style.setProperty("--theme-color", "#222222");
        document.documentElement.style.setProperty("--theme-color-dimmed", "#323232");
        document.documentElement.style.setProperty("--text-color-primary", "#ffffff");
        document.documentElement.style.setProperty("--text-color-secondary", "#222222");
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon-o');
        themeIcon.dataset.theme = "light";
        document.documentElement.style.setProperty("--theme-color", "#ffffff");
        document.documentElement.style.setProperty("--theme-color-dimmed", "#f5f5f5");
        document.documentElement.style.setProperty("--text-color-primary", "#222222");
        document.documentElement.style.setProperty("--text-color-secondary", "#ffffff");
    }
});

// Theme Switch