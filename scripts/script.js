
function toggleSidebar() {
    document.getElementById("pkm-sidebar").classList.toggle("active")
}


function openOverlay() {
    let refOverlay = document.getElementById("overlay");
    // let hideScrollbar = document.getElementById("body-scrollbar");
    // hideScrollbar.classList.add("hide-scrollbar");
    refOverlay.classList.remove("d-none");

}