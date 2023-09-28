
let arrayk = ['#1883CD','#72B0DB','#728ADB','#1883CD']
var color = 0
var quad = document.querySelector('.q')
setInterval(()=>{
  if (color == 4){
    color=0
  }
  quad.style.backgroundColor = arrayk[color]
  color++
},500)

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
    return true
  }
  else{
    if(tentativa > num){
      alerta.textContent = "O número aleatório é MENOR que o inserido!"
    }
    else{
      alerta.textContent = "O número aleatório é MAIOR que o inserido!"
      }
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