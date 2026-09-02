(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=window.visualViewport?.height;return e&&e>0?e:window.innerHeight}function t(){let t=document.documentElement,n=document.querySelector(`.page`),r=document.querySelector(`.stage`);if(!n||!r)return;t.style.setProperty(`--fit`,`1`);let i=Math.min(n.clientHeight,e()),a=r.scrollHeight;if(a<=i)return;let o=Math.max(.68,i/a);t.style.setProperty(`--fit`,o.toFixed(3))}var n=`Akash Premkumar`,r={prefix:`engineer @ `,company:{href:`https://www.tesla.com/`,label:`tesla`}},i=[[`I live in Redwood City.`],[`At `,{href:`https://www.tesla.com/`,label:`Tesla`},` I work on diagnostics, telemetry, and data analysis for service engineering.`],[`Previously I worked on vehicle engineering: bill of materials, full stack applications, `,{href:`https://www.tesla.com/robotaxi`,label:`robotaxi`},`, `,{href:`https://www.tesla.com/AI`,label:`optimus`},`, and `,{href:`https://grok.com`,label:`grok`},` integrations.`],[`I interned at `,{href:`https://www.rtx.com/raytheon`,label:`Raytheon`},` on an avionics networking test suite.`],[`I was a project engineer on NASA L’SPACE. I did `,{href:`https://asanchez.ucsd.edu/research/reactive-flows/`,label:`fire-whirl research`},` at UC San Diego, and studied CS and Math there.`]],a=[{href:`https://github.com/akashnaren`,label:`github`,mark:`/marks/github.svg`},{href:`https://www.linkedin.com/in/akash-premkumar-39826b1b7/`,label:`linkedin`,mark:`/marks/linkedin.svg`},{href:`https://x.com/akashpn`,label:`x`,mark:`/marks/x.svg`},{href:`https://cursor.com/@akashpn`,label:`cursor`,mark:`/marks/cursor.svg`}],o=[`/fleet/01.png`,`/fleet/02.png`,`/fleet/03.png`,`/fleet/04.png`,`/fleet/05.png`,`/fleet/06.png`,`/fleet/07.png`,`/fleet/08.png`,`/fleet/09.png`],s=`nine`,c=`nine grok bots, more coming.`,l=[`this site is managed by `,{href:`https://x.ai/bot`,label:`grok bot`},`.`],u={address:`akashnaren@gmail.com`,href:`mailto:akashnaren@gmail.com`,label:`email`},d={address:`apn@agentmail.to`,href:`mailto:apn@agentmail.to`,label:`bots' email`};function f(e){return typeof e==`object`}function p(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`)}function m(e){return f(e)?`<a href="${p(e.href)}">${p(e.label)}</a>`:p(e)}function h(e){return`<p>${e.map(m).join(``)}</p>`}function g(e,t,n){return`<img class="${n}" src="${p(e)}" alt="" width="${String(t)}" height="${String(t)}" decoding="async" />`}function _(){return`<span class="grok-bot-wrap" aria-hidden="true"><svg class="grok-bot-photon" viewBox="0 0 32 32" width="22" height="22" focusable="false"><circle class="grok-bot-photon-halo" cx="16" cy="16" r="15.2" fill="none" stroke="#ff6b00" stroke-width="0.85" opacity="0.34"/><circle class="grok-bot-photon-arc" cx="16" cy="16" r="15.2" fill="none" stroke="#ff6b00" stroke-width="1.35" stroke-linecap="round" stroke-dasharray="15 80" opacity="0.58"/></svg><svg class="grok-bot-mark" viewBox="0 0 32 32" width="15" height="15" focusable="false"><g class="grok-bot-body"><circle cx="16" cy="16" r="14.5" fill="#ff6b00"/><g class="grok-bot-eyes"><rect x="8.1" y="15.7" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 9.3 18.7)"/><rect x="12.5" y="17" width="2.4" height="6" rx="1.2" fill="#fff" transform="rotate(-26 13.7 20)"/></g></g></svg></span>`}function v(){return`<p class="managed">${_()}<span class="managed-copy">${l.map(m).join(``)}</span></p>`}function y(){return`<div class="contact">
          <p class="contact-marks">${a.map(e=>`<a class="contact-link" href="${p(e.href)}"><img class="contact-mark" src="${p(e.mark)}" alt="" width="14" height="14" decoding="async" /><span>${p(e.label)}</span></a>`).join(``)}</p>
          <p class="human-mail"><span class="mail-label">${p(u.label)}</span><a class="mail-address" href="${p(u.href)}">${p(u.address)}</a></p>
        </div>`}function b(){return`<p class="fleet" aria-hidden="true">${o.map(e=>g(e,22,`fleet-mark`)).join(``)}</p>
          <p class="fleet-line">${p(c)}</p>`}function x(){return`<p class="inbox"><span class="inbox-label">${p(d.label)}</span><a class="inbox-address" href="${p(d.href)}">${p(d.address)}</a></p>`}function S(){return`<p class="fact">${p(s)}</p>`}function C(){let e=i.map(h).join(`
          `);return`<div class="page" id="holder">
      <div class="well" aria-hidden="true">
        <canvas class="well-canvas"></canvas>
      </div>
      <div class="stage">
      <main class="him">
        <div class="bio">
          <header>
            <h1>${p(n)}<span class="scope" aria-hidden="true"></span></h1>
            <p class="meta">${p(r.prefix)}<a href="${p(r.company.href)}">${p(r.company.label)}</a></p>
          </header>
          ${e}
        </div>
        ${y()}
      </main>
      <aside class="panel">
        ${S()}
        ${b()}
        ${v()}
        ${x()}
      </aside>
      </div>
    </div>`}var w=[10/255,10/255,10/255];function T(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453123;return n-Math.floor(n)}function E(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function D(e,t){let n=t>e*1.05;return{cx:e*(n?.5:.56),cy:t*(n?.78:.72),rs:Math.min(e,t)*(n?.145:.168)}}var O=`
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`,k=`
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 u_res;
uniform float u_time;

