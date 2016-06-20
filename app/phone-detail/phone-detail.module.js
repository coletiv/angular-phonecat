import angular from 'angular';
import phoneModule from '../core/phone/phone.module.js';

// Define the `phoneDetail` module
export default angular.module('phoneDetail', [
  'ngRoute',
  phoneModule
]).name;
