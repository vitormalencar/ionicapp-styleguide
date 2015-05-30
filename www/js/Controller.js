(function() {
    'use strict';

    angular.module('starter.controllers', [])
    .controller('AppCtrl', ctrlOne);


    function ctrlOne() {
		var _ctrl = this;

		_ctrl.tasks = [
		    { id: 1, title: 'Collect coins' },
		    { id: 2, title: 'Eat mushrooms' },
		    { id: 3, title: 'Get high enough to grab the flag' },
		    { id: 4, title: 'Find the Princess' },
		];
	};

})();
