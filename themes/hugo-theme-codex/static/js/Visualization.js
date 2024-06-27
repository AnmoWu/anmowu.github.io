let ap;
let fft;
let audioContext;
var want = document.getElementById("darkToggle");
//let w;

function setup() {
	createCanvas(300, 400, WEBGL);
	angleMode(DEGREES);
	stroke(255);
	//w = width / 64;
}

function draw() {
	if (want.checked){
		background("rgba(130, 114, 144, 1)");
	}else{
		background("white");
	}
	//background("white");
	if (fft) {
		let spectrum = fft.analyze();
		rotateX(44);

		for (var i = 0; i < spectrum.length; i++) {
			stroke("purple")
			rotate(7)
		
			beginShape()
			for (var j = 0; j < 360; j += 77) {
				var rad = spectrum[i] / 7
				var x = rad * cos(j)
				var y = rad * sin(j)
				var z = sin(frameCount * 5 + i * 5) * 50
				vertex(x, y, z)
			}
			endShape(CLOSE)
		}
	}
}

let metingElement = document.querySelector('meting-js');
let flag = true;
metingElement.addEventListener('aplayerload', function() {
	ap = metingElement.aplayer;
	ap.audio.crossOrigin = "anonymous";
	fft = new p5.FFT(0, 64);
	ap.on('play', function() {
		audioContext = p5.prototype.getAudioContext();
		audioContext.resume()
		//console.log("load test")
		
		if (flag) {
			console.log(audioContext);
			const source = audioContext.createMediaElementSource(ap.audio);
			fft.setInput(source);
			source.connect(audioContext.destination);
		}
		flag = false;
	});


});