var aleatorio = Math.floor(Math.random()*100)
console.log(aleatorio)

const game = {
  dicaOut : document.querySelector(".aviso"),
  tentativaInp : parseInt(document.querySelector("input").value),
  allTrysOut : document.querySelector(".caixa_tent"),
  body : document.querySelector("body"),
  allTrysjs : total_tents = 0
}

// ligação com as imagens
const steve = {
  perso : document.querySelector(".steve .perso"),
  hearts : document.querySelector(".steve .heart")
}
const skel = {
  perso : document.querySelector(".skeleton .perso"),
  hearts : document.querySelector(".skeleton .heart")
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
  skel.perso.url = './img/game/skel-a-1'
}
function atack_steve(){
  // comandos
}

game.body.addEventListener("keydown",(event)=>{
  if(event.key == "Enter"){
    if (verificar(aleatorio) == false){

      // codigo da animacao do steve

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

