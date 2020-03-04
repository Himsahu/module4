var speakWord = "Good Bye";


function speak(name) {
 	this.name=name;
 	this.printInfo = function(){
 		console.log(this.speakWord + " "+ this.name);
 	}
}

var byeSpeaker = new speak(name);
byeSpeaker.printInfo;
