const AppStorage = {
    getSettings: async () => {
        return new Promise((resolve) => {
            chrome.storage.local.get(['enabled', 'blacklist', 'blockedCount'], (data) => {
                resolve({
                    linkedinEnabled: data.enabled !== false,
                    blacklist: data.blacklist || [],
                    blockedCount: data.blockedCount || 0
                });
            });
        });
    },
    updateCount: (newCount) => {
        chrome.storage.local.set({ blockedCount: newCount });
    },
    getBlacklist: async () => {
        const data = await chrome.storage.local.get(['blacklist']);
        return data.blacklist || [];
    }
};