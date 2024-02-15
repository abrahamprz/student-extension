window.onload = function() {
    document.getElementById('currentTime').textContent = 'Current Time: ' + new Date().toLocaleTimeString();
    document.getElementById('browserInfo').textContent = 'Browser Info: ' + navigator.userAgent;

    chrome.identity.getProfileUserInfo(function(userInfo) {
        if (userInfo.email) {
            document.getElementById('email').textContent = 'Email: ' + userInfo.email;
        } else {
            document.getElementById('email').textContent = 'Missing account information. Make sure you are signed in and enabled sync.';
        }
    });
};