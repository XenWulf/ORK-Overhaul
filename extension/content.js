// Inject the dark mode toggle switch
const toggleSwitch = `
  <div class="dark-mode-toggle">
    <label class="toggle-switch">
      <input type="checkbox" id="dark-mode-toggle">
      <span class="toggle-slider"></span>
    </label>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', toggleSwitch);

// Toggle dark mode on switch change
const toggle = document.getElementById('dark-mode-toggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  toggle.checked = true;
}

// Remove inline background style from #controls
const controls = document.getElementById('controls');
if (controls) {
  controls.style.backgroundColor = ''; // Remove inline background color
}