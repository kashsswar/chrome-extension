document.addEventListener('DOMContentLoaded', function() {
  var connectButton = document.getElementById('connectButton');
  if (connectButton) {
    connectButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'connect' }, function(response) {
          console.log(response);
        });
      });
    });
  }
});

  