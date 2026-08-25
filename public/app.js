const content = document.getElementById("content");
const pageTitle = document.getElementById("pageTitle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("mobileOverlay");
const toast = document.getElementById("toast");

const pages = {

dashboard: {
title:"Dashboard",
render:()=>`
<div class="dashboard-shell">

  <section class="file-panel">
    <div class="panel-title">
      <span>EXPLORER</span>
      <span>＋</span>
    </div>

    <div class="file-tree">
      <div class="tree-folder">⌄ <span>src</span></div>
      <div class="tree-folder">⌄ <span>app</span></div>
      <div class="tree-file active">index.tsx</div>
      <div class="tree-file">App.tsx</div>
      <div class="tree-file">styles.css</div>
      <div class="tree-folder">⌄ <span>components</span></div>
      <div class="tree-file">Button.tsx</div>
      <div class="tree-file">Input.tsx</div>
      <div class="tree-file">Card.tsx</div>
      <div class="tree-folder">⌄ <span>public</span></div>
      <div class="tree-file">index.html</div>
    </div>
  </section>

  <section class="preview-panel">
    <div class="panel-title">
      <span>PREVIEW</span>
      <span>↗</span>
    </div>

    <div class="preview-area">
      <div class="robot">🤖</div>
      <div class="preview-hint">
        <b>Getting Started with Design AI</b>
        Go to File<br>
        Show All Commands
      </div>

      <div class="preview-actions">
        <button class="mini-action" data-toast="Open command palette">⌘ Command</button>
        <button class="mini-action" data-toast="Opening all commands">Show All Commands</button>
      </div>
    </div>
  </section>

  <section class="copilot-panel">
    <div class="panel-title">
      <span>DesignCopilot</span>
      <span>•••</span>
    </div>

    <div class="hero">
      <div class="hero-badge">DESIGNCOPILOT</div>

      <h1>Where <span>Design</span> Meets<br>Dev in Real-Time</h1>

      <p>
        Your all-in-one AI design product that helps you plan,
        build, test and launch your app.
      </p>

      <div class="hero-tabs">
        <button class="hero-tab active" data-page="projects">Projects</button>
        <button class="hero-tab" data-page="components">Components</button>
        <button class="hero-tab" data-page="integrations">Integration</button>
        <button class="hero-tab" data-page="api">API</button>
        <button class="hero-tab" data-page="preview">Preview</button>
      </div>
    </div>

    <div class="copilot">
      <div class="copilot-head">
        <span class="ai-dot"></span>
        <span>AI COPILOT</span>
        <span style="margin-left:auto">LIVE</span>
      </div>

      <textarea class="copilot-input" id="copilotInput"
        placeholder="Ask Design AI to work on a task..."></textarea>

      <div class="copilot-footer">
        <span class="model-chip">Agent</span>
        <span class="model-chip">Chat</span>
        <span class="model-chip">Claude 3.5 Sonnet</span>
        <button class="send" id="sendPrompt">↑</button>
      </div>
    </div>

    <div class="generation-list">
      <div class="generation">▣ Generate Screen · Prompting AI to build...</div>
      <div class="generation">▣ Generate Component · Ready for review</div>
    </div>

  </section>
</div>
`
},

projects:{
title:"Projects",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>Projects</h1>
      <p>Manage your AI-powered development projects.</p>
    </div>
    <button class="btn primary" data-toast="New project created">+ New Project</button>
  </div>

  <div class="grid grid-3">
    <div class="card">
      <div class="card-title">Design AI</div>
      <div class="card-sub">Main workspace</div>
      <div class="stat green">Active</div>
      <button class="btn" data-page="dashboard">Open Workspace</button>
    </div>
    <div class="card">
      <div class="card-title">Mobile App</div>
      <div class="card-sub">React Native project</div>
      <div class="stat">84%</div>
      <button class="btn">Continue</button>
    </div>
    <div class="card">
      <div class="card-title">API Platform</div>
      <div class="card-sub">Backend services</div>
      <div class="stat">12</div>
      <button class="btn" data-page="api">API Endpoints</button>
    </div>
  </div>
</div>
`
},

files:{
title:"Files",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>Files</h1>
      <p>Project source and generated files.</p>
    </div>
    <button class="btn primary" data-toast="File created">+ New File</button>
  </div>

  <div class="list">
    ${["index.tsx","App.tsx","styles.css","Button.tsx","Input.tsx","api.ts","package.json"].map((x,i)=>`
    <div class="list-row">
      <div class="list-icon">${i<3?"⌁":"□"}</div>
      <div class="list-main">
        <strong>${x}</strong>
        <span>Updated by Design AI</span>
      </div>
      <button class="btn" data-toast="Opening ${x}">Open</button>
    </div>`).join("")}
  </div>
</div>
`
},

components:{
title:"Components",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>Components</h1>
      <p>Reusable UI components generated by Design AI.</p>
    </div>
    <button class="btn primary" data-toast="Component creator opened">+ Create Component</button>
  </div>

  <div class="grid grid-3">
    ${["Button","Input","Card","Modal","Navbar","Sidebar"].map((x,i)=>`
    <div class="card">
      <div class="card-title">${x}</div>
      <div class="card-sub">components/${x}.tsx</div>
      <div style="margin-top:14px">
        <button class="btn">${i%2?"Edit":"Open"}</button>
      </div>
    </div>`).join("")}
  </div>
</div>
`
},

api:{
title:"API Endpoints",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>API Endpoints</h1>
      <p>Build, test and manage your Design API.</p>
    </div>
    <button class="btn primary" data-toast="Endpoint creator opened">+ New Endpoint</button>
  </div>

  <div class="api-layout">

    <aside class="api-sidebar">
      <input class="api-filter" placeholder="Filter endpoints...">
      <button class="api-item active">
        <span class="method">GET</span>/api/projects
      </button>
      <button class="api-item">
        <span class="method">POST</span>/api/projects
      </button>
      <button class="api-item">
        <span class="method">GET</span>/api/components
      </button>
      <button class="api-item">
        <span class="method">POST</span>/api/generate
      </button>
      <button class="api-item">
        <span class="method">GET</span>/api/models
      </button>
      <button class="api-item">
        <span class="method">POST</span>/api/deploy
      </button>
    </aside>

    <section class="api-detail">
      <div class="api-title">
        <span class="method">GET</span>
        <h2>/api/projects</h2>
      </div>

      <div class="tabs">
        <button class="tab active">Overview</button>
        <button class="tab">Request</button>
        <button class="tab">Response</button>
        <button class="tab">Code</button>
      </div>

      <p class="card-sub">
        Returns all projects available in the current Design workspace.
      </p>

      <div class="request-bar" style="margin-top:14px">
        <span class="method">GET</span>
        <input class="request-url" value="/api/projects" readonly>
        <button class="send-request" data-toast="Request sent successfully">SEND</button>
      </div>

      <div class="code">{
  "status": 200,
  "data": [
    {
      "id": "design-main",
      "name": "Design AI",
      "status": "active"
    }
  ]
}</div>
    </section>

  </div>
</div>
`
},

integrations:{
title:"Integrations",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>Integrations</h1>
      <p>Connect Design with your development stack.</p>
    </div>
    <button class="btn primary" data-toast="Integration browser opened">+ Add Integration</button>
  </div>

  <div class="grid grid-2">
    ${[
      ["GitHub","Repository and source control","Connected"],
      ["Vercel","Deployment and previews","Connected"],
      ["Cloudflare","Edge and networking","Ready"],
      ["OpenAI","AI model provider","Connected"],
      ["Anthropic","AI model provider","Connected"],
      ["Google Gemini","AI model provider","Ready"]
    ].map(x=>`
    <div class="card">
      <div style="display:flex;align-items:center;gap:10px">
        <div class="list-icon">✦</div>
        <div style="flex:1">
          <div class="card-title">${x[0]}</div>
          <div class="card-sub">${x[1]}</div>
        </div>
        <span class="status">${x[2]}</span>
      </div>
    </div>`).join("")}
  </div>
</div>
`
},

models:{
title:"AI Models",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>AI Models</h1>
      <p>Choose the intelligence powering Design Copilot.</p>
    </div>
  </div>

  <div class="list">
    ${[
      ["Claude 3.5 Sonnet","Anthropic","Best for coding and UI generation"],
      ["GPT-4.1","OpenAI","General development assistant"],
      ["Gemini 2.5 Pro","Google","Long context and architecture"],
      ["Qwen Coder","Qwen","Fast code generation"]
    ].map((x,i)=>`
    <div class="list-row">
      <div class="list-icon">✦</div>
      <div class="list-main">
        <strong>${x[0]}</strong>
        <span>${x[1]} · ${x[2]}</span>
      </div>
      <button class="btn ${i===0?"primary":""}" data-toast="${x[0]} selected">
        ${i===0?"Active":"Use Model"}
      </button>
    </div>`).join("")}
  </div>
</div>
`
},

preview:{
title:"Preview",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>Live Preview</h1>
      <p>Review the current application before deployment.</p>
    </div>
    <button class="btn primary" data-toast="Preview refreshed">Refresh Preview</button>
  </div>

  <div class="card" style="height:calc(100vh - 190px);min-height:430px;padding:0;display:flex;flex-direction:column">
    <div class="panel-title">
      <span>DESIGN PREVIEW</span>
      <span class="status">LIVE</span>
    </div>
    <div style="flex:1;display:grid;place-items:center;background:#0d0d0f">
      <div style="text-align:center">
        <div class="robot">🤖</div>
        <div class="card-title">Preview is running</div>
        <div class="card-sub">Your generated application appears here.</div>
      </div>
    </div>
  </div>
</div>
`
},

activity:{
title:"Activity",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>Activity</h1>
      <p>Recent actions across your workspace.</p>
    </div>
  </div>

  <div class="list">
    ${[
      ["AI","Design AI generated Button.tsx","Just now"],
      ["API","GET /api/projects returned 200","2 min ago"],
      ["DEPLOY","Preview deployment completed","8 min ago"],
      ["FILE","styles.css updated","12 min ago"],
      ["AI","Copilot generated dashboard layout","18 min ago"]
    ].map(x=>`
    <div class="list-row">
      <div class="list-icon">${x[0]}</div>
      <div class="list-main">
        <strong>${x[1]}</strong>
        <span>${x[2]}</span>
      </div>
    </div>`).join("")}
  </div>
</div>
`
},

settings:{
title:"Settings",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>Settings</h1>
      <p>Configure your Design workspace.</p>
    </div>
    <button class="btn primary" data-toast="Settings saved">Save Changes</button>
  </div>

  <div class="grid grid-2">
    <div class="card">
      <div class="card-title">Workspace</div>
      <div class="card-sub">Workspace name</div>
      <input class="api-filter" style="margin-top:10px;border:1px solid var(--line)" value="Design">
    </div>

    <div class="card">
      <div class="card-title">Appearance</div>
      <div class="card-sub">Interface theme</div>
      <button class="btn primary" style="margin-top:10px">Dark AMOLED</button>
    </div>

    <div class="card">
      <div class="card-title">Copilot</div>
      <div class="card-sub">Default AI model</div>
      <button class="btn" style="margin-top:10px">Claude 3.5 Sonnet</button>
    </div>

    <div class="card">
      <div class="card-title">Security</div>
      <div class="card-sub">API keys and access tokens</div>
      <button class="btn" style="margin-top:10px" data-toast="Security settings opened">Manage Keys</button>
    </div>
  </div>
</div>
`
},

docs:{
title:"Documentation",
render:()=>`
<div class="page">
  <div class="page-head">
    <div>
      <h1>Documentation</h1>
      <p>Build with the Design AI platform.</p>
    </div>
  </div>

  <div class="grid grid-2">
    <div class="card">
      <div class="card-title">Getting Started</div>
      <div class="card-sub">Create your first Design AI project and start building with Copilot.</div>
      <button class="btn" style="margin-top:14px">Read Guide</button>
    </div>
    <div class="card">
      <div class="card-title">API Reference</div>
      <div class="card-sub">Explore endpoints, authentication, requests and responses.</div>
      <button class="btn" style="margin-top:14px" data-page="api">Open API</button>
    </div>
    <div class="card">
      <div class="card-title">Components</div>
      <div class="card-sub">Learn how Design generates reusable UI components.</div>
      <button class="btn" style="margin-top:14px" data-page="components">Components</button>
    </div>
    <div class="card">
      <div class="card-title">Deployment</div>
      <div class="card-sub">Deploy generated applications to your preferred platform.</div>
      <button class="btn" style="margin-top:14px" data-page="integrations">Integrations</button>
    </div>
  </div>
</div>
`
}

};


const BUILD_KEY = "design_build_complete";

function markBuildComplete(){
  localStorage.setItem(BUILD_KEY,"true");
}

function openReviewAfterBuild(){
  markBuildComplete();
  navigate("review");
  showToast("Build complete — opening Review");
}

function showToast(message){
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(window.__toast);
  window.__toast=setTimeout(()=>toast.classList.remove("show"),1800);
}

function closeMobileMenu(){
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
}

function openMobileMenu(){
  sidebar.classList.add("open");
  overlay.classList.add("show");
}

function navigate(page){
  if(!pages[page]) page="dashboard";

  const p=pages[page];

  content.innerHTML=p.render();
  pageTitle.textContent=p.title;
  document.title=`${p.title} — Design`;

  document.querySelectorAll(".nav-item").forEach(el=>{
    el.classList.toggle("active",el.dataset.page===page);
  });

  closeMobileMenu();

  window.history.pushState({page}, "", `#${page}`);

  bindDynamicEvents();
}

function bindDynamicEvents(){

  document.querySelectorAll("[data-page]").forEach(el=>{
    el.onclick=()=>navigate(el.dataset.page);
  });

  document.querySelectorAll("[data-toast]").forEach(el=>{
    el.onclick=()=>showToast(el.dataset.toast);
  });

  const send=document.getElementById("sendPrompt");
  const input=document.getElementById("copilotInput");

  if(send && input){
    send.onclick=()=>{
      if(!input.value.trim()){
        showToast("Type a task for Design AI");
        return;
      }
      showToast("Design AI is working...");
      input.value="";
    };
  }

  document.querySelectorAll(".api-item").forEach(el=>{
    el.onclick=()=>{
      document.querySelectorAll(".api-item").forEach(x=>x.classList.remove("active"));
      el.classList.add("active");
      showToast("Endpoint selected");
    };
  });

  document.querySelectorAll(".tab").forEach(el=>{
    el.onclick=()=>{
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
      el.classList.add("active");
    };
  });
}

document.getElementById("openMenu").onclick=openMobileMenu;
document.getElementById("closeMenu").onclick=closeMobileMenu;
overlay.onclick=closeMobileMenu;

document.getElementById("deployButton").onclick=()=>{
  const btn=document.getElementById("deployButton");
  btn.disabled=true;
  btn.textContent="Building...";

  showToast("Design AI is building your web app...");

  setTimeout(()=>{
    btn.disabled=false;
    btn.textContent="Build";
    openReviewAfterBuild();
  },1800);
};

document.getElementById("globalSearch").addEventListener("keydown",e=>{
  if(e.key==="Enter"){
    showToast(`Searching for "${e.target.value}"`);
  }
});

window.addEventListener("popstate",()=>{
  navigate(location.hash.replace("#","")||"dashboard");
});

navigate(location.hash.replace("#","")||"dashboard");


/* GLOBAL MOBILE-SAFE CLICK ROUTER */
document.addEventListener("click",(e)=>{
  const target=e.target.closest("[data-page]");
  if(!target) return;
  e.preventDefault();
  navigate(target.dataset.page);
});

/* CHỈ tìm và ẩn card chứa robot + hướng dẫn */
(function(){
  function hideRobotPreview(){
    const hash = location.hash.toLowerCase();

    if(hash && !hash.includes("dashboard") && !hash.includes("home")) return;

    document.querySelectorAll("section, article, div").forEach(el=>{
      const text=(el.innerText||"").toLowerCase();

      if(
        text.includes("hướng dẫn bắt đầu sử dụng design ai") &&
        text.includes("hiển thị tất cả lệnh") &&
        el.querySelector("img,svg")
      ){
        el.classList.add("preview-robot-panel-hidden");
      }
    });
  }

  hideRobotPreview();

  new MutationObserver(hideRobotPreview).observe(
    document.body,
    {childList:true,subtree:true}
  );
})();

/* =========================================================
   HIDE "XEM TRƯỚC" ROBOT PANEL ON HOME ONLY
   Do NOT hide the Review page.
   ========================================================= */
(function hideHomeRobotPreview(){

  function hidePreview(){
    const current =
      location.hash.replace("#","").split("?")[0].toLowerCase();

    const isHome =
      current === "" ||
      current === "dashboard" ||
      current === "home";

    if(!isHome) return;

    const candidates = Array.from(document.querySelectorAll(
      "section,article,.card,.panel,.preview-panel,.preview-card,.preview,.dashboard-card"
    ));

    const target = candidates.find(el => {
      const text = (el.textContent || "").trim().toLowerCase();

      return (
        text.includes("xem trước") &&
        (
          text.includes("hướng dẫn bắt đầu sử dụng design ai") ||
          text.includes("hiển thị tất cả lệnh") ||
          text.includes("design ai")
        )
      );
    });

    if(target){
      target.classList.add("dashboard-preview-hidden");
      target.setAttribute("data-dashboard-preview","true");
    }
  }

  hidePreview();

  const observer = new MutationObserver(() => {
    hidePreview();
  });

  observer.observe(document.documentElement,{
    childList:true,
    subtree:true
  });

  window.addEventListener("hashchange",()=>{
    setTimeout(hidePreview,50);
  });

})();

/* =========================================================
   MOBILE NAVIGATION
   Clicking a menu item always opens its actual page.
   ========================================================= */
document.addEventListener("click",(event)=>{
  const item = event.target.closest("[data-page]");

  if(!item) return;

  const page = item.getAttribute("data-page");

  if(!page) return;

  event.preventDefault();

  if(typeof navigate === "function"){
    navigate(page);
  }
});

/* =========================================================
   SQUARE UI — FORCE ZERO RADIUS
   ========================================================= */
document.documentElement.style.setProperty("--radius","0px");

/* CHỈ tìm và ẩn card chứa robot + hướng dẫn */
(function(){
  function hideRobotPreview(){
    const hash = location.hash.toLowerCase();

    if(hash && !hash.includes("dashboard") && !hash.includes("home")) return;

    document.querySelectorAll("section, article, div").forEach(el=>{
      const text=(el.innerText||"").toLowerCase();

      if(
        text.includes("hướng dẫn bắt đầu sử dụng design ai") &&
        text.includes("hiển thị tất cả lệnh") &&
        el.querySelector("img,svg")
      ){
        el.classList.add("preview-robot-panel-hidden");
      }
    });
  }

  hideRobotPreview();

  new MutationObserver(hideRobotPreview).observe(
    document.body,
    {childList:true,subtree:true}
  );
})();

/* =========================================================
   HIDE ONLY THE LARGE ROBOT PREVIEW CARD
   Unique marker:
   "Hướng dẫn bắt đầu sử dụng Design AI"
   ========================================================= */
(function hideOnlyRobotPreview(){

  function findAndHide(){

    const textNodes = [];

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT
    );

    let node;

    while(node = walker.nextNode()){
      const text = (node.nodeValue || "").trim().toLowerCase();

      if(
        text.includes("hướng dẫn bắt đầu sử dụng design ai") ||
        text.includes("hướng dẫn bắt đầu sử dụng")
      ){
        textNodes.push(node);
      }
    }

    textNodes.forEach(node => {

      let el = node.parentElement;

      /*
       * Đi ngược DOM tìm đúng card chứa phần hướng dẫn.
       * Không tìm theo icon/image để tránh bỏ sót robot emoji/svg.
       */
      for(let i=0; el && i<8; i++,el=el.parentElement){

        const content = (el.innerText || "").toLowerCase();

        if(
          content.includes("hướng dẫn bắt đầu sử dụng design ai") &&
          content.includes("hiển thị tất cả lệnh")
        ){

          /*
           * Chỉ nhận container lớn của card Preview,
           * không nhận text/div con bên trong.
           */
          const rect = el.getBoundingClientRect();

          if(rect.height > 180){

            el.style.setProperty(
              "display",
              "none",
              "important"
            );

            el.setAttribute(
              "data-design-robot-preview-hidden",
              "true"
            );

            break;
          }
        }
      }
    });
  }

  function run(){
    try{
      findAndHide();
    }catch(e){}
  }

  run();

  window.addEventListener("load",run);
  window.addEventListener("hashchange",()=>{
    setTimeout(run,100);
  });

  new MutationObserver(()=>{
    run();
  }).observe(document.body,{
    childList:true,
    subtree:true
  });

})();
