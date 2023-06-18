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
/*function isVisible(element) {
    let underUpperBoundary, overLowerBoundary;
    const elementRectangle = element.getBoundingClientRect();
   
    underUpperBoundary = (elementRectangle.y + elementRectangle.height - navbar.offsetHeight <= 0) ? false : true;
    overLowerBoundary = (elementRectangle.y - window.innerHeight >= 0) ? false : true;
    
    return (underUpperBoundary && overLowerBoundary) ? true : false;
}
*/

let previousScroll = window.scrollY;
const scrollValues = [];

let staticParent = paragraphsWithPictures[0];

movingImages.forEach(image => {
    scrollValues.push(0);
});
function moveImage() {
    scrollValues.forEach(scrollValue => {
        if (scrollValue > 50) scrollValue = 50;
        else if (scrollValue < -50) scrollValue = -50;
    });
    let currentScroll = window.scrollY;
    let direction = currentScroll - previousScroll > 0 ? 1 : -1;
    staticParent = paragraphsWithPictures[0];
    movingImages.forEach((movingImage, index) => {
        //movingImage.style.animationPlayState = 'paused';
        if (index >= 3) staticParent = paragraphsWithPictures[1];
        if (direction > 0) { //scroll downwards
            if (index % 3 === 0) //if it's the first picture in a group
                scrollValues[index] -= 1.8; 
            else
                scrollValues[index] -= 2;
        }
        else {
            if (index % 3 === 0)
                scrollValues[index] += 1.8;
            else
                scrollValues[index] += 2;
        }
        movingImage.style.transform = `translateY(${scrollValues[index]}px)`;
        if (Math.abs(scrollValues[index]) >= 50) {
            movingImage.style.transform = `translateY(${scrollValues[index] > 0 ? 50 : -50}px)`;
        }
           
    });
    previousScroll = currentScroll;
}
/*function getTopPosition() {
    let currentScroll = window.scrollY;
    let topPosition = 0;
    let currentElement = movingImages[0];

    while (currentElement) {
        //console.log(currentElement, currentElement.offsetTop);
        topPosition += currentElement.offsetTop;
        currentElement = currentElement.offsetParent;
    }
    console.log(topPosition);
    return topPosition;
}
*/
/*function moveImage1() {
    if (isVisible(staticParent)) {
        if (innerHeight + scrollY > topp - 100
            && innerHeight + scrollY < topp + movingImages[0].offsetHeight + 100)
            movingImages[0].style.transform = `translateY(${scrollY - topp}px)`;
    }
    //if (innerHeight + scrollY <= topp - 60)
    //  movingImages[0].style.transform = `translateY(${-60}px)`;
        
    else
         movingImages[0].style.transform = `translateY(${100}px)`;
    //if (innerHeight + scrollY >  topp + movingImages[0].offsetHeight / 2)
    //else if (innerHeight + scrollY >= topp + 60)
     //   movingImages[0].style.transform = `translateY(${60}px)`;
}*/
moveImage();
window.addEventListener("scroll", moveImage);



