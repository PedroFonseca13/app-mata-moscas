let height = 0
let width = 0

function ajustaTamanhoPalcoJogo() {
  let height = window.innerHeight
  let width = window.innerWidth
}

ajustaTamanhoPalcoJogo()

function randomPosition() {
  let positionX = Math.floor(Math.random() * width)
  let positionY = Math.floor(Math.random() * height)

  const fly = document.createElement('img')
  fly.src = 'img/mosca.png'
  fly.className = 'fly-1'

  document.body.appendChild(fly)
}
