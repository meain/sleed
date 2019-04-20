function sendNotification(speed) {
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, speed);
  });
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    const slider = document.getElementById("slider");
    const valueDisplay = document.getElementById("display");
    slider.onchange = () => {
      sendNotification(slider.value);
      valueDisplay.innerText =  'Speed: ' + slider.value;
    };
  },
  false
);
