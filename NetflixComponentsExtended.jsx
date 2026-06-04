import React, { useState, useEffect } from "react";
import {
  Play, Info, Plus, Heart, Check, Search, Bell, X, ChevronDown,
  Home, Film, Tv, Download, Settings, Share2, ThumbsUp, Volume2, Star
} from "lucide-react";

/* ============================================================
   NETFLIX DESIGN SYSTEM — Extended components
   Navbar · Tabs · Modal · Toast · Icon system
   Same token sheet as NetflixDesignSystem.jsx.
   ============================================================ */

const tokens = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&family=Archivo+Expanded:wght@500..900&family=JetBrains+Mono:wght@400;500&display=swap');
.nfds{
  --nf-red:#E50914; --nf-red-dark:#B20710; --nf-red-hover:#F6121D;
  --ink-900:#141414; --ink-800:#1b1b1b; --ink-700:#232323; --ink-600:#2e2e2e; --ink-500:#3a3a3a;
  --grey-500:#6d6d6e; --grey-300:#b3b3b3; --grey-100:#e5e5e5;
  --border:rgba(255,255,255,.10); --border-strong:rgba(255,255,255,.22);
  --font:"Archivo",system-ui,sans-serif; --display:"Archivo Expanded","Archivo",sans-serif; --mono:"JetBrains Mono",monospace;
  --r-sm:4px; --r-md:8px; --r-lg:12px; --r-full:999px;
  --ease:cubic-bezier(.2,.7,.2,1);
  background:var(--ink-900); color:#fff; font-family:var(--font); min-height:100vh; padding:40px 24px 80px;
}
.nfds *{box-sizing:border-box}
.nfds .container{max-width:1100px;margin:0 auto}
.nfds .eyebrow{font-family:var(--mono);font-size:11px;letter-spacing:.35em;text-transform:uppercase;color:var(--nf-red)}
.nfds h1{font-family:var(--display);font-weight:900;text-transform:uppercase;font-size:clamp(2.4rem,6vw,4rem);line-height:.95;margin:8px 0 0}
.nfds .sec{margin-top:56px}
.nfds .sec-title{font-family:var(--display);text-transform:uppercase;font-weight:800;font-size:1.4rem;display:flex;gap:12px;align-items:baseline;margin-bottom:20px}
.nfds .sec-title b{font-family:var(--mono);color:var(--nf-red);font-size:.85rem;font-weight:500}
.nfds .panel{background:var(--ink-800);border:1px solid var(--border);border-radius:var(--r-lg);padding:0;margin-bottom:16px;overflow:hidden}
.nfds .panel-pad{padding:24px}
.nfds .panel-h{font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--grey-500);margin-bottom:16px}
.nfds .row{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
.nfds .btn{font-family:var(--font);font-weight:700;font-size:.875rem;border:none;border-radius:var(--r-sm);padding:12px 26px;cursor:pointer;transition:all .14s var(--ease);display:inline-flex;align-items:center;gap:8px}
.nfds .btn-primary{background:var(--nf-red);color:#fff}
.nfds .btn-primary:hover{background:var(--nf-red-hover);box-shadow:0 8px 30px rgba(229,9,20,.35)}
.nfds .btn-secondary{background:rgba(255,255,255,.16);color:#fff}
.nfds .btn-secondary:hover{background:rgba(255,255,255,.28)}
.nfds .btn-ghost{background:transparent;color:#fff;border:1px solid var(--border-strong)}
.nfds .btn-ghost:hover{border-color:#fff}

/* NAVBAR */
.nfds .nav{display:flex;align-items:center;gap:24px;padding:14px 22px;background:linear-gradient(180deg,#000,rgba(0,0,0,.4));border-bottom:1px solid var(--border)}
.nfds .nav .logoN{font-family:var(--display);font-weight:900;color:var(--nf-red);font-size:1.5rem;letter-spacing:.04em}
.nfds .nav .links{display:flex;gap:18px}
.nfds .nav .links a{color:var(--grey-300);text-decoration:none;font-size:.85rem;font-weight:500;cursor:pointer;transition:color .14s}
.nfds .nav .links a:hover,.nfds .nav .links a.active{color:#fff}
.nfds .nav .right{margin-left:auto;display:flex;gap:14px;align-items:center;color:#fff}
.nfds .nav .right svg{cursor:pointer}
.nfds .avatar{width:30px;height:30px;border-radius:var(--r-sm);background:linear-gradient(135deg,var(--nf-red),var(--nf-red-dark))}

/* TABS */
.nfds .tabs{display:flex;gap:28px;border-bottom:1px solid var(--border);padding:0 24px}
.nfds .tab{background:none;border:none;color:var(--grey-300);font-family:var(--font);font-size:.95rem;font-weight:600;padding:16px 0;cursor:pointer;position:relative;transition:color .14s}
.nfds .tab:hover{color:#fff}
.nfds .tab.active{color:#fff}
.nfds .tab.active::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:3px;background:var(--nf-red);border-radius:2px}
.nfds .tabpanel{padding:24px;color:var(--grey-100);font-size:.95rem}

/* MODAL */
.nfds .overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;z-index:90;padding:24px;animation:fade .24s var(--ease)}
.nfds .modal{background:var(--ink-800);border:1px solid var(--border-strong);border-radius:var(--r-lg);max-width:460px;width:100%;box-shadow:0 24px 80px rgba(0,0,0,.7);animation:pop .28s var(--ease);overflow:hidden}
.nfds .modal .hero{height:150px;background:radial-gradient(120% 120% at 70% 0%,rgba(229,9,20,.45),var(--ink-700));position:relative}
.nfds .modal .hero .close{position:absolute;top:12px;right:12px;width:34px;height:34px;border-radius:50%;background:rgba(0,0,0,.5);border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}
.nfds .modal .body{padding:24px}
.nfds .modal h3{font-family:var(--display);text-transform:uppercase;font-weight:800;font-size:1.3rem;margin-bottom:8px}
.nfds .modal p{color:var(--grey-300);font-size:.9rem;margin-bottom:20px}
@keyframes fade{from{opacity:0}to{opacity:1}}
@keyframes pop{from{opacity:0;transform:scale(.94) translateY(8px)}to{opacity:1;transform:none}}

/* TOAST */
.nfds .toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%);background:#fff;color:#000;
  padding:14px 22px;border-radius:var(--r-md);font-weight:600;font-size:.875rem;display:flex;gap:10px;align-items:center;
  box-shadow:0 12px 40px rgba(0,0,0,.6);z-index:99;animation:toastin .3s var(--ease)}
.nfds .toast.red{background:var(--nf-red);color:#fff}
.nfds .toast .bar{position:absolute;left:0;bottom:0;height:3px;background:rgba(0,0,0,.25);border-radius:0 0 var(--r-md) var(--r-md);animation:shrink 3s linear forwards}
.nfds .toast.red .bar{background:rgba(255,255,255,.4)}
@keyframes toastin{from{opacity:0;transform:translateX(-50%) translateY(16px)}to{opacity:1;transform:translateX(-50%)}}
@keyframes shrink{from{width:100%}to{width:0%}}

/* ICONS */
.nfds .iconwrap{display:grid;grid-template-columns:repeat(auto-fill,minmax(96px,1fr));gap:12px}
.nfds .ic{border:1px solid var(--border);border-radius:var(--r-md);padding:18px 8px;display:flex;flex-direction:column;align-items:center;gap:10px;color:#fff;transition:all .14s var(--ease)}
.nfds .ic:hover{border-color:var(--nf-red);color:var(--nf-red)}
.nfds .ic span{font-family:var(--mono);font-size:10px;color:var(--grey-500)}
.nfds .ic:hover span{color:var(--grey-300)}
.nfds .note{border-left:3px solid var(--nf-red);background:rgba(229,9,20,.06);padding:14px 18px;border-radius:0 var(--r-md) var(--r-md) 0;color:var(--grey-100);font-size:.85rem;margin-top:8px}
`;

function Navbar() {
  const [active, setActive] = useState("Home");
  const links = ["Home", "Series", "Films", "New & Popular", "My List"];
  return (
    <div className="nav">
      <span className="logoN">N</span>
      <div className="links">
        {links.map(l => (
          <a key={l} className={active === l ? "active" : ""} onClick={() => setActive(l)}>{l}</a>
        ))}
      </div>
      <div className="right">
        <Search size={20} /><Bell size={20} />
        <div className="avatar" /><ChevronDown size={16} />
      </div>
    </div>
  );
}

function Tabs() {
  const [i, setI] = useState(0);
  const items = [
    { label: "Overview", body: "Cinematic, dark-first surfaces. The active tab is marked by a 3px Netflix-red underline." },
    { label: "Episodes", body: "List your season's episodes here. Secondary text uses grey-300 (#B3B3B3)." },
    { label: "Trailers", body: "Media tiles, 2:3 posters, and hover-to-preview behavior live in this panel." },
    { label: "More Like This", body: "Recommendation grid — reuse the PosterCard component." },
  ];
  return (
    <div className="panel">
      <div className="tabs">
        {items.map((t, idx) => (
          <button key={t.label} className={`tab ${i === idx ? "active" : ""}`} onClick={() => setI(idx)}>{t.label}</button>
        ))}
      </div>
      <div className="tabpanel">{items[i].body}</div>
    </div>
  );
}

function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button className="btn btn-secondary" onClick={() => setOpen(true)}>Open modal</button>
      {open && (
        <div className="overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="hero"><button className="close" onClick={() => setOpen(false)}><X size={18} /></button></div>
            <div className="body">
              <h3>Red Horizon</h3>
              <p>A dimensional thriller. New season streaming now. This dialog uses overlay blur, a red gradient hero, and a 280ms pop-in.</p>
              <div className="row">
                <button className="btn btn-primary"><Play size={16} /> Play</button>
                <button className="btn btn-ghost"><Plus size={16} /> My List</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ToastDemo() {
  const [toast, setToast] = useState(null);
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);
  return (
    <>
      <div className="row">
        <button className="btn btn-secondary" onClick={() => setToast({ msg: "Added to My List", red: false })}>Neutral toast</button>
        <button className="btn btn-primary" onClick={() => setToast({ msg: "Download started", red: true })}>Red toast</button>
      </div>
      {toast && (
        <div className={`toast ${toast.red ? "red" : ""}`}>
          {toast.red ? <Download size={16} /> : <Check size={16} />}{toast.msg}
          <span className="bar" />
        </div>
      )}
    </>
  );
}

const ICONS = [
  [Home, "home"], [Search, "search"], [Play, "play"], [Plus, "add"], [Heart, "like"],
  [ThumbsUp, "rate"], [Download, "download"], [Bell, "notify"], [Film, "film"], [Tv, "series"],
  [Share2, "share"], [Volume2, "audio"], [Star, "star"], [Settings, "settings"], [Info, "info"], [Check, "done"],
];

export default function NetflixComponentsExtended() {
  return (
    <div className="nfds">
      <style>{tokens}</style>
      <div className="container">
        <div className="eyebrow">Design System · Extended · v1.1</div>
        <h1>Navigation,<br />overlays &amp; icons</h1>

        <div className="sec">
          <div className="sec-title"><b>06</b> Navbar</div>
          <div className="panel"><Navbar /></div>
        </div>

        <div className="sec">
          <div className="sec-title"><b>07</b> Tabs</div>
          <Tabs />
        </div>

        <div className="sec">
          <div className="sec-title"><b>08</b> Modal &amp; Toast</div>
          <div className="panel"><div className="panel-pad">
            <div className="panel-h">Overlays — click to trigger</div>
            <div className="row" style={{ gap: 28 }}>
              <ModalDemo />
              <ToastDemo />
            </div>
          </div></div>
        </div>

        <div className="sec">
          <div className="sec-title"><b>09</b> Icon system</div>
          <div className="panel"><div className="panel-pad">
            <div className="iconwrap">
              {ICONS.map(([Ic, name]) => (
                <div className="ic" key={name}><Ic size={24} strokeWidth={2} /><span>{name}</span></div>
              ))}
            </div>
            <div className="note">
              <b>Icon rules:</b> line style, <b>2px stroke</b>, 24px base grid (16 / 20 / 24 / 32 steps), rounded joins.
              Icons inherit text color; the only accent color is Netflix Red on hover/active. Library: <b>lucide-react</b> (consistent, open-source) as a stand-in for Netflix's internal set.
            </div>
          </div></div>
        </div>

      </div>
    </div>
  );
}
