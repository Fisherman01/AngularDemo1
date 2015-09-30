(function(){
  var app = angular.module('angularDemo1', []);

  app.controller('DemoController', function(){
    this.products = cars;
  });

  var cars = [
      {brand: 'Pontiac', model: 'Trans Am', price: '?', souldOut: true, canPurchase: false},
      {brand: 'Porche', model: 'Panamera', price: '?', souldOut: true, canPurchase: true},
      {brand: 'Volkswagen', model: 'Golf', price: '900', souldOut: false, canPurchase: true}
  ];

})();
