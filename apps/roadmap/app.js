// ------------------------------------------------
// GitHub OS Roadmap
// ------------------------------------------------

const STORAGE_KEY = 'github-os-progress';
const guideCache = {};
let baseData = null;
let customData = null;
let data = null;
let progress = {};
let activeNodeId = null;

// --- Init ---

async function init() {
  progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  const [baseRes, customRes] = await Promise.all([
    fetch('data/roadmap.json'),
    fetch('data/my-roadmap.json').catch(() => null)
  ]);

  baseData = await baseRes.json();
  try {
    customData = customRes ? await customRes.json() : null;
  } catch {
    customData = null;
  }

  // Merge: base tracks first, then custom tracks
  data = {
    tracks: [
      ...baseData.tracks,
      ...(customData && customData.tracks ? customData.tracks : [])
    ]
  };

  render();
}

// --- Render ---

function render() {
  const roadmap = document.getElementById('roadmap');
  roadmap.innerHTML = '';

  const baseTrackIds = new Set(baseData.tracks.map(t => t.id));
  const hasCustom = customData && customData.tracks && customData.tracks.length > 0;

  // Base section
  const baseSection = document.createElement('div');
  baseSection.className = 'roadmap-section';
  baseSection.innerHTML = '<div class="section-label">Core</div>';

  const baseGrid = document.createElement('div');
  baseGrid.className = 'roadmap-grid';

  baseData.tracks.forEach(track => {
    baseGrid.appendChild(renderTrack(track));
  });

  baseSection.appendChild(baseGrid);
  roadmap.appendChild(baseSection);

  // Custom section
  if (hasCustom) {
    const customSection = document.createElement('div');
    customSection.className = 'roadmap-section';
    customSection.innerHTML = '<div class="section-label">Your Roadmap</div>';

    const customGrid = document.createElement('div');
    customGrid.className = 'roadmap-grid';

    customData.tracks.forEach(track => {
      customGrid.appendChild(renderTrack(track));
    });

    customSection.appendChild(customGrid);
    roadmap.appendChild(customSection);
  }

  // Attach click handlers
  document.querySelectorAll('.node').forEach(el => {
    el.addEventListener('click', () => openDrawer(el.dataset.id));
  });

  updateTotalProgress();
}

function renderTrack(track) {
  const trackEl = document.createElement('div');
  trackEl.className = 'track';

  const doneCount = track.nodes.filter(n => progress[n.id]).length;
  const totalCount = track.nodes.length;

  trackEl.innerHTML = `
    <div class="track-header">
      <div class="track-title" style="color: ${track.color}">${track.title}</div>
      <div class="track-desc">${track.description}</div>
      <div class="track-progress">${doneCount} / ${totalCount}</div>
    </div>
    <div class="track-spine">
      ${track.nodes.map((node, i) => `
        ${i > 0 ? '<div class="spine-segment"></div>' : ''}
        <div class="node ${progress[node.id] ? 'done' : ''}" data-id="${node.id}">
          <div class="node-check">
            <svg viewBox="0 0 12 12" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="2,6 5,9 10,3"></polyline>
            </svg>
          </div>
          <span class="node-title">${node.title}</span>
        </div>
      `).join('')}
    </div>
  `;

  return trackEl;
}

// --- Drawer ---

function openDrawer(nodeId) {
  activeNodeId = nodeId;
  const node = findNode(nodeId);
  if (!node) return;

  const isDone = !!progress[nodeId];

  // Status
  const statusEl = document.getElementById('drawer-status');
  statusEl.textContent = isDone ? 'Complete' : 'Pending';
  statusEl.className = `drawer-status ${isDone ? 'done' : 'pending'}`;

  // Content
  document.getElementById('drawer-title').textContent = node.title;
  document.getElementById('drawer-description').textContent = node.description;

  // Resources
  const resourcesEl = document.getElementById('drawer-resources');
  if (node.resources && node.resources.length > 0) {
    resourcesEl.innerHTML = `
      <h3>Resources</h3>
      <ul class="resource-list">
        ${node.resources.map(r => `
          <li class="resource-item">
            <span class="resource-badge ${r.type}">${r.type}</span>
            <a class="resource-link" href="${r.url}" target="_blank" rel="noopener">${r.title}</a>
          </li>
        `).join('')}
      </ul>
    `;
  } else {
    resourcesEl.innerHTML = '';
  }

  // Try it
  const tryitEl = document.getElementById('drawer-tryit');
  if (node.tryIt) {
    tryitEl.innerHTML = `
      <h3>Try it</h3>
      <div class="tryit-box">${node.tryIt}</div>
    `;
  } else {
    tryitEl.innerHTML = '';
  }

  // Guide
  const guideEl = document.getElementById('drawer-guide');
  guideEl.innerHTML = '<div class="guide-loading">Loading guide...</div>';
  loadGuide(nodeId).then(html => {
    if (activeNodeId === nodeId) {
      guideEl.innerHTML = html || '';
    }
  });

  // Toggle button
  const toggleEl = document.getElementById('drawer-toggle');
  toggleEl.textContent = isDone ? 'Mark as incomplete' : 'Mark as complete';
  toggleEl.className = `btn-toggle-status ${isDone ? 'is-done' : ''}`;

  // Open
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
}

// --- Guide loader ---

