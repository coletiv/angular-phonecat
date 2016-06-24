class PhoneListController {
  
  constructor(Phone) {
  	this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

PhoneListController.$inject = ['Phone'];


const phoneListModule = {
  template  : require('./phone-list.template.html'),
  controller: PhoneListController
};

export default phoneListModule;
