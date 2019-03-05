

function change(value, tlocation){
	document.getElementById(tlocation).innerHTML = value
}

function apply(val,index,shows){
	if (val+1 >= index){
		val = 0;
	}
	if (val+1 < index){
		val = val+1;
	}
	var temp = shows[val];

	change(temp['name'],'name');
	change(temp['location'],'location');
	change(temp['time'],'time');

	return(val);
}

/*
$(document).ready(function(){
	while(true){
		var i = 0;
		apply(i);
		setTimeout(function(){}, 3000);
	}
})*/



var infobox = document.getElementsByClassName('info-box');

$(document).ready(function(){


	var shows = [
		{name:"Stress Factory", 
		location:"New Brunswick, NJ",
		time: "7pm, 9pm, 11pm"},
		{name:"Carnegie Hall",
		location:"New York City, NY",
		time: "7pm, 10pm"}]

	
	var index = shows.length;
	var i = 0;
	console.log(shows[0]);

	setInterval(function(){
		apply(i,index,shows);
		infobox.style.webkitTransform = 'floatIn';
	},3000);
});


