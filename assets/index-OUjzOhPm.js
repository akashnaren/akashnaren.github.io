(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=window.visualViewport?.height;return e&&e>0?e:window.innerHeight}function t(){let t=document.documentElement,n=document.querySelector(`.page`),r=document.querySelector(`.stage`);if(!n||!r)return;t.style.setProperty(`--fit`,`1`);let i=Math.min(n.clientHeight,e()),a=Math.max(140,Math.round(i*.28)),o=r.scrollHeight;if(o+a<=i)return;let s=Math.max(.68,(i-a)/o);t.style.setProperty(`--fit`,s.toFixed(3))}var n=`Akash Premkumar`,r=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I work on diagnostics, telemetry, and data analysis for service engineering.`],[`Previously I worked on vehicle engineering: bill of materials, full stack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`optimus`},`, and `,{href:`https://grok.com`,label:`grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],i=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],a=[`/fleet/01.png`,`/fleet/02.png`,`/fleet/03.png`,`/fleet/04.png`,`/fleet/05.png`,`/fleet/06.png`,`/fleet/07.png`,`/fleet/08.png`,`/fleet/09.png`],o=`nine`,s=`nine grok bots, more coming.`,c=[`this site is managed by `,{href:`https://x.ai/bot`,label:`grok bot`},`.`],l={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},u={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' email`};function d(e){return typeof e==`object`}function f(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function p(e){return d(e)?`<a href="${f(e.href)}">${f(e.label)}</a>`:f(e)}function m(e){return`<p>${e.map(p).join(``)}</p>`}function h(e,t,n){return`<img class="${n}" src="${f(e)}" alt="" width="${String(t)}" height="${String(t)}" decoding="async" />`}function g(){return`<span class="grok-bot-wrap" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="20" height="20" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="15" height="15" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`}function _(){return`<p class="managed">${g()}<span class="managed-copy">${c.map(p).join(``)}</span></p>`}function v(){return`<div class="contact">
          <p class="contact-marks">${i.map(e=>`<a class="contact-link" href="${f(e.href)}"><img class="contact-mark" src="${f(e.mark)}" alt="" width="14" height="14" decoding="async" /><span>${f(e.label)}</span></a>`).join(``)}</p>
          <p class="human-mail"><span class="mail-label">${f(l.label)}</span><a class="mail-address" href="${f(l.href)}">${f(l.address)}</a></p>
        </div>`}function y(){return`<p class="fleet" aria-hidden="true">${a.map(e=>h(e,24,`fleet-mark`)).join(``)}</p>
          <p class="fleet-line">${f(s)}</p>`}function b(){return`<p class="inbox"><span class="inbox-label">${f(u.label)}</span><a class="inbox-address" href="${f(u.href)}">${f(u.address)}</a></p>`}function x(){return`<p class="fact">${f(o)}</p>`}function S(){let e=r.map(m).join(`
          `);return`<div class="page" id="holder">
      <div class="stage">
      <main class="him">
        <div class="bio">
          <header>
            <h1>${f(n)}<span class="scope" aria-hidden="true"></span></h1>
          </header>
          ${e}
        </div>
        ${v()}
      </main>
      <aside class="panel">
        ${x()}
        ${y()}
        ${_()}
        ${b()}
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
    </div>`}var C=document.getElementById(`holder`);C&&!C.querySelector(`.sky`)&&(C.outerHTML=S()),t(),window.addEventListener(`resize`,t),window.visualViewport?.addEventListener(`resize`,t);