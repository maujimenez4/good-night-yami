/* ============================
   BANCO DE MENSAJES
   ============================ */

// General (Lun–Jue + Sáb)
const MESSAGE_GENERAL = [
  { id:"g1",  text:"Este es un recordatorio:\nvives en mi mente.\nDescansa, bonita.", sign:"— Mau" },
  { id:"g2",  text:"Tu sonrisa ilumina mi vida\ncomo las estrellas a la noche.\nDuerme bonito, princesa.", sign:"— Mau" },
  { id:"g3",  text:"Eres lo más especial\nque Dios me ha regalado.\nSueña conmigo.", sign:"— Mau" },
  { id:"g4",  text:"Tu mirada me hipnotiza\ny tu sonrisa me culmina.\nDTB.", sign:"— Mau" },
  { id:"g5",  text:"Contemplar tu belleza\nes de lo más lindo de esta vida.\nBuenas noches.", sign:"— Mau" },
  { id:"g6",  text:"La comida a tu lado\nse siente como un abrazo al corazón.\nSueña lindo.", sign:"— Mau" },
  { id:"g7",  text:"Te abrazaría por toda la eternidad.\nDescansa, mi niña.", sign:"— Mau" },
  { id:"g8",  text:"Te mando un beso\nque te dure toda la vida.\nDescansa, bonita.", sign:"— Mau" },
  { id:"g9",  text:"Tu presencia le hace bien\na mi mini Mau.\nDTB.", sign:"— Mau" },
  { id:"g10", text:"Dios te dio el don\nde hacer felices a las personas.\nEres especial.", sign:"— Mau" },

  { id:"g11", text:"Hoy me quedo con esto:\ntu risa en mi memoria.\nDescansa, bonita.", sign:"— Mau" },
  { id:"g12", text:"Si hoy fue pesado,\nque el sueño te lo quite.\nYo te cuido desde aquí.", sign:"— Mau" },
  { id:"g13", text:"Te pienso suave.\nTe quiero cerca.\nBuenas noches, mi vida.", sign:"— Mau" },
  { id:"g14", text:"Tu voz me calma.\nTu mirada me enciende.\nDuerme bonito.", sign:"— Mau" },
  { id:"g15", text:"Si el mundo se acelera,\nyo elijo tu paz.\nDescansa.", sign:"— Mau" },
  { id:"g16", text:"Que sueñes bonito.\nY si sueñas conmigo,\nque sea sin prisa.", sign:"— Mau" },
  { id:"g17", text:"Eres un lugar seguro\npara mi corazón.\nBuenas noches.", sign:"— Mau" },
  { id:"g18", text:"Esta noche, otra vez:\nte elijo.\nDescansa, amor.", sign:"— Mau" },
  { id:"g19", text:"Si hoy dudaste,\nrecuerda esto:\npara mí, siempre vales.", sign:"— Mau" },
  { id:"g20", text:"Buenas noches.\nGracias por existir\ncomo existes.", sign:"— Mau" },
];

// Viernes (mensaje especial)
const MESSAGE_FRIDAY = [
  { id:"f1", text:"Viernes.\nY aun así, mi parte favorita\nsigue siendo tú.\nDescansa, bonita.", sign:"— Mau" },
  { id:"f2", text:"Es viernes y la noche tiene brillo.\nPero tu sonrisa…\nesa sí que lo cambia todo.\nBuenas noches.", sign:"— Mau" },
  { id:"f3", text:"Viernes por la noche.\nYo pensando en tu mirada\ncomo si fuera escena final de película.\nDTB.", sign:"— Mau" },
  { id:"f4", text:"Hoy la vida se siente más ligera.\nY en mi cabeza, tú.\nSiempre tú.\nDescansa, mi niña.", sign:"— Mau" },
  { id:"f5", text:"Viernes.\nQue el descanso te abrace\ncomo yo lo haría.\nBuenas noches, princesa.", sign:"— Mau" },
  { id:"f6", text:"Esta noche tiene glamour.\nPero el verdadero lujo\nes saber que te tengo.\nDescansa.", sign:"— Mau" },
];

