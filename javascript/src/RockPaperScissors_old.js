function Pick(name) {
  this.name = name;
}

Pick.prototype.pairs = {
  scissors: { paper: 'cuts', lizard: 'decapitates'},
  paper:    { rock: 'covers', spock: 'disproves'},
  lizard:   { spock: 'poisons', paper: 'eats' },
  rock:     { scissors: 'smashes', lizard: 'crushes' },
  spock:    { rock: 'vaporizes', scissors: 'melts' }
}

Pick.prototype.beats = function(otherPick) {
  var verb = this.pairs[this.name][otherPick.name];

  if(verb) {
    return [this.name, verb, otherPick.name].join(' ');
  } else {
    return false;
  }
}

// Player class
function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(playerPick) {
  this.pick = new Pick(playerPick);
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Game.prototype.winner = function() {
  var p1Wins = this.player1.pick.beats(this.player2.pick);
  var p2Wins = this.player2.pick.beats(this.player1.pick);

  // console.log(p1Wins || p2Wins || 'draw');
  if(p1Wins) return p1Wins;
  if(p2Wins) return p2Wins;
  
  return 'Draw';
}