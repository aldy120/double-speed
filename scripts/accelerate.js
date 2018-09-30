function accelerate() {
  const videos = document.querySelectorAll('video')
  videos.forEach(video => video.playbackRate = 2)
  console.log('accelerated!')
}

console.log('In accerlerate.js')
accelerate()