class PhoneDetailController {
  
  constructor($routeParams, Phone) {
    const phoneId = $routeParams.phoneId;
    
    this.phone = Phone.get({phoneId: phoneId}, (phone) => {
      this.setImage(phone.images[0]);
    });        
  }

  setImage(imageUrl) {
    this.mainImageUrl = imageUrl;
  }
}

PhoneDetailController.$inject = ['$routeParams', 'Phone'];


export default function phoneDetail() {
  return {
    template: require('./phone-detail.template.html'),
    controller: PhoneDetailController
  };
}
