(function() {
	'use strict';

	angular.module('starter.controllers')
		.controller('FruitsCtrl', fruitsList);

	function fruitsList() {
		var _fruits = this;

		_fruits.list = [
		    {
		    	id: 1,
		    	title: 'Orange',
		    	link: 'fruits/orange',
		    },
		    {
		    	id: 2,
		    	title: 'Apple',
		    	link: 'fruits/apple',
		    },
		    {
		    	id: 3,
		    	title: 'Banana',
		    	link: 'fruits/banana',
		    },
		    {
		    	id: 4,
		    	title: 'Strawbarry',
		    	link: 'fruits/strawbarry',
		    },
		];

		console.log('Loading Fruits!');
		console.log(_fruits);
	};

})()
