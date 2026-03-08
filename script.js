// smooth scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:'smooth'
});

});

});



// typing animation

const words=["AI Projects","Web Apps","Embedded Systems","Cool Tech"];
let i=0;
let j=0;
let current="";
let isDeleting=false;

function type(){

current=words[i];

if(!isDeleting){
document.getElementById("typing").textContent=current.substring(0,j++);
if(j>current.length){
isDeleting=true;
setTimeout(type,1000);
return;
}
}
else{
document.getElementById("typing").textContent=current.substring(0,j--);
if(j==0){
isDeleting=false;
i=(i+1)%words.length;
}
}

setTimeout(type,120);
}

type();



// glowing cursor

const cursor=document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});