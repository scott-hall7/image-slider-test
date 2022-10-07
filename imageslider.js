const imageSelector = document.querySelectorAll(".image-selector-logo");

let slideIndex = 1;
showImage(slideIndex);

const sliderButton = document.querySelectorAll(".slider-button");
sliderButton.forEach((button => {
    button.addEventListener('click', () => {
        if (button.id === 'slider-button-left') {
            slideIndex -= 1;
            console.log(slideIndex)
            showImage(slideIndex)
        } else {
            slideIndex += 1;
            console.log(slideIndex)
            showImage(slideIndex)
        }
    })
}))

imageSelector.forEach((img => {
    img.addEventListener('click', () => {
        //imageSelector.forEach(img => {img.classList.remove("active-selector")});
        //img.classList.add("active-selector");
        slideIndex = (img.id.charAt(img.id.length - 1) * 1);
        setActiveImage(slideIndex)
        showImage(slideIndex);
    })
}))

function setActiveImage(index)  {
    imageSelector.forEach((img => {
        img.classList.remove("active-selector");
        if ((img.id.charAt(img.id.length - 1) * 1) === index){
            img.classList.add("active-selector");
        }
    }))
}

function showImage(x)   {
    const imageSlider = document.getElementsByClassName("image-for-slider");
    if (x > imageSlider.length) {x = 1; slideIndex = 1};
    if (x < 1) {x = imageSlider.length; slideIndex = 5};
    setActiveImage(x)
    for(let i = 0; i < imageSlider.length; i++) {
        if ((x-1) === i)    {
            imageSlider[i].style.display = 'flex';
        } else {
            imageSlider[i].style.display = 'none'
        }
    }

}