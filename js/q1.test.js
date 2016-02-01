describe('stringProduct', function(){
  it('should return 0 if given empty string', function(){
    // calling stringProduct('') with empty string, expecting
    // it to return a 0.
    expect(stringProduct('')).toBe(0);
  });

  it('should return 1 if given a string with just 1', function(){
    expect(stringProduct('1')).toBe(1);
  });

  it('should return 10 if given the string "2,5"', function(){
    expect(stringProduct('2,5')).toBe(10);
  });

  it('should return 145152 if given the string "4,7,8,9,2,3,12"', function(){
    expect(stringProduct('4,7,8,9,2,3,12')).toBe(145152);
  });

  it('should return -15 if given the string "-3,5"', function(){
    expect(stringProduct('-3,5')).toBe(-15);
  });
});

describe('stringInterpolate', function(){
  it('should return "" if given an empty string', function(){
    expect(stringInterpolate('')).toBe('');
  });

  it('should return "hello world" if given: "hello %s", "world"', function(){
    expect(stringInterpolate('hello %s', 'world')).toBe('hello world');
  });

  it('should return "grocery list: milk, lettuce, eggs", given: "grocery list: %s, %s, %s", "milk", "lettuce", "eggs"', function(){
    expect(stringInterpolate("grocery list: %s, %s, %s", "milk", "lettuce", "eggs")).toBe('grocery list: milk, lettuce, eggs')
  });
});