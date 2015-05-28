var sentenceSplit = function(sentence) {
  var lowersentence = sentence.toLowerCase();
  var splitSentence = lowersentence.split(/\W/g);
  return splitSentence;
};

var findRepeat = function(sentence, word) {
  var substring = sentence.split(word);
  return substring.length-1;
};

var words = function(word, number) {
  var wordArray = []
  wordArray.splice(0,0,word)
  wordArray.splice(1,0,number)
  return wordArray;
};

// var where = function(sentence, word) {
//   var down = sentence.toLowerCase();
//   var split = sentenceSplit(down);
//   for (var x=0; x <split.length; x++) {
//     var comparethis = split[x]
//     if (word.equals(comparethis) == true) {
//       return true;
//     } else {
//       return false;
//     };
//   }
//
// };

var wordPlace = function(sentence, word) {
  var places = []
  // debugger;
  var down = sentence.toLowerCase();
  var split = sentenceSplit(down);
  var idx = split.indexOf(word)
  while (idx != -1) {
    places.push(idx)
    idx = split.indexOf(word, idx+ 1)
  }
  return places;
};

var wordCounter = function(sentence) {
  var outputArray = []
  var lower = sentence.toLowerCase();
  var split = sentenceSplit(sentence)
// debugger;
  for (var x=0; x < split.length; x++) {
    var word = split[x];
    var places = wordPlace(lower, word);
    var repeats = findRepeat(lower, word);
    if (places.length > 1) {
      if (x === places[0]) {
        var group = words(word, repeats);
        outputArray.push(group[0] + " = " + group[1]);
      }
    } else {
      var group = words(word, repeats)
      outputArray.push(group[0] + " = " + group[1]);
    };
  }
  return outputArray.join(", ")
};
