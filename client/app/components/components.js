import angular from 'angular';
import ohmController from './ohm/ohm.controller.js';
import ohmComponent from './ohm/ohm.component.js';

let componentModule = angular.module('app.components', []);


componentModule.controller('OhmController', ohmController);
componentModule.directive('ohmCalculator', ohmComponent);

export default componentModule;
