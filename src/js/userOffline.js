function isOnline() {
    return navigator.onLine;
}

function showOfflineMessage() {
    const offlineMessage = document.querySelector('.no_internet_page');
    offlineMessage.style.display = 'flex';
}

function hideOfflineMessage() {
    const offlineMessage = document.querySelector('.no_internet_page');
    offlineMessage.style.display = 'none';
}

// Vérifiez la connectivité au chargement de la page
if (!isOnline()) {
    showOfflineMessage();
}

// Ajoutez un gestionnaire d'événements pour surveiller les changements de la connectivité
window.addEventListener('online', hideOfflineMessage);
window.addEventListener('offline', showOfflineMessage);
