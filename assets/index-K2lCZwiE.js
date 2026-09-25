(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/research/agent-native-ui/paper.pdf`,t=`Akash Premkumar`,n=`Worked at Tesla in Redwood City on vehicle service systems: diagnostics, telemetry, and data analysis. Previously vehicle engineering: Robotaxi, Optimus, and Grok. CS and Math, UC San Diego.`,r=`https://akashnaren.github.io/`,i=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.`],[`Previously I worked on vehicle engineering: bill of materials, fullstack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`Robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`Optimus`},`, and `,{href:`https://grok.com`,label:`Grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],a=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],o=`grok bot collection`,s=`grok bot collection`,c=`https://akashnaren.github.io/bot`,l=`Ten grok bots. A quiet collection.`,u=[{id:`profile-engineer`,name:`profile engineer`,face:`/fleet/01.png`,blurb:`i keep his profiles and ship this site.`},{id:`software-engineer`,name:`software engineer`,face:`/fleet/02.png`,blurb:`quiet diffs. a clean compile.`},{id:`research-engineer`,name:`research engineer`,face:`/fleet/03.png`,blurb:`i read the papers that matter.`},{id:`chief-executive-officer`,name:`chief executive officer`,face:`/fleet/04.png`,blurb:`i keep the work moving.`},{id:`secretary`,name:`secretary`,face:`/fleet/05.png`,blurb:`i keep the notes in order.`},{id:`chief-financial-officer`,name:`chief financial officer`,face:`/fleet/06.png`,blurb:`i stay even.`},{id:`finance-engineer`,name:`finance engineer`,face:`/fleet/07.png`,blurb:`i keep the sheets in order.`},{id:`product-engineer`,name:`product engineer`,face:`/fleet/08.png`,blurb:`i file what ships.`},{id:`chief-technical-officer`,name:`chief technical officer`,face:`/fleet/09.png`,blurb:`i build grok bots like these.`},{id:`integration-engineer`,name:`integration engineer`,face:`/fleet/10.png`,blurb:`i wrap apis into quiet plugins.`}],d=`/research`,f=`Research`,p=`https://akashnaren.github.io/research`,m=`Local language-model chat on a Raspberry Pi mesh, structured views for agent interfaces, ARC-AGI and hallucination, and entity investigation across fragmented records.`,h=`Research`,g=`/research/pi-0.2-high/paper.pdf`,_=[{id:`pi-0-2-high`,title:`Raspberry Pi Inference Mesh`,figure:`mesh`,abstract:`I am running local language-model chat on a Raspberry Pi mesh, behind one OpenAI-style route.`,href:g},{id:`agent-native-ui-protocols`,title:`Structured Views for Agent-Native UIs`,figure:`protocol`,abstract:`Agents still drive apps through screenshots or a flat accessibility tree. I am comparing those to a structured view the agent can read.`,href:`/research/agent-native-ui/paper.pdf`},{id:`arc-agi-vs-hallucination-risk`,title:`ARC-AGI and Hallucination Risk`,figure:`axes`,abstract:`ARC-AGI-1 measures puzzle solving. I am checking whether those scores track how often a model hallucinates.`},{id:`entity-investigation`,title:`Entity Investigation Across Fragmented Records`,figure:`gaps`,abstract:`I am looking at how to reason over fragmented records and link events to the right address over time.`,href:`https://temporal-buddies5.vercel.app/`,external:!0}],v=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],y={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},b={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' inbox`,tip:`the agents' inbox — not his personal Gmail`};function x(e){return typeof e==`object`}function S(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}function C(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/?$/.test(t)||/\/research\/index\.html$/.test(t)}function w(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/pi-0\.2-high\/?$/.test(t)||/\/research\/pi-0\.2-high\/index\.html$/.test(t)}function T(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/agent-native-ui\/?$/.test(t)||/\/research\/agent-native-ui\/index\.html$/.test(t)}var E={title:t,description:n,url:r},D={title:s,description:l,url:c},O={title:f,description:m,url:p};function k(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function A(){return`<svg class="ext" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false"><path d="M3.4 2.4h6.2v6.2M9.3 2.7 2.7 9.3" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>`}function j(e){let t=e.split(/[?#]/,1)[0]??``;return t===`/bot`||t===`/bot/`||t===`/research`||t===`/research/`}function M(e){if(x(e)){let t=j(e.href)?A():``;return`<a href="${k(e.href)}">${k(e.label)}${t}</a>`}return k(e)}function N(e){return`<p>${e.map(M).join(``)}</p>`}function P(){return`<svg class="grok-bot-mark" viewBox="0 0 32 32" width="15" height="15" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></svg>`}function F(e=v){return`<p class="managed">${P()}<span class="managed-copy">${e.map(M).join(``)}</span></p>`}function I(e){let t=e.mark?`<img class="contact-mark" src="${k(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${k(e.href)}">${t}<span>${k(e.label)}</span></a>`}function L(){return`<div class="contact">
        <p class="contact-marks">${a.map(I).join(``)}</p>
        <p class="human-mail"><span class="mail-label">${k(y.label)}</span><a class="mail-address" href="${k(y.href)}">${k(y.address)}</a></p>
      </div>`}function R(e=b.label,t=``){let n=t?` aria-describedby="inbox-tip"`:``,r=t?` title="${k(t)}"`:``,i=t?`<span id="inbox-tip" class="inbox-tip" role="tooltip">${k(t)}</span>`:``;return`<p class="inbox${t?` has-tip`:``}"><span class="inbox-label">${k(e)}</span><a class="inbox-address" href="${k(b.href)}"${n}${r}>${k(b.address)}</a>${i}</p>`}function z(){let e=i.map(N).join(`
        `);return`<div class="page" id="holder">
    <main class="stage">
      <header>
        <h1>${k(t)}</h1>
      </header>
      <div class="bio">
        ${e}
      </div>
      ${L()}
      <p class="page-link"><a href="${k(d)}">${k(h)}${A()}</a></p>
      ${F()}
      ${R()}
    </main>
  </div>`}function B(e){return`<li class="row" data-seat="${k(e.id)}" data-name="${k(e.name)}"><img class="row-face" src="${k(e.face)}" alt="" width="36" height="36" decoding="async" /><span class="row-id"><span class="row-name">${k(e.name)}</span><span class="row-blurb">${k(e.blurb)}</span></span></li>`}function V(){let e=u.map(B).join(``);return`<div class="page profile" id="holder">
    <main class="stage">
      <header class="mast">
        <h1>${k(o)}</h1>
      </header>
      <ul class="roster">${e}</ul>
      <footer class="foot">
        ${R(b.label,b.tip)}
        ${F()}
      </footer>
    </main>
  </div>`}function H(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M70 20v68" fill="none" stroke="rgba(250,250,247,0.22)" stroke-width="0.7"/>
          <rect x="38" y="16" width="64" height="16" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.9"/>
          <rect x="38" y="46" width="64" height="16" fill="none" stroke="rgba(250,250,247,0.36)" stroke-width="0.8"/>
          <rect x="38" y="76" width="64" height="16" fill="none" stroke="rgba(250,250,247,0.26)" stroke-width="0.75"/>
        </svg>`}function U(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M16 18v72" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
          <rect x="24" y="16" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.9"/>
          <rect x="28" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="59" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="90" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="24" y="43" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.34)" stroke-width="0.8"/>
          <path d="M44 52.2l16 6.2M44 51.4l36-.2M84 52.2l16 6.2" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.7"/>
          <rect x="24" y="70" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.24)" stroke-width="0.75"/>
        </svg>`}function W(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M26 86V22M26 86h96" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.8"/>
          <circle cx="46" cy="72" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
          <circle cx="74" cy="48" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
          <circle cx="104" cy="60" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
        </svg>`}function G(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M16 90h108" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
          <circle cx="30" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <circle cx="58" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <circle cx="114" cy="68" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <path d="M33.2 40h21.6" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.85"/>
          <path d="M61.2 40h49.6" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.85" stroke-dasharray="2.4 2.2"/>
        </svg>`}function K(e){return e===`mesh`?H():e===`protocol`?U():e===`axes`?W():G()}function q(e){return e.href?e.external===!0||/\.pdf(?:$|[?#])/i.test(e.href)||/^https?:\/\//i.test(e.href):!1}function J(e){let t=k(e.title),n=e.href?`<h2><a href="${k(e.href)}"${e.external?` rel="noopener noreferrer"`:``}>${t}${q(e)?A():``}</a></h2>`:`<h2>${t}</h2>`;return`<article class="thread" data-thread="${k(e.id)}">
        ${K(e.figure)}
        <div class="thread-copy">
          ${n}
          <p>${k(e.abstract)}</p>
        </div>
      </article>`}function Y(){return`<div class="page research" id="holder">
    <main class="stage">
      <header class="mast">
        <h1>${k(f)}</h1>
      </header>
      <div class="threads">${_.map(J).join(``)}</div>
      <footer class="foot">
        ${F()}
      </footer>
    </main>
  </div>`}function X(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description],[`meta[name="theme-color"]`,e.themeColor??`#0a0a0a`]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url);let n=document.querySelector(`meta[name="robots"]`);if(e.robots){let t=n??document.createElement(`meta`);t.setAttribute(`name`,`robots`),t.setAttribute(`content`,e.robots),n||document.head.appendChild(t);return}n?.remove()}function Z(){if(T(location.pathname)){location.replace(e);return}if(w(location.pathname)){location.replace(g);return}let t=S(location.pathname),n=C(location.pathname),r=document.getElementById(`holder`);if(!r)return;let i=r.classList.contains(`profile`),a=r.classList.contains(`research`),o=!!r.querySelector(`.bio`);t&&!i?r.outerHTML=V():n&&!a?r.outerHTML=Y():!t&&!n&&!o&&(r.outerHTML=z()),X(t?D:n?O:E)}Z();