let height = 0
let width = 0
let life = 1
let time = 10

function ajustaTamanhoPalcoJogo() {
  height = window.innerHeight
  width = window.innerWidth
}

ajustaTamanhoPalcoJogo()

let stopwatch = setInterval(() => {
  time -= 1
  document.querySelector('span#stopwatch').innerHTML = time
}, 1000)

function randomPosition() {
  //remove fly existing
  if (document.getElementById('fly')) {
    document.getElementById('fly').remove()
    if (life > 3) {
      window.location.href = 'game_over.html'
    } else {
      document.querySelector(`img#life-${life}`).src = 'img/coracao_vazio.png'
      life++
    }
  }

  let positionX = Math.floor(Math.random() * width) - 90
  let positionY = Math.floor(Math.random() * height) - 90

  positionX = positionX < 0 ? 0 : positionX
  positionY = positionY < 0 ? 0 : positionY

  console.log(positionX, positionY)

  const fly = document.createElement('img')
  fly.src = 'img/mosca.png'
  fly.className = randomSize() + ' ' + randomSide()
  fly.style.left = positionX + 'px'
  fly.style.top = positionY + 'px'
  fly.style.position = 'absolute'
  fly.id = 'fly'
  fly.onclick = () => this.remove()

  document.body.appendChild(fly)
}

function randomSize() {
  let flies = Math.floor(Math.random() * 3)

  switch (flies) {
    case 0:
      return 'fly-1'
    case 1:
      return 'fly-2'
    case 2:
      return 'fly-3'
  }
}

function randomSide() {
  let sideFlies = Math.floor(Math.random() * 2)

  switch (sideFlies) {
    case 0:
      return 'side-A'
    case 1:
      return 'side-B'
  }
}
