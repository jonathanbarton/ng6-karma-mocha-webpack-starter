import angular from 'angular';
import uiRouter from 'angular-ui-router';
import applicationConfig from './app-config';
import App from './app.component';
import Components from './components/components';
import 'normalize.css';

import ResistanceCalculatorService from './services/ResistanceCalculatorService';


let app = angular.module('app', [
  uiRouter,
  'app.components'
]);

app.config(applicationConfig);
app.directive('app', App);

//Services
app.service('resistanceCalculatorService', ResistanceCalculatorService);
