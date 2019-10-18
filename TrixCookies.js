Game.Win('Third-party');
if (TrixCookies === undefined) var TrixCookies = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

TrixCookies.launch = function(){
	//var iconsURL = 'https://trixter9994.github.io/TrixCookies/images/customIcons.png';
	TrixCookies.version = "0.1";
	TrixCookies.GameVersion = "2.021";
	TrixCookies.name= "TrixCookies";
	//CCSE.ConfirmGameVersion(TrixCookies.name, TrixCookies.version, TrixCookies.GameVersion);
	
	//Research needed to use this. 
	/*Game.customOptionsMenu.push(function(){
		CCSE.AppendCollapsibleOptionsMenu("TrixCookies", "Test");
	});*/

	Game.customStatsMenu.push(function(){
		CCSE.AppendStatsVersionNumber(TrixCookies.name, TrixCookies.version);
	});'
	
	CCSE.NewAchievement('Sweet Genetics', 'Harvest <b>5</b> bifurcated sugar lumps.', "https://trixter9994.github.io/TrixCookies/images/Sweet_Genetics.png"); 
	CCSE.NewAchievement('Sugar Atom Splitter', 'Harvest <b>15</b> bifurcated sugar lumps.', "https://trixter9994.github.io/TrixCookies/images/Sugar_Atom_Splitter.png"); 
	CCSE.NewAchievement('Schizomainac', 'Harvest <b>50</b> bifurcated sugar lumps.', "https://trixter9994.github.io/TrixCookies/images/Schizomainiac.png"); 
	
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
