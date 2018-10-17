function restore() {
  const videos = document.querySelectorAll('video')
  videos.forEach(video => video.playbackRate = 1)
  console.log('restored!')
}

console.log('In restore.js')
restore()