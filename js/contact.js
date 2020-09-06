"use strict";

const faqList = document.querySelectorAll(".faq__list");

faqList.forEach((faq) => {
	faq.addEventListener("click", (e) => {
		e.target.nextElementSibling.classList.toggle("open");
	});
});
