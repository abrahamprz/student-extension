chrome.identity.getProfileUserInfo(function(userInfo) {
    chrome.storage.sync.set({ 'email': userInfo.email });
  });
  
  var deviceName = navigator.userAgent;
  chrome.storage.sync.set({ 'deviceName': deviceName });
  
  var currentTime = new Date().toLocaleTimeString();
  chrome.storage.sync.set({ 'currentTime': currentTime });