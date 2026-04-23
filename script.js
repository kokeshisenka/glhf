const gameRankMap = {
  "VALORANT": [
    "Iron 1", "Iron 2", "Iron 3",
    "Bronze 1", "Bronze 2", "Bronze 3",
    "Silver 1", "Silver 2", "Silver 3",
    "Gold 1", "Gold 2", "Gold 3",
    "Platinum 1", "Platinum 2", "Platinum 3",
    "Diamond 1", "Diamond 2", "Diamond 3",
    "Ascendant 1", "Ascendant 2", "Ascendant 3",
    "Immortal 1", "Immortal 2", "Immortal 3",
    "Radiant"
  ],
  "Counter-Strike 2": [
    "Silver I", "Silver II", "Silver III", "Silver IV", "Silver Elite", "Silver Elite Master",
    "Gold Nova I", "Gold Nova II", "Gold Nova III", "Gold Nova Master",
    "Master Guardian I", "Master Guardian II", "Master Guardian Elite",
    "Distinguished Master Guardian", "Legendary Eagle", "Legendary Eagle Master",
    "Supreme Master First Class", "The Global Elite"
  ],
  "Dota 2": [
    "Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal"
  ],
  "Apex Legends": [
    "Rookie", "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Master", "Apex Predator"
  ],
  "Rocket League": [
    "Bronze I", "Bronze II", "Bronze III",
    "Silver I", "Silver II", "Silver III",
    "Gold I", "Gold II", "Gold III",
    "Platinum I", "Platinum II", "Platinum III",
    "Diamond I", "Diamond II", "Diamond III",
    "Champion I", "Champion II", "Champion III",
    "Grand Champion I", "Grand Champion II", "Grand Champion III",
    "Supersonic Legend"
  ],
  "Overwatch 2": [
    "Bronze 5-1", "Silver 5-1", "Gold 5-1", "Platinum 5-1",
    "Diamond 5-1", "Master 5-1", "Grandmaster 5-1", "Champion"
  ]
};

const rolesByGame = {
  "VALORANT": ["entry", "igl", "support", "sniper"],
  "Counter-Strike 2": ["entry", "igl", "support", "sniper"],
  "Dota 2": ["carry", "support", "igl"],
  "Apex Legends": ["entry", "support", "sniper"],
  "Rocket League": ["carry", "support", "igl"],
  "Overwatch 2": ["carry", "support", "entry"]
};

const teammatePool = [
  { name: "Nyx", game: "VALORANT", rank: "Ascendant 2", role: "entry", language: "Українська", note: "Jett / Raze, прайм 19:00-23:00", avatar: "https://i.pravatar.cc/160?img=12" },
  { name: "Kraina", game: "VALORANT", rank: "Diamond 3", role: "support", language: "English", note: "Skye / Killjoy, любить спокійні колли", avatar: "https://i.pravatar.cc/160?img=32" },
  { name: "Falcon", game: "Counter-Strike 2", rank: "Legendary Eagle", role: "sniper", language: "Українська", note: "AWP main, Premier grind every night", avatar: "https://i.pravatar.cc/160?img=14" },
  { name: "Molfar", game: "Counter-Strike 2", rank: "Master Guardian Elite", role: "igl", language: "Polski", note: "Лідер складу, любить структуровані раунди", avatar: "https://i.pravatar.cc/160?img=23" },
  { name: "Sova", game: "Dota 2", rank: "Ancient", role: "support", language: "Українська", note: "Pos 4/5, stacked smoke timings", avatar: "https://i.pravatar.cc/160?img=47" },
  { name: "Rift", game: "Dota 2", rank: "Divine", role: "carry", language: "English", note: "Mid / carry player для ranked-пушу", avatar: "https://i.pravatar.cc/160?img=51" },
  { name: "Pulse", game: "Apex Legends", rank: "Diamond", role: "support", language: "English", note: "Lifeline / Newcastle, вміє тримати macro", avatar: "https://i.pravatar.cc/160?img=18" },
  { name: "Vega", game: "Apex Legends", rank: "Master", role: "entry", language: "Українська", note: "Aggro fragger, катки після 18:00", avatar: "https://i.pravatar.cc/160?img=27" },
  { name: "Orbit", game: "Rocket League", rank: "Champion II", role: "carry", language: "English", note: "2v2 / 3v3, хороший rotation sense", avatar: "https://i.pravatar.cc/160?img=35" },
  { name: "Nova", game: "Rocket League", rank: "Grand Champion I", role: "igl", language: "Українська", note: "Shot caller для конкурентних матчів", avatar: "https://i.pravatar.cc/160?img=41" },
  { name: "MercyMain", game: "Overwatch 2", rank: "Master 5-1", role: "support", language: "Українська", note: "Support duo, flex на Ana / Mercy", avatar: "https://i.pravatar.cc/160?img=62" },
  { name: "Blitz", game: "Overwatch 2", rank: "Diamond 5-1", role: "carry", language: "English", note: "Hitscan DPS, scrim-friendly", avatar: "https://i.pravatar.cc/160?img=67" }
];

