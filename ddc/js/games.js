var aleatorio = Math.floor(Math.random()*100)
console.log(aleatorio)

const game = {
  dicaOut : document.querySelector(".aviso"),
  tentativaInp : parseInt(document.querySelector("input").value),
  allTrysOut : document.querySelector(".caixa_tent"),
  body : document.querySelector("body"),
  allTrysjs : total_tents = 0,
  mensage : document.querySelector(".mensage"),
  reiniciar : document.querySelector("#dicareinicio"),
  working : true
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
  steve.hearts --
  skel.perso.src = './img/game/skel-a-1.png'
  if(steve.hearts > 0){
    steve.perso.src = './img/game/steve-d-1.png'

    setTimeout(()=>{
      skel.perso.src = './img/game/skel-base.png'
      steve.perso.src = './img/game/steve-d-2.png'
      switch (steve.hearts){
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
        case _:
          steve.hearts = 0
          console.log("Erro! valor de coração inválido!")
      }
    },500)
  }else{
    setTimeout(()=>{
      skel.perso.src = './img/game/skel-base.png'
      game.mensage.textContent = 'Você Perdeu!'
      game.working = false
      steve.perso.style.transform = 'rotate(90deg) translate(40%, -10%)'
      document.querySelector("input").classList.add('noselect')
      game.reiniciar.focus()
    },500)
  }

  

  setTimeout(()=>{
    steve.perso.src = './img/game/steve-base.png'},1000)

  }
function atack_steve(){
  skel.hearts --
  steve.perso.src = './img/game/steve-a-1.png'
  steve.perso.style.transform = 'translateX(-30%) rotate(10deg)'
  document.querySelector("input").classList.add('noselect')
  game.reiniciar.focus()
  setTimeout(()=>{
    steve.perso.src = './img/game/steve-base.png'
    steve.perso.style.transform = 'translateX(-60%) rotate(-40deg)'
    skel.perso.style.transform = 'rotate(-15deg) translate(-5%, 5%)'
        setTimeout(()=>{
          game.mensage.textContent = 'Você Ganhou!'
          game.working = false
          skel.perso.style.transform = 'rotate(-90deg) translate(-40%, -10%)'
          steve.perso.classList.add('happy')
          steve.perso.src = './img/game/steve-a-1.png'
        },650)
    
  },700)
}

game.body.addEventListener("keydown",(event)=>{
  if(event.key == "Enter"){
    if (verificar(aleatorio) == false && game.working == true){
      atack_skel()
      
    }
    else if(game.working == true){
      atack_steve()
    }
    
  }


  if(event.key == "r"){
    location.reload()
  }
})
