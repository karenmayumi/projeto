var aleatorio = Math.floor(Math.random()*100)
console.log(aleatorio)

const game = {
  dicaOut : document.querySelector(".aviso"),
  tentativaInp : parseInt(document.querySelector("input").value),
  allTrysOut : document.querySelector(".caixa_tent"),
  body : document.querySelector("body"),
  allTrysjs : total_tents = 0,
  mensage : document.querySelector(".mensage")
}

// ligação com as imagens
const steve = {
  perso : document.querySelector(".steve .perso"),
  heart : document.querySelector(".steve .heart"),
  hearts: 5
}
const skel = {
  perso : document.querySelector(".skeleton .perso"),
  heart : document.querySelector(".skeleton .heart"),
  hearts: 1
}


function verificar(aleatorio){
  game.tentativaInp = parseInt(document.querySelector("input").value)
  let tentativa = game.tentativaInp
  if(tentativa == aleatorio){game.dicaOut.textContent = "O número inserido é o aleatório!"
    return true
  }
  else{
    if(tentativa > aleatorio){game.dicaOut.textContent = "O número aleatório é MENOR que o inserido!"}
    else{game.dicaOut.textContent = "O número aleatório é MAIOR que o inserido!"}
    game.allTrysjs ++
    game.allTrysOut.textContent = game.allTrysjs
    return false
  }   
}


function atack_skel(){
  // comandos
  steve.hearts --
  setTimeout(()=>{
    skel.perso.src = './img/game/skel-a-1.png'
    steve.perso.src = './img/game/steve-d-2.png'

  },500)

  skel.perso.src = './img/game/skel-base.png'
  steve.perso.src = './img/game/steve-d-1.png'
    switch (steve.hearts){
      case 5:
        steve.heart.src = './img/game/fiveheart.gif'
        break
      case 4:
        steve.heart.src = './img/game/fourheart.gif'
        break
      case 3:
        steve.heart.src = './img/game/threeheart.gif'
        break
      case 2:
        steve.heart.src = './img/game/twoheart.gif'
        break
      case 1:
        steve.heart.src = './img/game/oneheart.gif'
        break
      case 0:
        game.mensage.textContent = 'Você Perdeu!'
        break
      case _:
        console.log("Erro! valor de coração inválido!")
    }

  setTimeout(()=>{
    skel.perso.src = './img/game/skel-base.png'
    steve.perso.src = './img/game/steve-base.png'
    
  },1000)


}
function atack_steve(){
  // comandos
  
  skel.hearts --
  setTimeout(()=>{
    steve.perso.src = './img/game/steve-a-1.png'
    steve.perso.style.transform = 'translateX(-30%) rotate(10deg);'
  },500)

  setTimeout(()=>{
    steve.perso.style.transform = 'translateX(-60%) rotate(-40deg);'
    switch (skel.hearts){
      case 1:
        steve.heart.src = './img/game/oneheart.gif'
      case 0:
        game.mensage.textContent = 'Você Ganhou!'
      case _:
        console.log("Erro! valor de coração inválido!")
    }
  },500)

    skel.perso.src = './img/game/skel-base.png'
    steve.perso.src = './img/game/steve-base.png'

}

game.body.addEventListener("keydown",(event)=>{
  if(event.key == "Enter"){
    if (verificar(aleatorio) == false){
      atack_skel()
      // codigo da animacao do steve

    }
    else{
      atack_steve()
    }
  }


  if(event.key == "r"){
    aleatorio = Math.floor(Math.random()*100)
    console.log(aleatorio)
    game.allTrysjs = 0
    game.allTrysOut.textContent = game.allTrysjs

    // adicionar os coracoes voltando ao normal

  }
})