const popularityData = [
  { game: "Counter-Strike 2", genre: "Тактичний FPS", value: 1809155 },
  { game: "PUBG: BATTLEGROUNDS", genre: "Battle Royale", value: 861598 },
  { game: "Dota 2", genre: "MOBA", value: 630716 },
  { game: "Marvel Rivals", genre: "Hero Shooter", value: 315153 },
  { game: "Apex Legends", genre: "Hero BR", value: 199349 }
];

const starterFriends = [
  { id: "falcon", name: "Falcon", status: "online", game: "Counter-Strike 2" },
  { id: "nyx", name: "Nyx", status: "in lobby", game: "VALORANT" },
  { id: "sova", name: "Sova", status: "online", game: "Dota 2" }
];

const starterMessages = {
  falcon: [
    { mine: false, text: "Йдемо на Premier о 20:00?", time: "19:12" },
    { mine: true, text: "Так, ще шукаю одного support.", time: "19:14" }
  ],
  nyx: [
    { mine: false, text: "Хочеш дуо на VALORANT ввечері?", time: "18:08" }
  ],
  sova: [
    { mine: false, text: "Можу закрити pos5, якщо збираєш стак.", time: "17:40" }
  ]
};

const storageKeys = {
  theme: "squadup-theme",
  users: "squadup-users",
  currentUser: "squadup-current-user",
  friends: "squadup-friends",
  chats: "squadup-chats"
};

const elements = {
  tabLinks: document.querySelectorAll(".tab-link"),
  tabPanels: document.querySelectorAll(".tab-panel"),
  openTabButtons: document.querySelectorAll("[data-open-tab]"),
  gameSelect: document.getElementById("game-select"),
  rankSelect: document.getElementById("rank-select"),
  registerGame: document.getElementById("register-game"),
  chartGrid: document.getElementById("chart-grid"),
  finderForm: document.getElementById("finder-form"),
  roleSelect: document.getElementById("role-select"),
  languageSelect: document.getElementById("language-select"),
  teammateList: document.getElementById("teammate-list"),
  resultsCount: document.getElementById("results-count"),
  registerForm: document.getElementById("register-form"),
  loginForm: document.getElementById("login-form"),
  logoutButton: document.getElementById("logout-button"),
  profileCard: document.getElementById("profile-card"),
  currentUserLabel: document.getElementById("current-user-label"),
  friendList: document.getElementById("friend-list"),
  addFriendButton: document.getElementById("add-friend-button"),
  chatTitle: document.getElementById("chat-title"),
  chatSubtitle: document.getElementById("chat-subtitle"),
  chatMessages: document.getElementById("chat-messages"),
  chatForm: document.getElementById("chat-form"),
  chatInput: document.getElementById("chat-input"),
  themeButtons: document.querySelectorAll(".theme-button"),
  toast: document.getElementById("toast")
};

let activeFriendId = starterFriends[0].id;

function readJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getUsers() {
  return readJson(storageKeys.users, []);
}

function getCurrentUser() {
  return readJson(storageKeys.currentUser, null);
}

function setCurrentUser(user) {
  writeJson(storageKeys.currentUser, user);
}

function getFriends() {
  return readJson(storageKeys.friends, starterFriends);
}

function getChats() {
  return readJson(storageKeys.chats, starterMessages);
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 2400);
}

function switchTab(tabId) {
  elements.tabLinks.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabId);
  });
  elements.tabPanels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === tabId);
  });
}

function populateGameOptions() {
  Object.keys(gameRankMap).forEach((game) => {
    const option = new Option(game, game);
    elements.gameSelect.add(option.cloneNode(true));
    elements.registerGame.add(option);
  });
}

function populateRankOptions(game) {
  const ranks = gameRankMap[game];
  elements.rankSelect.innerHTML = "";
  elements.rankSelect.add(new Option("Будь-який", "all"));
  ranks.forEach((rank) => elements.rankSelect.add(new Option(rank, rank)));
}

