// modules/jsshield.js
const JSShieldModule = {
    init: async function() {
        const blacklist = await AppStorage.getBlacklist();
        const currentHost = window.location.hostname;

        // Verificamos si el dominio actual o parte de él está en la lista
        const isBlacklisted = blacklist.some(domain => 
            currentHost === domain || currentHost.endsWith('.' + domain)
        );

        if (isBlacklisted) {
            console.warn("🛡️ JS Shield: Web en lista negra detectada.");
            this.applyHardBlock();
        }
    },

    applyHardBlock: function() {
        // 1. Detenemos la carga de scripts inmediatamente
        window.stop();

        // 2. Inyectamos una política de seguridad que prohíbe scripts
        const csp = document.createElement('meta');
        csp.httpEquiv = "Content-Security-Policy";
        csp.content = "script-src 'none'; object-src 'none';";
        document.head.appendChild(csp);
        
        console.log("🚫 Ejecución de JS bloqueada por Web Optimizer Pro");
    }
};