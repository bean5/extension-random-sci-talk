
window.onload = function() {
	var min = 4026;
	var max = 7211;

	var randomInt = Math.floor(Math.random()*(max - min + 1));
	var randomTalkId = randomInt + min;
	//alert(randomTalkId);
	var loc = "http://scriptures.byu.edu/gt3.php?ID=" + randomTalkId;
	//alert(loc);
	document.getElementById('talk_frame').src = loc;
}

