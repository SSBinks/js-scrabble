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

  // Object.prototype.getKeyByValue = function( value ) {
  //   for( var prop in Scrabble.scoreChart ) {
  //     if( Scrabble.scoreChart.hasOwnProperty( prop ) ) {
  //       if( Scrabble.scoreChart[ prop ] === value )
  //       return prop;
  //     }
  //   }
  // },
  score: function(word) {
    var score = 0;
    var upWord = word.toUpperCase();
    for (i = 0; i < upWord.length; i++) {


      console.log(">>>>>>>>" + Scrabble.scoreChart.getKeyByValue(upWord[i]));
      score += parseInt(Scrabble.scoreChart.getKeyByValue(upWord[i]));
      console.log("+++++++++++++++++++" + score);

    }
    return score;
  },
};





// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

var shari = new Scrabble();
nono = shari.score("cat");
console.log(nono);

module.exports = Scrabble;
