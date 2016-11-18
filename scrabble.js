Scrabble =  {
  scoreChart: {
    1: ["A","E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"]
  },


  score: function(word) {
    var score = 0;
    var upWord = word.toUpperCase();
    var num = Object.keys(Scrabble.scoreChart);
    var letters = Object.values(Scrabble.scoreChart);
    for (i = 0; i < upWord.length; i++) {
      for (d = 0; d < num.length; d ++){
        if (letters[d].includes(upWord[i])){
          score += parseInt(num[d]);
        }
      }
    }
    if (word.length >= 7){
      score += 50;
    }
    return score;
  },

  highestScore: function(words){
    var scores = [];
    var max = 0;
    var maxWord = "";
    words.forEach(function(element, index){
      scores.push(Scrabble.score(element));
    });
    for (var i = 0; i < scores.length; i++){
      if (scores[i] === max){
        if( (words[i].length === 7 && words[i] > maxWord) || ( words[i].length < maxWord.length && maxWord.length !== 7)){
          maxWord = words[i];
        }
      }
      else  if (scores[i] > max) {
        maxWord = words[i];
        max = scores[i];
      }
    }
    return maxWord;
  },
};







// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

//Faux TDD

//Cat shuold equal 5
var nono = Scrabble.score("cat");
console.log(nono);

// High scoring word 120 points as 50 is added
var highWord = Scrabble.score("zzzzzzz");
console.log(highWord);

//Should return a high scoring word which is tree
var shari = Scrabble.highestScore(["blue", "cat", "tree"]);
console.log(shari);

//should return dog as is smaller than trees but same value
var sameValue = Scrabble.highestScore(["trees", "dog"]);
console.log(sameValue);

// should return num
var longMax = Scrabble.highestScore(["foursts", "qqzzqq"]);
console.log(longMax);

//Should return boy as is the first max word with same value
var firstWord = Scrabble.highestScore(["dog", "pou", "boy", "cow"]);

console.log(firstWord);
module.exports = Scrabble;
