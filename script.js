// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Get all the thumbnail elements
var thumbnails = document.querySelectorAll(".thumbnail");

// Get the modal content element
var modalContent = document.querySelector(".modal-images");

// Loop through each thumbnail
thumbnails.forEach(function(thumbnail) {
  // Add a click event listener to each thumbnail
  thumbnail.addEventListener("click", function() {
    // Get the id of the clicked thumbnail
    var thumbnailId = this.id;

    // Show the modal
    modal.style.display = "block";

    // Get the images for the clicked thumbnail
    var images = [];
    if (thumbnailId === "thumbnail1") {
      // if thumbnail1 is clicked, get images from images/math/ folder
      images = [
        "images/math/1.0.0.jpeg",
        "images/math/1.0.1.jpeg",
        "images/math/1.0.2.jpeg",
        "images/math/1.0.3.jpeg",
        "images/math/1.0.4.jpeg",
        "images/math/1.0.5.jpeg",
        "images/math/1.0.6.jpeg",
        "images/math/1.0.7.jpeg",
        "images/math/1.0.8.jpeg",
        "images/math/c1.2.2.jpeg"
      ];
    } else if (thumbnailId === "thumbnail2") {
      // if thumbnail2 is clicked, get images from images/science/ folder
      images = [
        "images/english/1.0.0.jpeg",
        "images/english/1.0.1.jpeg",
        "images/english/1.0.2.jpeg",
        "images/english/1.0.3.jpeg",
        "images/english/1.0.4.jpeg",
        "images/english/1.0.5.jpeg",
        "images/english/1.0.6.jpeg",
        "images/english/1.0.7.jpeg",
        "images/english/1.0.8.jpeg",
        "images/english/c1.2.2.jpeg"
      ];
    } else if (thumbnailId === "thumbnail3") {
      // if thumbnail3 is clicked, get images from images/history/ folder
      images = [
        "images/geo/1.0.0.jpeg",
        "images/geo/1.0.1.jpeg",
        "images/geo/1.0.2.jpeg",
        "images/geo/1.0.3.jpeg",
        "images/geo/1.0.4.jpeg",
        "images/geo/1.0.5.jpeg",
        "images/geo/1.0.6.jpeg",
        "images/geo/1.0.7.jpeg",
        "images/geo/1.0.8.jpeg",
        "images/geo/c1.2.2.jpeg"
      ];
    }
    
    // Clear the modal content
    modalContent.innerHTML = "";

    // Loop through the images and add them to the modal content
    images.forEach(function(imageSrc) {
      var img = document.createElement("img");
      img.src = imageSrc;
      modalContent.appendChild(img);
    });
  });
});

// Add click event listener to the close button
closeBtn.addEventListener("click", function() {
  // Hide the modal
  modal.style.display = "none";

  // Clear the modal content
  modalContent.innerHTML = "";
});

// Add click event listener to the modal window
window.addEventListener("click", function(event) {
  // If the user clicks outside the modal content, hide the modal
  if (event.target == modal) {
    modal.style.display = "none";

    // Clear the modal content
    modalContent.innerHTML = "";
  }
});
