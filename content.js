let isEnabled = true;

// 1. Cargamos el estado inicial (Activado/Desactivado)
chrome.storage.local.get(['enabled'], (data) => {
    isEnabled = data.enabled !== false;
    if (isEnabled) cleanJobs();
});

const cleanJobs = () => {
    if (!isEnabled) return;

    // Selector más amplio para atrapar todas las variantes de tarjetas
    const jobCards = document.querySelectorAll('.jobs-search-results__list-item, .job-card-container, [data-occludable-job-id]');
    let countThisTurn = 0;

    jobCards.forEach(card => {
        // Si ya está oculto, no lo procesamos de nuevo
        if (card.getAttribute('data-blocked') === 'true') return;

        const text = card.innerText || "";
        const isPromoted = text.includes('Promocionado') || 
                           text.includes('Promoted') || 
                           text.includes('Anuncio');

        if (isPromoted) {
            card.style.display = 'none';
            card.setAttribute('data-blocked', 'true'); // Marca para no contar doble
            countThisTurn++;
        }
    });

    // Actualizamos el contador global solo si encontramos nuevos
    if (countThisTurn > 0) {
        chrome.storage.local.get(['blockedCount'], (data) => {
            const currentTotal = data.blockedCount || 0;
            chrome.storage.local.set({ blockedCount: currentTotal + countThisTurn });
        });
    }
};

// 2. El Observer: Ahora más ligero
const observer = new MutationObserver(() => {
    if (isEnabled) cleanJobs();
});

observer.observe(document.body, { childList: true, subtree: true });

// Ejecución inmediata
cleanJobs();