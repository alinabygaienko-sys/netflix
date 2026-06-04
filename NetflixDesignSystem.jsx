import React, { useState } from "react";
import { Play, Info, Plus, Heart, Check, ChevronRight, Search, Bell } from "lucide-react";

/* ============================================================
   NETFLIX DESIGN SYSTEM — React component library
   Tokens live in the <style> sheet below (mirror of
   netflix-tokens.css). Components are framework-agnostic in
   spirit: lift <Button>, <Badge>, <PosterCard>, etc. directly.
   ============================================================ */

const tokens = `
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@100..900&family=Archivo+Expanded:wght@500..900&family=JetBrains+Mono:wght@400;500&display=swap');
.nfds{
  --nf-red:#E50914; --nf-red-dark:#B20710; --nf-red-hover:#F6121D; --nf-red-press:#C11119;
  --black:#000; --white:#fff;
  --ink-900:#141414; --ink-800:#1b1b1b; --ink-700:#232323; --ink-600:#2e2e2e; --ink-500:#3a3a3a;
  --grey-500:#6d6d6e; --grey-300:#b3b3b3; --grey-100:#e5e5e5;
  --border:rgba(255,255,255,.10); --border-strong:rgba(255,255,255,.22);
  --font:"Archivo",system-ui,sans-serif; --display:"Archivo Expanded","Archivo",sans-serif; --mono:"JetBrains Mono",monospace;
  --r-sm:4px; --r-md:8px; --r-lg:12px; --r-full:999px;
  --ease:cubic-bezier(.2,.7,.2,1);
  background:var(--ink-900); color:var(--white); font-family:var(--font);
  min-height:100vh; padding:40px 24px 80px;
}
.nfds *{box-sizing:border-box}
.nfds .container{max-width:1100px;margin:0 auto}

/* headings */
.nfds .eyebrow{font-family:var(--mono);font-size:11px;letter-spacing:.35em;text-transform:uppercase;color:var(--nf-red)}
.nfds h1{font-family:var(--display);font-weight:900;text-transform:uppercase;font-size:clamp(2.4rem,6vw,4rem);line-height:.95;letter-spacing:-.01em;margin:8px 0 0}
.nfds .sec{margin-top:56px}
.nfds .sec-title{font-family:var(--display);text-transform:uppercase;font-weight:800;font-size:1.4rem;display:flex;gap:12px;align-items:baseline;margin-bottom:20px}
.nfds .sec-title b{font-family:var(--mono);color:var(--nf-red);font-size:.85rem;font-weight:500}
.nfds .row{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
.nfds .panel{background:var(--ink-800);border:1px solid var(--border);border-radius:var(--r-lg);padding:24px;margin-bottom:16px}
.nfds .panel-h{font-family:var(--mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--grey-500);margin-bottom:16px}

/* buttons */
.nfds .btn{font-family:var(--font);font-weight:700;font-size:.875rem;border:none;border-radius:var(--r-sm);
  padding:12px 26px;cursor:pointer;transition:all .14s var(--ease);display:inline-flex;align-items:center;gap:8px}
.nfds .btn-primary{background:var(--nf-red);color:#fff}
.nfds .btn-primary:hover{background:var(--nf-red-hover);box-shadow:0 8px 30px rgba(229,9,20,.35)}
.nfds .btn-primary:active{background:var(--nf-red-press)}
.nfds .btn-secondary{background:rgba(255,255,255,.16);color:#fff}
.nfds .btn-secondary:hover{background:rgba(255,255,255,.28)}
.nfds .btn-ghost{background:transparent;color:#fff;border:1px solid var(--border-strong)}
.nfds .btn-ghost:hover{border-color:#fff}
.nfds .btn:disabled{opacity:.4;cursor:not-allowed;box-shadow:none}
.nfds .iconbtn{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid var(--border);
  color:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all .14s var(--ease)}
.nfds .iconbtn:hover{background:rgba(255,255,255,.22)}

/* badges */
.nfds .badge{font-size:.72rem;font-weight:700;padding:3px 8px;border-radius:var(--r-sm);letter-spacing:.04em;display:inline-block}
.nfds .badge-new{background:var(--nf-red);color:#fff}
.nfds .badge-top{background:linear-gradient(135deg,var(--nf-red),var(--nf-red-dark));color:#fff}
.nfds .badge-soft{background:rgba(255,255,255,.12);color:var(--grey-100)}
.nfds .maturity{border:1px solid var(--grey-500);color:var(--grey-100);font-size:.72rem;padding:1px 7px;font-family:var(--mono)}

/* input */
.nfds .field{display:flex;flex-direction:column;gap:6px;max-width:320px}
.nfds .field label{font-size:.72rem;color:var(--grey-300);letter-spacing:.05em;text-transform:uppercase}
.nfds .field input{background:var(--ink-700);border:1px solid var(--border);border-radius:var(--r-sm);
  padding:13px 14px;color:#fff;font-family:var(--font);font-size:.875rem;transition:border-color .14s}
.nfds .field input::placeholder{color:var(--grey-500)}
.nfds .field input:focus{outline:none;border-color:var(--nf-red);box-shadow:0 0 0 3px rgba(229,9,20,.25)}

/* toggle */
.nfds .toggle{width:46px;height:26px;border-radius:var(--r-full);background:var(--ink-500);position:relative;cursor:pointer;transition:background .24s;border:none;flex-shrink:0}
.nfds .toggle.on{background:var(--nf-red)}
.nfds .toggle .knob{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;transition:transform .24s var(--ease)}
.nfds .toggle.on .knob{transform:translateX(20px)}

/* progress */
.nfds .progress{height:3px;background:var(--ink-500);border-radius:2px;overflow:hidden}
.nfds .progress i{display:block;height:100%;background:var(--nf-red)}

/* poster */
.nfds .cards{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:16px}
.nfds .poster{position:relative;border-radius:var(--r-sm);overflow:hidden;aspect-ratio:2/3;
  background:linear-gradient(155deg,var(--ink-600),var(--ink-900));border:1px solid var(--border);cursor:pointer;
  transition:transform .24s var(--ease),box-shadow .24s}
.nfds .poster:hover{transform:scale(1.04);box-shadow:0 12px 40px rgba(0,0,0,.6);z-index:2}
.nfds .poster .gloss{position:absolute;inset:0;background:radial-gradient(80% 50% at 70% 0%,rgba(229,9,20,.25),transparent 60%)}
.nfds .poster .top{position:absolute;top:10px;left:10px;display:flex;gap:6px}
.nfds .poster .tb{position:absolute;left:0;right:0;bottom:0;padding:16px;background:linear-gradient(0deg,rgba(0,0,0,.92),transparent)}
.nfds .poster .nlogo{font-family:var(--display);color:var(--nf-red);font-weight:900;font-size:.62rem;letter-spacing:.2em}
.nfds .poster h5{font-family:var(--display);text-transform:uppercase;font-weight:800;font-size:1.05rem;line-height:1;margin:4px 0 6px}
.nfds .poster .meta{font-size:.72rem;color:var(--grey-300);display:flex;gap:8px;align-items:center}
.nfds .poster .play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .24s}
.nfds .poster:hover .play{opacity:1}
.nfds .poster .play span{width:54px;height:54px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;color:#000}

/* swatch */
.nfds .swatches{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}
.nfds .sw{border:1px solid var(--border);border-radius:var(--r-md);overflow:hidden}
.nfds .sw .chip{height:64px}
.nfds .sw .m{padding:10px 12px;font-size:.75rem}
.nfds .sw .hex{font-family:var(--mono);font-size:.7rem;color:var(--grey-300)}
`;

