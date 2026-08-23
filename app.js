/**
 * BandoPlug Community & Forum - Interactive Engine
 */

// Initial Seed Topics for FiveM & Community Forum
const INITIAL_TOPICS = [
  {
    id: 1,
    category: 'anunturi',
    title: '🔥 [DESCHIDERE] BandoPlug v2.0 - Noua Eră a Roleplay-ului Românesc',
    author: 'Seek (Founder & Owner)',
    date: 'Astăzi la 10:30',
    content: `Salutare tuturor membrilor BandoPlug!

Ne bucurăm să vă anunțăm lansarea versiunii oficiale **BandoPlug v2.0**! După săptămâni de muncă intensivă și optimizare alături de Ghost și întreaga echipă, serverul este deschis publicului cu:
- Sistem avansat de Gang-uri și Carteluri cu baze customizate și teritorii controlabile
- Economie realistă și echilibrată (salarii ajustate, afaceri gestionate de jucători)
- Grafică și vehicule exclusive optimizate pentru 0 lag
- Peste 150+ haine și accesorii unice stil urban/streetwear
- Sistem anticheat de ultimă generație

Vă așteptăm pe server! Pentru probleme sau suport, folosiți canalul nostru de Discord: https://discord.gg/8cR9EA48US`,
    views: 1420,
    pinned: true,
    replies: [
      { author: 'Ghost (Owner)', date: 'Astăzi la 10:35', content: 'Bun venit tuturor! Let\'s build the best community.' },
      { author: 'Kroxx (Developer)', date: 'Astăzi la 10:45', content: 'Pregătiți pentru cel mai tare roleplay! Ne vedem pe străzi.' },
      { author: 'Vance_99', date: 'Astăzi la 11:10', content: 'Felicitări pentru munca depusă, arată genial serverul!' }
    ]
  },
  {
    id: 2,
    category: 'anunturi',
    title: '📋 [GHID] Ghidul Începătorului & Cum să te Conectezi pe Server',
    author: 'Alex_Plug (Head Admin)',
    date: 'Ieri la 18:00',
    content: `Pentru a vă conecta pe serverul BandoPlug FiveM:
1. Deschideți FiveM și apăsați tasta F8
2. Tastați comanda: connect play.bandoplug.ro
3. Asigurați-vă că aveți contul de Discord și Steam deschise în fundal
4. Citiți cu atenție regulamentul din secțiunea dedicată de pe forum înainte de a începe roleplay-ul!`,
    views: 890,
    pinned: true,
    replies: [
      { author: 'Speedy_RP', date: 'Ieri la 19:20', content: 'Foarte util pentru cei noi, mulțumim!' }
    ]
  },
  {
    id: 3,
    category: 'generale',
    title: '📸 [MEDIA] Poze și Momente Memorabile de pe Server',
    author: 'StreetKing',
    date: 'Astăzi la 09:15',
    content: `Postați aici cele mai tari screenshot-uri, clipuri de la urmăriri sau roleplay cinematic pe care le-ați făcut pe BandoPlug! Respectați bunul simț și nu postați conținut toxic.`,
    views: 310,
    pinned: false,
    replies: [
      { author: 'GhostRider', date: 'Astăzi la 09:40', content: 'O să postez câteva cadre de la ultimul car meet în seara asta!' }
    ]
  },
  {
    id: 4,
    category: 'ganguri',
    title: '💀 [GANG] Aplicație Înregistrare Gang - "Northside Hustlers"',
    author: 'Lil_Bando',
    date: 'Astăzi la 08:50',
    content: `Numele Gang-ului: Northside Hustlers
Lider: Marcus 'Bando' Taylor
Membri Activi: 7
Teritoriu Solicitat: Forum Drive / Davis
Lore: O grupare apărută în cartierele din sud dedicate traficului de mașini și protecției locale.
Suntem gata pentru testul de roleplay administrativ.`,
    views: 245,
    pinned: false,
    replies: [
      { author: 'Alex_Plug (Head Admin)', date: 'Astăzi la 10:15', content: 'Aplicație luată în considerare. Vă așteptăm pe Discord la camera de testare gang-uri.' }
    ]
  },
  {
    id: 5,
    category: 'departamente',
    title: '🚔 [LSPD] Regulament Intern și Conduită Departamentală',
    author: 'Chief_Miller',
    date: '2 zile în urmă',
    content: `Toți ofițerii de poliție activi din cadrul Los Santos Police Department au obligația de a purta stația radio pe frecvența 1 și de a respecta codul 10-4 în timpul patrulelor. Nu se tolerează corupția fără aprobare prealabilă de la Staff.`,
    views: 450,
    pinned: true,
    replies: [
      { author: 'Officer_Smith', date: '2 zile în urmă', content: 'Am luat la cunoștință. 10-4!' }
    ]
  },
  {
    id: 6,
    category: 'rapoarte',
    title: '⚠️ [RECLAMAȚIE] Model Oficial pentru Reclamație Jucător / Staff',
    author: 'Alex_Plug',
    date: '3 zile în urmă',
    content: `Pentru ca o reclamație să fie validă, trebuie să conțineți:
- Numele dvs. IC:
- ID-ul jucătorului reclamat:
- Ora și data incidentului:
- Regula încălcată (RDM, VDM, FailRP, etc.):
- Dovadă video clară (YouTube / Medal / Streamable - minim 1 minut fără editări):`,
    views: 520,
    pinned: true,
    replies: []
  },
  {
    id: 7,
    category: 'sugestii',
    title: '💡 [SUGESTIE] Adăugare sistem de pescuit sportiv și concursuri pe weekend',
    author: 'Fisherman_Dan',
    date: 'Ieri la 14:30',
    content: `Ar fi foarte mișto dacă s-ar adăuga un job secundar de pescuit cu momeli diferite, bărci închiriabile și un clasament săptămânal cu premii în bani IC pentru cel mai mare pește prins!`,
    views: 180,
    pinned: false,
    replies: [
      { author: 'Kroxx (Developer)', date: 'Ieri la 16:00', content: 'Idee foarte bună, o avem deja în plan pentru update-ul v2.1!' },
      { author: 'Seek (Founder)', date: 'Ieri la 16:45', content: '+1, aprobat!' }
    ]
  }
];