async function loadGuide(nodeId) {
  if (guideCache[nodeId]) return guideCache[nodeId];

  try {
    const res = await fetch(`guides/${nodeId}.md`);
    if (!res.ok) return '';
    const md = await res.text();
    // Skip the first heading (redundant with drawer title)
    const trimmed = md.replace(/^#\s+.+\n+/, '');
    const html = `<div class="guide-content">${renderMarkdown(trimmed)}</div>`;
    guideCache[nodeId] = html;
    return html;
  } catch {
    return '';
  }
}

// --- Lightweight markdown renderer ---

function renderMarkdown(md) {
  let html = '';
  const lines = md.split('\n');
  let i = 0;
  let inList = false;
  let inCode = false;
  let codeBlock = '';
  let codeLang = '';

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code blocks
    if (line.startsWith('```')) {
      if (inCode) {
        html += `<pre><code>${escapeHtml(codeBlock.trimEnd())}</code></pre>`;
        codeBlock = '';
        codeLang = '';
        inCode = false;
      } else {
        if (inList) { html += '</ul>'; inList = false; }
        inCode = true;
        codeLang = line.slice(3).trim();
      }
      i++;
      continue;
    }

    if (inCode) {
      codeBlock += line + '\n';
      i++;
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{2,4})\s+(.+)/);
    if (headingMatch) {
      if (inList) { html += '</ul>'; inList = false; }
      const level = headingMatch[1].length;
      html += `<h${level} class="guide-h${level}">${inlineFormat(headingMatch[2])}</h${level}>`;
      i++;
      continue;
    }

    // List items
    if (line.match(/^[-*]\s+/)) {
      if (!inList) { html += '<ul>'; inList = true; }
      html += `<li>${inlineFormat(line.replace(/^[-*]\s+/, ''))}</li>`;
      i++;
      continue;
    }

    // Numbered list items
    if (line.match(/^\d+\.\s+/)) {
      // Use ul styling for simplicity
      if (!inList) { html += '<ol>'; inList = true; }
      html += `<li>${inlineFormat(line.replace(/^\d+\.\s+/, ''))}</li>`;
      i++;
      continue;
    }

    // Close list if non-list line
    if (inList && line.trim() === '') {
      html += inList ? (html.includes('<ol>') ? '</ol>' : '</ul>') : '';
      inList = false;
      i++;
      continue;
    }

    // Paragraph
    if (line.trim()) {
      if (inList) { html += '</ul>'; inList = false; }
      html += `<p>${inlineFormat(line)}</p>`;
    }

    i++;
  }

  if (inList) html += '</ul>';
  if (inCode) html += `<pre><code>${escapeHtml(codeBlock.trimEnd())}</code></pre>`;

  return html;
}

function inlineFormat(text) {
  return text
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function closeDrawer() {
  activeNodeId = null;
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
}

function toggleNodeStatus() {
  if (!activeNodeId) return;

  if (progress[activeNodeId]) {
    delete progress[activeNodeId];
  } else {
    progress[activeNodeId] = true;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  render();
  openDrawer(activeNodeId); // refresh drawer state
}

// --- Helpers ---

function findNode(id) {
  for (const track of data.tracks) {
    const node = track.nodes.find(n => n.id === id);
    if (node) return node;
  }
  return null;
}

function updateTotalProgress() {
  const total = data.tracks.reduce((sum, t) => sum + t.nodes.length, 0);
  const done = Object.keys(progress).length;
  const pct = total > 0 ? (done / total) * 100 : 0;

  document.getElementById('total-progress').style.width = `${pct}%`;
  document.getElementById('total-label').textContent = `${done} / ${total} complete`;

  if (done === total && total > 0) {
    celebrate();
  }
}

// --- Celebration ---

let hasShownCelebration = false;

function celebrate() {
  if (hasShownCelebration) return;
  hasShownCelebration = true;

  // Confetti burst
  const canvas = document.createElement('canvas');
  canvas.id = 'confetti-canvas';
  canvas.style.cssText = 'position:fixed;inset:0;z-index:200;pointer-events:none;';
  document.body.appendChild(canvas);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');

  const colors = ['#d63400', '#e0e1d0', '#26201d', '#ff6233', '#c2c3ab', '#f0f1e3'];
  const particles = [];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 200,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -18 - 4,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      gravity: 0.25 + Math.random() * 0.15,
      drag: 0.98,
      opacity: 1,
      shape: Math.random() > 0.5 ? 'rect' : 'circle'
    });
  }

  let frame = 0;
  function animateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.vy += p.gravity;
      p.vx *= p.drag;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.rotationSpeed;

      if (frame > 60) p.opacity -= 0.015;
      if (p.opacity <= 0) return;
      alive = true;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillStyle = p.color;

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    });

    frame++;
    if (alive && frame < 180) {
      requestAnimationFrame(animateConfetti);
    } else {
      canvas.remove();
    }
  }
  requestAnimationFrame(animateConfetti);

  // Show completion message
  setTimeout(() => {
    const toast = document.createElement('div');
    toast.className = 'celebration-toast';
    toast.innerHTML = `
      <div class="celebration-icon">&#10024;</div>
      <div class="celebration-text">
        <strong>You've completed your roadmap.</strong>
        <span>Your OS is fully operational. Now make it yours.</span>
      </div>
    `;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 500);
    }, 5000);
  }, 600);
}

// --- Event listeners ---

document.getElementById('drawer-close').addEventListener('click', closeDrawer);
document.getElementById('drawer-overlay').addEventListener('click', closeDrawer);
document.getElementById('drawer-toggle').addEventListener('click', toggleNodeStatus);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
});

// --- Go ---

init();
