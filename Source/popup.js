document.addEventListener('DOMContentLoaded', function() {
    var settings = new Store('settings', {
      enabled: false
    })
    if (settings.get('enabled')) {
      setIconDisabled();
      settings.set('enabled', false)
      var text = document.createTextNode('Anticipation is disabled, YouTube and Twitch time will be shown. Refresh your tab if you are already on YouTube or Twitch.')
    } else {
      setIconEnabled();
      settings.set('enabled', true)
      var text = document.createTextNode('Anticipation is enabled, YouTube and Twitch time will be hidden on the next video you click on or after refreshing your tab. You can use your keyboard arrow keys to rewind and fast forward if needed.')
    }
    $('#message').html(text);
})


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
