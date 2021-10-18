let height = 0
let width = 0

function ajustaTamanhoPalcoJogo() {
  height = window.innerHeight
  width = window.innerWidth
}

ajustaTamanhoPalcoJogo()

function randomPosition() {
  let positionX = Math.floor(Math.random() * width) - 90
  let positionY = Math.floor(Math.random() * height) - 90

  positionX = positionX < 0 ? 0 : positionX
  positionY = positionY < 0 ? 0 : positionY

  console.log(positionX, positionY);

  const fly = document.createElement('img')
  fly.src = 'img/mosca.png'
  fly.className = 'fly-1'
  fly.style.left = positionX + 'px'
  fly.style.top = positionY + 'px'
  fly.style.position = 'absolute'

  document.body.appendChild(fly)
}
