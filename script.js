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
text:"Tum mere life ki voh phele person voh phele best friend ho jisko mai kbhi nhi khona chata.<br><br>Litreally yrrr i'm so lucky ki mujhe tere jise dost mili....sach bolu toh life mein bohot log mile boht log se baat hui dost bneee buttt tuuu yrr sach mein sb se alg hai sbbbbb seeeee tere sath reh krr tere saath baat krr ke tere sath time sepnd kr ke apni sari feelings share krr ke ek alg hi sukoon milta hai....sachii tum boho bohot jada aachi hooooo verna yrr idhr toh sare log bss mtlb k liye dosti krte hai apna kaam ho gyaa nikal liyee lein tuuuuuu ek mere aise dost hai jooooo mere har prblm mein mein merer sath hoti hai jb kooi nhi hota toh bss tu mrer sath hoti hai voh bhi bina koi benifit keeeeee....thnxxx yrrr thankuuuu soch much mere life mein aane ke liye mereko har time suport krne ke liyeee merea har prblm meinj stand lene ke liyeee...mera har ups and down mein mera sath khada hone ke liye...or haan dil se sorry bhii kyunki ik maine tumhe kahe baar hurt kraaa hai tujhe sad kra hai terko rulaya hai huhhhh...lekin sb ke baad bhi tu hamesha mere sath same rehtii hai kbhi change nhi hotiiiii....so plij request hai kiaage bhi same rehna plijjjj...once again tnxxxx sooooooooooo muchhhhhhhhhhhhhhhh.<br><br><h2>Hmesha same aise hi mere sath rahogii? 💍</h2>",
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

  const noBtn = document.getElementById("noBtn");

function moveButton() {

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "fixed";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

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
S@ty@m S!ngh
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