// Current State
let currentTopics = [];
let currentCategoryFilter = 'all';
let currentViewingTopicId = null;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadTopics();
  renderTopics();
  setupEventListeners();
  updateStats();
});

// Load from LocalStorage or use default
function loadTopics() {
  const saved = localStorage.getItem('bandoplug_topics_v2');
  if (saved) {
    try {
      currentTopics = JSON.parse(saved);
    } catch (e) {
      currentTopics = [...INITIAL_TOPICS];
    }
  } else {
    currentTopics = [...INITIAL_TOPICS];
    saveTopics();
  }
}

function saveTopics() {
  localStorage.setItem('bandoplug_topics_v2', JSON.stringify(currentTopics));
}

// Render topics into respective categories
function renderTopics(filteredList = null) {
  const listToRender = filteredList || currentTopics;

  const categories = ['anunturi', 'generale', 'ganguri', 'departamente', 'rapoarte', 'sugestii'];

  categories.forEach(cat => {
    const container = document.getElementById(`list-${cat}`);
    if (!container) return;

    const groupCard = container.closest('.forum-section-card');
    const catTopics = listToRender.filter(t => t.category === cat);

    // If filtering by specific pill
    if (currentCategoryFilter !== 'all' && currentCategoryFilter !== cat) {
      if (groupCard) groupCard.style.display = 'none';
      return;
    } else {
      if (groupCard) groupCard.style.display = 'block';
    }

    if (catTopics.length === 0) {
      container.innerHTML = `
        <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 13px;">
          <i class="fa-solid fa-inbox" style="font-size: 24px; margin-bottom: 8px; display: block; opacity: 0.5;"></i>
          Nu există discuții active în această categorie momentan. Fii primul care deschide un topic!
        </div>
      `;
      return;
    }

    container.innerHTML = catTopics.map(topic => `
      <div class="topic-row" onclick="viewTopicDetail(${topic.id})">
        <div class="topic-icon">
          <i class="fa-solid ${getCategoryIcon(topic.category)}"></i>
        </div>
        <div class="topic-details">
          <h4>
            ${topic.pinned ? '<span class="badge-pinned"><i class="fa-solid fa-thumbtack"></i> PINNED</span>' : ''}
            ${escapeHtml(topic.title)}
          </h4>
          <div class="topic-meta">
            <span><i class="fa-solid fa-user text-red"></i> ${escapeHtml(topic.author)}</span>
            <span><i class="fa-regular fa-clock"></i> ${escapeHtml(topic.date)}</span>
            <span><i class="fa-regular fa-eye"></i> ${topic.views} vizualizări</span>
          </div>
        </div>
        <div class="topic-stats">
          <div class="topic-stat-box">
            <strong>${topic.replies ? topic.replies.length : 0}</strong>
            <small>Răspunsuri</small>
          </div>
          <i class="fa-solid fa-chevron-right" style="color: var(--text-muted); font-size: 12px;"></i>
        </div>
      </div>
    `).join('');
  });

  updateStats();
}

