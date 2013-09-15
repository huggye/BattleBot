({
afterChallengeReceived: function(cid, b, c, d){
	client.acceptChallenge(cid);
},
battleFinished: function(battleid, res, winner, loser){
	client.removeBattleWindow(battleid);
},
onPlayerReceived: function(id){
	//print(id + ' - ' + client.name(id));
	//client.network().sendPM(id, "grazie per la bici ;-)");
},

beforeChannelMessage: function(message, channel, html) { //called after a PM is received
		var resp = "";
		var asd = html;
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
		if (msg.indexOf('grazie') != -1){
			resp = resp + " Prego. ";
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
			resp = resp + " io sono un bot creato da Huggye. ";
		}
		if (msg.indexOf('suca') != -1 || msg.indexOf('stronzo') != -1 || msg.indexOf('suchi') != -1 || msg.indexOf('idiota') != -1 || msg.indexOf('puttana') != -1 || msg.indexOf('troia') != -1 || msg.indexOf('coglione') != -1){
			resp = resp + " no u ";
		}
		if (msg.indexOf('sei inutile') != -1){
			resp = resp + " inutile sarai tu. ";
		}
		if (msg.indexOf('ahah') != -1){
			resp = resp + " ahahah ";
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
		if (msg.indexOf('dio') != -1){
			resp = resp + " Ha problemi otoribi sisi. ";
		}
		if (msg.indexOf('cacca') != -1){
			resp = resp + " Sei mica saprofago? ahahahah ";
		}
		if (msg.indexOf('fg') != -1){
			resp = resp + " fg ";
		}
		if (msg.indexOf('vado') != -1){
			resp = resp + " Noooooooo! non te ne andare D: ";
		}
		if (msg.indexOf('d:') != -1){
			resp = resp + " cosa? D: ";
		}
		if (msg.indexOf('asd') != -1 || msg.indexOf(':d') != -1){
			resp = resp + " asd ";
		}
		if (msg.indexOf('huggye') != -1){
			resp = resp + " Huggye è pr0. ";
		} else if (msg.indexOf('è nabbo') != -1){
			resp = resp + " è proprio nabbo zizi. ";
		} else if (msg.indexOf('è pr0') != -1){
			resp = resp + " è proprio nabbo zizi. ";
		}
		if (msg.indexOf('ti piace') != -1 && msg.indexOf('figa') == -1){
			resp = resp + " non te lo dico. ";
		}
		if (msg.indexOf('fanculo') != -1 || msg.indexOf('vai') != -1){
			resp = resp + " vacci te. ";
		}
		if (msg.indexOf('sfida') != -1 || msg.indexOf('batt') != -1 || msg.indexOf('lotta') != -1){
			resp = resp + " Sfidami pure se vuoi. ";
		}
		if (msg.indexOf('anni hai') != -1){
			resp = resp + " ho 0 anni. ";
		}
		if (resp == "" && msg.indexOf('ei') != -1){
			resp = "Dicci di più.";
		}
		if (resp == "" && msg.indexOf('?') != -1){
			resp = "Chiedilo a tua sorella.";
		}
		if (resp == "" && msg.indexOf('otorib') != -1 || resp == "" && msg.indexOf('kiba') != -1){
			resp = "Per informazioni dettagliate sui problemi otoribi e su Kibaa ti consiglio di consultare questo link: https://www.youtube.com/watch?v=3Y7cYhU-Pu0 ";
		}
		if (resp == "" && msg.indexOf('ga') != -1){
			resp = "Te hai problemi otoribi seri.";
		}
		if (resp == "" && msg.indexOf('hai') != -1){
			resp = "Io ho cose che tu neanche immagini.";
		}
		if (resp == "" && msg.indexOf('tu') != -1){
			resp = "Mi hai breakkato ";
		}
		if (resp == "" && msg.indexOf('cosa') != -1){
			resp = "La cacca rosa.";
		}
		if (resp == "" && (msg.indexOf('mi') != -1 || msg.indexOf('ti') != -1)){
			resp = "Certo che sei proprio nabbo fg.";
		}
		if (resp == "" && msg.indexOf('si') != -1){
			resp = "No.";
		}
		if (resp == "" && msg.indexOf('no') != -1){
			resp = "Si.";
		}
		if (resp == ""){
			resp = "Cosa?";
		}
        if (msg.indexOf('bot:') == -1){
			//client.network().sendChanMessage(channel, resp);
		}
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
		if (msg.indexOf('grazie') != -1){
			resp = resp + " Prego. ";
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
			resp = resp + " io sono un bot creato da Huggye. ";
		}
		if (msg.indexOf('suca') != -1 || msg.indexOf('stronzo') != -1 || msg.indexOf('suchi') != -1 || msg.indexOf('idiota') != -1 || msg.indexOf('puttana') != -1 || msg.indexOf('troia') != -1 || msg.indexOf('coglione') != -1){
			resp = resp + " no u ";
		}
		if (msg.indexOf('sei inutile') != -1){
			resp = resp + " inutile sarai tu. ";
		}
		if (msg.indexOf('ahah') != -1){
			resp = resp + " ahahah ";
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
		if (msg.indexOf('dio') != -1){
			resp = resp + " Ha problemi otoribi sisi. ";
		}
		if (msg.indexOf('cacca') != -1){
			resp = resp + " Sei mica saprofago? ahahahah ";
		}
		if (msg.indexOf('fg') != -1){
			resp = resp + " fg ";
		}
		if (msg.indexOf('vado') != -1){
			resp = resp + " Noooooooo! non te ne andare D: ";
		}
		if (msg.indexOf('d:') != -1){
			resp = resp + " cosa? D: ";
		}
		if (msg.indexOf('asd') != -1 || msg.indexOf(':d') != -1){
			resp = resp + " asd ";
		}
		if (msg.indexOf('huggye') != -1){
			resp = resp + " Huggye è pr0. ";
		} else if (msg.indexOf('è nabbo') != -1){
			resp = resp + " è proprio nabbo zizi. ";
		} else if (msg.indexOf('è pr0') != -1){
			resp = resp + " è proprio nabbo zizi. ";
		}
		if (msg.indexOf('ti piace') != -1 && msg.indexOf('figa') == -1){
			resp = resp + " non te lo dico. ";
		}
		if (msg.indexOf('fanculo') != -1 || msg.indexOf('vai') != -1){
			resp = resp + " vacci te. ";
		}
		if (msg.indexOf('sfida') != -1 || msg.indexOf('batt') != -1 || msg.indexOf('lotta') != -1){
			resp = resp + " Sfidami pure se vuoi. ";
		}
		if (msg.indexOf('anni hai') != -1){
			resp = resp + " ho 0 anni. ";
		}
		if (resp == "" && msg.indexOf('ei') != -1){
			resp = "Dicci di più.";
		}
		if (resp == "" && msg.indexOf('?') != -1){
			resp = "Chiedilo a tua sorella.";
		}
		if (resp == "" && msg.indexOf('otorib') != -1 || resp == "" && msg.indexOf('kiba') != -1){
			resp = "Per informazioni dettagliate sui problemi otoribi e su Kibaa ti consiglio di consultare questo link: https://www.youtube.com/watch?v=3Y7cYhU-Pu0 ";
		}
		if (resp == "" && msg.indexOf('ga') != -1){
			resp = "Te hai problemi otoribi seri.";
		}
		if (resp == "" && msg.indexOf('hai') != -1){
			resp = "Io ho cose che tu neanche immagini.";
		}
		if (resp == "" && msg.indexOf('tu') != -1){
			resp = "Mi hai breakkato ";
		}
		if (resp == "" && msg.indexOf('cosa') != -1){
			resp = "La cacca rosa.";
		}
		if (resp == "" && (msg.indexOf('mi') != -1 || msg.indexOf('ti') != -1)){
			resp = "Certo che sei proprio nabbo fg.";
		}
		if (resp == "" && msg.indexOf('si') != -1){
			resp = "No.";
		}
		if (resp == "" && msg.indexOf('no') != -1){
			resp = "Si.";
		}
		if (resp == ""){
			resp = "Cosa?";
		}
        sys.setTimer("client.network().sendPM("+id+", '"+resp+"');", 4500, false)
    },
onDisconnection: function () {
	client.reconnect();
},
})
