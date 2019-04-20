console.log('OK sleeding now.')

function sendNotification(speed) {
  chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, speed);
  });
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    // sendNotification(5)
    const slider = document.getElementById("slider");
    const valueDisplay = document.getElementById("display");
    console.log(slider)
    slider.onchange = () => {
      console.log(slider.value)
      sendNotification(slider.value);
      valueDisplay.innerText = slider.value;
    };
  },
  false
);
