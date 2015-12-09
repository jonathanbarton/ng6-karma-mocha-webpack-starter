import angular from 'angular';
import uiRouter from 'angular-ui-router';
import App from './app.component';

angular.module('app', [
  uiRouter
])
.directive('app', App);