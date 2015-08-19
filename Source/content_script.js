hideTimes();

document.addEventListener('DOMContentLoaded', function() {
	hideTimes();
});

(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
    hideTimes();
}, true);

function hideTimes(){
		var times = document.getElementsByClassName("video-time")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			vidTime.textContent="Time Hidden";
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
		times = document.getElementsByClassName("timestamp")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			var par1 = vidTime.parentNode
			par1.removeChild(vidTime);
			var repText = document.createTextNode("Time hidden by Anticipation for YouTube");
		 	par1.appendChild(repText);
			i--;
		}
		times = document.getElementsByClassName("ytp-progress-bar-container")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			var par1 = vidTime.parentNode.removeChild(vidTime);
			i--;
		}
}