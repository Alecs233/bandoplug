/**
 * BandoPlug Community & Forum - XenForo Engine, Strict Permissions & Full Categories
 */

// Initial Seed Topics for BandoPlug FiveM Hierarchy
const INITIAL_TOPICS = [
  // 1. Server Information
  {
    id: 1,
    category: 'anunturi',
    parentGroup: 'server-info',
    title: '🔥 [DESCHIDERE] BandoPlug v2.0 - Noua Eră a Roleplay-ului Românesc',
    author: 'Seek',
    authorUsername: 'seekmao',
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
      { author: 'Ghost', authorUsername: 'ghost', date: 'Astăzi la 10:35', content: 'Bun venit tuturor! Let\'s build the best community.' },
      { author: 'Kroxx', authorUsername: 'kroxx', date: 'Astăzi la 10:45', content: 'Pregătiți pentru cel mai tare roleplay! Ne vedem pe străzi.' },
      { author: 'Vance_99', authorUsername: 'vance_99', date: 'Astăzi la 11:10', content: 'Felicitări pentru munca depusă, arată genial serverul!' }
    ]
  },
  {
    id: 2,
    category: 'regulament-server',
    parentGroup: 'server-info',
    title: '📜 [REGULAMENT] Regulamentul Oficial al Serverului BandoPlug FiveM',
    author: 'Ghost',
    authorUsername: 'ghost',
    date: 'Ieri la 18:00',
    content: `Regulamentul oficial BandoPlug Roleplay:
1. Păstrarea caracterului (In Character) este obligatorie în orice moment pe server.
2. RDM (Random Deathmatch) și VDM (Vehicle Deathmatch) sunt strict interzise și se pedepsesc cu Ban Permanent.
3. Este obligatoriu să respectați Fear RP când viața personajului vă este pusă în pericol direct.
4. MetaGaming (MG) și PowerGaming (PG) atrag sancțiuni aspre.
5. Respectați toți jucătorii și membrii echipei Staff.`,
    views: 890,
    pinned: true,
    replies: [
      { author: 'Speedy_RP', authorUsername: 'speedy', date: 'Ieri la 19:20', content: 'Foarte clar explicat, respectat de toată lumea!' }
    ]
  },
  {
    id: 3,
    category: 'ghid-rp',
    parentGroup: 'server-info',
    title: '📘 [GHID] Ghid Roleplay pentru Începători & Comenzi Esențiale (/me, /do)',
    author: 'Kroxx',
    authorUsername: 'kroxx',
    date: 'Ieri la 16:40',
    content: `Cum se folosesc comenzile de Roleplay corect:
- **/me** descrie o acțiune a personajului (ex: /me scoate portofelul din buzunar și numără banii).
- **/do** descrie starea sau mediul înconjurător (ex: /do actele sunt în torpedoul mașinii?).
Nu folosiți /do pentru a forța decizii asupra altor jucători (PowerGaming)!`,
    views: 640,
    pinned: false,
    replies: [
      { author: 'Alex_Plug', authorUsername: 'alex_plug', date: 'Ieri la 17:00', content: 'Util pentru oricine vrea să facă RP calitativ!' }
    ]
  },
  {
    id: 4,
    category: 'server-showcase',
    parentGroup: 'server-info',
    title: '🎥 [SHOWCASE] Prezentare Sisteme Custom: Garaje, Tuning & Carteluri',
    author: 'Seek',
    authorUsername: 'seekmao',
    date: '2 zile în urmă',
    content: `Am pregătit un mic showcase cu noile sisteme implementate exclusiv pe BandoPlug:
- Sistem de tuning dinamic cu sunete motor reale
- Camere de supraveghere live pentru LSPD
- Telefoane mobile inteligente cu apeluri video și aplicații bancare securizate!`,
    views: 1120,
    pinned: false,
    replies: []
  },
  {
    id: 5,
    category: 'aplicatii-staff',
    parentGroup: 'server-info',
    title: '🛡️ [RECRUTARE] Aplicații Deschise pentru Echipa Staff / Helper',
    author: 'Ghost',
    authorUsername: 'ghost',
    date: '2 zile în urmă',
    content: `Căutăm persoane mature, calme și dedicate pentru a se alătura echipei Staff BandoPlug!
Cerințe minime:
- Vârsta minimă: 16 ani
- Activitate zilnică de minim 3-4 ore
- Cunoașterea perfectă a regulamentului
Trimiteți aplicația din secțiunea dedicată de pe site!`,
    views: 750,
    pinned: true,
    replies: []
  },

  // 2. In Character (IC)
  {
    id: 6,
    category: 'screenshots-gallery',
    parentGroup: 'in-character',
    title: '📸 [MEDIA] Poze și Momente Memorabile de la Ultimul Car Meet în Los Santos',
    author: 'StreetKing',
    authorUsername: 'streetking',
    date: 'Astăzi la 09:15',
    content: `Câteva cadre senzaționale de aseară din parcarea de la Legion Square! Peste 30 de mașini modificate și roleplay curat. Postați și voi pozele voastre aici!`,
    views: 310,
    pinned: false,
    replies: [
      { author: 'GhostRider', authorUsername: 'ghostrider', date: 'Astăzi la 09:40', content: 'Super atmosfera, ne vedem și diseară!' }
    ]
  },
  {
    id: 7,
    category: 'povesti-character',
    parentGroup: 'in-character',
    title: '📖 [LORE] Povestea lui Marcus Vance - De pe străzile din Davis la Los Santos',
    author: 'Marcus_V',
    authorUsername: 'marcus_v',
    date: 'Ieri la 12:10',
    content: `Născut în cartierul Davis, Marcus a învățat de mic regulile străzii. După ce a lucrat câțiva ani ca mecanic la un atelier local, a decis să își deschidă propria afacere alături de prietenii săi din copilărie...`,
    views: 280,
    pinned: false,
    replies: []
  },
  {
    id: 8,
    category: 'business-ic',
    parentGroup: 'in-character',
    title: '💼 [AFACERE] Deschiderea Service-ului Auto & Tuning "Bando Customs"',
    author: 'BandoMechanic',
    authorUsername: 'bandomechanic',
    date: 'Ieri la 14:00',
    content: `Vă așteptăm zilnic între orele 14:00 - 02:00 la Bando Customs pentru:
- Schimb ulei și reparații complete caroserie
- Upgrade performanță (Motor, Turbo, Frâne de curse)
- Vopsitorie custom și folii geamuri. Oferim garanție pentru toate lucrările!`,
    views: 420,
    pinned: false,
    replies: [
      { author: 'Speedy_RP', authorUsername: 'speedy', date: 'Ieri la 15:30', content: 'Cea mai bună echipă de mecanici din oraș!' }
    ]
  },

  // 3. Facțiuni Legale
  {
    id: 9,
    category: 'guvern-reports',
    parentGroup: 'factiuni-legale',
    title: '🏛️ [GUVERN] Model Oficial Rapoarte de Activitate & Ședințe Guvernamentale',
    author: 'Governor_Vance',
    authorUsername: 'gov_vance',
    date: '3 zile în urmă',
    content: `Toate departamentele legale au obligația de a depune raportul săptămânal de activitate până duminică la ora 20:00. Fondurile bugetare vor fi alocate în funcție de performanță.`,
    views: 390,
    pinned: true,
    replies: []
  },
  {
    id: 10,
    category: 'lspd',
    parentGroup: 'factiuni-legale',
    title: '🚔 [LSPD] Regulament Intern și Conduită Departamentală LSPD',
    author: 'Chief_Miller',
    authorUsername: 'chief_miller',
    date: '2 zile în urmă',
    content: `Toți ofițerii de poliție activi din cadrul Los Santos Police Department au obligația de a purta stația radio pe frecvența 1 și de a respecta codul 10-4 în timpul patrulelor. Mențineți un Roleplay exemplar.`,
    views: 520,
    pinned: true,
    replies: [
      { author: 'Officer_Smith', authorUsername: 'smith', date: '2 zile în urmă', content: 'Am luat la cunoștință. 10-4!' }
    ]
  },
  {
    id: 11,
    category: 'ems',
    parentGroup: 'factiuni-legale',
    title: '🚑 [EMS] Protocol Medical de Urgență & Recrutări Medici Spital Pillbox',
    author: 'Dr_Elena',
    authorUsername: 'dr_elena',
    date: '2 zile în urmă',
    content: `Departamentul Medical din Los Santos recrutează paramedici și medici rezidenți. Salariu atractiv, program flexibil și echipament modern. Aplicați pe forum!`,
    views: 460,
    pinned: false,
    replies: []
  },

  // 4. Gang-uri & Ilegale
  {
    id: 12,
    category: 'ganguri-non-oficiale',
    parentGroup: 'ganguri',
    title: '💀 [GANG] Prezentare Gruparea "Southside Hustlers" - Davis Bloc',
    author: 'Lil_Bando',
    authorUsername: 'lil_bando',
    date: 'Astăzi la 08:50',
    content: `Numele Grupării: Southside Hustlers
Lider: Marcus 'Bando' Taylor
Membri Activi: 6
Teritoriu: Davis
Obiectiv: Protejarea cartierului și afaceri locale de stradă.`,
    views: 340,
    pinned: false,
    replies: [
      { author: 'Seek', authorUsername: 'seekmao', date: 'Astăzi la 10:15', content: 'Succes cu gruparea! Respectați regulamentul ilegal.' }
    ]
  },
  {
    id: 13,
    category: 'ganguri-oficiale',
    parentGroup: 'ganguri',
    title: '👑 [CARTEL OFICIAL] Cartelul "La Familia" - Regulament Teritorii & Conduită',
    author: 'Don_Salieri',
    authorUsername: 'don_salieri',
    date: '3 zile în urmă',
    content: `Statut oficial confirmat de conducere. Teritoriu controlat: Vinewood Hills & Port. Orice intrare neautorizată în zonă se taxează conform legilor cartelului.`,
    views: 710,
    pinned: true,
    replies: []
  },
  {
    id: 14,
    category: 'cerere-gang',
    parentGroup: 'ganguri',
    title: '📝 [MODEL] Model Oficial Cerere Înregistrare Gang / Facțiune Ilegală',
    author: 'Ghost',
    authorUsername: 'ghost',
    date: '3 zile în urmă',
    content: `Modelul obligatoriu pentru cerere gang:
1. Nume Gang & Culoare:
2. Nume Lider (IC & Discord):
3. Poveste & Istoric (Lore min. 100 cuvinte):
4. Membri inițiali (Minim 5):
5. Teritoriu solicitat:`,
    views: 620,
    pinned: true,
    replies: []
  },
  {
    id: 15,
    category: 'ghid-gang',
    parentGroup: 'ganguri',
    title: '📕 [GHID] Ghid Complet Gang Roleplay: Jafuri, Războaie & Inițieri',
    author: 'Seek',
    authorUsername: 'seekmao',
    date: '3 zile în urmă',
    content: `Reguli esențiale pentru facțiunile ilegale:
- Jafurile de bancă și magazin necesită minim 3 polițiști activi pe server.
- Războaiele de gang se anunță cu minim 2 ore înainte pe Discord.
- Respectați Fear RP și Roleplay-ul de frică atunci când sunteți ostatici!`,
    views: 890,
    pinned: true,
    replies: [
      { author: 'Kroxx', authorUsername: 'kroxx', date: '3 zile în urmă', content: 'Lectură obligatorie pentru toți membrii ilegali.' }
    ]
  }
];

