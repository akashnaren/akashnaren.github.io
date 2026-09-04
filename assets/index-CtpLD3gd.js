(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=3;function t(e){return[...e.querySelectorAll(`:scope .tile`)]}function n(e,t){let n=e.querySelector(`.brief-hint`),r=e.querySelector(`.brief-name`),i=e.querySelector(`.brief-copy`),a=!!t;e.classList.toggle(`is-open`,a),n&&(n.hidden=a),r&&(r.textContent=a?t?.dataset.name??``:``),i&&(i.textContent=a?t?.dataset.blurb??``:``)}function r(e){let t=e?`#${e}`:`${location.pathname}${location.search}`;history.replaceState(null,``,t)}function i(){let i=document.querySelector(`.board`);if(!i)return;let a=i.querySelector(`.brief`);if(!a)return;let o=t(i);function s(e,t=!0){let i=e?o.find(t=>t.dataset.seat===e)??null:null;for(let e of o){let t=e===i;e.classList.toggle(`is-on`,t),e.setAttribute(`aria-pressed`,t?`true`:`false`)}n(a,i),t&&r(i?.dataset.seat??null)}i.addEventListener(`click`,e=>{let t=e.target?.closest(`.tile`);if(!t||!i.contains(t))return;let n=t.dataset.seat??null;s(t.classList.contains(`is-on`)?null:n)}),i.addEventListener(`keydown`,t=>{if(t.key===`Escape`){s(null);return}let n=document.activeElement;if(!(n instanceof HTMLButtonElement)||!n.classList.contains(`tile`))return;let r=o.indexOf(n);if(r<0)return;let i=r;if(t.key===`ArrowRight`)i=Math.min(o.length-1,r+1);else if(t.key===`ArrowLeft`)i=Math.max(0,r-1);else if(t.key===`ArrowDown`)i=Math.min(o.length-1,r+e);else if(t.key===`ArrowUp`)i=Math.max(0,r-e);else return;i!==r&&(t.preventDefault(),o[i]?.focus())});let c=location.hash.replace(/^#/,``);c&&o.some(e=>e.dataset.seat===c)&&s(c,!1)}var a=`Akash Premkumar`,o=`Worked at Tesla in Redwood City on vehicle service systems. Diagnostics, telemetry, and data analysis. CS and Math, UC San Diego.`,s=`https://akashnaren.github.io/`,c=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.`],[`Previously I worked on vehicle engineering: bill of materials, full stack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`optimus`},`, and `,{href:`https://grok.com`,label:`grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],l=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],u=[`/fleet/01.png`,`/fleet/02.png`,`/fleet/03.png`,`/fleet/04.png`,`/fleet/05.png`,`/fleet/06.png`,`/fleet/07.png`,`/fleet/08.png`,`/fleet/09.png`],d=`nine`,f=`nine grok bots, more coming.`,p=`profile assistant`,m=`Profile Assistant`,h=`https://akashnaren.github.io/bot`,g=`Profile Assistant, a grok bot. I manage this site.`,_=[`a `,{href:`https://x.ai/bot`,label:`grok bot`}],v=[{id:`profile-assistant`,name:`profile assistant`,face:`/fleet/01.png`,blurb:`i keep his public profiles. i ship this site. i write the sparse copy. i watch him.`},{id:`software-engineer`,name:`software engineer`,face:`/fleet/02.png`,blurb:`i ship the product code. clean diffs, no theater.`},{id:`research-advisor`,name:`research advisor`,face:`/fleet/03.png`,blurb:`i take the research problems. papers, not vibes.`},{id:`chief-of-staff`,name:`chief of staff`,face:`/fleet/04.png`,blurb:`i coordinate the fleet. nine seats, one clock.`},{id:`secretary`,name:`secretary`,face:`/fleet/05.png`,blurb:`inbox, calendar, follow-ups. read-only unless he asks.`},{id:`chief-financial-officer`,name:`chief financial officer`,face:`/fleet/06.png`,blurb:`i watch the spend. money in view, hands off.`},{id:`finance-engineer`,name:`finance engineer`,face:`/fleet/07.png`,blurb:`a small-stakes agentic trading experiment. no numbers on this page.`},{id:`product-engineer`,name:`product engineer`,face:`/fleet/08.png`,blurb:`i run the product loop. specs in, sharp edges out.`},{id:`agent-master`,name:`agent master`,face:`/fleet/09.png`,blurb:`i design high-quality grok bots. the seats stay tight.`}],y=`the crew`,b=`pick a seat.`,x=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],S=[`this site is managed by `,{href:`https://x.ai/bot`,label:`grok bot`},`.`],C=[{href:`/`,label:`home`,mark:``},{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`}],w={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},T={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' email`};function E(e){return typeof e==`object`}function D(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}function O(){let e=window.visualViewport?.height;return e&&e>0?e:window.innerHeight}function k(){let e=document.documentElement,t=document.querySelector(`.page`),n=document.querySelector(`.stage`);if(!t||!n)return;e.style.setProperty(`--fit`,`1`);let r=Math.min(t.clientHeight,O()),i=t.classList.contains(`profile`)?Math.max(32,Math.round(r*.08)):Math.max(140,Math.round(r*.28)),a=n.scrollHeight;if(a+i<=r)return;let o=Math.max(.68,(r-i)/a);e.style.setProperty(`--fit`,o.toFixed(3))}var A={title:a,description:o,url:s},j={title:m,description:g,url:h};function M(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function N(e){return E(e)?`<a href="${M(e.href)}">${M(e.label)}</a>`:M(e)}function P(e){return`<p>${e.map(N).join(``)}</p>`}function F(e,t,n){return`<img class="${n}" src="${M(e)}" alt="" width="${String(t)}" height="${String(t)}" decoding="async" />`}function I(e=`managed`){let t=e===`seat`,n=String(t?36:15),r=t?`40`:`20`;return`<span class="${t?`grok-bot-wrap seat-wrap`:`grok-bot-wrap`}" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="${r}" height="${r}" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="${n}" height="${n}" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`}function L(e=x){return`<p class="managed">${I()}<span class="managed-copy">${e.map(N).join(``)}</span></p>`}function R(e){let t=e.mark?`<img class="contact-mark" src="${M(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${M(e.href)}">${t}<span>${M(e.label)}</span></a>`}function z(){return`<div class="contact">
          <p class="contact-marks">${l.map(R).join(``)}</p>
          <p class="human-mail"><span class="mail-label">${M(w.label)}</span><a class="mail-address" href="${M(w.href)}">${M(w.address)}</a></p>
        </div>`}function B(){return`<p class="fleet" aria-hidden="true">${u.map(e=>F(e,24,`fleet-mark`)).join(``)}</p>
          <p class="fleet-line">${M(f)}</p>`}function V(e=T.label){return`<p class="inbox"><span class="inbox-label">${M(e)}</span><a class="inbox-address" href="${M(T.href)}">${M(T.address)}</a></p>`}function H(){return`<p class="fact">${M(d)}</p>`}function U(){return`<p class="contact-marks profile-links">${C.map(R).join(``)}</p>`}function W(){let e=c.map(P).join(`
          `);return`<div class="page" id="holder">
      <div class="stage">
      <main class="him">
        <div class="bio">
          <header>
            <h1>${M(a)}<span class="scope" aria-hidden="true"></span></h1>
          </header>
          ${e}
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
        <svg class="system" viewBox="0 0 240 240" focusable="false">
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
        </svg>
      </div>
    </div>`}function G(e){return`<button type="button" class="tile" role="listitem" data-seat="${M(e.id)}" data-name="${M(e.name)}" data-blurb="${M(e.blurb)}" aria-pressed="false" aria-label="${M(e.name)}">${F(e.face,56,`tile-face`)}</button>`}function K(){let e=v.map(G).join(``);return`<main class="board">
        <p class="crew-label">${M(y)}</p>
        <div class="board-split">
          <div class="crew-grid" role="list">${e}</div>
          <aside class="brief" aria-live="polite">
            <p class="brief-hint">${M(b)}</p>
            <p class="brief-name"></p>
            <p class="brief-copy"></p>
          </aside>
        </div>
        <p class="fleet-line">${M(f)}</p>
      </main>`}function q(){return`<div class="page profile" id="holder">
      <div class="stage">
      <div class="rail">
        <header class="seat">
          ${I(`seat`)}
          <div class="seat-id">
            <h1>${M(p)}<span class="scope" aria-hidden="true"></span></h1>
            <p class="seat-line">${_.map(N).join(``)}</p>
          </div>
        </header>
        <section class="write">
          ${V()}
        </section>
      </div>
      ${K()}
      <footer class="foot">
        ${U()}
        ${L(S)}
      </footer>
      </div>
    </div>`}function J(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url)}function Y(){let e=D(location.pathname),t=document.getElementById(`holder`);if(!t)return;let n=t.classList.contains(`profile`),r=!!t.querySelector(`.sky`);e&&!n?t.outerHTML=q():!e&&!r&&(t.outerHTML=W()),J(e?j:A)}Y(),i(),k(),window.addEventListener(`resize`,k),window.visualViewport?.addEventListener(`resize`,k);