float hash21(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float stars(vec2 uv) {
  float s = 0.0;
  for (int k = 0; k < 3; k++) {
    float scale = 52.0 + float(k) * 38.0;
    vec2 id = floor(uv * scale);
    vec2 f = fract(uv * scale) - 0.5;
    float n = hash21(id + float(k) * 19.0);
    if (n > 0.972) {
      float d = length(f);
      s += smoothstep(0.055, 0.0, d) * (0.3 + 0.7 * hash21(id + 4.2));
    }
  }
  return s;
}

void main() {
  vec2 res = u_res;
  vec2 uv = (gl_FragCoord.xy - 0.5 * res) / min(res.x, res.y);
  float portrait = step(res.x * 1.05, res.y);

  vec2 hole = mix(vec2(0.10, -0.24), vec2(0.0, -0.30), portrait);
  float rs = mix(0.168, 0.142, portrait);
  vec2 p = uv - hole;
  float r = length(p);
  float phi = atan(p.y, p.x);
  float spin = u_time * 0.07;

  float warp = 0.78 * rs / max(r, 0.016);
  float shear = smoothstep(rs * 4.0, rs * 1.12, r);
  float ang = phi + shear * shear * 0.62;
  vec2 lensed = hole + vec2(cos(ang), sin(ang)) * (r * (1.0 + warp * 0.55));

  vec3 col = vec3(0.0392157);
  col += vec3(0.76, 0.76, 0.72) * stars(lensed) * mix(1.0, 0.12, shear);

  float flatten = 0.27;
  vec2 dsk = vec2(p.x, p.y / flatten);
  float rho = length(dsk);
  float rIn = rs * 1.68;
  float rOut = rs * 5.55;
  float annulus = smoothstep(rIn, rIn + rs * 0.14, rho) * smoothstep(rOut, rOut - rs * 1.05, rho);
  annulus *= smoothstep(rs * 0.96, rs * 1.12, r);

  float far = smoothstep(-rs * 0.02, rs * 0.28, p.y);
  float occluded = far * (1.0 - smoothstep(rs * 1.02, rs * 1.7, abs(p.x)));
  annulus *= 1.0 - occluded * 0.94;

  float dphi = atan(dsk.y, dsk.x) + spin;
  float spiral = 0.6 + 0.4 * sin(dphi * 3.0 + log(max(rho, 0.03)) * 7.2 - spin * 1.8);
  float approach = clamp(0.5 - p.x / (rs * 3.15), 0.0, 1.0);
  float temp = pow(clamp(rIn / max(rho, rIn), 0.0, 1.0), 0.62);

  vec3 hot = vec3(1.0, 0.96, 0.86);
  vec3 warm = vec3(1.0, 0.5, 0.12);
  vec3 red = vec3(0.4, 0.055, 0.018);
  vec3 dcol = mix(red, warm, clamp(temp * 1.35, 0.0, 1.0));
  dcol = mix(dcol, hot, pow(approach, 1.2) * (0.4 + 0.6 * temp));

  float dbright = annulus * spiral * (0.3 + 1.5 * pow(approach, 1.05)) * (0.42 + 0.72 * temp);
  col += dcol * dbright * 0.84;

  float isco = smoothstep(rIn + rs * 0.5, rIn, rho) * annulus;
  col += mix(warm, hot, approach) * isco * 0.5;

  float wrapR = rs * 1.36;
  float wrap = exp(-pow((r - wrapR) / (rs * 0.155), 2.0));
  float polar = pow(abs(p.y) / max(r, 1e-4), 1.65);
  wrap *= 0.2 + 1.5 * polar;
  wrap *= 0.36 + 1.18 * approach;
  col += mix(red, hot, pow(approach, 0.88)) * wrap * 0.98;

  float wrap2 = exp(-pow((r - rs * 1.82) / (rs * 0.2), 2.0));
  wrap2 *= pow(abs(sin(phi)), 2.15);
  wrap2 *= 0.22 + 0.95 * approach;
  col += mix(warm, hot, approach) * wrap2 * 0.4;

  float pring = exp(-pow((r - rs * 1.07) / (rs * 0.026), 2.0));
  col += vec3(1.0, 0.8, 0.52) * pring * (0.5 + 0.55 * approach);

  float hz = smoothstep(rs * 1.03, rs * 0.88, r);
  col = mix(col, vec3(0.0), hz);

  gl_FragColor = vec4(col, 1.0);
}
`;function A(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}function j(){let e=document.createElement(`canvas`).getContext(`webgl`,{alpha:!1});return e?!!(A(e,e.VERTEX_SHADER,O)&&A(e,e.FRAGMENT_SHADER,k)):!1}function M(e){if(!j())return null;let t=e.getContext(`webgl`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0});if(!t)return null;let n=A(t,t.VERTEX_SHADER,O),r=A(t,t.FRAGMENT_SHADER,k);if(!n||!r)return null;let i=t.createProgram();if(!i||(t.attachShader(i,n),t.attachShader(i,r),t.bindAttribLocation(i,0,`a_pos`),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS)))return null;t.useProgram(i);let a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0);let o=t.getUniformLocation(i,`u_res`),s=t.getUniformLocation(i,`u_time`);return!o||!s?null:n=>{t.viewport(0,0,e.width,e.height),t.clearColor(w[0],w[1],w[2],1),t.clear(t.COLOR_BUFFER_BIT),t.uniform2f(o,e.width,e.height),t.uniform1f(s,n),t.drawArrays(t.TRIANGLES,0,3)}}function N(e,t){let n=Math.round(Math.min(130,Math.max(48,e*t/14e3)));return Array.from({length:n},(e,t)=>({x:T(t,1),y:T(t,2),r:.35+T(t,3)*1.05,a:.2+T(t,4)*.5,phase:T(t,5)*Math.PI*2}))}function P(e,t,n,r,i,a){let{cx:o,cy:s,rs:c}=D(t,n),l=a?i*.07:.2,u=o-c*1.15;e.setTransform(1,0,0,1,0,0),e.fillStyle=`#0a0a0a`,e.fillRect(0,0,t,n);for(let i of r){let r=i.x*t,a=i.y*n,l=r-o,u=a-s,d=Math.hypot(l,u),f=Math.max(0,1-d/(c*4.1)),p=Math.atan2(u,l)+f*f*.64,m=1-f*.28;if(r=o+Math.cos(p)*d*m,a=s+Math.sin(p)*d*m,d<c*1.05)continue;let h=1+f*2.2;e.save(),e.translate(r,a),e.rotate(Math.atan2(a-s,r-o)+Math.PI/2),e.fillStyle=`rgba(220,220,214,${i.a*(1-f*.55)})`,e.beginPath(),e.ellipse(0,0,i.r*h,i.r*(1-f*.48),0,0,Math.PI*2),e.fill(),e.restore()}let d=e.createRadialGradient(o,s,c*.4,o,s,c*4.4);d.addColorStop(0,`rgba(255,120,30,0.1)`),d.addColorStop(.35,`rgba(255,90,16,0.04)`),d.addColorStop(1,`rgba(10,10,10,0)`),e.fillStyle=d,e.fillRect(0,0,t,n);let f=c*5.4,p=c*1.46,m=.32;e.save(),e.beginPath(),e.ellipse(o,s+c*.02,f,p,0,0,Math.PI*2),e.ellipse(o,s+c*.02,f*m,p*m,0,0,Math.PI*2),e.clip(`evenodd`);let h=e.createLinearGradient(o-f,s,o+f,s);h.addColorStop(0,`rgba(255,246,220,0.92)`),h.addColorStop(.22,`rgba(255,176,72,0.82)`),h.addColorStop(.5,`rgba(230,92,18,0.52)`),h.addColorStop(.78,`rgba(140,28,8,0.32)`),h.addColorStop(1,`rgba(72,10,6,0.18)`),e.fillStyle=h,e.fillRect(o-f,s-p,f*2,p*2),e.globalCompositeOperation=`lighter`,e.save(),e.translate(o,s),e.rotate(l*.35),e.scale(1,.27);for(let t=0;t<5;t+=1){let n=c*(1.95+t*.62);e.strokeStyle=`rgba(255,210,140,${.08+t*.015})`,e.lineWidth=c*.16,e.beginPath(),e.arc(0,0,n,l+t*.7,l+t*.7+Math.PI*1.15),e.stroke()}e.restore(),e.restore();let g=e.createRadialGradient(o,s-c*.15,c*.2,o,s-c*.2,c*1.15);g.addColorStop(0,`#0a0a0a`),g.addColorStop(.72,`rgba(10,10,10,0.92)`),g.addColorStop(1,`rgba(10,10,10,0)`),e.fillStyle=g,e.beginPath(),e.ellipse(o,s-c*.05,c*1.2,c*.95,0,Math.PI,0),e.fill();let _=e.createLinearGradient(u,s,o+c*1.4,s);_.addColorStop(0,`rgba(255,244,214,0.9)`),_.addColorStop(.45,`rgba(255,150,48,0.55)`),_.addColorStop(1,`rgba(120,22,8,0.22)`),e.strokeStyle=_,e.lineCap=`round`,e.lineWidth=c*.2,e.beginPath(),e.arc(o,s,c*1.36,Math.PI+.28,-.28),e.stroke(),e.lineWidth=c*.17,e.beginPath(),e.arc(o,s,c*1.36,.28,Math.PI-.28),e.stroke(),e.lineWidth=c*.1,e.strokeStyle=`rgba(255,200,120,0.28)`,e.beginPath(),e.arc(o,s,c*1.78,Math.PI+.55,-.55),e.stroke(),e.beginPath(),e.arc(o,s,c*1.78,.55,Math.PI-.55),e.stroke();let v=e.createRadialGradient(o,s,c*.2,o,s,c);v.addColorStop(0,`#000000`),v.addColorStop(.82,`#000000`),v.addColorStop(1,`rgba(0,0,0,0.15)`),e.fillStyle=v,e.beginPath(),e.arc(o,s,c,0,Math.PI*2),e.fill();let y=e.createLinearGradient(o-c,s,o+c,s);y.addColorStop(0,`rgba(255,236,200,0.85)`),y.addColorStop(.5,`rgba(255,150,50,0.45)`),y.addColorStop(1,`rgba(180,40,12,0.28)`),e.strokeStyle=y,e.lineWidth=Math.max(1.4,c*.045),e.beginPath(),e.arc(o,s,c*1.07,0,Math.PI*2),e.stroke()}function F(){let e=document.querySelector(`.well-canvas`);if(!e)return;let t=window.matchMedia(`(prefers-reduced-motion: reduce)`),n=0,r=0,i=1,a=[],o=0,s=!1,c=null,l=null,u=()=>{n=Math.max(1,Math.floor(window.innerWidth)),r=Math.max(1,Math.floor(window.innerHeight)),i=Math.min(window.devicePixelRatio||1,2),e.width=Math.floor(n*i),e.height=Math.floor(r*i),e.style.width=`${n}px`,e.style.height=`${r}px`,a=N(n,r)},d=(e,t)=>{let o=e*.001;if(c){c(t?o:1.4);return}l&&(l.setTransform(i,0,0,i,0,0),P(l,n,r,a,o,t))},f=e=>{d(e,!0),o=requestAnimationFrame(f)},p=()=>{s=!1,cancelAnimationFrame(o)},m=()=>{if(u(),!c&&!l&&(c=M(e),c||(l=e.getContext(`2d`,{alpha:!1}))),d(E()?1400:performance.now(),!E()),E()){p();return}s||(s=!0,o=requestAnimationFrame(f))};m(),t.addEventListener(`change`,()=>{cancelAnimationFrame(o),s=!1,m()}),window.addEventListener(`resize`,m),document.addEventListener(`visibilitychange`,()=>{if(document.hidden){cancelAnimationFrame(o),s=!1;return}m()})}var I=document.getElementById(`holder`);I&&(I.outerHTML=C()),t(),F(),window.addEventListener(`resize`,t),window.visualViewport?.addEventListener(`resize`,t);