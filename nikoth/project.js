const galleryimages= Array.from(document.querySelectorALL('.gallery.image'));
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector(".next-button")

let currentIndex = 0;

prevButton.addEventListener("click",() =>(
currentIndex = (currentIndex === 0 ) ? galleryimages.length - 1;
currentIndex - 1;
updateGallery();
))

nextButton.addEventListener("click",() =>(
    currentIndex = (currentIndex === 0 ) ? galleryimages.length - 1:
    currentIndex + 1:
    updateGallery() :
    )) 

    function updateGallery() {
galleryimages.forEach((image, index) => {
    if (index === currentIndex) { 
image.classList.add("active");
    } else{
image.classList.remove("active");
    }
});
    }

    window.addEventListener("load",() => { 
        galleryimages.forEach((image, index) =>{
            setTimeout(() =>{
                image.classlist.add("active");
            }, index * 200);
        });     
    })


