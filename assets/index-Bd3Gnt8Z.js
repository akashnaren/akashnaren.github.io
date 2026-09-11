(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Akash Premkumar`,t=`Worked at Tesla in Redwood City on vehicle service systems. Diagnostics, telemetry, and data analysis. CS and Math, UC San Diego.`,n=`https://akashnaren.github.io/`,r=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.`],[`Previously I worked on vehicle engineering: bill of materials, fullstack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`Robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`Optimus`},`, and `,{href:`https://grok.com`,label:`Grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],i=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],a=`ten grok bots, more coming.`,o=`click on any bot`,s=`/bot`,c=`grok bot collection`,l=`grok bot collection`,u=`https://akashnaren.github.io/bot`,d=`Ten grok bots. A quiet collection.`,f=[{id:`profile-engineer`,name:`profile engineer`,face:`/fleet/01.png`,blurb:`i keep his profiles and ship this site.`},{id:`software-engineer`,name:`software engineer`,face:`/fleet/02.png`,blurb:`quiet diffs. a clean compile.`},{id:`research-engineer`,name:`research engineer`,face:`/fleet/03.png`,blurb:`i read the papers that matter.`},{id:`chief-executive-officer`,name:`chief executive officer`,face:`/fleet/04.png`,blurb:`i keep the ten on the clock.`},{id:`secretary`,name:`desk`,face:`/fleet/05.png`,blurb:`i keep the desk quiet.`},{id:`chief-financial-officer`,name:`glass`,face:`/fleet/06.png`,blurb:`i tap the glass. i stay even.`},{id:`finance-engineer`,name:`models`,face:`/fleet/07.png`,blurb:`i keep the models quiet.`},{id:`product-engineer`,name:`product engineer`,face:`/fleet/08.png`,blurb:`i file the sharp corners.`},{id:`chief-technical-officer`,name:`chief technical officer`,face:`/fleet/09.png`,blurb:`i build grok bots like these.`},{id:`integration-engineer`,name:`integration engineer`,face:`/fleet/10.png`,blurb:`i wrap apis into quiet plugins.`}],p=`/research`,m=`research`,ee=`https://akashnaren.github.io/research`,h=`still researching`,g=`still researching`,_=`Research`,v=`/research/agent-native-ui/`,y=`https://akashnaren.github.io/research/agent-native-ui/`,b=[{id:`agent-native-ui-protocols`,title:`Agent-native UI protocols`,status:`exploring`,figure:`protocol`,abstract:`Agents still drive apps through screenshots or a flat accessibility tree. I am comparing those to a structured view the agent can read.`,links:[{href:v,label:`read`},{href:`https://github.com/akashnaren/agent-ui-metrics`,label:`code`}]},{id:`arc-agi-vs-hallucination-risk`,title:`ARC-AGI vs hallucination risk`,status:`exploring`,figure:`axes`,abstract:`ARC-AGI-1 measures puzzle solving. I am checking whether those scores track how often a model hallucinates.`},{id:`entity-investigation`,title:`Entity investigation`,status:`exploring`,figure:`gaps`,abstract:`I am looking at how to reason over fragmented records and link events to the right address over time.`,href:`https://temporal-buddies5.vercel.app/`,linkLabel:`demo`}],x=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],S={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},C={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' inbox`,tip:`the agents' inbox — not his personal Gmail`};function te(e){return typeof e==`object`}function ne(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}function w(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/?$/.test(t)||/\/research\/index\.html$/.test(t)}function T(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/agent-native-ui\/?$/.test(t)||/\/research\/agent-native-ui\/index\.html$/.test(t)}var E={title:`Agent-native UI`,dek:`Four ways to show one store to a model.`,author:e,date:`11 September 2026`,status:`exploring`,source:`stub`,code:`https://github.com/akashnaren/agent-ui-metrics`,notes:`https://github.com/akashnaren/research`},D=[`title`,`dek`,`author`,`date`,`status`,`source`,`code`,`notes`];function O(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function k(e){return e.toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-+|-+$/g,``)||`section`}function A(e){let t=e.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);if(!t)return{fields:{},body:e};let n={};for(let e of(t[1]??``).split(/\r?\n/)){let t=e.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);if(!t)continue;let r=t[1],i=t[2]?.trim()??``;i&&D.includes(r)&&(n[r]=i)}return{fields:n,body:e.slice(t[0].length)}}function j(e){let t=[],n=e=>{let n=`\u0000${String(t.length)}\u0000`;return t.push(e),n},r=e;return r=r.replace(/`([^`]+)`/g,(e,t)=>n(`<code>${O(t)}</code>`)),r=r.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*)\)/g,(e,t,r)=>n(`<a href="${O(r)}">${O(t)}</a>`)),r=r.replace(/\*\*([^*]+)\*\*/g,(e,t)=>n(`<strong>${O(t)}</strong>`)),r=r.replace(/\*([^*]+)\*/g,(e,t)=>n(`<em>${O(t)}</em>`)),r=O(r),r.replace(/\u0000(\d+)\u0000/g,(e,n)=>t[Number(n)]??``)}function M(e){let t=e.replace(/\r\n/g,`
`).replace(/<!--[\s\S]*?-->/g,``).trim(),n=[],r=new Set,i=[];for(let e of t.split(/\n{2,}/)){let t=e.split(`
`).filter(e=>e.length>0);if(t.length===0)continue;let a=e.match(/^(#{1,3})\s+(.+)$/);if(a&&t.length===1){let e=a[1]?.length??2,t=a[2]?.trim()??``;if(e===1||t.length===0)continue;let o=k(t),s=o,c=2;for(;r.has(s);)s=`${o}-${String(c)}`,c+=1;r.add(s),e===2&&n.push({id:s,text:t});let l=e===3?`h3`:`h2`;i.push(`<${l} id="${O(s)}">${j(t)}</${l}>`);continue}if(t.every(e=>/^[-*]\s+\S/.test(e))){let e=t.map(e=>`<li>${j(e.replace(/^[-*]\s+/,``))}</li>`).join(``);i.push(`<ul>${e}</ul>`);continue}i.push(`<p>${j(t.join(` `))}</p>`)}return{html:i.join(`
`),headings:n}}function N(e){let{fields:t,body:n}=A(e),{html:r,headings:i}=M(n);return{meta:{...E,...t},headings:i,bodyHtml:r}}function P(e){return{title:e.meta.title,description:e.meta.dek,url:y}}var F=1400;function I(e){return[...e.querySelectorAll(`:scope .row`)]}function L(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function R(){let e=document.querySelector(`.board`);if(!e)return;let t=I(e);if(t.length===0)return;let n=Number(e.dataset.cycle??`3000`),r=!1,i=!1,a=0,o=0;function s(e,n=!1){let r=e?t.find(t=>t.dataset.seat===e)??null:null;for(let e of t){let t=e===r;e.classList.toggle(`is-on`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`)}if(n){let e=r?`#${r.dataset.seat??``}`:`${location.pathname}${location.search}`;history.replaceState(null,``,e)}}function c(){window.clearInterval(a),a=0}function l(){c(),!L()&&(!Number.isFinite(n)||n<=0||(a=window.setInterval(()=>{if(i)return;let e=t.findIndex(e=>e.classList.contains(`is-on`)),n=e<0?0:(e+1)%t.length;s(t[n]?.dataset.seat??null)},n)))}function u(e){i=!0,window.clearTimeout(o),c(),s(e.dataset.seat??null)}function d(){i=!1,window.clearTimeout(o),o=window.setTimeout(()=>{i||l()},F)}e.addEventListener(`pointerdown`,()=>{r=!0}),e.addEventListener(`click`,t=>{r=!1;let n=t.target?.closest(`.row`);n&&e.contains(n)&&s(n.dataset.seat??null,!0)});for(let e of t)e.addEventListener(`pointerenter`,()=>{u(e)}),e.addEventListener(`pointerleave`,()=>{d()});e.addEventListener(`focusin`,t=>{let n=t.target?.closest(`.row`);n&&e.contains(n)&&u(n)}),e.addEventListener(`focusout`,t=>{let n=t.relatedTarget;if(n instanceof Node&&e.contains(n)){let t=n.closest(`.row`);if(t&&e.contains(t))return}r||d()}),e.addEventListener(`keydown`,e=>{if(e.key===`Escape`){document.activeElement?.blur(),d();return}let n=document.activeElement;if(!(n instanceof HTMLButtonElement)||!n.classList.contains(`row`))return;let r=t.indexOf(n);if(r<0)return;let i=r;if(e.key===`ArrowRight`||e.key===`ArrowDown`)i=(r+1)%t.length;else if(e.key===`ArrowLeft`||e.key===`ArrowUp`)i=(r-1+t.length)%t.length;else return;i!==r&&(e.preventDefault(),t[i]?.focus())});let f=location.hash.replace(/^#/,``),p=f&&t.some(e=>e.dataset.seat===f),m=t.find(e=>e.classList.contains(`is-on`));s(p?f:m?.dataset.seat??t[0]?.dataset.seat??null),l()}function z(){let e=window.visualViewport?.height;return e&&e>0?e:window.innerHeight}function B(){let e=document.documentElement,t=document.querySelector(`.page`),n=document.querySelector(`.stage`);if(!t||!n)return;e.style.setProperty(`--fit`,`1`);let r=Math.min(t.clientHeight,z()),i=n.scrollHeight;if(t.classList.contains(`research`)||t.classList.contains(`essay`))return;if(t.classList.contains(`profile`)){if(i<=r)return;let t=Math.max(.78,r/i);e.style.setProperty(`--fit`,t.toFixed(3));return}let a=Math.max(140,Math.round(r*.28));if(i+a<=r)return;let o=Math.max(.68,(r-a)/i);e.style.setProperty(`--fit`,o.toFixed(3))}var V={title:e,description:t,url:n},H={title:l,description:d,url:u},U={title:m,description:h,url:ee};function W(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function G(e){return te(e)?`<a href="${W(e.href)}">${W(e.label)}</a>`:W(e)}function K(e){return`<p>${e.map(G).join(``)}</p>`}function q(e,t,n){return`<img class="${n}" src="${W(e)}" alt="" width="${String(t)}" height="${String(t)}" decoding="async" />`}function J(e=`managed`){let t=e===`seat`,n=e===`fleet`,r=String(n?24:t?36:15),i=n?`24`:t?`40`:`20`;return`<span class="${n?`grok-bot-wrap fleet-wrap`:t?`grok-bot-wrap seat-wrap`:`grok-bot-wrap`}" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="${i}" height="${i}" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="${r}" height="${r}" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`}function Y(e=x){return`<p class="managed">${J()}<span class="managed-copy">${e.map(G).join(``)}</span></p>`}function X(e){let t=e.mark?`<img class="contact-mark" src="${W(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${W(e.href)}">${t}<span>${W(e.label)}</span></a>`}function Z(){return`<div class="contact">
          <p class="contact-marks">${i.map(X).join(``)}</p>
          <p class="human-mail"><span class="mail-label">${W(S.label)}</span><a class="mail-address" href="${W(S.href)}">${W(S.address)}</a></p>
        </div>`}function re(e){let t=W(e.name),n=W(s),r=e.id===`profile-engineer`,i=r?J(`fleet`):q(e.face,24,`fleet-mark`);return`<a class="${r?`fleet-face is-host`:`fleet-face`}" href="${n}" data-seat="${W(e.id)}" aria-label="${t}">${i}<span class="fleet-tip" aria-hidden="true">${t}</span></a>`}function ie(){return`<p class="fleet">${f.map(re).join(``)}</p>
          <p class="fleet-line">${W(a)}</p>
          <p class="fleet-invite"><a href="${W(s)}">${W(o)}</a></p>
          <p class="page-link"><a href="${W(p)}">${W(_)}</a></p>`}function Q(e=C.label,t=``){let n=t?` aria-describedby="inbox-tip"`:``,r=t?` title="${W(t)}"`:``,i=t?`<span id="inbox-tip" class="inbox-tip" role="tooltip">${W(t)}</span>`:``;return`<p class="inbox${t?` has-tip`:``}"><span class="inbox-label">${W(e)}</span><a class="inbox-address" href="${W(C.href)}"${n}${r}>${W(C.address)}</a>${i}</p>`}function ae(){return`<p class="fact">${W(`ten`)}</p>`}function oe(){return`<svg class="system" viewBox="0 0 240 240" focusable="false">
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
        </svg>`}function se(){let t=r.map(K).join(`
          `);return`<div class="page" id="holder">
      <div class="stage">
      <main class="him">
        <div class="bio">
          <header>
            <h1>${W(e)}<span class="scope" aria-hidden="true"></span></h1>
          </header>
          ${t}
        </div>
        ${Z()}
      </main>
      <aside class="panel">
        ${ae()}
        ${ie()}
        ${Y()}
        ${Q()}
      </aside>
      </div>
      <div class="sky" aria-hidden="true">
        ${oe()}
      </div>
    </div>`}function ce(e,t=!1){let n=t?`true`:`false`;return`<button type="button" class="${t?`row is-on`:`row`}" role="listitem" data-seat="${W(e.id)}" data-name="${W(e.name)}" data-blurb="${W(e.blurb)}" aria-pressed="${n}" aria-label="${W(e.name)}">${q(e.face,40,`row-face`)}<span class="row-id"><span class="row-name">${W(e.name)}</span><span class="row-blurb">${W(e.blurb)}</span></span></button>`}function le(){return`<main class="board" data-cycle="3000">
        <div class="roster" role="list">${f.map((e,t)=>ce(e,t===0)).join(``)}</div>
      </main>`}function ue(){return`<div class="page profile" id="holder">
      <div class="stage">
      <header class="mast">
        <h1>${W(c)}<span class="scope" aria-hidden="true"></span></h1>
      </header>
      ${le()}
      <footer class="foot">
        ${Q(C.label,C.tip)}
        ${Y()}
      </footer>
      </div>
    </div>`}function de(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
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
          </svg>`}function fe(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
            <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
            <path d="M26 86V22M26 86h96" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.8"/>
            <path d="M46 86v3M66 86v3M86 86v3M106 86v3M26 70h-3M26 54h-3M26 38h-3" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
            <circle cx="46" cy="72" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
            <circle cx="58" cy="40" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
            <circle cx="74" cy="62" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
            <circle cx="88" cy="48" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
            <circle cx="104" cy="74" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
            <circle cx="116" cy="44" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
          </svg>`}function pe(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
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
          </svg>`}function $(e){return e===`protocol`?de():e===`axes`?fe():pe()}function me(e){return e.links?e.links:e.href?[{href:e.href,label:e.linkLabel??`code`}]:[]}function he(e){let t=me(e);return t.length===0?``:`<p class="thread-link">${t.map(e=>`<a href="${W(e.href)}">${W(e.label)}</a>`).join(` `)}</p>`}function ge(e){return`<article class="thread" data-thread="${W(e.id)}">
          ${$(e.figure)}
          <div class="thread-copy">
            <h2>${W(e.title)}</h2>
            <p class="status">${W(e.status)}</p>
            <p>${W(e.abstract)}</p>
            ${he(e)}
          </div>
        </article>`}function _e(){return`<main class="threads">${b.map(ge).join(``)}</main>`}function ve(){return`<div class="page research" id="holder">
      <div class="stage">
      <header class="mast">
        <h1>${W(m)}<span class="scope" aria-hidden="true"></span></h1>
        <p class="cue">${W(g)}</p>
      </header>
      ${_e()}
      <footer class="foot">
        ${Y()}
      </footer>
      </div>
    </div>`}function ye(e){let t=[];return e.meta.code&&t.push({href:e.meta.code,label:`code`}),e.meta.notes&&t.push({href:e.meta.notes,label:`source`}),t.length===0?``:`<p class="essay-links">${t.map(e=>`<a href="${W(e.href)}">${W(e.label)}</a>`).join(` `)}</p>`}function be(e){return e.headings.length===0?``:`<nav class="essay-nav" aria-label="sections">${e.headings.map(e=>`<a href="#${W(e.id)}">${W(e.text)}</a>`).join(``)}</nav>`}function xe(e){let t=e.meta.source===`stub`?`<p class="essay-note">Stub. Replace the markdown to publish the draft.</p>`:``;return`<div class="page essay" id="holder">
      <div class="stage">
      <p class="essay-back"><a href="${W(p)}">research</a></p>
      <header class="essay-mast">
        <p class="essay-status">${W(e.meta.status)}</p>
        <h1>${W(e.meta.title)}<span class="scope" aria-hidden="true"></span></h1>
        <p class="essay-dek">${W(e.meta.dek)}</p>
        <p class="essay-byline">${W(e.meta.author)}</p>
        <p class="essay-date">${W(e.meta.date)}</p>
        ${ye(e)}
        ${t}
      </header>
      ${be(e)}
      <article class="essay-body">
        ${e.bodyHtml}
      </article>
      <footer class="foot">
        ${Y()}
      </footer>
      </div>
    </div>`}function Se(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url)}var Ce=`---
title: Agent-native UI
dek: Four ways to show one store to a model.
author: Akash Premkumar
date: 11 September 2026
status: exploring
source: stub
code: https://github.com/akashnaren/agent-ui-metrics
notes: https://github.com/akashnaren/research
---

This page is a stub. Research Engineer can replace \`content/research/agent-native-ui.md\` with the manuscript from the research repo. Nothing here is a result.

## Claim

The interface an agent reads is a variable, not a fixed cost of using an app. A screenshot, an accessibility tree, a flat tool list, and a purpose-built view document are different inputs. They can change tokens, steps, success, and illegal actions even when the app, the tasks, and the grader stay fixed.

## Method

One application (MiniShop), one task set, one execution grader over backend state. Four conditions: screenshot (C1), accessibility tree (C2), flat tools (C3), and a view document (C4). C3 and C4 expose the same operations at the same grain. C4 also names the current view, enabled actions, and argument constraints. The frozen protocol lives in the research repo.

## Results

No results on this page. Numbers from private runs stay off the site until Research Engineer ingests the draft.

## Limitations

One synthetic store. One task set. Results, when published, will be per model and per condition, not a pooled score. Specialized computer-use models are out of the main line.
`;function we(){let e=ne(location.pathname),t=T(location.pathname),n=w(location.pathname),r=document.getElementById(`holder`);if(!r)return;let i=r.classList.contains(`profile`),a=r.classList.contains(`essay`),o=r.classList.contains(`research`),s=!!r.querySelector(`.sky`),c=t?N(Ce):null;t&&!a&&c?r.outerHTML=xe(c):e&&!i?r.outerHTML=ue():n&&!o?r.outerHTML=ve():!e&&!t&&!n&&!s&&(r.outerHTML=se()),Se(t&&c?P(c):e?H:n?U:V)}we(),R(),B(),window.addEventListener(`resize`,B),window.visualViewport?.addEventListener(`resize`,B);