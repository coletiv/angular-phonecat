import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngRoute from 'angular-route';

import core from './core/core.module.js';
import phoneDetailModule from './phone-detail/phone-detail.module.js';
import phoneListModule from './phone-list/phone-list.module.js';

import routing from './app.config.js';

// CSS
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import './app.animations.css';


// Define the `phonecatApp` module
export default angular.module('phonecatApp', [
  ngAnimate,
  ngRoute,
  core,
  phoneDetailModule,
  phoneListModule,
])
.config(routing)
.name;
