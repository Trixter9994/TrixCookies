Game.Win('Third-party');
if (TrixCookies === undefined) var TrixCookies = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

TrixCookies.launch = function(){
	var iconsURL = 'https://trixter9994.github.io/TrixCookies/images/customIcons.png';
	TrixCookies.version = "0.1";
	TrixCookies.gameversion = "2.021";
	TrixCookies.name= "TrixCookies";
	//CCSE.ConfirmGameVersion(TrixCookies.name, TrixCookies.version, TrixCookies.GameVersion);
	
	//Research needed to use this. 
	/*Game.customOptionsMenu.push(function(){
		CCSE.AppendCollapsibleOptionsMenu("TrixCookies", "Test");
	});*/

	Game.customStatsMenu.push(function(){
		CCSE.AppendStatsVersionNumber(TrixCookies.name, TrixCookies.version);
	});
	
	//Bifurcated Achievments
	CCSE.NewAchievement('Sweet Genetics', 'Harvest <b>5</b> bifurcated sugar lumps.', [0,0,iconsURL]); 
	CCSE.NewAchievement('Sugar Atom Splitter', 'Harvest <b>15</b> bifurcated sugar lumps.', [0,1,iconsURL]); 
	CCSE.NewAchievement('Schizomainac', 'Harvest <b>50</b> bifurcated sugar lumps.', [0,2,iconsURL]); 
	//Meaty Achievments
	CCSE.NewAchievement('Meaty Lumps', 'Harvest <b>5</b> meaty sugar lumps.', [1,0,iconsURL]); 
	CCSE.NewAchievement('Bittersweet', 'Harvest <b>15</b> meaty sugar lumps.', [1,1,iconsURL]); 
	CCSE.NewAchievement('Hyperactive Abomination', 'Harvest <b>50</b> meaty sugar lumps.', [1,2,iconsURL]); 
	//caramelized Achievments (Since 50 Caramel sugar lumps is statistically impossible to get I nerfed the achievments.)
	CCSE.NewAchievement('Caramel Rush of 49', 'Harvest <b>3</b> caramalized sugar lumps.', [2,0,iconsURL]); 
	CCSE.NewAchievement('Rivers of Caramel', 'Harvest <b>7</b> caramelized sugar lumps.', [2,1,iconsURL]); 
	CCSE.NewAchievement('Sweet, Sweet Goo', 'Harvest <b>15</b> caramelized sugar lumps.', [2,2,iconsURL]); 
	
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
