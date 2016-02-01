angular.module('services')
.factory('addressBook', function(){
  function AddressBook(){};

  AddressBook.people = [
    {id: 'aa', name: 'Beverley McLachlin', dob: 'September 7, 1943', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/beverley-mclachlin-tn.jpg'},
    {id: 'a5', name: 'Rosalie Abella', dob: 'July 1, 1946', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/rosalie-silberman-abella-tn.jpg'},
    {id: '8f', name: 'Thomas Cromwell', dob: 'May 5, 1952', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/thomas-albert-cromwell-tn.jpg'},
    {id: 'd4', name: 'Michael Moldaver', dob: 'December 23, 1947', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/michael-j-moldaver-tn.jpg'},
    {id: 'cf', name: 'Andromache Karakatsanis', dob: 'October 3, 1955', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/andromache-karakatsanis-tn.jpg'}
  ];

  AddressBook.all = function(){
    return AddressBook.people;
  };

  AddressBook.filterByText = function(text){
    return [];
  };

  AddressBook.findById = function(id){
    return {};
  };

  AddressBook.remove = function(id){
    return undefined;
  };

  AddressBook.add = function(person){
    return {};
  };

  AddressBook.update = function(personObj){
    return {};
  };

  return AddressBook;
});