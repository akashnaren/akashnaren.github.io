(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Akash Premkumar`,t=`At Tesla in Redwood City. Diagnostics, telemetry, and data analysis. CS and Math, UC San Diego.`,n=`https://akashnaren.github.io/`,r=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I work on diagnostics, telemetry, and data analysis for service engineering.`],[`Previously I worked on vehicle engineering: bill of materials, full stack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`optimus`},`, and `,{href:`https://grok.com`,label:`grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],i=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],a=[`/fleet/01.png`,`/fleet/02.png`,`/fleet/03.png`,`/fleet/04.png`,`/fleet/05.png`,`/fleet/06.png`,`/fleet/07.png`,`/fleet/08.png`,`/fleet/09.png`],o=`nine`,s=`nine grok bots, more coming.`,c=`@akashpn`,l=`https://akashnaren.github.io/bot`,u=`Grok Bot profile for the fleet that manages this site.`,d=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],f=[`a `,{href:`https://x.ai/bot`,label:`grok bot`},` profile for the fleet that manages this site.`],p=[{href:`/`,label:`home`,mark:``},{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`}],m={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},h={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' email`};function g(e){return typeof e==`object`}function _(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}function v(){let e=window.visualViewport?.height;return e&&e>0?e:window.innerHeight}function y(){let e=document.documentElement,t=document.querySelector(`.page`),n=document.querySelector(`.stage`);if(!t||!n)return;e.style.setProperty(`--fit`,`1`);let r=Math.min(t.clientHeight,v()),i=t.classList.contains(`profile`)?Math.max(32,Math.round(r*.08)):Math.max(140,Math.round(r*.28)),a=n.scrollHeight;if(a+i<=r)return;let o=Math.max(.68,(r-i)/a);e.style.setProperty(`--fit`,o.toFixed(3))}var b={title:e,description:t,url:n},x={title:e,description:u,url:l};function S(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function C(e){return g(e)?`<a href="${S(e.href)}">${S(e.label)}</a>`:S(e)}function w(e){return`<p>${e.map(C).join(``)}</p>`}function T(e,t,n){return`<img class="${n}" src="${S(e)}" alt="" width="${String(t)}" height="${String(t)}" decoding="async" />`}function E(){return`<span class="grok-bot-wrap" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="20" height="20" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="14.6" fill="none" stroke="#ff6b00" stroke-width="0.7" opacity="0.22"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="15" height="15" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`}function D(){return`<p class="managed">${E()}<span class="managed-copy">${d.map(C).join(``)}</span></p>`}function O(e){let t=e.mark?`<img class="contact-mark" src="${S(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${S(e.href)}">${t}<span>${S(e.label)}</span></a>`}function k(){return`<div class="contact">
          <p class="contact-marks">${i.map(O).join(``)}</p>
          <p class="human-mail"><span class="mail-label">${S(m.label)}</span><a class="mail-address" href="${S(m.href)}">${S(m.address)}</a></p>
        </div>`}function A(){return`<p class="fleet" aria-hidden="true">${a.map(e=>T(e,24,`fleet-mark`)).join(``)}</p>
          <p class="fleet-line">${S(s)}</p>`}function j(){return`<p class="inbox"><span class="inbox-label">${S(h.label)}</span><a class="inbox-address" href="${S(h.href)}">${S(h.address)}</a></p>`}function M(){return`<p class="fact">${S(o)}</p>`}function N(){return`<p class="contact-marks profile-links">${p.map(O).join(``)}</p>`}function P(){let t=r.map(w).join(`
          `);return`<div class="page" id="holder">
      <div class="stage">
      <main class="him">
        <div class="bio">
          <header>
            <h1>${S(e)}<span class="scope" aria-hidden="true"></span></h1>
          </header>
          ${t}
        </div>
        ${k()}
      </main>
      <aside class="panel">
        ${M()}
        ${A()}
        ${D()}
        ${j()}
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
    </div>`}function F(){return`<div class="page profile" id="holder">
      <div class="stage">
      <main class="him">
        <header>
          <h1>${S(e)}<span class="scope" aria-hidden="true"></span></h1>
          <p class="handle">${S(c)}</p>
        </header>
        <p class="profile-line">${f.map(C).join(``)}</p>
        ${j()}
        ${N()}
      </main>
      <aside class="panel">
        ${M()}
        ${A()}
      </aside>
      </div>
    </div>`}function I(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url)}function L(){let e=_(location.pathname),t=document.getElementById(`holder`);if(!t)return;let n=t.classList.contains(`profile`),r=!!t.querySelector(`.sky`);e&&!n?t.outerHTML=F():!e&&!r&&(t.outerHTML=P()),I(e?x:b)}L(),y(),window.addEventListener(`resize`,y),window.visualViewport?.addEventListener(`resize`,y);