// All category IDs list
const ALL_CATEGORIES = [
  'regulament-server', 'ghid-rp', 'server-showcase', 'anunturi', 'aplicatii-staff',
  'screenshots-gallery', 'povesti-character', 'business-ic',
  'guvern-reports', 'lspd', 'ems',
  'ganguri-non-oficiale', 'ganguri-oficiale', 'cerere-gang', 'ghid-gang'
];

// State
let currentTopics = [];
let currentApplications = [];
let currentCategoryGroupFilter = 'all';
let currentViewingTopicId = null;
let currentUser = null;
let selectedTempAvatar = 'bandoplug.png';

// Init
document.addEventListener('DOMContentLoaded', () => {
  loadAuthUser();
  loadTopics();
  loadApplications();
  renderTopics();
  setupEventListeners();
  updateStats();
  updateAuthUI();
});

// Accounts DB in LocalStorage
function getRegisteredAccounts() {
  const saved = localStorage.getItem('bandoplug_accounts_xf');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return {};
    }
  }
  return {};
}

function saveRegisteredAccounts(accounts) {
  localStorage.setItem('bandoplug_accounts_xf', JSON.stringify(accounts));
}

function isOwnerUsername(username) {
  const clean = username.toLowerCase().replace(/[@#]/g, '').trim();
  return ['seekmao', 'seek', 'ghost', 'ghostmao'].includes(clean);
}

function loadAuthUser() {
  const savedUser = localStorage.getItem('bandoplug_user_xf');
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
    localStorage.setItem('bandoplug_user_xf', JSON.stringify(user));
  } else {
    localStorage.removeItem('bandoplug_user_xf');
  }
  updateAuthUI();
}

function updateAuthUI() {
  const loggedOutGroup = document.getElementById('authLoggedOutGroup');
  const loggedInWrapper = document.getElementById('authLoggedInUser');
  const navAdminLink = document.getElementById('navAdminLink');
  const dropdownAdminLink = document.getElementById('dropdownAdminLink');
  const authorInput = document.getElementById('authorName');
  const replyAuthorInput = document.getElementById('replyAuthor');
  const guestLoginView = document.getElementById('view-guest-login');
  const forumView = document.getElementById('view-forum');
  const heroSection = document.getElementById('heroSection');

  if (currentUser) {
    if (loggedOutGroup) loggedOutGroup.style.display = 'none';
    if (loggedInWrapper) loggedInWrapper.style.display = 'flex';
    if (guestLoginView) guestLoginView.style.display = 'none';
    if (heroSection) heroSection.style.display = 'none';

    const navAvatar = document.getElementById('navUserAvatar');
    const navName = document.getElementById('navUserName');
    const dropAvatar = document.getElementById('dropdownAvatarImg');
    const dropName = document.getElementById('dropdownName');
    const dropTag = document.getElementById('dropdownTag');
    const dropBadge = document.getElementById('dropdownRoleBadge');

    if (navAvatar) navAvatar.src = currentUser.avatar || 'bandoplug.png';
    if (navName) navName.innerText = currentUser.name;
    if (dropAvatar) dropAvatar.src = currentUser.avatar || 'bandoplug.png';
    if (dropName) dropName.innerText = currentUser.name;
    if (dropTag) dropTag.innerHTML = `<i class="fa-brands fa-discord text-blurple"></i> @${currentUser.username}`;

    if (currentUser.role === 'owner') {
      if (dropBadge) {
        dropBadge.className = 'role-badge badge-owner';
        dropBadge.innerText = 'FOUNDER & OWNER';
      }
      if (navAdminLink) navAdminLink.style.display = 'flex';
      if (dropdownAdminLink) dropdownAdminLink.style.display = 'flex';
    } else {
      if (dropBadge) {
        dropBadge.className = 'role-badge badge-dev';
        dropBadge.innerText = 'MEMBRU VERIFICAT';
      }
      if (navAdminLink) navAdminLink.style.display = 'none';
      if (dropdownAdminLink) dropdownAdminLink.style.display = 'none';
    }

    if (authorInput) {
      authorInput.value = currentUser.name;
      authorInput.readOnly = true;
    }
    if (replyAuthorInput) {
      replyAuthorInput.value = currentUser.name;
      replyAuthorInput.readOnly = true;
    }
  } else {
    if (loggedOutGroup) loggedOutGroup.style.display = 'flex';
    if (loggedInWrapper) loggedInWrapper.style.display = 'none';
    if (navAdminLink) navAdminLink.style.display = 'none';
    if (heroSection) heroSection.style.display = 'none';
    if (guestLoginView) guestLoginView.style.display = 'block';
    if (forumView) forumView.classList.remove('active-view');
  }
}

function checkInlineOwnerInput(val) {
  const row = document.getElementById('inlineOwnerPinRow');
  if (row) {
    row.style.display = isOwnerUsername(val) ? 'grid' : 'none';
  }
}

function handleInlineLogin(e) {
  e.preventDefault();
  const userInput = document.getElementById('inlineLoginUser');
  const passInput = document.getElementById('inlineLoginPass');
  const ownerPinInput = document.getElementById('inlineOwnerPin');

  const rawUser = userInput ? userInput.value.trim() : '';
  const password = passInput ? passInput.value.trim() : '';

  if (!rawUser || !password) return;

  const accounts = getRegisteredAccounts();
  const searchKey = rawUser.toLowerCase().replace(/[@#]/g, '').trim();

  let account = accounts[searchKey];
  if (!account) {
    account = Object.values(accounts).find(acc => acc.email === searchKey);
  }

  const isOwnerAttempt = isOwnerUsername(searchKey);

  if (isOwnerAttempt) {
    const pin = ownerPinInput ? ownerPinInput.value.trim() : '';
    if (pin !== OWNER_SECRET_PIN && password !== OWNER_SECRET_PIN) {
      showToast('⛔ PIN de Owner incorect! Numele de conducere sunt protejate.', 'error');
      return;
    }
  }

  if (!account && isOwnerAttempt) {
    const displayName = searchKey.includes('seek') ? 'Seek' : 'Ghost';
    account = {
      username: searchKey,
      displayName: displayName,
      email: `${searchKey}@bandoplug.ro`,
      password: password,
      role: 'owner',
      avatar: 'bandoplug.png',
      bio: 'Fondator & Conducere Oficială BandoPlug RP.',
      joinedDate: 'Astăzi'
    };
    accounts[searchKey] = account;
    saveRegisteredAccounts(accounts);
  }

  if (!account) {
    showToast(`Contul cu numele/emailul "${rawUser}" nu există! Te rugăm să apeși pe "Register now" pentru a crea un cont.`, 'error');
    openRegisterModal();
    const regUser = document.getElementById('regXfUsername');
    if (regUser) regUser.value = rawUser;
    return;
  }

  if (account.password !== password && !isOwnerAttempt) {
    showToast('Parolă incorectă! Te rugăm să încerci din nou.', 'error');
    return;
  }

  const isOwner = account.role === 'owner' || isOwnerAttempt;
  const sessionUser = {
    name: account.displayName || account.username,
    username: account.username,
    email: account.email || `${account.username}@bandoplug.ro`,
    role: isOwner ? 'owner' : 'member',
    avatar: account.avatar || 'bandoplug.png',
    bio: account.bio || 'Membru BandoPlug.',
    tag: '@' + account.username.toLowerCase(),
    joinedDate: account.joinedDate || 'Azi'
  };

  saveAuthUser(sessionUser);
  const form = document.getElementById('inlineLoginForm');
  if (form) form.reset();

  if (isOwner) {
    showToast(`👑 Bine ai revenit, Owner ${sessionUser.name}!`, 'success');
  } else {
    showToast(`Te-ai conectat cu succes! Bun venit, ${sessionUser.name}.`, 'success');
  }

  switchView('forum');
}

// User Dropdown in Nav
function toggleUserDropdown(e) {
  e.stopPropagation();
  const menu = document.getElementById('userDropdownMenu');
  if (menu) menu.classList.toggle('active');
}

function closeUserDropdown() {
  const menu = document.getElementById('userDropdownMenu');
  if (menu) menu.classList.remove('active');
}

document.addEventListener('click', (e) => {
  const wrapper = document.getElementById('authLoggedInUser');
  if (wrapper && !wrapper.contains(e.target)) {
    closeUserDropdown();
  }
});

// Modals Trigger
function openLoginModal() {
  closeModal('registerModal');
  openModal('loginModal');
}

function openRegisterModal() {
  closeModal('loginModal');
  openModal('registerModal');
}

function togglePassVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = '<i class="fa-regular fa-eye-slash"></i> Hide';
  } else {
    input.type = 'password';
    btn.innerHTML = '<i class="fa-regular fa-eye"></i> Show';
  }
}

const OWNER_USERNAMES = ['seekmao', 'seek', 'ghost', 'ghostmao'];
const OWNER_SECRET_PIN = 'bando2026'; // Cod Secret exclusiv pentru Seek & Ghost

function isOwnerUsername(username) {
  if (!username) return false;
  const clean = username.toLowerCase().replace(/[@#]/g, '').trim();
  return OWNER_USERNAMES.includes(clean);
}

// Check Discord OAuth redirected from real Discord in URL hash
function checkDiscordOAuthRedirect() {
  const hash = window.location.hash;
  if (hash && hash.includes('access_token=')) {
    const params = new URLSearchParams(hash.substring(1));
    const token = params.get('access_token');
    if (token) {
      window.history.replaceState(null, null, window.location.pathname);
      showToast('Se verifică autentificarea securizată Discord...', 'info');
      fetch('https://discord.com/api/users/@me', {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then(res => res.json())
      .then(data => {
        if (data && data.username) {
          authenticateDiscordUserData(data.username, data.avatar ? `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png` : 'bandoplug.png', data.email);
        }
      })
      .catch(() => {
        showToast('Nu s-a putut conecta la Discord API.', 'error');
      });
    }
  }
}

// Interactive Discord OAuth Trigger
function handleFastDiscordRegister() {
  closeModal('loginModal');
  closeModal('registerModal');
  openModal('discordOAuthModal');
}

function checkDiscordOAuthOwnerCheck(val) {
  const group = document.getElementById('discordOwnerPinGroup');
  if (group) {
    group.style.display = isOwnerUsername(val) ? 'block' : 'none';
  }
}

function checkOwnerLoginInput(val) {
  const row = document.getElementById('ownerSecretRowLogin');
  if (row) {
    row.style.display = isOwnerUsername(val) ? 'grid' : 'none';
  }
}

// Execute Discord OAuth Verification
function handleExecuteDiscordOAuth(e) {
  e.preventDefault();
  const userInput = document.getElementById('discordOAuthInputUser');
  const pinInput = document.getElementById('discordOAuthOwnerPin');

  const rawUser = userInput.value.trim();
  const validation = validateUsername(rawUser);

  if (!validation.valid) {
    showToast(validation.error, 'error');
    return;
  }

  const username = validation.clean;
  const isOwner = isOwnerUsername(username);

  // If user tries to claim Seek or Ghost
  if (isOwner) {
    const enteredPin = pinInput ? pinInput.value.trim() : '';
    if (enteredPin !== OWNER_SECRET_PIN) {
      showToast('⛔ Acces Respins! Numele de Owner (Seek & Ghost) necesită Codul Secret corect.', 'error');
      return;
    }
  }

  const avatar = 'bandoplug.png';
  const email = `${username}@discord.auth`;

  authenticateDiscordUserData(username, avatar, email, isOwner);
  closeModal('discordOAuthModal');
}

function authenticateDiscordUserData(username, avatar, email, isOwner = null) {
  const accounts = getRegisteredAccounts();
  const userKey = username.toLowerCase();
  if (isOwner === null) isOwner = isOwnerUsername(username);

  const displayName = isOwner ? (userKey.includes('seek') ? 'Seek' : 'Ghost') : username;
  const userRole = isOwner ? 'owner' : 'member';

  let account = accounts[userKey];
  if (!account) {
    account = {
      username: username,
      displayName: displayName,
      email: email || `${username}@discord.auth`,
      password: 'discord_verified_user',
      role: userRole,
      avatar: avatar || 'bandoplug.png',
      bio: isOwner ? 'Fondator & Conducere Oficială BandoPlug RP.' : `Membru verificat prin Discord (@${username}).`,
      joinedDate: 'Astăzi',
      createdAt: new Date().toISOString()
    };
    accounts[userKey] = account;
    saveRegisteredAccounts(accounts);
  }

  saveAuthUser({
    name: account.displayName || displayName,
    username: account.username,
    email: account.email,
    role: account.role || userRole,
    avatar: account.avatar || avatar,
    bio: account.bio,
    tag: '@' + account.username.toLowerCase(),
    joinedDate: account.joinedDate || 'Astăzi'
  });

  if (account.role === 'owner') {
    showToast(`👑 Autentificare Owner confirmată pentru ${account.displayName}!`, 'success');
    switchView('admin');
  } else {
    showToast(`Te-ai conectat cu succes prin Discord ca @${username}!`, 'success');
    renderProfileView();
    switchView('profile');
  }
}

let currentCaptchaCode = '7X9K';
let pendingRegistrationData = null;

function generateNewCaptcha() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length)) + (i < 3 ? ' ' : '');
  }
  currentCaptchaCode = result.replace(/\s/g, '');
  const display = document.getElementById('captchaDisplay');
  if (display) display.innerText = result;
}

function showGlobalGuestAlert(msg) {
  const banner = document.getElementById('globalGuestBanner');
  const bannerText = document.getElementById('globalGuestBannerText');
  const modalBanner = document.getElementById('modalGuestBanner');

  if (banner) {
    banner.style.display = 'flex';
    if (bannerText && msg) bannerText.innerText = msg;
    banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  if (modalBanner) {
    modalBanner.style.display = 'flex';
  }
}

// XenForo Registration Handler
function handleXenForoRegister(e) {
  e.preventDefault();
  const usernameInput = document.getElementById('regXfUsername');
  const emailInput = document.getElementById('regXfEmail');
  const passInput = document.getElementById('regXfPassword');
  const ownerPinInput = document.getElementById('regOwnerPin');

  const rawUsername = usernameInput ? usernameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
  const password = passInput ? passInput.value.trim() : '';

  if (!rawUsername || !email || !password) {
    showToast('Te rugăm să completezi toate câmpurile obligatorii!', 'error');
    return;
  }

  const validation = validateUsername(rawUsername);
  if (!validation.valid) {
    showToast(validation.error, 'error');
    return;
  }

  if (password.length < 4) {
    showToast('Parola trebuie să aibă minim 4 caractere!', 'error');
    return;
  }

  const username = validation.clean;
  const isOwner = isOwnerUsername(username);

  // Strict check: if registering as Seek or Ghost
  if (isOwner) {
    const ownerSecretRow = document.getElementById('ownerSecretRowRegister');
    if (ownerSecretRow && ownerSecretRow.style.display === 'none') {
      ownerSecretRow.style.display = 'grid';
      showToast('⚠️ Numele "seekmao" și "ghost" sunt rezervate conducerii! Introdu Codul Secret de Owner pentru a confirma.', 'info');
      return;
    }

    const pin = ownerPinInput ? ownerPinInput.value.trim() : '';
    if (pin !== OWNER_SECRET_PIN) {
      showToast('⛔ Codul Secret de Owner este incorect! Nu poți crea cont cu numele conducerii.', 'error');
      return;
    }
  }

  const accounts = getRegisteredAccounts();
  const userKey = username.toLowerCase();

  if (accounts[userKey]) {
    showToast(`Utilizatorul "${username}" este deja înregistrat! Te rugăm să te conectezi.`, 'error');
    openLoginModal();
    const loginUser = document.getElementById('loginXfUser');
    if (loginUser) loginUser.value = username;
    return;
  }

  const emailExists = Object.values(accounts).some(acc => acc.email === email);
  if (emailExists) {
    showToast(`Adresa de email "${email}" este deja asociată unui cont! Te rugăm să te conectezi.`, 'error');
    openLoginModal();
    return;
  }

  const userRole = isOwner ? 'owner' : 'member';
  const displayName = isOwner ? (userKey.includes('seek') ? 'Seek' : 'Ghost') : username;
  const avatar = 'bandoplug.png';
  const bio = isOwner ? 'Fondator & Conducere Oficială BandoPlug FiveM Roleplay.' : 'Nou membru înregistrat pe forumul oficial BandoPlug.';

  const newAccount = {
    username: username,
    displayName: displayName,
    email: email,
    password: password,
    role: userRole,
    avatar: avatar,
    bio: bio,
    joinedDate: 'Astăzi',
    createdAt: new Date().toISOString()
  };

  accounts[userKey] = newAccount;
  saveRegisteredAccounts(accounts);

  const sessionUser = {
    name: displayName,
    username: username,
    email: email,
    role: userRole,
    avatar: avatar,
    bio: bio,
    tag: '@' + username.toLowerCase(),
    joinedDate: 'Astăzi'
  };

  saveAuthUser(sessionUser);
  closeModal('registerModal');
  const form = document.getElementById('xfRegisterForm');
  if (form) form.reset();

  const banner = document.getElementById('globalGuestBanner');
  if (banner) banner.style.display = 'none';

  showToast(`🎉 Felicitări, ${displayName}! Contul tău a fost creat și activat cu succes.`, 'success');

  if (isOwner) {
    showToast(`👑 Rol de OWNER activat pentru ${displayName}!`, 'success');
    switchView('admin');
  } else {
    renderProfileView();
    switchView('profile');
  }
}

// XenForo Log In Handler
function handleXenForoLogin(e) {
  e.preventDefault();
  const userInput = document.getElementById('loginXfUser');
  const passInput = document.getElementById('loginXfPass');
  const ownerPinInput = document.getElementById('loginOwnerPin');

  const rawUser = userInput.value.trim();
  const password = passInput.value.trim();

  if (!rawUser || !password) return;

  const accounts = getRegisteredAccounts();
  const searchKey = rawUser.toLowerCase().replace(/[@#]/g, '').trim();

  let account = accounts[searchKey];
  if (!account) {
    account = Object.values(accounts).find(acc => acc.email === searchKey);
  }

  const isOwnerAttempt = isOwnerUsername(searchKey);

  // If logging in as Owner, enforce security check
  if (isOwnerAttempt) {
    const ownerSecretRow = document.getElementById('ownerSecretRowLogin');
    if (ownerSecretRow && ownerSecretRow.style.display === 'none') {
      ownerSecretRow.style.display = 'grid';
      showToast('⚠️ Introdu Codul Secret de Owner pentru a confirma identitatea!', 'info');
      return;
    }

    const pin = ownerPinInput ? ownerPinInput.value.trim() : '';
    if (pin !== OWNER_SECRET_PIN && password !== OWNER_SECRET_PIN) {
      showToast('⛔ PIN de Owner incorect! Accesul la conturile conducerii este restricționat.', 'error');
      return;
    }
  }

  if (!account && isOwnerAttempt) {
    // Auto-create verified owner session
    const displayName = searchKey.includes('seek') ? 'Seek' : 'Ghost';
    account = {
      username: searchKey,
      displayName: displayName,
      email: `${searchKey}@bandoplug.ro`,
      password: password,
      role: 'owner',
      avatar: 'bandoplug.png',
      bio: 'Fondator & Conducere Oficială BandoPlug RP.',
      joinedDate: 'Astăzi'
    };
    accounts[searchKey] = account;
    saveRegisteredAccounts(accounts);
  }

  if (!account) {
    showToast(`Contul cu numele/emailul "${rawUser}" nu există! Te rugăm să te înregistrezi.`, 'error');
    openRegisterModal();
    document.getElementById('regXfUsername').value = rawUser;
    return;
  }

  if (account.password !== password && !isOwnerAttempt) {
    showToast('Parolă incorectă! Te rugăm să încerci din nou.', 'error');
    return;
  }

  const isOwner = account.role === 'owner' || isOwnerAttempt;
  const sessionUser = {
    name: account.displayName || account.username,
    username: account.username,
    email: account.email || `${account.username}@bandoplug.ro`,
    role: isOwner ? 'owner' : 'member',
    avatar: account.avatar || 'bandoplug.png',
    bio: account.bio || 'Membru BandoPlug.',
    tag: '@' + account.username.toLowerCase(),
    joinedDate: account.joinedDate || 'Azi'
  };

  saveAuthUser(sessionUser);
  closeModal('loginModal');
  document.getElementById('xfLoginForm').reset();

  const banner = document.getElementById('globalGuestBanner');
  if (banner) banner.style.display = 'none';

  if (isOwner) {
    showToast(`👑 Bine ai revenit, Owner ${sessionUser.name}!`, 'success');
    switchView('admin');
  } else {
    showToast(`Te-ai conectat cu succes! Bun venit, ${sessionUser.name}.`, 'success');
    renderProfileView();
    switchView('profile');
  }
}
  const sessionUser = {
    name: account.displayName || account.username,
    username: account.username,
    email: account.email || `${account.username}@bandoplug.ro`,
    role: isOwner ? 'owner' : 'member',
    avatar: account.avatar || 'bandoplug.png',
    bio: account.bio || 'Membru BandoPlug.',
    tag: '@' + account.username.toLowerCase(),
    joinedDate: account.joinedDate || 'Azi'
  };

  saveAuthUser(sessionUser);
  closeModal('loginModal');
  document.getElementById('xfLoginForm').reset();

  if (isOwner) {
    showToast(`👑 Bine ai revenit, Owner ${sessionUser.name}!`, 'success');
    switchView('admin');
  } else {
    showToast(`Te-ai conectat cu succes! Bun venit, ${sessionUser.name}.`, 'success');
    renderProfileView();
    switchView('profile');
  }
}

// Fast Discord Register Simulation
function handleFastDiscordRegister() {
  const promptUser = prompt('Introdu Tag-ul tău de Discord (ex: seekmao, ghost, alex_rp):', 'seekmao');
  if (!promptUser) return;

  const validation = validateUsername(promptUser);
  if (!validation.valid) {
    showToast(validation.error, 'error');
    return;
  }

  const username = validation.clean;
  const accounts = getRegisteredAccounts();
  const userKey = username.toLowerCase();

  let account = accounts[userKey];
  if (!account) {
    const isOwner = isOwnerUsername(username);
    const displayName = isOwner ? (userKey.includes('seek') ? 'Seek' : 'Ghost') : username;
    account = {
      username: username,
      displayName: displayName,
      email: `${username}@discord.auth`,
      password: 'discord_verified_user',
      role: isOwner ? 'owner' : 'member',
      avatar: 'bandoplug.png',
      bio: `Cont verificat prin Discord (${username}).`,
      joinedDate: 'Astăzi',
      createdAt: new Date().toISOString()
    };
    accounts[userKey] = account;
    saveRegisteredAccounts(accounts);
  }

  saveAuthUser({
    name: account.displayName,
    username: account.username,
    email: account.email,
    role: account.role,
    avatar: account.avatar,
    bio: account.bio,
    tag: '@' + account.username.toLowerCase(),
    joinedDate: account.joinedDate
  });

  closeModal('loginModal');
  closeModal('registerModal');
  showToast(`Conectat direct prin Discord ca @${username}!`, 'success');
  renderProfileView();
  switchView('profile');
}

// Logout
function handleLogout() {
  saveAuthUser(null);
  switchView('home');
  showToast('Te-ai deconectat cu succes.', 'info');
}

// ==========================================
// PROFILE VIEW LOGIC
// ==========================================
function renderProfileView() {
  if (!currentUser) return;

  const displayNameEl = document.getElementById('profileDisplayName');
  const roleBadgeEl = document.getElementById('profileRoleBadge');
  const discordTagEl = document.getElementById('profileDiscordTag');
  const emailMetaEl = document.getElementById('profileEmailMeta');
  const bioEl = document.getElementById('profileBio');
  const avatarImgEl = document.getElementById('profileAvatarImg');
  const statusBoxAvatar = document.getElementById('statusBoxAvatar');

  if (displayNameEl) displayNameEl.innerText = currentUser.name;
  if (discordTagEl) discordTagEl.innerHTML = `<i class="fa-brands fa-discord text-blurple"></i> @${currentUser.username}`;
  if (emailMetaEl) emailMetaEl.innerHTML = `<i class="fa-regular fa-envelope"></i> ${currentUser.email || 'email@verificat.com'}`;
  if (bioEl) bioEl.innerText = currentUser.bio || 'Fără descriere adăugată încă.';
  if (avatarImgEl) avatarImgEl.src = currentUser.avatar || 'bandoplug.png';
  if (statusBoxAvatar) statusBoxAvatar.src = currentUser.avatar || 'bandoplug.png';

  if (roleBadgeEl) {
    if (currentUser.role === 'owner') {
      roleBadgeEl.className = 'role-badge badge-owner';
      roleBadgeEl.innerText = 'FOUNDER & OWNER';
    } else {
      roleBadgeEl.className = 'role-badge badge-dev';
      roleBadgeEl.innerText = 'MEMBRU VERIFICAT';
    }
  }

  // Count user topics and replies
  const userKey = currentUser.username.toLowerCase();
  const myTopics = currentTopics.filter(t => (t.authorUsername && t.authorUsername.toLowerCase() === userKey) || t.author.toLowerCase().includes(currentUser.name.toLowerCase()));
  
  let myReplies = [];
  currentTopics.forEach(t => {
    if (t.replies) {
      t.replies.forEach(r => {
        if ((r.authorUsername && r.authorUsername.toLowerCase() === userKey) || r.author.toLowerCase().includes(currentUser.name.toLowerCase())) {
          myReplies.push({ ...r, topicTitle: t.title, topicId: t.id });
        }
      });
    }
  });

  const statTopicsEl = document.getElementById('profileStatTopics');
  if (statTopicsEl) statTopicsEl.innerText = myTopics.length;

  const dropMsgCount = document.getElementById('dropdownMsgCount');
  if (dropMsgCount) dropMsgCount.innerText = (myTopics.length + myReplies.length).toString();

  // About pane details
  const aboutUser = document.getElementById('aboutUsername');
  const aboutDisc = document.getElementById('aboutDiscord');
  const aboutMail = document.getElementById('aboutEmail');
  const aboutRole = document.getElementById('aboutRole');
  if (aboutUser) aboutUser.innerText = currentUser.name;
  if (aboutDisc) aboutDisc.innerText = `@${currentUser.username}`;
  if (aboutMail) aboutMail.innerText = currentUser.email || `${currentUser.username}@bandoplug.ro`;
  if (aboutRole) aboutRole.innerText = currentUser.role === 'owner' ? 'Founder & Owner' : 'Membru Verificat';

  // Render My Topics
  const topicsContainer = document.getElementById('myTopicsListContainer');
  if (topicsContainer) {
    if (myTopics.length === 0) {
      topicsContainer.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 13.5px;">Nu ai creat niciun topic încă pe forum.</div>`;
    } else {
      topicsContainer.innerHTML = myTopics.map(topic => `
        <div class="topic-row" onclick="viewTopicDetail(${topic.id})">
          <div class="topic-icon"><i class="fa-solid ${getCategoryIcon(topic.category)}"></i></div>
          <div class="topic-details">
            <h4>${escapeHtml(topic.title)}</h4>
            <div class="topic-meta">
              <span><i class="fa-regular fa-clock"></i> ${escapeHtml(topic.date)}</span>
              <span><i class="fa-regular fa-eye"></i> ${topic.views} vizualizări</span>
            </div>
          </div>
          <div class="topic-stats">
            <div class="topic-stat-box"><strong>${topic.replies ? topic.replies.length : 0}</strong><small>Răspunsuri</small></div>
          </div>
        </div>
      `).join('');
    }
  }

  // Render My Replies
  const repliesContainer = document.getElementById('myRepliesListContainer');
  if (repliesContainer) {
    if (myReplies.length === 0) {
      repliesContainer.innerHTML = `<div style="text-align: center; padding: 24px; color: var(--text-muted); font-size: 13.5px;">Nu ai trimis niciun răspuns încă.</div>`;
    } else {
      repliesContainer.innerHTML = myReplies.map(r => `
        <div class="reply-item" style="cursor: pointer;" onclick="viewTopicDetail(${r.topicId})">
          <div class="reply-item-header">
            <strong>Răspuns la: ${escapeHtml(r.topicTitle)}</strong>
            <span class="text-muted">${escapeHtml(r.date)}</span>
          </div>
          <div style="color: var(--text-main); font-size: 13.5px;">${escapeHtml(r.content)}</div>
        </div>
      `).join('');
    }
  }
}

function switchProfileTab(tab) {
  const topicsBtn = document.getElementById('tabMyTopicsBtn');
  const repliesBtn = document.getElementById('tabMyRepliesBtn');
  const aboutBtn = document.getElementById('tabMyAboutBtn');
  const paneTopics = document.getElementById('paneMyTopics');
  const paneReplies = document.getElementById('paneMyReplies');
  const paneAbout = document.getElementById('paneMyAbout');

  [topicsBtn, repliesBtn, aboutBtn].forEach(b => b && b.classList.remove('active'));
  [paneTopics, paneReplies, paneAbout].forEach(p => p && p.classList.remove('active'));

  if (tab === 'topics') {
    if (topicsBtn) topicsBtn.classList.add('active');
    if (paneTopics) paneTopics.classList.add('active');
  } else if (tab === 'replies') {
    if (repliesBtn) repliesBtn.classList.add('active');
    if (paneReplies) paneReplies.classList.add('active');
  } else if (tab === 'about') {
    if (aboutBtn) aboutBtn.classList.add('active');
    if (paneAbout) paneAbout.classList.add('active');
  }
}

function handlePostProfileStatus() {
  const statusInput = document.getElementById('profileStatusInput');
  if (!statusInput) return;
  const text = statusInput.value.trim();
  if (!text || !currentUser) return;

  currentUser.bio = text;
  saveAuthUser(currentUser);

  const accounts = getRegisteredAccounts();
  const userKey = currentUser.username.toLowerCase();
  if (accounts[userKey]) {
    accounts[userKey].bio = text;
    saveRegisteredAccounts(accounts);
  }

  statusInput.value = '';
  renderProfileView();
  showToast('Statusul tău pe profil a fost actualizat!', 'success');
}

// Avatar Management
function openAvatarModal() {
  openModal('avatarModal');
}

function selectPresetAvatar(src, el) {
  selectedTempAvatar = src;
  document.querySelectorAll('.preset-avatar-img').forEach(img => img.classList.remove('selected'));
  if (el) el.classList.add('selected');
}

function saveNewAvatar() {
  const customUrl = document.getElementById('customAvatarUrlInput').value.trim();
  const newAvatar = customUrl || selectedTempAvatar;

  if (currentUser) {
    currentUser.avatar = newAvatar;
    saveAuthUser(currentUser);

    const accounts = getRegisteredAccounts();
    const userKey = currentUser.username.toLowerCase();
    if (accounts[userKey]) {
      accounts[userKey].avatar = newAvatar;
      saveRegisteredAccounts(accounts);
    }

    renderProfileView();
    closeModal('avatarModal');
    showToast('Poza de profil a fost schimbată!', 'success');
  }
}

// Edit Bio Modal
function openEditBioModal() {
  if (!currentUser) return;
  document.getElementById('editDisplayNameInput').value = currentUser.name;
  document.getElementById('editBioTextInput').value = currentUser.bio || '';
  openModal('editBioModal');
}

function handleSaveBio(e) {
  e.preventDefault();
  const newName = document.getElementById('editDisplayNameInput').value.trim();
  const newBio = document.getElementById('editBioTextInput').value.trim();

  if (!newName || !currentUser) return;

  currentUser.name = newName;
  currentUser.bio = newBio;
  saveAuthUser(currentUser);

  const accounts = getRegisteredAccounts();
  const userKey = currentUser.username.toLowerCase();
  if (accounts[userKey]) {
    accounts[userKey].displayName = newName;
    accounts[userKey].bio = newBio;
    saveRegisteredAccounts(accounts);
  }

  renderProfileView();
  closeModal('editBioModal');
  showToast('Profilul a fost salvat!', 'success');
}

// Topics & Forum Data
function loadTopics() {
  const saved = localStorage.getItem('bandoplug_topics_v5_hierarchy');
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
  localStorage.setItem('bandoplug_topics_v5_hierarchy', JSON.stringify(currentTopics));
}

function loadApplications() {
  const saved = localStorage.getItem('bandoplug_applications');
  if (saved) {
    try {
      currentApplications = JSON.parse(saved);
    } catch (e) {
      currentApplications = [];
    }
  } else {
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
    showToast(`Aplicația a fost marcată ca "${status === 'approved' ? 'Aprobată' : 'Respinsă'}"!`, 'success');
  }
}

function ownerDeleteApp(appId) {
  currentApplications = currentApplications.filter(a => a.id !== appId);
  saveApplications();
  showToast('Aplicație ștearsă din listă.', 'info');
}

// Render topics into categories
function renderTopics(filteredList = null) {
  const listToRender = filteredList || currentTopics;

  ALL_CATEGORIES.forEach(cat => {
    const container = document.getElementById(`list-${cat}`);
    if (!container) return;

    const groupCard = container.closest('.forum-section-card');
    const catTopics = listToRender.filter(t => t.category === cat);

    if (catTopics.length === 0) {
      container.innerHTML = `
        <div style="padding: 16px 20px; text-align: center; color: var(--text-muted); font-size: 13px;">
          Nu există discuții active în această categorie. Fii primul care deschide un topic!
        </div>
      `;
    } else {
      container.innerHTML = catTopics.map(topic => `
        <div class="topic-row" onclick="viewTopicDetail(${topic.id})">
          <div class="topic-icon"><i class="fa-solid ${getCategoryIcon(topic.category)}"></i></div>
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
            <div class="topic-stat-box"><strong>${topic.replies ? topic.replies.length : 0}</strong><small>Răspunsuri</small></div>
            <i class="fa-solid fa-chevron-right" style="color: var(--text-muted); font-size: 12px;"></i>
          </div>
        </div>
      `).join('');
    }
  });

  // Handle category group visibility
  document.querySelectorAll('.category-group-block').forEach(block => {
    const parent = block.getAttribute('data-parent-group');
    if (currentCategoryGroupFilter === 'all' || currentCategoryGroupFilter === parent) {
      block.style.display = 'flex';
    } else {
      block.style.display = 'none';
    }
  });

  updateStats();
}

function getCategoryIcon(cat) {
  switch (cat) {
    case 'anunturi': return 'fa-bullhorn';
    case 'regulament-server': return 'fa-book-skull';
    case 'ghid-rp': return 'fa-graduation-cap';
    case 'server-showcase': return 'fa-video';
    case 'aplicatii-staff': return 'fa-user-shield';
    case 'screenshots-gallery': return 'fa-camera-retro';
    case 'povesti-character': return 'fa-feather-pointed';
    case 'business-ic': return 'fa-briefcase';
    case 'guvern-reports': return 'fa-landmark';
    case 'lspd': return 'fa-building-shield';
    case 'ems': return 'fa-truck-medical';
    case 'ganguri-non-oficiale': return 'fa-skull-crossbones';
    case 'ganguri-oficiale': return 'fa-crown';
    case 'cerere-gang': return 'fa-file-pen';
    case 'ghid-gang': return 'fa-book-journal-whills';
    default: return 'fa-message';
  }
}

function getCategoryName(cat) {
  switch (cat) {
    case 'anunturi': return 'Anunțuri & Oficial';
    case 'regulament-server': return 'Regulament Server';
    case 'ghid-rp': return 'Ghid Roleplay';
    case 'server-showcase': return 'Server Showcase';
    case 'aplicatii-staff': return 'Aplicații Staff';
    case 'screenshots-gallery': return 'Screenshots Gallery';
    case 'povesti-character': return 'Povești Character';
    case 'business-ic': return 'Business IC';
    case 'guvern-reports': return 'Guvern & Rapoarte';
    case 'lspd': return 'LSPD - Poliție';
    case 'ems': return 'EMS - Paramedici';
    case 'ganguri-non-oficiale': return 'Gang-uri Non Oficiale';
    case 'ganguri-oficiale': return 'Gang-uri Oficiale';
    case 'cerere-gang': return 'Cerere Gang';
    case 'ghid-gang': return 'Ghid Gang Roleplay';
    default: return 'Discuție';
  }
}

// Category Pill Filter
function selectCategoryGroup(group, buttonEl) {
  currentCategoryGroupFilter = group;
  document.querySelectorAll('.category-pills .pill').forEach(btn => btn.classList.remove('active'));
  if (buttonEl) buttonEl.classList.add('active');
  filterTopics();
}

function filterTopics() {
  const query = document.getElementById('forumSearch').value.toLowerCase().trim();
  let filtered = currentTopics;

  if (query) {
    filtered = filtered.filter(t => 
      t.title.toLowerCase().includes(query) || 
      t.content.toLowerCase().includes(query) ||
      t.author.toLowerCase().includes(query)
    );
  }

  renderTopics(filtered);
}

function switchView(viewName) {
  if (!currentUser) {
    updateAuthUI();
    showToast('⚠️ Trebuie să fii conectat pe cont pentru a accesa această secțiune!', 'info');
    const input = document.getElementById('inlineLoginUser');
    if (input) input.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.remove('active-view');
    view.style.display = 'none';
  });
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

  const guestLoginView = document.getElementById('view-guest-login');
  if (guestLoginView) guestLoginView.style.display = 'none';

  let targetId = `view-${viewName}`;
  if (viewName === 'home' || viewName === 'forum') targetId = 'view-forum';

  const targetView = document.getElementById(targetId);
  if (targetView) {
    targetView.classList.add('active-view');
    targetView.style.display = 'block';
    const navLink = document.querySelector(`.nav-link[href="#${viewName}"]`);
    if (navLink) navLink.classList.add('active');
  }

  if (viewName === 'admin') {
    renderAdminApplications();
  }

  if (viewName === 'profile') {
    renderProfileView();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('active-modal');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('active-modal');
}

// STRICT PERMISSIONS: New Post Modal
function openNewPostModal(preselectedCategory = null) {
  if (!currentUser) {
    showGlobalGuestAlert('Trebuie să fii autentificat pe cont pentru a putea crea un topic!');
    openLoginModal();
    return;
  }

  const authorInput = document.getElementById('authorName');
  if (authorInput) {
    authorInput.value = currentUser.name;
    authorInput.readOnly = true;
  }

  if (preselectedCategory) {
    document.getElementById('topicCategory').value = preselectedCategory;
  }
  openModal('newPostModal');
}

function viewTopicDetail(id) {
  if (!currentUser) {
    showGlobalGuestAlert('Trebuie să fii autentificat pentru a citi această discuție de pe forum!');
    openLoginModal();
    return;
  }

  const topic = currentTopics.find(t => t.id === id);
  if (!topic) return;

  currentViewingTopicId = id;
  topic.views += 1;
  saveTopics();

  document.getElementById('modalTopicTitle').innerText = topic.title;
  document.getElementById('modalCategoryBadge').innerText = getCategoryName(topic.category).toUpperCase();
  document.getElementById('modalAuthorName').innerText = topic.author;
  document.getElementById('modalPostDate').innerText = topic.date;
  document.getElementById('modalPostContent').innerText = topic.content;
  document.getElementById('modalAuthorAvatar').innerText = topic.author.substring(0, 2).toUpperCase();

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
  } else {
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

  // Strict Permissions: Toggle Reply form vs Guest Alert
  const replyForm = document.getElementById('replyForm');
  const replyGuestAlert = document.getElementById('replyGuestAlert');
  if (currentUser) {
    if (replyForm) replyForm.style.display = 'block';
    if (replyGuestAlert) replyGuestAlert.style.display = 'none';
    const authorInput = document.getElementById('replyAuthor');
    if (authorInput) {
      authorInput.value = currentUser.name;
      authorInput.readOnly = true;
    }
  } else {
    if (replyForm) replyForm.style.display = 'none';
    if (replyGuestAlert) replyGuestAlert.style.display = 'flex';
  }
}

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

// STRICT PERMISSIONS: Add Reply Handler
function handleAddReply(e) {
  e.preventDefault();
  if (!currentUser) {
    showToast('⚠️ Trebuie să fii autentificat pentru a răspunde!', 'error');
    openLoginModal();
    return;
  }

  const contentInput = document.getElementById('replyContent');
  const content = contentInput.value.trim();

  if (!content || !currentViewingTopicId) return;

  const topic = currentTopics.find(t => t.id === currentViewingTopicId);
  if (topic) {
    if (!topic.replies) topic.replies = [];
    topic.replies.push({
      author: currentUser.name,
      authorUsername: currentUser.username,
      date: 'Chiar acum',
      content: content
    });
    saveTopics();
    renderModalReplies(topic.replies);
    contentInput.value = '';
    showToast('Răspunsul tău a fost publicat!', 'success');
    renderTopics();
    renderProfileView();
  }
}

// STRICT PERMISSIONS: Create Topic Handler
function handleCreateTopic(e) {
  e.preventDefault();
  if (!currentUser) {
    showToast('⚠️ Trebuie să fii autentificat pe cont pentru a posta!', 'error');
    openLoginModal();
    return;
  }

  const title = document.getElementById('topicTitle').value.trim();
  const category = document.getElementById('topicCategory').value;
  const content = document.getElementById('topicContent').value.trim();

  // Restriction for official announcements
  if (category === 'anunturi' && currentUser.role !== 'owner') {
    showToast('⛔ Doar conducerea (Seek & Ghost) poate publica în Anunțuri Oficiale!', 'error');
    return;
  }

  if (!title || !content) return;

  const isOwnerPosting = currentUser.role === 'owner';

  const newTopic = {
    id: Date.now(),
    category: category,
    title: title,
    author: currentUser.name,
    authorUsername: currentUser.username,
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
  renderProfileView();
}

// STRICT PERMISSIONS: Application Form
function openApplyForm(type) {
  if (!currentUser) {
    showToast('⚠️ Trebuie să fii autentificat pe cont pentru a trimite o aplicație!', 'error');
    openLoginModal();
    return;
  }

  document.getElementById('applyType').value = type;
  document.getElementById('applyModalTitle').innerText = `Aplicație: ${type}`;
  const discInput = document.getElementById('applicantDiscord');
  if (discInput && currentUser) {
    discInput.value = `@${currentUser.username}`;
  }
  openModal('applyModal');
}

function handleApplicationSubmit(e) {
  e.preventDefault();
  if (!currentUser) {
    showToast('⚠️ Autentificare necesară!', 'error');
    openLoginModal();
    return;
  }

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

  showToast(`Aplicația pentru "${type}" a fost trimisă către conducere!`, 'success');
}

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

function setupEventListeners() {
  const copyBtn = document.getElementById('copyIpBtn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('connect play.bandoplug.ro');
      showToast('IP Server copiat în clipboard!', 'success');
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
