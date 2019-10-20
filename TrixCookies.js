Game.Win('Third-party');
if (TrixCookies === undefined) var TrixCookies = {};
if (typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

TrixCookies.launch = function(){
	var iconsURL = 'https://trixter9994.github.io/TrixCookies/images/customIcons.png';
	TrixCookies.version = "0.1.12";
	TrixCookies.gameversion = "2.021";
	TrixCookies.name= "TrixCookies";
	
	//CCSE.ConfirmGameVersion(TrixCookies.name, TrixCookies.version, TrixCookies.GameVersion);
	
	//Research needed to use this. 
	/*Game.customOptionsMenu.push(function(){
		CCSE.AppendCollapsibleOptionsMenu("TrixCookies", "Test");
	});*/
	
	//Save and Loading
	CCSE.customSave.push(function(){
		CCSE.save.OtherMods.TrixCookies= TrixCookies.config;
		CCSE.save.OtherMods.bifurcatedLumps=TrixCookies.bifurcatedLumps;
		CCSE.save.OtherMods.caramelizedLumps=TrixCookies.caramelizedLumps;
		CCSE.save.OtherMods.goldenLumps=TrixCookies.goldenLumps;
		CCSE.save.OtherMods.meatyLumps=TrixCookies.meatyLumps;
	});
	CCSE.customLoad.push(function(){
		if(CCSE.save.OtherMods.TrixCookies) TrixCookies.config=CCSE.save.OtherMods.TrixCookies; else TrixCookies.config={};
		if(CCSE.save.OtherMods.bifurcatedLumps) TrixCookies.bifurcatedLumps=CCSE.save.OtherMods.bifurcatedLumps; else TrixCookies.bifurcatedLumps=0;
		if(CCSE.save.OtherMods.caramelizedLumps) TrixCookies.caramelizedLumps=CCSE.save.OtherMods.caramelizedLumps; else TrixCookies.caramelizedLumps=0;
		if(CCSE.save.OtherMods.goldenLumps) TrixCookies.goldenLumps=CCSE.save.OtherMods.goldenLumps; else TrixCookies.goldenLumps=0;
		if(CCSE.save.OtherMods.meatyLumps) TrixCookies.meatyLumps=CCSE.save.OtherMods.meatyLumps; else TrixCookies.meatyLumps=0;
	});
	
	//Define lump counters if not already defined
	if (TrixCookies.bifurcatedLumps==undefined) TrixCookies.bifurcatedLumps=0;
	if (TrixCookies.caramelizedLumps==undefined) TrixCookies.caramelizedLumps=0;
	if (TrixCookies.goldenLumps==undefined) TrixCookies.goldenLumps=0;
	if (TrixCookies.meatyLumps==undefined) TrixCookies.meatyLumps=0;
	
	Game.customStatsMenu.push(function(){
		CCSE.AppendStatsVersionNumber(TrixCookies.name, TrixCookies.version);
	});
	
	//Bifurcated Achievements
	CCSE.NewAchievement('Sweet Genetics', 'Harvest <b>5</b> bifurcated sugar lumps.', [0,0,iconsURL]); 
	CCSE.NewAchievement('Sugar Atom Splitter', 'Harvest <b>10</b> bifurcated sugar lumps.', [0,1,iconsURL]); 
	CCSE.NewAchievement('Schizomainac', 'Harvest <b>20</b> bifurcated sugar lumps.', [0,2,iconsURL]); 
	//Meaty Achievements
	CCSE.NewAchievement('Meaty Lumps', 'Harvest <b>5</b> meaty sugar lumps.', [1,0,iconsURL]); 
	CCSE.NewAchievement('Bittersweet', 'Harvest <b>10</b> meaty sugar lumps.', [1,1,iconsURL]); 
	CCSE.NewAchievement('Hyperactive Abomination', 'Harvest <b>20</b> meaty sugar lumps.', [1,2,iconsURL]); 
	//Caramelized Achievements 
	CCSE.NewAchievement('Dripping Sugar', 'Harvest <b>5</b> caramalized sugar lumps.', [3,0,iconsURL]); 
	CCSE.NewAchievement('Rivers of Caramel', 'Harvest <b>10</b> caramelized sugar lumps.', [3,1,iconsURL]); 
	CCSE.NewAchievement('Sweet, Sweet Goo', 'Harvest <b>20</b> caramelized sugar lumps.', [3,2,iconsURL]);
	//Golden Achievments(Since 20 gold sugar lumps is extremely difficult to get, I nerfed the achievments. Still very hard.)
	CCSE.NewAchievement('Gold Rush', 'Harvest <b>3</b> golden sugar lumps.', [2,0,iconsURL]); 
	CCSE.NewAchievement('Lucky Lumps', 'Harvest <b>7</b> golden sugar lumps.', [2,1,iconsURL]); 
	CCSE.NewAchievement('You can stop now', 'Harvest <b>13</b> golden sugar lumps.', [2,2,iconsURL]); 
	
	//Rewrite Game.harvestLumps function to keep track of type of lump harvested
	Game.harvestLumps=function(amount,silent){
		if (!Game.canLumps()) return;
		Game.lumpT=Date.now();
		var total=amount;
		if (Game.lumpCurrentType==1 && Game.Has('Sucralosia Inutilis') && Math.random()<0.05) total*=2;
		else if (Game.lumpCurrentType==1){total*=choose([1,2]);TrixCookies.bifurcatedLumps++}
		else if (Game.lumpCurrentType==2){
			TrixCookies.goldenLumps++;//Lucky boi
			total*=choose([2,3,4,5,6,7]);
			Game.gainBuff('sugar blessing',24*60*60,1);
			Game.Earn(Math.min(Game.cookiesPs*60*60*24,Game.cookies));
			if (Game.prefs.popups) Game.Popup('Sugar blessing activated!');
			else Game.Notify('Sugar blessing activated!','Your cookies have been doubled.<br>+10% golden cookies for the next 24 hours.',[29,16]);
		}
		else if (Game.lumpCurrentType==3) {total*=choose([0,0,1,2,2]);TrixCookies.meatyLumps++}
		else if (Game.lumpCurrentType==4){
			TrixCookies.caramelizedLumps++;
			total*=choose([1,2,3]);
			Game.lumpRefill=Date.now()-Game.getLumpRefillMax();
			if (Game.prefs.popups) Game.Popup('Sugar lump cooldowns cleared!');
			else Game.Notify('Sugar lump cooldowns cleared!','',[29,27]);
		}
		total=Math.floor(total);
		Game.gainLumps(total);
		if (Game.lumpCurrentType==1){
			Game.Win('Sugar sugar'); 
			if(TrixCookies.bifurcatedLumps>=5){Game.Win('Sweet Genetics')};
			if(TrixCookies.bifurcatedLumps>=10){Game.Win('Sugar Atom Splitter')};
			if(TrixCookies.bifurcatedLumps>=20){Game.Win('Schizomainac')};
		}
		else if (Game.lumpCurrentType==2){
			Game.Win('All-natural cane sugar');
			if(TrixCookies.goldenLumps>=3){Game.Win('Gold Rush')};
			if(TrixCookies.goldenLumps>=7){Game.Win('Lucky Lumps')};
			if(TrixCookies.goldenLumps>=13){Game.Win('You can stop now')};
		}
		else if (Game.lumpCurrentType==3){
			Game.Win('Sweetmeats');
			if(TrixCookies.meatyLumps>=5){Game.Win('Meaty Lumps')};
			if(TrixCookies.meatyLumps>=10){Game.Win('Bittersweet')};
			if(TrixCookies.meatyLumps>=20){Game.Win('Hyperactive Abomination')};
		}
		else if (Game.lumpCurrentType==4){ 
			Game.Win('Maillard reaction');
			if(TrixCookies.caramelizedLumps>=5){Game.Win('Dripping Sugar')};
			if(TrixCookies.caramelizedLumps>=10){Game.Win('Rivers of Caramel')};
			if(TrixCookies.caramelizedLumps>=20){Game.Win('Sweet, Sweet Goo')};
		}
			
		if (!silent){
			var rect=l('lumpsIcon2').getBoundingClientRect();Game.SparkleAt((rect.left+rect.right)/2,(rect.top+rect.bottom)/2-24);
			if (total>0) Game.Popup('<small>+'+Beautify(total)+' sugar lump'+(total==1?'':'s')+'</small>',(rect.left+rect.right)/2,(rect.top+rect.bottom)/2-48);
			else Game.Popup('<small>Botched harvest!</small>',(rect.left+rect.right)/2,(rect.top+rect.bottom)/2-4);
			PlaySound('snd/pop'+Math.floor(Math.random()*3+1)+'.mp3',0.75);
		}
		Game.computeLumpTimes();
	}
	
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