// Domingo (soft + tranquilidad)
const MESSAGE_SUNDAY = [
  { id:"s1", text:"Domingo suave.\nQue tu mente descanse.\nQue tu corazón se sienta seguro.", sign:"— Mau" },
  { id:"s2", text:"Domingo.\nRespira.\nMañana seguimos.\nHoy, solo paz.", sign:"— Mau" },
  { id:"s3", text:"Domingo.\nTe dejo esto:\nmi amor sin prisa.\nBuenas noches.", sign:"— Mau" },
  { id:"s4", text:"Que este domingo te cure\nlo que la semana te quiso quitar.\nDescansa, bonita.", sign:"— Mau" },
  { id:"s5", text:"Domingo por la noche.\nSi el mundo se calla,\nyo te abrazo con palabras.\nDTB.", sign:"— Mau" },
  { id:"s6", text:"Hoy quiero que duermas\nsin dudas.\nAquí estoy.\nBuenas noches.", sign:"— Mau" },
];

/* ============================
   BANCO “CUANDO ME EXTRAÑES”
   ============================ */
const MISS_BANK = [
  { text:"Estoy contigo.\nRespira.", sign:"— Mau" },
  { text:"No tienes que poder con todo.\nAquí estoy.", sign:"— Mau" },
  { text:"Eres amada.\nAsí, tal cual.", sign:"— Mau" },
  { text:"Vuelve a mí.\nAunque sea por un minuto.", sign:"— Mau" },
  { text:"Si hoy dudas, mira esto:\nte elijo.", sign:"— Mau" },
];

/* ============================
   SPOTIFY LINKS (edita aquí)
   ============================ */
const SPOTIFY_LINKS = [
  "https://open.spotify.com/intl-es/track/0SzvmWfOhoxZVGrmvb56YL?si=464a0dc441834a74",
  "https://open.spotify.com/intl-es/track/43X3Wbw98bSESjtMKT2Nj7?si=69df46f4119240f9",
  "https://open.spotify.com/intl-es/track/7zku2rvsa345C0kwQ4OEyZ?si=ee1425eae38b4371",
  "https://open.spotify.com/intl-es/track/2nMeu6UenVvwUktBCpLMK9?si=a080cc644fa44903",
  "https://open.spotify.com/intl-es/track/5jqNQZBwbZWQXPWfo0ygZF?si=76d86cecfd2043fa",
  "https://open.spotify.com/intl-es/track/0pfpeTGQOWlGp6YUUbBD42?si=b4114952f6854344",
  "https://open.spotify.com/intl-es/track/5SPUsNcUtRUpAPj7rJq7CD?si=982af5ca73fb4f6a",
  "https://open.spotify.com/intl-es/track/7LFeZYHcY5yEjsd8ExRyZf?si=539a55c9e9bb4ab3",
  "https://open.spotify.com/intl-es/track/6dVFhQjCDmigQyGe7ONmTb?si=7f445002eaf04221",
  "https://open.spotify.com/intl-es/track/5n7a1XYL8oaOGNptOdENIQ?si=66e7de8de17e48ed",
  "https://open.spotify.com/intl-es/track/2mtF79jVM9RYMB4xLw4ib7?si=9e1cc3bbe6ba4f7b",
  "https://open.spotify.com/intl-es/track/2HRgqmZQC0MC7GeNuDIXHN?si=783186a354214496",
];

/* ============================
   AUDIOS (8 voz .m4a / 12 música .mp3)
   ============================ */
