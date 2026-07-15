const pages = [

{
title:"Ek chhota sa sawal...",
text:"Agar koi tumhari smile ki wajah banna chahe, toh tum kya kahogi?",
yes:"Hmmm ❤️",
no:"Next ➜"
},

{
title:"Sach Sach Batana...",
text:"Kabhi kisi ke message ka wait kiya hai?",
yes:"Haan 🙈",
no:"Shayad"
},

{
title:"Aur Ek...",
text:"Kabhi kisi ko dekhkar bina wajah smile aayi hai?",
yes:"Haan ❤️",
no:"Pata Nahi"
},

{
title:"Bas Last Question...",
text:"Ready ho meri ek baat sunne ke liye?",
yes:"Haan",
no:"Bolo"
},

{
title:"❤️ Dil Se ❤️",
text:"Tum meri life ki sabse beautiful feeling ho.<br><br>Main har din tumhare saath aur zyada waqt bitana chahta hoon.<br><br><h2>Mere Banoge? 💍</h2>",
yes:"Haan ❤️",
no:"Nahi 😅"
}

];

let current = 0;

const title = document.getElementById("title");
const question = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dots = document.querySelectorAll(".dot");

function loadPage(){

title.innerHTML = pages[current].title;
question.innerHTML = pages[current].text;

yesBtn.innerHTML = pages[current].yes;
noBtn.innerHTML = pages[current].no;

dots.forEach(dot=>dot.classList.remove("active"));

dots[current].classList.add("active");

}

yesBtn.onclick=()=>{

if(current<pages.length-1){

current++;

loadPage();

}else{

document.body.innerHTML=`
<div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#ffe6f0;font-family:Poppins,sans-serif;text-align:center;padding:20px;">
<div>
<h1 style="color:#ff4f92;font-size:45px;">🥹❤️</h1>

<h2 style="margin:20px 0;color:#ff4f92;">
Thank You ❤️
</h2>

<p style="font-size:22px;">
You Made My Day 🌸
</p>
</div>
</div>
`;

}

}

noBtn.onclick=()=>{

if(current<pages.length-1){

current++;

loadPage();

}

}

loadPage();


// Floating Hearts

const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},300);
