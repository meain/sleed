function speedupVideos(speed) {
  // Let's just speed up all the videos in the page, what could go wrong?
  Array.from(document.getElementsByTagName('video')).forEach((v) => {
    v.playbackRate = speed
  })
}

chrome.runtime.onMessage.addListener(function (request) {
  speedupVideos(request)
})
