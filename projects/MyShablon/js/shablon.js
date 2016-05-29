$(function() {

	var html = $('#test').html();
	var info = { 
	
	  	name: 'Гладун Павел Николаевич',
	  	photo: {
	  		src: 'img/pavel.jpg',
	  		alt: 'pasha'
	  	},
	  	about: 'Вольный художник импрессионист, мечтающий о постоянной работе.',
	  	why: 'Хочу учить frontend, потому что:',
	  	because: ['Кисти пересохли',
	  	          'Мальберты дорогие',
	  	          'Работа 24 часа в сутки'],
	  	tel: 'Мой контактный телефон:',
	  	number: '380631556565',
	  	vk: 'Мой профиль Вконтакте:',
	  	vkLink: 'https://vk.com/paul.gladoon',
	  	feedback: 'Мой feedback:',
	  	feedbackText: 'могу работать за еду.'
	};
	  

	var content = tmpl(html, info);


	$('body').append(content);
});