const AUDIO_BANK = [
  { id:"v1", type:"voice", title:"Nota de voz", file:"./assets/voice/voice1.m4a" },
  { id:"v2", type:"voice", title:"Nota de voz", file:"./assets/voice/voice2.m4a" },
  { id:"v3", type:"voice", title:"Nota de voz", file:"./assets/voice/voice3.m4a" },
  { id:"v4", type:"voice", title:"Nota de voz", file:"./assets/voice/voice4.m4a" },
  { id:"v5", type:"voice", title:"Nota de voz", file:"./assets/voice/voice5.m4a" },
  { id:"v6", type:"voice", title:"Nota de voz", file:"./assets/voice/voice6.m4a" },
  { id:"v7", type:"voice", title:"Nota de voz", file:"./assets/voice/voice7.m4a" },
  { id:"v8", type:"voice", title:"Nota de voz", file:"./assets/voice/voice8.m4a" },

  { id:"m1",  type:"music", title:"Canción", file:"./assets/music/music1.mp3",  link: SPOTIFY_LINKS[0]  },
  { id:"m2",  type:"music", title:"Canción", file:"./assets/music/music2.mp3",  link: SPOTIFY_LINKS[1]  },
  { id:"m3",  type:"music", title:"Canción", file:"./assets/music/music3.mp3",  link: SPOTIFY_LINKS[2]  },
  { id:"m4",  type:"music", title:"Canción", file:"./assets/music/music4.mp3",  link: SPOTIFY_LINKS[3]  },
  { id:"m5",  type:"music", title:"Canción", file:"./assets/music/music5.mp3",  link: SPOTIFY_LINKS[4]  },
  { id:"m6",  type:"music", title:"Canción", file:"./assets/music/music6.mp3",  link: SPOTIFY_LINKS[5]  },
  { id:"m7",  type:"music", title:"Canción", file:"./assets/music/music7.mp3",  link: SPOTIFY_LINKS[6]  },
  { id:"m8",  type:"music", title:"Canción", file:"./assets/music/music8.mp3",  link: SPOTIFY_LINKS[7]  },
  { id:"m9",  type:"music", title:"Canción", file:"./assets/music/music9.mp3",  link: SPOTIFY_LINKS[8]  },
  { id:"m10", type:"music", title:"Canción", file:"./assets/music/music10.mp3", link: SPOTIFY_LINKS[9]  },
  { id:"m11", type:"music", title:"Canción", file:"./assets/music/music11.mp3", link: SPOTIFY_LINKS[10] },
  { id:"m12", type:"music", title:"Canción", file:"./assets/music/music12.mp3", link: SPOTIFY_LINKS[11] },
];

// Probabilidades
const AUDIO_RULES = {
  noneChance: 0.20,
  voiceChance: 0.45,
};

/* ============================
   STORAGE KEYS
   ============================ */
const KEY_LAST_DATE = "bn_last_date";
const KEY_TODAY_MSG = "bn_today_msg";
const KEY_TODAY_AUD = "bn_today_aud";
const KEY_VIEWED    = "bn_viewed_today";
const KEY_HISTORY   = "bn_history";

// Pools mensajes
const KEY_POOL_GENERAL = "bn_pool_general";
const KEY_POOL_FRIDAY  = "bn_pool_friday";
const KEY_POOL_SUNDAY  = "bn_pool_sunday";

// Pools audios
const KEY_POOL_VOICE   = "bn_pool_voice";
const KEY_POOL_MUSIC   = "bn_pool_music";

/* helpers */
const pad = (n)=> String(n).padStart(2,"0");
const pickRandom = (arr)=> arr[Math.floor(Math.random()*arr.length)];

function todayKey(){
  const d = new Date();
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
}
function prettyDate(){
  const d = new Date();
  return d.toLocaleDateString("es-MX", { weekday:"long", year:"numeric", month:"long", day:"numeric" });
}
function loadJSON(key, fallback){
  try{
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  }catch{ return fallback; }
}
function saveJSON(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}
function dayOfWeek(){
  return new Date().getDay(); // 0 domingo, 5 viernes
}

/* ============================
   NO REPETICIÓN MENSAJES
   ============================ */
