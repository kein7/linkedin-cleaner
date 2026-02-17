// content_main.js
const main = async () => {
    // 1. Ejecutar siempre el escudo de JS (Core General)
    await JSShieldModule.init();

    // 2. Si estamos en LinkedIn, activar módulo específico
    if (window.location.hostname.includes('linkedin.com')) {
        LinkedInModule.init();
    }
};

main();