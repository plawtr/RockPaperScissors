
describe("Player", function() {
	it("shoud have a name", function() {
		player1 = new Player("Megan");
		expect(player1.name).toEqual("Megan");
	});

	it("can pick a Pick", function() {
		player1 = new Player("Megan");
		player1.picks("rock");
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
		expect(pick1.beats(pick3)).toBe('Rock smashes scissors.'); 
	});
});


describe("Game", function() {
	var player1, player2, game;
  
  beforeEach(function() {
    player1 = new Player('Player 1');
    player2 = new Player('Player 2');
    game = new Game(player1, player2);
 		// pickscissors = 
  });

	it("should take two players", function (){
		expect(game.player1).toEqual(player1);
		expect(game.player2).toEqual(player2);
	});

	it("rock should beat scissors", function(){		
    player1.picks('rock');
    player2.picks('scissors');
    expect(game.winner()).toBe("Rock smashes scissors.");
	});

	it("spock should be disproven by paper", function() {
		player1.picks('spock');
		player2.picks('paper');
		expect(game.winner()).toEqual("Paper disproves spock.");
	});

	it("should handle a draw", function() {
		player1.picks('spock');
		player2.picks('spock');
		expect(game.winner()).toEqual("Draw.");
	});

});
