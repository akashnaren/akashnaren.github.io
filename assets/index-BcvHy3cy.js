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
    </div>`}var w=[10/255,10/255,10/255];function T(e,t){let n=Math.sin(e*127.1+t*311.7)*43758.5453123;return n-Math.floor(n)}function E(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function D(e,t){let n=t>e*1.05;return{cx:e*(n?.5:.62),cy:t*(n?.84:.78),rs:Math.min(e,t)*(n?.112:.108)}}var O=`
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
    float scale = 42.0 + float(k) * 34.0;
    vec2 id = floor(uv * scale);
    vec2 f = fract(uv * scale) - 0.5;
    float n = hash21(id + float(k) * 19.0);
    if (n > 0.958) {
      float d = length(f);
      s += smoothstep(0.07, 0.0, d) * (0.35 + 0.65 * hash21(id + 4.2));
    }
  }
  return s;
}

void main() {
  vec2 res = u_res;
  vec2 uv = (gl_FragCoord.xy - 0.5 * res) / min(res.x, res.y);
  float portrait = step(res.x * 1.05, res.y);

  vec2 hole = mix(vec2(0.16, -0.30), vec2(0.0, -0.36), portrait);
  float rs = mix(0.108, 0.112, portrait);
  vec2 p = uv - hole;
  float r = length(p);
  float phi = atan(p.y, p.x);
  float spin = u_time * 0.06;

  float warp = 0.7 * rs / max(r, 0.014);
  float shear = smoothstep(rs * 3.6, rs * 1.08, r);
  float ang = phi + shear * shear * 0.7;
  vec2 lensed = hole + vec2(cos(ang), sin(ang)) * (r * (1.0 + warp * 0.5));

  vec3 col = vec3(0.0392157);
  col += vec3(0.8, 0.8, 0.76) * stars(lensed) * mix(1.0, 0.18, shear);

  vec3 hot = vec3(1.0, 0.96, 0.86);
  vec3 warm = vec3(1.0, 0.52, 0.14);
  vec3 red = vec3(0.38, 0.05, 0.016);
  float approach = clamp(0.5 + p.x / (rs * 2.6), 0.0, 1.0);
  vec3 dcol = mix(red, warm, approach);
  dcol = mix(dcol, hot, pow(approach, 1.35));

  // Wide equatorial fire: optically thick band crossing in front of the hole.
  float a = rs * 3.55;
  float b = rs * 0.46;
  float ell = (p.x * p.x) / (a * a) + (p.y * p.y) / (b * b);
  float band = smoothstep(1.12, 0.7, ell) * smoothstep(0.07, 0.2, ell);
  float spiral = 0.9 + 0.1 * sin(atan(p.y, p.x) * 2.0 + log(max(length(p), 0.02)) * 5.0 - spin * 2.0);
  float temp = pow(clamp(1.2 * rs / max(length(vec2(p.x, p.y / 0.46)), 1.2 * rs), 0.0, 1.0), 0.7);
  float dbright = band * spiral * (0.7 + 1.25 * pow(approach, 1.05)) * (0.6 + 0.65 * temp);
  col += dcol * dbright;

  float isco = band * smoothstep(0.42, 0.18, ell);
  col += mix(warm, hot, approach) * isco * 0.7;

  // Lensed far side: vertical photon wrap over and under the horizon.
  float wrapR = rs * 1.2;
  float wrap = exp(-pow((r - wrapR) / (rs * 0.26), 2.0));
  float polar = pow(abs(p.y) / max(r, 1e-4), 1.05);
  wrap *= 0.4 + 1.45 * polar;
  wrap *= 0.42 + 1.15 * approach;
  col += mix(red, hot, pow(approach, 0.8)) * wrap * 1.25;

  float wrap2 = exp(-pow((r - rs * 1.48) / (rs * 0.18), 2.0));
  wrap2 *= pow(abs(sin(phi)), 1.35);
  wrap2 *= 0.3 + 0.9 * approach;
  col += mix(warm, hot, approach) * wrap2 * 0.6;

  float pring = exp(-pow((r - rs * 1.04) / (rs * 0.03), 2.0));
  col += vec3(1.0, 0.84, 0.58) * pring * (0.55 + 0.6 * approach);

  float hz = smoothstep(rs * 1.02, rs * 0.9, r);
  col = mix(col, vec3(0.0), hz);

  gl_FragColor = vec4(col, 1.0);
}
`;function A(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}function j(){let e=document.createElement(`canvas`).getContext(`webgl`,{alpha:!1});return e?!!(A(e,e.VERTEX_SHADER,O)&&A(e,e.FRAGMENT_SHADER,k)):!1}function M(e){if(!j())return null;let t=e.getContext(`webgl`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!0});if(!t)return null;let n=A(t,t.VERTEX_SHADER,O),r=A(t,t.FRAGMENT_SHADER,k);if(!n||!r)return null;let i=t.createProgram();if(!i||(t.attachShader(i,n),t.attachShader(i,r),t.bindAttribLocation(i,0,`a_pos`),t.linkProgram(i),!t.getProgramParameter(i,t.LINK_STATUS)))return null;t.useProgram(i);let a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0);let o=t.getUniformLocation(i,`u_res`),s=t.getUniformLocation(i,`u_time`);return!o||!s?null:n=>{t.viewport(0,0,e.width,e.height),t.clearColor(w[0],w[1],w[2],1),t.clear(t.COLOR_BUFFER_BIT),t.uniform2f(o,e.width,e.height),t.uniform1f(s,n),t.drawArrays(t.TRIANGLES,0,3)}}function N(e,t){let n=Math.round(Math.min(160,Math.max(64,e*t/11e3)));return Array.from({length:n},(e,t)=>({x:T(t,1),y:T(t,2),r:.35+T(t,3)*1.05,a:.2+T(t,4)*.5,phase:T(t,5)*Math.PI*2}))}function P(e,t,n,r,i,a){let{cx:o,cy:s,rs:c}=D(t,n),l=a?i*.06:.18,u=c*3.55,d=c*.46;e.setTransform(1,0,0,1,0,0),e.fillStyle=`#0a0a0a`,e.fillRect(0,0,t,n);for(let i of r){let r=i.x*t,a=i.y*n,l=r-o,u=a-s,d=Math.hypot(l,u),f=Math.max(0,1-d/(c*3.8)),p=Math.atan2(u,l)+f*f*.7,m=1-f*.26;if(r=o+Math.cos(p)*d*m,a=s+Math.sin(p)*d*m,d<c*1.02)continue;let h=1+f*2.1;e.save(),e.translate(r,a),e.rotate(Math.atan2(a-s,r-o)+Math.PI/2),e.fillStyle=`rgba(224,224,218,${i.a*(1-f*.5)})`,e.beginPath(),e.ellipse(0,0,i.r*h,i.r*(1-f*.45),0,0,Math.PI*2),e.fill(),e.restore()}let f=e.createRadialGradient(o,s,c*.3,o,s,c*3.2);f.addColorStop(0,`rgba(255,130,36,0.08)`),f.addColorStop(.45,`rgba(255,90,16,0.03)`),f.addColorStop(1,`rgba(10,10,10,0)`),e.fillStyle=f,e.fillRect(0,0,t,n);let p=e.createLinearGradient(o-u,s,o+u,s);p.addColorStop(0,`rgba(64,8,5,0.16)`),p.addColorStop(.2,`rgba(120,24,8,0.32)`),p.addColorStop(.45,`rgba(220,84,16,0.58)`),p.addColorStop(.72,`rgba(255,170,64,0.88)`),p.addColorStop(1,`rgba(255,246,220,0.95)`),e.save(),e.beginPath(),e.ellipse(o,s+c*.02,u,d,0,0,Math.PI*2),e.ellipse(o,s+c*.02,c*1.15,c*.16,0,0,Math.PI*2),e.clip(`evenodd`),e.fillStyle=p,e.fillRect(o-u,s-d,u*2,d*2),e.restore(),e.save(),e.globalAlpha=.22,e.translate(o,s+c*.04),e.rotate(l*.4),e.scale(1,.22),e.strokeStyle=`rgba(255,230,180,0.9)`,e.lineWidth=c*.12,e.beginPath(),e.arc(0,0,c*2.4,l,l+Math.PI*1.1),e.stroke(),e.restore();let m=e.createLinearGradient(o-c*1.6,s,o+c*1.6,s);m.addColorStop(0,`rgba(110,18,8,0.24)`),m.addColorStop(.55,`rgba(255,150,48,0.6)`),m.addColorStop(1,`rgba(255,244,214,0.92)`),e.strokeStyle=m,e.lineCap=`round`,e.lineWidth=c*.28,e.beginPath(),e.arc(o,s,c*1.22,Math.PI+.18,-.18),e.stroke(),e.lineWidth=c*.24,e.beginPath(),e.arc(o,s,c*1.22,.18,Math.PI-.18),e.stroke();let h=e.createRadialGradient(o,s,c*.15,o,s,c);h.addColorStop(0,`#000000`),h.addColorStop(.86,`#000000`),h.addColorStop(1,`rgba(0,0,0,0.2)`),e.fillStyle=h,e.beginPath(),e.arc(o,s,c,0,Math.PI*2),e.fill();let g=e.createLinearGradient(o-c,s,o+c,s);g.addColorStop(0,`rgba(170,36,10,0.3)`),g.addColorStop(.5,`rgba(255,150,50,0.48)`),g.addColorStop(1,`rgba(255,236,200,0.9)`),e.strokeStyle=g,e.lineWidth=Math.max(1.5,c*.055),e.beginPath(),e.arc(o,s,c*1.04,0,Math.PI*2),e.stroke()}function F(){let e=document.querySelector(`.well-canvas`);if(!e)return;let t=window.matchMedia(`(prefers-reduced-motion: reduce)`),n=0,r=0,i=1,a=[],o=0,s=!1,c=null,l=null,u=()=>{n=Math.max(1,Math.floor(window.innerWidth)),r=Math.max(1,Math.floor(window.innerHeight)),i=Math.min(window.devicePixelRatio||1,2),e.width=Math.floor(n*i),e.height=Math.floor(r*i),e.style.width=`${n}px`,e.style.height=`${r}px`,a=N(n,r)},d=(e,t)=>{let o=e*.001;if(c){c(t?o:1.4);return}l&&(l.setTransform(i,0,0,i,0,0),P(l,n,r,a,o,t))},f=e=>{d(e,!0),o=requestAnimationFrame(f)},p=()=>{s=!1,cancelAnimationFrame(o)},m=()=>{if(u(),!c&&!l&&(c=M(e),c||(l=e.getContext(`2d`,{alpha:!1}))),d(E()?1400:performance.now(),!E()),E()){p();return}s||(s=!0,o=requestAnimationFrame(f))};m(),t.addEventListener(`change`,()=>{cancelAnimationFrame(o),s=!1,m()}),window.addEventListener(`resize`,m),document.addEventListener(`visibilitychange`,()=>{if(document.hidden){cancelAnimationFrame(o),s=!1;return}m()})}var I=document.getElementById(`holder`);I&&(I.outerHTML=C()),t(),F(),window.addEventListener(`resize`,t),window.visualViewport?.addEventListener(`resize`,t);