/* ---------- Reusable components ---------- */
function Button({ variant = "primary", children, icon: Icon, ...p }) {
  return (
    <button className={`btn btn-${variant}`} {...p}>
      {Icon && <Icon size={16} />} {children}
    </button>
  );
}
function IconButton({ icon: Icon, ...p }) {
  return <button className="iconbtn" {...p}><Icon size={18} /></button>;
}
function Badge({ variant = "soft", children }) {
  return <span className={`badge badge-${variant}`}>{children}</span>;
}
function Maturity({ children }) { return <span className="badge maturity">{children}</span>; }
function Field({ label, ...p }) {
  return (<div className="field"><label>{label}</label><input {...p} /></div>);
}
function Toggle({ defaultOn = false, label }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button className={`toggle ${on ? "on" : ""}`} onClick={() => setOn(!on)}><span className="knob" /></button>
      <span style={{ fontSize: ".875rem", color: on ? "#fff" : "var(--grey-300)" }}>{label}</span>
    </div>
  );
}
function PosterCard({ kind, title, rating, year, season, badge, progress }) {
  return (
    <div className="poster">
      <div className="gloss" />
      {badge && <div className="top"><Badge variant={badge.variant}>{badge.label}</Badge></div>}
      <div className="play"><span><Play size={22} fill="#000" /></span></div>
      <div className="tb">
        <div className="nlogo">{kind}</div>
        <h5>{title}</h5>
        <div className="meta">
          <Maturity>{rating}</Maturity>{year && <span>{year}</span>}{season && <><span>·</span><span>{season}</span></>}
        </div>
        {progress != null && <div className="progress" style={{ marginTop: 8 }}><i style={{ width: `${progress}%` }} /></div>}
      </div>
    </div>
  );
}

