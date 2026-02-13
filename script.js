const mode=document.getElementById("mode");
const body=document.body;
let modee="dark";
mode.addEventListener("click",()=>{
 if(modee === "dark"){
     body.classList.add("light");
     mode.innerHTML="<i class='fa-solid fa-moon'></i>"
     modee="light";
 }
 else{
    body.classList.remove("light");
    mode.innerHTML="<i class='fa-solid fa-sun'></i>"
    modee ="dark";
 }
})

const message = document.querySelector('.message');
message.addEventListener("click",()=>{
    alert("Message Sent SucessFully")
})

