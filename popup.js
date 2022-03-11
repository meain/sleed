function sendNotification(speed) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, speed)
  })
}

function updateSpeed(speed) {
  sendNotification(speed)
  document.getElementById('display').innerText = 'Speed: ' + speed
  document.getElementById('slider').value = speed // when we update using buttons
}

document.addEventListener(
  'DOMContentLoaded',
  function () {
    document.getElementById('slider').oninput = () => updateSpeed(slider.value)
    document.getElementById('1').onclick = () => updateSpeed(1)
    document.getElementById('1.5').onclick = () => updateSpeed(1.5)
    document.getElementById('2').onclick = () => updateSpeed(2)
    document.getElementById('2.25').onclick = () => updateSpeed(2.25)
    document.getElementById('2.5').onclick = () => updateSpeed(2.5)
    document.getElementById('2.75').onclick = () => updateSpeed(2.75)
    document.getElementById('3').onclick = () => updateSpeed(3)
    document.getElementById('3.25').onclick = () => updateSpeed(3.25)
    document.getElementById('3.5').onclick = () => updateSpeed(3.5)
    document.getElementById('3.75').onclick = () => updateSpeed(3.75)
    document.getElementById('4').onclick = () => updateSpeed(4)
  },
  false
)
