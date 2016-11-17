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
    return score;
  },
};







// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };


var nono = Scrabble.score("cat");
console.log(nono);

module.exports = Scrabble;
