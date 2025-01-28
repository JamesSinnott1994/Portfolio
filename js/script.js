// On Load
var slideIndex = -1;

var pathName = window.location.pathname;
console.log(pathName);

if (pathName.endsWith("index.html")) {
	// Initial call
	homepageSlideShow()

	console.log("RUNNING CODE");

	function homepageSlideShow() {

		// Select the image element
		var homePageProjectsImage = document.querySelector(".home-section .placeholder");

		// Will contain a path to the images
		var homepageSlideshowImages = [
			"img/spacedodge1.PNG",
			"img/Fitbit2.png",
			"img/clashofgnomes.png",
			"img/rainbowrun1.png",
		];

		// Increment slide index
		slideIndex++;
		if(slideIndex === homepageSlideshowImages.length) {
			slideIndex = 0;
		}

		// Access image, and change it's image path
		homePageProjectsImage.src = homepageSlideshowImages[slideIndex];

		// Change image every 10 seconds
		setTimeout(homepageSlideShow, 10000);
	}
}

console.log("YEAR");
document.getElementById('year').textContent = new Date().getFullYear();