(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Ёлки_atlas_", frames: [[602,696,650,720],[0,0,600,974],[602,0,816,694],[0,1418,977,472]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.елка1 = function() {
	this.spriteSheet = ss["Ёлки_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.елка2 = function() {
	this.spriteSheet = ss["Ёлки_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.живыеелки = function() {
	this.spriteSheet = ss["Ёлки_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.снаступающим = function() {
	this.spriteSheet = ss["Ёлки_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.снаступающим();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.165,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,161.3,78), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.живыеелки();
	this.instance.parent = this;
	this.instance.setTransform(34.4,0,0.191,0.191,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,185.2,168.7), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvzacMAAAg03IfnAAMAAAA03g");
	this.shape.setTransform(101.2,169.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,202.4,338.5), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.елка1();
	this.instance.parent = this;
	this.instance.setTransform(106,0,0.367,0.367,23.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,324.2,337.4), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("с бесплатной доставкой ", "bold 7px 'Arial'", "#FF0000");
	this.text.lineHeight = 8;
	this.text.lineWidth = 89;
	this.text.parent = this;
	this.text.setTransform(12.2,134.5,2.235,2.235,-42.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AtAIvIXg0lIChEGI4MTng");
	this.shape.setTransform(88.9,78.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(5.6,-5.8,173,159.9), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AumBXICanhIC0BGIBjllIV8I0IAgHRIkChiIAIGwg");
	this.shape.setTransform(99.2,93.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(5.7,25.2,187,136.4), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.елка2();
	this.instance.parent = this;
	this.instance.setTransform(129,0,0.387,0.387,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,347.4,434), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("8-952-688-97-52", "bold 12px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 90;
	this.text.parent = this;
	this.text.setTransform(75.5,23.4,1.608,1.608,-8.8);

	this.text_1 = new cjs.Text("Телефон", "12px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 61;
	this.text_1.parent = this;
	this.text_1.setTransform(72.4,8.7,0.969,0.969,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,2,154.3,57.9), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.text = new cjs.Text("vk.com/elkityumen", "bold 12px 'Arial'", "#FF0000");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.lineWidth = 109;
	this.text.parent = this;
	this.text.setTransform(79.8,28.3,1.423,1.423,-8.8);

	this.text_1 = new cjs.Text("Группа «в контакте»", "12px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 15;
	this.text_1.lineWidth = 119;
	this.text_1.parent = this;
	this.text_1.setTransform(75.4,14,0.969,0.969,-8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,3,162.6,59.8), null);


// stage content:
(lib.Ёлки = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// елка
	this.instance = new lib.Символ7();
	this.instance.parent = this;
	this.instance.setTransform(180.4,355.3,0.999,0.999,163.2,0,0,203.3,300.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:162.1,regY:168.7,scaleX:1,scaleY:1,rotation:134.7,x:302.8,y:418.6},0).wait(1).to({rotation:106.4,x:318.1,y:353},0).wait(1).to({rotation:78.1,x:300.5,y:287.9},0).wait(1).to({rotation:49.8,x:254.2,y:239},0).wait(1).to({rotation:21.5,x:190.3,y:217.8},0).wait(1).to({rotation:-6.8,x:123.9,y:229.6},0).wait(1).to({rotation:-4.3,x:129.4,y:227.3},0).wait(1).to({rotation:-1.9,x:134.9,y:225.2},0).wait(1).to({rotation:-1.8,x:135},0).wait(1).to({x:135.1,y:225.1},0).wait(1).to({rotation:-1.7,x:135.2},0).wait(1).to({x:135.3},0).wait(1).to({rotation:-1.6,x:135.4},0).wait(1).to({x:135.5,y:225},0).wait(1).to({rotation:-1.5,x:135.6},0).wait(1).to({x:135.7,y:224.9},0).wait(1).to({x:135.9},0).wait(1).to({rotation:-1.4,y:224.8},0).wait(1).to({x:136},0).wait(1).to({rotation:-1.3,x:136.1},0).wait(1).to({x:136.3,y:224.7},0).wait(1).to({rotation:-1.2,x:136.4},0).wait(1).to({x:136.5},0).wait(1).to({rotation:-1.1,x:136.6,y:224.6},0).wait(2).to({rotation:-1,x:136.8},0).wait(1).to({x:136.9,y:224.5},0).wait(1).to({rotation:-0.9,x:137},0).wait(1).to({x:137.1},0).wait(1).to({rotation:-0.8,x:137.3,y:224.4},0).wait(1).to({x:137.4},0).wait(1).to({rotation:-0.7,x:137.5},0).wait(1).to({x:137.6,y:224.3},0).wait(1).to({x:137.7},0).wait(1).to({rotation:-0.6,x:137.8},0).wait(1).to({x:137.9,y:224.2},0).wait(1).to({rotation:-0.5,x:138},0).wait(1).to({x:138.1},0).wait(1).to({rotation:-0.4,x:138.2,y:224.1},0).wait(1).to({x:138.3},0).wait(1).to({rotation:-0.3,x:138.4},0).wait(1).to({x:138.5,y:224},0).wait(1).to({rotation:-0.2,x:138.7},0).wait(1).to({x:138.8},0).wait(1).to({rotation:-0.1,y:223.9},0).wait(1).to({x:138.9},0).wait(1).to({rotation:0,x:139},0).wait(1).to({x:139.2,y:223.8},0).wait(1).to({rotation:0.1,x:139.3},0).wait(1).to({x:139.4},0).wait(1).to({x:139.5,y:223.7},0).wait(1).to({rotation:0.2,x:139.6},0).wait(1).to({x:139.7},0).wait(1).to({rotation:0.3,x:139.8,y:223.6},0).wait(1).to({x:139.9},0).wait(1).to({rotation:0.4,x:140.1},0).wait(1).to({x:140.2,y:223.5},0).wait(1).to({rotation:0.5,x:140.3},0).wait(1).to({x:140.4},0).wait(1).to({rotation:0.6,x:140.5,y:223.4},0).wait(1).to({x:140.6},0).wait(1).to({rotation:0.7,x:140.7},0).wait(1).to({x:140.8,y:223.3},0).wait(1).to({rotation:0.8,x:140.9},0).wait(1).to({x:141.1},0).wait(1).to({rotation:0.9,x:141.2,y:223.2},0).wait(1).to({x:141.3},0).wait(1).to({x:141.4},0).wait(1).to({rotation:56.2,x:266.7,y:248},0).wait(1).to({rotation:111.5,x:317.8,y:365.2},0).wait(1).to({rotation:166.8,x:250.5,y:473.9},0).to({_off:true},1).wait(68));

	// с бесплатной доставкой
	this.instance_1 = new lib.Символ6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105,350.3,1,1,0,0,0,87,80.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:88.9,regY:77.2,x:-78.7,y:324.3},0).wait(1).to({x:-54.3,y:301.8},0).wait(1).to({x:-29.9,y:279.3},0).wait(1).to({x:-5.6,y:256.8},0).wait(1).to({x:18.8,y:234.3},0).wait(1).to({x:43.2,y:211.8},0).wait(1).to({x:67.6,y:189.3},0).wait(1).to({x:91.9,y:166.8},0).wait(1).to({x:92.4,y:166.5},0).wait(1).to({x:93,y:166.2},0).wait(1).to({x:93.5,y:165.9},0).wait(1).to({x:94,y:165.6},0).wait(1).to({x:94.6,y:165.3},0).wait(1).to({x:95.1,y:165},0).wait(1).to({x:95.6,y:164.7},0).wait(1).to({x:96.2,y:164.4},0).wait(1).to({x:96.7,y:164.1},0).wait(1).to({x:97.3,y:163.8},0).wait(1).to({x:97.8,y:163.5},0).wait(1).to({x:98.3,y:163.2},0).wait(1).to({x:98.9,y:162.9},0).wait(1).to({x:99.4,y:162.6},0).wait(1).to({x:99.9,y:162.3},0).wait(1).to({x:100.5,y:162},0).wait(1).to({x:101,y:161.8},0).wait(1).to({x:101.5,y:161.5},0).wait(1).to({x:102.1,y:161.2},0).wait(1).to({x:102.6,y:160.9},0).wait(1).to({x:103.1,y:160.6},0).wait(1).to({x:103.7,y:160.3},0).wait(1).to({x:104.2,y:160},0).wait(1).to({x:104.7,y:159.7},0).wait(1).to({x:105.3,y:159.4},0).wait(1).to({x:105.8,y:159.1},0).wait(1).to({x:106.3,y:158.8},0).wait(1).to({x:106.9,y:158.5},0).wait(1).to({x:107.4,y:158.2},0).wait(1).to({x:108,y:157.9},0).wait(1).to({x:108.5,y:157.6},0).wait(1).to({x:109,y:157.3},0).wait(1).to({x:109.6,y:157},0).wait(1).to({x:110.1,y:156.8},0).wait(1).to({x:110.6,y:156.5},0).wait(1).to({x:111.2,y:156.2},0).wait(1).to({x:111.7,y:155.9},0).wait(1).to({x:112.2,y:155.6},0).wait(1).to({x:112.8,y:155.3},0).wait(1).to({x:113.3,y:155},0).wait(1).to({x:113.8,y:154.7},0).wait(1).to({x:114.4,y:154.4},0).wait(1).to({x:114.9,y:154.1},0).wait(1).to({x:115.4,y:153.8},0).wait(1).to({x:116,y:153.5},0).wait(1).to({x:116.5,y:153.2},0).wait(1).to({x:117.1,y:152.9},0).wait(1).to({x:117.6,y:152.6},0).wait(1).to({x:118.1,y:152.3},0).wait(1).to({x:118.7,y:152.1},0).wait(1).to({x:119.2,y:151.8},0).wait(1).to({x:119.7,y:151.5},0).wait(1).to({x:120.3,y:151.2},0).wait(1).to({x:161.9,y:113.8},0).wait(1).to({x:203.6,y:76.5},0).wait(1).to({x:245.2,y:39.2},0).wait(1).to({x:286.9,y:1.8},0).to({_off:true},1).wait(70));

	// живые елки
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-41.4,-27.5,1,1,0,0,0,92.6,84.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({x:-17.8,y:-4.7},0).wait(1).to({x:5.9,y:18},0).wait(1).to({x:29.5,y:40.8},0).wait(1).to({x:53.2,y:63.6},0).wait(1).to({x:76.8,y:86.3},0).wait(1).to({x:76.9,y:86.4},0).wait(1).to({x:77,y:86.5},0).wait(1).to({x:77.1},0).wait(1).to({x:77.2,y:86.6},0).wait(1).to({x:77.3,y:86.7},0).wait(1).to({x:77.4,y:86.8},0).wait(1).to({x:77.5,y:86.9},0).wait(1).to({x:77.6,y:87},0).wait(1).to({x:77.7},0).wait(1).to({x:77.8,y:87.1},0).wait(1).to({x:77.9,y:87.2},0).wait(1).to({x:78,y:87.3},0).wait(1).to({x:78.1,y:87.4},0).wait(1).to({x:78.2,y:87.5},0).wait(1).to({x:78.3},0).wait(1).to({x:78.5,y:87.6},0).wait(1).to({x:78.6,y:87.7},0).wait(1).to({x:78.7,y:87.8},0).wait(1).to({x:78.8,y:87.9},0).wait(1).to({x:78.9,y:88},0).wait(1).to({x:79},0).wait(1).to({x:79.1,y:88.1},0).wait(1).to({x:79.2,y:88.2},0).wait(1).to({x:79.3,y:88.3},0).wait(1).to({x:79.4,y:88.4},0).wait(1).to({x:79.5},0).wait(1).to({x:79.6,y:88.5},0).wait(1).to({x:79.7,y:88.6},0).wait(1).to({x:79.8,y:88.7},0).wait(1).to({x:79.9,y:88.8},0).wait(1).to({x:80,y:88.9},0).wait(1).to({x:80.1},0).wait(1).to({x:80.2,y:89},0).wait(1).to({x:80.3,y:89.1},0).wait(1).to({x:80.4,y:89.2},0).wait(1).to({x:80.5,y:89.3},0).wait(1).to({x:80.6,y:89.4},0).wait(1).to({x:80.7},0).wait(1).to({x:80.8,y:89.5},0).wait(1).to({x:80.9,y:89.6},0).wait(1).to({x:81,y:89.7},0).wait(1).to({x:81.1,y:89.8},0).wait(1).to({x:81.2},0).wait(1).to({x:81.3,y:89.9},0).wait(1).to({x:81.4,y:90},0).wait(1).to({x:81.5,y:90.1},0).wait(1).to({x:81.6,y:90.2},0).wait(1).to({x:81.8,y:90.3},0).wait(1).to({x:81.9},0).wait(1).to({x:82,y:90.4},0).wait(1).to({x:82.1,y:90.5},0).wait(1).to({x:82.2,y:90.6},0).wait(1).to({x:82.3,y:90.7},0).wait(1).to({x:82.4,y:90.8},0).wait(1).to({x:82.5},0).wait(1).to({x:82.6,y:90.9},0).wait(1).to({x:82.7,y:91},0).wait(1).to({x:82.8,y:91.1},0).wait(1).to({x:82.9,y:91.2},0).wait(1).to({x:83,y:91.3},0).wait(1).to({x:83.1},0).wait(1).to({x:83.2,y:91.4},0).wait(1).to({x:83.3,y:91.5},0).wait(1).to({x:155.6,y:137.6},0).wait(1).to({x:227.9,y:183.7},0).wait(1).to({x:300.2,y:229.9},0).to({_off:true},1).wait(68));

	// с наступающим
	this.instance_3 = new lib.Символ11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(331.6,358.1,0.965,0.965,19.8,0,0,80,38.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},0).wait(1).to({regX:80.7,regY:39,scaleX:0.97,scaleY:0.97,rotation:19.7,x:296.6,y:333.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:19.4,x:261,y:308.3},0).wait(1).to({rotation:19.2,x:225.5,y:283.2},0).wait(1).to({rotation:18.9,x:190,y:258},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:18.6,x:154.5,y:232.8},0).wait(1).to({rotation:18.4,x:119,y:207.6},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:18.1,x:118.4,y:207.2},0).wait(1).to({rotation:17.9,x:117.8,y:206.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:17.6,x:117.2,y:206.2},0).wait(1).to({rotation:17.3,x:116.7,y:205.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:17.1,x:116.1,y:205.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:16.8,x:115.5,y:204.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:16.5,x:115,y:204.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:16.3,x:114.4,y:203.9},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:16,x:113.8,y:203.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:15.8,x:113.3,y:203.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:15.5,x:112.7,y:202.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:15.2,x:112.1,y:202.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:15,x:111.5,y:201.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:14.7,x:111,y:201.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:14.4,x:110.4,y:200.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:14.2,x:109.8,y:200.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:13.9,x:109.3,y:199.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:13.6,x:108.7,y:199.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:13.4,x:108.1,y:199},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:13.1,x:107.5,y:198.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:12.9,x:106.9,y:198},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:12.6,x:106.4,y:197.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:12.3,x:105.8,y:197.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.1,x:105.3,y:196.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.8,x:104.7,y:196.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:11.5,x:104.1,y:195.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:11.3,x:103.6,y:195.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:11,x:103,y:194.9},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:10.7,x:102.4,y:194.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:10.5,x:101.9,y:194},0).wait(1).to({scaleX:1.11,scaleY:1.11,rotation:10.2,x:101.3,y:193.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:10,x:100.7,y:193},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:9.7,x:100.2,y:192.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:9.4,x:99.6,y:192.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:9.2,x:99,y:191.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:8.9,x:98.4,y:191.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:8.6,x:97.8,y:190.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:8.4,x:97.2,y:190.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:8.1,x:96.7,y:189.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:7.9,x:96.1,y:189.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,rotation:7.6,x:95.5,y:188.9},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:7.3,x:95,y:188.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:7.1,x:94.4,y:188},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:6.8,x:93.8,y:187.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:6.5,x:93.3,y:187.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:6.3,x:92.7,y:186.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:6,x:92.1,y:186.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:5.7,x:91.6,y:185.7},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:5.5,x:91,y:185.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:5.2,x:90.5,y:184.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,rotation:5,x:90,y:184.4},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:4.7,x:89.4,y:184},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:4.4,x:88.8,y:183.5},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:4.2,x:88.2,y:183},0).wait(1).to({scaleX:1.24,scaleY:1.24,rotation:3.9,x:87.7,y:182.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:3.6,x:87.1,y:182.1},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:3.4,x:86.6,y:181.6},0).wait(1).to({scaleX:1.28,scaleY:1.28,rotation:3.1,x:86,y:181.2},0).wait(1).to({scaleX:1.29,scaleY:1.29,rotation:2.8,x:85.4,y:180.8},0).wait(1).to({x:38.4,y:165.3},0).wait(1).to({x:-8.6,y:149.8},0).wait(1).to({x:-55.7,y:134.3},0).wait(1).to({x:-102.7,y:118.8},0).wait(1));

	// с наступающий
	this.instance_4 = new lib.Символ5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(331.9,356.2,1,1,0,0,0,106.1,85.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(70).to({_off:false},0).wait(1).to({regX:99.2,regY:93.3,rotation:0.4,x:290,y:338.1},0).wait(1).to({rotation:0.8,x:255.1,y:312.5},0).wait(1).to({rotation:1.2,x:220.2,y:287},0).wait(1).to({rotation:1.6,x:185.3,y:261.4},0).wait(1).to({rotation:2,x:150.3,y:235.9},0).wait(1).to({rotation:2.4,x:115.4,y:210.3},0).wait(1).to({rotation:2.1,x:114.9,y:209.9},0).wait(1).to({rotation:1.8,x:114.3,y:209.4},0).wait(1).to({rotation:1.5,x:113.7,y:209},0).wait(1).to({rotation:1.2,x:113.2,y:208.6},0).wait(1).to({rotation:0.8,x:112.7,y:208.2},0).wait(1).to({rotation:0.5,x:112.1,y:207.7},0).wait(1).to({rotation:0.2,x:111.6,y:207.3},0).wait(1).to({rotation:-0.1,x:111,y:206.8},0).wait(1).to({rotation:-0.4,x:110.5,y:206.4},0).wait(1).to({rotation:-0.7,x:110,y:206},0).wait(1).to({rotation:-1.1,x:109.4,y:205.6},0).wait(1).to({rotation:-1.4,x:108.9,y:205.1},0).wait(1).to({rotation:-1.7,x:108.3,y:204.7},0).wait(1).to({rotation:-2,x:107.8,y:204.3},0).wait(1).to({rotation:-2.3,x:107.2,y:203.8},0).wait(1).to({rotation:-2.6,x:106.7,y:203.4},0).wait(1).to({rotation:-2.9,x:106.1,y:203},0).wait(1).to({rotation:-3.3,x:105.6,y:202.5},0).wait(1).to({rotation:-3.6,x:105,y:202.1},0).wait(1).to({rotation:-3.9,x:104.6,y:201.6},0).wait(1).to({rotation:-4.2,x:104.1,y:201.2},0).wait(1).to({rotation:-4.5,x:103.5,y:200.8},0).wait(1).to({rotation:-4.8,x:102.9,y:200.3},0).wait(1).to({rotation:-5.2,x:102.4,y:199.9},0).wait(1).to({rotation:-5.5,x:101.9,y:199.4},0).wait(1).to({rotation:-5.8,x:101.3,y:199},0).wait(1).to({rotation:-6.1,x:100.8,y:198.6},0).wait(1).to({rotation:-6.4,x:100.3,y:198.1},0).wait(1).to({rotation:-6.7,x:99.7,y:197.7},0).wait(1).to({rotation:-7,x:99.2,y:197.3},0).wait(1).to({rotation:-7.4,x:98.6,y:196.9},0).wait(1).to({rotation:-7.7,x:98.1,y:196.4},0).wait(1).to({rotation:-8,x:97.6,y:196},0).wait(1).to({rotation:-8.3,x:97,y:195.5},0).wait(1).to({rotation:-8.6,x:96.5,y:195.1},0).wait(1).to({rotation:-8.9,x:95.9,y:194.7},0).wait(1).to({rotation:-9.3,x:95.4,y:194.2},0).wait(1).to({rotation:-9.6,x:94.8,y:193.8},0).wait(1).to({rotation:-9.9,x:94.3,y:193.3},0).wait(1).to({rotation:-10.2,x:93.8,y:192.9},0).wait(1).to({rotation:-10.5,x:93.3,y:192.5},0).wait(1).to({rotation:-10.8,x:92.7,y:192},0).wait(1).to({rotation:-11.2,x:92.2,y:191.6},0).wait(1).to({rotation:-11.5,x:91.6,y:191.2},0).wait(1).to({rotation:-11.8,x:91.1,y:190.7},0).wait(1).to({rotation:-12.1,x:90.6,y:190.3},0).wait(1).to({rotation:-12.4,x:90,y:189.8},0).wait(1).to({rotation:-12.7,x:89.5,y:189.4},0).wait(1).to({rotation:-13,x:88.9,y:188.9},0).wait(1).to({rotation:-13.4,x:88.4,y:188.5},0).wait(1).to({rotation:-13.7,x:87.9,y:188},0).wait(1).to({rotation:-14,x:87.3,y:187.6},0).wait(1).to({rotation:-14.3,x:86.8,y:187.2},0).wait(1).to({rotation:-14.6,x:86.3,y:186.7},0).wait(1).to({rotation:-14.9,x:85.7,y:186.3},0).wait(1).to({rotation:-15.3,x:85.2,y:185.8},0).wait(1).to({rotation:-15.6,x:84.7,y:185.4},0).wait(1).to({rotation:-15.9,x:84.1,y:184.9},0).wait(1).to({rotation:-16.2,x:83.6,y:184.5},0).wait(1).to({x:36.7,y:168.9},0).wait(1).to({x:-10.2,y:153.3},0).wait(1).to({x:-57,y:137.8},0).wait(1).to({x:-103.9,y:122.2},0).wait(1));

	// елка2
	this.instance_5 = new lib.Символ4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(184.7,400.3,0.915,0.915,118.8,0,0,238.8,376.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70).to({_off:false},0).wait(1).to({regX:173.7,regY:217,scaleX:0.92,scaleY:0.92,rotation:98.2,x:338.1,y:362},0).wait(1).to({rotation:77.6,x:314.9,y:310.5},0).wait(1).to({rotation:57,x:275,y:270.5},0).wait(1).to({rotation:36.4,x:223.5,y:247.1},0).wait(1).to({rotation:15.8,x:167.2,y:243.1},0).wait(1).to({rotation:-4.8,x:113.1,y:259.2},0).wait(1).to({rotation:-3.1,x:117.2,y:257.2},0).wait(1).to({rotation:-1.4,x:121.4,y:255.4},0).wait(1).to({x:121.5,y:255.3},0).wait(1).to({rotation:-1.3,x:121.6,y:255.2},0).wait(1).to({x:121.7},0).wait(1).to({x:121.9},0).wait(1).to({rotation:-1.2,x:122,y:255.1},0).wait(2).to({rotation:-1.1,x:122.1,y:255},0).wait(1).to({x:122.2},0).wait(1).to({x:122.3,y:254.9},0).wait(1).to({rotation:-1,x:122.4},0).wait(1).to({x:122.5,y:254.8},0).wait(1).to({rotation:-0.9,x:122.7},0).wait(1).to({x:122.8,y:254.7},0).wait(1).to({rotation:-0.8,x:122.9},0).wait(1).to({x:123},0).wait(1).to({x:123.1,y:254.6},0).wait(1).to({rotation:-0.7,x:123.2},0).wait(1).to({x:123.3,y:254.5},0).wait(1).to({rotation:-0.6,x:123.5},0).wait(2).to({x:123.6,y:254.4},0).wait(1).to({rotation:-0.5,x:123.7,y:254.3},0).wait(1).to({x:123.8},0).wait(1).to({rotation:-0.4,x:123.9},0).wait(1).to({x:124,y:254.2},0).wait(1).to({x:124.1},0).wait(1).to({rotation:-0.3,x:124.3,y:254.1},0).wait(1).to({x:124.4},0).wait(1).to({rotation:-0.2,x:124.5,y:254},0).wait(1).to({x:124.6},0).wait(1).to({rotation:-0.1,x:124.7},0).wait(1).to({x:124.8,y:253.9},0).wait(1).to({x:124.9},0).wait(1).to({rotation:0,x:125,y:253.8},0).wait(1).to({x:125.1},0).wait(1).to({rotation:0.1,x:125.2,y:253.7},0).wait(1).to({x:125.3},0).wait(1).to({x:125.4},0).wait(1).to({rotation:0.2,x:125.5,y:253.6},0).wait(1).to({x:125.6},0).wait(1).to({rotation:0.3,x:125.8,y:253.5},0).wait(1).to({x:125.9},0).wait(1).to({x:126,y:253.4},0).wait(1).to({rotation:0.4,x:126.1},0).wait(1).to({x:126.2},0).wait(1).to({rotation:0.5,x:126.3,y:253.3},0).wait(1).to({x:126.4},0).wait(1).to({rotation:0.6,x:126.5,y:253.2},0).wait(1).to({x:126.6},0).wait(1).to({x:126.7,y:253.1},0).wait(1).to({rotation:0.7,x:126.8},0).wait(1).to({x:126.9},0).wait(1).to({rotation:0.8,x:127,y:253},0).wait(1).to({x:127.1},0).wait(1).to({x:127.2,y:252.9},0).wait(1).to({rotation:0.9,x:127.3},0).wait(1).to({x:127.4},0).wait(1).to({rotation:32.2,x:212.2,y:244.6},0).wait(1).to({rotation:63.5,x:289,y:281.5},0).wait(1).to({rotation:94.7,x:335.5,y:352.9},0).wait(1).to({rotation:126,x:338.1,y:438.1},0).wait(1));

	// тел
	this.instance_6 = new lib.Символ3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-109.2,67.2,1,1,0,0,0,77.1,29.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70).to({_off:false},0).wait(1).to({regX:77.2,regY:30.2,x:-76.6,y:62.6},0).wait(1).to({x:-44.1,y:57.5},0).wait(1).to({x:-11.6,y:52.3},0).wait(1).to({x:20.9,y:47.2},0).wait(1).to({x:53.4,y:42.1},0).wait(1).to({x:85.9,y:37},0).wait(1).to({x:86.1,y:36.9},0).wait(1).to({x:86.4,y:36.8},0).wait(1).to({x:86.7},0).wait(1).to({x:87,y:36.7},0).wait(1).to({x:87.2},0).wait(1).to({x:87.5,y:36.6},0).wait(1).to({x:87.8},0).wait(1).to({x:88.1,y:36.5},0).wait(1).to({x:88.4},0).wait(1).to({x:88.6,y:36.4},0).wait(1).to({x:88.9,y:36.3},0).wait(1).to({x:89.2},0).wait(1).to({x:89.5,y:36.2},0).wait(1).to({x:89.8},0).wait(1).to({x:90,y:36.1},0).wait(1).to({x:90.3},0).wait(1).to({x:90.6,y:36},0).wait(1).to({x:90.9},0).wait(1).to({x:91.2,y:35.9},0).wait(1).to({x:91.4,y:35.8},0).wait(1).to({x:91.7},0).wait(1).to({x:92,y:35.7},0).wait(1).to({x:92.3},0).wait(1).to({x:92.6,y:35.6},0).wait(1).to({x:92.8},0).wait(1).to({x:93.1,y:35.5},0).wait(1).to({x:93.4},0).wait(1).to({x:93.7,y:35.4},0).wait(1).to({x:94},0).wait(1).to({x:94.2,y:35.3},0).wait(1).to({x:94.5,y:35.2},0).wait(1).to({x:94.8},0).wait(1).to({x:95.1,y:35.1},0).wait(1).to({x:95.4},0).wait(1).to({x:95.6,y:35},0).wait(1).to({x:95.9},0).wait(1).to({x:96.2,y:34.9},0).wait(1).to({x:96.5},0).wait(1).to({x:96.8,y:34.8},0).wait(1).to({x:97,y:34.7},0).wait(1).to({x:97.3},0).wait(1).to({x:97.6,y:34.6},0).wait(1).to({x:97.9},0).wait(1).to({x:98.2,y:34.5},0).wait(1).to({x:98.4},0).wait(1).to({x:98.7,y:34.4},0).wait(1).to({x:99},0).wait(1).to({x:99.3,y:34.3},0).wait(1).to({x:99.6},0).wait(1).to({x:99.8,y:34.2},0).wait(1).to({x:100.1,y:34.1},0).wait(1).to({x:100.4},0).wait(1).to({x:100.7,y:34},0).wait(1).to({x:101},0).wait(1).to({x:101.2,y:33.9},0).wait(1).to({x:101.5},0).wait(1).to({x:101.8,y:33.8},0).wait(1).to({x:102.1},0).wait(1).to({x:102.4,y:33.7},0).wait(1).to({x:151.1,y:27.1},0).wait(1).to({x:199.9,y:20.4},0).wait(1).to({x:248.6,y:13.7},0).wait(1).to({x:297.4,y:7},0).wait(1));

	// вк
	this.instance_7 = new lib.Символ2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-90.4,119.3,1,1,0,0,0,76.9,31.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(73).to({_off:false},0).wait(1).to({regX:81.3,regY:32.3,x:-56.9,y:114.4},0).wait(1).to({x:-27.9,y:108.4},0).wait(1).to({x:1.2,y:102.3},0).wait(1).to({x:30.2,y:96.3},0).wait(1).to({x:59.3,y:90.2},0).wait(1).to({x:88.3,y:84.2},0).wait(1).to({x:88.7,y:84.1},0).wait(1).to({x:89.2},0).wait(1).to({x:89.6,y:84},0).wait(1).to({x:90.1},0).wait(1).to({x:90.5},0).wait(1).to({x:91,y:83.9},0).wait(1).to({x:91.4},0).wait(1).to({x:91.8},0).wait(1).to({x:92.3,y:83.8},0).wait(1).to({x:92.7},0).wait(1).to({x:93.2},0).wait(1).to({x:93.6,y:83.7},0).wait(1).to({x:94.1},0).wait(1).to({x:94.5},0).wait(1).to({x:94.9,y:83.6},0).wait(1).to({x:95.4},0).wait(1).to({x:95.8},0).wait(1).to({x:96.3,y:83.5},0).wait(1).to({x:96.7},0).wait(1).to({x:97.2},0).wait(1).to({x:97.6,y:83.4},0).wait(1).to({x:98},0).wait(1).to({x:98.5,y:83.3},0).wait(1).to({x:98.9},0).wait(1).to({x:99.4},0).wait(1).to({x:99.8,y:83.2},0).wait(1).to({x:100.3},0).wait(1).to({x:100.7},0).wait(1).to({x:101.1,y:83.1},0).wait(1).to({x:101.6},0).wait(1).to({x:102},0).wait(1).to({x:102.5,y:83},0).wait(1).to({x:102.9},0).wait(1).to({x:103.4},0).wait(1).to({x:103.8,y:82.9},0).wait(1).to({x:104.2},0).wait(1).to({x:104.7},0).wait(1).to({x:105.1,y:82.8},0).wait(1).to({x:105.6},0).wait(1).to({x:106},0).wait(1).to({x:106.5,y:82.7},0).wait(1).to({x:106.9},0).wait(1).to({x:107.3},0).wait(1).to({x:107.8,y:82.6},0).wait(1).to({x:108.2},0).wait(1).to({x:108.7,y:82.5},0).wait(1).to({x:109.1},0).wait(1).to({x:109.6},0).wait(1).to({x:110,y:82.4},0).wait(1).to({x:110.4},0).wait(1).to({x:110.9},0).wait(1).to({x:111.3,y:82.3},0).wait(1).to({x:111.8},0).wait(1).to({x:112.2},0).wait(1).to({x:112.7,y:82.2},0).wait(1).to({x:113.1},0).wait(1).to({x:160.8,y:74.9},0).wait(1).to({x:208.6,y:67.6},0).wait(1).to({x:256.3,y:60.3},0).wait(1).to({x:304,y:53},0).wait(1));

	// Слой 12
	this.instance_8 = new lib.Символ8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(101.3,166.3,1,1,0,0,0,101.2,169.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(140));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,54.6,595.7,789.4);
// library properties:
lib.properties = {
	id: '4D78B4C9D9180F4C841CAEC53DEF3501',
	width: 200,
	height: 333,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Ёлки_atlas_.png", id:"Ёлки_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['4D78B4C9D9180F4C841CAEC53DEF3501'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;