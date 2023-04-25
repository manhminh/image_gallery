const images = document.querySelectorAll('.images img');
const gallery = document.querySelector('.gallery');
const galleryImg = document.querySelector('.gallery__inner img');
const closeBtn = document.querySelector('.control.close');
const prevBtn = document.querySelector('.control.prev');
const nextBtn = document.querySelector('.control.next');

let currentIndex = 0;

function showImage() {
    console.log(currentIndex);
    if (currentIndex === 0) {
        prevBtn.classList.add('hide');
    } else {
        prevBtn.classList.remove('hide');
    }

    if (currentIndex === images.length - 1) {
        nextBtn.classList.add('hide');
    } else {
        nextBtn.classList.remove('hide');
    }
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show');
}

images.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex = index;
        showImage();
    })
})

closeBtn.addEventListener('click', (e) => {
    console.log(e.target);
    gallery.classList.remove('show');
})

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        gallery.classList.remove('show');
    }

    if(e.key === 'ArrowLeft' && currentIndex > 0) {
        currentIndex--;
        showImage();
    } else if(e.key === 'ArrowRight' && currentIndex < images.length-1) {
        currentIndex++;
        showImage();
    }
})

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showImage();
    }
})

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        showImage();
    }
})