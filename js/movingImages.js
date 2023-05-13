const movingImages = document.querySelectorAll(".movingImage");
const paragraphsWithPictures = document.querySelectorAll(".paragraf-sa-slikom");
const navbar = document.querySelector(".navbar");

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};
function isVisible(element) {
    let underUpperBoundary, overLowerBoundary;
    const elementRectangle = element.getBoundingClientRect();
   
    underUpperBoundary = (elementRectangle.y + elementRectangle.height - navbar.offsetHeight <= 0) ? false : true;
    overLowerBoundary = (elementRectangle.y - window.innerHeight >= 0) ? false : true;
    
    if (underUpperBoundary && overLowerBoundary) return true;
    return false;
}

let previousScroll = window.scrollY;
const scrollValues = [];
movingImages.forEach(image => {
    scrollValues.push(0);
});
function moveImage() {
    let currentScroll = window.scrollY;
    let direction = currentScroll - previousScroll;
    let staticParent = paragraphsWithPictures[0];
    movingImages.forEach((movingImage, index) => {
        //movingImage.style.animationPlayState = 'paused';
        if (index >= 3) staticParent = paragraphsWithPictures[1];
        if (true) {
            if (direction > 0) { //scroll downwards
                if (index % 3 === 0) scrollValues[index] -= 1.5; //if it's the first picture in a group
                else scrollValues[index] -= 1.7;
            }
            else {
                if (index % 3 === 0) scrollValues[index] += 1.5;
                else scrollValues[index] +=1.7;
            }
            movingImage.style.transform = `translateY(${scrollValues[index]}px)`;
            
        }
        else {
            scrollValues[index] = 0;
            movingImage.style.transform = `translateY(${scrollValues[index]}vw)`;
        }
    });
    previousScroll = currentScroll;
}

window.addEventListener("scroll", moveImage);
window.addEventListener("load", moveImage);



