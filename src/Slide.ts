export default class Slide {
	container: Element;
	slides: Element[];
	controls: Element;
	time: number;
	index: number;
	slide: Element;
	constructor(
		container: Element,
		slides: Element[],
		controls: Element,
		time: number = 5000,
	) {
		this.container = container;
		this.slides = slides;
		this.controls = controls;
		this.time = time;

		this.index = 0;
		this.slide = this.slides[this.index];
	}
	hide(el: Element) {
		el.classList.remove("active");
	}

	show(index: number) {
		this.index = index;
		this.slide = this.slides[this.index]; //Verifica qual index(slide) esta ativo no momento
		this.slides.forEach((el) => this.hide(el));
		this.slide.classList.add("active"); //Analisa a verificacao acima e ativa o prox slide
	}
}
