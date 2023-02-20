console.log("content script loaded");

// Add a message listener to receive messages from the background script
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  // Check if the message is a connect action
  if (message.action === 'connect') {
    clickOnConnect();
  }
});

function clickOnConnect() {
  const connectButton = document.querySelectorAll('button[data-control-name="srp_profile_actions"]');
  connectButton.forEach(btn => {
    if (btn.innerText == "Connect") {
      btn.click();
    }
  });
}

setTimeout(clickOnConnect, Math.floor(Math.random() * 5000) + 5000);
