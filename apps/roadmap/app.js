// ------------------------------------------------
// GitHub OS Roadmap
// ------------------------------------------------

const STORAGE_KEY = 'github-os-progress';
let data = null;
let progress = {};
let activeNodeId = null;

// --- Init ---

async function init() {
  progress = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const res = await fetch('data/roadmap.json');
  data = await res.json();
  render();
}

// --- Render ---

function render() {
  const roadmap = document.getElementById('roadmap');
  roadmap.innerHTML = '';

  data.tracks.forEach(track => {
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

    roadmap.appendChild(trackEl);
  });

  // Attach click handlers
  document.querySelectorAll('.node').forEach(el => {
    el.addEventListener('click', () => openDrawer(el.dataset.id));
  });

  updateTotalProgress();
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

  // Toggle button
  const toggleEl = document.getElementById('drawer-toggle');
  toggleEl.textContent = isDone ? 'Mark as incomplete' : 'Mark as complete';
  toggleEl.className = `btn-toggle-status ${isDone ? 'is-done' : ''}`;

  // Open
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
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
