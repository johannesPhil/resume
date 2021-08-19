"use strict";

const openTab = (e, id) => {
	let tabLink, tabContent;

	tabLink = document.querySelectorAll(".tab");
	tabContent = document.querySelectorAll(".tab-content");

	for (let count = 0; count < tabLink.length; count++) {
		tabLink[count].classList.remove("active");
	}

	for (let count = 0; count < tabContent.length; count++) {
		tabContent[count].style.display = "none";
	}

	document.getElementById(id).style.display = "block";
	e.currentTarget.className += " active";
};

(() => {
	let tools = document.querySelectorAll(".tool"),
		toolsContainer = document.querySelector(".tools");

	let toolsObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.style.animation = `pop 500ms ${entry.target.dataset.delay}ms linear`;
				} else {
					entry.target.style.animation = "none";
				}
			});
		},
		{
			root: toolsContainer,
			threshold: 0.5,
		}
	);

	tools.forEach((target) => {
		toolsObserver.observe(target);
	});
})();
