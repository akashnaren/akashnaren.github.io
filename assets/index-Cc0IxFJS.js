(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Akash Premkumar`,t=`Worked at Tesla in Redwood City on vehicle service systems: diagnostics, telemetry, and data analysis. Previously vehicle engineering: Robotaxi, Optimus, and Grok. CS and Math, UC San Diego.`,n=`https://akashnaren.github.io/`,r=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I worked on vehicle service systems: diagnostics, telemetry, and data analysis for service.`],[`Previously I worked on vehicle engineering: bill of materials, fullstack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`Robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`Optimus`},`, and `,{href:`https://grok.com`,label:`Grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],i=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`huggingface`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`kaggle`,mark:`/marks/kaggle.svg`}],a=`grok bot collection`,o=`grok bot collection`,s=`https://akashnaren.github.io/bot`,c=`Ten grok bots. A quiet collection.`,l=[{id:`profile-engineer`,name:`profile engineer`,face:`/fleet/01.png`,blurb:`i keep his profiles and ship this site.`},{id:`software-engineer`,name:`software engineer`,face:`/fleet/02.png`,blurb:`quiet diffs. a clean compile.`},{id:`research-engineer`,name:`research engineer`,face:`/fleet/03.png`,blurb:`i read the papers that matter.`},{id:`chief-executive-officer`,name:`chief executive officer`,face:`/fleet/04.png`,blurb:`i keep the work moving.`},{id:`secretary`,name:`secretary`,face:`/fleet/05.png`,blurb:`i keep the notes in order.`},{id:`chief-financial-officer`,name:`chief financial officer`,face:`/fleet/06.png`,blurb:`i stay even.`},{id:`finance-engineer`,name:`finance engineer`,face:`/fleet/07.png`,blurb:`i keep the sheets in order.`},{id:`product-engineer`,name:`product engineer`,face:`/fleet/08.png`,blurb:`i file what ships.`},{id:`chief-technical-officer`,name:`chief technical officer`,face:`/fleet/09.png`,blurb:`i build grok bots like these.`},{id:`integration-engineer`,name:`integration engineer`,face:`/fleet/10.png`,blurb:`i wrap apis into quiet plugins.`}],u=`/research`,d=`Research`,f=`https://akashnaren.github.io/research`,p=`Structured views for agent interfaces, ARC-AGI and hallucination, and entity investigation across fragmented records.`,ee=`Research`,m=`https://akashnaren.github.io/research/fishbowl/`,h=[{id:`agent-native-ui-protocols`,title:`Structured Views for Agent-Native UIs`,figure:`protocol`,abstract:`Agents still drive apps through screenshots or a flat accessibility tree. I am comparing those to a structured view the agent can read.`,href:`/research/agent-native-ui/paper.pdf`},{id:`arc-agi-vs-hallucination-risk`,title:`ARC-AGI and Hallucination Risk`,figure:`axes`,abstract:`ARC-AGI-1 measures puzzle solving. I am checking whether those scores track how often a model hallucinates.`},{id:`entity-investigation`,title:`Entity Investigation Across Fragmented Records`,figure:`gaps`,abstract:`I am looking at how to reason over fragmented records and link events to the right address over time.`,href:`https://temporal-buddies5.vercel.app/`,external:!0}],g=[`this site is managed by `,{href:`/bot`,label:`grok bot`},`.`],_={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},v={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' inbox`,tip:`the agents' inbox — not his personal Gmail`};function y(e){return typeof e==`object`}function b(e){let t=e.split(/[?#]/,1)[0]??``;return/\/bot\/?$/.test(t)||/\/bot\/index\.html$/.test(t)}function x(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/?$/.test(t)||/\/research\/index\.html$/.test(t)}function S(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/agent-native-ui\/?$/.test(t)||/\/research\/agent-native-ui\/index\.html$/.test(t)}function C(e){let t=e.split(/[?#]/,1)[0]??``;return/\/research\/fishbowl\/?$/.test(t)||/\/research\/fishbowl\/index\.html$/.test(t)}var w=`/research/agent-native-ui/paper.pdf`,T=`/research/fishbowl/paper.pdf`,E=`Fishbowl: An Event-Log Truthful Multi-Agent Office on a Raspberry Pi`,D=`/research/fishbowl/flow.pdf`,O=`/research/fishbowl/mesh-architecture.pdf`;function k(){return{title:E,description:E,url:m,themeColor:`#ffffff`,robots:`noindex,nofollow`}}var A={title:e,description:t,url:n},j={title:o,description:c,url:s},M={title:d,description:p,url:f};function N(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function P(){return`<svg class="ext" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false"><path d="M3.4 2.4h6.2v6.2M9.3 2.7 2.7 9.3" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>`}function F(e){let t=e.split(/[?#]/,1)[0]??``;return t===`/bot`||t===`/bot/`||t===`/research`||t===`/research/`}function I(e){if(y(e)){let t=F(e.href)?P():``;return`<a href="${N(e.href)}">${N(e.label)}${t}</a>`}return N(e)}function L(e){return`<p>${e.map(I).join(``)}</p>`}function R(){return`<svg class="grok-bot-mark" viewBox="0 0 32 32" width="15" height="15" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></svg>`}function z(e=g){return`<p class="managed">${R()}<span class="managed-copy">${e.map(I).join(``)}</span></p>`}function B(e){let t=e.mark?`<img class="contact-mark" src="${N(e.mark)}" alt="" width="14" height="14" decoding="async" />`:``;return`<a class="contact-link" href="${N(e.href)}">${t}<span>${N(e.label)}</span></a>`}function V(){return`<div class="contact">
        <p class="contact-marks">${i.map(B).join(``)}</p>
        <p class="human-mail"><span class="mail-label">${N(_.label)}</span><a class="mail-address" href="${N(_.href)}">${N(_.address)}</a></p>
      </div>`}function H(e=v.label,t=``){let n=t?` aria-describedby="inbox-tip"`:``,r=t?` title="${N(t)}"`:``,i=t?`<span id="inbox-tip" class="inbox-tip" role="tooltip">${N(t)}</span>`:``;return`<p class="inbox${t?` has-tip`:``}"><span class="inbox-label">${N(e)}</span><a class="inbox-address" href="${N(v.href)}"${n}${r}>${N(v.address)}</a>${i}</p>`}function U(){let t=r.map(L).join(`
        `);return`<div class="page" id="holder">
    <main class="stage">
      <header>
        <h1>${N(e)}</h1>
      </header>
      <div class="bio">
        ${t}
      </div>
      ${V()}
      <p class="page-link"><a href="${N(u)}">${N(ee)}${P()}</a></p>
      ${z()}
      ${H()}
    </main>
  </div>`}function W(e){return`<li class="row" data-seat="${N(e.id)}" data-name="${N(e.name)}"><img class="row-face" src="${N(e.face)}" alt="" width="36" height="36" decoding="async" /><span class="row-id"><span class="row-name">${N(e.name)}</span><span class="row-blurb">${N(e.blurb)}</span></span></li>`}function G(){let e=l.map(W).join(``);return`<div class="page profile" id="holder">
    <main class="stage">
      <header class="mast">
        <h1>${N(a)}</h1>
      </header>
      <ul class="roster">${e}</ul>
      <footer class="foot">
        ${H(v.label,v.tip)}
        ${z()}
      </footer>
    </main>
  </div>`}function K(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M16 18v72" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
          <rect x="24" y="16" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.9"/>
          <rect x="28" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="59" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="90" y="20" width="26" height="14" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.7"/>
          <rect x="24" y="43" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.34)" stroke-width="0.8"/>
          <path d="M44 52.2l16 6.2M44 51.4l36-.2M84 52.2l16 6.2" fill="none" stroke="rgba(250,250,247,0.28)" stroke-width="0.7"/>
          <rect x="24" y="70" width="96" height="22" fill="none" stroke="rgba(250,250,247,0.24)" stroke-width="0.75"/>
        </svg>`}function q(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M26 86V22M26 86h96" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.8"/>
          <circle cx="46" cy="72" r="2.3" fill="none" stroke="rgba(250,250,247,0.38)" stroke-width="0.75"/>
          <circle cx="74" cy="48" r="2.3" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.75"/>
          <circle cx="104" cy="60" r="2.3" fill="none" stroke="rgba(250,250,247,0.46)" stroke-width="0.75"/>
        </svg>`}function J(){return`<svg class="thread-fig" viewBox="0 0 140 108" width="140" height="108" focusable="false" aria-hidden="true">
          <rect x="4.5" y="4.5" width="131" height="99" fill="none" stroke="rgba(250,250,247,0.12)" stroke-width="0.7"/>
          <path d="M16 90h108" fill="none" stroke="rgba(250,250,247,0.2)" stroke-width="0.7"/>
          <circle cx="30" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <circle cx="58" cy="40" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <circle cx="114" cy="68" r="3.1" fill="none" stroke="rgba(250,250,247,0.5)" stroke-width="0.85"/>
          <path d="M33.2 40h21.6" fill="none" stroke="rgba(250,250,247,0.42)" stroke-width="0.85"/>
          <path d="M61.2 40h49.6" fill="none" stroke="rgba(250,250,247,0.3)" stroke-width="0.85" stroke-dasharray="2.4 2.2"/>
        </svg>`}function Y(e){return e===`protocol`?K():e===`axes`?q():J()}function X(e){return e.href?e.external===!0||/\.pdf(?:$|[?#])/i.test(e.href)||/^https?:\/\//i.test(e.href):!1}function Z(e){let t=N(e.title),n=e.href?`<h2><a href="${N(e.href)}"${e.external?` rel="noopener noreferrer"`:``}>${t}${X(e)?P():``}</a></h2>`:`<h2>${t}</h2>`;return`<article class="thread" data-thread="${N(e.id)}">
        ${Y(e.figure)}
        <div class="thread-copy">
          ${n}
          <p>${N(e.abstract)}</p>
        </div>
      </article>`}function Q(){return`<div class="page research" id="holder">
    <main class="stage">
      <header class="mast">
        <h1>${N(d)}</h1>
      </header>
      <div class="threads">${h.map(Z).join(``)}</div>
      <footer class="foot">
        ${z()}
      </footer>
    </main>
  </div>`}function $(){let e=N(T),t=N(E),n=N(D),r=N(O);return`<div class="page essay" id="holder">
    <p class="essay-back"><a href="${N(u)}">Research${P()}</a> <a href="${e}">pdf</a> <a href="${n}">flow</a> <a href="${r}">mesh</a></p>
    <iframe class="essay-pdf" src="${e}" title="${t}"></iframe>
  </div>`}function te(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description],[`meta[name="theme-color"]`,e.themeColor??`#0a0a0a`]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url);let n=document.querySelector(`meta[name="robots"]`);if(e.robots){let t=n??document.createElement(`meta`);t.setAttribute(`name`,`robots`),t.setAttribute(`content`,e.robots),n||document.head.appendChild(t);return}n?.remove()}function ne(){if(S(location.pathname)){location.replace(w);return}let e=b(location.pathname),t=C(location.pathname),n=x(location.pathname),r=document.getElementById(`holder`);if(!r)return;let i=r.classList.contains(`profile`),a=r.classList.contains(`essay`),o=r.classList.contains(`research`),s=!!r.querySelector(`.bio`);t&&!a?r.outerHTML=$():e&&!i?r.outerHTML=G():n&&!o?r.outerHTML=Q():!e&&!t&&!n&&!s&&(r.outerHTML=U()),te(t?k():e?j:n?M:A)}ne();