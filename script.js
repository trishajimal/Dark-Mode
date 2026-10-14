document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const body = document.body;
    const yearNode = document.querySelector('.year');

    if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
    }

    const applyTheme = (theme) => {
        const isLight = theme === 'light';
        body.setAttribute('data-theme', theme);

        if (themeToggle) {
            themeToggle.setAttribute('aria-pressed', String(isLight));
        }

        if (themeIcon) {
            themeIcon.textContent = isLight ? '☾' : '☀';
        }

        localStorage.setItem('theme', theme);
    };

    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'));

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }
    const navLinks = document.querySelectorAll('.nav a');
    if (navLinks.length) {
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                navLinks.forEach((item) => item.classList.remove('active'));
                link.classList.add('active');
            });
        });
    }
});