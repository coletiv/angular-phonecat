import angular from 'angular';
import ngResource from 'angular-resource';
import PhoneFactory from './phone.service.js';


export default angular.module('core.phone', [ngResource])
.factory('Phone', PhoneFactory)
.name;
