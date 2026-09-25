(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/research/agent-native-ui/paper.pdf`,t=`Akash Premkumar`,n=`Worked at Tesla in Redwood City on vehicle service systems: diagnostics, telemetry, and data analysis. Previously vehicle engineering: Robotaxi, Optimus, and Grok. CS and Math, UC San Diego.`,r=`https://akashnaren.github.io/`,i=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.`],[`Previously I worked on vehicle engineering: bill of materials, fullstack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`Robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`Optimus`},`, and `,{href:`https://grok.com`,label:`Grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],a=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],o=`grok bot collection`,s=`grok bot collection`,c=`https://akashnaren.github.io/bot`,l=`Ten grok bots. A quiet collection.`,u=[{id:`profile-engineer`,name:`profile engineer`,face:`/fleet/01.png`,blurb:`i keep his profiles and ship this site.`},{id:`software-engineer`,name:`software engineer`,face:`/fleet/02.png`,blurb:`quiet diffs. a clean compile.`},{id:`research-engineer`,name:`research engineer`,face:`/fleet/03.png`,blurb:`i read the papers that matter.`},{id:`chief-executive-officer`,name:`chief executive officer`,face:`/fleet/04.png`,blurb:`i keep the work moving.`},{id:`secretary`,name:`secretary`,face:`/fleet/05.png`,blurb:`i keep the notes in order.`},{id:`chief-financial-officer`,name:`chief financial officer`,face:`/fleet/06.png`,blurb:`i stay even.`},{id:`finance-engineer`,name:`finance engineer`,face:`/fleet/07.png`,blurb:`i keep the sheets in order.`},{id:`product-engineer`,name:`product engineer`,face:`/fleet/08.png`,blurb:`i file what ships.`},{id:`chief-technical-officer`,name:`chief technical officer`,face:`/fleet/09.png`,blurb:`i build grok bots like these.`},{id:`integration-engineer`,name:`integration engineer`,face:`/fleet/10.png`,blurb:`i wrap apis into quiet plugins.`}],d=`/research`,f=`Research`,p=`https://akashnaren.github.io/research`,m=`Structured views for agent interfaces, ARC-AGI and hallucination, and entity investigation across fragmented records.`,h=`Research`,g=[{id:`agent-native-ui-protocols`,title:`Structured Views for Agent-Native UIs`,figure:`protocol`,abstract:`Agents still drive apps through screenshots or a flat accessibility tree. I am comparing those to a structured view the agent can read.`,href:`/research/agent-native-ui/paper.pdf`},{id:`arc-agi-vs-hallucination-risk`,title:`ARC-AGI and Hallucination Risk`,figure:`axes`,abstract:`ARC-AGI-1 measures puzzle solving. I am checking whether those scores track how often a model hallucinates.`},{id:`entity-investigation`,title:`Entity Investigation Across Fragmented Records`,figure:`gaps`,abstract:`I am looking at how to reason over fragmented records and link events to the right address over time.`,href:`https://temporal-buddies5.vercel.app/`,external:!0}],_=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],v={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},y={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' inbox`,tip:`the agents' inbox — not his personal Gmail`};function b(e){return typeof e==`object`}function x(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}function S(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/?$/.test(t)||/\/research\/index\.html$/.test(t)}function C(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/agent-native-ui\/?$/.test(t)||/\/research\/agent-native-ui\/index\.html$/.test(t)}var w={title:t,description:n,url:r},T={title:s,description:l,url:c},E={title:f,description:m,url:p};function D(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function O(){return`<svg class="ext" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false"><path d="M3.4 2.4h6.2v6.2M9.3 2.7 2.7 9.3" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>`}function k(e){let t=e.split(/[?#]/,1)[0]??``;return t===`/bot`||t===`/bot/`||t===`/research`||t===`/research/`}function A(e){if(b(e)){let t=k(e.href)?O():``;return`<a href="${D(e.href)}">${D(e.label)}${t}</a>`}return D(e)}function j(e){return`<p>${e.map(A).join(``)}</p>`}function M(){return`<svg class="grok-bot-mark" viewBox="0 0 32 32" width="15" height="15" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></svg>`}function N(e=_){return`<p class="managed">${M()}<span class="managed-copy">${e.map(A).join(``)}</span></p>`}function P(e){let t=e.mark?`<img class="contact-mark" src="${D(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${D(e.href)}">${t}<span>${D(e.label)}</span></a>`}function F(){return`<div class="contact">
        <p class="contact-marks">${a.map(P).join(``)}</p>
        <p class="human-mail"><span class="mail-label">${D(v.label)}</span><a class="mail-address" href="${D(v.href)}">${D(v.address)}</a></p>
      </div>`}function I(e=y.label,t=``){let n=t?` aria-describedby="inbox-tip"`:``,r=t?` title="${D(t)}"`:``,i=t?`<span id="inbox-tip" class="inbox-tip" role="tooltip">${D(t)}</span>`:``;return`<p class="inbox${t?` has-tip`:``}"><span class="inbox-label">${D(e)}</span><a class="inbox-address" href="${D(y.href)}"${n}${r}>${D(y.address)}</a>${i}</p>`}function L(){let e=i.map(j).join(`
        `);return`<div class="page" id="holder">
    <main class="stage">
      <header>
        <h1>${D(t)}</h1>
      </header>
      <div class="bio">
        ${e}
      </div>
      ${F()}
      <p class="page-link"><a href="${D(d)}">${D(h)}${O()}</a></p>
      ${N()}
      ${I()}
    </main>
  </div>`}function R(e){return`<li class="row" data-seat="${D(e.id)}" data-name="${D(e.name)}"><img class="row-face" src="${D(e.face)}" alt="" width="36" height="36" decoding="async" /><span class="row-id"><span class="row-name">${D(e.name)}</span><span class="row-blurb">${D(e.blurb)}</span></span></li>`}function z(){let e=u.map(R).join(``);return`<div class="page profile" id="holder">
    <main class="stage">
      <header class="mast">
        <h1>${D(o)}</h1>
      </header>
      <ul class="roster">${e}</ul>
      <footer class="foot">
        ${I(y.label,y.tip)}
        ${N()}
      </footer>
    </main>
  </div>`}function B(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M16 18v72" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
          <rect x="24" y="16" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.9"/>
          <rect x="28" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="59" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="90" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="24" y="43" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.34)" stroke-width="0.8"/>
          <path d="M44 52.2l16 6.2M44 51.4l36-.2M84 52.2l16 6.2" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.7"/>
          <rect x="24" y="70" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.24)" stroke-width="0.75"/>
        </svg>`}function V(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M26 86V22M26 86h96" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.8"/>
          <circle cx="46" cy="72" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
          <circle cx="74" cy="48" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
          <circle cx="104" cy="60" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
        </svg>`}function H(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M16 90h108" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
          <circle cx="30" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <circle cx="58" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <circle cx="114" cy="68" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <path d="M33.2 40h21.6" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.85"/>
          <path d="M61.2 40h49.6" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.85" stroke-dasharray="2.4 2.2"/>
        </svg>`}function U(e){return e===`protocol`?B():e===`axes`?V():H()}function W(e){return e.href?e.external===!0||/\.pdf(?:$|[?#])/i.test(e.href)||/^https?:\/\//i.test(e.href):!1}function G(e){let t=D(e.title),n=e.href?`<h2><a href="${D(e.href)}"${e.external?` rel="noopener noreferrer"`:``}>${t}${W(e)?O():``}</a></h2>`:`<h2>${t}</h2>`;return`<article class="thread" data-thread="${D(e.id)}">
        ${U(e.figure)}
        <div class="thread-copy">
          ${n}
          <p>${D(e.abstract)}</p>
        </div>
      </article>`}function K(){return`<div class="page research" id="holder">
    <main class="stage">
      <header class="mast">
        <h1>${D(f)}</h1>
      </header>
      <div class="threads">${g.map(G).join(``)}</div>
      <footer class="foot">
        ${N()}
      </footer>
    </main>
  </div>`}function q(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description],[`meta[name="theme-color"]`,e.themeColor??`#0a0a0a`]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url);let n=document.querySelector(`meta[name="robots"]`);if(e.robots){let t=n??document.createElement(`meta`);t.setAttribute(`name`,`robots`),t.setAttribute(`content`,e.robots),n||document.head.appendChild(t);return}n?.remove()}function J(){if(C(location.pathname)){location.replace(e);return}let t=x(location.pathname),n=S(location.pathname),r=document.getElementById(`holder`);if(!r)return;let i=r.classList.contains(`profile`),a=r.classList.contains(`research`),o=!!r.querySelector(`.bio`);t&&!i?r.outerHTML=z():n&&!a?r.outerHTML=K():!t&&!n&&!o&&(r.outerHTML=L()),q(t?T:n?E:w)}J();