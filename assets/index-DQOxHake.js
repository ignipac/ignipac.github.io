(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function r(){return{dev_name:"iguessfive",social:{github:"https://github.com/iguessfive",youtube:"https://www.youtube.com/@iguessfive",itch_io:"https://iguessfive.itch.io/"},projects:[{title:"Mini-Games Collection",description:"A collection of small games",technologies:["Godot"],link:"https://iguessfive.itch.io/mini-games"},{title:"GMTK Jame 2025 : Ouroboros",description:'A jam game with the theme "loop". It is a puzzle game inspired by classic snake.',technologies:["Godot"],link:"https://iguessfive.itch.io/ouro"}]}}function a(o){return`
    <section class="projects-section">
      <h2>Some things I've done</h2>
      <div class="projects-grid">
        ${o.map(t=>`
          <div class="project-card">
            <h3>${t.title}</h3>
            <p>${t.description}</p>
            <div class="tech-tags">
              ${t.technologies.map(s=>`<span class="tech-tag">${s}</span>`).join("")}
            </div>
            ${t.link?`<a href="${t.link}" class="project-link">View Project</a>`:""}
          </div>
        `).join("")}
      </div>
    </section>
  `}function l(o){const t=Object.entries(o).filter(([s,n])=>n).map(([s,n])=>`<a href="${n}" target="_blank" class="social-link">${s.replace("_",".")}</a>`).join("");return t?`
    <section class="social-section">
      <div class="social-links">
        ${t}
      </div>
    </section>
  `:""}function u(){const o=r();document.querySelector("#app").innerHTML=`
    <div>
      <header class="main-header">
        <h1>${o.dev_name}</h1>
      </header>

      <main class="main-content">
        <section>
          <h2 style="font-size: 48px; text-align: center;">Under Development</h2>
        </section>
        ${a(o.projects)}
        ${l(o.social)}
      </main>
      
      <footer class="site-footer">
        <p>&copy; 2025 ${o.dev_name}. Built with TypeScript & Vite.</p>
      </footer>
    </div>
  `}u();
