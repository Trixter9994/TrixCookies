Game.Win('Third-party');
if (TrixCookies === undefined) var TrixCookies = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

TrixCookies.launch = function(){
var iconsURL = 'https://klattmose.github.io/CookieClicker/img/customIcons.png';
TrixCookies.version = "0.1";
TrixCookies.GameVersion = "2.021";
	
//Research needed to use this. 
/*Game.customOptionsMenu.push(function(){
	CCSE.AppendCollapsibleOptionsMenu("TrixCookies", "Test");
});*/

Game.customStatsMenu.push(function(){
	CCSE.AppendStatsVersionNumber("TrixCookies", TrixCookies.version);
});'z
    TrixCookies.isLoaded = 1;
};

if (!TrixCookies.isLoaded) {
    if (CCSE && CCSE.isLoaded) {
        TrixCookies.launch();
    } else {
        if (!CCSE) var CCSE = {};
        if (!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
        CCSE.postLoadHooks.push(TrixCookies.launch);
    }
}
