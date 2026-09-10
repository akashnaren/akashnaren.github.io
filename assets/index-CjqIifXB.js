(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1400;function t(e){return[...e.querySelectorAll(`:scope .row`)]}function n(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function r(){let r=document.querySelector(`.board`);if(!r)return;let i=t(r);if(i.length===0)return;let a=Number(r.dataset.cycle??`3000`),o=!1,s=!1,c=0,l=0;function u(e,t=!1){let n=e?i.find(t=>t.dataset.seat===e)??null:null;for(let e of i){let t=e===n;e.classList.toggle(`is-on`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`)}if(t){let e=n?`#${n.dataset.seat??``}`:`${location.pathname}${location.search}`;history.replaceState(null,``,e)}}function d(){window.clearInterval(c),c=0}function f(){d(),!n()&&(!Number.isFinite(a)||a<=0||(c=window.setInterval(()=>{if(s)return;let e=i.findIndex(e=>e.classList.contains(`is-on`)),t=e<0?0:(e+1)%i.length;u(i[t]?.dataset.seat??null)},a)))}function p(e){s=!0,window.clearTimeout(l),d(),u(e.dataset.seat??null)}function m(){s=!1,window.clearTimeout(l),l=window.setTimeout(()=>{s||f()},e)}r.addEventListener(`pointerdown`,()=>{o=!0}),r.addEventListener(`click`,e=>{o=!1;let t=e.target?.closest(`.row`);t&&r.contains(t)&&u(t.dataset.seat??null,!0)});for(let e of i)e.addEventListener(`pointerenter`,()=>{p(e)}),e.addEventListener(`pointerleave`,()=>{m()});r.addEventListener(`focusin`,e=>{let t=e.target?.closest(`.row`);t&&r.contains(t)&&p(t)}),r.addEventListener(`focusout`,e=>{let t=e.relatedTarget;if(t instanceof Node&&r.contains(t)){let e=t.closest(`.row`);if(e&&r.contains(e))return}o||m()}),r.addEventListener(`keydown`,e=>{if(e.key===`Escape`){document.activeElement?.blur(),m();return}let t=document.activeElement;if(!(t instanceof HTMLButtonElement)||!t.classList.contains(`row`))return;let n=i.indexOf(t);if(n<0)return;let r=n;if(e.key===`ArrowRight`||e.key===`ArrowDown`)r=(n+1)%i.length;else if(e.key===`ArrowLeft`||e.key===`ArrowUp`)r=(n-1+i.length)%i.length;else return;r!==n&&(e.preventDefault(),i[r]?.focus())});let h=location.hash.replace(/^#/,``),g=h&&i.some(e=>e.dataset.seat===h),_=i.find(e=>e.classList.contains(`is-on`));u(g?h:_?.dataset.seat??i[0]?.dataset.seat??null),f()}var i=`Akash Premkumar`,a=`Worked at Tesla in Redwood City on vehicle service systems. Diagnostics, telemetry, and data analysis. CS and Math, UC San Diego.`,o=`https://akashnaren.github.io/`,s=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.`],[`Previously I worked on vehicle engineering: bill of materials, fullstack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`Robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`Optimus`},`, and `,{href:`https://grok.com`,label:`Grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],c=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],l=`nine`,u=`nine grok bots, more coming.`,d=`click on any bot`,f=`/bot`,p=`grok bot collection`,m=`grok bot collection`,h=`https://akashnaren.github.io/bot`,g=`Nine grok bots. A quiet collection.`,_=[{id:`profile-assistant`,name:`profile assistant`,face:`/fleet/01.png`,blurb:`i keep his profiles and ship this site.`},{id:`software-engineer`,name:`software engineer`,face:`/fleet/02.png`,blurb:`quiet diffs. a clean compile.`},{id:`research-advisor`,name:`research advisor`,face:`/fleet/03.png`,blurb:`i read the papers that matter.`},{id:`chief-of-staff`,name:`chief of staff`,face:`/fleet/04.png`,blurb:`i keep the nine on the clock.`},{id:`secretary`,name:`secretary`,face:`/fleet/05.png`,blurb:`i keep the desk quiet.`},{id:`chief-financial-officer`,name:`chief financial officer`,face:`/fleet/06.png`,blurb:`i tap the glass. i stay even.`},{id:`finance-engineer`,name:`finance engineer`,face:`/fleet/07.png`,blurb:`i keep the models quiet.`},{id:`product-engineer`,name:`product engineer`,face:`/fleet/08.png`,blurb:`i file the sharp corners.`},{id:`agent-master`,name:`agent master`,face:`/fleet/09.png`,blurb:`i build grok bots like these.`}],v=`/research`,y=`research`,b=`https://akashnaren.github.io/research`,x=`still researching`,S=`still researching`,C=`Research`,w=[{id:`agent-native-ui-protocols`,title:`Agent-native UI protocols`,status:`exploring`,figure:`protocol`,abstract:`Agents still drive apps through screenshots or a flat accessibility tree. I am comparing those to a structured view the agent can read.`,href:`https://github.com/akashnaren/agent-ui-metrics`,linkLabel:`code`},{id:`arc-agi-vs-hallucination-risk`,title:`ARC-AGI vs hallucination risk`,status:`exploring`,figure:`axes`,abstract:`ARC-AGI-1 measures puzzle solving. I am checking whether those scores track how often a model hallucinates.`},{id:`entity-investigation`,title:`Entity Investigation`,status:`exploring`,figure:`gaps`,abstract:`I am looking at how to reason over fragmented records and link events to the right address over time.`,href:`https://temporal-buddies5.vercel.app/`,linkLabel:`demo`}],T=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],E={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},D={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' inbox`,tip:`the agents' inbox — not his personal Gmail`};function O(e){return typeof e==`object`}function k(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}function A(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/?$/.test(t)||/\/research\/index\.html$/.test(t)}function j(){let e=window.visualViewport?.height;return e&&e>0?e:window.innerHeight}function M(){let e=document.documentElement,t=document.querySelector(`.page`),n=document.querySelector(`.stage`);if(!t||!n)return;e.style.setProperty(`--fit`,`1`);let r=Math.min(t.clientHeight,j()),i=n.scrollHeight;if(t.classList.contains(`research`))return;if(t.classList.contains(`profile`)){if(i<=r)return;let t=Math.max(.78,r/i);e.style.setProperty(`--fit`,t.toFixed(3));return}let a=Math.max(140,Math.round(r*.28));if(i+a<=r)return;let o=Math.max(.68,(r-a)/i);e.style.setProperty(`--fit`,o.toFixed(3))}var N={title:i,description:a,url:o},P={title:m,description:g,url:h},F={title:y,description:x,url:b};function I(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function L(e){return O(e)?`<a href="${I(e.href)}">${I(e.label)}</a>`:I(e)}function R(e){return`<p>${e.map(L).join(``)}</p>`}function z(e,t,n){return`<img class="${n}" src="${I(e)}" alt="" width="${String(t)}" height="${String(t)}" decoding="async" />`}function B(e=`managed`){let t=e===`seat`,n=e===`fleet`,r=String(n?24:t?36:15),i=n?`24`:t?`40`:`20`;return`<span class="${n?`grok-bot-wrap fleet-wrap`:t?`grok-bot-wrap seat-wrap`:`grok-bot-wrap`}" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="${i}" height="${i}" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="${r}" height="${r}" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`}function V(e=T){return`<p class="managed">${B()}<span class="managed-copy">${e.map(L).join(``)}</span></p>`}function H(e){let t=e.mark?`<img class="contact-mark" src="${I(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${I(e.href)}">${t}<span>${I(e.label)}</span></a>`}function U(){return`<div class="contact">
          <p class="contact-marks">${c.map(H).join(``)}</p>
          <p class="human-mail"><span class="mail-label">${I(E.label)}</span><a class="mail-address" href="${I(E.href)}">${I(E.address)}</a></p>
        </div>`}function W(e){let t=I(e.name),n=I(f),r=e.id===`profile-assistant`,i=r?B(`fleet`):z(e.face,24,`fleet-mark`);return`<a class="${r?`fleet-face is-host`:`fleet-face`}" href="${n}" data-seat="${I(e.id)}" aria-label="${t}">${i}<span class="fleet-tip" aria-hidden="true">${t}</span></a>`}function ee(){return`<p class="fleet">${_.map(W).join(``)}</p>
          <p class="fleet-line">${I(u)}</p>
          <p class="fleet-invite"><a href="${I(f)}">${I(d)}</a></p>
          <p class="page-link"><a href="${I(v)}">${I(C)}</a></p>`}function G(e=D.label,t=``){let n=t?` aria-describedby="inbox-tip"`:``,r=t?` title="${I(t)}"`:``,i=t?`<span id="inbox-tip" class="inbox-tip" role="tooltip">${I(t)}</span>`:``;return`<p class="inbox${t?` has-tip`:``}"><span class="inbox-label">${I(e)}</span><a class="inbox-address" href="${I(D.href)}"${n}${r}>${I(D.address)}</a>${i}</p>`}function K(){return`<p class="fact">${I(l)}</p>`}function q(){return`<svg class="system" viewBox="0 0 240 240" focusable="false">
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
        </svg>`}function J(){let e=s.map(R).join(`
          `);return`<div class="page" id="holder">
      <div class="stage">
      <main class="him">
        <div class="bio">
          <header>
            <h1>${I(i)}<span class="scope" aria-hidden="true"></span></h1>
          </header>
          ${e}
        </div>
        ${U()}
      </main>
      <aside class="panel">
        ${K()}
        ${ee()}
        ${V()}
        ${G()}
      </aside>
      </div>
      <div class="sky" aria-hidden="true">
        ${q()}
      </div>
    </div>`}function Y(e,t=!1){let n=t?`true`:`false`;return`<button type="button" class="${t?`row is-on`:`row`}" role="listitem" data-seat="${I(e.id)}" data-name="${I(e.name)}" data-blurb="${I(e.blurb)}" aria-pressed="${n}" aria-label="${I(e.name)}">${z(e.face,40,`row-face`)}<span class="row-id"><span class="row-name">${I(e.name)}</span><span class="row-blurb">${I(e.blurb)}</span></span></button>`}function X(){return`<main class="board" data-cycle="3000">
        <div class="roster" role="list">${_.map((e,t)=>Y(e,t===0)).join(``)}</div>
      </main>`}function Z(){return`<div class="page profile" id="holder">
      <div class="stage">
      <header class="mast">
        <h1>${I(p)}<span class="scope" aria-hidden="true"></span></h1>
      </header>
      ${X()}
      <footer class="foot">
        ${G(D.label,D.tip)}
        ${V()}
      </footer>
      </div>
    </div>`}function Q(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
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
          </svg>`}function $(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
            <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
            <path d="M26 86V22M26 86h96" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.8"/>
            <path d="M46 86v3M66 86v3M86 86v3M106 86v3M26 70h-3M26 54h-3M26 38h-3" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
            <circle cx="46" cy="72" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
            <circle cx="58" cy="40" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
            <circle cx="74" cy="62" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
            <circle cx="88" cy="48" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
            <circle cx="104" cy="74" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
            <circle cx="116" cy="44" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
          </svg>`}function te(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
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
          </svg>`}function ne(e){return e===`protocol`?Q():e===`axes`?$():te()}function re(e){let t=e.href?`<p class="thread-link"><a href="${I(e.href)}">${I(e.linkLabel??`code`)}</a></p>`:``;return`<article class="thread" data-thread="${I(e.id)}">
          ${ne(e.figure)}
          <div class="thread-copy">
            <h2>${I(e.title)}</h2>
            <p class="status">${I(e.status)}</p>
            <p>${I(e.abstract)}</p>
            ${t}
          </div>
        </article>`}function ie(){return`<main class="threads">${w.map(re).join(``)}</main>`}function ae(){return`<div class="page research" id="holder">
      <div class="stage">
      <header class="mast">
        <h1>${I(y)}<span class="scope" aria-hidden="true"></span></h1>
        <p class="cue">${I(S)}</p>
      </header>
      ${ie()}
      <footer class="foot">
        ${V()}
      </footer>
      </div>
    </div>`}function oe(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url)}function se(){let e=k(location.pathname),t=A(location.pathname),n=document.getElementById(`holder`);if(!n)return;let r=n.classList.contains(`profile`),i=n.classList.contains(`research`),a=!!n.querySelector(`.sky`);e&&!r?n.outerHTML=Z():t&&!i?n.outerHTML=ae():!e&&!t&&!a&&(n.outerHTML=J()),oe(e?P:t?F:N)}se(),r(),M(),window.addEventListener(`resize`,M),window.visualViewport?.addEventListener(`resize`,M);