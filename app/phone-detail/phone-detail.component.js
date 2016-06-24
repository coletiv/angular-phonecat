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


const phoneDetail = {
  template: require('./phone-detail.template.html'),
  controller: PhoneDetailController
}

export default phoneDetail;
