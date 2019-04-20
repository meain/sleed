console.log('Sleed loaded. Happy faster playbackRate')

function speedupVideos(speed) {
  console.log('speed:', speed)
  // we don't know which one. So, why not all?
  const videos = Array.from(document.getElementsByTagName("video"));
  videos.forEach(v => {
    v.playbackRate = speed;
  });
}

chrome.runtime.onMessage.addListener(function(request) {
  console.log("request", request)
  speedupVideos(request);
});
