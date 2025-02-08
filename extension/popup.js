// Toggle extension on/off
const toggle = document.getElementById('extension-toggle');
toggle.addEventListener('change', () => {
  chrome.storage.local.set({ extensionEnabled: toggle.checked }, () => {
    // Reload the page to apply changes
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id);
    });
  });
});

// Load saved extension state
chrome.storage.local.get('extensionEnabled', (data) => {
  toggle.checked = data.extensionEnabled !== false; // Default to enabled
});