let button=document.getElementById("plusbutton2024");
let cross=document.getElementById("iconcross2")
let form=document.getElementById("loginpart2")

//  button.addEventListener("click",function(){
//      form.style.display="block"

//  })
//  function hiddenfirst(){
//     form.style.display="none"


//  }
 cross.addEventListener("click",function(){
    form.style.display="none "
 })

//  loging button apply eventlistener
let login=document.getElementById("logingbutton")
let signp=document.getElementById("signbutton")
login.addEventListener("click",function(){
    // hiddenfirst();
    form.style.display="block"

})
signp.addEventListener("click",function(){

})

// popup apply eventlistener
let pop=document.getElementById("po")
let iconbutton=document.getElementById("copyicon")
iconbutton.addEventListener("click",function(){
    allDisplayHidden()
    pop.style.display="block"
    pop.style.display="flex"
    setTimeout(() => {
        pop.style.display="none"
     
        
    },2000);
})
// page all display hide to help alldisplayhidden function help
function allDisplayHidden(){
    setTimeout(() => {
        fo.style.display="none"
        form.style.display="none"
        
    }, );
  

}
// sign up apply eventlistener
let si=document.getElementById("signbutton")
let fo=document.getElementById("formloginup")
let cro=document.getElementById("iconcross")
si.addEventListener("click",function(){
    // console.log("hye");
    hiiden()
    fo.style.display="block"
})

// cross button apply eventlistener
cro.addEventListener("click",function(){
    // hidden2()
    fo.style.display="none"
})

function hiiden(){
    form.style.display="none"
}
// function hidden2(){
//     fo.style.display=none
// }