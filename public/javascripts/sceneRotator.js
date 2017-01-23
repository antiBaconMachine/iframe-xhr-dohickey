window.onload = function () {
  const iframe = document.querySelector('iframe')

  if (iframe) {
    const urlParams = new URLSearchParams(window.location.search)
    const h2 = document.querySelector('h2');

    let scene = urlParams.has('scene') ? urlParams.get('scene') : 1

    function update() {
      iframe.src = `/scenes/${scene}`
      h2.innerHTML = `Scene: ${scene}`
    }

    update()

    return setInterval(() => {
      scene = scene === 1 ? 2 : 1
      update()
    }, 1000)
  }

  setInterval(() => window.location = `/single`, 1000)
}
