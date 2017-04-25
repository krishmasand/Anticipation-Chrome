var settings = new Store('settings', {'enabled': false, 'leffen': true, 'guid': false, 'page': false, 'url': false, 'prevEnabled': 1})

if (settings.get('enabled')) {
  setIconEnabled();
} else {
  setIconDisabled();
}

var guid = false;
if (settings.get('guid')) {
  guid = settings.get('guid');
} else {
  guid = guidMake();
  settings.set('guid', guid);
}

//Listen for when a Tab changes state
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
    chrome.tabs.executeScript(tab.id, {file:"content_script.js"});
  if(changeInfo && changeInfo.status == "complete"){
      chrome.tabs.sendMessage(tabId, {data: tab}, function(response) {
          console.log(response);

        chrome.tabs.executeScript(tab.id, {file:"content_script.js"});

      });
  }
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getGuid"){
		var parse = false;
		if(request.page == settings.get('page') && request.url == settings.get('url') && request.enabled == settings.get('prevEnabled')){
			parse = false;
		}
		else{
			settings.set('prevEnabled', request.enabled);
			settings.set('page', request.page);
			settings.set('url', request.url);
			parse = true;
		}
  		sendResponse({data: guid, parse: parse});
	}
	else if (request.method == "enabled"){
		sendResponse({data: settings.get('enabled'), lef: settings.get('leffen')});
	}
    else
      sendResponse({}); // snub them.
});

function guidMake() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};

function setIconEnabled(){
    chrome.browserAction.setIcon({
      path : {
      "19": "icon48.png",
      "38": "icon128.png"
      }
    });
    chrome.browserAction.setTitle({title : "Anticipation - Active"});
}

function setIconDisabled(){
    chrome.browserAction.setIcon({
      path : {
      "19": "inactive48.png",
      "38": "inactive128.png"
      }
    });
    chrome.browserAction.setTitle({title : "Anticipation - Inactive"});
}


