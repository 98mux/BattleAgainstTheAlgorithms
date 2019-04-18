var yes = false;
redirect();
document.addEventListener('DOMContentLoaded', execute, false);




function redirect(){
	name = window.location.hostname;
    names = name.split(".");
    if (names[1] == "youtube") {
	pathname = window.location.pathname;
	
	if (pathname == "/" || pathname == "") {
            //document.getElementById("primary").style.display = 'none';
            location.replace('https://www.youtube.com/feed/subscriptions');
        }
	}
}

function execute() {
	if(yes===false){
		console.log("print here ");
		yes=true;
		// select the target node
		var target = document.querySelector('title');
		// create an observer instance
		var observer = new MutationObserver(function(mutations) {
			// We need only first event and only new value of the title
			redirect();
			execute();

		});
		// configuration of the observer:
		var config = { subtree: true, characterData: true, childList: true  };
		// pass in the target node, as well as the observer options
		observer.observe(target, config);
	}
    //name = window.location.hostname;
    names = name.split(".");
    if (names[1] === "youtube") {

        //Removes the videoes on the suggested bar
        try{
        document.getElementById("related").style.display = 'none';
        }
        catch(err){}
        try{
        document.getElementById("sections").children[0].children[1].children[0].style.display = 'none';
        }
        catch(err){}

        try{
        var els3 = document.getElementsByClassName("ytp-endscreen-content");
        Array.prototype.forEach.call(els3, function(el){
            el.style.display='none';
        });
        }
        catch(err){}

    }

    else if(names[1] == "reddit"){
        //document.getElementsByClassName('class1 class2')

        try{
            var els3 = document.getElementsByClassName("s1qjgj6n-1 QOtyG");
            Array.prototype.forEach.call(els3, function(el){
                el.style.display='none';
            });
        }
        catch(err){}

    }
    /*
    else if(names[1] == "facebook"){
        document.getElementById("contentArea").style.display = 'none';
    }*/

}