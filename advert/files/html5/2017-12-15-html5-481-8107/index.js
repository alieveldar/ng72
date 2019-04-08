(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Абажур_Отель_atlas_", frames: [[0,338,363,335],[0,0,364,336],[0,675,363,335],[365,338,139,120]]}
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



(lib.el1 = function() {
	this.spriteSheet = ss["Абажур_Отель_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.el2 = function() {
	this.spriteSheet = ss["Абажур_Отель_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.el3 = function() {
	this.spriteSheet = ss["Абажур_Отель_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.el6 = function() {
	this.spriteSheet = ss["Абажур_Отель_atlas_"];
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


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.el1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,303.3,279.9), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.el2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.835,0.835);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0,304.1,280.7), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.el3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.838,0.838);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0,0,304.1,280.6), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.el6();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,0,139,120), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AAVAzIAAg1IAAgJIAAgJIgpBHIgQAAIAAhlIAQAAIAAA0IAAAJIAAAKIAphHIAQAAIAABlg");
	this.shape.setTransform(132.7,45.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AAUAzIAAgrIgnAAIAAArIgRAAIAAhlIARAAIAAArIAnAAIAAgrIARAAIAABlg");
	this.shape_1.setTransform(123.1,45.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AgfAzIAAhlIA/AAIAAAPIguAAIAAAcIAoAAIAAAOIgoAAIAAAdIAuAAIAAAPg");
	this.shape_2.setTransform(114.4,45.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AAbAzIAAhHIgbAuIgaguIAABHIgRAAIAAhlIASAAIAZAvIAagvIASAAIAABlg");
	this.shape_3.setTransform(104.6,45.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgEAvQgJgGgFgKQgGgKgCgOIgOAAIAAAsIgQAAIAAhlIAQAAIAAArIAOAAQACgNAGgKQAFgKAJgGQAIgFAMAAQAMAAAJAGQAKAHAFALQAGAMgBAPIAAABQABAPgGAMQgFALgKAHQgJAGgNAAQgLAAgIgFgAgBgaQgIAJABARIAAABQAAALADAIQADAIAEAFQAGAEAIAAQAHAAAFgEQAGgFADgIQADgIAAgLIAAgBQAAgLgDgIQgDgIgGgFQgFgEgIAAQgLAAgFAKg");
	this.shape_4.setTransform(92.7,45.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgHAzIAAhVIgbAAIAAgQIBFAAIAAAQIgaAAIAABVg");
	this.shape_5.setTransform(81.8,45.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgfAzIAAhlIA/AAIAAAPIguAAIAAAcIAoAAIAAAOIgoAAIAAAdIAuAAIAAAPg");
	this.shape_6.setTransform(70.2,45.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgiAzIAAhlIAhAAQAKAAAJAEQAHAEAFAIQAFAHAAALQgBALgFAHQgEAIgJAEQgJAEgJAAIgOAAIAAAhgAgQADIAPAAQAIgBAFgEQAFgFABgIQgBgKgFgFQgGgFgHAAIgPAAg");
	this.shape_7.setTransform(62,45.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgHAzIAAhVIgbAAIAAgQIBFAAIAAAQIgaAAIAABVg");
	this.shape_8.setTransform(53.4,45.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AAUAzIAAgrIgnAAIAAArIgRAAIAAhlIARAAIAAArIAnAAIAAgrIARAAIAABlg");
	this.shape_9.setTransform(44.6,45.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgfAzIAAhlIA/AAIAAAPIguAAIAAAcIAoAAIAAAOIgoAAIAAAdIAuAAIAAAPg");
	this.shape_10.setTransform(35.9,45.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AAaA9IAAgUIhDAAIAAhlIARAAIAABWIAmAAIAAhWIARAAIAABWIALAAIgCAjg");
	this.shape_11.setTransform(27.3,46.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgkAzIAAhlIAkAAQAJAAAIADQAHADAEAGQAEAGAAAIQAAAHgCAEQgCAFgDACIgIAFQAJACAFAGQAFAFABAKQgBAKgEAGQgFAGgIADQgIAEgLAAgAgTAkIAUAAQAJAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgKAAIgTAAgAgTgHIARAAQAIAAAFgDQAEgEABgHQgBgHgEgDQgEgEgIAAIgSAAg");
	this.shape_12.setTransform(14,45.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgfAzIAAhlIA/AAIAAAPIguAAIAAAcIAoAAIAAAOIgoAAIAAAdIAuAAIAAAPg");
	this.shape_13.setTransform(173,29.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgQAuQgKgHgGgLQgFgMgBgPIAAgBQABgPAFgMQAGgLAKgHQALgGAMAAQALAAAHADQAHADAGAFIgIAOQgFgEgGgDQgFgDgHAAQgHAAgGAFQgHAEgDAIQgEAIAAALIAAABQAAALAEAIQADAIAHAEQAGAFAHAAQAHAAAGgDQAFgDAGgFIAIANQgHAGgHAEQgIADgLAAQgMAAgKgGg");
	this.shape_14.setTransform(164.3,29.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AATAzIgcgtIgMAPIAAAeIgRAAIAAhlIARAAIAAAyIAmgyIAVAAIgkAsIAlA5g");
	this.shape_15.setTransform(155.7,29.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AgfAzIAAhlIA/AAIAAAPIguAAIAAAcIAoAAIAAAOIgoAAIAAAdIAuAAIAAAPg");
	this.shape_16.setTransform(146.8,29.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AglAzIgEgBIABgOIACAAIADAAQADABADgCQAEgCACgGQACgGACgMQABgKAAgUIAAgdIA8AAIAABkIgQAAIAAhVIgcAAIAAARQAAAVgCAOQgCAOgEAHQgDAIgGADQgFACgHAAIgGAAg");
	this.shape_17.setTransform(137.1,29.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AAUAzIAAhVIgmAAIAABVIgRAAIAAhlIBHAAIAABlg");
	this.shape_18.setTransform(128.1,29.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AAbAzIAAhHIgbAuIgaguIAABHIgRAAIAAhlIASAAIAZAvIAagvIASAAIAABlg");
	this.shape_19.setTransform(117.9,29.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AgWAuQgLgHgFgLQgGgMAAgPIAAgBQAAgPAGgMQAGgLAKgHQAKgGANAAQAMAAAKAGQAKAHAHALQAFAMAAAPIAAABQAAAPgFALQgHAMgKAHQgKAGgNAAQgMAAgKgGgAgNggQgGAFgDAIQgEAIAAALIAAABQAAALAEAIQADAIAGAEQAGAFAIAAQAIAAAFgFQAHgEADgIQADgIABgLIAAgBQgBgLgDgIQgEgIgGgEQgGgFgIAAQgHAAgGAEg");
	this.shape_20.setTransform(107.1,29.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("AATAzIgcgtIgMAPIAAAeIgRAAIAAhlIARAAIAAAyIAmgyIAUAAIgjAsIAlA5g");
	this.shape_21.setTransform(97.9,29.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AAbAzIAAhHIgbAuIgaguIAABHIgRAAIAAhlIASAAIAZAvIAagvIASAAIAABlg");
	this.shape_22.setTransform(83.7,29.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AgXAuQgJgHgGgLQgFgMgBgPIAAgBQABgPAFgMQAGgLAKgHQAKgGAMAAQANAAALAGQAJAHAGALQAGAMAAAPIAAABQAAAPgGALQgGAMgJAHQgKAGgOAAQgMAAgLgGgAgNggQgGAFgEAIQgDAIAAALIAAABQAAALADAIQAEAIAGAEQAGAFAHAAQAJAAAGgFQAGgEADgIQADgIABgLIAAgBQgBgLgDgIQgEgIgFgEQgHgFgIAAQgHAAgGAEg");
	this.shape_23.setTransform(73,29.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("AAUAzIAAgrIgnAAIAAArIgRAAIAAhlIARAAIAAArIAnAAIAAgrIARAAIAABlg");
	this.shape_24.setTransform(62.9,29.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("AgHAzIAAhVIgbAAIAAgQIBFAAIAAAQIgaAAIAABVg");
	this.shape_25.setTransform(54.1,29.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("AAVAzIAAg1IAAgJIAAgJIgpBHIgRAAIAAhlIARAAIAAA0IAAAJIAAAKIAqhHIAQAAIAABlg");
	this.shape_26.setTransform(45.4,29.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("AglAzIgEgBIABgOIACAAIADAAQADABADgCQAEgCACgGQACgGACgMQABgKAAgUIAAgdIA8AAIAABkIgQAAIAAhVIgcAAIAAARQAAAVgCAOQgCAOgEAHQgDAIgGADQgFACgHAAIgGAAg");
	this.shape_27.setTransform(35.2,29.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("AgYAxQgIgDgGgHIAIgMIAKAHQAGADAGAAQALAAAIgIQAIgIACgOIglAAIAAgOIAlAAQgCgJgEgGQgEgHgHgDQgFgEgIAAQgGAAgFADIgJAGIgHgMIAIgGQAEgDAFgCQAGgBAHAAQAMAAALAGQAKAHAGAMQAGALAAAPIAAABQgBAPgFAMQgGALgKAHQgKAGgMAAQgLAAgIgDg");
	this.shape_28.setTransform(26.3,29.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AgkAzIAAhlIAkAAQAJAAAIADQAHADAEAGQAEAGAAAIQAAAHgCAEQgCAFgDACIgIAFQAJACAFAGQAFAFABAKQgBAKgEAGQgFAGgIADQgIAEgLAAgAgTAkIAUAAQAJAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgKAAIgTAAgAgTgHIARAAQAIAAAFgDQAEgEABgHQgBgHgEgDQgEgEgIAAIgSAAg");
	this.shape_29.setTransform(14,29.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AgbAzIgIgDIAFgNIAFABIAFAAQAEAAADgCQAEgDADgFIgjhNIASAAIAZA5IAXg5IARAAIghBPQgFAMgGAGQgHAGgJAAIgJgBg");
	this.shape_30.setTransform(171.7,13);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AghAzIAAhlIAgAAQAKAAAJAEQAHAEAFAIQAFAHAAALQgBALgFAHQgEAIgJAEQgJAEgJAAIgOAAIAAAhgAgQADIAPAAQAIgBAFgEQAFgFABgIQgBgKgFgFQgGgFgHAAIgPAAg");
	this.shape_31.setTransform(163.2,12.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AAVAzIAAg1IAAgJIAAgJIgpBHIgQAAIAAhlIAQAAIAAA0IAAAJIAAAKIAphHIAQAAIAABlg");
	this.shape_32.setTransform(153.9,12.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgHAzIAAhVIgbAAIAAgQIBFAAIAAAQIgaAAIAABVg");
	this.shape_33.setTransform(145,12.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgiAzIAAhlIAhAAQAKAAAJAEQAHAEAFAIQAFAHAAALQgBALgFAHQgEAIgJAEQgJAEgJAAIgOAAIAAAhgAgQADIAPAAQAIgBAFgEQAFgFABgIQgBgKgFgFQgGgFgHAAIgPAAg");
	this.shape_34.setTransform(137.1,12.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("AAcAzIgJgYIgmAAIgIAYIgRAAIAlhlIAPAAIAlBlgAAOAMIgOgnIgOAnIAcAAg");
	this.shape_35.setTransform(127.8,12.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AgkAzIAAhlIAkAAQAJAAAIADQAHADAEAGQAEAGAAAIQAAAHgCAEQgCAFgDACIgIAFQAJACAFAGQAFAFABAKQgBAKgEAGQgFAGgIADQgIAEgLAAgAgTAkIAUAAQAJAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgKAAIgTAAgAgTgHIARAAQAIAAAFgDQAEgEABgHQgBgHgEgDQgEgEgIAAIgSAAg");
	this.shape_36.setTransform(118.6,12.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AATAzIgcgtIgMAPIAAAeIgRAAIAAhlIARAAIAAAyIAmgyIAVAAIgkAsIAlA5g");
	this.shape_37.setTransform(109.8,12.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("AAVBBIAAg1IAAgJIAAgIIgqBGIgQAAIAAhlIARAAIAAA0IAAAJIAAAKIAqhHIAQAAIAABlgAgNgvQgFgGgCgJIALgCQABAEADADQACADAEAAQAEAAADgDQADgDABgEIAKACQgCAJgFAGQgGAEgIAAQgIAAgGgEg");
	this.shape_38.setTransform(96.3,11.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6600").s().p("AgbAzIgIgDIAFgNIAFABIAFAAQAEAAADgCQAEgDADgFIgjhNIASAAIAZA5IAXg5IARAAIghBPQgFAMgGAGQgHAGgJAAIgJgBg");
	this.shape_39.setTransform(86.9,13);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AghAzIAAhlIAgAAQAKAAAJAEQAHAEAFAIQAFAHAAALQgBALgFAHQgEAIgJAEQgJAEgJAAIgOAAIAAAhgAgQADIAOAAQAJgBAFgEQAGgFAAgIQAAgKgGgFQgGgFgIAAIgOAAg");
	this.shape_40.setTransform(78.5,12.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AAVAzIAAg1IAAgJIAAgJIgpBHIgRAAIAAhlIARAAIAAA0IAAAJIAAAKIAqhHIAPAAIAABlg");
	this.shape_41.setTransform(69.1,12.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AAUAzIAAgrIgnAAIAAArIgRAAIAAhlIARAAIAAArIAnAAIAAgrIARAAIAABlg");
	this.shape_42.setTransform(59.4,12.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgWAuQgLgHgFgLQgGgMAAgPIAAgBQAAgPAGgMQAGgLAKgHQAKgGAMAAQANAAALAGQAJAHAHALQAFAMAAAPIAAABQAAAPgFALQgHAMgJAHQgLAGgNAAQgMAAgKgGgAgNggQgGAFgDAIQgEAIAAALIAAABQAAALAEAIQADAIAGAEQAGAFAHAAQAJAAAFgFQAHgEADgIQAEgIAAgLIAAgBQAAgLgEgIQgEgIgGgEQgGgFgIAAQgHAAgGAEg");
	this.shape_43.setTransform(49.4,12.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AghAzIAAhlIAgAAQAKAAAJAEQAHAEAFAIQAFAHAAALQgBALgEAHQgFAIgJAEQgJAEgJAAIgOAAIAAAhgAgQADIAOAAQAJgBAFgEQAGgFAAgIQAAgKgGgFQgGgFgIAAIgOAAg");
	this.shape_44.setTransform(40.3,12.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("AgjAzIAAhlIBAAAIAAAQIgvAAIAAAYIAVAAQAPABAJAHQAJAHAAAPQAAAKgFAHQgEAHgIADQgIAEgJAAgAgSAkIAUAAQAIAAAEgEQAFgEABgIQgBgIgFgDQgEgEgIAAIgUAAg");
	this.shape_45.setTransform(31.5,12.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6600").s().p("AAcAzIgJgYIgmAAIgIAYIgRAAIAlhlIAPAAIAlBlgAAOAMIgOgnIgOAnIAcAAg");
	this.shape_46.setTransform(22,12.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF6600").s().p("AgSAxQgJgDgHgGIAIgNQAFAEAGADQAHADAHAAQAEAAAEgCQAFgBADgEQADgDAAgFQAAgHgDgDQgDgDgGgCIgMgBIgFAAIAAgNIAFAAQALAAAGgEQAFgDAAgJQAAgEgCgDQgDgDgEgCQgEgBgEAAQgHAAgFACQgGADgFAEIgGgMIAJgHIALgEQAGgBAHAAQAJAAAGADQAHAEAEAGQAEAFAAAIQAAAHgCAEQgDAFgEADIgIAFQAIACAGAFQAFAGAAAKQAAAJgEAHQgFAHgHADQgIAEgKAAQgLAAgIgDg");
	this.shape_47.setTransform(13,12.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF6600").s().p("AgHFoIAArPIAPAAIAALPg");
	this.shape_48.setTransform(0.8,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0,0,180.5,72.1), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgfAzIAAhlIA/AAIAAAPIguAAIAAAcIAoAAIAAAOIgoAAIAAAdIAuAAIAAAPg");
	this.shape.setTransform(128.8,61.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AgHAzIAAhVIgbAAIAAgQIBFAAIAAAQIgaAAIAABVg");
	this.shape_1.setTransform(120.5,61.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AAVBBIAAg1IAAgJIAAgIIgqBGIgQAAIAAhlIARAAIAAA0IAAAJIAAAKIAphHIARAAIAABlgAgNgvQgFgGgCgJIALgCQABAEADADQACADAEAAQAEAAADgDQACgDACgEIAKACQgCAJgFAGQgGAEgIAAQgHAAgHgEg");
	this.shape_2.setTransform(111.7,60.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AAcAzIgJgYIgmAAIgIAYIgRAAIAlhlIAPAAIAlBlgAAOAMIgOgnIgOAnIAcAAg");
	this.shape_3.setTransform(102,61.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgQAuQgKgHgGgLQgFgMgBgPIAAgBQABgPAFgMQAGgLAKgHQALgGAMAAQALAAAHADQAHADAGAFIgIAOQgFgEgGgDQgFgDgHAAQgHAAgGAFQgHAEgDAIQgEAIAAALIAAABQAAALAEAIQADAIAHAEQAGAFAHAAQAHAAAGgDQAFgDAGgFIAIANQgHAGgHAEQgIADgLAAQgMAAgKgGg");
	this.shape_4.setTransform(92.8,61.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AAbAzIAAhHIgbAuIgaguIAABHIgRAAIAAhlIASAAIAZAvIAagvIARAAIAABlg");
	this.shape_5.setTransform(79,61.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgfAzIAAhlIA/AAIAAAPIguAAIAAAcIAoAAIAAAOIgoAAIAAAdIAuAAIAAAPg");
	this.shape_6.setTransform(69.6,61.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("Ag5AzIAAhlIARAAIAABWIAhAAIAAhWIAQAAIAABWIAhAAIAAhWIAQAAIAABlg");
	this.shape_7.setTransform(58.4,61.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AAcAzIgJgYIgmAAIgIAYIgRAAIAlhlIAPAAIAlBlgAAOAMIgOgnIgOAnIAcAAg");
	this.shape_8.setTransform(46.6,61.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AAUAzIAAgrIgnAAIAAArIgRAAIAAhlIARAAIAAArIAnAAIAAgrIARAAIAABlg");
	this.shape_9.setTransform(37,61.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AAcAzIgJgYIgmAAIgIAYIgRAAIAlhlIAPAAIAlBlgAAOAMIgOgnIgOAnIAcAAg");
	this.shape_10.setTransform(23.7,61.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AAUAzIAAgrIgnAAIAAArIgRAAIAAhlIARAAIAAArIAnAAIAAgrIARAAIAABlg");
	this.shape_11.setTransform(14,61.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AgkAzIAAhlIAkAAQAJAAAIADQAHADAEAGQAEAGAAAIQAAAHgCAEQgCAFgDACIgIAFQAJACAFAGQAFAFABAKQgBAKgEAGQgFAGgIADQgIAEgLAAgAgTAkIAUAAQAJAAAFgEQAFgEAAgHQAAgHgFgDQgFgEgKAAIgTAAgAgTgHIARAAQAIAAAFgDQAEgEABgHQgBgHgEgDQgEgEgIAAIgSAAg");
	this.shape_12.setTransform(116.2,45.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgXAuQgJgHgGgLQgGgMAAgPIAAgBQAAgPAGgMQAGgLAKgHQAKgGAMAAQAOAAAKAGQAJAHAGALQAGAMAAAPIAAABQAAAPgGALQgGAMgJAHQgLAGgNAAQgMAAgLgGgAgNggQgGAFgEAIQgDAIAAALIAAABQAAALADAIQAEAIAGAEQAGAFAHAAQAJAAAGgFQAGgEADgIQADgIABgLIAAgBQgBgLgDgIQgDgIgGgEQgHgFgIAAQgHAAgGAEg");
	this.shape_13.setTransform(106.2,45.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgHAzIAAhVIgbAAIAAgQIBFAAIAAAQIgaAAIAABVg");
	this.shape_14.setTransform(96.9,45.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AAUAzIAAgrIgnAAIAAArIgRAAIAAhlIARAAIAAArIAnAAIAAgrIARAAIAABlg");
	this.shape_15.setTransform(88.1,45.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AgfAzIAAhlIA/AAIAAAPIguAAIAAAcIAoAAIAAAOIgoAAIAAAdIAuAAIAAAPg");
	this.shape_16.setTransform(79.5,45.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AAbAzIAAhHIgbAuIgaguIAABHIgQAAIAAhlIARAAIAZAvIAagvIARAAIAABlg");
	this.shape_17.setTransform(69.7,45.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AAcAzIgJgYIgmAAIgIAYIgRAAIAlhlIAPAAIAlBlgAAOAMIgOgnIgOAnIAcAAg");
	this.shape_18.setTransform(59.4,45.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AgHAzIAAhVIgbAAIAAgQIBFAAIAAAQIgaAAIAABVg");
	this.shape_19.setTransform(50.5,45.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AgiAzIAAhlIAhAAQAKAAAJAEQAHAEAFAIQAFAHAAALQgBALgFAHQgEAIgJAEQgJAEgJAAIgOAAIAAAhgAgQADIAPAAQAIgBAFgEQAFgFABgIQgBgKgFgFQgGgFgHAAIgPAAg");
	this.shape_20.setTransform(42.6,45.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("AAcAzIgJgYIgmAAIgIAYIgRAAIAlhlIAPAAIAlBlgAAOAMIgOgnIgOAnIAcAAg");
	this.shape_21.setTransform(33.3,45.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AAUAzIAAhVIgmAAIAABVIgRAAIAAhlIBHAAIAABlg");
	this.shape_22.setTransform(23.6,45.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AAcAzIgJgYIgmAAIgIAYIgRAAIAlhlIAPAAIAlBlgAAOAMIgOgnIgOAnIAcAAg");
	this.shape_23.setTransform(14.1,45.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("AgfAzIAAhlIA/AAIAAAPIguAAIAAAcIAoAAIAAAOIgoAAIAAAdIAuAAIAAAPg");
	this.shape_24.setTransform(94.5,29.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("AAVAzIAAg1IAAgJIAAgJIgpBHIgRAAIAAhlIARAAIAAA0IAAAJIAAAKIAqhHIAPAAIAABlg");
	this.shape_25.setTransform(85.3,29.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("AAUAzIAAgrIgnAAIAAArIgRAAIAAhlIARAAIAAArIAnAAIAAgrIARAAIAABlg");
	this.shape_26.setTransform(75.7,29.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("AAcAzIgJgYIgmAAIgIAYIgRAAIAlhlIAPAAIAlBlgAAOAMIgOgnIgOAnIAcAAg");
	this.shape_27.setTransform(66.1,29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("AgQAuQgKgHgGgLQgFgMgBgPIAAgBQABgPAFgMQAGgLAKgHQALgGAMAAQALAAAHADQAHADAGAFIgIAOQgFgEgGgDQgFgDgHAAQgHAAgGAFQgHAEgDAIQgEAIAAALIAAABQAAALAEAIQADAIAHAEQAGAFAHAAQAHAAAGgDQAFgDAGgFIAIANQgHAGgHAEQgIADgLAAQgMAAgKgGg");
	this.shape_28.setTransform(56.8,29.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AAVAzIAAg1IAAgJIAAgJIgqBHIgPAAIAAhlIAQAAIAAA0IAAAJIAAAKIAphHIARAAIAABlg");
	this.shape_29.setTransform(47.5,29.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AAUAzIAAhVIgmAAIAABVIgRAAIAAhlIBHAAIAABlg");
	this.shape_30.setTransform(37.8,29.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AgWAuQgLgHgFgLQgGgMAAgPIAAgBQAAgPAGgMQAGgLAKgHQAKgGAMAAQANAAAKAGQAKAHAHALQAFAMAAAPIAAABQAAAPgFALQgHAMgKAHQgKAGgNAAQgMAAgKgGgAgNggQgGAFgDAIQgEAIAAALIAAABQAAALAEAIQADAIAGAEQAGAFAHAAQAJAAAGgFQAGgEADgIQAEgIAAgLIAAgBQAAgLgEgIQgEgIgFgEQgHgFgIAAQgHAAgGAEg");
	this.shape_31.setTransform(27.8,29.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AAVAzIAAg1IAAgJIAAgJIgqBHIgQAAIAAhlIARAAIAAA0IAAAJIAAAKIAphHIARAAIAABlg");
	this.shape_32.setTransform(14.1,29.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgiAzIAAhlIAhAAQAKAAAJAEQAHAEAFAIQAFAHAAALQgBALgFAHQgEAIgJAEQgJAEgJAAIgOAAIAAAhgAgQADIAPAAQAIgBAFgEQAFgFABgIQgBgKgFgFQgGgFgHAAIgPAAg");
	this.shape_33.setTransform(143.9,12.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgXAuQgJgHgGgLQgFgMgBgPIAAgBQABgPAFgMQAGgLAKgHQAKgGAMAAQAOAAAKAGQAJAHAGALQAGAMAAAPIAAABQAAAPgGALQgGAMgJAHQgLAGgNAAQgMAAgLgGgAgNggQgGAFgEAIQgDAIAAALIAAABQAAALADAIQAEAIAGAEQAGAFAHAAQAJAAAGgFQAGgEADgIQADgIABgLIAAgBQgBgLgDgIQgDgIgGgEQgHgFgIAAQgHAAgGAEg");
	this.shape_34.setTransform(134.1,12.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("AgSAxQgJgDgHgGIAIgNQAFAEAGADQAHADAHAAQAEAAAEgCQAFgBADgEQADgDAAgFQAAgHgDgDQgDgDgGgCIgMgBIgFAAIAAgNIAFAAQALAAAGgEQAFgDAAgJQAAgEgCgDQgDgDgEgCQgEgBgEAAQgHAAgFACQgGADgFAEIgGgMIAJgHIALgEQAGgBAHAAQAJAAAGADQAHAEAEAGQAEAFAAAIQAAAHgCAEQgDAFgEADIgIAFQAIACAGAFQAFAGAAAKQAAAJgEAHQgFAHgHADQgIAEgKAAQgLAAgIgDg");
	this.shape_35.setTransform(124.7,12.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AgjAzIAAhlIBAAAIAAAQIgvAAIAAAYIAUAAQAQABAJAHQAJAHAAAPQAAAKgEAHQgFAHgIADQgIAEgKAAgAgSAkIAUAAQAIAAAFgEQAEgEAAgIQAAgIgEgDQgFgEgIAAIgUAAg");
	this.shape_36.setTransform(116.7,12.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AgXAuQgJgHgGgLQgFgMgBgPIAAgBQABgPAFgMQAGgLAKgHQAKgGAMAAQANAAALAGQAJAHAGALQAGAMAAAPIAAABQAAAPgGALQgGAMgJAHQgKAGgOAAQgMAAgLgGgAgNggQgGAFgEAIQgDAIAAALIAAABQAAALADAIQAEAIAGAEQAGAFAHAAQAJAAAGgFQAGgEADgIQADgIABgLIAAgBQgBgLgDgIQgEgIgFgEQgHgFgIAAQgHAAgGAEg");
	this.shape_37.setTransform(106.7,12.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("AAVBBIAAg1IAAgJIAAgIIgqBGIgPAAIAAhlIAQAAIAAA0IAAAJIAAAKIAphHIARAAIAABlgAgNgvQgFgGgBgJIAKgCQABAEACADQAEADADAAQAEAAADgDQACgDABgEIALACQgCAJgFAGQgGAEgIAAQgIAAgGgEg");
	this.shape_38.setTransform(93,11.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6600").s().p("AAfAzIAAhlIARAAIAABlgAgvAzIAAhlIARAAIAAAkIARAAQAMAAAGAEQAIAEAFAGQADAHAAALQABAKgFAIQgFAHgIAEQgHAEgLAAgAgeAkIARAAQAJgBAEgEQAFgFAAgIQAAgJgFgEQgFgFgIAAIgRAAg");
	this.shape_39.setTransform(82.2,12.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AAUAzIAAgrIgnAAIAAArIgRAAIAAhlIARAAIAAArIAnAAIAAgrIARAAIAABlg");
	this.shape_40.setTransform(71.5,12.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AgjAzIAAhlIBAAAIAAAQIgvAAIAAAYIAVAAQAPABAJAHQAJAHAAAPQAAAKgEAHQgFAHgIADQgIAEgJAAgAgSAkIAUAAQAIAAAFgEQAEgEABgIQgBgIgEgDQgFgEgIAAIgUAAg");
	this.shape_41.setTransform(62.5,12.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AgWAuQgKgHgGgLQgFgMgBgPIAAgBQABgPAFgMQAFgLALgHQAKgGAMAAQANAAALAGQAJAHAHALQAFAMAAAPIAAABQAAAPgFALQgHAMgJAHQgLAGgNAAQgMAAgKgGgAgNggQgGAFgDAIQgEAIAAALIAAABQAAALAEAIQADAIAGAEQAGAFAHAAQAIAAAHgFQAGgEADgIQAEgIAAgLIAAgBQAAgLgEgIQgEgIgFgEQgHgFgIAAQgHAAgGAEg");
	this.shape_42.setTransform(52.5,12.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgiAzIAAhlIAhAAQAKAAAIAEQAJAEAEAIQAEAHAAALQABALgGAHQgEAIgJAEQgIAEgKAAIgPAAIAAAhgAgRADIAQAAQAIgBAFgEQAFgFAAgIQAAgKgFgFQgFgFgIAAIgQAAg");
	this.shape_43.setTransform(43.4,12.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AAeA9IAAgUIg7AAIgCAUIgOAAIAAgjIAIAAQAFgKACgMQADgKABgRIABglIA9AAIAABWIAKAAIgCAjgAgLgEQgCARgGANIAmAAIAAhGIgcAAQAAAXgCARg");
	this.shape_44.setTransform(33.9,13.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("AgXAuQgJgHgGgLQgFgMgBgPIAAgBQABgPAFgMQAGgLAKgHQAKgGAMAAQANAAALAGQAJAHAGALQAGAMAAAPIAAABQAAAPgGALQgGAMgJAHQgKAGgOAAQgMAAgLgGgAgNggQgGAFgEAIQgDAIAAALIAAABQAAALADAIQAEAIAGAEQAGAFAHAAQAIAAAHgFQAGgEADgIQADgIABgLIAAgBQgBgLgDgIQgEgIgFgEQgHgFgIAAQgHAAgGAEg");
	this.shape_45.setTransform(23.9,12.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6600").s().p("AAUAzIAAhVIgmAAIAABVIgRAAIAAhlIBHAAIAABlg");
	this.shape_46.setTransform(13.9,12.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF6600").s().p("AgHFoIAArPIAPAAIAALPg");
	this.shape_47.setTransform(0.8,36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,151.4,72.8), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6600").s().p("AgPAfQgHgFgEgIQgEgHAAgLIAAAAQAAgJAEgIQAFgIAGgEQAIgFAHAAQAKABAGADQAHAFAEAIQAEAIAAAJIAAAAQAAALgEAHQgEAIgHAFQgHAEgJAAQgIAAgHgEgAgIgTQgDADgCAFQgDAFAAAGIAAAAQAAAHADAFQACAFADADQAFADADAAQAFAAAEgDQAEgDACgFQACgFAAgGIAAgBQAAgGgCgFQgDgFgDgDQgEgCgFAAQgEAAgEACg");
	this.shape.setTransform(146.9,65.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6600").s().p("AAMAhIAAgbIgYAAIAAAbIgOAAIAAhBIAOAAIAAAbIAYAAIAAgbIAPAAIAABBg");
	this.shape_1.setTransform(139.7,65.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF6600").s().p("AALAhIAAgZQgCACgFABQgEABgFABQgGAAgEgCQgFgDgCgEQgDgEAAgGIAAgaIAPAAIAAAVQAAAGACADQADACAEAAIAGAAIAGgCIAAgeIAPAAIAABBg");
	this.shape_2.setTransform(132.8,65.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF6600").s().p("AgPAfQgHgFgEgIQgDgHgBgLIAAAAQABgJADgIQAFgIAGgEQAHgFAIAAQAKABAGADQAHAFAEAIQAEAIAAAJIAAAAQAAALgEAHQgEAIgHAFQgHAEgJAAQgIAAgHgEgAgIgTQgEADgCAFQgCAFAAAGIAAAAQAAAHACAFQADAFADADQAFADADAAQAFAAAEgDQAEgDACgFQACgFAAgGIAAgBQAAgGgCgFQgCgFgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_3.setTransform(126,65.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgGAhIAAg1IgTAAIAAgMIAzAAIAAAMIgTAAIAAA1g");
	this.shape_4.setTransform(119.7,65.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgUAqIgGgCIAEgLIAEABIAEABQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQACgCACgEIgYhCIAPAAIAOAwIAPgwIAPAAIgXBDQgDAKgEAEQgFAEgHAAIgIgBg");
	this.shape_5.setTransform(113.5,66.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AgKAfQgHgFgEgIQgEgHAAgLIAAAAQAAgJAEgIQAEgIAHgFQAHgDAIgBQAHABAFACQAFACAEAEIgHALIgGgFQgEgCgEAAQgGAAgFAGQgFAGAAAJIAAAAQAAAKAFAGQAFAGAGAAQAFAAADgCQAEgCADgDIAGAKIgJAHQgFADgIAAQgIAAgGgEg");
	this.shape_6.setTransform(107.2,65.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgPAfQgHgFgDgIQgFgHAAgLIAAAAQAAgJAFgIQADgIAIgEQAGgFAJAAQAIABAHADQAHAFAEAIQAEAIAAAJIAAAAQAAALgEAHQgEAIgHAFQgHAEgJAAQgIAAgHgEgAgHgTQgFADgBAFQgCAFAAAGIAAAAQAAAHACAFQACAFAEADQADADAFAAQAFAAADgDQAEgDACgFQACgFAAgGIAAgBQAAgGgCgFQgCgFgEgDQgEgCgFAAQgEAAgDACg");
	this.shape_7.setTransform(100.5,65.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgaAiIgEgBIABgMIACAAIACABIAEgBQAAgBABAAQAAAAABgBQAAAAAAgBQAAAAABgBIACgJIACgQIAAgZIAtAAIAABCIgPAAIAAg2IgQAAQAAASgCAKQgBAMgDAFQgCAGgEACQgEACgGAAIgEAAg");
	this.shape_8.setTransform(92.9,65.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgUAhIAAhBIApAAIAAAMIgaAAIAAA1g");
	this.shape_9.setTransform(87.5,65.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgUAqIgGgCIAEgLIAEABIAEABQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQACgCACgEIgYhCIAPAAIAOAwIAPgwIAPAAIgXBDQgDAKgEAEQgFAEgHAAIgIgBg");
	this.shape_10.setTransform(81.3,66.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgdAsIAAhVIAOAAIAAAKQADgFAFgDQAFgEAGAAQAHAAAGAEQAGAEADAIQAEAHAAALIAAACQAAAKgEAIQgDAHgGAEQgGAEgHAAIgIgCIgGgEIgFgFIAAAdgAgHgbQgDACgDAFQgCAFAAAHIAAABQAAAHACADQADAFADADQAEACADAAQAFAAADgCQAEgDACgFQACgDAAgHIAAgBQAAgHgCgFQgCgFgEgCQgEgDgEAAQgDAAgEADg");
	this.shape_11.setTransform(74.4,66.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AALAhIgPgbIgJAKIAAARIgPAAIAAhBIAPAAIAAAfIAXgfIAQAAIgVAcIAXAlg");
	this.shape_12.setTransform(67.7,65.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgPAfQgHgFgDgIQgEgHgBgLIAAAAQABgJAEgIQAEgIAGgEQAHgFAIAAQAKABAGADQAHAFAEAIQAEAIAAAJIAAAAQAAALgEAHQgEAIgHAFQgHAEgJAAQgIAAgHgEgAgIgTQgEADgCAFQgCAFAAAGIAAAAQAAAHACAFQADAFADADQAFADADAAQAFAAAEgDQAEgDACgFQACgFAAgGIAAgBQAAgGgCgFQgCgFgEgDQgEgCgFAAQgEAAgEACg");
	this.shape_13.setTransform(57.1,65.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgGAhIAAg1IgSAAIAAgMIAxAAIAAAMIgSAAIAAA1g");
	this.shape_14.setTransform(50.8,65.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF6600").s().p("AAWAhIAAhBIAOAAIAABBgAgkAhIAAhBIAPAAIAAAXIALAAQAHAAAGADQAFACADAEQADAEABAHQAAAIgDAEQgEAFgFADQgFADgIgBgAgVAWIALAAQAFAAADgDQACgCAAgFQAAgFgCgDQgDgCgFAAIgLAAg");
	this.shape_15.setTransform(43.6,65.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF6600").s().p("AgdAsIAAhVIAOAAIAAAKQADgFAFgDQAFgEAGAAQAHAAAGAEQAGAEADAIQAEAHAAALIAAACQAAAKgEAIQgDAHgGAEQgGAEgHAAIgIgCIgGgEIgFgFIAAAdgAgHgbQgDACgDAFQgCAFAAAHIAAABQAAAHACADQADAFADADQAEACADAAQAFAAADgCQAEgDACgFQACgDAAgHIAAgBQAAgHgCgFQgCgFgEgCQgEgDgEAAQgDAAgEADg");
	this.shape_16.setTransform(35.5,66.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF6600").s().p("AALAhIgPgbIgJAKIAAARIgOAAIAAhBIAOAAIAAAfIAXgfIARAAIgXAcIAYAlg");
	this.shape_17.setTransform(28.8,65.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF6600").s().p("AgGAhIAAg1IgTAAIAAgMIAzAAIAAAMIgTAAIAAA1g");
	this.shape_18.setTransform(22.4,65.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF6600").s().p("AgTAoQgJgGgFgKQgFgKAAgNIAAgBQAAgNAFgKQAFgKAJgGQAJgGAKAAQAMAAAIAGQAJAGAFAKQAFAKAAANIAAAAQAAAOgFAKQgFAKgJAGQgIAGgMAAQgKAAgJgGgAgLgbQgFADgEAHQgDAIAAAJIAAAAQAAAKADAHQAEAHAFAEQAFAEAGAAQAHAAAGgEQAFgEADgHQADgHAAgJIAAgBQAAgJgDgHQgDgHgFgEQgGgEgHAAQgGAAgFAEg");
	this.shape_19.setTransform(15,64.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF6600").s().p("AgQAoQgIgGgEgKQgEgKAAgNIAAgBQAAgNAEgKQAEgLAIgFQAHgGAJAAQAKAAAIAGQAHAFAEALQAEAKAAANIAAABQAAANgEAKQgEAKgHAGQgIAGgKAAQgKAAgGgGgAgNgXQgEAIAAAPIAAAAQAAAQAFAIQAEAIAIABQAJgBAEgIQAFgIAAgPIAAgBQAAgPgFgIQgFgJgIAAQgIAAgFAJg");
	this.shape_20.setTransform(163.5,50.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF6600").s().p("AgQArQgFgCgFgDIAGgNIAIAGIAJABQAFAAAEgDQAEgEADgGQACgGAAgIQgDADgFADQgEACgFAAQgIAAgGgDQgFgDgEgGQgDgGgBgJIAAAAQABgJADgHQADgHAHgEQAGgEAJAAQAGAAAFACQAFACADAEQAEADACAFQADAEAAAHQACAGAAAKIAAAAQAAAWgJANQgJAMgPABQgHgBgGgCgAgKgbQgEAEgBAIIAAABQABAHAEAEQAEAEAGAAIAGgBIAEgCQADgCABgDIABgHIAAgBQAAgIgFgEQgDgFgHAAQgGAAgEAFg");
	this.shape_21.setTransform(155.9,50.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF6600").s().p("AgJALQAFgBADgDQABgDAAgEIgFAAIAAgQIAPAAIAAANQAAAJgFAGQgFAEgHABg");
	this.shape_22.setTransform(144,54.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF6600").s().p("AgPAgQgFgCgDgFQgDgEAAgHIAAgBQAAgHADgFQADgDAGgDQAFgCAHAAIAIABIAHABIAAgCQAAgHgEgDQgEgEgGAAIgJABIgIADIgDgMQAFgCAFgBQAFgCAGAAQANAAAHAHQAHAHAAANIAAAoIgOAAIAAgIQgDAEgFADQgFACgFABQgGAAgEgDgAgIAFQgEACAAAGIAAAAQAAAFADADQADADAFAAQAGAAAEgEQAEgDAAgGIAAgHIgGgCIgHAAQgFAAgDADg");
	this.shape_23.setTransform(139.2,51.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF6600").s().p("AANAiIAAgcIgYAAIAAAcIgPAAIAAhDIAPAAIAAAbIAYAAIAAgbIAOAAIAABDg");
	this.shape_24.setTransform(132.6,51.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF6600").s().p("AAOAiIAAgsIgaAsIgOAAIAAhDIAOAAIAAArIAagrIANAAIAABDg");
	this.shape_25.setTransform(125.5,51.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF6600").s().p("AgUAiIAAhDIApAAIAAANIgaAAIAAA2g");
	this.shape_26.setTransform(119.6,51.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF6600").s().p("AAWAiIAAhDIAPAAIAABDgAgjAiIAAhDIAOAAIAAAYIAMAAQAHAAAFACQAFACADAFQAEAEgBAHQAAAIgCAFQgEAEgFADQgFACgHABgAgVAWIALAAQAFAAADgDQACgCAAgGQAAgFgCgCQgDgDgFAAIgLAAg");
	this.shape_27.setTransform(112.3,51.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF6600").s().p("AgaAiIgEgBIABgMIACAAIACABIAEgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABgBIACgJIACgQIAAgZIAtAAIAABCIgPAAIAAg2IgQAAQAAASgCAKQgBAMgDAFQgCAGgEACQgEACgGAAIgEAAg");
	this.shape_28.setTransform(103.9,51.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF6600").s().p("AgPAgQgFgCgDgFQgDgEAAgHIAAgBQAAgHADgFQADgDAGgDQAFgCAHAAIAIABIAHABIAAgCQAAgHgEgDQgEgEgGAAIgJABIgIADIgDgMQAFgCAFgBQAFgCAGAAQANAAAHAHQAHAHAAANIAAAoIgOAAIAAgIQgDAEgFADQgFACgFABQgGAAgEgDgAgIAFQgEACAAAGIAAAAQAAAFADADQADADAFAAQAGAAAEgEQAEgDAAgGIAAgHIgGgCIgHAAQgFAAgDADg");
	this.shape_29.setTransform(97.4,51.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF6600").s().p("AAYAsIAAg9IgYAoIgXgoIAAA9IgOAAIAAhXIAPAAIAWAoIAXgoIAPAAIAABXg");
	this.shape_30.setTransform(89.5,50.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF6600").s().p("AgHAIIAAgPIAPAAIAAAPg");
	this.shape_31.setTransform(79.9,54);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AgaAiIgEgBIABgMIACAAIACABIAEgBQACgBABgDIACgJIACgQIAAgZIAtAAIAABCIgPAAIAAg2IgQAAQAAASgCAKQgBAMgDAFQgCAGgEACQgEACgGAAIgEAAg");
	this.shape_32.setTransform(74.4,51.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF6600").s().p("AgUAqIgGgCIAEgLIAEABIAEABQABAAAAAAQABAAABAAQAAAAABgBQAAAAABAAQACgCACgEIgYhCIAPAAIAOAwIAPgwIAPAAIgXBDQgDAKgEAEQgFAEgHAAIgIgBg");
	this.shape_33.setTransform(68,52.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF6600").s().p("AgJALQAGgBACgDQABgDAAgEIgGAAIAAgQIAQAAIAAANQAAAJgFAGQgFAEgHABg");
	this.shape_34.setTransform(56.5,54.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FF6600").s().p("AgZAiIAAhDIAPAAIAAAYIALAAQAHAAAFACQAGACADAFQADAEABAHQAAAIgEAFQgDAEgGADQgFACgHABgAgKAWIAKAAQAFAAADgDQADgCAAgGQAAgFgDgCQgDgDgFAAIgKAAg");
	this.shape_35.setTransform(52.2,51.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FF6600").s().p("AANAiIAAgcIgYAAIAAAcIgPAAIAAhDIAPAAIAAAbIAYAAIAAgbIAOAAIAABDg");
	this.shape_36.setTransform(45.3,51.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FF6600").s().p("AgMAfQgHgFgFgHQgDgIgBgLIAAAAQABgKADgHQAEgIAHgEQAGgFAHAAQAKABAGAEQAGAFADAHQAEAIgBAJIAAADIAAADIgpAAQABAIAFAEQAFAFAFAAQAFAAAEgCQAEgBADgEIAHAJQgFAFgFACQgGADgIAAQgHAAgHgEgAAPgDQgBgIgEgGQgDgEgHgBQgFAAgEAFQgDAFgBAJIAcAAIAAAAg");
	this.shape_37.setTransform(38.4,51.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FF6600").s().p("AASAiIAAgsIgSAcIgRgcIAAAsIgOAAIAAhDIAOAAIARAfIASgfIAOAAIAABDg");
	this.shape_38.setTransform(31.1,51.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF6600").s().p("AgBAfQgGgEgEgGQgEgGgBgJIgKAAIAAAbIgPAAIAAhCIAPAAIAAAcIAKAAQABgJAEgGQAEgHAGgDQAFgEAIAAQAJAAAHAFQAGAEAEAIQADAHAAAKIAAAAQAAAKgDAIQgEAIgGAEQgHAFgJAAQgIAAgFgEgAABgPQgDAGAAAJQAAAHACAFQABAFADACQADADAFAAQAEAAAEgDQAEgCACgFQACgFAAgHQgBgJgEgGQgEgGgHAAQgHAAgEAGg");
	this.shape_39.setTransform(22.4,51.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FF6600").s().p("AgGAsIAAhKIgYAAIAAgNIA9AAIAAANIgYAAIAABKg");
	this.shape_40.setTransform(13.9,50.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FF6600").s().p("AgeA8IAshlIgxAAIAAgSIBIAAIAAAOIgtBpg");
	this.shape_41.setTransform(150,32.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF6600").s().p("AABA9IAAhkIgSAGIgDgRIAbgKIAOAAIAAB5g");
	this.shape_42.setTransform(141.8,32.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF6600").s().p("AgXAKIAAgTIAvAAIAAATg");
	this.shape_43.setTransform(136.6,33.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FF6600").s().p("AgXA2QgKgHgGgOQgFgOAAgSIAAgBQAAgSAFgOQAGgOAKgIQAKgHANAAQAOAAAKAHQAKAIAGAOQAFANAAATIAAABQAAASgFAOQgGAOgKAHQgKAIgOAAQgNAAgKgIgAgRggQgHALAAAVIAAABQAAAUAHAMQAHALAKAAQAMAAAGgLQAHgMAAgUIAAgBQAAgUgHgMQgHgLgLgBQgKABgHALg");
	this.shape_44.setTransform(127.9,32.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FF6600").s().p("AgdA8IAshlIgzAAIAAgSIBIAAIAAAOIgsBpg");
	this.shape_45.setTransform(118.4,32.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FF6600").s().p("AgXAKIAAgTIAvAAIAAATg");
	this.shape_46.setTransform(111.2,33.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF6600").s().p("AgUA6QgJgFgFgHQgFgIAAgLIAAAAQAAgLAFgHQAFgIAJgDQgHgEgEgGQgFgHAAgJIAAgBQAAgKAFgHQAFgHAIgEQAIgEAKAAQALAAAIAEQAIAEAFAHQAFAHAAAKIAAABQAAAJgFAHQgEAGgHAEQAJADAFAIQAFAHAAAKIAAABQAAALgFAIQgFAIgJAEQgJAEgMAAQgLAAgJgEgAgOAMQgGAFAAAJIAAAAQAAAJAGAFQAFAFAJAAQAKAAAFgFQAGgFAAgJIAAAAQAAgJgGgFQgGgFgJAAQgIAAgGAFgAgMgoQgFAFAAAIIAAAAQAAAIAFAGQAFAFAHAAQAIAAAFgFQAFgFAAgJIAAAAQAAgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_47.setTransform(103.1,32.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FF6600").s().p("AgVA5QgKgFgGgGIAKgPQAGAGAGADQAHADAIAAQAIAAAFgFQAGgFAAgJIAAgBQAAgJgHgFQgHgEgLgBIgHAAIgDgLIAcgjIgsAAIAAgSIBFAAIAAAPIgeAjQAIACAIADQAHAEAEAGQAEAHAAAKIAAABQAAALgFAJQgFAJgIAFQgJAEgLAAQgMAAgJgEg");
	this.shape_48.setTransform(93.7,33);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FF6600").s().p("AgWA7QgIgDgGgFIAIgQIALAHQAGACAGAAQAHAAAGgFQAGgFADgIQADgIAAgMQgEAFgGAEQgGADgIAAQgKAAgIgEQgIgFgFgIQgFgIAAgMIAAgBQAAgMAFgKQAFgJAJgFQAJgFAMAAQAIAAAHACQAGADAFAFQAFAEADAHQADAGACAJQACAJAAAMIAAABQgBAfgMARQgMARgVAAQgJAAgIgDgAgPgmQgFAHAAAKIAAABQAAAKAGAGQAFAFAJAAQAEAAADgBQAEgBADgDQADgCABgFQACgEAAgFIAAgBQAAgLgGgGQgGgGgIAAQgKAAgFAGg");
	this.shape_49.setTransform(84.5,32.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF6600").s().p("AgYA9QAQgLAHgPQAHgPAAgUQAAgTgHgPQgHgPgQgKIAGgOQAVAMALASQALATAAAYQAAAZgLATQgLATgVALg");
	this.shape_50.setTransform(71.7,33.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF6600").s().p("AglA9IAAgQIAkgnQAGgHAEgFQAEgFACgFQACgEAAgFQgBgIgEgEQgFgFgHAAQgHAAgGAEQgFADgGAHIgLgNQAFgHAFgEQAGgDAGgDQAHgCAHAAQARAAAJAJQAKAJAAAPIAAABQAAAHgDAHQgCAGgGAGQgFAHgJAIIgWAcIAwAAIAAASg");
	this.shape_51.setTransform(63.8,32.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FF6600").s().p("AgUA6QgJgFgFgHQgFgIAAgLIAAAAQAAgLAFgHQAFgIAJgDQgHgEgEgGQgFgHAAgJIAAgBQAAgKAFgHQAFgHAIgEQAIgEAKAAQALAAAIAEQAIAEAFAHQAFAHAAAKIAAABQAAAJgFAHQgEAGgHAEQAJADAFAIQAFAHAAAKIAAABQAAALgFAIQgFAIgJAEQgJAEgMAAQgLAAgJgEgAgOAMQgGAFAAAJIAAAAQAAAJAGAFQAFAFAJAAQAKAAAFgFQAGgFAAgJIAAAAQAAgJgGgFQgGgFgJAAQgIAAgGAFgAgMgoQgFAFAAAIIAAAAQAAAIAFAGQAFAFAHAAQAIAAAFgFQAFgFAAgJIAAAAQAAgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_52.setTransform(54.5,32.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FF6600").s().p("AgWA7QgIgDgGgFIAIgQIALAHQAGACAGAAQAHAAAGgFQAGgFADgIQADgIAAgMQgEAFgGAEQgGADgIAAQgKAAgIgEQgIgFgFgIQgFgIAAgMIAAgBQAAgMAFgKQAFgJAJgFQAJgFAMAAQAIAAAHACQAGADAFAFQAFAEADAHQADAGACAJQACAJAAAMIAAABQgBAfgMARQgMARgVAAQgJAAgIgDgAgPgmQgFAHAAAKIAAABQAAAKAGAGQAFAFAJAAQAEAAADgBQAEgBADgDQADgCABgFQACgEAAgFIAAgBQAAgLgGgGQgGgGgIAAQgKAAgFAGg");
	this.shape_53.setTransform(44.9,32.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF6600").s().p("AgNAsQgLgTAAgZQAAgYALgTQALgSAVgMIAGAOQgQAKgHAPQgHAPAAATQAAAUAHAPQAHAPAQALIgGANQgVgLgLgTg");
	this.shape_54.setTransform(36.7,33.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF6600").s().p("AgeA8IAshlIgyAAIAAgSIBJAAIAAAOIgtBpg");
	this.shape_55.setTransform(24.3,32.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FF6600").s().p("AgIAoIAAgfIgfAAIAAgRIAfAAIAAgfIARAAIAAAfIAfAAIAAARIgfAAIAAAfg");
	this.shape_56.setTransform(14.7,32.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF6600").s().p("AgdA8IAshlIgyAAIAAgSIBIAAIAAAPIgtBog");
	this.shape_57.setTransform(149.4,13.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF6600").s().p("AABA9IAAhkIgSAGIgDgRIAbgKIAOAAIAAB5g");
	this.shape_58.setTransform(141.2,13.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FF6600").s().p("AgXAKIAAgTIAvAAIAAATg");
	this.shape_59.setTransform(136,14.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FF6600").s().p("AgXA2QgKgHgGgOQgFgOAAgSIAAgBQAAgSAFgOQAGgOAKgIQAKgHANAAQAOAAAKAHQAKAIAGAOQAFANAAATIAAABQAAASgFAOQgGAOgKAHQgKAIgOAAQgNAAgKgIgAgRggQgHALAAAVIAAABQAAAUAHAMQAHALAKAAQAMAAAGgLQAHgMAAgUIAAgBQAAgUgHgMQgHgLgLgBQgKABgHALg");
	this.shape_60.setTransform(127.3,13.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FF6600").s().p("AgdA8IAshlIgyAAIAAgSIBIAAIAAAPIgtBog");
	this.shape_61.setTransform(117.9,13.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FF6600").s().p("AgXAKIAAgTIAvAAIAAATg");
	this.shape_62.setTransform(110.6,14.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FF6600").s().p("AgUA6QgJgFgFgHQgFgIAAgLIAAAAQAAgLAFgHQAFgIAJgDQgHgEgEgGQgFgHAAgJIAAgBQAAgKAFgHQAFgHAIgEQAIgEAKAAQALAAAIAEQAIAEAFAHQAFAHAAAKIAAABQAAAJgFAHQgEAGgHAEQAJADAFAIQAFAHAAAKIAAABQAAALgFAIQgFAIgJAEQgJAEgMAAQgLAAgJgEgAgOAMQgGAFAAAJIAAAAQAAAJAGAFQAFAFAJAAQAKAAAFgFQAGgFAAgJIAAAAQAAgJgGgFQgGgFgJAAQgIAAgGAFgAgMgoQgFAFAAAIIAAAAQAAAIAFAGQAFAFAHAAQAIAAAFgFQAFgFAAgJIAAAAQAAgIgFgFQgFgFgIAAQgHAAgFAFg");
	this.shape_63.setTransform(102.5,13.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF6600").s().p("AgVA5QgKgFgGgGIAKgPQAGAGAGADQAHADAIAAQAIAAAFgFQAGgFAAgJIAAgBQAAgJgHgFQgHgEgLgBIgHAAIgDgLIAcgjIgsAAIAAgSIBFAAIAAAPIgeAkQAIABAIADQAHAEAEAGQAEAHAAAKIAAABQAAALgFAJQgFAJgIAFQgJAEgLABQgMgBgJgEg");
	this.shape_64.setTransform(93.1,13.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF6600").s().p("AgYA9QAPgLAJgPQAGgPAAgUQAAgTgGgPQgJgPgPgKIAGgOQAVAMALASQAMATAAAYQAAAZgMATQgLATgVALg");
	this.shape_65.setTransform(80.8,14.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF6600").s().p("AglA9IAAgQIAkgnQAGgHAEgFQAEgFACgFQACgEAAgFQgBgIgEgEQgFgFgHAAQgHAAgGAEQgFADgGAHIgLgNQAFgGAFgFQAGgEAGgCQAHgCAHAAQARAAAJAJQAKAJAAAPIAAABQAAAIgDAGQgCAHgGAFQgFAHgJAIIgWAcIAwAAIAAASg");
	this.shape_66.setTransform(72.9,13.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF6600").s().p("AgWA5QgIgDgHgHIAJgPQAGAFAGADQAHADAHAAQAJAAAGgGQAFgGABgKIAAgBQgBgJgFgGQgGgEgJAAIgKABIgIADIgMgHIAEg6IA9AAIAAASIgtAAIgCAcIAIgBIAHgBQALAAAIADQAIAFAFAIQAFAHAAANIAAABQAAAMgFAJQgFAJgJAFQgJAFgMABQgLgBgJgEg");
	this.shape_67.setTransform(63.8,13.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF6600").s().p("AAKA9IAAgaIgzAAIgDgPIA4hQIARAAIAABOIAQAAIAAARIgQAAIAAAagAgWASIAgAAIAAgwg");
	this.shape_68.setTransform(54.1,13.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF6600").s().p("AgVA5QgKgFgGgGIAKgPQAGAGAGADQAHADAIAAQAIAAAFgFQAGgFAAgJIAAgBQAAgJgHgFQgHgEgLgBIgHAAIgDgLIAcgjIgsAAIAAgSIBFAAIAAAPIgeAkQAIABAIADQAHAEAEAGQAEAHAAAKIAAABQAAALgFAJQgFAJgIAFQgJAEgLABQgMgBgJgEg");
	this.shape_69.setTransform(44.4,13.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF6600").s().p("AgNAsQgLgTAAgZQAAgYALgTQALgSAVgMIAGAOQgQAKgHAPQgHAPAAATQAAAUAHAPQAHAPAQALIgGANQgVgLgLgTg");
	this.shape_70.setTransform(36.7,14.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF6600").s().p("AgeA8IAshlIgyAAIAAgSIBJAAIAAAPIgtBog");
	this.shape_71.setTransform(24.3,13.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF6600").s().p("AgIAoIAAgfIgfAAIAAgRIAfAAIAAgfIARAAIAAAfIAfAAIAAARIgfAAIAAAfg");
	this.shape_72.setTransform(14.7,13.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF6600").s().p("AgHFoIAArPIAPAAIAALPg");
	this.shape_73.setTransform(0.8,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,170.5,74.3), null);


// stage content:
(lib.АбажурОтель = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// текст3
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(98.8,371.8,1,1,0,0,0,85.3,37.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160).to({_off:false},0).wait(1).to({regX:83.4,regY:37.8,x:96.9,y:363.5,alpha:0.038},0).wait(1).to({y:354.6,alpha:0.075},0).wait(1).to({y:345.6,alpha:0.113},0).wait(1).to({y:336.7,alpha:0.15},0).wait(1).to({y:327.7,alpha:0.32},0).wait(1).to({y:318.8,alpha:0.49},0).wait(1).to({y:309.8,alpha:0.66},0).wait(1).to({y:300.9,alpha:0.83},0).wait(1).to({y:292,alpha:1},0).wait(1).to({y:291.8},0).wait(1).to({y:291.7},0).wait(1).to({y:291.6},0).wait(1).to({y:291.5},0).wait(1).to({y:291.4},0).wait(1).to({y:291.3},0).wait(1).to({y:291.1},0).wait(1).to({y:291},0).wait(1).to({y:290.9},0).wait(1).to({y:290.8},0).wait(1).to({y:290.7},0).wait(1).to({y:290.6},0).wait(1).to({y:290.5},0).wait(1).to({y:290.3},0).wait(1).to({y:290.2},0).wait(1).to({y:290.1},0).wait(1).to({y:290},0).wait(1).to({y:289.9},0).wait(1).to({y:289.8},0).wait(1).to({y:289.7},0).wait(1).to({y:289.5},0).wait(1).to({y:289.4},0).wait(1).to({y:289.3},0).wait(1).to({y:289.2},0).wait(1).to({y:289.1},0).wait(1).to({y:289},0).wait(1).to({y:288.8},0).wait(1).to({y:288.7},0).wait(1).to({y:288.6},0).wait(1).to({y:288.5},0).wait(1).to({y:288.4},0).wait(1).to({y:288.3},0).wait(1).to({y:288.2},0).wait(1).to({y:288},0).wait(1).to({y:287.9},0).wait(1).to({y:287.8},0).wait(1).to({y:287.7},0).wait(1).to({y:287.6},0).wait(1).to({y:287.5},0).wait(1).to({y:287.4},0).wait(1).to({y:287.2},0).wait(1).to({y:287.1},0).wait(1).to({y:287},0).wait(1).to({y:286.9},0).wait(1).to({y:286.8},0).wait(1).to({y:286.7},0).wait(1).to({y:286.5},0).wait(1).to({y:286.4},0).wait(1).to({y:286.3},0).wait(1).to({y:286.2},0).wait(1).to({y:286.1},0).wait(1).to({y:286},0).wait(1).to({y:285.9},0).wait(1).to({y:285.7},0).wait(1).to({y:285.6},0).wait(1).to({y:285.5},0).wait(1).to({y:285.4},0).wait(1).to({y:285.3},0).wait(1).to({y:285.2},0).wait(1).to({y:285.1},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// текст2
	this.instance_1 = new lib.Символ2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(89.2,372.8,1,1,0,0,0,75.7,36.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).wait(1).to({regX:73.7,regY:36,x:87.2,y:363.5,alpha:0.038},0).wait(1).to({y:354.5,alpha:0.075},0).wait(1).to({y:345.6,alpha:0.113},0).wait(1).to({y:336.6,alpha:0.15},0).wait(1).to({y:327.7,alpha:0.32},0).wait(1).to({y:318.7,alpha:0.49},0).wait(1).to({y:309.8,alpha:0.66},0).wait(1).to({y:300.8,alpha:0.83},0).wait(1).to({y:291.9,alpha:1},0).wait(1).to({y:291.8},0).wait(1).to({y:291.7},0).wait(1).to({y:291.6},0).wait(1).to({y:291.4},0).wait(1).to({y:291.3},0).wait(1).to({y:291.2},0).wait(1).to({y:291.1},0).wait(1).to({y:291},0).wait(1).to({y:290.9},0).wait(1).to({y:290.8},0).wait(1).to({y:290.6},0).wait(1).to({y:290.5},0).wait(1).to({y:290.4},0).wait(1).to({y:290.3},0).wait(1).to({y:290.2},0).wait(1).to({y:290.1},0).wait(1).to({y:289.9},0).wait(1).to({y:289.8},0).wait(1).to({y:289.7},0).wait(1).to({y:289.6},0).wait(1).to({y:289.5},0).wait(1).to({y:289.4},0).wait(1).to({y:289.3},0).wait(1).to({y:289.1},0).wait(1).to({y:289},0).wait(1).to({y:288.9},0).wait(1).to({y:288.8},0).wait(1).to({y:288.7},0).wait(1).to({y:288.6},0).wait(1).to({y:288.5},0).wait(1).to({y:288.3},0).wait(1).to({y:288.2},0).wait(1).to({y:288.1},0).wait(1).to({y:288},0).wait(1).to({y:287.9},0).wait(1).to({y:287.8},0).wait(1).to({y:287.6},0).wait(1).to({y:287.5},0).wait(1).to({y:287.4},0).wait(1).to({y:287.3},0).wait(1).to({y:287.2},0).wait(1).to({y:287.1},0).wait(1).to({y:287},0).wait(1).to({y:286.8},0).wait(1).to({y:286.7},0).wait(1).to({y:286.6},0).wait(1).to({y:286.5},0).wait(1).to({y:286.4},0).wait(1).to({y:286.3},0).wait(1).to({y:286.2},0).wait(1).to({y:286},0).wait(1).to({y:285.9},0).wait(1).to({y:285.8},0).wait(1).to({y:285.7},0).wait(1).to({y:285.6},0).wait(1).to({y:285.5},0).wait(1).to({y:285.3},0).wait(1).to({y:285.2},0).wait(1).to({y:285.1},0).wait(1).to({y:285},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(80));

	// текст1
	this.instance_2 = new lib.Символ3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(103.5,372.4,1,1,0,0,0,90.2,36);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:88.1,x:101.4,y:363.5,alpha:0.038},0).wait(1).to({y:354.5,alpha:0.075},0).wait(1).to({y:345.6,alpha:0.113},0).wait(1).to({y:336.6,alpha:0.15},0).wait(1).to({y:327.7,alpha:0.32},0).wait(1).to({y:318.7,alpha:0.49},0).wait(1).to({y:309.8,alpha:0.66},0).wait(1).to({y:300.8,alpha:0.83},0).wait(1).to({y:291.9,alpha:1},0).wait(1).to({y:291.8},0).wait(1).to({y:291.7},0).wait(1).to({y:291.6},0).wait(1).to({y:291.4},0).wait(1).to({y:291.3},0).wait(1).to({y:291.2},0).wait(1).to({y:291.1},0).wait(1).to({y:291},0).wait(1).to({y:290.9},0).wait(1).to({y:290.8},0).wait(1).to({y:290.6},0).wait(1).to({y:290.5},0).wait(1).to({y:290.4},0).wait(1).to({y:290.3},0).wait(1).to({y:290.2},0).wait(1).to({y:290.1},0).wait(1).to({y:289.9},0).wait(1).to({y:289.8},0).wait(1).to({y:289.7},0).wait(1).to({y:289.6},0).wait(1).to({y:289.5},0).wait(1).to({y:289.4},0).wait(1).to({y:289.3},0).wait(1).to({y:289.1},0).wait(1).to({y:289},0).wait(1).to({y:288.9},0).wait(1).to({y:288.8},0).wait(1).to({y:288.7},0).wait(1).to({y:288.6},0).wait(1).to({y:288.5},0).wait(1).to({y:288.3},0).wait(1).to({y:288.2},0).wait(1).to({y:288.1},0).wait(1).to({y:288},0).wait(1).to({y:287.9},0).wait(1).to({y:287.8},0).wait(1).to({y:287.6},0).wait(1).to({y:287.5},0).wait(1).to({y:287.4},0).wait(1).to({y:287.3},0).wait(1).to({y:287.2},0).wait(1).to({y:287.1},0).wait(1).to({y:287},0).wait(1).to({y:286.8},0).wait(1).to({y:286.7},0).wait(1).to({y:286.6},0).wait(1).to({y:286.5},0).wait(1).to({y:286.4},0).wait(1).to({y:286.3},0).wait(1).to({y:286.2},0).wait(1).to({y:286},0).wait(1).to({y:285.9},0).wait(1).to({y:285.8},0).wait(1).to({y:285.7},0).wait(1).to({y:285.6},0).wait(1).to({y:285.5},0).wait(1).to({y:285.3},0).wait(1).to({y:285.2},0).wait(1).to({y:285.1},0).wait(1).to({y:285},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(160));

	// лого текст
	this.text = new cjs.Text("АБАЖУР-\nОТЕЛЬ", "8px 'Gotham Pro Narrow Medium'", "#FFFFFF");
	this.text.lineHeight = 7;
	this.text.parent = this;
	this.text.setTransform(23.6,155.1,2.995,2.995);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({y:155},0).wait(79).to({x:23.5,y:155.1},0).wait(1).to({x:23.4,y:155},0).wait(79).to({x:23.3,y:155.1},0).wait(1).to({y:155},0).wait(79));

	// лого подложка
	this.instance_3 = new lib.Символ4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(79.6,182.1,1,1,0,0,0,69.5,60);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:5,x:79.5},0).wait(1).to({rotation:10,x:79.6},0).wait(1).to({rotation:15,x:79.5},0).wait(1).to({rotation:20,x:79.6},0).wait(1).to({rotation:25},0).wait(1).to({rotation:30},0).wait(1).to({rotation:35},0).wait(1).to({rotation:40},0).wait(1).to({rotation:45,x:79.5,y:182.2},0).wait(1).to({rotation:49.5,x:79.6,y:182.1},0).wait(1).to({rotation:54,x:79.5},0).wait(1).to({rotation:58.5,y:182.2},0).wait(1).to({rotation:63},0).wait(1).to({rotation:67.5},0).wait(1).to({rotation:71.9},0).wait(1).to({rotation:76.4},0).wait(1).to({rotation:80.9},0).wait(1).to({rotation:85.4},0).wait(1).to({rotation:89.9,y:182.1},0).wait(1).to({rotation:94.4,y:182.2},0).wait(1).to({rotation:98.9,y:182.1},0).wait(1).to({rotation:103.4},0).wait(1).to({rotation:107.9},0).wait(1).to({rotation:112.4,y:182.2},0).wait(1).to({rotation:116.9,y:182.1},0).wait(1).to({rotation:121.5,y:182.2},0).wait(1).to({rotation:126,y:182.1},0).wait(1).to({rotation:130.5},0).wait(1).to({rotation:135},0).wait(1).to({rotation:139.5},0).wait(1).to({rotation:144,y:182.2},0).wait(1).to({rotation:148.5,x:79.4,y:182.1},0).wait(1).to({rotation:152.9},0).wait(1).to({rotation:157.4,x:79.5},0).wait(1).to({rotation:161.9},0).wait(1).to({rotation:166.4,x:79.4},0).wait(1).to({rotation:170.9,x:79.5},0).wait(1).to({rotation:175.4,x:79.4},0).wait(1).to({rotation:179.9,x:79.5},0).wait(1).to({rotation:194.9},0).wait(1).to({rotation:200.1,x:79.4},0).wait(1).to({rotation:205.2,x:79.5},0).wait(1).to({rotation:210.4,x:79.4},0).wait(1).to({rotation:215.6},0).wait(1).to({rotation:220.7,x:79.5},0).wait(1).to({rotation:225.9},0).wait(1).to({rotation:231.1},0).wait(1).to({rotation:236.2,y:182},0).wait(1).to({rotation:241.4},0).wait(1).to({rotation:244.3,y:182.1},0).wait(1).to({rotation:247.1,x:79.4,y:182},0).wait(1).to({rotation:250,x:79.5,y:182.1},0).wait(1).to({rotation:252.8,y:182},0).wait(1).to({rotation:255.7},0).wait(1).to({rotation:258.5,y:182.1},0).wait(1).to({rotation:261.4},0).wait(1).to({rotation:264.2},0).wait(1).to({rotation:267.1,y:182},0).wait(1).to({rotation:269.9,y:182.1},0).wait(1).to({rotation:274.4,y:182},0).wait(1).to({rotation:278.9,y:182.1},0).wait(1).to({rotation:283.4},0).wait(1).to({rotation:287.9},0).wait(1).to({rotation:292.4,x:79.6,y:182},0).wait(1).to({rotation:296.9,y:182.1},0).wait(1).to({rotation:301.5,y:182},0).wait(1).to({rotation:306,y:182.1},0).wait(1).to({rotation:310.5},0).wait(1).to({rotation:315},0).wait(1).to({rotation:319.5},0).wait(1).to({rotation:324},0).wait(1).to({rotation:328.5},0).wait(1).to({rotation:333},0).wait(1).to({rotation:337.5},0).wait(1).to({rotation:342},0).wait(1).to({rotation:346.5},0).wait(1).to({rotation:351},0).wait(1).to({rotation:355.5},0).wait(1).to({rotation:360},0).wait(2).to({rotation:365,x:79.5},0).wait(1).to({rotation:370,x:79.6},0).wait(1).to({rotation:375,x:79.5},0).wait(1).to({rotation:380,x:79.6},0).wait(1).to({rotation:385},0).wait(1).to({rotation:390},0).wait(1).to({rotation:395},0).wait(1).to({rotation:400},0).wait(1).to({rotation:405,x:79.5,y:182.2},0).wait(1).to({rotation:409.5,x:79.6,y:182.1},0).wait(1).to({rotation:414,x:79.5},0).wait(1).to({rotation:418.5,y:182.2},0).wait(1).to({rotation:423},0).wait(1).to({rotation:427.5},0).wait(1).to({rotation:431.9},0).wait(1).to({rotation:436.4},0).wait(1).to({rotation:440.9},0).wait(1).to({rotation:445.4},0).wait(1).to({rotation:449.9,y:182.1},0).wait(1).to({rotation:454.4,y:182.2},0).wait(1).to({rotation:458.9,y:182.1},0).wait(1).to({rotation:463.4},0).wait(1).to({rotation:467.9},0).wait(1).to({rotation:472.4,y:182.2},0).wait(1).to({rotation:476.9,y:182.1},0).wait(1).to({rotation:481.5,y:182.2},0).wait(1).to({rotation:486,y:182.1},0).wait(1).to({rotation:490.5},0).wait(1).to({rotation:495},0).wait(1).to({rotation:499.5},0).wait(1).to({rotation:504,y:182.2},0).wait(1).to({rotation:508.5,x:79.4,y:182.1},0).wait(1).to({rotation:512.9},0).wait(1).to({rotation:517.4,x:79.5},0).wait(1).to({rotation:521.9},0).wait(1).to({rotation:526.4,x:79.4},0).wait(1).to({rotation:530.9,x:79.5},0).wait(1).to({rotation:535.4,x:79.4},0).wait(1).to({rotation:539.9,x:79.5},0).wait(1).to({rotation:554.9},0).wait(1).to({rotation:560.1,x:79.4},0).wait(1).to({rotation:565.2,x:79.5},0).wait(1).to({rotation:570.4,x:79.4},0).wait(1).to({rotation:575.6},0).wait(1).to({rotation:580.7,x:79.5},0).wait(1).to({rotation:585.9},0).wait(1).to({rotation:591.1},0).wait(1).to({rotation:596.2,y:182},0).wait(1).to({rotation:601.4},0).wait(1).to({rotation:604.3,y:182.1},0).wait(1).to({rotation:607.1,x:79.4,y:182},0).wait(1).to({rotation:610,x:79.5,y:182.1},0).wait(1).to({rotation:612.8,y:182},0).wait(1).to({rotation:615.7},0).wait(1).to({rotation:618.5,y:182.1},0).wait(1).to({rotation:621.4},0).wait(1).to({rotation:624.2},0).wait(1).to({rotation:627.1,y:182},0).wait(1).to({rotation:629.9,y:182.1},0).wait(1).to({rotation:634.4,y:182},0).wait(1).to({rotation:638.9,y:182.1},0).wait(1).to({rotation:643.4},0).wait(1).to({rotation:647.9},0).wait(1).to({rotation:652.4,x:79.6,y:182},0).wait(1).to({rotation:656.9,y:182.1},0).wait(1).to({rotation:661.5,y:182},0).wait(1).to({rotation:666,y:182.1},0).wait(1).to({rotation:670.5},0).wait(1).to({rotation:675},0).wait(1).to({rotation:679.5},0).wait(1).to({rotation:684},0).wait(1).to({rotation:688.5},0).wait(1).to({rotation:693},0).wait(1).to({rotation:697.5},0).wait(1).to({rotation:702},0).wait(1).to({rotation:706.5},0).wait(1).to({rotation:711},0).wait(1).to({rotation:715.5},0).wait(1).to({rotation:720},0).wait(2).to({rotation:725,x:79.5},0).wait(1).to({rotation:730,x:79.6},0).wait(1).to({rotation:735,x:79.5},0).wait(1).to({rotation:740,x:79.6},0).wait(1).to({rotation:745},0).wait(1).to({rotation:750},0).wait(1).to({rotation:755},0).wait(1).to({rotation:760},0).wait(1).to({rotation:765,x:79.5,y:182.2},0).wait(1).to({rotation:769.5,x:79.6,y:182.1},0).wait(1).to({rotation:774,x:79.5},0).wait(1).to({rotation:778.5,y:182.2},0).wait(1).to({rotation:783},0).wait(1).to({rotation:787.5},0).wait(1).to({rotation:791.9},0).wait(1).to({rotation:796.4},0).wait(1).to({rotation:800.9},0).wait(1).to({rotation:805.4},0).wait(1).to({rotation:809.9,y:182.1},0).wait(1).to({rotation:814.4,y:182.2},0).wait(1).to({rotation:818.9,y:182.1},0).wait(1).to({rotation:823.4},0).wait(1).to({rotation:827.9},0).wait(1).to({rotation:832.4,y:182.2},0).wait(1).to({rotation:836.9,y:182.1},0).wait(1).to({rotation:841.5,y:182.2},0).wait(1).to({rotation:846,y:182.1},0).wait(1).to({rotation:850.5},0).wait(1).to({rotation:855},0).wait(1).to({rotation:859.5},0).wait(1).to({rotation:864,y:182.2},0).wait(1).to({rotation:868.5,x:79.4,y:182.1},0).wait(1).to({rotation:872.9},0).wait(1).to({rotation:877.4,x:79.5},0).wait(1).to({rotation:881.9},0).wait(1).to({rotation:886.4,x:79.4},0).wait(1).to({rotation:890.9,x:79.5},0).wait(1).to({rotation:895.4,x:79.4},0).wait(1).to({rotation:899.9,x:79.5},0).wait(1).to({rotation:914.9},0).wait(1).to({rotation:920.1,x:79.4},0).wait(1).to({rotation:925.2,x:79.5},0).wait(1).to({rotation:930.4,x:79.4},0).wait(1).to({rotation:935.6},0).wait(1).to({rotation:940.7,x:79.5},0).wait(1).to({rotation:945.9},0).wait(1).to({rotation:951.1},0).wait(1).to({rotation:956.2,y:182},0).wait(1).to({rotation:961.4},0).wait(1).to({rotation:964.3,y:182.1},0).wait(1).to({rotation:967.1,x:79.4,y:182},0).wait(1).to({rotation:970,x:79.5,y:182.1},0).wait(1).to({rotation:972.8,y:182},0).wait(1).to({rotation:975.7},0).wait(1).to({rotation:978.5,y:182.1},0).wait(1).to({rotation:981.4},0).wait(1).to({rotation:984.2},0).wait(1).to({rotation:987.1,y:182},0).wait(1).to({rotation:989.9,y:182.1},0).wait(1).to({rotation:994.4,y:182},0).wait(1).to({rotation:998.9,y:182.1},0).wait(1).to({rotation:1003.4},0).wait(1).to({rotation:1007.9},0).wait(1).to({rotation:1012.4,x:79.6,y:182},0).wait(1).to({rotation:1016.9,y:182.1},0).wait(1).to({rotation:1021.5,y:182},0).wait(1).to({rotation:1026,y:182.1},0).wait(1).to({rotation:1030.5},0).wait(1).to({rotation:1035},0).wait(1).to({rotation:1039.5},0).wait(1).to({rotation:1044},0).wait(1).to({rotation:1048.5},0).wait(1).to({rotation:1053},0).wait(1).to({rotation:1057.5},0).wait(1).to({rotation:1062},0).wait(1).to({rotation:1066.5},0).wait(1).to({rotation:1071},0).wait(1).to({rotation:1075.5},0).wait(1).to({rotation:1080},0).wait(1));

	// pic3
	this.instance_4 = new lib.Символ5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(602.5,92.3,0.998,0.998,44.9,0,0,151,139);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(160).to({_off:false},0).wait(1).to({regX:152,regY:140.3,scaleX:1,scaleY:1,rotation:40,x:554,y:94},0).wait(1).to({rotation:35,x:505.8,y:94.1},0).wait(1).to({rotation:30,x:457.5},0).wait(1).to({rotation:25,x:409.3},0).wait(1).to({rotation:20,x:361.1},0).wait(1).to({rotation:15,x:312.8},0).wait(1).to({rotation:10,x:264.6},0).wait(1).to({rotation:5,x:216.3,y:94},0).wait(1).to({rotation:0,x:168.1},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-0.3},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.5},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.7},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-0.9},0).wait(1).to({rotation:-1},0).wait(1).to({rotation:-1.1},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-1.7},0).wait(1).to({rotation:-1.8},0).wait(1).to({rotation:-1.9},0).wait(1).to({rotation:-2,y:93.9},0).wait(1).to({rotation:-2.1,y:94},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-2.4},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.6,y:93.9},0).wait(1).to({rotation:-2.7,y:94},0).wait(1).to({rotation:-2.8},0).wait(1).to({rotation:-2.9},0).wait(1).to({rotation:-3,x:168.2,y:93.9},0).wait(1).to({rotation:-3.1,y:94},0).wait(1).to({rotation:-3.2,x:168.1},0).wait(1).to({rotation:-3.3,x:168.2},0).wait(1).to({rotation:-3.4,y:93.9},0).wait(1).to({rotation:-3.5,x:168.1,y:94},0).wait(1).to({rotation:-3.6,x:168.2,y:93.9},0).wait(1).to({rotation:-3.7,y:94},0).wait(1).to({rotation:-3.8,x:168.1,y:93.9},0).wait(1).to({rotation:-3.9,x:168.2},0).wait(1).to({rotation:-4.1,x:168.1},0).wait(1).to({rotation:-4.2,y:94},0).wait(1).to({rotation:-4.3,x:168.2,y:93.9},0).wait(1).to({rotation:-4.4,y:94},0).wait(1).to({rotation:-4.5,y:93.9},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-4.7},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-4.9},0).wait(1).to({rotation:-5},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-5.2,x:168.1},0).wait(1).to({rotation:-5.3,x:168.2},0).wait(1).to({rotation:-5.4,x:168.1},0).wait(1).to({rotation:-5.5,x:168.2},0).wait(1).to({rotation:-5.6,x:168.1},0).wait(1).to({rotation:-5.7,x:168.2},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-5.9},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-6.2},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1));

	// pic2
	this.instance_5 = new lib.Символ6();
	this.instance_5.parent = this;
	this.instance_5.setTransform(602.4,92.4,0.998,0.998,44.9,0,0,151.6,139.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80).to({_off:false},0).wait(1).to({regX:152,regY:140.3,scaleX:1,scaleY:1,rotation:40,x:553.8,y:93.3},0).wait(1).to({rotation:35,x:505.5,y:93.4},0).wait(1).to({rotation:30,x:457.2},0).wait(1).to({rotation:25,x:408.9,y:93.5},0).wait(1).to({rotation:20,x:360.6},0).wait(1).to({rotation:15,x:312.3},0).wait(1).to({rotation:10,x:264.1},0).wait(1).to({rotation:5,x:215.7},0).wait(1).to({rotation:0,x:167.5,y:93.6},0).wait(1).to({rotation:-0.1},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-0.3,y:93.5},0).wait(1).to({rotation:-0.4,y:93.6},0).wait(1).to({rotation:-0.5,y:93.5},0).wait(1).to({rotation:-0.6,y:93.6},0).wait(1).to({rotation:-0.7,y:93.5},0).wait(1).to({rotation:-0.8,y:93.6},0).wait(1).to({rotation:-0.9,y:93.5},0).wait(1).to({rotation:-1,y:93.6},0).wait(1).to({rotation:-1.1,y:93.5},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-1.7,y:93.6},0).wait(1).to({rotation:-1.8,y:93.5},0).wait(1).to({rotation:-1.9,y:93.6},0).wait(1).to({rotation:-2,y:93.5},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2.3,y:93.6},0).wait(1).to({rotation:-2.4,y:93.5},0).wait(1).to({rotation:-2.5},0).wait(1).to({rotation:-2.6},0).wait(1).to({rotation:-2.7,y:93.6},0).wait(1).to({rotation:-2.8,y:93.5},0).wait(1).to({rotation:-2.9},0).wait(1).to({rotation:-3,x:167.6},0).wait(1).to({rotation:-3.1,y:93.6},0).wait(1).to({rotation:-3.2,x:167.5,y:93.5},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.4,x:167.6},0).wait(1).to({rotation:-3.5,x:167.5,y:93.6},0).wait(1).to({rotation:-3.6,y:93.5},0).wait(1).to({rotation:-3.7},0).wait(1).to({rotation:-3.8},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-4.2,y:93.6},0).wait(1).to({rotation:-4.3,y:93.5},0).wait(1).to({rotation:-4.4,x:167.6},0).wait(1).to({rotation:-4.5},0).wait(1).to({rotation:-4.6,x:167.5},0).wait(1).to({rotation:-4.7,x:167.6},0).wait(1).to({rotation:-4.8,x:167.5},0).wait(1).to({rotation:-4.9,x:167.6},0).wait(1).to({rotation:-5,x:167.5},0).wait(1).to({rotation:-5.1},0).wait(1).to({rotation:-5.2},0).wait(1).to({rotation:-5.3},0).wait(1).to({rotation:-5.4},0).wait(1).to({rotation:-5.5},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-5.7},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-5.9,x:167.6},0).wait(1).to({rotation:-6},0).wait(1).to({rotation:-6.1},0).wait(1).to({rotation:-6.2},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(80));

	// pic1
	this.instance_6 = new lib.Символ7();
	this.instance_6.parent = this;
	this.instance_6.setTransform(602.1,91.9,0.998,0.998,44.9,0,0,151.1,139.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:151.6,regY:139.9,scaleX:1,scaleY:1,rotation:40,x:553.6,y:92.9},0).wait(1).to({rotation:35,x:505.2,y:93},0).wait(1).to({rotation:30,x:456.9},0).wait(1).to({rotation:25,x:408.6,y:93.1},0).wait(1).to({rotation:20,x:360.2,y:93.2},0).wait(1).to({rotation:15,x:311.9,y:93.3},0).wait(1).to({rotation:10,x:263.5},0).wait(1).to({rotation:5,x:215.2,y:93.4},0).wait(1).to({rotation:0,x:166.9},0).wait(1).to({rotation:-0.1,y:93.5},0).wait(1).to({rotation:-0.2,y:93.4},0).wait(1).to({rotation:-0.3,y:93.5},0).wait(1).to({rotation:-0.4,y:93.4},0).wait(1).to({rotation:-0.5,y:93.5},0).wait(1).to({rotation:-0.6,y:93.4},0).wait(1).to({rotation:-0.7,y:93.5},0).wait(1).to({rotation:-0.8,y:93.4},0).wait(1).to({rotation:-0.9,y:93.5},0).wait(1).to({rotation:-1,y:93.4},0).wait(1).to({rotation:-1.1},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-1.5},0).wait(1).to({rotation:-1.6},0).wait(1).to({rotation:-1.7},0).wait(1).to({rotation:-1.8,y:93.5},0).wait(1).to({rotation:-1.9,x:166.8,y:93.4},0).wait(1).to({rotation:-2,x:166.9},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-2.2},0).wait(1).to({rotation:-2.3},0).wait(1).to({rotation:-2.4,y:93.5},0).wait(1).to({rotation:-2.5,y:93.4},0).wait(1).to({rotation:-2.6},0).wait(1).to({rotation:-2.7},0).wait(1).to({rotation:-2.8},0).wait(1).to({rotation:-2.9},0).wait(1).to({rotation:-3},0).wait(1).to({rotation:-3.1},0).wait(1).to({rotation:-3.2},0).wait(1).to({rotation:-3.3},0).wait(1).to({rotation:-3.4},0).wait(1).to({rotation:-3.5},0).wait(1).to({rotation:-3.6},0).wait(1).to({rotation:-3.7,x:167},0).wait(1).to({rotation:-3.8,x:166.9},0).wait(1).to({rotation:-3.9},0).wait(1).to({rotation:-4.1},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-4.3},0).wait(1).to({rotation:-4.4},0).wait(1).to({rotation:-4.5},0).wait(1).to({rotation:-4.6},0).wait(1).to({rotation:-4.7},0).wait(1).to({rotation:-4.8},0).wait(1).to({rotation:-4.9},0).wait(1).to({rotation:-5,y:93.3},0).wait(1).to({rotation:-5.1,y:93.4},0).wait(1).to({rotation:-5.2,y:93.3},0).wait(1).to({rotation:-5.3,y:93.4},0).wait(1).to({rotation:-5.4},0).wait(1).to({rotation:-5.5},0).wait(1).to({rotation:-5.6},0).wait(1).to({rotation:-5.7},0).wait(1).to({rotation:-5.8},0).wait(1).to({rotation:-5.9,x:167},0).wait(1).to({rotation:-6,x:166.9},0).wait(1).to({rotation:-6.1,x:167},0).wait(1).to({rotation:-6.2,x:166.9},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(160));

	// фон
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AxDa8MAAAg13MAiHAAAMAAAA13g");
	this.shape.setTransform(100.1,166.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(90.9,53.5,816.9,521.5);
// library properties:
lib.properties = {
	id: '5A69FCF697C32B4196D33267AD3B188C',
	width: 200,
	height: 333,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Абажур_Отель_atlas_.png", id:"Абажур_Отель_atlas_"}
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
an.compositions['5A69FCF697C32B4196D33267AD3B188C'] = {
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