({
afterChallengeReceived: function(cid, b, c, d){
	client.acceptChallenge(cid);
},
battleFinished: function(battleid, res, winner, loser){
	// non funziona
	client.removeBattleWindow(battleid);
},
})