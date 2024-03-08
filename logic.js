let formPage=document.querySelector(".form-part")
let sinup=document.getElementById("signup")
let cross=document.getElementById("iconcross")


sinup.addEventListener("click",()=>{
    hiddenlogin()
    formPage.style.display="block"
    

})

cross.addEventListener("click",()=>{
    formPage.style.display="none"

})
// function calling
function hiddenlogin(){
    loginpage.style.display="none"
}
// function calling
function hiddenSignup(){
    formPage.style.display="none"
}
// login page logic add
let loginpage=document.getElementById("loginpart");
let button=document.getElementById("loginp")
let crossSecond=document.getElementById("iconcross2")

button.addEventListener("click",function(){
    hiddenSignup();
    loginpage.style.display="block"


})

crossSecond.addEventListener("click",function(){
    loginpage.style.display="none"


})