const btn = document.getElementById('toggleBtn');
const counterEl = document.getElementById('counter');

// Cargar estado inicial
chrome.storage.local.get(['enabled', 'blockedCount'], (data) => {
  const isEnabled = data.enabled !== false; // true por defecto
  updateUI(isEnabled);
  counterEl.innerText = data.blockedCount || 0;
});

btn.onclick = () => {
  chrome.storage.local.get('enabled', (data) => {
    const newState = !(data.enabled !== false);
    chrome.storage.local.set({ enabled: newState }, () => {
      updateUI(newState);
      // Recargar la pestaña para aplicar cambios (opcional)
      chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.reload(tabs[0].id);
      });
    });
  });
};

function updateUI(enabled) {
  btn.innerText = enabled ? 'Desactivar' : 'Activar';
  btn.className = enabled ? 'active' : '';
}