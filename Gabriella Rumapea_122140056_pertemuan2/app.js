// === DARK MODE TOGGLE (FINAL) === 
const toggleBtn = document.getElementById('dark-mode-toggle');
const root = document.documentElement;

// Cek preferensi sebelumnya
if (localStorage.getItem('theme') === 'dark') {
  root.classList.add('dark');
}

// Tombol toggle
toggleBtn.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


// === TO-DO CLASS ===
class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.input = document.getElementById('todo-input');
    this.list = document.getElementById('todo-list');
    this.init();
  }

  init() {
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && this.input.value.trim()) {
        this.addTodo(this.input.value.trim());
        this.input.value = '';
      }
    });
    this.render();
  }

  addTodo = (text) => {
    const todo = { id: Date.now(), text };
    this.todos.push(todo);
    this.save();
    this.render();
  }

  deleteTodo = (id) => {
    this.todos = this.todos.filter(t => t.id !== id);
    this.save();
    this.render();
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  render() {
    this.list.innerHTML = '';
    this.todos.forEach(({ id, text }) => {
      const li = document.createElement('li');
      li.className = "flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-lg p-2";
      li.innerHTML = `<span>${text}</span> <button onclick="todoApp.deleteTodo(${id})" class="text-red-500 hover:text-red-700 text-sm">✕</button>`;
      this.list.appendChild(li);
    });
  }
}
const todoApp = new TodoApp();

// === MARKDOWN NOTES ===
const markdownInput = document.getElementById('markdown-input');
const markdownPreview = document.getElementById('markdown-preview');
markdownInput.value = localStorage.getItem('notes') || '';
markdownPreview.innerHTML = marked.parse(markdownInput.value);
markdownInput.addEventListener('input', () => {
  const text = markdownInput.value;
  localStorage.setItem('notes', text);
  markdownPreview.innerHTML = marked.parse(text);
});

// === WORLD CLOCK ===
const updateClock = () => {
  const now = new Date();
  const timeString = now.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' });
  document.getElementById('world-clock').innerText = `🕒 Jakarta: ${timeString}`;
};
setInterval(updateClock, 1000);
updateClock();

// === WEATHER (ASYNC/AWAIT) ===
const weatherEl = document.getElementById('weather');
const fetchWeather = async () => {
  try {
    const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&current_weather=true');
    const data = await res.json();
    const { temperature, windspeed } = data.current_weather;
    weatherEl.innerHTML = `🌡️ Suhu: ${temperature}°C | 💨 Angin: ${windspeed} km/jam`;
  } catch (err) {
    weatherEl.innerHTML = '⚠️ Gagal memuat cuaca.';
  }
};
fetchWeather();

// === MINI CHATGPT (Mockup) ===
const chatInput = document.getElementById('chat-input');
const chatLog = document.getElementById('chat-log');
chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && chatInput.value.trim()) {
    const userMsg = chatInput.value.trim();
    const reply = `🤖 Kamu bilang: "${userMsg}"`;
    const el = document.createElement('div');
    el.className = "bg-gray-100 dark:bg-gray-700 p-2 rounded-lg";
    el.innerHTML = `<strong class='text-blue-600 dark:text-blue-300'>Kamu:</strong> ${userMsg}<br/><strong class='text-green-600 dark:text-green-300'>Bot:</strong> ${reply}`;
    chatLog.prepend(el);
    chatInput.value = '';
  }
});
