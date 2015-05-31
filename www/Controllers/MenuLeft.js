(function() {
	'use strict';

	angular.module('starter.controllers')
    	.controller('AppCtrl', appCtrl);

    function appCtrl() {
		var _menu = this;

		_menu.fruits = [
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

		console.log('Loading MenuLeft!');
		console.log(_menu);
	};

})()
