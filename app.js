/**
 * BandoPlug Community & Forum - Interactive Engine & Owner Admin System
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
    author: 'Ghost (Owner)',
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
      { author: 'Seek (Founder & Owner)', date: 'Astăzi la 10:15', content: 'Aplicație luată în considerare. Vă așteptăm pe Discord la camera de testare gang-uri.' }
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
let currentApplications = [];
let currentCategoryFilter = 'all';
let currentViewingTopicId = null;
let currentUser = null; // { name, role: 'owner'|'member', tag }

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadAuthUser();
  loadTopics();
  loadApplications();
  renderTopics();
  setupEventListeners();
  updateStats();
  updateAuthUI();
});

// Load auth state
function loadAuthUser() {
  const savedUser = localStorage.getItem('bandoplug_user');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
    } catch (e) {
      currentUser = null;
    }
  }
}

function saveAuthUser(user) {
  currentUser = user;
  if (user) {
    localStorage.setItem('bandoplug_user', JSON.stringify(user));
  } else {
    localStorage.removeItem('bandoplug_user');
  }
  updateAuthUI();
}

function updateAuthUI() {
  const userBtnLabel = document.getElementById('userBtnLabel');
  const navAdminLink = document.getElementById('navAdminLink');
  const authorInput = document.getElementById('authorName');
  const replyAuthorInput = document.getElementById('replyAuthor');

  if (currentUser) {
    if (currentUser.role === 'owner') {
      if (userBtnLabel) userBtnLabel.innerHTML = `<span class="text-gold">👑 ${currentUser.name}</span>`;
      if (navAdminLink) navAdminLink.style.display = 'flex';
      if (authorInput) authorInput.value = `${currentUser.name} (Founder & Owner)`;
      if (replyAuthorInput) replyAuthorInput.value = `${currentUser.name} (Owner)`;
    } else {
      if (userBtnLabel) userBtnLabel.innerText = currentUser.name;
      if (navAdminLink) navAdminLink.style.display = 'none';
      if (authorInput) authorInput.value = currentUser.name;
      if (replyAuthorInput) replyAuthorInput.value = currentUser.name;
    }
  } else {
    if (userBtnLabel) userBtnLabel.innerText = 'Conectare';
    if (navAdminLink) navAdminLink.style.display = 'none';
  }
}

// Switch tabs in Login Modal
function switchAuthTab(tab) {
  const memberBtn = document.getElementById('tabMemberBtn');
  const ownerBtn = document.getElementById('tabOwnerBtn');
  const memberPane = document.getElementById('authMemberPane');
  const ownerPane = document.getElementById('authOwnerPane');

  if (tab === 'member') {
    memberBtn.classList.add('active');
    ownerBtn.classList.remove('active');
    memberPane.classList.add('active');
    ownerPane.classList.remove('active');
  } else {
    ownerBtn.classList.add('active');
    memberBtn.classList.remove('active');
    ownerPane.classList.add('active');
    memberPane.classList.remove('active');
  }
}

// Member Login
function handleMemberLogin() {
  const nameInput = document.getElementById('memberLoginName');
  const name = nameInput.value.trim() || 'Membru_Bando';
  
  saveAuthUser({
    name: name,
    role: 'member',
    tag: '@' + name.toLowerCase()
  });

  closeModal('loginModal');
  showToast(`Bun venit, ${name}! Te-ai conectat ca membru.`, 'success');
}

// Owner Login (Seek or Ghost)
function handleOwnerLogin() {
  const selectedOwner = document.getElementById('ownerSelectUser').value;
  const pinInput = document.getElementById('ownerPinCode').value.trim();

  // Validare PIN (acceptă bando2026 sau acces direct de la Seek/Ghost)
  if (pinInput && pinInput !== 'bando2026' && pinInput !== 'seek' && pinInput !== 'ghost') {
    showToast('PIN incorect! Folosește codul de acces autorizat.', 'error');
    return;
  }

  const ownerData = {
    name: selectedOwner,
    role: 'owner',
    tag: selectedOwner === 'Seek' ? '@seekmao' : '@ghost'
  };

  saveAuthUser(ownerData);
  closeModal('loginModal');
  showToast(`👑 Autentificare reușită! Bine ai venit, Owner ${selectedOwner}! Ai acces total la Panou.`, 'success');
  renderAdminApplications();
  switchView('admin');
}

// Logout
function handleLogout() {
  saveAuthUser(null);
  switchView('home');
  showToast('Te-ai deconectat cu succes.', 'info');
}

// Load from LocalStorage or use default
function loadTopics() {
  const saved = localStorage.getItem('bandoplug_topics_v3');
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
  localStorage.setItem('bandoplug_topics_v3', JSON.stringify(currentTopics));
}

// Applications Management
function loadApplications() {
  const saved = localStorage.getItem('bandoplug_applications');
  if (saved) {
    try {
      currentApplications = JSON.parse(saved);
    } catch (e) {
      currentApplications = [];
    }
  } else {
    // Initial sample application for test
    currentApplications = [
      {
        id: 101,
        type: 'Staff / Helper',
        realName: 'Marius, 17 ani',
        discord: '@marius_rp',
        rpName: 'Marco Bellini',
        reason: 'Sunt activ zilnic peste 5 ore, am fost moderator pe alte 2 comunități mari de FiveM și știu regulamentul pe de rost.',
        date: 'Azi la 11:00',
        status: 'pending'
      }
    ];
    saveApplications();
  }
}

function saveApplications() {
  localStorage.setItem('bandoplug_applications', JSON.stringify(currentApplications));
  renderAdminApplications();
}

function renderAdminApplications() {
  const list = document.getElementById('adminApplicationsList');
  const countBadge = document.getElementById('adminAppsCount');
  if (!list) return;

  if (countBadge) countBadge.innerText = currentApplications.length;

  if (currentApplications.length === 0) {
    list.innerHTML = `<div style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 13px;">Nu există aplicații noi în așteptare.</div>`;
    return;
  }

  list.innerHTML = currentApplications.map(app => `
    <div class="app-review-card">
      <div class="app-review-header">
        <h4>${escapeHtml(app.type)} — <span style="color: var(--primary-red);">${escapeHtml(app.rpName)}</span></h4>
        <span class="app-badge-status ${app.status}">${app.status === 'pending' ? 'În Așteptare' : (app.status === 'approved' ? 'Aprobat' : 'Respins')}</span>
      </div>
      <div class="app-review-meta">
        <span><i class="fa-solid fa-user"></i> ${escapeHtml(app.realName)}</span>
        <span><i class="fa-brands fa-discord text-blurple"></i> ${escapeHtml(app.discord)}</span>
        <span><i class="fa-regular fa-clock"></i> ${escapeHtml(app.date)}</span>
      </div>
      <div class="app-review-reason">
        ${escapeHtml(app.reason)}
      </div>
      <div class="app-review-actions">
        <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 12px;" onclick="ownerDeleteApp(${app.id})">
          <i class="fa-solid fa-trash"></i> Șterge
        </button>
        <button class="btn btn-red-glow" style="padding: 6px 12px; font-size: 12px;" onclick="ownerSetAppStatus(${app.id}, 'rejected')">
          <i class="fa-solid fa-xmark"></i> Respinge
        </button>
        <button class="btn btn-green" style="padding: 6px 12px; font-size: 12px;" onclick="ownerSetAppStatus(${app.id}, 'approved')">
          <i class="fa-solid fa-check"></i> Aprobă
        </button>
      </div>
    </div>
  `).join('');
}

function ownerSetAppStatus(appId, status) {
  const app = currentApplications.find(a => a.id === appId);
  if (app) {
    app.status = status;
    saveApplications();
    showToast(`Aplicația a fost marcată ca "${status === 'approved' ? 'Aprobată' : 'Respinsă'}" de către Owner!`, 'success');
  }
}

function ownerDeleteApp(appId) {
  currentApplications = currentApplications.filter(a => a.id !== appId);
  saveApplications();
  showToast('Aplicație ștearsă din listă.', 'info');
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

// View switcher
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

  if (viewName === 'admin') {
    renderAdminApplications();
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

function openNewPostModal(preselectedCategory = null) {
  if (preselectedCategory) {
    document.getElementById('topicCategory').value = preselectedCategory;
  }
  openModal('newPostModal');
}

function openLoginModal() {
  if (currentUser) {
    if (currentUser.role === 'owner') {
      switchView('admin');
      showToast(`Ești deja conectat ca Owner (${currentUser.name})!`, 'info');
    } else {
      showToast(`Ești conectat ca ${currentUser.name}.`, 'info');
    }
  } else {
    openModal('loginModal');
  }
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

  // Show Owner controls if logged in as owner
  const ownerControls = document.getElementById('modalOwnerControls');
  const btnPinLabel = document.getElementById('btnPinLabel');
  if (currentUser && currentUser.role === 'owner') {
    if (ownerControls) ownerControls.style.display = 'flex';
    if (btnPinLabel) btnPinLabel.innerText = topic.pinned ? 'Anulează Fixare (Unpin)' : 'Fixează (PIN)';
  } else {
    if (ownerControls) ownerControls.style.display = 'none';
  }

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

// Owner actions on current topic
function ownerTogglePinCurrentTopic() {
  if (!currentViewingTopicId || !currentUser || currentUser.role !== 'owner') return;
  const topic = currentTopics.find(t => t.id === currentViewingTopicId);
  if (topic) {
    topic.pinned = !topic.pinned;
    saveTopics();
    renderTopics();
    const btnPinLabel = document.getElementById('btnPinLabel');
    if (btnPinLabel) btnPinLabel.innerText = topic.pinned ? 'Anulează Fixare (Unpin)' : 'Fixează (PIN)';
    showToast(`Topicul a fost ${topic.pinned ? 'FIXAT în top' : 'DEZACTIVAT din top'} de către Owner!`, 'success');
  }
}

function ownerDeleteCurrentTopic() {
  if (!currentViewingTopicId || !currentUser || currentUser.role !== 'owner') return;
  currentTopics = currentTopics.filter(t => t.id !== currentViewingTopicId);
  saveTopics();
  renderTopics();
  closeModal('topicDetailModal');
  showToast('👑 Topicul a fost ȘTERS de către conducere!', 'success');
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

  const isOwnerPosting = currentUser && currentUser.role === 'owner';

  const newTopic = {
    id: Date.now(),
    category: category,
    title: title,
    author: author,
    date: 'Chiar acum',
    content: content,
    views: 1,
    pinned: isOwnerPosting && category === 'anunturi',
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
  const reason = document.getElementById('applicantReason').value.trim();

  const newApp = {
    id: Date.now(),
    type: type,
    realName: realName,
    discord: discord,
    rpName: rpName,
    reason: reason,
    date: 'Astăzi la ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    status: 'pending'
  };

  currentApplications.unshift(newApp);
  saveApplications();

  closeModal('applyModal');
  document.getElementById('submitApplicationForm').reset();

  showToast(`Aplicația pentru "${type}" a fost trimisă cu succes către conducerea BandoPlug!`, 'success');
}

// Owner controls: update displayed player counter & top announcement
function adminUpdatePlayers() {
  const count = document.getElementById('adminPlayerCountInput').value.trim();
  if (!count) return;
  const statEl = document.getElementById('statPlayers');
  if (statEl) statEl.innerText = `${count} / 250`;
  showToast(`Contorul de jucători a fost setat la ${count} / 250!`, 'success');
}

function adminUpdateAlert() {
  const alertText = document.getElementById('adminAlertInput').value.trim();
  if (!alertText) return;
  const topText = document.querySelector('.top-text');
  if (topText) {
    topText.innerHTML = `<strong>ANUNȚ CONDUCERE:</strong> ${escapeHtml(alertText)}`;
  }
  showToast('Mesajul de alertă din bara superioară a fost actualizat!', 'success');
}

function adminResetForumDefault() {
  if (confirm('Ești sigur că vrei să resetezi forumul la postările implicite?')) {
    currentTopics = [...INITIAL_TOPICS];
    saveTopics();
    renderTopics();
    showToast('Forumul a fost resetat la valorile inițiale.', 'info');
  }
}

// Toast notification
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="fa-solid ${type === 'error' ? 'fa-triangle-exclamation text-red' : (type === 'success' ? 'fa-circle-check text-green' : 'fa-circle-info text-gold')}" style="font-size: 18px;"></i>
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
  const copyBtn = document.getElementById('copyIpBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('connect play.bandoplug.ro');
      showToast('IP Server (connect play.bandoplug.ro) copiat în clipboard!', 'success');
    });
  }

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

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
