let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide-item");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


let playing = true;
let pauseButton = document.getElementById('pause');
let slideInterval = setInterval(function () {
    plusSlides(1);
}, 3000);

function pauseSlides() {
    pauseButton.innerHTML = '&#9658;';
    playing = false;
    clearInterval(slideInterval);
}

function playSlides() {
    pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
    playing = true;
    slideInterval = setInterval(function () {
        plusSlides(1);
    }, 3000);
}

pauseButton.onclick = function () {
    if (playing) {
        pauseSlides();
    } else {
        playSlides();
    }
};


document.querySelector('input[type="file"]').addEventListener('change', function () {
    if (this.files && this.files[0]) {

        let src = URL.createObjectURL(this.files[0]);
        let slidesWrapper = document.getElementById("wrapper");
        slidesWrapper.innerHTML += `<div class="slide-item"><div class="slide-item-image" style="background-image: url(${src})"></div></div>`;

        let dotsWrapper = document.getElementById("dots");
        let dotCount = document.getElementsByClassName("dot").length;
        dotsWrapper.innerHTML += `    <span class="dot" onclick="currentSlide(${dotCount + 1}); pauseSlides()"></span>`;
    }
});

