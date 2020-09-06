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
			currentImage.src = "/assets/images/ケチャ.JPG";
			slider1.classList.toggle("current");
			slider2.classList.toggle("current");
			current++;
			break;
		case 2:
			currentImage.src = "/assets/images/スマランのモスク.JPG";
			slider2.classList.toggle("current");
			slider3.classList.toggle("current");
			current++;
			break;
		case 3:
			currentImage.src = "/assets/images/ボロブドゥール.JPG";
			slider3.classList.toggle("current");
			slider4.classList.toggle("current");
			current++;
			break;
		case 4:
			currentImage.src = "/assets/images/ボロブドゥール上から.JPG";
			slider4.classList.toggle("current");
			slider5.classList.toggle("current");
			current++;
			break;
		case 5:
			currentImage.src = "assets/images/ディエン.JPG";
			slider5.classList.toggle("current");
			slider6.classList.toggle("current");
			current++;
			break;
		case 5:
			currentImage.src = "/assets/images/ペニダ島.JPG";
			slider6.classList.toggle("current");
			slider1.classList.toggle("current");
			current = 1;
			break;
	}
}, 5000);
