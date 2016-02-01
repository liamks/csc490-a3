angular.module('controllers')
.controller('HomeCtrl', function(addressBook){
  
  this.addressBook = addressBook.all();

});