describe('addressBook', function(){
  var addrBook;
  var people = [
        {id: 'aa', name: 'Beverley McLachlin', dob: 'September 7, 1943', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/beverley-mclachlin-tn.jpg'},
        {id: 'a5', name: 'Rosalie Abella', dob: 'July 1, 1946', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/rosalie-silberman-abella-tn.jpg'},
        {id: '8f', name: 'Thomas Cromwell', dob: 'May 5, 1952', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/thomas-albert-cromwell-tn.jpg'},
        {id: 'd4', name: 'Michael Moldaver', dob: 'December 23, 1947', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/michael-j-moldaver-tn.jpg'},
        {id: 'cf', name: 'Andromache Karakatsanis', dob: 'October 3, 1955', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/andromache-karakatsanis-tn.jpg'}
      ];

  beforeEach(angular.mock.module('services'));
  beforeEach(inject(function(addressBook){
    addrBook = addressBook;
    addrBook.people = angular.copy(people);
  }));

  describe('all', function(){
    it('should return all the people', function(){
      expect(addrBook.all()).toEqual(people);
    });
  });

  describe('filterByText', function(){
    it('should return Thomas if given "tho"', function(){
      var results = addrBook.filterByText('tho');
      expect(results.length).toBe(1);
      expect(results[0].name).toBe('Thomas Cromwell');
    });

    it('should return 2 people if given "el"', function(){
      var results = addrBook.filterByText('el');
      expect(results.length).toBe(3);
      expect(results[0].name).toBe('Rosalie Abella');
      expect(results[1].name).toBe('Thomas Cromwell');
      expect(results[2].name).toBe('Michael Moldaver');
    });
  });

  describe('findById', function(){
    it('should return Rosalie if given "a5"', function(){
      var result = addrBook.findById('a5');
      expect(result.name).toBe('Rosalie Abella');
    });

    it('should return null if given "zz" (e.g. no match)', function(){
      var result = addrBook.findById('zz');
      expect(result).toBe(null);
    });
  });

  describe('remove', function(){
    it('should return Michael from the list and return him', function(){
      expect(addrBook.remove('d4').name).toBe('Michael Moldaver');
      expect(addrBook.all().length).toBe(4);
    });

    it('should fail to locate Johny (id yy) and return null (e.g. person not found)', function(){
      expect(addrBook.remove('yy')).toBe(null);
      expect(addrBook.all().length).toBe(5);
    });
  });

  describe('add', function(){
    it('should add a person to the array of people', function(){
      var person = {id: '44', name: 'asdf', dob: 'july 1, 2004'};
      addrBook.add(person);
      expect(addrBook.all().length).toBe(6);
    });
  });

  describe('update', function(){
    it('should find the person with a matching ID and replace that person in the array with personObj', function(){
      var updatedPerson = {id: 'aa', name: 'Beverley McLachlin', dob: 'September 10, 1943', photo: 'http://www.scc-csc.ca/court-cour/judges-juges/App/images/beverley-mclachlin-tn.jpg'};
      addrBook.update(updatedPerson);
      expect(addrBook.findById('aa').dob).toBe('September 10, 1943');

    });

    it('should return null if it cannot find the person to update', function(){
      var person = {id: '44', name: 'asdf', dob: 'july 1, 2004'};
      expect(addrBook.update(person)).toBe(null);
    });
  });

});