let password=document.getElementById("pswd")
let entity =document.getElementById("icon")
entity.onclick=function(){
    if(password.type==="password"){
        password.type="text"
        entity.className="fa-solid fa-eye"
    }else{
        password.type="password"
        entity.className="fa-solid fa-eye-slash"
    }
}