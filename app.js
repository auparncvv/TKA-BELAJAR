const app=document.querySelector("#app");
const SIM="https://pusmendik.kemendikdasmen.go.id/tka/simulasi_tka";
const rows=p=>p.s.split("\n").map(l=>{const[a,b,c]=l.split("|");return{no:+a,t:b,note:c}});
const ytUrl=(t,lv)=>"https://www.youtube.com/results?search_query="+encodeURIComponent(T[t].q+" "+lv);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
function home(){
 app.innerHTML='<h2>Pilih paket soal</h2><p class="mu">Ketuk paket untuk melihat materi tiap nomor.</p><div class="grid">'+
 P.map(p=>`<button class="pk" data-id="${p.id}"><span class="ic">${p.mp.startsWith("Mat")?"MTK":"IND"}</span><span><b>${esc(p.name)}</b><small>${rows(p).length} soal · ${esc(p.lv)}</small></span></button>`).join("")+"</div>";
 app.querySelectorAll(".pk").forEach(b=>b.onclick=()=>{location.hash=b.dataset.id});
}
function cara(p,r){
 const a=(C[p.id]||{})[r.no]||"",g=p.mp==="Bahasa Indonesia"?G[r.t]||"":"";
 if(!a&&!g)return"";
 return `<details><summary>Cara mengerjakan</summary><p>${esc(a)}${a&&g?"<br><br>":""}${esc(g)}</p></details>`;
}
function pkg(p){
 const R=rows(p),g={};R.forEach(r=>(g[r.t]=g[r.t]||[]).push(r.no));
 let h=`<button class="back" id="bk">Kembali ke semua paket</button><h2>${esc(p.name)}</h2><p class="mu">Materi di setiap nomor soal. Ketuk materi untuk lompat ke penjelasannya.</p>`;
 h+=R.map(r=>`<div class="q"><div class="no">${r.no}</div><div class="qb"><span class="tag" data-t="${r.t}">${esc(T[r.t].n)}</span><span class="note">${esc(r.note)}</span>${cara(p,r)}</div></div>`).join("");
 h+=`<section class="sec"><h2>Kurang paham? Coba belajar dari video rekomendasi</h2><p class="mu">Soal yang sejenis digabung jadi satu materi.</p>`;
 h+=Object.keys(g).map(t=>{const m=T[t],v=m.v||[];return`<div class="g" id="g-${t}"><div class="ft">${esc(m.n)}</div><div class="nums">Soal no. ${g[t].join(", ")}</div><p>${esc(m.d)}</p>${v.map(x=>`<a class="yt" target="_blank" rel="noopener" href="${esc(x[1])}">${esc(x[0])}</a>`).join("")}<a class="yt" target="_blank" rel="noopener" href="${ytUrl(t,p.lv)}">Cari video di YouTube</a></div>`}).join("")+"</section>"+`<section class="cta"><h2>Udah cukup paham?</h2><p>Coba kerjakan soalnya langsung lewat simulasi resmi.</p><a class="yt w" target="_blank" rel="noopener" href="${SIM}">Kerjakan simulasi TKA</a></section>`;
 app.innerHTML=h;
 document.querySelector("#bk").onclick=()=>{location.hash=""};
 app.querySelectorAll(".tag").forEach(e=>e.onclick=()=>document.querySelector("#g-"+e.dataset.t).scrollIntoView({behavior:"smooth"}));
 scrollTo(0,0);
}
function route(){const p=P.find(x=>x.id===location.hash.slice(1));p?pkg(p):home()}
addEventListener("hashchange",route);route();
