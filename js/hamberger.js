"use strict";

const headPc = document.getElementById("pc_header");
const headSp = document.getElementById("sp_header");
const hamberger = document.getElementById("hamberger");
const closeHam = document.getElementById("close");

hamberger.addEventListener("click", (e) => {
	headPc.classList.add("header__none");
	headSp.classList.add("header__open");
});

closeHam.addEventListener("click", (e) => {
	headPc.classList.remove("header__none");
	headSp.classList.remove("header__open");
});
