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
	$("#navwrap").data("top", $("#navwrap").offset().top); // set original position on load
	$(window).scroll(fixDiv);
	
});

function fixDiv() {
    var $div = $("#navwrap");
    if ($(window).scrollTop() > $div.data("top")) { 
        $div.css({'position': 'fixed', 'top': '50px', 'width': '100%'}); 
    }
    else {
        $div.css({'position': 'absolute', 'transform': 'translate(-50%,-50%)','top':'90%'});
    }
}


