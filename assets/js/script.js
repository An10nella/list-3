const accounts = [["admin01", "123"] , ["admin02","234"] , ["admin03", "345"] ]
const loginBtn = document.getElementById("login")
const usernameEl = document.getElementById("username")
const passwordEl = document.getElementById("password")

document.title = ("LogIn Page")
let found = false
loginBtn.addEventListener("click",function(){
    let accessUser = usernameEl.value
    let accessPass = passwordEl.value
   
        // console.log(accounts[i][0])

    for (i in accounts ){
        
            if(accessUser == accounts[i][0] && accessPass == accounts[i][1] ){
            // alert(`welcome ${accessUser}`)
            found = trueWe
            document.write(`welcome ${accessUser}`)
            

        }
    }
    if (found == false){
        alert(`Invalid Username or Password`)
    }
    
      
    
   

})