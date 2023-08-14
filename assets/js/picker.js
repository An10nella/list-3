let gameOneEl = document.getElementById ("game1")
let gameTwoEl = document.getElementById ("game2")
let btnOneBtn = document.getElementById ("btn1")
let btnTwoBtn = document.getAnimations ("btn2")

gameOneEl.addEventListener("click",function(){

    // document.title = ("Emoji")
    // function secondPage(){
    //     window.location.replace("login.html")
    // }
   
    thirdPage()
})

gameTwoEl.addEventListener("click" , function(){

    secondPage()
}) 
function secondPage(){
    window.location.replace("bj.html")

}

function thirdPage(){
    window.location.replace("login.html")
}