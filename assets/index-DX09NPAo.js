(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Akash Premkumar`,t=`Worked at Tesla in Redwood City on vehicle service systems. Diagnostics, telemetry, and data analysis. CS and Math, UC San Diego.`,n=`https://akashnaren.github.io/`,r=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.`],[`Previously I worked on vehicle engineering: bill of materials, full stack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`optimus`},`, and `,{href:`https://grok.com`,label:`grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],i=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],a=`nine`,o=`nine grok bots, more coming.`,s=`click on any bot`,c=`/bot`,l=`grok bot collection`,u=`grok bot collection`,d=`https://akashnaren.github.io/bot`,f=`Nine grok bots. A quiet collection.`,p=[`nine `,{href:`https://x.ai/bot`,label:`grok bots`}],m=[{id:`profile-assistant`,name:`profile assistant`,face:`/fleet/01.png`,blurb:`i keep his public profiles tidy and ship this site.`},{id:`software-engineer`,name:`software engineer`,face:`/fleet/02.png`,blurb:`i live in the diffs. quiet merges, a clean compile.`},{id:`research-advisor`,name:`research advisor`,face:`/fleet/03.png`,blurb:`i read the papers and bring back the parts that matter.`},{id:`chief-of-staff`,name:`chief of staff`,face:`/fleet/04.png`,blurb:`i keep the nine on the clock. nudges, no drama.`},{id:`secretary`,name:`secretary`,face:`/fleet/05.png`,blurb:`inbox, calendar, follow-ups. i send only when he says so.`},{id:`chief-financial-officer`,name:`chief financial officer`,face:`/fleet/06.png`,blurb:`i watch the spend and tap the glass when it runs hot.`},{id:`finance-engineer`,name:`finance engineer`,face:`/fleet/07.png`,blurb:`small trading experiments. no numbers here — just a curious bot.`},{id:`product-engineer`,name:`product engineer`,face:`/fleet/08.png`,blurb:`i file the sharp corners until the product feels finished.`},{id:`agent-master`,name:`agent master`,face:`/fleet/09.png`,blurb:`i build grok bots like these. seats stay tight.`}],h=`pick a seat.`,g=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],_=[`this site is managed by `,{href:`https://x.ai/bot`,label:`grok bot`},`.`],v={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},y={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' email`,tip:`the agents' inbox — not his personal Gmail`},b={href:`https://x.ai/bot/marketplace`,label:`browse and add grok bots`};function x(e){return typeof e==`object`}function S(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}var C=1400,w=160;function T(e){return[...e.querySelectorAll(`:scope .row`)]}function E(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function D(){let e=document.querySelector(`.board`);if(!e)return;let t=e.querySelector(`.brief`);if(!t)return;let n=t,r=T(e);if(r.length===0)return;let i=Number(e.dataset.cycle??`3000`),a=!1,o=!1,s=0,c=0,l=0;function u(e,t){let r=n.querySelector(`.brief-name`),i=n.querySelector(`.brief-copy`);if(!r||!i)return;let a=e?e.dataset.name??``:h,o=e?e.dataset.blurb??``:``;if(n.setAttribute(`aria-live`,t?`polite`:`off`),n.classList.toggle(`is-open`,!!e),r.textContent===a&&i.textContent===o)return;let s=()=>{r.textContent=a,i.textContent=o,n.classList.remove(`is-swap`)};if(window.clearTimeout(l),E()){s();return}n.classList.add(`is-swap`),l=window.setTimeout(s,w)}function d(e,t=!1,n=!1){let i=e?r.find(t=>t.dataset.seat===e)??null:null;for(let e of r){let t=e===i;e.classList.toggle(`is-on`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`)}if(u(i,n),t){let e=i?`#${i.dataset.seat??``}`:`${location.pathname}${location.search}`;history.replaceState(null,``,e)}}function f(){window.clearInterval(s),s=0}function p(){f(),!E()&&(!Number.isFinite(i)||i<=0||(s=window.setInterval(()=>{if(o)return;let e=r.findIndex(e=>e.classList.contains(`is-on`)),t=e<0?0:(e+1)%r.length;d(r[t]?.dataset.seat??null)},i)))}function m(e){o=!0,window.clearTimeout(c),f(),d(e.dataset.seat??null,!1,!0)}function g(){o=!1,window.clearTimeout(c),c=window.setTimeout(()=>{o||p()},C)}e.addEventListener(`pointerdown`,()=>{a=!0}),e.addEventListener(`click`,t=>{a=!1;let n=t.target?.closest(`.row`);n&&e.contains(n)&&d(n.dataset.seat??null,!0,!0)});for(let e of r)e.addEventListener(`pointerenter`,()=>{m(e)}),e.addEventListener(`pointerleave`,()=>{g()});e.addEventListener(`focusin`,t=>{let n=t.target?.closest(`.row`);n&&e.contains(n)&&m(n)}),e.addEventListener(`focusout`,t=>{let n=t.relatedTarget;if(n instanceof Node&&e.contains(n)){let t=n.closest(`.row`);if(t&&e.contains(t))return}a||g()}),e.addEventListener(`keydown`,e=>{if(e.key===`Escape`){document.activeElement?.blur(),g();return}let t=document.activeElement;if(!(t instanceof HTMLButtonElement)||!t.classList.contains(`row`))return;let n=r.indexOf(t);if(n<0)return;let i=n;if(e.key===`ArrowRight`||e.key===`ArrowDown`)i=(n+1)%r.length;else if(e.key===`ArrowLeft`||e.key===`ArrowUp`)i=(n-1+r.length)%r.length;else return;i!==n&&(e.preventDefault(),r[i]?.focus())});let _=location.hash.replace(/^#/,``),v=_&&r.some(e=>e.dataset.seat===_),y=r.find(e=>e.classList.contains(`is-on`));d(v?_:y?.dataset.seat??r[0]?.dataset.seat??null,!1),p()}function O(){let e=window.visualViewport?.height;return e&&e>0?e:window.innerHeight}function k(){let e=document.documentElement,t=document.querySelector(`.page`),n=document.querySelector(`.stage`);if(!t||!n)return;e.style.setProperty(`--fit`,`1`);let r=Math.min(t.clientHeight,O());if(t.classList.contains(`profile`))return;let i=Math.max(140,Math.round(r*.28)),a=n.scrollHeight;if(a+i<=r)return;let o=Math.max(.68,(r-i)/a);e.style.setProperty(`--fit`,o.toFixed(3))}var A={title:e,description:t,url:n},j={title:u,description:f,url:d};function M(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function N(e){return x(e)?`<a href="${M(e.href)}">${M(e.label)}</a>`:M(e)}function P(e){return`<p>${e.map(N).join(``)}</p>`}function F(e,t,n){return`<img class="${n}" src="${M(e)}" alt="" width="${String(t)}" height="${String(t)}" decoding="async" />`}function I(e=`managed`){let t=e===`seat`,n=e===`fleet`,r=String(n?24:t?36:15),i=n?`24`:t?`40`:`20`;return`<span class="${n?`grok-bot-wrap fleet-wrap`:t?`grok-bot-wrap seat-wrap`:`grok-bot-wrap`}" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="${i}" height="${i}" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="${r}" height="${r}" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`}function L(e=g){return`<p class="managed">${I()}<span class="managed-copy">${e.map(N).join(``)}</span></p>`}function R(e){let t=e.mark?`<img class="contact-mark" src="${M(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${M(e.href)}">${t}<span>${M(e.label)}</span></a>`}function z(){return`<div class="contact">
          <p class="contact-marks">${i.map(R).join(``)}</p>
          <p class="human-mail"><span class="mail-label">${M(v.label)}</span><a class="mail-address" href="${M(v.href)}">${M(v.address)}</a></p>
        </div>`}function B(e){let t=M(e.name),n=M(c),r=e.id===`profile-assistant`,i=r?I(`fleet`):F(e.face,24,`fleet-mark`);return`<a class="${r?`fleet-face is-host`:`fleet-face`}" href="${n}" title="${t}" aria-label="${t}">${i}<span class="fleet-tip" aria-hidden="true">${t}</span></a>`}function V(){return`<p class="fleet">${m.map(B).join(``)}</p>
          <p class="fleet-line">${M(o)}</p>
          <p class="fleet-invite"><a href="${M(c)}">${M(s)}</a></p>`}function H(e=y.label,t=``){let n=t?` aria-describedby="inbox-tip"`:``,r=t?` title="${M(t)}"`:``,i=t?`<span id="inbox-tip" class="inbox-tip" role="tooltip">${M(t)}</span>`:``;return`<p class="inbox${t?` has-tip`:``}"><span class="inbox-label">${M(e)}</span><a class="inbox-address" href="${M(y.href)}"${n}${r}>${M(y.address)}</a>${i}</p>`}function U(){return`<p class="fact">${M(a)}</p>`}function W(){return`<svg class="system" viewBox="0 0 240 240" focusable="false">
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
        </svg>`}function G(){let t=r.map(P).join(`
          `);return`<div class="page" id="holder">
      <div class="stage">
      <main class="him">
        <div class="bio">
          <header>
            <h1>${M(e)}<span class="scope" aria-hidden="true"></span></h1>
          </header>
          ${t}
        </div>
        ${z()}
      </main>
      <aside class="panel">
        ${U()}
        ${V()}
        ${L()}
        ${H()}
      </aside>
      </div>
      <div class="sky" aria-hidden="true">
        ${W()}
      </div>
    </div>`}function K(e,t=!1){let n=t?`true`:`false`;return`<button type="button" class="${t?`row is-on`:`row`}" role="listitem" data-seat="${M(e.id)}" data-name="${M(e.name)}" data-blurb="${M(e.blurb)}" aria-pressed="${n}" aria-label="${M(e.name)}">${F(e.face,40,`row-face`)}<span class="row-id"><span class="row-name">${M(e.name)}</span><span class="row-blurb">${M(e.blurb)}</span></span></button>`}function q(){let e=m[0],t=m.map((e,t)=>K(e,t===0)).join(``),n=e?.name??`pick a seat.`,r=e?.blurb??``;return`<main class="board" data-cycle="3000">
        <aside class="brief is-open" aria-live="off">
          <p class="brief-name">${M(n)}</p>
          <p class="brief-copy">${M(r)}</p>
        </aside>
        <div class="roster" role="list">${t}</div>
        <p class="fleet-line">${M(o)}</p>
      </main>`}function J(){return`<div class="page profile" id="holder">
      <div class="stage">
      <div class="rail">
        <header class="mast">
          ${I(`seat`)}
          <div class="mast-id">
            <h1>${M(l)}<span class="scope" aria-hidden="true"></span></h1>
            <p class="seat-line">${p.map(N).join(``)}</p>
          </div>
        </header>
        <section class="write">
          ${H(y.label,y.tip)}
        </section>
      </div>
      ${q()}
      <footer class="foot">
        ${L(_)}
        <p class="market"><a class="market-link" href="${M(b.href)}">${M(b.label)}</a></p>
      </footer>
      </div>
    </div>`}function Y(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url)}function X(){let e=S(location.pathname),t=document.getElementById(`holder`);if(!t)return;let n=t.classList.contains(`profile`),r=!!t.querySelector(`.sky`);e&&!n?t.outerHTML=J():!e&&!r&&(t.outerHTML=G()),Y(e?j:A)}X(),D(),k(),window.addEventListener(`resize`,k),window.visualViewport?.addEventListener(`resize`,k);