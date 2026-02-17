// modules/linkedin.js
const LinkedInModule = {
    isEnabled: true,

    async init() {
        const settings = await AppStorage.getSettings();
        this.isEnabled = settings.linkedinEnabled;

        if (this.isEnabled) {
            console.log("🧹 LinkedIn Cleaner: Activo");
            this.clean();
            this.setupObserver();
        }
        
        // Escuchar mensajes del popup para activar/desactivar sin refrescar
        this.setupMessageListener();
    },

    clean() {
        if (!this.isEnabled) return;

        // Mantenemos tus selectores optimizados
        const jobCards = document.querySelectorAll(
            '.jobs-search-results__list-item, .job-card-container, [data-occludable-job-id]'
        );
        
        let countThisTurn = 0;

        jobCards.forEach(card => {
            // Evitamos procesar lo ya procesado (tu lógica de data-blocked)
            if (card.getAttribute('data-blocked') === 'true') return;

            const text = card.innerText || "";
            const isPromoted = text.includes('Promocionado') || 
                               text.includes('Promoted') || 
                               text.includes('Anuncio');

            if (isPromoted) {
                card.style.display = 'none';
                card.setAttribute('data-blocked', 'true'); 
                countThisTurn++;
            }
        });

        if (countThisTurn > 0) {
            this.updateGlobalCounter(countThisTurn);
        }
    },

    async updateGlobalCounter(found) {
        const settings = await AppStorage.getSettings();
        AppStorage.updateCount(settings.blockedCount + found);
    },

    setupObserver() {
        const observer = new MutationObserver(() => {
            if (this.isEnabled) this.clean();
        });
        observer.observe(document.body, { childList: true, subtree: true });
    },

    setupMessageListener() {
        chrome.runtime.onMessage.addListener((request) => {
            if (request.action === "toggleEnabled") {
                this.isEnabled = request.value;
                if (this.isEnabled) {
                    this.clean();
                } else {
                    // Si se apaga, mostramos los que estaban ocultos
                    document.querySelectorAll('[data-blocked="true"]').forEach(card => {
                        card.style.display = ''; 
                    });
                }
            }
        });
    }
};