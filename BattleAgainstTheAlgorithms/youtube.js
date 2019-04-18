let yes = false;
redirect();
document.addEventListener('DOMContentLoaded', execute, false);


function redirect() {
    let name = window.location.hostname;
    let names = name.split(".");
    if (names[1] === "youtube") {
        let pathname = window.location.pathname;
        if (pathname === "/" || pathname === "") {
            location.replace('https://www.youtube.com/feed/subscriptions');
        }
    }
}

function execute() {
    if (yes === false) {
        yes = true;
        // select the target node
        let target = document.querySelector('title');
        // create an observer instance
        let observer = new MutationObserver(function (mutations) {
            // We need only first event and only new value of the title
            redirect();
            execute();

        });
        // configuration of the observer:
        let config = {subtree: true, characterData: true, childList: true};
        // pass in the target node, as well as the observer options
        observer.observe(target, config);
    }
    let name = window.location.hostname;
    let names = name.split(".");
    if (names[1] === "youtube") {

        //Removes the videoes on the suggested bar
        try {
            document.getElementById("related").style.display = 'none';
        } catch (err) {
        }
        try {
            document.getElementById("sections").children[0].children[1].children[0].style.display = 'none';
        } catch (err) {
        }

        try {
            let els3 = document.getElementsByClassName("ytp-endscreen-content");
            Array.prototype.forEach.call(els3, function (el) {
                el.style.display = 'none';
            });
        } catch (err) {
        }

    }


}