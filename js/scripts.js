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


var wordPlace = function(sentence, word) {
  var places = []
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

$(document).ready(function() {
  $("form#wordorder").submit(function(event) {
    $(".sentence").empty();
    var sentence = $("input#sentence").val();
    var result = wordCounter(sentence);

    $(".result").text(result);
    $("#result").show();

    event.preventDefault();
  });
});
