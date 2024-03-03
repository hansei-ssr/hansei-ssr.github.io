var state = "white"

function show() {
    document.getElementById("load").remove();
}

function main() {
    show();

    window.addEventListener("hashchange", (event) => {
        history.replaceState({}, document.title, window.location.href.split('#')[0]);
    });
}

window.onload = main;