function initPoolIfNeeded(key, bank){
  const pool = loadJSON(key, null);
  if(!Array.isArray(pool) || pool.length === 0){
    const fresh = bank.map(m => m.id);
    saveJSON(key, fresh);
    return fresh;
  }
  return pool;
}
function takeFromPool(key, bank){
  let pool = initPoolIfNeeded(key, bank);
  const idx = Math.floor(Math.random() * pool.length);
  const id = pool[idx];
  pool.splice(idx, 1);
  saveJSON(key, pool);
  return bank.find(m => m.id === id) || bank[0];
}

/* ============================
   NO REPETICIÓN AUDIOS
   ============================ */
function initAudioPoolIfNeeded(key, list){
  const pool = loadJSON(key, null);
  if(!Array.isArray(pool) || pool.length === 0){
    const fresh = list.map(a => a.id);
    saveJSON(key, fresh);
    return fresh;
  }
  return pool;
}
function takeAudioFromPool(key, list){
  // si la lista viene vacía, mejor regresar null
  if(!Array.isArray(list) || list.length === 0) return null;

  let pool = initAudioPoolIfNeeded(key, list);
  const idx = Math.floor(Math.random() * pool.length);
  const id = pool[idx];
  pool.splice(idx, 1);
  saveJSON(key, pool);

  return list.find(a => a.id === id) || list[0];
}

/* ============================
   AUDIO RULES (daily)
   ============================ */
function pickDailyAudio(){
  if(!AUDIO_BANK.length) return null;
  if(Math.random() < AUDIO_RULES.noneChance) return null;

  const wantVoice = Math.random() < AUDIO_RULES.voiceChance;
  const voiceList = AUDIO_BANK.filter(a => a.type === "voice");
  const musicList = AUDIO_BANK.filter(a => a.type === "music");

  if(wantVoice && voiceList.length){
    return takeAudioFromPool(KEY_POOL_VOICE, voiceList);
  }
  if(musicList.length){
    return takeAudioFromPool(KEY_POOL_MUSIC, musicList);
  }
  return takeAudioFromPool(KEY_POOL_VOICE, voiceList);
}

/* ============================
   MENSAJE DIARIO
   ============================ */
function pickDailyMessage(){
  const dow = dayOfWeek();
  if(dow === 5) return takeFromPool(KEY_POOL_FRIDAY, MESSAGE_FRIDAY);
  if(dow === 0) return takeFromPool(KEY_POOL_SUNDAY, MESSAGE_SUNDAY);
  return takeFromPool(KEY_POOL_GENERAL, MESSAGE_GENERAL);
}

/* Persistencia diaria */
function ensureTodaySelection(){
  const today = todayKey();
  const last = localStorage.getItem(KEY_LAST_DATE);

  if(last !== today){
    const msg = pickDailyMessage();
    const aud = pickDailyAudio();

    localStorage.setItem(KEY_LAST_DATE, today);
    localStorage.setItem(KEY_TODAY_MSG, msg.id);
    localStorage.setItem(KEY_TODAY_AUD, aud ? aud.id : "");
    localStorage.setItem(KEY_VIEWED, "0");
  }

  const msgId = localStorage.getItem(KEY_TODAY_MSG) || MESSAGE_GENERAL[0].id;
  const audId = localStorage.getItem(KEY_TODAY_AUD) || "";
  const viewed = localStorage.getItem(KEY_VIEWED) === "1";

  const allMsgs = [...MESSAGE_GENERAL, ...MESSAGE_FRIDAY, ...MESSAGE_SUNDAY];
  const msg = allMsgs.find(m=>m.id===msgId) || MESSAGE_GENERAL[0];
  const aud = audId ? (AUDIO_BANK.find(a=>a.id===audId) || null) : null;

  return { today, msg, aud, viewed };
}

/* ============================
   UI refs
   ============================ */
const openBtn = document.getElementById("openBtn");
const replayBtn = document.getElementById("replayBtn");
const missBtn = document.getElementById("missBtn");
const playBtn = document.getElementById("playBtn");

const statusPill = document.getElementById("statusPill");
const datePill = document.getElementById("datePill");

