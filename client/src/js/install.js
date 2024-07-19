const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {
    //prevent the default behavior
    event.preventDefault();
    window.deferredPrompt = event;
    // Show the install button
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    // Show the install prompt
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();

    // deferred prompt
    window.deferredPrompt
    //hide the install button
    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    // clear the deferredPrompt variable
    window.deferredPrompt = null;
    // Log the installation to the analytics
    console.log('PWA was installed');
    // Show a message to the user
    alert('The app was installed');
});
