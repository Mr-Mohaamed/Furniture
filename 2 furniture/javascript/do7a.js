const slider = document.querySelector(".collection-flex");
if (slider) {
	slider.addEventListener("wheel", (e) => {
		e.preventDefault();
		slider.scrollLeft += e.deltaY;
	});

	// Scroll by Draging.....................

	let isDown = false;
	let startX;
	let scrollX;

	slider.addEventListener("mousedown", (e) => {
		// e.preventDefault();
		isDown = true;
		slider.classList.add("active");
		startX = e.pageX - slider.offsetLeft;
		scrollX = slider.scrollLeft;
		console.log(startX, scrollX);
	});
	slider.addEventListener("mouseleave", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mouseup", () => {
		isDown = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 2;
		slider.scrollLeft = scrollX - walk;
	});
}
let detailsImg = document.querySelector("#details-img");
let imgName = document.querySelector("#item-name");
let itemImg = document.querySelectorAll(".collection-flex .item-img");
itemImg.forEach((item) => {
	item.addEventListener("mouseover", () => {
		detailsImg.src = item.children[0].src;
		imgName.textContent = item.dataset.name;
	});
});
