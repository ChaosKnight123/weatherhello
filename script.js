	var today = document.getElementsByClassName("today");
	var tomorrow = document.getElementsByClassName("tomorrow");
	var after = document.getElementsByClassName("after");
	var row = document.getElementsByClassName("row");
	var btn = document.getElementById("buttonshow");
	var day = new Date();
	var nextday = new Date(day);
	var afterday = new Date(day);
	nextday.setDate(day.getDate()+1);
	afterday.setDate(day.getDate()+2);
	var weekday = new Array(7);
	weekday[0] =  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	for(var i = 0 ; i< today.length; i++){
		for(var i = 0 ; i< tomorrow.length; i++){
			for(var i = 0 ; i< after.length; i++){
		today[i].innerHTML = weekday[day.getDay()]+" "+day.getMonth()+"-"+day.getDate();	
		tomorrow[i].innerHTML = weekday[nextday.getDay()]+" "+nextday.getMonth()+"-"+nextday.getDate();
		after[i].innerHTML = weekday[afterday.getDay()]+" "+afterday.getMonth()+"-"+afterday.getDate();
	}
	}
	}	
	$(document).ready(function(){
		$('ul li').click(function(){
			var b = $(this).index()+2;
			for(var i = 0; i<row.length; i++){
				$('.row').slideUp('slow');
			}
			$(".row:nth-child("+b+")").slideDown('slow');
			btn.style.display = "block";
		})
		btn.style.display = "none";
	});
	function show(){
		for(var i =0 ; i< row.length; i++){
				$('.row').slideDown('fast');
    	btn.style.display = "none";
    }
	}