function populateRoleOptions(game) {
  const roleLabels = {
    entry: "Entry / Duelist",
    igl: "IGL / Captain",
    support: "Support",
    sniper: "Sniper / Flex",
    carry: "Carry / Damage"
  };

  elements.roleSelect.innerHTML = "";
  elements.roleSelect.add(new Option("Будь-яка", "all"));
  (rolesByGame[game] || []).forEach((role) => {
    elements.roleSelect.add(new Option(roleLabels[role], role));
  });
}

function renderPopularityChart() {
  const maxValue = Math.max(...popularityData.map((item) => item.value));
  elements.chartGrid.innerHTML = "";

  popularityData.forEach((item) => {
    const row = document.createElement("article");
    row.className = "chart-row";
    row.innerHTML = `
      <div class="chart-label">
        <strong>${item.game}</strong>
        <span>${item.genre}</span>
      </div>
      <div class="chart-bar-track">
        <div class="chart-bar-fill" style="width: ${(item.value / maxValue) * 100}%"></div>
      </div>
      <div class="chart-value">${item.value.toLocaleString("en-US")}</div>
    `;
    elements.chartGrid.append(row);
  });
}

function renderTeammates(filtered = teammatePool) {
  elements.teammateList.innerHTML = "";
  elements.resultsCount.textContent = `${filtered.length} профілів`;

  if (!filtered.length) {
    elements.teammateList.innerHTML = "<p class='muted'>За цими фільтрами поки нікого не знайдено.</p>";
    return;
  }

  filtered.forEach((player) => {
    const card = document.createElement("article");
    card.className = "teammate-card";
    card.innerHTML = `
      <img class="avatar" src="${player.avatar}" alt="${player.name}">
      <div class="teammate-meta">
        <h4>${player.name}</h4>
        <p>${player.game} • ${player.language} • ${player.note}</p>
      </div>
      <div class="teammate-rank">${player.rank}</div>
    `;
    elements.teammateList.append(card);
  });
}

function filterTeammates(event) {
  event.preventDefault();
  const game = elements.gameSelect.value;
  const rank = elements.rankSelect.value;
  const role = elements.roleSelect.value;
  const language = elements.languageSelect.value;

  const filtered = teammatePool.filter((player) => {
    const gameMatch = player.game === game;
    const rankMatch = rank === "all" || player.rank === rank;
    const roleMatch = role === "all" || player.role === role;
    const languageMatch = language === "all" || player.language === language;
    return gameMatch && rankMatch && roleMatch && languageMatch;
  });

  renderTeammates(filtered);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(storageKeys.theme, theme);
}

function renderProfile() {
  const user = getCurrentUser();
  if (!user) {
    elements.profileCard.innerHTML = `
      <p class="eyebrow">Поточний профіль</p>
      <h4>Гість</h4>
      <p>Створи акаунт, щоб зберігати друзів, тему і переписки.</p>
      <ul class="profile-meta">
        <li>Улюблена гра: -</li>
        <li>Email: -</li>
        <li>Статус: offline</li>
      </ul>
    `;
    elements.currentUserLabel.textContent = "Гість";
    return;
  }

  elements.profileCard.innerHTML = `
    <p class="eyebrow">Поточний профіль</p>
    <h4>${user.name}</h4>
    <p>Готовий до гри та пошуку нових тімейтів.</p>
    <ul class="profile-meta">
      <li>Улюблена гра: ${user.game}</li>
      <li>Email: ${user.email}</li>
      <li>Статус: online</li>
    </ul>
  `;
  elements.currentUserLabel.textContent = user.name;
}

function handleRegister(event) {
  event.preventDefault();
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim().toLowerCase();
  const password = document.getElementById("register-password").value.trim();
  const game = elements.registerGame.value;

  if (password.length < 6) {
    showToast("Пароль має містити щонайменше 6 символів.");
    return;
  }

  const users = getUsers();
  const exists = users.some((user) => user.email === email);
  if (exists) {
    showToast("Користувач із таким email вже існує.");
    return;
  }

  const newUser = { name, email, password, game };
  users.push(newUser);
  writeJson(storageKeys.users, users);
  setCurrentUser(newUser);
  renderProfile();
  elements.registerForm.reset();
  showToast("Акаунт створено. Тепер ти в системі.");
}

function handleLogin(event) {
  event.preventDefault();
  const email = document.getElementById("login-email").value.trim().toLowerCase();
  const password = document.getElementById("login-password").value.trim();
  const user = getUsers().find((entry) => entry.email === email && entry.password === password);

  if (!user) {
    showToast("Невірний email або пароль.");
    return;
  }

  setCurrentUser(user);
  renderProfile();
  elements.loginForm.reset();
  showToast(`Вхід виконано: ${user.name}`);
}

function handleLogout() {
  localStorage.removeItem(storageKeys.currentUser);
  renderProfile();
  showToast("Ти вийшов з акаунта.");
}

