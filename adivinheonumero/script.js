

const quad = document.querySelector('.q')

const feliz = document.querySelector('.happy')
const angry = document.querySelector('.angry')




var num = Math.floor(Math.random()*100)
console.log(num)
var alerta = document.querySelector(".aviso")
var tentativa = document.querySelector("input").value
var caixa_tent = document.querySelector(".caixa_tent")
var total_tents = 0
var body = document.querySelector("body")

function verificar(num,tentativa,total_tents,caixa_tent,alerta){
  tentativa = document.querySelector("input").value
  if(tentativa == num){
    alerta.textContent = "O número inserido é o aleatório!"

    feliz.classList.add('visivel')
    setInterval(()=>{
      feliz.classList.remove('visivel')
    },3000)

    return true
  }
  else{
    if(tentativa > num){
      alerta.textContent = "O número aleatório é MENOR que o inserido!"
    }
    else{
      alerta.textContent = "O número aleatório é MAIOR que o inserido!"
      }
      angry.classList.add('visivel')
    setInterval(()=>{
      angry.classList.remove('visivel')
    },3000)
      return false
    }
}
body.addEventListener("keydown",(event)=>{
  if(event.key == "Enter"){
    if (verificar(num,tentativa,total_tents,caixa_tent,alerta) == false){
    total_tents++
    caixa_tent.textContent = total_tents
    }
  }
  if(event.key == "r"){
    num = Math.floor(Math.random()*100)
    console.log(num)
    total_tents = 0
    caixa_tent.textContent = total_tents
  }
})

