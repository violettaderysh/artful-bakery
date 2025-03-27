if (document.getElementsByClassName('gallery').length > 0) { 
    // MODAL IMAGES
// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("modal-caption");

// Get all images with the class 'modal-trigger' to add event listeners
var images = document.querySelectorAll('.modal-trigger');

// Loop through images and add click event listeners
images.forEach(function (image) {
     image.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

    span.onclick = function () {
    modal.style.display = "none";
    };

     // Close modal when clicking outside the image
  modal.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
  };
    // Close modal when ESC key is pressed
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });

// MODAL IMAGES END
}

//HAMBURGER
const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".header-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

//HAMBURGER ENDS