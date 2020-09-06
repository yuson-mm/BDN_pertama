"use strict";

const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");
const slider4 = document.getElementById("slider4");
const slider5 = document.getElementById("slider5");
const slider6 = document.getElementById("slider6");
const currentImage = document.getElementById("currentImage");

let current = 1;
setInterval(() => {
	switch (current) {
		case 1:
			currentImage.src = "https://github.com/yuson-mm/BDN_pertama/blob/master/images/%E3%82%B1%E3%83%81%E3%83%A3.JPG";
			slider1.classList.toggle("current");
			slider2.classList.toggle("current");
			current++;
			break;
		case 2:
			currentImage.src = "https://github.com/yuson-mm/BDN_pertama/blob/master/images/%E3%82%B9%E3%83%9E%E3%83%A9%E3%83%B3%E3%81%AE%E3%83%A2%E3%82%B9%E3%82%AF.JPG";
			slider2.classList.toggle("current");
			slider3.classList.toggle("current");
			current++;
			break;
		case 3:
			currentImage.src = "https://github.com/yuson-mm/BDN_pertama/blob/master/images/%E3%83%9B%E3%82%99%E3%83%AD%E3%83%95%E3%82%99%E3%83%88%E3%82%99%E3%82%A5%E3%83%BC%E3%83%AB.JPG";
			slider3.classList.toggle("current");
			slider4.classList.toggle("current");
			current++;
			break;
		case 4:
			currentImage.src = "https://github.com/yuson-mm/BDN_pertama/blob/master/images/%E3%83%9B%E3%82%99%E3%83%AD%E3%83%95%E3%82%99%E3%83%88%E3%82%99%E3%82%A5%E3%83%BC%E3%83%AB%E4%B8%8A%E3%81%8B%E3%82%89.JPG";
			slider4.classList.toggle("current");
			slider5.classList.toggle("current");
			current++;
			break;
		case 5:
			currentImage.src = "https://github.com/yuson-mm/BDN_pertama/blob/master/images/%E3%83%86%E3%82%99%E3%82%A3%E3%82%A8%E3%83%B3.JPG";
			slider5.classList.toggle("current");
			slider6.classList.toggle("current");
			current++;
			break;
		case 5:
			currentImage.src = "https://github.com/yuson-mm/BDN_pertama/blob/master/images/%E3%83%98%E3%82%9A%E3%83%8B%E3%82%BF%E3%82%99%E5%B3%B6.JPG";
			slider6.classList.toggle("current");
			slider1.classList.toggle("current");
			current = 1;
			break;
	}
}, 5000);