function renderFriends() {
  const friends = getFriends();
  elements.friendList.innerHTML = "";

  friends.forEach((friend) => {
    const item = document.createElement("article");
    item.className = `friend-item ${friend.id === activeFriendId ? "active" : ""}`;
    item.innerHTML = `
      <h5>${friend.name}</h5>
      <p class="friend-meta">${friend.game}</p>
      <span class="friend-status">${friend.status}</span>
    `;
    item.addEventListener("click", () => {
      activeFriendId = friend.id;
      renderFriends();
      renderChat();
    });
    elements.friendList.append(item);
  });
}

function renderChat() {
  const friends = getFriends();
  const chats = getChats();
  const activeFriend = friends.find((friend) => friend.id === activeFriendId);

  if (!activeFriend) {
    elements.chatTitle.textContent = "Оберіть друга";
    elements.chatSubtitle.textContent = "Після реєстрації чат буде зберігатися у браузері.";
    elements.chatMessages.innerHTML = "";
    return;
  }

  elements.chatTitle.textContent = activeFriend.name;
  elements.chatSubtitle.textContent = `${activeFriend.game} • ${activeFriend.status}`;
  elements.chatMessages.innerHTML = "";

  (chats[activeFriend.id] || []).forEach((message) => {
    const bubble = document.createElement("article");
    bubble.className = `message ${message.mine ? "mine" : ""}`;
    bubble.innerHTML = `<p>${message.text}</p><small>${message.time}</small>`;
    elements.chatMessages.append(bubble);
  });

  elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
}

function handleChatSubmit(event) {
  event.preventDefault();
  const text = elements.chatInput.value.trim();
  if (!text || !activeFriendId) {
    return;
  }

  const chats = getChats();
  const time = new Date().toLocaleTimeString("uk-UA", { hour: "2-digit", minute: "2-digit" });
  chats[activeFriendId] = chats[activeFriendId] || [];
  chats[activeFriendId].push({ mine: true, text, time });
  writeJson(storageKeys.chats, chats);
  elements.chatInput.value = "";
  renderChat();
}

function addFriend() {
  const user = getCurrentUser();
  if (!user) {
    showToast("Спочатку створити акаунт або увійти.");
    switchTab("account");
    return;
  }

  const friends = getFriends();
  const count = friends.length + 1;
  const newFriend = {
    id: `friend-${count}`,
    name: `NewMate${count}`,
    status: "online",
    game: Object.keys(gameRankMap)[count % Object.keys(gameRankMap).length]
  };
  friends.push(newFriend);
  writeJson(storageKeys.friends, friends);
  activeFriendId = newFriend.id;
  showToast(`Друг ${newFriend.name} доданий.`);
  renderFriends();
  renderChat();
}

function bindEvents() {
  elements.tabLinks.forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.tab));
  });

  elements.openTabButtons.forEach((button) => {
    button.addEventListener("click", () => switchTab(button.dataset.openTab));
  });

  elements.gameSelect.addEventListener("change", () => {
    populateRankOptions(elements.gameSelect.value);
    populateRoleOptions(elements.gameSelect.value);
    renderTeammates(teammatePool.filter((player) => player.game === elements.gameSelect.value));
  });

  elements.finderForm.addEventListener("submit", filterTeammates);
  elements.registerForm.addEventListener("submit", handleRegister);
  elements.loginForm.addEventListener("submit", handleLogin);
  elements.logoutButton.addEventListener("click", handleLogout);
  elements.chatForm.addEventListener("submit", handleChatSubmit);
  elements.addFriendButton.addEventListener("click", addFriend);
  elements.themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyTheme(button.dataset.theme);
      showToast(`Тема змінена на: ${button.textContent}`);
    });
  });
}

function init() {
  if (!localStorage.getItem(storageKeys.friends)) {
    writeJson(storageKeys.friends, starterFriends);
  }

  if (!localStorage.getItem(storageKeys.chats)) {
    writeJson(storageKeys.chats, starterMessages);
  }

  populateGameOptions();
  populateRankOptions(elements.gameSelect.value || Object.keys(gameRankMap)[0]);
  populateRoleOptions(elements.gameSelect.value || Object.keys(gameRankMap)[0]);
  renderPopularityChart();
  renderTeammates(teammatePool.filter((player) => player.game === elements.gameSelect.value));
  renderProfile();
  renderFriends();
  renderChat();
  bindEvents();

  const storedTheme = localStorage.getItem(storageKeys.theme);
  if (storedTheme) {
    applyTheme(storedTheme);
  }
}

init();
