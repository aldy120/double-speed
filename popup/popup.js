function log(text) {
  document.getElementById('display').textContent = text
}

function accelerate() {
  log('accelerate')
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: "scripts/accelerate.js"});
  });
}

function retard() {
  log('retard')
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file: "scripts/retard.js"});
  });
}

document.getElementById('accelerate').addEventListener('click', accelerate)
document.getElementById('retard').addEventListener('click', retard)
