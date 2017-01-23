window.onload = function () {
  const iframe = document.querySelector('iframe')
  const urlParams = new URLSearchParams(window.location.search)
  const scene = urlParams.has('scene') ? urlParams.get('scene') : 1

  iframe.src = `/scenes/${scene}`

  setInterval(() => iframe.src = `/scenes/${scene === 1 ? 2 : 1}`, 1000)
}