const messageBox = document.getElementById("messageBox");
const msgText = document.getElementById("msgText");
const signature = document.getElementById("signature");

const historyList = document.getElementById("historyList");

const player = document.getElementById("player");
const playerSource = document.getElementById("playerSource");
const audioLabel = document.getElementById("audioLabel");
const audioRow = document.getElementById("audioRow");
const audioHint = document.getElementById("audioHint");
const spotifyLink = document.getElementById("spotifyLink");

/* UI helpers */
function setStatus(viewed){
  statusPill.textContent = viewed ? "Mensaje entregado hoy" : "Mensaje disponible";
}
function setMessage(msg){
  msgText.textContent = msg.text;
  signature.textContent = msg.sign || "— Mau";
  messageBox.style.display = "block";
}

function setAudio(aud){
  if(!aud){
    audioRow.style.display = "none";
    audioHint.style.display = "none";
    if(spotifyLink) spotifyLink.style.display = "none";
    return;
  }

  audioRow.style.display = "flex";
  audioHint.style.display = "block";

  // Cargar archivo (mp3 o m4a)
  playerSource.setAttribute("src", aud.file);

  // Ajuste de tipo (opcional). Si quitaste el type en HTML, esto no hace falta,
  // pero por seguridad lo dejamos:
  const ext = (aud.file.split(".").pop() || "").toLowerCase();
  const mime =
    ext === "m4a" ? "audio/mp4" :
    ext === "mp3" ? "audio/mpeg" :
    "";
  if(mime) playerSource.setAttribute("type", mime);
  else playerSource.removeAttribute("type");

  player.load();

  audioLabel.textContent = `${aud.title} (${aud.type === "voice" ? "voz" : "música"})`;

  // Botón Spotify solo para música
  if(spotifyLink){
    if(aud.type === "music" && aud.link){
      spotifyLink.href = aud.link;
      spotifyLink.style.display = "inline-flex";
    }else{
      spotifyLink.style.display = "none";
    }
  }
}

async function playAudio(){
  try{ await player.play(); }catch{}
}

function addToHistory(today, msg){
  const hist = loadJSON(KEY_HISTORY, []);
  if(!hist.some(h=>h.date===today)){
    hist.unshift({ date: today, text: msg.text });
    saveJSON(KEY_HISTORY, hist.slice(0, 30));
  }
}
function renderHistory(){
  const hist = loadJSON(KEY_HISTORY, []);
  historyList.innerHTML = "";
  if(hist.length === 0){
    const li = document.createElement("li");
    li.textContent = "Aún no hay historial.";
    historyList.appendChild(li);
    return;
  }
  for(const h of hist){
    const li = document.createElement("li");
    li.textContent = `${h.date}: ${h.text.replace(/\n/g," ").slice(0, 90)}${h.text.length>90?"…":""}`;
    historyList.appendChild(li);
  }
}

/* Cuando me extrañes (libre, no afecta el diario) */
function showMiss(){
  const m = pickRandom(MISS_BANK);
  setMessage(m);
  setAudio(null);
}

/* INIT */
(function init(){
  // fondo opcional
  const testImg = new Image();
  testImg.onload = ()=> document.body.classList.add("hasBg");
  testImg.src = "./assets/bg.png";

  datePill.textContent = prettyDate();

  const state = ensureTodaySelection();
  setStatus(state.viewed);
  renderHistory();

  openBtn.addEventListener("click", ()=>{
    const s = ensureTodaySelection();
    setMessage(s.msg);
    setAudio(s.aud);

    localStorage.setItem(KEY_VIEWED, "1");
    setStatus(true);
    addToHistory(s.today, s.msg);
    renderHistory();
  });

  replayBtn.addEventListener("click", ()=>{
    const s = ensureTodaySelection();
    setMessage(s.msg);
    setAudio(s.aud);
  });

  missBtn.addEventListener("click", showMiss);
  playBtn.addEventListener("click", playAudio);
})();