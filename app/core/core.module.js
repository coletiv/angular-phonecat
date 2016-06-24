import angular from 'angular';
import phoneModule from './phone/phone.module.js';
import checkMarkFilter from './checkmark/checkmark.filter.js';

// Define the `core` module
export default angular.module('core', [phoneModule])
.filter('checkmark', checkMarkFilter)
.name;
