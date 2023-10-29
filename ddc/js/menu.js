const menu = document.querySelector('#menu')
const menu_nav = document.querySelector('#menu nav')
const btn_nav = document.querySelector('#menu .label')
const chest_img = document.querySelector('#menu img')
var menu_chest = false
function interaction_menu(){
    if (menu_chest == false){
        chest_img.src = './img/chest-open.png'
        menu_chest = true
        menu_nav.style.maxHeight = '150px'

    }else{
        chest_img.src = './img/chest-closed.png'
        menu_chest = false
        menu_nav.style.maxHeight = '0'

    }
}
chest_img.addEventListener('click',()=>{
    interaction_menu()
})
btn_nav.addEventListener('click',()=>{
    interaction_menu()
})
