class PhoneListController {
  
  constructor(Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
}

PhoneListController.$inject = ['Phone'];


export default function phoneList() {
  return {
    template: require('./phone-list.template.html'),
    controller: PhoneListController};
}
