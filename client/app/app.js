import angular from 'angular';
import uiRouter from 'angular-ui-router';
import applicationConfig from './app-config';
import App from './app.component';
import Services from './services/services';
import Components from './components/components'
import 'normalize.css';

let app = angular.module('app', [
  uiRouter,
  Services.name,
  Components.name
]);

app.config(applicationConfig);

app.directive('app', App);
