import angular from 'angular';
import ngRoute from 'angular-route';

import phoneModule from '../core/phone/phone.module.js';
import phoneDetailComponent from './phone-detail.component.js';

// Define the `phoneDetail` module
export default angular.module('phoneDetail', [
  ngRoute,
  phoneModule
])
.component('phoneDetail', phoneDetailComponent)
.name;
