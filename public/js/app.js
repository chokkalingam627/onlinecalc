
function enter(){
    location.replace("/login")
}

function login(){
    try{
    var email = document.forms.logform.email.value
    var pass = document.forms.logform.password.value
    console.log(email,pass)
    location.replace("/login")
    }
    catch(err){
        console.log("+++++",err)
    }
}

