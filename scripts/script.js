
// function toggleSidebar() {
//     document.getElementById("pkm-sidebar").classList.toggle("active")
// }

const dialog = document.querySelector("dialog")

function openOverlay() {
    dialog.showModal()
    // let openBtn = document.querySelector("#open-overlay");
    // openBtn.addEventListener('click', () => dialog.showModal());
    // let hideScrollbar = document.getElementById("body-scrollbar");
    // hideScrollbar.classList.add("hide-scrollbar");
}

function closeOverlay() {
    dialog.close()
    // let closeBtn = document.querySelector("#close-overlay");
    // closeBtn.addEventListener('click', () => dialog.close());
    // let hideScrollbar = document.getElementById("body-scrollbar");
    // hideScrollbar.classList.add("hide-scrollbar");
}

//found in the internet
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