const dialog = document.querySelector("dialog")

let openOverlay = () => dialog.showModal();
let closeOverlay = () => dialog.close();


//found in internet....sorry :(
dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

    if (!isInDialog) {
        dialog.close();
    }

});