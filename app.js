const AI_URL="https://nexus-sealyn-ai-deve-m9l5.bolt.host/";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const P={home:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10",explore:"M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM21 21l-4.35-4.35",bell:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0",ai:"M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z",bm:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",c:"M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z",r:"M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3",l:"M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21.2l7.8-7.7 1-1.1a5.5 5.5 0 0 0 0-7.8z",v:"M18 20V10M12 20V4M6 20v-6",s:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13",x:"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6",mail:"M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM22 6l-10 7L2 6",img:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM21 15l-5-5L5 21M8.5 7.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",moon:"M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"};
const ic=n=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${P[n]}"/></svg>`;
const VF='<svg class="vf" viewBox="0 0 24 24"><path d="M12 1l3 2.2 3.7-.1 1.2 3.5 3 2.2-1.1 3.5 1.1 3.5-3 2.2-1.2 3.5-3.7-.1L12 23l-3-2.2-3.7.1-1.2-3.5-3-2.2 1.1-3.5L1.1 8.8l3-2.2 1.2-3.5 3.7.1z"/><path d="M8 12l3 3 5-6" fill="none" stroke="#fff" stroke-width="2"/></svg>';
const K="myliliyana_v2",ME={},now=Date.now(),MU={},RP=["Haha iya!","Siap 👍","Nanti gue kabarin ya","Mantap, makasih!","Wah seru nih"];
const COL=["#7856ff","#f91880","#00ba7c","#ff7a00","#1d9bf0","#e0245e"];
const NAV=[["home","Beranda","home"],["explore","Jelajahi","explore"],["notif","Notifikasi","bell"],["dm","Pesan","mail"],["ai","Cahy AI","ai"],["bm","Markah","bm"],["profile","Profil","user"]];
const TTL={home:"Beranda",explore:"Jelajahi",notif:"Notifikasi",dm:"Pesan",post:"Postingan",ai:"Cahy AI",bm:"Markah",profile:ME.n};
const NT=[["l","<b>Nova Aksara</b> menyukai postinganmu"],["r","<b>Raka Pratama</b> memposting ulang postinganmu"],["user","<b>Sinta Dewi</b> mulai mengikutimu"]];
const TR=[["Trending di Indonesia","#MyLiliyana","24,5 rb"],["Teknologi","#CahyAI","18,2 rb"],["Hiburan","#anime","9,8 rb"],["Trending","Kopi Pagi","5,1 rb"]];
const WF=[["Raka Pratama","rakap"],["Sinta Dewi","sintadw"],["Nova Aksara","novaaksara"]];
const seed=()=>({posts:[
{id:1,n:"Nova Aksara",u:"novaaksara",t:"Selamat datang di #MyLiliyana! Coba juga #CahyAI di menu samping ✨",ts:now-6e5,l:128,r:24,c:6,v:5400},
{id:2,n:"Raka Pratama",u:"rakap",t:"Hujan deras, kopi hangat, dan kode yang akhirnya jalan ☕",ts:now-36e5,l:342,r:41,c:18,v:9200},
{id:3,n:"Sinta Dewi",u:"sintadw",t:"3 kebiasaan pagi yang bikin produktif:\n1. Bangun lebih awal\n2. Minum air\n3. Tulis 3 prioritas",ts:now-9e6,l:810,r:156,c:47,v:21000},
{id:4,n:"Dimas Arya",u:"dimasarya",t:"Ada rekomendasi anime baru musim ini? #anime",ts:now-2e7,l:97,r:9,c:32,v:3100}],
fol:[],bm:[],lk:[],rt:[],nid:5,accs:{},list:[],cur:null,dm:[]});
let S;try{S=JSON.parse(localStorage.getItem(K))}catch(e){}S=S||seed();
let V="home",TAB="fy",Q="",RE=null,PM=null,FM="post",DMU=null,TID=null,QT=null,EP={};
const save=()=>{try{localStorage.setItem(K,JSON.stringify(S))}catch(e){}};
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const ago=t=>{const s=(Date.now()-t)/1e3;return s<60?"baru saja":s<3600?(s/60|0)+" mnt":s<86400?(s/3600|0)+" j":new Date(t).toLocaleDateString("id-ID",{day:"numeric",month:"short"})};
const fmt=n=>n>=1e3?(n/1e3).toFixed(n>=1e4?0:1).replace(".",",")+" rb":n;
const col=u=>COL[[...u].reduce((a,c)=>a+c.charCodeAt(0),0)%COL.length];
const av=(n,u,c="")=>{const a=S.accs&&S.accs[u],p=a&&a.pic&&MU[a.pic];return `<div class="av ${c}" style="background:${p?`url(${p}) center/cover`:col(u)}">${p?"":esc(n[0]||"?")}</div>`};
const toast=m=>{const d=document.createElement("div");d.className="toast";d.textContent=m;document.body.append(d);setTimeout(()=>d.remove(),1800)};
const add=(t,re,m,pid,q)=>{S.posts.push({id:S.nid++,n:ME.n,u:ME.u,t,ts:Date.now(),l:0,r:0,c:0,v:1,re,m,pid,q});save()};
function post(p){const m=p.u===ME.u,L=S.lk.includes(p.id),R=S.rt.includes(p.id),B=S.bm.includes(p.id);
return `<article class="post" data-id="${p.id}">${av(p.n,p.u)}<div class="pb"><div class="ph"><b>${esc(p.n)}</b>${m?VF:""}<span>@${p.u} · ${ago(p.ts)}</span>${m?`<button class="del" data-a="del" title="Hapus">${ic("x")}</button>`:""}</div>${p.re?`<div class="ph">Membalas <span class="lk">@${p.re}</span></div>`:""}<div class="pt">${esc(p.t).replace(/([#@]\w+)/g,'<span class="lk">$1</span>')}</div>${p.m?mh(p.m):""}${p.q?qt(p.q):""}<div class="act"><button class="c" data-a="re">${ic("c")}${fmt(p.c)}</button><button class="r ${R?"on":""}" data-a="rt">${ic("r")}${fmt(p.r)}</button><button class="l ${L?"on":""}" data-a="lk">${ic("l")}${fmt(p.l)}</button><button class="c">${ic("v")}${fmt(p.v)}</button><span><button class="b ${B?"on":""}" data-a="bm">${ic("bm")}</button><button class="c" data-a="sh">${ic("s")}</button></span></div></div></article>`}
function render(){
$("#title").textContent=V==="profile"?ME.n:TTL[V];$("#tabs").hidden=V!=="home";$(".compose").hidden=!(V==="home"||V==="post");
$$(".nv").forEach(e=>e.classList.toggle("on",e.dataset.v===V));
$("#home").hidden=V==="ai";$("#ai").hidden=V!=="ai";
if(V==="ai"){const f=$("#aiFrame");if(!f.src)f.src=AI_URL;return}
if(V==="post"){const r=S.posts.find(x=>x.id===TID);if(!r){V="home";return render()}
const kids=(id,d)=>S.posts.filter(x=>x.pid===id).sort((a,b)=>a.ts-b.ts).map(x=>`<div style="padding-left:${Math.min(d,3)*18}px">${post(x)}</div>${kids(x.id,d+1)}`).join("");
$("#feed").innerHTML=`<div class="dmh"><button class="fl on" data-v="home">‹ Kembali</button></div>`+post(r)+kids(r.id,1);return}
if(V==="dm"){$("#feed").innerHTML=DMU?chat():inbox();const b=$("#dmb"),i=$("#dmx");if(b)b.scrollTop=b.scrollHeight;if(i)i.focus();return}
let L=S.posts.slice().sort((a,b)=>b.ts-a.ts),h="";
if(V==="notif"){$("#feed").innerHTML=NT.map(n=>`<div class="post">${ic(n[0])}<div class="pb">${n[1]}</div></div>`).join("");return}
if(V==="home")L=L.filter(p=>!p.pid);
if(V==="home"&&TAB==="fl")L=L.filter(p=>p.u===ME.u||S.fol.includes(p.u));
if(V==="bm")L=L.filter(p=>S.bm.includes(p.id));
if(V==="explore"&&Q){const q=Q.toLowerCase();L=L.filter(p=>!p.rp&&((p.t||"")+p.u+p.n).toLowerCase().includes(q))}
if(V==="profile"){L=L.filter(p=>p.u===ME.u);h=`${ban()}${av(ME.n,ME.u,"pav")}<div class="pi"><div class="ph" style="justify-content:flex-end"><button class="fl on" data-ep>Edit profil</button><button class="fl on" data-m style="margin-left:8px">Ganti akun</button></div><b style="font-size:20px">${esc(ME.n)}</b>${VF}<div class="ph">@${ME.u}</div><p style="margin:10px 0">${esc((S.accs[ME.u]||{}).bio||"")}</p><div class="ph"><span><b>${S.fol.length}</b> Mengikuti</span>&nbsp;&nbsp;<span><b>1,2 rb</b> Pengikut</span></div></div>`}
$("#feed").innerHTML=h+(L.map(x=>x.rp?rep(x):post(x)).join("")||'<div class="em">Belum ada postingan di sini.</div>')}
function side(){
$("#trends").innerHTML=TR.map(t=>`<div class="row" data-q="${t[1]}"><div><small>${t[0]}</small><b>${t[1]}</b><small>${t[2]} postingan</small></div></div>`).join("");
$("#wtf").innerHTML=WF.map(w=>{const f=S.fol.includes(w[1]);return `<div class="row">${av(w[0],w[1])}<div><b>${w[0]}</b><small>@${w[1]}</small></div><button class="fl ${f?"on":""}" data-f="${w[1]}">${f?"Mengikuti":"Ikuti"}</button></div>`}).join("")}
const tx=$("#txt");const setRE=()=>{const r=$("#rp");r.hidden=!RE;r.innerHTML=RE?`Membalas <span class="lk">@${RE.u}</span><button class="fl on" data-x>Batal</button>`:"";tx.placeholder=RE?"Posting balasanmu":"Apa yang sedang terjadi?"};
tx.oninput=()=>{const n=tx.value.length;tx.style.height="auto";tx.style.height=tx.scrollHeight+"px";$("#send").disabled=!tx.value.trim()&&!PM;$("#ring").style.setProperty("--p",n/2.8+"%");$("#cnt").textContent=n>260?280-n:""};
$("#send").onclick=()=>{add(tx.value.trim(),RE&&RE.u,PM,RE&&RE.id,QT);if(QT){const o=S.posts.find(x=>x.id===QT);if(o&&!S.rt.includes(QT)){S.rt.push(QT);o.r++}QT=null;qvu()}PM=null;pvu();if(RE){const q=S.posts.find(x=>x.id===RE.id);if(q)q.c++;RE=null;setRE();save()}if(V==="post"){const r=S.posts.find(x=>x.id===TID);if(r){RE={id:r.id,u:r.u};setRE()}}tx.value="";tx.oninput();TAB="fy";$$("#tabs button").forEach((b,i)=>b.classList.toggle("on",!i));render()};
$("#q").oninput=e=>{Q=e.target.value;V="explore";render()};
$("#feed").onclick=e=>{const b=e.target.closest("[data-a]");if(!b)return;
const id=+b.closest(".post").dataset.id,p=S.posts.find(x=>x.id===id),a=b.dataset.a;
const tg=(k,f)=>{const i=S[k].indexOf(id);i<0?(S[k].push(id),f&&p[f]++):(S[k].splice(i,1),f&&p[f]--)};
if(a==="lk")tg("lk","l");else if(a==="rt"){if(S.rt.includes(id)){S.rt.splice(S.rt.indexOf(id),1);p.r--;S.posts=S.posts.filter(x=>!(x.rp===id&&x.u===ME.u))}else{rmenu(id);return}}else if(a==="bm")tg("bm");
else if(a==="del"){S.posts=S.posts.filter(x=>x.id!==id);toast("Postingan dihapus")}
else if(a==="re"){RE={id,u:p.u};if(V!=="post")V="home";QT=null;qvu();setRE();render();tx.focus();scrollTo(0,0);return}
else if(a==="sh"){navigator.clipboard?navigator.clipboard.writeText(p.t).then(()=>toast("Teks disalin"),()=>toast("Gagal menyalin")):toast("Gagal menyalin");return}
save();render()};
document.addEventListener("click",e=>{const g=s=>e.target.closest(s);let x;if(!g("#mn,#me"))$("#mn").hidden=true;if(!g("#rm,[data-a=rt]"))$("#rm").hidden=true;
if(x=g("[data-v]")){V=x.dataset.v;Q="";DMU=null;RE=null;QT=null;setRE();qvu();$("#q").value="";render();scrollTo(0,0)}
else if(x=g("[data-t]")){TAB=x.dataset.t;$$("#tabs button").forEach(b=>b.classList.toggle("on",b===x));render()}
else if(x=g("[data-q]")){V="explore";Q=x.dataset.q;$("#q").value=Q;render()}
else if(x=g("[data-f]")){const u=x.dataset.f,i=S.fol.indexOf(u);i<0?S.fol.push(u):S.fol.splice(i,1);save();side();render()}
else if(x=g("[data-c]")){DMU=x.dataset.c||null;render()}
else if(g("#datt")){FM="dm";$("#file").accept="image/*,video/*";$("#file").click()}
else if(g("#att")){FM="post";$("#file").accept="image/*,video/*";$("#file").click()}
else if(g("[data-px]")){PM=null;pvu();tx.oninput()}
else if(g("#dsend"))sendDM()
else if(x=g("[data-s]")){$("#mn").hidden=true;login(x.dataset.s)}
else if(g("[data-add]")){$("#mn").hidden=true;authShow()}
else if(g("[data-out]")){$("#mn").hidden=true;S.list=S.list.filter(u=>u!==S.cur);S.cur=null;S.list.length?login(S.list[0]):(save(),authShow())}
else if(g("[data-ep]"))epOpen()
else if(x=g("[data-rr]")){const id=+x.dataset.rr,o=S.posts.find(q=>q.id===id);$("#rm").hidden=true;if(o&&!S.rt.includes(id)){S.rt.push(id);o.r++;S.posts.push({id:S.nid++,rp:id,u:ME.u,n:ME.n,ts:Date.now()});save();render()}}
else if(x=g("[data-rq]")){QT=+x.dataset.rq;$("#rm").hidden=true;V="home";RE=null;setRE();qvu();render();tx.focus();scrollTo(0,0)}
else if(g("[data-rx]"))$("#rm").hidden=true
else if(g("[data-qx]")){QT=null;qvu()}
else if((x=g(".post[data-id]"))&&!g("button,video,img")){TID=+x.dataset.id;const o=S.posts.find(q=>q.id===TID);if(o){V="post";RE={id:TID,u:o.u};QT=null;qvu();setRE();render();scrollTo(0,0)}}
else if(g("[data-m]"))menu()
else if(g("[data-x]")){RE=null;setRE()}
else if(g("#openCompose")){V="home";render();tx.focus()}
else if(g("#full"))open(AI_URL,"_blank")});
$("#nav").innerHTML=NAV.map(n=>`<button class="nv" data-v="${n[0]}">${ic(n[2])}<span>${n[1]}</span></button>`).join("");
let DB;const idb=()=>new Promise(r=>{try{const q=indexedDB.open("myl",1);q.onupgradeneeded=()=>q.result.createObjectStore("m");q.onsuccess=()=>{DB=q.result;r()};q.onerror=()=>r()}catch(e){r()}});
const mall=()=>new Promise(r=>{if(!DB)return r();try{const q=DB.transaction("m").objectStore("m").openCursor();q.onsuccess=()=>{const c=q.result;if(c){MU[c.key]=c.value;c.continue()}else r()};q.onerror=()=>r()}catch(e){r()}});
const rd=f=>new Promise(r=>{const x=new FileReader;x.onload=()=>r(x.result);x.readAsDataURL(f)});
async function media(f,mx=1280){const t=f.type.startsWith("video")?"v":"i";let d=await rd(f);
if(t==="i"&&f.type!=="image/gif")d=await new Promise(r=>{const i=new Image;i.onload=()=>{const k=Math.min(1,mx/Math.max(i.width,i.height)),c=document.createElement("canvas");c.width=i.width*k;c.height=i.height*k;c.getContext("2d").drawImage(i,0,0,c.width,c.height);r(c.toDataURL("image/jpeg",.82))};i.onerror=()=>r(d);i.src=d});
const id="m"+Date.now()+Math.random().toString(36).slice(2,6);MU[id]=d;try{DB.transaction("m","readwrite").objectStore("m").put(d,id)}catch(e){}return{t,id}}
const mh=m=>MU[m.id]?(m.t==="v"?`<video class="mm" src="${MU[m.id]}" controls playsinline></video>`:`<img class="mm" src="${MU[m.id]}" alt="">`):"";
const pvu=()=>{const p=$("#pv");p.hidden=!PM;p.innerHTML=PM?mh(PM)+'<button class="fl on" data-px>✕</button>':""};
const nm=u=>(WF.find(w=>w[1]===u)||[S.accs[u]?S.accs[u].n:u])[0];
const ctc=()=>WF.map(w=>w[1]).concat(Object.keys(S.accs)).filter(u=>u!==ME.u);
const thr=u=>S.dm.filter(d=>d.f===ME.u&&d.t===u||d.f===u&&d.t===ME.u);
const inbox=()=>ctc().map(u=>{const t=thr(u),l=t[t.length-1];return `<div class="row" data-c="${u}">${av(nm(u),u)}<div style="min-width:0"><b>${esc(nm(u))}</b><small>${l?(l.x?esc(l.x):"Media"):"Mulai obrolan"}</small></div></div>`}).join("");
const chat=()=>`<div class="dmh"><button class="fl on" data-c="">‹ Kembali</button><b>${esc(nm(DMU))}</b></div><div id="dmb">${thr(DMU).map(d=>`<div class="bb ${d.f===ME.u?"me":""}">${d.m?mh(d.m):""}${esc(d.x||"")}<small>${ago(d.ts)}</small></div>`).join("")||'<div class="em">Kirim pesan pertama.</div>'}</div><div class="dmc"><button class="ab" id="datt">${ic("img")}</button><input id="dmx" placeholder="Tulis pesan"><button class="post-btn sm" id="dsend">Kirim</button></div>`;
function sendDM(m){const i=$("#dmx"),x=i?i.value.trim():"";if(!x&&!m)return;const me=ME.u,u=DMU;S.dm.push({f:me,t:u,x,m,ts:Date.now()});save();render();
if(WF.some(w=>w[1]===u))setTimeout(()=>{S.dm.push({f:u,t:me,x:RP[Math.random()*RP.length|0],ts:Date.now()});save();if(V==="dm"&&DMU===u&&ME.u===me)render()},1500)}
const hs=s=>{let x=5381;for(const c of s)x=x*33^c.charCodeAt(0);return(x>>>0).toString(36)};
let REG=false;
const chrome=()=>{$("#me").innerHTML=av(ME.n,ME.u)+`<div class="mt"><b>${esc(ME.n)}</b>${VF}<div class="ph">@${ME.u}</div></div>`;$("#cav").innerHTML=av(ME.n,ME.u)};
function login(u){S.cur=u;if(!S.list.includes(u))S.list.push(u);const a=S.accs[u];ME.n=a.n;ME.u=u;S.fol=a.fol;S.bm=a.bm;S.lk=a.lk;S.rt=a.rt;$("#auth").hidden=true;V="home";DMU=null;RE=null;setRE();save();chrome();render();side()}
function setAuth(r){REG=r;$("#at").textContent=r?"Buat akun My Liliyana":"Masuk ke My Liliyana";$("#an").hidden=!r;$("#ago").textContent=r?"Daftar":"Masuk";$("#asw").textContent=r?"Sudah punya akun? Masuk":"Buat akun baru";$("#ae").textContent=""}
const authShow=()=>{$("#auth").hidden=false;$("#acl").hidden=!S.cur;setAuth(!Object.keys(S.accs).length)};
$("#asw").onclick=()=>setAuth(!REG);$("#acl").onclick=()=>{$("#auth").hidden=true};
$("#ago").onclick=()=>{const u=$("#au").value.trim().toLowerCase().replace(/[^a-z0-9_]/g,""),p=$("#ap").value,E=m=>{$("#ae").textContent=m};
if(!u||!p)return E("Isi nama pengguna dan kata sandi.");
if(REG){if(S.accs[u]||WF.some(w=>w[1]===u))return E("Nama pengguna sudah dipakai.");if(p.length<4)return E("Kata sandi minimal 4 karakter.");S.accs[u]={n:$("#an").value.trim()||u,pw:hs(p),fol:[],bm:[],lk:[],rt:[]}}
else if(!S.accs[u]||S.accs[u].pw!==hs(p))return E("Nama pengguna atau kata sandi salah.");
["#au","#an","#ap"].forEach(s=>{$(s).value=""});login(u)};
function menu(){const m=$("#mn");if(!m.hidden){m.hidden=true;return}
m.innerHTML=S.list.map(u=>`<div class="row" data-s="${u}">${av(S.accs[u].n,u)}<div><b>${esc(S.accs[u].n)}</b><small>@${u}</small></div>${u===S.cur?'<span style="margin-left:auto">✓</span>':""}</div>`).join("")+`<div class="row" data-add><b>Tambah akun</b></div><div class="row" data-out><b>Keluar @${ME.u}</b></div>`;m.hidden=false}
$("#att").innerHTML=ic("img");
$("#file").onchange=async e=>{const f=e.target.files[0];e.target.value="";if(!f)return;
if(!/^(image|video)\//.test(f.type))return toast("Pilih foto atau video");
if(f.type.startsWith("video")&&f.size>3e7)return toast("Video maksimal 30 MB");
if(FM==="pic"&&f.type.startsWith("video"))return toast("Foto profil harus gambar");
const m=await media(f,FM==="pic"?320:1280);if(FM==="dm")sendDM(m);else if(FM==="pic"){EP.pic=m.id;$("#epv").textContent="Foto profil dipilih ✓"}else if(FM==="ban"){EP.ban=m;$("#epv").textContent="Banner dipilih ✓"}else{PM=m;pvu();tx.oninput()}};
document.addEventListener("keydown",e=>{if(e.key!=="Enter")return;if(e.target.id==="dmx")sendDM();else if(e.target.closest("#auth"))$("#ago").click()});


const ban=()=>{const a=S.accs[ME.u],m=a&&a.ban;return m&&MU[m.id]?(m.t==="v"?`<video class="ban" src="${MU[m.id]}" autoplay muted loop playsinline></video>`:`<div class="ban" style="background:url(${MU[m.id]}) center/cover"></div>`):'<div class="ban"></div>'};
const rep=p=>{const o=S.posts.find(x=>x.id===p.rp);return o?`<div class="ph rpl">${ic("r")} ${esc(p.n)} memposting ulang</div>${post(o)}`:""};
const qt=id=>{const o=S.posts.find(x=>x.id===id);return o?`<div class="qt"><b>${esc(o.n)}</b> <span class="ph" style="display:inline">@${o.u}</span><div>${esc(o.t||"")}</div>${o.m?mh(o.m):""}</div>`:""};
const qvu=()=>{const o=QT&&S.posts.find(x=>x.id===QT),e=$("#qv");e.hidden=!o;e.innerHTML=o?`Mengutip <span class="lk">@${o.u}</span><button class="fl on" data-qx>✕</button>`:""};
const rmenu=id=>{const m=$("#rm");m.innerHTML=`<div class="row" data-rr="${id}">${ic("r")}<b>Posting ulang</b></div><div class="row" data-rq="${id}">${ic("c")}<b>Kutip</b></div><div class="row" data-rx><b>Batal</b></div>`;m.hidden=false};
const epOpen=()=>{const a=S.accs[ME.u];EP={pic:a.pic,ban:a.ban};$("#en").value=a.n;$("#eb").value=a.bio||"";$("#epv").textContent="";$("#ep").hidden=false};
$("#epp").onclick=()=>{FM="pic";$("#file").accept="image/*";$("#file").click()};
$("#epb").onclick=()=>{FM="ban";$("#file").accept="image/*,video/*";$("#file").click()};
$("#epc").onclick=()=>{$("#ep").hidden=true};
$("#eps").onclick=()=>{const a=S.accs[ME.u],n=$("#en").value.trim()||ME.u;Object.assign(a,{n,bio:$("#eb").value.trim(),pic:EP.pic,ban:EP.ban});ME.n=n;S.posts.forEach(p=>{if(p.u===ME.u)p.n=n});save();$("#ep").hidden=true;chrome();render()};
const theme=t=>{document.documentElement.dataset.theme=t;S.theme=t;save()};
$("#th").innerHTML=ic("moon");
$("#th").onclick=()=>{const d=document.documentElement.dataset.theme,dk=d?d==="dark":matchMedia("(prefers-color-scheme:dark)").matches;theme(dk?"light":"dark");toast(dk?"Latar terang":"Latar hitam")};
if(S.theme)document.documentElement.dataset.theme=S.theme;
idb().then(mall).then(()=>{if(S.cur&&S.accs[S.cur])login(S.cur);else authShow()});
