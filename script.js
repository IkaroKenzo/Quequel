
const msg=`Raquel, meu amor,

Não consegui entregar seu presente de aniversário a tempo mas saiba que fiz essa carta virtual e codificada com todo amor que tenho por você.

Conheço você desde os seus 17 anos, tudo que desenvolvemos desde então é algo que não me arrependo.

Você é a mulher da minha vida e a pessoa mais incrível que já conheci, tudo em você me encanta...

Sua personalidade, sorriso, aparência, jeitinho...

Sou apaixonado em cada detalhezinho seu.

Vou estar presente pra te apoiar sempre que precisar e todo nosso laço que construímos juntos é algo que sempre vou amar.

Vou lutar para cada dia te fazer sorrir e se sentir confortável perto de mim.

Eu te amo...

FELIZ ANIVERSÁRIO!!! ❤️`;

document.getElementById("startBtn").onclick=()=>{
document.querySelector(".overlay").style.display="none";
document.getElementById("content").classList.remove("hidden");
typeWriter();
};

let i=0;
function typeWriter(){
if(i<msg.length){
document.getElementById("texto").innerHTML+=msg.charAt(i);
i++;
setTimeout(typeWriter,30);
}
}

for(let i=0;i<120;i++){
let s=document.createElement("div");
s.className="star";
s.style.width=s.style.height=(Math.random()*3+1)+"px";
s.style.left=Math.random()*100+"vw";
s.style.top=Math.random()*100+"vh";
document.body.appendChild(s);
}

for(let i=0;i<11;i++){
let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.animationDuration=(8+Math.random()*8)+"s";
document.getElementById("hearts").appendChild(h);
}

function updateTimer(){
const start=new Date("2024-04-01T00:00:00");
const now=new Date();
const diff=now-start;

const days=Math.floor(diff/(1000*60*60*24));
const years=Math.floor(days/365);
const remDays=days%365;

document.getElementById("timer").textContent=
`${years} anos e ${remDays} dias juntos`;
}
setInterval(updateTimer,1000);
updateTimer();

document.getElementById("loveBtn").onclick=()=>{
document.getElementById("specialMessage").innerHTML=
"Você é a melhor parte da minha vida ❤️";

for(let i=0;i<40;i++){
const h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";
h.style.left=Math.random()*100+"vw";
h.style.animationDuration="4s";
document.body.appendChild(h);
setTimeout(()=>h.remove(),5000);
}
};
