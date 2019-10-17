if(TrixCookies === undefined) var TrixCookies = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

TrixCookies.launch = function(){
	Game.customOptionsMenu.push(function(){
	CCSE.AppendCollapsibleOptionsMenu("TrixCookies", "Test");
});

Game.customStatsMenu.push(function(){
	CCSE.AppendStatsVersionNumber("TrixCookies", "0.1");
});

TrixCookies.isLoaded = 1; 
}

if(!TrixCookies.isLoaded){
	if(CCSE && CCSE.isLoaded){
		TrixCookies.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(TrixCookies.launch);
	}
}
