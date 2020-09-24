const helloSpeaker = {
	speakWord: 'Hello',	
};
//This says Hello
(function () {
	helloSpeaker.speak = function (userName) {
		return (helloSpeaker.speakWord + " " + userName);
	}
}());


//2
/*Goodbye speaker function*/
const byeSpeaker = {
	speakWord: 'Good Bye'
};

(function () {
	byeSpeaker.speak = function (userName) {
		return (byeSpeaker.speakWord + " " + userName);
	}
}());

//3
//This choose the names
(function () {
	var names = ['Yaakov', 'John', 'Jen', 'Jason', 'Paul', 'Frank', 'Larry', 'Paula', 'Laura', 'Jim'];
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		var firstLetter = name.charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			console.log(byeSpeaker.speak(name));
			document.write('<div class="col-lg-4 col-md-12"><div class="section"><div class="title">' + byeSpeaker.speak(name) + '</div></div></div>');
		} else {
			console.log(helloSpeaker.speak(name));
			document.write('<div class="col-lg-4 col-md-12"><div class="section"><div class="title">' + helloSpeaker.speak(name + '</div></div></div>'));
		}
	}
})();
