({
afterChallengeReceived: function(cid, b, c, d){
	client.acceptChallenge(cid);
},
battleFinished: function(battleid, res, winner, loser){
	client.removeBattleWindow(battleid);
},
onPlayerReceived: function(id){
	print(id + ' - ' + client.name(id));
},
afterPMReceived: function (id, message) { //called after a PM is received
		var resp = "";
		var msg = message.toLowerCase();
		if (msg.indexOf('ciao') != -1){
			resp = resp + " Ciao. ";
		}
		if (msg.indexOf('come va') != -1 || msg.indexOf('cm va') != -1 || msg.indexOf('come butta') != -1 || msg.indexOf('cm butta') != -1){
			resp = resp + " Bene grazie, te? ";
		}
		if (msg.indexOf('bene') != -1){
			resp = resp + " Ne sono felice c: ";
		}
		if (msg.indexOf('xd') != -1){
			resp = resp + " xD ";
		}
		if (msg.indexOf('lol') != -1){
			resp = resp + " lol ";
		}
		if (msg.indexOf('<3') != -1){
			resp = resp + " <3 ";
		}
		if (msg.indexOf('amo') != -1){
			resp = resp + " <3 ";
		}
		if (msg.indexOf('tesoro') != -1){
			resp = resp + " <3<3<3 ";
		}
		if (msg.indexOf('dolce') != -1 && msg.indexOf('sei') != -1){
			resp = resp + " tu di più <3 ";
		}
		if (msg.indexOf(':3') != -1){
			resp = resp + " :P ";
		}
		if (msg.indexOf('c:') != -1){
			resp = resp + " c: ";
		}
		if (msg.indexOf(':c') != -1){
			resp = resp + " :c ";
		}
		if (msg.indexOf(':)') != -1){
			resp = resp + " :) ";
		}
		if (msg.indexOf(':(') != -1){
			resp = resp + " :( ";
		}
		if (msg.indexOf('ç_ç') != -1){
			resp = resp + " perché piangi? D: ";
		}
		if (msg.indexOf('ok') != -1){
			resp = resp + " ok ";
		}
		if (msg.indexOf('tu?') != -1){
			resp = resp + " bene :) ";
		}
		if (msg.indexOf('sei?') != -1){
			resp = resp + " io sono un bot creato da huggye. ";
		}
		if (msg.indexOf('suca') != -1 || msg.indexOf('stronzo') != -1 || msg.indexOf('suchi') != -1 || msg.indexOf('idiota') != -1 || msg.indexOf('puttana') != -1 || msg.indexOf('troia') != -1 || msg.indexOf('coglione') != -1){
			resp = resp + " no u ";
		}
		if (msg.indexOf('sei inutile') != -1){
			resp = resp + " inutile sarai tu. ";
		}
		if (msg.indexOf('fai') != -1){
			resp = resp + " chatto con te, mi sembra ovvio. ";
		}
		if (msg.indexOf('sono triste') != -1){
			resp = resp + " mi dispiace. ";
		}
		if (msg.indexOf('sono felice') != -1){
			resp = resp + " ne sono contento. ";
		}
		if (msg.indexOf('figa') != -1){
			resp = resp + " w la figa ";
		}
		if (msg.indexOf('fg') != -1){
			resp = resp + " fg ";
		}
		if (msg.indexOf('d:') != -1){
			resp = resp + " cosa? D: ";
		}
		if (msg.indexOf('asd') != -1 || msg.indexOf(':d') != -1){
			resp = resp + " asd ";
		}
		if (msg.indexOf('huggye') != -1){
			resp = resp + " huggye è pr0. ";
		}
		if (msg.indexOf('ti piace') != -1 && msg.indexOf('figa') == -1){
			resp = resp + " non te lo dico. ";
		}
		if (msg.indexOf('fanculo') != -1){
			resp = resp + " vacci te. ";
		}
		if (msg.indexOf('anni hai') != -1){
			resp = resp + " ho 0 anni. ";
		}
		if (resp == ""){
			resp = "A questo non so ancora rispondere.";
		}
        client.network().sendPM(id, resp);
    },
onDisconnection: function () {
	client.reconnect();
},
})