(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`Akash Premkumar`,t=`Akash Premkumar. Tesla vehicle service and vehicle engineering, Raytheon avionics networking, NASA L’SPACE, and the Multiscale Flow Physics Lab at UC San Diego.`,n=`https://akashnaren.github.io/`,r=`#fffff8`,i=`Work`,a=[[{href:`https://www.tesla.com/`,label:`Tesla`},` — `,{href:`https://www.tesla.com/careers/vehicle-software`,label:`Vehicle Service`}],[{href:`https://www.tesla.com/`,label:`Tesla`},` — `,{href:`https://www.tesla.com/SI`,label:`Vehicle Engineering`}],[{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` — `,{href:`https://www.aim-online.com/products-overview/tutorials/afdx-arinc664p7-tutorial/`,label:`Avionics Networking Test Suite`}],[{href:`https://www.lspace.asu.edu/`,label:`NASA L’SPACE`},` — `,{href:`https://drive.google.com/drive/folders/1vi1vVKHAKptMqXB0_mmw7QkfCC6d8Wc_?usp=sharing`,label:`Proposals, Preliminary Design Review`}]],o=`Profiles`,s=`Mail`,c=`Research`,l=`Projects`,u=[[{href:`https://asanchez.ucsd.edu/`,label:`Multiscale Flow Physics Lab, UC San Diego`},` — `,{href:`/fire-whirls-poster.jpg`,label:`Research`}]],d=[{href:`https://github.com/akashnaren`,label:`GitHub`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`LinkedIn`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`X`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`Cursor`,mark:`/marks/cursor.svg`},{href:`https://huggingface.co/akashnaren`,label:`Hugging Face`,mark:`/marks/huggingface.svg`},{href:`https://www.kaggle.com/akashpnaren`,label:`Kaggle`,mark:`/marks/kaggle.svg`}],f=[[{href:`https://meetlavalamp.com`,label:`LavaLamp`}],[{href:`https://rpi-pi4.taild6c87d.ts.net/`,label:`OpenPi`}]],p={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`},m=`this site is managed by grok bot`,h=`https://x.ai/bot`;function g(e){return typeof e==`object`}var _={title:e,description:t,url:n,themeColor:r};function v(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function y(){return`<svg class="ext" viewBox="0 0 12 12" width="12" height="12" aria-hidden="true" focusable="false"><path d="M3.4 2.4h6.2v6.2M9.3 2.7 2.7 9.3" fill="none" stroke="currentColor" stroke-width="1.15"/></svg>`}function b(e){let t=e.split(/[?#]/,1)[0]??``;return t===`/research`||t===`/research/`}function x(e){return e.startsWith(`#`)||b(e)}function S(e){let t=e.split(/\s+/).filter(Boolean);for(let e of[`noopener`,`noreferrer`])t.includes(e)||t.push(e);return t.join(` `)}function C(e,t=``){return x(e)?t?` rel="${v(t)}"`:``:` target="_blank" rel="${v(S(t))}"`}function w(e){if(g(e)){let t=b(e.href)?y():``;return`<a href="${v(e.href)}"${C(e.href)}>${v(e.label)}${t}</a>`}return v(e)}function T(e){return e.map(e=>g(e)?e.label:e).join(``)}function E(e){let[t,...n]=e;return t&&g(t)?{label:[t],detail:n}:{label:[...e],detail:[]}}function D(e){return g(e)?P(e.href,e.label):v(e)}function O(e,t){let n=` title="${v(T(e))}"`;if(!t)return`<li${n}>${e.map(w).join(``)}</li>`;let{label:r,detail:i}=E(e),a=i.length?`<span class="entry-detail">${i.map(D).join(``)}</span>`:``;return`<li${n}><span class="entry-name">${r.map(w).join(``)}</span>${a}</li>`}function k(e,t,n,r=!1){let i=n.map(e=>O(e,r)).join(`
          `),a=r?`entries ledger`:`entries`;return`<section class="section" aria-labelledby="${v(e)}">
        <h2 id="${v(e)}">${v(t)}</h2>
        <ul class="${a}">
          ${i}
        </ul>
      </section>`}function A(e){let t=`<img class="contact-mark" src="${v(e.mark)}" alt="" width="14" height="14" decoding="async" />`;return`<a class="contact-link" href="${v(e.href)}"${C(e.href)}>${t}<span>${v(e.label)}</span></a>`}function j(){let e=d.map(e=>`<li>${A(e)}</li>`).join(``);return`<section class="section" aria-labelledby="profiles">
        <h2 id="profiles">${v(o)}</h2>
        <ul class="profiles">${e}</ul>
      </section>`}function M(){return`<section class="section" aria-labelledby="mail">
        <h2 id="mail">${v(s)}</h2>
        <ul class="mail-row">
          <li><a class="mail-address" href="${v(p.href)}"${C(p.href)}>${v(p.address)}</a></li>
        </ul>
      </section>`}function N(){return`<p class="site-credit"><a href="${v(h)}"${C(h)}>${v(m)}</a></p>`}function P(e,t){let n=/^https?:\/\//i.test(e),r=n?`noopener noreferrer`:``,i=n||/\.(?:pdf|jpe?g)(?:$|[?#])/i.test(e)?y():``;return`<a href="${v(e)}"${C(e,r)}>${v(t)}${i}</a>`}function F(e,t,n){return`<section class="section" aria-labelledby="${v(e)}">
        <h2 id="${v(e)}">${v(t)}</h2>
        <ul class="entries">
          ${n}
        </ul>
      </section>`}function I(){return F(`research`,c,u.map(e=>{let t=e.findIndex(g);if(t<0)return O(e,!1);let n=e[t];if(!g(n))return O(e,!1);let r=e.slice(t+1),i=r.length?`<span class="entry-detail">${r.map(D).join(``)}</span>`:``;return`<li>${w(n)}${i}</li>`}).join(`
          `))}function L(){return k(`projects`,l,f,!0)}function R(){return`<div class="page home" id="holder">
    <div class="layout">
      <main class="stage">
        <header>
          <h1>${v(e)}</h1>
        </header>
        ${k(`work`,i,a,!0)}
        ${I()}
        ${L()}
        ${j()}
        ${M()}
        ${N()}
      </main>
    </div>
  </div>`}function z(e){document.title=e.title;let t=[[`meta[name="description"]`,e.description],[`meta[property="og:title"]`,e.title],[`meta[property="og:description"]`,e.description],[`meta[property="og:url"]`,e.url],[`meta[name="twitter:title"]`,e.title],[`meta[name="twitter:description"]`,e.description],[`meta[name="theme-color"]`,e.themeColor??`#fffff8`]];for(let[e,n]of t)document.querySelector(e)?.setAttribute(`content`,n);document.querySelector(`link[rel="canonical"]`)?.setAttribute(`href`,e.url)}function B(){let e=document.getElementById(`holder`);e&&(e.classList.contains(`home`)||(e.outerHTML=R()),z(_))}B();