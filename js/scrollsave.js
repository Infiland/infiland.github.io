function saveScrollPosition() {
    localStorage.setItem('scrollPosition',window.scrollY);
}

function restoreScrollPosition() {
    var scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition !== null) {
        window.scrollTo(0,scrollPosition);
    }
}

window.onload = function() {
    restoreScrollPosition();
}

window.onscroll = function() {
    saveScrollPosition();
}