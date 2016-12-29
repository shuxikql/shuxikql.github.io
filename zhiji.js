var choose_id = null;
$(document).ready(function() { 
	var left_data = [
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "readychoose"
		},
		{
			"A": "readychoose",
			"B": "readychoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "readychoose",
			"B": "okchoose",
			"C": "readychoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "readychoose",
			"B": "readychoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "readychoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "readychoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "readychoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "readychoose"
		},
		{
			"A": "okchoose",
			"B": "readychoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "readychoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "readychoose",
			"B": "okchoose",
			"C": "readychoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "readychoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "readychoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		},
		{
			"A": "okchoose",
			"B": "okchoose",
			"C": "okchoose"
		}
	];

	var right_data = [
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "readychoose"
		},
		{
			"H": "readychoose",
			"J": "readychoose",
			"K": "readychoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "readychoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "readychoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "readychoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "readychoose"
		},
		{
			"H": "readychoose",
			"J": "okchoose",
			"K": "readychoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "readychoose",
			"J": "readychoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "readychoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "readychoose"
		},
		{
			"H": "readychoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "readychoose",
			"K": "readychoose"
		},
		{
			"H": "okchoose",
			"J": "readychoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "readychoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "readychoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "readychoose",
			"K": "okchoose"
		},
		{
			"H": "okchoose",
			"J": "okchoose",
			"K": "okchoose"
		}
	];
	console.log(left_data[0]);
	var i = 21;
	var html_span_left = null;
	var html_span_right = null;

	for(i = 0; i < left_data.length; i++) {
		 var tmp_left = left_data[i];
		 var tmp_right = right_data[i];
		// console.log(tmp_right);
		 var row = i+21;

		 var html_li = '<li class="row-title" id="li-'+row+'">'+row+'</li>';
		 $('.side-row').append(html_li);

		 var html_div_left = '<div class="left-row row" id="row-left-'+row+'"></div>';
		 $('.left-seats').append(html_div_left);

		 var html_div_right = '<div class="right-row row" id="row-right-'+row+'"></div>';
		 $('.right-seats').append(html_div_right);

		 for(var index in tmp_left) {
		 	if(tmp_left[index] == "okchoose") {
		 		html_span_left = '<span class="seats-span '+tmp_left[index]+'">\
		 		<img id='+row+"-"+index+' src="images/okchoose.png" class="seat-atd" onclick="choose_seat(this)" /></span>';
		 	} 
		 	else if(tmp_left[index] == "readychoose") {
		 		html_span_left = '<span class="seats-span '+tmp_left[index]+'">\
		 		<img id='+row+"-"+index+' src="images/readychoose.png" /></span>';
		 	}
		 	$('#row-left-'+row).append(html_span_left);
		 }

		 for(var index_r in tmp_right) {
		 	if(tmp_right[index_r] == "okchoose") {
		 		html_span_right = '<span class="seats-span '+tmp_right[index_r]+'">\
		 		<img id='+row+"-"+index_r+' src="images/okchoose.png" class="seat-atd" onclick="choose_seat(this)"  /></span>';
		 	} 
		 	else if(tmp_right[index_r] == "readychoose") {
		 		html_span_right = '<span class="seats-span '+tmp_right[index_r]+'">\
		 		<img id='+row+"-"+index_r+' src="images/readychoose.png" /></span>';
		 	}
		 	$('#row-right-'+row).append(html_span_right);
		 }
	} 
}); 

var choose_seat = function(ele) {
	console.log(ele.id);
	if(choose_id == null) {
		choose_id = ele.id;
		$("#"+ele.id).attr("src","images/mychoose.png");
		var text = ele.id.split("-");
		$(".seat-id").text(text[0]+text[1]);
	}
	else {
		$("#"+choose_id).attr("src","images/okchoose.png");
		choose_id = ele.id;
		$("#"+ele.id).attr("src","images/mychoose.png");
		var text = ele.id.split("-");
		$(".seat-id").text(text[0]+text[1]);
	}
}

var deletechoose = function() {
	if(choose_id != null) {
		$(".seat-id").text('');
		$('#'+choose_id).attr("src", "images/okchoose.png");
		choose_id = null;
	}
}

var confirm_seat = function() {
	$(".window-content").show();
}

var  close_window = function() {
	$('img.seat-inner').attr('src',"images/btn_choose@2x.png");
	$('img.seat-inner').removeAttr("onclick");
	$('img.seat-atd').removeAttr("onclick");
	$(".window-content").hide();
}


