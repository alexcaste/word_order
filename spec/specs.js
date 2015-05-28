describe('sentenceSplit', function(){
  it("will split a sentence into an array", function(){
    expect(sentenceSplit("the box")).to.eql(["the", "box"])
  });
});

describe('findRepeat', function(){
  it("will find the number of words repeated in a sentence", function(){
    expect(findRepeat("who", "who")).to.equal(1)
  });
  it("will find the number of words repeated in a sentence", function(){
    expect(findRepeat("who who", "who")).to.equal(2)
  });
  it("will find the number of words repeated in a sentence", function(){
    expect(findRepeat("find who who", "who")).to.equal(2)
  });
});

describe('words', function() {
  it("will create a hash from a word and number", function(){
    expect(words("have", 3)).to.eql(["have",3])
  });
});

describe('wordPlace', function() {
  it("will return an array of indexes where the word shows", function(){
    expect(wordPlace("the the jordan is the is is is the", "the")).to.eql([0,1,4,8])
  });
});

describe('wordCounter', function() {
  it("will return an array containing the words and numbers", function(){
    expect(wordCounter("The the jordan is")).to.eql("the = 2, jordan = 1, is = 1")
  });
  it("will return an array containing the words and numbers for 3 repeats", function(){
    expect(wordCounter("The the jordan is the jordan")).to.eql("the = 3, jordan = 2, is = 1")
  });
});
