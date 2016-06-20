import angular from 'angular';
import phoneModule from './phone/phone.module.js';

// Define the `core` module
export default angular.module('core', [phoneModule]).name;
