import angular from 'angular';

import phoneModule from '../core/phone/phone.module.js';

import phoneListComponent from './phone-list.component.js';


export default angular.module('phoneList', [phoneModule])
.component('phoneList', phoneListComponent)
.name;
