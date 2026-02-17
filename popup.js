document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    // --- Lógica de Pestañas ---
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // --- Módulo LinkedIn ---
    const linkToggle = document.getElementById('link-toggle');
    const counterEl = document.getElementById('counter');

    chrome.storage.local.get(['enabled', 'blockedCount', 'blacklist'], (data) => {
        linkToggle.checked = data.enabled !== false;
        counterEl.innerText = data.blockedCount || 0;
        if (data.blacklist) {
            document.getElementById('blacklist-urls').value = data.blacklist.join('\n');
        }
    });

    linkToggle.onchange = () => {
        chrome.storage.local.set({ enabled: linkToggle.checked });
    };

    // --- Módulo Blacklist General ---
    const saveBtn = document.getElementById('save-blacklist');
    saveBtn.onclick = () => {
        const urls = document.getElementById('blacklist-urls').value
            .split('\n')
            .map(url => url.trim())
            .filter(url => url.length > 0);

        chrome.storage.local.set({ blacklist: urls }, () => {
            alert('Lista guardada. Se bloqueará JS en estos dominios.');
        });
    };
});