var twitch = false;
var url = window.location.href;
twitch = (url.indexOf("twitch.tv") > -1);
hideTimes();

document.addEventListener('DOMContentLoaded', function() {
	hideTimes();
});

(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
    hideTimes();
}, true);

function hideTimes(){
	if(!twitch){
		var times = document.getElementsByClassName("video-time")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			vidTime.textContent="Time Hidden";
		}
		times = document.getElementsByClassName("ytp-videowall-still-info-duration")
		for (i = 0; i < times.length; i++) {
		    var vidTime = times[i];
		    vidTime.textContent = "Time Hidden";
		}
		times = document.getElementsByClassName("ytp-tooltip-duration")
		for (i = 0; i < times.length; i++) {
		    var vidTime = times[i];
		    vidTime.textContent = "Time Hidden";
		}
		times = document.getElementsByClassName("ytp-ce-video-duration")
		for (i = 0; i < times.length; i++) {
		    var vidTime = times[i];
		    vidTime.textContent = "Time Hidden";
		}
		times = document.getElementsByClassName("ytp-time-duration")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			var par1 = vidTime.parentNode
			par1.removeChild(vidTime);
			var repText = document.createTextNode("Time hidden by Anticipation");
		 	par1.appendChild(repText);
			i--;
		}
		times = document.getElementsByClassName("ytp-progress-bar-container")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			vidTime.textContent="Time Hidden by Anticipation for YouTube and Twitch - Use Arrow Keys to seek";
			vidTime.style.textAlign = "center";
		}
		times = document.getElementsByClassName("timestamp")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			var par1 = vidTime.parentNode
			par1.removeChild(vidTime);
			var repText = document.createTextNode("Time hidden by Anticipation for YouTube");
		 	par1.appendChild(repText);
			i--;
		}
	}
	else{
		var times = document.getElementsByClassName("player-seek__time player-seek__time--total js-seek-totaltime")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			vidTime.textContent="Time Hidden by Anticipation for YouTube and Twitch";
		}
		var times = document.getElementsByClassName("player-slider player-slider--roundhandle js-seek-slider ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			vidTime.textContent="Time Hidden by Anticipation for YouTube and Twitch - Use Arrow Keys to seek";
			vidTime.style.textAlign = "center";
		}
		var times = document.getElementsByClassName("overlay_info length")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			vidTime.textContent="Time Hidden by Anticipation";
		}
		var times = document.getElementsByClassName("info")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			var text = vidTime.textContent
			var timeBool = (text.indexOf(":") > -1);
			if(timeBool){
				vidTime.textContent="Time Hidden";
			}
		}
	}
}