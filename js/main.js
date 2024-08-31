window.onload = function () {
  var mainImage = document.querySelector("#image"); // Replace '#image' with the selector for your main image
  var mainImageWidth = mainImage.offsetWidth + "px";
  var zIndex = 0; // Initialize z-index variable

  var imageUrls = [
    "images/d470563d5fb8de46687b32d9817752a8.jpg",
    "images/2bd64e1f291a5928f96758d14b3ed685.jpg",
    "images/9ab6ccb4d0b308ee02289cb7bbdf3eab.jpg",
    "images/14e571cb8423b130c4adb24f9b53767c.jpg",
    "images/69954020395faaf0d0e21d66e7aea308.jpg",
    // add more image URLs as needed
  ];

  var images = imageUrls.map(function (url) {
    var img = document.createElement("img");
    img.src = url;
    img.style.position = "absolute";
    img.style.display = "none";
    img.style.width = mainImageWidth; // Set the width of the image
    img.onclick = function () {
      // Add a click event listener
      mainImage.src = url; // Change the source of the main image
      img.style.zIndex = ++zIndex; // Increment z-index and set it to the clicked image
    };
    document.body.appendChild(img);
    return img;
  });

  var positions = Array(50).fill({ x: 0, y: 0 }); // Reduce the size of the positions array

  // Attach a mousemove event listener to the document
  document.addEventListener("mousemove", function (event) {
    // Calculate the mouse position
    var mouseX = event.clientX;
    var mouseY = event.clientY;

    // Update the positions array
    positions.unshift({ x: mouseX, y: mouseY });
    positions.pop();

    // Update the position of each image
    // Update the position of each image
    images.forEach(function (img, index) {
      var position = positions[(index * 5) % positions.length] || positions[0];
      img.style.left = position.x + "px";
      img.style.top = position.y + "px";
      img.style.display = "block";
    });
  });
};