function getCategoryIcon(cat) {
  switch (cat) {
    case 'anunturi': return 'fa-bullhorn';
    case 'generale': return 'fa-comments';
    case 'ganguri': return 'fa-skull';
    case 'departamente': return 'fa-shield-halved';
    case 'rapoarte': return 'fa-triangle-exclamation';
    case 'sugestii': return 'fa-lightbulb';
    default: return 'fa-message';
  }
}

// Category Pill Filter
function selectCategory(category, buttonEl) {
  currentCategoryFilter = category;
  document.querySelectorAll('.category-pills .pill').forEach(btn => btn.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');
  filterTopics();
}

// Search Filter
function filterTopics() {
  const query = document.getElementById('forumSearch').value.toLowerCase().trim();
  
  let filtered = currentTopics;

  if (currentCategoryFilter !== 'all') {
    filtered = filtered.filter(t => t.category === currentCategoryFilter);
  }

  if (query) {
    filtered = filtered.filter(t => 
      t.title.toLowerCase().includes(query) || 
      t.content.toLowerCase().includes(query) ||
      t.author.toLowerCase().includes(query)
    );
  }

  renderTopics(filtered);
}

// View switcher (Home, Forum, Regulament, Aplicatii, Status)
function switchView(viewName) {
  document.querySelectorAll('.app-view').forEach(view => view.classList.remove('active-view'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewName}`);
  const hero = document.getElementById('heroSection');

  if (viewName === 'home') {
    document.getElementById('view-forum').classList.add('active-view');
    if (hero) hero.style.display = 'block';
    const navLink = document.querySelector('.nav-link[href="#home"]');
    if (navLink) navLink.classList.add('active');
  } else if (targetView) {
    targetView.classList.add('active-view');
    if (hero) hero.style.display = 'none';
    const navLink = document.querySelector(`.nav-link[href="#${viewName}"]`);
    if (navLink) navLink.classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Modal Handlers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active-modal');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active-modal');
}

function openNewPostModal() {
  openModal('newPostModal');
}

function openLoginModal() {
  openModal('loginModal');
}

// View Topic Detail
function viewTopicDetail(id) {
  const topic = currentTopics.find(t => t.id === id);
  if (!topic) return;

  currentViewingTopicId = id;
  topic.views += 1;
  saveTopics();

  document.getElementById('modalTopicTitle').innerText = topic.title;
  document.getElementById('modalCategoryBadge').innerText = topic.category.toUpperCase();
  document.getElementById('modalAuthorName').innerText = topic.author;
  document.getElementById('modalPostDate').innerText = topic.date;
  document.getElementById('modalPostContent').innerText = topic.content;
  document.getElementById('modalAuthorAvatar').innerText = topic.author.substring(0, 2).toUpperCase();

  renderModalReplies(topic.replies || []);
  openModal('topicDetailModal');
}

function renderModalReplies(replies) {
  const list = document.getElementById('modalRepliesList');
  document.getElementById('replyCount').innerText = replies.length;

  if (replies.length === 0) {
    list.innerHTML = `<div style="color: var(--text-muted); font-size: 13px; text-align: center; padding: 10px;">Fii primul care lasă un răspuns!</div>`;
    return;
  }

  list.innerHTML = replies.map(r => `
    <div class="reply-item">
      <div class="reply-item-header">
        <strong>${escapeHtml(r.author)}</strong>
        <span class="text-muted">${escapeHtml(r.date)}</span>
      </div>
      <div style="color: var(--text-main); font-size: 13.5px;">${escapeHtml(r.content)}</div>
    </div>
  `).join('');
}

// Add reply
function handleAddReply(e) {
  e.preventDefault();
  const authorInput = document.getElementById('replyAuthor');
  const contentInput = document.getElementById('replyContent');

  const author = authorInput.value.trim();
  const content = contentInput.value.trim();

  if (!author || !content || !currentViewingTopicId) return;

  const topic = currentTopics.find(t => t.id === currentViewingTopicId);
  if (topic) {
    if (!topic.replies) topic.replies = [];
    topic.replies.push({
      author: author,
      date: 'Chiar acum',
      content: content
    });
    saveTopics();
    renderModalReplies(topic.replies);
    contentInput.value = '';
    showToast('Răspunsul tău a fost publicat cu succes!', 'success');
    renderTopics();
  }
}

// Create new topic
function handleCreateTopic(e) {
  e.preventDefault();
  const title = document.getElementById('topicTitle').value.trim();
  const category = document.getElementById('topicCategory').value;
  const author = document.getElementById('authorName').value.trim();
  const content = document.getElementById('topicContent').value.trim();

  if (!title || !author || !content) return;

  const newTopic = {
    id: Date.now(),
    category: category,
    title: title,
    author: author,
    date: 'Chiar acum',
    content: content,
    views: 1,
    pinned: false,
    replies: []
  };

  currentTopics.unshift(newTopic);
  saveTopics();
  renderTopics();
  closeModal('newPostModal');
  document.getElementById('newTopicForm').reset();
  showToast('Topic nou creat pe forumul BandoPlug!', 'success');
}

// Apply Form Modal
function openApplyForm(type) {
  document.getElementById('applyType').value = type;
  document.getElementById('applyModalTitle').innerText = `Aplicație: ${type}`;
  openModal('applyModal');
}

function handleApplicationSubmit(e) {
  e.preventDefault();
  const type = document.getElementById('applyType').value;
  const realName = document.getElementById('applicantRealName').value.trim();
  const discord = document.getElementById('applicantDiscord').value.trim();
  const rpName = document.getElementById('applicantRPName').value.trim();

  closeModal('applyModal');
  document.getElementById('submitApplicationForm').reset();

  showToast(`Aplicația pentru "${type}" a fost trimisă cu succes către conducerea BandoPlug!`, 'success');
}

// Login simulation
function mockLoginSuccess() {
  closeModal('loginModal');
  document.getElementById('userBtnLabel').innerText = 'Profil (Conectat)';
  showToast('Te-ai conectat cu succes prin Discord!', 'success');
}

// Toast notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid fa-circle-check text-red" style="font-size: 18px;"></i>
    <div>${message}</div>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Update stats numbers
function updateStats() {
  const totalTopics = currentTopics.length;
  const totalReplies = currentTopics.reduce((acc, cur) => acc + (cur.replies ? cur.replies.length : 0), 0);

  const topicsStatEl = document.getElementById('statTopics');
  const sidebarTopicsEl = document.getElementById('sidebarTotalTopics');

  if (topicsStatEl) topicsStatEl.innerText = (1280 + totalTopics).toLocaleString();
  if (sidebarTopicsEl) sidebarTopicsEl.innerText = totalTopics.toString();
}

function refreshServerStats() {
  showToast('Statistici server actualizate cu succes!', 'success');
}

// Setup general event listeners
function setupEventListeners() {
  // Copy IP button
  const copyBtn = document.getElementById('copyIpBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('connect play.bandoplug.ro');
      showToast('IP Server (connect play.bandoplug.ro) copiat în clipboard!', 'success');
    });
  }

  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '75px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = 'var(--bg-surface)';
        navMenu.style.padding = '20px';
        navMenu.style.borderBottom = '1px solid var(--border-color)';
      }
    });
  }
}

// Escape html helper
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
