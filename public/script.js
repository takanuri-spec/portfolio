document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.animationDelay = `${index * 0.15}s`;
    });
});
