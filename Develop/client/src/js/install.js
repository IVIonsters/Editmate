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






// TODO: Add an handler for the `appinstalled` event

window.addEventListener('appinstalled', (event) => {

});
