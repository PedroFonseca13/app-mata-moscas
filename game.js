let height = 0
let width = 0

function ajustaTamanhoPalcoJogo() {
  let height = window.innerHeight
  let width = window.innerWidth
}

ajustaTamanhoPalcoJogo()

let positionX = Math.floor(Math.random() * width)
let positionY = Math.floor(Math.random() * height)
