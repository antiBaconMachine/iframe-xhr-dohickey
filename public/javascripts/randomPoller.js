function log() {
  var p = document.createElement('p');
  p.innerHTML = this.responseText;
  document.body.appendChild(p);
}

setInterval(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/random');
    xhr.addEventListener('load', log)
    xhr.send();
}, 1);
