function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
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
	var infobox = document.getElementById();

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
	
	var index = shows.length;
	var i = 0;

	setInterval(function(){

		if (i == index-1){
			apply(i,shows);
			i = 0;
		}
		else{
			apply(i,shows)
			i = i +1;
		}


	},3000);
});


