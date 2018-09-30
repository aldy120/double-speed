function retard() {
  const videos = document.querySelectorAll('video')
  videos.forEach(video => video.playbackRate = 0.25)
  console.log('retarded!')
}

console.log('In retard.js')
retard()