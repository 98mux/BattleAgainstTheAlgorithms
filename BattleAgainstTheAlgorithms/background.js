//chrome.browserAction.onClicked.addListener(function(tab) {execute()});


var counter = 0;
chrome.browserAction.onClicked.addListener(function (tab) {
    counter++;
    if (counter == 5) {
        alert("Hey !!! You have clicked five times");
    }
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(){name = window.location.hostname;
    names = name.split(".");
    if (names[1] == "youtube") {
        //Removes the startpageshit

        pathname = window.location.pathname;


        if (pathname == "/" || pathname == "") {
            document.getElementById("primary").style.display = 'none';
            location.replace('https://www.youtube.com/feed/subscriptions');
        }


        //
        //Removes the suggested videos shit
        document.getElementById("related").style.display = 'none';
    }
});



/*window.addEventListener("hashchange", execute(), true);

body.addEventListener("yt-navigate-finish", function(event) {
execute()});*/