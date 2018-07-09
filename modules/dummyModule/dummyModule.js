import _ from 'lodash';

import './css/style.css'
import DummyImg from './imgs/dummy600x400.png'
import DummyMsg from './datas/message.json';

export function dummyComponent() {
	let element = document.createElement('div');
	element.classList.add('hello');

	element.innerHTML = _.join(['message : ', DummyMsg.message], ' ');

	let img = new Image();
	img.src = DummyImg;
	element.prepend(img);

	var button = document.createElement('button');
	button.innerHTML = 'Click me to load jquery!';

	button.onclick = () => {
		import('jquery').then(jquery => {
			let $ = jquery.default;
			$('body').css('backgroundColor', '#FF0');
		});
	}
	element.prepend(button);

	//Jquery should be only downloaded once
	var button2 = document.createElement('button');
	button2.innerHTML = 'Click me to load jquery once more!';

	button2.onclick = () => {
		import('jquery').then(jquery => {
			let $ = jquery.default;
			$('body').css('backgroundColor', '#F0F');
		});
	}

	element.prepend(button2);

	return element;
}

export function toString() {
	console.log('module import : ok')
}