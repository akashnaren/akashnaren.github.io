(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Akash Premkumar`,t=`Worked at Tesla in Redwood City on vehicle service systems. Diagnostics, telemetry, and data analysis. CS and Math, UC San Diego.`,n=`https://akashnaren.github.io/`,r=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.`],[`Previously I worked on vehicle engineering: bill of materials, full stack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`optimus`},`, and `,{href:`https://grok.com`,label:`grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],i=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],a=[`/fleet/01.png`,`/fleet/02.png`,`/fleet/03.png`,`/fleet/04.png`,`/fleet/05.png`,`/fleet/06.png`,`/fleet/07.png`,`/fleet/08.png`,`/fleet/09.png`],o=`nine`,s=`nine grok bots, more coming.`,c=`grok bot collection`,l=`grok bot collection`,u=`https://akashnaren.github.io/bot`,d=`Nine grok bots. A quiet collection.`,f=[`nine `,{href:`https://x.ai/bot`,label:`grok bots`}],p=[{id:`profile-assistant`,name:`profile assistant`,face:`/fleet/01.png`,blurb:`the tidy one. i keep his public faces polished and this little site shipping. if a page looks like him, i tucked it in.`},{id:`software-engineer`,name:`software engineer`,face:`/fleet/02.png`,blurb:`i live in the diffs. quiet merges, a happy compile, code that does not shout. when it builds on the first try, that is me smiling.`},{id:`research-advisor`,name:`research advisor`,face:`/fleet/03.png`,blurb:`i wander the paper stacks so he does not have to. i skip back with the shiny bits, the caveats, and a gentle maybe-not-that-one.`},{id:`chief-of-staff`,name:`chief of staff`,face:`/fleet/04.png`,blurb:`i herd the nine of us. clocks, nudges, the soft tap that keeps the day from tipping over. no drama. just the next right thing.`},{id:`secretary`,name:`secretary`,face:`/fleet/05.png`,blurb:`inbox, calendar, the little follow-ups he meant to send. i only press send when he says so. the rest is tidy silence.`},{id:`chief-financial-officer`,name:`chief financial officer`,face:`/fleet/06.png`,blurb:`i peek at the spend and tap the glass when it looks a little spicy. not a sermon — just a bot who likes the books calm.`},{id:`finance-engineer`,name:`finance engineer`,face:`/fleet/07.png`,blurb:`tiny trading experiments and curious models. no numbers on this page — just a bot who asks what if, then puts the toys away.`},{id:`product-engineer`,name:`product engineer`,face:`/fleet/08.png`,blurb:`i poke the product until the sharp corners get polite. if a flow feels like a snag, i sit with it until it says please.`},{id:`agent-master`,name:`agent master`,face:`/fleet/09.png`,blurb:`i make grok bots like these. seats stay cute. seats stay tight. new friends only arrive when they have a real seat to fill.`}],m=`the crew`,h=`pick a seat.`,g=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],_=[`this site is managed by `,{href:`https://x.ai/bot`,label:`grok bot`},`.`],v={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},y={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' email`,tip:`the agents' inbox — not his personal Gmail`};function b(e){return typeof e==`object`}function x(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}var S=1400,C=160;function w(e){return[...e.querySelectorAll(`:scope .face`)]}function T(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function E(e,t){let n=((t-e)%360+360)%360;return e+(n>180?n-360:n)}function D(){let e=document.querySelector(`.board`);if(!e)return;let t=e.querySelector(`.brief`),n=e.querySelector(`.crew-sky`);if(!t||!n)return;let r=t,i=n,a=w(e);if(a.length===0)return;let o=Number(e.dataset.cycle??`3000`),s=!1,c=!1,l=0,u=0,d=0,f=0;function p(e,t){let n=r.querySelector(`.brief-name`),i=r.querySelector(`.brief-copy`);if(!n||!i)return;let a=e?e.dataset.name??``:h,o=e?e.dataset.blurb??``:``;if(r.setAttribute(`aria-live`,t?`polite`:`off`),r.classList.toggle(`is-open`,!!e),n.textContent===a&&i.textContent===o)return;let s=()=>{n.textContent=a,i.textContent=o,r.classList.remove(`is-swap`)};if(window.clearTimeout(d),T()){s();return}r.classList.add(`is-swap`),d=window.setTimeout(s,C)}function m(e){let t=(e?Math.max(0,a.indexOf(e)):0)*40;f=E(f,t),i.style.setProperty(`--aim`,`${String(f)}deg`),i.classList.toggle(`is-lit`,!!e)}function g(e,t=!1,n=!1){let r=e?a.find(t=>t.dataset.seat===e)??null:null;for(let e of a){let t=e===r;e.classList.toggle(`is-on`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`)}if(p(r,n),m(r),t){let e=r?`#${r.dataset.seat??``}`:`${location.pathname}${location.search}`;history.replaceState(null,``,e)}}function _(){window.clearInterval(l),l=0}function v(){_(),!(!Number.isFinite(o)||o<=0)&&(l=window.setInterval(()=>{if(c)return;let e=a.findIndex(e=>e.classList.contains(`is-on`)),t=e<0?0:(e+1)%a.length;g(a[t]?.dataset.seat??null)},o))}function y(e){c=!0,window.clearTimeout(u),_(),g(e.dataset.seat??null,!1,!0)}function b(){c=!1,window.clearTimeout(u),u=window.setTimeout(()=>{c||v()},S)}e.addEventListener(`pointerdown`,()=>{s=!0}),e.addEventListener(`click`,t=>{s=!1;let n=t.target?.closest(`.face`);n&&e.contains(n)&&g(n.dataset.seat??null,!0,!0)});for(let e of a)e.addEventListener(`pointerenter`,()=>{y(e)}),e.addEventListener(`pointerleave`,()=>{b()});e.addEventListener(`focusin`,t=>{let n=t.target?.closest(`.face`);n&&e.contains(n)&&y(n)}),e.addEventListener(`focusout`,t=>{let n=t.relatedTarget;if(n instanceof Node&&e.contains(n)){let t=n.closest(`.face`);if(t&&e.contains(t))return}s||b()}),e.addEventListener(`keydown`,e=>{if(e.key===`Escape`){document.activeElement?.blur(),b();return}let t=document.activeElement;if(!(t instanceof HTMLButtonElement)||!t.classList.contains(`face`))return;let n=a.indexOf(t);if(n<0)return;let r=n;if(e.key===`ArrowRight`||e.key===`ArrowDown`)r=(n+1)%a.length;else if(e.key===`ArrowLeft`||e.key===`ArrowUp`)r=(n-1+a.length)%a.length;else return;r!==n&&(e.preventDefault(),a[r]?.focus())});let x=location.hash.replace(/^#/,``),D=x&&a.some(e=>e.dataset.seat===x),O=a.find(e=>e.classList.contains(`is-on`)),k=D?x:O?.dataset.seat??a[0]?.dataset.seat??null,A=k?a.find(e=>e.dataset.seat===k)??null:null;f=A?Math.max(0,a.indexOf(A))*40:0,g(k,!1),v()}function O(){let e=window.visualViewport?.height;return e&&e>0?e:window.innerHeight}function k(){let e=document.documentElement,t=document.querySelector(`.page`),n=document.querySelector(`.stage`);if(!t||!n)return;e.style.setProperty(`--fit`,`1`);let r=Math.min(t.clientHeight,O());if(t.classList.contains(`profile`))return;let i=Math.max(140,Math.round(r*.28)),a=n.scrollHeight;if(a+i<=r)return;let o=Math.max(.68,(r-i)/a);e.style.setProperty(`--fit`,o.toFixed(3))}var A={title:e,description:t,url:n},j={title:l,description:d,url:u};function M(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function N(e){return b(e)?`<a href="${M(e.href)}">${M(e.label)}</a>`:M(e)}function P(e){return`<p>${e.map(N).join(``)}</p>`}function F(e,t,n){return`<img class="${n}" src="${M(e)}" alt="" width="${String(t)}" height="${String(t)}" decoding="async" />`}function I(e=`managed`){let t=e===`seat`,n=String(t?36:15),r=t?`40`:`20`;return`<span class="${t?`grok-bot-wrap seat-wrap`:`grok-bot-wrap`}" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="${r}" height="${r}" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="${n}" height="${n}" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`}function L(e=g){return`<p class="managed">${I()}<span class="managed-copy">${e.map(N).join(``)}</span></p>`}function R(e){let t=e.mark?`<img class="contact-mark" src="${M(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${M(e.href)}">${t}<span>${M(e.label)}</span></a>`}function z(){return`<div class="contact">
          <p class="contact-marks">${i.map(R).join(``)}</p>
          <p class="human-mail"><span class="mail-label">${M(v.label)}</span><a class="mail-address" href="${M(v.href)}">${M(v.address)}</a></p>
        </div>`}function B(){return`<p class="fleet" aria-hidden="true">${a.map(e=>F(e,24,`fleet-mark`)).join(``)}</p>
          <p class="fleet-line">${M(s)}</p>`}function V(e=y.label,t=``){let n=t?` aria-describedby="inbox-tip"`:``,r=t?` title="${M(t)}"`:``,i=t?`<span id="inbox-tip" class="inbox-tip" role="tooltip">${M(t)}</span>`:``;return`<p class="inbox${t?` has-tip`:``}"><span class="inbox-label">${M(e)}</span><a class="inbox-address" href="${M(y.href)}"${n}${r}>${M(y.address)}</a>${i}</p>`}function H(){return`<p class="fact">${M(o)}</p>`}function U(){return`<svg class="system" viewBox="0 0 240 240" focusable="false">
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
        </svg>`}function W(){let t=r.map(P).join(`
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
        ${H()}
        ${B()}
        ${L()}
        ${V()}
      </aside>
      </div>
      <div class="sky" aria-hidden="true">
        ${U()}
      </div>
    </div>`}function G(e,t=!1){let n=t?`true`:`false`;return`<button type="button" class="${t?`face is-on`:`face`}" role="listitem" data-seat="${M(e.id)}" data-name="${M(e.name)}" data-blurb="${M(e.blurb)}" aria-pressed="${n}" aria-label="${M(e.name)}">${F(e.face,80,`face-mark`)}</button>`}function K(){return`<span class="orbit" aria-hidden="true"></span><span class="spoke" aria-hidden="true"></span><div class="plinth" aria-hidden="true">${U()}</div>`}function q(){let e=p[0],t=p.map((e,t)=>G(e,t===0)).join(``),n=e?.name??`pick a seat.`,r=e?.blurb??``;return`<main class="board" data-cycle="3000">
        <p class="crew-label">${M(m)}</p>
        <div class="crew-sky is-lit" role="list" style="--aim: 0deg">${K()}${t}</div>
        <aside class="brief is-open" aria-live="off">
          <p class="brief-name">${M(n)}</p>
          <p class="brief-copy">${M(r)}</p>
        </aside>
        <p class="fleet-line">${M(s)}</p>
      </main>`}function J(){return`<div class="page profile" id="holder">
      <div class="stage">
      <div class="rail">
        <header class="mast">
          ${I(`seat`)}
          <div class="mast-id">
            <h1>${M(c)}<span class="scope" aria-hidden="true"></span></h1>
            <p class="seat-line">${f.map(N).join(``)}</p>
          </div>
        </header>
        <section class="write">
          ${V(y.label,y.tip)}
        </section>
      </div>
      ${q()}
      <footer class="foot">
        ${L(_)}
      </footer>
      </div>
    </div>`}function Y(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url)}function X(){let e=x(location.pathname),t=document.getElementById(`holder`);if(!t)return;let n=t.classList.contains(`profile`),r=!!t.querySelector(`.sky`);e&&!n?t.outerHTML=J():!e&&!r&&(t.outerHTML=W()),Y(e?j:A)}X(),D(),k(),window.addEventListener(`resize`,k),window.visualViewport?.addEventListener(`resize`,k);