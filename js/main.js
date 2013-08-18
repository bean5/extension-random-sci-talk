$(document).ready(selectRandomTalk);
var currentTalk = 0;

function selectTalk(id) {
	currentTalk = id;

	//alert(randomTalkId);
	var loc = "http://scriptures.byu.edu/gt3.php?ID=" + currentTalk;
	//alert(loc);
	var talk_frame = document.getElementById('talk_frame');
	talk_frame.src = loc;

	// location_link.href = loc;
	location_link.innerHTML = loc;
}

function selectRandomTalk() {
	var min = 4026;
	var max = 7211;

	var randomInt = Math.floor(Math.random()*(max - min + 1));
	var randomTalkId = randomInt + min;

	selectTalk(randomTalkId);

	// $.ajax(loc)
	// .done(
	// 	function(data) {
	// 		alert('pass');
	// 		// if(data.strstr('Unable to locate talk in database.') > 0)
	// 		// {
	// 		// 	var talk_frame = document.getElementById('talk_frame');
	// 		// 	talk_frame.src = loc;
	// 		// }
	// 	}
	// )
	// .fail(
	// 	function(data) {
	// 		//alert('fail');
	// 		// selectRandomTalk();
	// 	}
	// )
	// .always(
	// 	function(data) {
	// 		// alert('always');
	// 	}
	// );
	
	// $.ajax({
	// 	//type: "[POST|GET]",
	// 	type: "POST",
	// 	url: loc,
	// 	//data: "{'[key]': '[value]' }",
	// 	//contentType: "[Content Type] ",
	// 	//dataType: "json",
	// 	success: function(response) {
	// 		//TODO: Add function or method to response handler
	// 		alert(response);
	// 	},
	// 	error: function(e){
	// 		//TODO: Add function or method to error handler.
	// 		alert('fail');
	// 	}
	// });

	// $.ajax({
 //        url: loc,
 //        success: function(data) {
 //            // $("result").html(data);
 //            // alert('Load was performed.' + data);
 //            // var url = 'www.wp.pl';
 //            // $('div#result').load(url);
 //            //var content = $.load(url);
 //            //alert(content);
 //            //$("#result").html("test");
 //            alert(data);
 //        },
 //        failure: function(data) {
 //        	alert('fail');
 //        }
 //    });
}

function selectPrevTalk() {
	selectTalk(currentTalk-1);
}

function selectNextTalk() {
	selectTalk(currentTalk+1);
}