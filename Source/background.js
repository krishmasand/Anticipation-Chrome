var settings = new Store('settings', {'enabled': false})

if (settings.get('enabled')) {
  setIconEnabled();
} else {
  setIconDisabled();
}

//Listen for when a Tab changes state
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
  if(settings.get('enabled')){
    chrome.tabs.executeScript(tab.id, {file:"content_script.js"});
  }
  if(changeInfo && changeInfo.status == "complete"){
      chrome.tabs.sendMessage(tabId, {data: tab}, function(response) {
          console.log(response);
          if(settings.get('enabled')){
            chrome.tabs.executeScript(tab.id, {file:"content_script.js"});
          }
      });
  }
});

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