/* ---------- Showcase ---------- */
export default function NetflixDesignSystem() {
  return (
    <div className="nfds">
      <style>{tokens}</style>
      <div className="container">

        <div className="eyebrow">Brand Design System · React · v1.0</div>
        <h1>Component<br />Library</h1>

        {/* Color */}
        <div className="sec">
          <div className="sec-title"><b>01</b> Color</div>
          <div className="swatches">
            {[
              ["Netflix Red", "#E50914", "Primary"],
              ["Symbol Dark Red", "#B20710", "Inside N only"],
              ["Ink 900", "#141414", "App canvas"],
              ["White", "#FFFFFF", "Text"],
            ].map(([n, hex, tag]) => (
              <div className="sw" key={hex}>
                <div className="chip" style={{ background: hex, borderBottom: hex === "#FFFFFF" ? "1px solid var(--border)" : "none" }} />
                <div className="m"><div>{n}</div><div className="hex">{hex}</div><div style={{ color: "var(--grey-500)", fontSize: ".68rem", marginTop: 4 }}>{tag}</div></div>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="sec">
          <div className="sec-title"><b>02</b> Buttons &amp; controls</div>
          <div className="panel">
            <div className="panel-h">Buttons</div>
            <div className="row">
              <Button variant="primary" icon={Play}>Play</Button>
              <Button variant="secondary" icon={Info}>More Info</Button>
              <Button variant="ghost">Sign In</Button>
              <IconButton icon={Plus} />
              <IconButton icon={Heart} />
              <IconButton icon={Check} />
              <Button variant="primary" disabled>Disabled</Button>
            </div>
          </div>
          <div className="panel">
            <div className="panel-h">Toggles</div>
            <div className="row" style={{ gap: 32 }}>
              <Toggle defaultOn label="Autoplay previews" />
              <Toggle label="Data saver" />
              <Toggle defaultOn label="Subtitles" />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="sec">
          <div className="sec-title"><b>03</b> Badges &amp; ratings</div>
          <div className="panel">
            <div className="row">
              <Badge variant="new">NEW EPISODE</Badge>
              <Badge variant="top">#1 IN MOVIES</Badge>
              <Badge variant="soft">RECENTLY ADDED</Badge>
              <Maturity>TV-MA</Maturity>
              <Maturity>PG-13</Maturity>
              <Badge variant="soft">4K</Badge>
              <Badge variant="soft">HDR</Badge>
            </div>
          </div>
        </div>

        {/* Fields */}
        <div className="sec">
          <div className="sec-title"><b>04</b> Form fields</div>
          <div className="panel">
            <div className="row" style={{ alignItems: "flex-start" }}>
              <Field label="Email" type="email" placeholder="you@example.com" />
              <Field label="Profile name" type="text" placeholder="Enter a name" />
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="sec">
          <div className="sec-title"><b>05</b> Content cards</div>
          <div className="cards">
            <PosterCard kind="N SERIES" title="Red Horizon" rating="TV-MA" year="2026" season="S2" badge={{ variant: "top", label: "TOP 10" }} />
            <PosterCard kind="N FILM" title="Nightfold" rating="PG-13" year="2026" badge={{ variant: "new", label: "NEW" }} />
            <PosterCard kind="N SERIES" title="The Long Game" rating="TV-14" season="L1" progress={40} />
            <PosterCard kind="N DOC" title="Deep Current" rating="TV-PG" year="2025" />
          </div>
        </div>

      </div>
    </div>
  );
}
