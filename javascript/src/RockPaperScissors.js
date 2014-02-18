function Player(name){
	this.name = name;
}

Player.prototype.picks = function(something) {
	this.pick = something;
}

function Game(player1, player2){
	this.player1 = player1;
	this.player2 = player2;
}

function Pick(name){
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
	verb = this.pairs[this.name][otherPick.name];

	if(verb) {
		return [this.name, verb, otherPick.name].join(' ');
	} else {
		return false;
	}
}

// Game.prototype.winner = function() {
// 	return this.player1;
// }