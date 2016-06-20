import angular from 'angular';

import phoneModule from '../core/phone/phone.module.js';

import phoneListComponent from './phone-list.component.js';


// Define the `phoneList` module
export default angular.module('phoneList', [phoneModule])
.component('phoneListComponent' ,phoneListComponent)
.name;
