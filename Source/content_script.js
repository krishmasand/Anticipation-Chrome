var enabled = false;
var leffen = false;
chrome.runtime.sendMessage({method: "enabled"}, function(response) {
  //for possible ideas/improvements for YouTube/Twitch extension integration
  	enabled = response.data;
  	leffen = response.lef;

	chrome.runtime.sendMessage({method: "getGuid", url: window.location.href, page: document.title, enabled: enabled}, function(response) {
	  	var guid = response.data;
		if(document.title != "YouTube" && document.title != "Twitch" && response.parse){
			//on a video page
		}
	});

});

var twitch = false;
var url = window.location.href;
twitch = (url.indexOf("twitch.tv") > -1);

//reset for awareness
url = " ";

if(enabled) hideTimes();
//if(leffen && (Date.now() < (new Date('2016-06-02').getTime()))) awareness();

document.addEventListener('DOMContentLoaded', function() {
	if(enabled) hideTimes();
	if(leffen && (Date.now() < (new Date('2016-06-02').getTime()))) awareness();
});

(document.body || document.documentElement).addEventListener('transitionend',
  function(/*TransitionEvent*/ event) {
  	if(enabled) hideTimes();
  	if(leffen && (Date.now() < (new Date('2016-06-02').getTime()))) awareness();
}, true);

//awareness about Leffen visa situation
function awareness(){
	if(window.location.href == url){
		//do nothing
	}
	else{
		url = window.location.href;

		var titleElem = document.getElementById("eow-title");
		var title = titleElem.textContent;

		var div=document.createElement("div"); 
		//titleElem.parentNode.appendChild(div); 
		var cont = document.getElementById("watch8-action-buttons");
		cont.appendChild(div);
		div.innerText="test123";
		alert(title);


	}

}

function hideTimes(){
	if(!twitch){
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
		var times = document.getElementsByClassName("player-seek__time player-seek__time--total")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			vidTime.textContent="Time Hidden by Anticipation for YouTube and Twitch - Use Arrow Keys to seek";
		}
		var times = document.getElementsByClassName("player-slider player-slider--roundhandle js-player-slider")
		for(i = 0; i < times.length; i++){
			var vidTime = times[i];
			var par1 = vidTime.parentNode
			par1.removeChild(vidTime);
			i--;
		}
		var times = document.getElementsByClassName("card__meta card__meta--right")
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