export default function Phone($resource) {
  
  return $resource('phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: {phoneId: 'phones'},
      isArray: true
    }
  });
}

Phone.$inject = ['$resource'];
