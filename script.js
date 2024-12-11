// Функція для перевірки, чи елемент видимий у вікні перегляду
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функція для анімації статистики
function animateStats() {
    const stats = document.querySelectorAll('.stat-item');
    stats.forEach(stat => {
        if (isElementInViewport(stat)) {
            stat.classList.add('visible');
        }
    });
}

// Слухачі подій
window.addEventListener('scroll', animateStats);
window.addEventListener('load', animateStats); 