import angular from 'angular';

import core from './core/core.module.js';
import phoneDetail from './phone-detail/phone-detail.module.js';
import phoneList from './phone-list/phone-list.module.js';

// Define the `phonecatApp` module
export default angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  core,
  phoneDetail,
  phoneList,
]).name;
