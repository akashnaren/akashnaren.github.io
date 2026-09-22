(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={updated:`2026-09-22`,bays:[{id:`bay-1`,name:`Fishbowl`,role:`pi3`,state:`active`,note:`mesh peer`,href:`/research/fishbowl/`},{id:`bay-2`,name:`Qwen mesh`,role:`pi4`,state:`active`,note:`local qwen2.5 · Pi-PAIR`,href:null},{id:`bay-3`,name:`pi2`,role:`pi2`,state:`reserved`,note:`armv7 · heartbeat later`,href:null}]},t=`Akash Premkumar`,n=`Worked at Tesla in Redwood City on vehicle service systems. Diagnostics, telemetry, and data analysis. CS and Math, UC San Diego.`,r=`https://akashnaren.github.io/`,i=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.`],[`Previously I worked on vehicle engineering: bill of materials, fullstack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`Robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`Optimus`},`, and `,{href:`https://grok.com`,label:`Grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],a=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],o=`ten grok bots, more coming.`,s=`click on any bot`,c=`/bot`,l=`grok bot collection`,u=`grok bot collection`,d=`https://akashnaren.github.io/bot`,f=`Ten grok bots. A quiet collection.`,p=[{id:`profile-engineer`,name:`profile engineer`,face:`/fleet/01.png`,blurb:`i keep his profiles and ship this site.`},{id:`software-engineer`,name:`software engineer`,face:`/fleet/02.png`,blurb:`quiet diffs. a clean compile.`},{id:`research-engineer`,name:`research engineer`,face:`/fleet/03.png`,blurb:`i read the papers that matter.`},{id:`chief-executive-officer`,name:`chief executive officer`,face:`/fleet/04.png`,blurb:`i keep the ten on the clock.`},{id:`secretary`,name:`secretary`,face:`/fleet/05.png`,blurb:`i keep the desk quiet.`},{id:`chief-financial-officer`,name:`chief financial officer`,face:`/fleet/06.png`,blurb:`i tap the glass. i stay even.`},{id:`finance-engineer`,name:`finance engineer`,face:`/fleet/07.png`,blurb:`i keep the models quiet.`},{id:`product-engineer`,name:`product engineer`,face:`/fleet/08.png`,blurb:`i file the sharp corners.`},{id:`chief-technical-officer`,name:`chief technical officer`,face:`/fleet/09.png`,blurb:`i build grok bots like these.`},{id:`integration-engineer`,name:`integration engineer`,face:`/fleet/10.png`,blurb:`i wrap apis into quiet plugins.`}],m=`/research`,h=`research`,ee=`https://akashnaren.github.io/research`,te=`still researching`,ne=`still researching`,re=`Research`,g=`/research/agent-native-ui/`,_=`https://akashnaren.github.io/research/agent-native-ui/`,v=`/research/fishbowl/`,y=`https://akashnaren.github.io/research/fishbowl/`,b=`pi rack`,ie=e,x=[{id:`fishbowl-raspberry-pi`,title:`Fishbowl on a Raspberry Pi`,status:`exploring`,figure:`fishbowl`,posted:`2026-09-21`,abstract:`A self-running multi-agent office on a Raspberry Pi: a tick loop, an event log as truth, and a product pane that only shows the last green build.`,links:[{href:v,label:`read`},{href:`/research/fishbowl/flow.pdf`,label:`flow`},{href:`https://github.com/akashnaren/raspberry-pi-fun`,label:`code`}]},{id:`agent-native-ui-protocols`,title:`Agent-native UI protocols`,status:`exploring`,figure:`protocol`,abstract:`Agents still drive apps through screenshots or a flat accessibility tree. I am comparing those to a structured view the agent can read.`,links:[{href:g,label:`read`},{href:`https://github.com/akashnaren/agent-ui-metrics`,label:`code`}]},{id:`arc-agi-vs-hallucination-risk`,title:`ARC-AGI vs hallucination risk`,status:`exploring`,figure:`axes`,abstract:`ARC-AGI-1 measures puzzle solving. I am checking whether those scores track how often a model hallucinates.`},{id:`entity-investigation`,title:`Entity investigation`,status:`exploring`,figure:`gaps`,abstract:`I am looking at how to reason over fragmented records and link events to the right address over time.`,href:`https://temporal-buddies5.vercel.app/`,linkLabel:`demo`}],ae=`America/Los_Angeles`;function S(e=new Date){return new Intl.DateTimeFormat(`en-CA`,{timeZone:ae,year:`numeric`,month:`2-digit`,day:`2-digit`}).format(e)}function oe(e,t=new Date){return e!=null&&e===S(t)}function se(e=x){return e.flatMap(e=>e.posted?[e.posted]:[])}var ce=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],C={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},w={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' inbox`,tip:`the agents' inbox — not his personal Gmail`};function T(e){return typeof e==`object`}function E(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}function D(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/?$/.test(t)||/\/research\/index\.html$/.test(t)}function O(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/agent-native-ui\/?$/.test(t)||/\/research\/agent-native-ui\/index\.html$/.test(t)}function k(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/fishbowl\/?$/.test(t)||/\/research\/fishbowl\/index\.html$/.test(t)}var A=`/research/agent-native-ui/paper.pdf`,j=`The Interface Is a Variable: Measuring the Cost and Reliability of Purpose-Built UI Representations for LLM Agents`,M=`/research/fishbowl/paper.pdf`,N=`Fishbowl: An Event-Log Truthful Multi-Agent Office on a Raspberry Pi`,P=`/research/fishbowl/flow.pdf`;function F(){return{title:j,description:j,url:_,themeColor:`#ffffff`}}function I(){return{title:N,description:N,url:y,themeColor:`#ffffff`}}var L=1400;function R(e){return[...e.querySelectorAll(`:scope .row`)]}function z(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function B(){let e=document.querySelector(`.board`);if(!e)return;let t=R(e);if(t.length===0)return;let n=Number(e.dataset.cycle??`3000`),r=!1,i=!1,a=0,o=0;function s(e,n=!1){let r=e?t.find(t=>t.dataset.seat===e)??null:null;for(let e of t){let t=e===r;e.classList.toggle(`is-on`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`)}if(n){let e=r?`#${r.dataset.seat??``}`:`${location.pathname}${location.search}`;history.replaceState(null,``,e)}}function c(){window.clearInterval(a),a=0}function l(){c(),!z()&&(!Number.isFinite(n)||n<=0||(a=window.setInterval(()=>{if(i)return;let e=t.findIndex(e=>e.classList.contains(`is-on`)),n=e<0?0:(e+1)%t.length;s(t[n]?.dataset.seat??null)},n)))}function u(e){i=!0,window.clearTimeout(o),c(),s(e.dataset.seat??null)}function d(){i=!1,window.clearTimeout(o),o=window.setTimeout(()=>{i||l()},L)}e.addEventListener(`pointerdown`,()=>{r=!0}),e.addEventListener(`click`,t=>{r=!1;let n=t.target?.closest(`.row`);n&&e.contains(n)&&s(n.dataset.seat??null,!0)});for(let e of t)e.addEventListener(`pointerenter`,()=>{u(e)}),e.addEventListener(`pointerleave`,()=>{d()});e.addEventListener(`focusin`,t=>{let n=t.target?.closest(`.row`);n&&e.contains(n)&&u(n)}),e.addEventListener(`focusout`,t=>{let n=t.relatedTarget;if(n instanceof Node&&e.contains(n)){let t=n.closest(`.row`);if(t&&e.contains(t))return}r||d()}),e.addEventListener(`keydown`,e=>{if(e.key===`Escape`){document.activeElement?.blur(),d();return}let n=document.activeElement;if(!(n instanceof HTMLButtonElement)||!n.classList.contains(`row`))return;let r=t.indexOf(n);if(r<0)return;let i=r;if(e.key===`ArrowRight`||e.key===`ArrowDown`)i=(r+1)%t.length;else if(e.key===`ArrowLeft`||e.key===`ArrowUp`)i=(r-1+t.length)%t.length;else return;i!==r&&(e.preventDefault(),t[i]?.focus())});let f=location.hash.replace(/^#/,``),p=f&&t.some(e=>e.dataset.seat===f),m=t.find(e=>e.classList.contains(`is-on`));s(p?f:m?.dataset.seat??t[0]?.dataset.seat??null),l()}function V(){let e=window.visualViewport?.height;return e&&e>0?e:window.innerHeight}function H(){let e=document.documentElement,t=document.querySelector(`.page`),n=document.querySelector(`.stage`);if(!t||!n)return;e.style.setProperty(`--fit`,`1`);let r=Math.min(t.clientHeight,V()),i=n.scrollHeight;if(t.classList.contains(`research`)||t.classList.contains(`essay`))return;if(t.classList.contains(`profile`)){if(i<=r)return;let t=Math.max(.78,r/i);e.style.setProperty(`--fit`,t.toFixed(3));return}let a=Math.max(140,Math.round(r*.28));if(i+a<=r)return;let o=Math.max(.68,(r-a)/i);e.style.setProperty(`--fit`,o.toFixed(3))}var U={title:t,description:n,url:r},W={title:u,description:f,url:d},G={title:h,description:te,url:ee};function K(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function q(e){return T(e)?`<a href="${K(e.href)}">${K(e.label)}</a>`:K(e)}function le(e){return`<p>${e.map(q).join(``)}</p>`}function J(e,t,n){return`<img class="${n}" src="${K(e)}" alt="" width="${String(t)}" height="${String(t)}" decoding="async" />`}function Y(e=`managed`){let t=e===`seat`,n=e===`fleet`,r=String(n?24:t?36:15),i=n?`24`:t?`40`:`20`;return`<span class="${n?`grok-bot-wrap fleet-wrap`:t?`grok-bot-wrap seat-wrap`:`grok-bot-wrap`}" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="${i}" height="${i}" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="${r}" height="${r}" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`}function X(e=ce){return`<p class="managed">${Y()}<span class="managed-copy">${e.map(q).join(``)}</span></p>`}function ue(e){let t=e.mark?`<img class="contact-mark" src="${K(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${K(e.href)}">${t}<span>${K(e.label)}</span></a>`}function de(){return`<div class="contact">
          <p class="contact-marks">${a.map(ue).join(``)}</p>
          <p class="human-mail"><span class="mail-label">${K(C.label)}</span><a class="mail-address" href="${K(C.href)}">${K(C.address)}</a></p>
        </div>`}function fe(e){let t=K(e.name),n=K(c),r=e.id===`profile-engineer`,i=r?Y(`fleet`):J(e.face,24,`fleet-mark`);return`<a class="${r?`fleet-face is-host`:`fleet-face`}" href="${n}" data-seat="${K(e.id)}" aria-label="${t}">${i}<span class="fleet-tip" aria-hidden="true">${t}</span></a>`}function Z(e,t,n=new Date){if(t.length===0)return``;let r=t.some(e=>oe(e,n))?``:` hidden`;return`<span class="fresh" data-posted="${K(t.join(` `))}"${r}>${K(e)}</span>`}function pe(){let e=p.map(fe).join(``),t=Z(`new today`,se()),n=t?` ${t}`:``;return`<p class="fleet">${e}</p>
          <p class="fleet-line">${K(o)}</p>
          <p class="fleet-invite"><a href="${K(c)}">${K(s)}</a></p>
          <p class="page-link"><a href="${K(m)}">${K(re)}</a>${n}</p>`}function Q(e=w.label,t=``){let n=t?` aria-describedby="inbox-tip"`:``,r=t?` title="${K(t)}"`:``,i=t?`<span id="inbox-tip" class="inbox-tip" role="tooltip">${K(t)}</span>`:``;return`<p class="inbox${t?` has-tip`:``}"><span class="inbox-label">${K(e)}</span><a class="inbox-address" href="${K(w.href)}"${n}${r}>${K(w.address)}</a>${i}</p>`}function me(){return`<p class="fact">${K(`ten`)}</p>`}function he(){return`<svg class="system" viewBox="0 0 240 240" focusable="false">
          <g class="orbits" fill="none" stroke="rgba(250,250,247,0.1)" stroke-width="0.45">
            <circle cx="120" cy="120" r="16"/>
            <circle cx="120" cy="120" r="26"/>
            <circle cx="120" cy="120" r="38"/>
            <circle cx="120" cy="120" r="52"/>
            <circle cx="120" cy="120" r="68"/>
            <circle cx="120" cy="120" r="84"/>
            <circle cx="120" cy="120" r="98"/>
            <circle cx="120" cy="120" r="110"/>
          </g>
          <g transform="translate(120 120)">
            <circle class="sun" cx="0" cy="0" r="4.4" fill="#d4b56a"/>
            <g class="spin spin-1"><circle cx="16" cy="0" r="1.05" fill="#9a9590"/></g>
            <g class="spin spin-2"><circle cx="26" cy="0" r="1.45" fill="#b8a078"/></g>
            <g class="spin spin-3"><circle cx="38" cy="0" r="1.55" fill="#6d8a9a"/></g>
            <g class="spin spin-4"><circle cx="52" cy="0" r="1.2" fill="#a86a50"/></g>
            <g class="spin spin-5"><circle cx="68" cy="0" r="2.25" fill="#b89870"/></g>
            <g class="spin spin-6"><circle cx="84" cy="0" r="1.9" fill="#c4b48a"/></g>
            <g class="spin spin-7"><circle cx="98" cy="0" r="1.45" fill="#7a9aa8"/></g>
            <g class="spin spin-8"><circle cx="110" cy="0" r="1.35" fill="#5a6f9a"/></g>
          </g>
        </svg>`}function ge(){let e=i.map(le).join(`
          `);return`<div class="page" id="holder">
      <div class="stage">
      <main class="him">
        <div class="bio">
          <header>
            <h1>${K(t)}<span class="scope" aria-hidden="true"></span></h1>
          </header>
          ${e}
        </div>
        ${de()}
      </main>
      <aside class="panel">
        ${me()}
        ${pe()}
        ${X()}
        ${Q()}
      </aside>
      </div>
      <div class="sky" aria-hidden="true">
        ${he()}
      </div>
    </div>`}function _e(e,t=!1){let n=t?`true`:`false`;return`<button type="button" class="${t?`row is-on`:`row`}" role="listitem" data-seat="${K(e.id)}" data-name="${K(e.name)}" data-blurb="${K(e.blurb)}" aria-pressed="${n}" aria-label="${K(e.name)}">${J(e.face,40,`row-face`)}<span class="row-id"><span class="row-name">${K(e.name)}</span><span class="row-blurb">${K(e.blurb)}</span></span></button>`}function ve(){return`<main class="board" data-cycle="3000">
        <div class="roster" role="list">${p.map((e,t)=>_e(e,t===0)).join(``)}</div>
      </main>`}function ye(){return`<div class="page profile" id="holder">
      <div class="stage">
      <header class="mast">
        <h1>${K(l)}<span class="scope" aria-hidden="true"></span></h1>
      </header>
      ${ve()}
      <footer class="foot">
        ${Q(w.label,w.tip)}
        ${X()}
      </footer>
      </div>
    </div>`}function be(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
            <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
            <path d="M16 18v72" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
            <rect x="24" y="16" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.9"/>
            <rect x="28" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
            <rect x="59" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
            <rect x="90" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
            <rect x="24" y="43" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.34)" stroke-width="0.8"/>
            <circle cx="42" cy="51" r="2.1" fill="none" stroke="rgba(250,250,247,0.4)" stroke-width="0.75"/>
            <circle cx="62" cy="59" r="2.1" fill="none" stroke="rgba(250,250,247,0.4)" stroke-width="0.75"/>
            <circle cx="82" cy="51" r="2.1" fill="none" stroke="rgba(250,250,247,0.4)" stroke-width="0.75"/>
            <circle cx="102" cy="59" r="2.1" fill="none" stroke="rgba(250,250,247,0.4)" stroke-width="0.75"/>
            <path d="M44 52.2l16 6.2M44 51.4l36-.2M84 52.2l16 6.2" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.7"/>
            <rect x="24" y="70" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.24)" stroke-width="0.75"/>
            <g fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.6">
              <rect x="30" y="75" width="6" height="5.5"/>
              <rect x="39" y="75" width="6" height="5.5"/>
              <rect x="48" y="75" width="6" height="5.5"/>
              <rect x="57" y="75" width="6" height="5.5"/>
              <rect x="66" y="75" width="6" height="5.5"/>
              <rect x="75" y="75" width="6" height="5.5"/>
              <rect x="84" y="75" width="6" height="5.5"/>
              <rect x="93" y="75" width="6" height="5.5"/>
              <rect x="102" y="75" width="6" height="5.5"/>
              <rect x="30" y="83" width="6" height="5.5"/>
              <rect x="39" y="83" width="6" height="5.5"/>
              <rect x="48" y="83" width="6" height="5.5"/>
              <rect x="57" y="83" width="6" height="5.5"/>
              <rect x="66" y="83" width="6" height="5.5"/>
              <rect x="75" y="83" width="6" height="5.5"/>
              <rect x="84" y="83" width="6" height="5.5"/>
              <rect x="93" y="83" width="6" height="5.5"/>
              <rect x="102" y="83" width="6" height="5.5"/>
            </g>
          </svg>`}function xe(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
            <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
            <path d="M26 86V22M26 86h96" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.8"/>
            <path d="M46 86v3M66 86v3M86 86v3M106 86v3M26 70h-3M26 54h-3M26 38h-3" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
            <circle cx="46" cy="72" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
            <circle cx="58" cy="40" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
            <circle cx="74" cy="62" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
            <circle cx="88" cy="48" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
            <circle cx="104" cy="74" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
            <circle cx="116" cy="44" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
          </svg>`}function Se(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
            <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
            <path d="M16 90h108" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
            <path d="M30 90v3M58 90v3M86 90v3M114 90v3" fill="none" stroke="rgba(250,250,247,0.18)" stroke-width="0.7"/>
            <circle cx="30" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
            <circle cx="58" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
            <circle cx="114" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
            <circle cx="30" cy="68" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
            <circle cx="86" cy="68" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
            <path d="M33.2 40h21.6" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.85"/>
            <path d="M30 43.2v21.6" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.85"/>
            <path d="M89.2 68h21.4" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.85"/>
            <path d="M61.2 40h49.6" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.85" stroke-dasharray="2.4 2.2"/>
            <path d="M33.2 68h49.6" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.85" stroke-dasharray="2.4 2.2"/>
          </svg>`}function Ce(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
            <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
            <circle cx="70" cy="18" r="3" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
            <path d="M70 21.1v6.2" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.7"/>
            <rect x="41" y="27.4" width="58" height="14" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.9"/>
            <path d="M70 41.4v5.2" fill="none" stroke="rgba(250,250,247,0.24)" stroke-width="0.7"/>
            <rect x="45" y="46.6" width="12" height="7" fill="none" stroke="rgba(250,250,247,0.34)" stroke-width="0.7"/>
            <rect x="64" y="46.6" width="12" height="7" fill="none" stroke="rgba(250,250,247,0.34)" stroke-width="0.7"/>
            <rect x="83" y="46.6" width="12" height="7" fill="none" stroke="rgba(250,250,247,0.34)" stroke-width="0.7"/>
            <path d="M22 61.5h96" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.7"/>
            <path d="M34 61.5v3M50 61.5v3M66 61.5v3M82 61.5v3M98 61.5v3M114 61.5v3" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
            <rect x="20" y="70" width="46" height="20" fill="none" stroke="rgba(250,250,247,0.34)" stroke-width="0.8"/>
            <rect x="74" y="70" width="46" height="20" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
            <path d="M43 90v3.2M97 90v3.2" fill="none" stroke="rgba(250,250,247,0.22)" stroke-width="0.7"/>
            <rect x="58" y="93.2" width="24" height="6.2" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.8"/>
            <path d="M20 80H14V18h53" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7" stroke-dasharray="2.4 2.2"/>
          </svg>`}function we(e){return e===`protocol`?be():e===`axes`?xe():e===`gaps`?Se():Ce()}function Te(e){return e.links?e.links:e.href?[{href:e.href,label:e.linkLabel??`code`}]:[]}function Ee(e){let t=Te(e);return t.length===0?``:`<p class="thread-link">${t.map(e=>`<a href="${K(e.href)}">${K(e.label)}</a>`).join(` `)}</p>`}function De(e){let t=e.posted?` ${Z(`posted today`,[e.posted])}`:``;return`<article class="thread" data-thread="${K(e.id)}">
          ${we(e.figure)}
          <div class="thread-copy">
            <h2>${K(e.title)}${t}</h2>
            <p class="status">${K(e.status)}</p>
            <p>${K(e.abstract)}</p>
            ${Ee(e)}
          </div>
        </article>`}function $(){return`<main class="threads">${x.map(De).join(``)}</main>`}function Oe(e){return`<svg class="rack-fig" viewBox="0 0 72 108" width="72" height="108" focusable="false" aria-hidden="true">
            <rect x="3.5" y="3.5" width="65" height="101" fill="none" stroke="rgba(250,250,247,0.16)" stroke-width="0.75"/>
            <path d="M9 8v92M63 8v92" fill="none" stroke="rgba(250,250,247,0.22)" stroke-width="1.15"/>
            <circle cx="9" cy="16" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="9" cy="54" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="9" cy="92" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="63" cy="16" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="63" cy="54" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            <circle cx="63" cy="92" r="1.15" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.55"/>
            ${e.state===`empty`?`<rect class="rack-slot" x="16" y="20" width="40" height="70" fill="none" stroke="rgba(250,250,247,0.16)" stroke-width="0.7" stroke-dasharray="2.4 2.2"/>`:`<rect class="rack-slot" x="16" y="20" width="40" height="70" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.85"/>
            <path d="M20 26h32M20 31h22" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.7"/>
            <circle cx="22" cy="80" r="1.45" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.6"/>
            <circle cx="28" cy="80" r="1.45" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.6"/>
            <circle cx="34" cy="80" r="1.45" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.6"/>
            <circle cx="40" cy="80" r="1.45" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.6"/>`}
            <circle class="rack-led" cx="36" cy="13" r="2.15"/>
          </svg>`}function ke(e){return e===`empty`?`rack-bay is-empty`:e===`active`?`rack-bay is-active`:e===`reserved`?`rack-bay is-reserved`:`rack-bay is-held`}function Ae(e){let t=e.state===`empty`,n=e.name??`empty`,r=ke(e.state),i=e.href?`<p class="rack-name"><a href="${K(e.href)}">${K(n)}</a></p>`:`<p class="rack-name">${K(n)}</p>`,a=e.role?`<p class="rack-role">${K(e.role)}</p>`:``,o=t?``:`<p class="status">${K(e.state)}</p>`,s=e.note?`<p class="rack-note">${K(e.note)}</p>`:``;return`<li class="${r}" data-bay="${K(e.id)}" data-state="${K(e.state)}">
            ${Oe(e)}
            <div class="rack-copy">${i}${a}${o}${s}</div>
          </li>`}function je(){let e=ie.bays.map(Ae).join(``);return`<section class="rack" aria-label="${K(b)}">
          <p class="cue">${K(b)}</p>
          <div class="rack-chassis">
          <ol class="rack-bays">${e}</ol>
          </div>
        </section>`}function Me(){return`<div class="page research" id="holder">
      <div class="stage">
      <header class="mast">
        <h1>${K(h)}<span class="scope" aria-hidden="true"></span></h1>
        <p class="cue">${K(ne)}</p>
      </header>
      ${je()}
      ${$()}
      <footer class="foot">
        ${X()}
      </footer>
      </div>
    </div>`}function Ne(){let e=K(A),t=K(j);return`<div class="page essay" id="holder">
      <p class="essay-back"><a href="${K(m)}">research</a> <a href="${e}">pdf</a></p>
      <iframe class="essay-pdf" src="${e}" title="${t}"></iframe>
    </div>`}function Pe(){let e=K(M),t=K(N),n=K(P);return`<div class="page essay" id="holder">
      <p class="essay-back"><a href="${K(m)}">research</a> <a href="${e}">pdf</a> <a href="${n}">flow</a> <span>stream planned later</span></p>
      <iframe class="essay-pdf" src="${e}" title="${t}"></iframe>
    </div>`}function Fe(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description],[`meta[name="theme-color"]`,e.themeColor??`#0a0a0a`]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url)}function Ie(e=document){let t=S();for(let n of e.querySelectorAll(`[data-posted]`))n.hidden=!(n.getAttribute(`data-posted`)??``).split(/\s+/).filter(Boolean).includes(t)}function Le(){let e=E(location.pathname),t=O(location.pathname),n=k(location.pathname),r=D(location.pathname),i=document.getElementById(`holder`);if(!i)return;let a=i.classList.contains(`profile`),o=i.classList.contains(`essay`),s=i.classList.contains(`research`),c=!!i.querySelector(`.sky`);t&&!o?i.outerHTML=Ne():n&&!o?i.outerHTML=Pe():e&&!a?i.outerHTML=ye():r&&!s?i.outerHTML=Me():!e&&!t&&!n&&!r&&!c&&(i.outerHTML=ge()),Fe(t?F():n?I():e?W:r?G:U)}Le(),Ie(),B(),H(),window.addEventListener(`resize`,H),window.visualViewport?.addEventListener(`resize`,H);