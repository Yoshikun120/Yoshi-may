const KEY="yoshiMayLoveData";
const defaults={
  coupleName:"yoshi ♥️ may",
  cover:"",
  music:"",
  ig1:"@yoshi",ig2:"@may",
  ending:"ขอบคุณที่เข้ามาเป็นความสุขของเรา ♡",
  photos:[
    {image:"",text:"มื้อธรรมดา ๆ ที่พิเศษเพราะมีเธอ"},
    {image:"",text:"เที่ยวด้วยกันครั้งนี้ อยากให้มีครั้งต่อไปอีกเยอะ ๆ"},
    {image:"",text:"ไม่ว่าจะไปที่ไหน แค่ไปด้วยกันก็พอ"},
    {image:"",text:"เก็บรูปไว้ดู แต่ความทรงจำเก็บไว้ในใจ"},
    {image:"",text:"ขอบคุณที่เข้ามาเป็นความสุขของเรา"}
  ]
};
function getData(){try{return JSON.parse(localStorage.getItem(KEY))||defaults}catch(e){return defaults}}
function saveData(d){localStorage.setItem(KEY,JSON.stringify(d))}
function showPage(id){
 document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 if(id==="story"){render(); document.getElementById("music").play().catch(()=>{});}
}
function render(){
 const d=getData();
 document.getElementById("coupleName").textContent=d.coupleName;
 document.getElementById("cover").style.backgroundImage=d.cover?`url("${d.cover}")`:"";
 const i1=document.getElementById("ig1"),i2=document.getElementById("ig2");
 i1.textContent=d.ig1;i2.textContent=d.ig2;
 i1.href=d.ig1.startsWith("http")?d.ig1:`https://instagram.com/${d.ig1.replace("@","")}`;
 i2.href=d.ig2.startsWith("http")?d.ig2:`https://instagram.com/${d.ig2.replace("@","")}`;
 document.getElementById("ending").textContent=d.ending;
 const audio=document.getElementById("music"); audio.src=d.music||"";
 const wrap=document.getElementById("photos");wrap.innerHTML="";
 d.photos.forEach((p,n)=>{
   const card=document.createElement("article");card.className="photo-card";
   card.innerHTML=`${p.image?`<img src="${p.image}" alt="รูปคู่ ${n+1}">`:`<div class="empty">ใส่รูปที่ ${n+1} ผ่านหน้าแก้ไข</div>`}<div class="caption"><small>MEMORY ${String(n+1).padStart(2,"0")}</small><p>${p.text}</p></div>`;
   wrap.appendChild(card);
 });
}
render();