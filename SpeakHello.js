var speakWord = "Hello";

function speak(name) {
	this.name=name;
	this.printInfo = function(){
		console.log(this.speakWord+ " " + this.name);
	}
}

var helloSpeaker = new speak(name)
helloSpeaker.printInfo;