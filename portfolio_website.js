var prevPage;
const navElements = document.getElementsByClassName("nav-text");
const pageElements = document.getElementsByClassName("page");

function fadein(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, 10);
}

function resetPage(page){
    page.style.opacity = 0;
    page.style.display = "none";
}

function changePage(dataNav){
    resetPage(prevPage);
    const e = document.querySelector(`[data-page="${dataNav}"]`)
    fadein(e);
    prevPage = e;
}

function listenerHelper(e, o){
    prevPage = document.querySelector('[data-page=""]');
    e.addEventListener("click", function(){
        changePage(o)
    });
}

window.addEventListener("DOMContentLoaded", (event) => {
    listenerHelper(navElements[0], "");
    listenerHelper(navElements[1], "projects");
    listenerHelper(navElements[2], "contact");
});