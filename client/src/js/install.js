const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {
    console.log('Install button clicked');
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();

    // deferred prompt
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed');
    alert('The app was installed');
    window.deferredPrompt = null;
});
