function fadeout(element){
	var el = document.getElementById(element);
	setTimeout(function(){
		el.style["visibility"] = "visible";
		console.log("fadeout");
	},1000);
}

function fadein(element){
	var el = document.getElementById(element);
	setTimeout(function(){
		el.style["visibility"] = "hidden";
		console.log("fadein");
	},1000);
}

function change(value, tlocation){
	document.getElementById(tlocation).innerHTML = value
}

function apply(val,shows){

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





$(document).ready(function(){
	var infobox = document.getElementById("infocenter");

	var shows = [
		{name:"Stress Factory", 
		location:"New Brunswick, NJ",
		time: "7pm, 9pm, 11pm"},
		{name:"Carnegie Hall",
		location:"New York City, NY",
		time: "7pm, 10pm"},
		{name:"Stress Factory",
		location:"Bridgeport, CT",
		time:"7pm 9pm"}]
	
});


