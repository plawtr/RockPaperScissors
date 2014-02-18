
describe("Player", function() {
	it("shoud have a name", function() {
		player1 = new Player("Megan");
		expect(player1.name).toEqual("Megan");
	});

	it("can pick a Pick", function() {
		pick = new Pick("rock")
		player1 = new Player("Megan");
		player1.picks(pick);
		expect(player1.pick).toEqual(pick);
		expect(player1.pick.name).toEqual("rock");
	});

});

describe("Pick", function() {

	it ("shoud have a name", function() {
		pick = new Pick("spock");
		expect(pick.name).toEqual("spock");
	});

	it("rock should beat other picks other than paper", function() {
		pick1 = new Pick("rock");	
		pick2 = new Pick("paper");	
		pick3 = new Pick("scissors");
		expect(pick1.beats(pick2)).toBe(false);
		expect(pick1.beats(pick3)).toBe('rock smashes scissors'); 
	});
});


describe("Game", function() {
	var player1, player2, game;
  
  beforeEach(function() {
    player1 = new Player('Player 1');
    player2 = new Player('Player 2');
    game = new Game(player1, player2);
  });

	it("should take two players", function (){
		expect(game.player1).toEqual(player1);
		expect(game.player2).toEqual(player2);
	});


	// describe("Rock", function() {
	// 	it("should beat scissors", function (){
	// 		player1.picks('rock');
	// 		player2.picks('scissors');
	// 		expect(game.winner()).toBe(player1);
	// 	});

	// 	it("should lose to paper", function (){
	// 		player1.picks('rock');
	// 		player2.picks('paper');
	// 		expect(game.winner()).toBe(player2);
	// 	});
	// });

});
