let gameBtn = document.getElementById("playCards")
let startBtnEl = document.getElementById("startBtn")
let newBtnEl = document.getElementById("newBtn")
let resetBtnEl = document.getElementById("resetBtn")
let sumScoreEL = document.getElementById("sumScore")
let questPlay = document.getElementById("playQuestion")
let bNameEl = document.getElementById("bjName")
let sumCount = 0
let cardsCount = 0
let randomCard = 0
let balanceAdmin = 200

// const cards = [1,2,3,4,5,6,7,8,9,10,11]
let win = 21
let oneTrial = false
let maxNumb = false
let startGame = false

startBtnEl.addEventListener("click", function () {
    if (!oneTrial && balanceAdmin >= 50) {
        oneTrial = true 
        startGame = true
        balanceAdmin -= 50

        let card01 = Math.floor(Math.random() * 13) + 1
        let card02 = Math.floor(Math.random() * 13) + 1
        sumCount = card01 + card02;

        bNameEl.innerHTML = `Antonella: $${balanceAdmin}`
        gameBtn.innerHTML = `Cards: ${card01} ${card02}`
        sumScoreEL.innerHTML = `Sum: ${sumCount}`

        if (sumCount == win) {
            questPlay.innerText = "Congratulations, You win!"
        } else {
            questPlay.innerText = "Try again?"
        }
    } else {
        questPlay.innerText = "Cannot start another trial."
    }
})
newBtnEl.addEventListener("click", function () {

if (startGame){

    if (balanceAdmin >= 50 && !maxNumb) {
        balanceAdmin -= 50
        bNameEl.textContent = `Antonella: $${balanceAdmin}`
       
    sumCount += randomCard
    randomCard = Math.floor(Math.random() * 13) + 1
    randCount = sumCount + randomCard 
  //   console.log(randCount)

    gameBtn.innerHTML += ` ${randomCard}`
    sumScoreEL.innerHTML = ` Sum:  ${randCount} `

        if (randCount > win) {
            maxNumb = true
            questPlay.innerText = "You have exceeded the number required!"
            // newBtnEl.disabled = true
            return
         } else if (randCount == win && !maxNumb) {
            maxNumb = true
            questPlay.innerText = "Congratulations, You win!"
        } else {
            questPlay.innerText = "Want to add more?"
        }
    } else if (!maxNumb) {
    questPlay.innerText = "Insufficient balance!"
    } else {
    questPlay.innerText = "You have exceeded the number required!"
    }
}else {
    questPlay.innerText = "Please Start Game first!"
}
  })

resetBtnEl.addEventListener("click",function(){
    randomCard = 0
    sumCount = 0
    cardsCount = 0
    oneTrial = false
    maxNumb = false
    startGame = false
    balanceAdmin = 200
    bNameEl.textContent = `Antonella: $${balanceAdmin}`
    gameBtn.innerHTML = 'Cards:'
    sumScoreEL.innerHTML =`Sum:`
    questPlay.innerText = `Want to play again?`

})




