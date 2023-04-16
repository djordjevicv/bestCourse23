const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // adjust drag speed
    slider.scrollLeft = scrollLeft - walk;
    if (slider.scrollLeft === 0 && walk > 0) {
        // simulate infinite scroll to the right
        slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
        scrollLeft = slider.scrollLeft;
    } else if (slider.scrollLeft === slider.scrollWidth - slider.clientWidth && walk < 0) {
        // simulate infinite scroll to the left
        slider.scrollLeft = 0;
        scrollLeft = slider.scrollLeft;
    } else {
        scrollLeft = slider.scrollLeft;
    }
});