(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Учебный комбинат_atlas_", frames: [[0,2559,709,386],[711,2434,709,394],[0,1905,709,652],[0,745,1836,578],[0,1325,1836,578],[0,0,1921,743],[711,1905,709,527],[1838,745,200,213],[1838,960,200,213]]}
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



(lib.авто = function() {
	this.spriteSheet = ss["Учебный комбинат_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.машина2 = function() {
	this.spriteSheet = ss["Учебный комбинат_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.мотоцикл2 = function() {
	this.spriteSheet = ss["Учебный комбинат_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.теньполовина = function() {
	this.spriteSheet = ss["Учебный комбинат_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.теньполовинаpngкопия = function() {
	this.spriteSheet = ss["Учебный комбинат_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.spriteSheet = ss["Учебный комбинат_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.шапочка = function() {
	this.spriteSheet = ss["Учебный комбинат_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["Учебный комбинат_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.logopngкопия = function() {
	this.spriteSheet = ss["Учебный комбинат_atlas_"];
	this.gotoAndStop(8);
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


(lib.Символ21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgUEAgBMAAAhABMAoIAAAMAAABABg");
	this.shape.setTransform(128.5,204.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ21, new cjs.Rectangle(0,0,256.9,409.9), null);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAsIAAgiIgZAAIgaAiIgMAAIAbgkQgGgBgGgDQgGgDgDgFQgCgFAAgIQAAgFABgFQACgFADgDQAEgEAHgCQAHgCAIgBIAlAAIAABYgAgRgdQgFAEAAAJQAAAGACAEQAEAEAEACQAGACAGAAIAbAAIAAglIgbAAQgKAAgHAGg");
	this.shape.setTransform(138.5,32.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaAsIAAhIIg0BIIgKAAIAAhYIAKAAIAABJIA1hJIAJAAIAABYg");
	this.shape_1.setTransform(129.4,32.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAaAsIAAgnIgzAAIAAAnIgKAAIAAhYIAKAAIAAAoIAzAAIAAgoIAKAAIAABYg");
	this.shape_2.setTransform(119.6,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAsIAAhYIBAAAIAAAJIg2AAIAAAfIAwAAIAAAIIgwAAIAAAfIA2AAIAAAJg");
	this.shape_3.setTransform(110.8,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkA2IAAgUIhHAAIgBAUIgJAAIAAgdIAJAAQAGgKAEgPQAEgRAAgVIAAgQIA4AAIAABPIAMAAIgCAdgAgNghQAAAMgCALIgEATQgCAKgEAGIAyAAIAAhGIgmAAg");
	this.shape_4.setTransform(101.4,33.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AA2AsIgfgrIgSATIAAAYIgJAAIAAgYIgSgTIgfArIgMAAIAkgyIgigmIANAAIAuA0IAAg0IAJAAIAAA0IAug0IANAAIgiAmIAkAyg");
	this.shape_5.setTransform(89.8,32.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSArQgIgEgGgGQgGgHgDgJQgDgHAAgKQAAgIADgJQADgIAGgGQAGgGAIgFQAJgDAJAAQALAAAHADQAJAEAGAHQAGAGADAIQADAJAAAIQAAAJgDAIQgDAJgGAGQgGAHgJAEQgIADgKAAQgJAAgJgDgAgRgfQgIAFgEAIQgFAJAAAJQAAAKAFAIQAEAJAIAFQAIAEAJAAQALABAHgFQAIgFAEgJQAFgIAAgKQAAgJgFgJQgEgIgIgFQgIgEgKgBQgKABgHAEg");
	this.shape_6.setTransform(77.5,32.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgjAsIAAhYIAlAAQAHAAAHACQAFADAEADIAEAHQACAEAAAEQAAAFgCAFQgCADgDAEIgHADQAFABAEADQAFACADAFQACAEAAAGQAAAIgEAGQgEAFgIADQgHACgJAAgAgZAjIAdAAQAKAAAGgEQAFgEABgIQAAgHgGgEQgGgEgMAAIgbAAgAgZgEIAZAAQAKAAAFgEQAGgEAAgIQgBgGgEgEQgGgFgJAAIgaAAg");
	this.shape_7.setTransform(67.7,32.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgjAsIAAhYIAlAAQAHAAAHACQAFACAEAEIAEAHQACAEAAAEQAAAGgCAEQgCADgDADIgHAFQAFAAAEADQAFACADAFQACAEAAAGQAAAIgEAGQgEAEgIAEQgHACgJAAgAgZAjIAdAAQAKAAAGgEQAGgEAAgIQAAgHgGgEQgGgEgMAAIgbAAgAgZgEIAZAAQAKAAAFgEQAGgEAAgIQgBgGgEgEQgGgFgJAAIgaAAg");
	this.shape_8.setTransform(116.3,18.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRArQgJgFgGgFQgGgHgDgIQgEgJABgJQgBgIAEgJQADgIAGgHQAGgFAJgFQAIgDAJAAQAKAAAJADQAIAEAGAGQAGAHADAIQADAJABAIQgBAJgDAJQgDAIgGAGQgGAGgIAFQgJADgKAAQgKAAgHgDgAgRgfQgIAFgFAIQgEAJAAAJQAAAKAEAIQAFAJAIAFQAIAEAJAAQAKAAAJgEQAHgFAEgJQAFgHAAgLQAAgJgFgJQgEgIgIgFQgIgFgKAAQgKAAgHAFg");
	this.shape_9.setTransform(106,18.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAZAsIghgrIgTATIAAAYIgKAAIAAhYIAKAAIAAA1IAzg1IAMAAIglAnIAnAxg");
	this.shape_10.setTransform(96.5,18.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgRArQgJgFgGgFQgGgHgDgIQgDgJgBgJQABgIADgJQADgIAGgHQAGgFAJgFQAIgDAJAAQALAAAHADQAJAEAGAGQAGAHADAIQADAJAAAIQAAAJgDAJQgDAIgGAGQgGAGgJAFQgIADgKAAQgJAAgIgDgAgRgfQgIAFgEAIQgFAJAAAJQAAAKAFAIQAEAJAIAFQAIAEAJAAQALAAAHgEQAIgFAEgJQAFgHAAgLQAAgJgFgJQgEgIgIgFQgIgFgKAAQgKAAgHAFg");
	this.shape_11.setTransform(86,18.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggAsIAAhYIAgAAQAKABAIADQAHADAEAHQAEAGAAAJQAAAJgEAGQgFAGgIAEQgIADgIAAIgWAAIAAAfgAgWAEIAWAAQAKAAAHgEQAGgGAAgJQAAgKgGgEQgHgFgKAAIgWAAg");
	this.shape_12.setTransform(76.7,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbAsIgIgCIAEgIIAGACIAGAAQAEAAAFgDQAFgDAEgHIgohDIAMAAIAgA5IAcg5IALAAIgjBFQgGALgGAFQgHAEgIAAIgHgBg");
	this.shape_13.setTransform(67.4,18.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AglBqQgSgJgLgQQgNgQgGgVQgGgUAAgYQAAgXAGgUQAGgUANgRQAMgQARgJQARgJAUgBQAWABAQAJQASAJAMAQQALAQAHAUQAHAWgBAWQABAYgHAUQgHAUgLAQQgMARgSAJQgRAJgVAAQgVAAgQgJgAgehbQgOAIgKAOQgKAOgFASQgFASAAATQAAATAFASQAFATAKANQALAPANAIQAOAJAQgBQASABAOgJQAOgIAJgOQAKgPAFgRQAFgSAAgUQAAgTgFgSQgGgRgJgOQgKgPgOgIQgOgJgRAAQgRAAgNAJg");
	this.shape_14.setTransform(38.8,25.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AhLBxIAAgMIBShLQASgRALgMQALgNAFgLQAFgLgBgMQAAgOgHgLQgHgLgLgFQgLgGgOAAQgUAAgPAKQgQALgNAUIgMgIQAJgPALgLQALgLAOgFQAOgGATAAQATAAAPAIQAPAIAIAOQAJAOAAASQAAAPgGANQgFANgNANQgMAOgUARIhDA+IB9AAIAAAQg");
	this.shape_15.setTransform(17.9,25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ20, new cjs.Rectangle(0,0,175.1,51), null);


(lib.Символ19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAXAtIAAgmIgIADIgKAEIgJABQgIAAgHgDQgGgCgEgHQgDgEAAgJIAAghIAKAAIAAAfQAAAJAFAEQAFAFAJAAQAGAAAHgDIANgFIAAgpIAKAAIAABYg");
	this.shape.setTransform(128.1,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiAtIgKgYIgvAAIgLAYIgKAAIAohZIAJAAIAoBZgAAUAMIgUgsIgUAsIAoAAg");
	this.shape_1.setTransform(118.9,32.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAlA3IAAgUIhIAAIgCAUIgIAAIAAgdIAJAAQAGgLAEgPQADgQABgWIAAgPIA4AAIAABPIAMAAIgBAdgAgNghQAAAMgBALIgFAUQgCAJgEAHIAxAAIAAhGIglAAg");
	this.shape_2.setTransform(109,33.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiAtIgKgYIgvAAIgLAYIgKAAIAohZIAJAAIAoBZgAAUAMIgUgsIgUAsIAoAAg");
	this.shape_3.setTransform(99.2,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRArQgJgEgHgIIAGgGQAGAGAIAEQAHADAJAAQAGAAAEgCQAFgDADgEQADgDAAgGQAAgGgEgDQgDgEgFgCQgFgBgHAAIgJAAIAAgIIAJAAQAGAAAFgCQAFgCADgDQACgEAAgGQAAgEgCgDQgDgEgEgCQgFgCgGAAQgGgBgHADQgGADgGAFIgGgHQAHgGAHgDQAIgDAKAAQAIAAAHADQAHADAEAFQAEAGAAAHQAAAGgDAEIgGAHIgIAEQAGAAAEADQAEADADAEQACAFAAAGQAAAHgEAGQgEAFgHAEQgHADgJAAQgLAAgJgDg");
	this.shape_4.setTransform(90,32.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAcAtIgcgnIgcAnIgLAAIAigtIghgrIAMAAIAaAkIAbgkIAMAAIghArIAiAtg");
	this.shape_5.setTransform(187.4,18.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiAtIAAhYIAKAAIAABYgAgrAtIAAhYIAKAAIAAAiIAWAAQAKAAAHADQAIADAEAEQAFAGAAAJQAAAJgEAGQgEAHgIADQgHAEgJAAgAghAkIAYAAQAJgBAHgFQAGgEAAgJQAAgKgGgEQgHgDgKAAIgXAAg");
	this.shape_6.setTransform(177.1,18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAaAtIAAgpIgzAAIAAApIgKAAIAAhYIAKAAIAAAnIAzAAIAAgnIAKAAIAABYg");
	this.shape_7.setTransform(166.5,18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAtIAAhYIAKAAIAAAiIAXAAQAJAAAIADQAHADAFAEQAFAGgBAJQAAAJgEAGQgDAHgIADQgHAEgKAAgAgXAkIAYAAQAKgBAHgFQAFgEAAgJQAAgKgFgEQgHgDgLAAIgXAAg");
	this.shape_8.setTransform(157.7,18.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglAsIgFgBIACgIIADAAIAFABIAEgBQADgBADgDQABgEACgHIAEgTIABgdIAAgQIA5AAIAABYIgKAAIAAhPIglAAIAAAKQAAASgBAMQgCANgDAIQgCAIgDAEQgEAEgDABIgJACIgGgBg");
	this.shape_9.setTransform(147.6,18.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgSAqQgIgDgGgHQgGgGgDgIQgDgJgBgJQABgIADgIQADgJAGgHQAHgFAHgFQAJgDAJAAQALAAAHADQAJAEAGAGQAGAHADAJQAEAIgBAIQABAJgEAJQgDAIgGAGQgGAGgJAEQgIAEgKAAQgJAAgJgEgAgRgfQgIAFgEAJQgFAHAAAKQAAAKAFAJQAEAIAIAEQAIAGAJAAQALgBAHgEQAIgFAFgIQAEgJAAgKQAAgKgEgHQgFgJgIgFQgIgFgKAAQgKAAgHAFg");
	this.shape_10.setTransform(138,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AggAtIAAhYIAgAAQAKgBAIAEQAHAEAEAFQAEAHAAAJQAAAKgEAFQgFAHgIADQgIADgIAAIgWAAIAAAggAgWAEIAWAAQAKAAAHgEQAGgGAAgJQAAgJgGgGQgHgEgKAAIgWAAg");
	this.shape_11.setTransform(128.6,18.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgEAtIAAhPIgeAAIAAgJIBFAAIAAAJIgeAAIAABPg");
	this.shape_12.setTransform(119.9,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAaAtIAAgpIgzAAIAAApIgKAAIAAhYIAKAAIAAAnIAzAAIAAgnIAKAAIAABYg");
	this.shape_13.setTransform(110.9,18.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgRAqQgJgDgGgHQgGgGgDgIQgEgJABgJQgBgIAEgIQADgJAGgHQAGgFAJgFQAIgDAJAAQAKAAAJADQAIAEAGAGQAGAHADAJQADAIABAIQgBAJgDAJQgDAIgGAGQgGAGgIAEQgJAEgKAAQgJAAgIgEgAgRgfQgIAFgFAJQgEAHAAAKQAAAKAEAJQAFAIAIAEQAIAGAJAAQAKgBAJgEQAHgFAEgIQAFgJAAgKQAAgKgFgHQgEgJgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_14.setTransform(100.7,18.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAZAtIghgrIgTATIAAAYIgKAAIAAhYIAKAAIAAA0IAzg0IAMAAIglAmIAnAyg");
	this.shape_15.setTransform(91.2,18.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AglBqQgSgJgMgQQgLgQgHgVQgGgUAAgYQAAgXAGgUQAHgUALgRQANgQARgJQARgJAUgBQAWABAQAJQASAJALAQQANAQAGAUQAGAWAAAWQAAAYgGAUQgGAUgNAQQgLARgSAJQgRAJgVAAQgUAAgRgJgAgfhbQgNAIgKAOQgKAOgFASQgFASAAATQAAATAFASQAFATALANQAKAPANAIQAOAJAQgBQASABANgJQAOgIAKgOQAKgPAFgRQAFgSAAgUQAAgTgFgSQgGgRgJgOQgKgPgOgIQgOgJgRAAQgRAAgOAJg");
	this.shape_16.setTransform(62.1,25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgbBtQgPgFgLgLQgJgJgGgMQgGgLgEgQQgCgQAAgXQgBgiALgbQAMgbAUgQQAUgQAbgBQATABAQAGQAPAIAOALIgKANQgMgMgOgFQgOgHgPAAQgVABgQAOQgRAOgJAYQgJAZAAAgIAAAFQAGgLAJgIQAKgJANgGQAOgGAQAAQAVAAASAIQARAJALAPQAKAPAAAUQAAAVgKARQgKAQgRAKQgTAJgWAAQgQAAgOgGgAgbgCQgOAGgJANQgHANgBAOQABAQAIANQAIANAPAHQAOAIAQgBQATAAANgHQANgIAIgOQAHgMAAgRQAAgPgIgMQgHgNgOgFQgOgIgRAAQgRABgOAIg");
	this.shape_17.setTransform(40.5,25.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAQBwIAAjOIgqAPIgFgNIAygTIANAAIAADfg");
	this.shape_18.setTransform(23.6,25.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AAQBwIAAjOIgqAPIgFgNIAygTIANAAIAADfg");
	this.shape_19.setTransform(12.9,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ19, new cjs.Rectangle(0,0,207.3,51), null);


(lib.Символ18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAbAsIAAhIIg0BIIgKAAIAAhYIAKAAIAABJIA0hJIAKAAIAABYg");
	this.shape.setTransform(160,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAbAsIAAhIIg0BIIgKAAIAAhYIAKAAIAABJIA0hJIAKAAIAABYg");
	this.shape_1.setTransform(150.2,32.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAfA2IAAgUIhHAAIAAhYIAKAAIAABPIAyAAIAAhPIAKAAIAABPIALAAIgBAdg");
	this.shape_2.setTransform(140.9,33.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiAtIgKgYIgvAAIgLAYIgKAAIAohZIAJAAIAoBZgAAUAMIgUgsIgUAsIAoAAg");
	this.shape_3.setTransform(130.6,32.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAhAsIAAhHIghAvIAAAAIgggvIAABHIgKAAIAAhYIALAAIAfAwIAggwIALAAIAABYg");
	this.shape_4.setTransform(120,32.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaAsIAAhIIg0BIIgKAAIAAhYIAKAAIAABJIA1hJIAJAAIAABYg");
	this.shape_5.setTransform(109.6,32.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAaAsIAAgnIgzAAIAAAnIgKAAIAAhYIAKAAIAAAoIAzAAIAAgoIAKAAIAABYg");
	this.shape_6.setTransform(99.8,32.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAiAtIgKgYIgvAAIgLAYIgKAAIAohZIAJAAIAoBZgAAUAMIgUgsIgUAsIAoAAg");
	this.shape_7.setTransform(90,32.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAaAsIAAhIIg0BIIgKAAIAAhYIAKAAIAABJIA1hJIAJAAIAABYg");
	this.shape_8.setTransform(76.3,32.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjAsIAAhYIAlAAQAHAAAHACQAFACAFAEIADAHQACAEAAAEQAAAGgCAEQgCADgEADIgGAFQAFAAAFADQAEACADAFQACAEAAAGQAAAIgEAGQgEAEgIAEQgGACgLAAgAgZAkIAdAAQAKgBAGgEQAFgEABgIQAAgHgGgEQgGgEgMAAIgbAAgAgZgEIAaAAQAJAAAFgEQAFgEABgIQAAgGgFgEQgGgFgJAAIgaAAg");
	this.shape_9.setTransform(183,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgRArQgJgFgGgFQgGgHgDgJQgDgIAAgJQAAgIADgJQADgIAGgHQAGgFAJgFQAIgDAJAAQAKAAAIADQAJAEAGAGQAGAHADAIQADAJABAIQgBAJgDAIQgDAJgGAGQgGAGgJAFQgIADgKAAQgKAAgHgDgAgRgfQgIAFgEAIQgFAJAAAJQAAAKAFAIQAEAJAIAFQAIAEAJAAQAKAAAIgEQAIgFAEgJQAFgHAAgLQAAgJgFgJQgEgIgIgFQgIgEgKgBQgJABgIAEg");
	this.shape_10.setTransform(172.8,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAZAsIghgrIgTATIAAAYIgKAAIAAhYIAKAAIAAA0IAyg0IANAAIglAnIAnAxg");
	this.shape_11.setTransform(163.3,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAaAsIAAhIIg0BIIgKAAIAAhYIAKAAIAABJIA1hJIAJAAIAABYg");
	this.shape_12.setTransform(153.4,18.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AglAtIgFgCIACgIIADABIAFAAIAEgBQADgBADgEQACgCABgIIAEgTIABgdIAAgQIA5AAIAABYIgKAAIAAhPIglAAIAAAKQAAATgBALQgCANgDAIQgCAIgEAEQgDAEgDABIgIACIgHAAg");
	this.shape_13.setTransform(142.9,18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSArQgIgFgGgFQgGgHgDgJQgDgIgBgJQABgIADgJQADgIAGgHQAGgFAIgFQAJgDAJAAQALAAAHADQAJAEAGAGQAGAHADAIQADAJAAAIQAAAJgDAIQgDAJgGAGQgGAGgJAFQgIADgKAAQgJAAgJgDgAgRgfQgIAFgEAIQgFAJAAAJQAAAKAFAIQAEAJAIAFQAIAEAJAAQALAAAHgEQAIgFAEgJQAFgHAAgLQAAgJgFgJQgEgIgIgFQgIgEgKgBQgKABgHAEg");
	this.shape_14.setTransform(133.3,18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AggAsIAAhYIAgAAQAKABAIADQAHADAEAHQAEAGAAAJQAAAJgEAGQgFAGgIAEQgIADgIAAIgWAAIAAAfgAgWAEIAWAAQAKAAAHgEQAGgGAAgJQAAgKgGgEQgHgFgKAAIgWAAg");
	this.shape_15.setTransform(123.9,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRArQgJgFgGgFQgGgHgDgJQgDgIAAgJQAAgIADgJQADgIAGgHQAHgFAIgFQAIgDAJAAQAKAAAJADQAIAEAGAGQAGAHADAIQAEAJAAAIQAAAJgEAIQgDAJgGAGQgGAGgIAFQgJADgKAAQgKAAgHgDgAgRgfQgIAFgFAIQgEAJAAAJQAAAKAEAIQAFAJAIAFQAIAEAJAAQAKAAAJgEQAHgFAEgJQAFgHAAgLQAAgJgFgJQgEgIgIgFQgIgEgKgBQgJABgIAEg");
	this.shape_16.setTransform(114,18.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggAsIAAhYIBAAAIAAAJIg2AAIAAAfIAwAAIAAAIIgwAAIAAAgIA2AAIAAAIg");
	this.shape_17.setTransform(104.5,18.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAlA2IAAgUIhIAAIgBAUIgJAAIAAgcIAJAAQAHgLADgPQADgRAAgVIAAgQIA6AAIAABQIALAAIgBAcgAgNghQAAAMgCALIgDATQgDAKgEAHIAxAAIAAhHIglAAg");
	this.shape_18.setTransform(95.2,19.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAaAsIAAhIIg0BIIgJAAIAAhYIAJAAIAABJIA1hJIAJAAIAABYg");
	this.shape_19.setTransform(85.6,18.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjAsIAAhYIAlAAQAIAAAFACQAGACAFAEIADAHQACAEAAAEQAAAGgCAEQgCADgEADIgGAFQAFAAAFADQAEACACAFQADAEAAAGQAAAIgEAGQgEAEgIAEQgHACgKAAgAgZAkIAdAAQAKgBAGgEQAGgEAAgIQAAgHgGgEQgGgEgMAAIgbAAgAgZgEIAaAAQAIAAAGgEQAGgEAAgIQAAgGgGgEQgEgFgKAAIgaAAg");
	this.shape_20.setTransform(76.3,18.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AgpBqQgTgHgLgOQgLgPAAgSQAAgOAHgLQAGgKALgIQALgIAPgDQgMgFgJgHQgJgIgGgJQgGgLAAgOQAAgRALgNQAKgNASgIQAQgGATgBQAUABARAGQARAIAKANQALANAAASQAAAOgGAKQgFAJgKAIQgJAHgMAFQAPADALAIQALAIAGAKQAHAMAAANQAAASgLAPQgLAOgTAHQgSAJgYAAQgXAAgSgJgAggAKQgPAHgJAKQgIALgBAOQAAANAIALQAIALAPAGQAOAHAUAAQAVAAAOgHQAPgGAIgLQAIgLAAgNQAAgOgJgLQgJgKgPgHQgPgGgSAAQgRAAgPAGgAgchdQgNAGgIAKQgIAJAAANQAAAOAIALQAIAKANAGQANAFAPAAQAQAAANgFQANgHAIgKQAIgLAAgOQAAgMgIgKQgHgJgNgGQgNgFgRgBQgPABgNAFg");
	this.shape_21.setTransform(50,25.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgtBrQgQgHgOgMIAKgNQAOANAOAGQAOAHAPgBQAVAAAQgNQARgOAJgYQAKgZAAgeIAAgHQgHALgJAJQgKAKgNAFQgNAGgQAAQgXAAgSgJQgQgJgLgOQgKgQABgTQgBgWAKgQQAKgRASgKQARgKAYgBQARABAOAGQAOAGAKAKQANAMAIAWQAHAUAAAiQAAAigLAbQgMAbgVAPQgUAQgZAAQgVAAgQgIgAgjhbQgOAIgHAOQgHAOAAAQQAAAPAIANQAHALAOAHQANAHATAAQARAAAOgJQAOgHAIgNQAHgNABgPQgBgQgIgNQgIgMgOgIQgPgHgRgBQgSAAgNAJg");
	this.shape_22.setTransform(29.8,25.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AAQBwIAAjOIgqAPIgFgNIAygTIANAAIAADfg");
	this.shape_23.setTransform(12.9,25.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ18, new cjs.Rectangle(0,0,190.8,51), null);


(lib.Символ17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgqBmQgUgKgOgSIANgMQANASARAJQARAKAVgBQAQABAMgHQAMgGAIgLQAHgMAAgOQAAgQgJgLQgJgLgPgGQgQgFgTAAIgMAAIgFgJIBMhYIh0AAIAAgPICLAAIAAALIhLBXQAOABANADQAOAFAMAGQALAIAHALQAHAMAAARQAAATgKAPQgKAOgQAIQgRAIgTAAQgaAAgVgLg");
	this.shape.setTransform(38.7,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgbBtQgPgFgLgLQgJgJgGgMQgGgLgEgQQgDgQABgXQgBgiALgbQAMgbAUgQQAUgQAbgBQATABAQAGQAPAIAOALIgKANQgMgMgOgFQgNgHgQAAQgVABgQAOQgRAOgJAYQgJAZAAAgIAAAFQAGgLAKgIQAJgJANgGQANgGASAAQAUAAASAIQARAJALAPQAKAPAAAUQAAAVgKARQgKAQgRAKQgSAJgXAAQgQAAgOgGgAgbgCQgOAGgJANQgHANAAAOQAAAQAIANQAIANAOAHQAOAIASgBQASAAANgHQANgIAIgOQAHgMAAgRQAAgPgIgMQgHgNgOgFQgOgIgRAAQgRABgOAIg");
	this.shape_1.setTransform(19,25.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAbAtIAAhKIg1BKIgJAAIAAhYIAJAAIAABIIA1hIIAKAAIAABYg");
	this.shape_2.setTransform(112,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbAtIAAhKIg0BKIgKAAIAAhYIAKAAIAABIIA0hIIAKAAIAABYg");
	this.shape_3.setTransform(102.3,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAfA3IAAgUIhHAAIAAhYIAKAAIAABPIAyAAIAAhPIAKAAIAABPIALAAIgBAdg");
	this.shape_4.setTransform(93,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAaAtIgigrIgTATIAAAYIgKAAIAAhYIAKAAIAAA0IAyg0IAOAAIgmAmIAnAyg");
	this.shape_5.setTransform(83.6,32.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgfAtIAAhYIA/AAIAAAJIg1AAIAAAeIAvAAIAAAIIgvAAIAAAgIA2AAIAAAJg");
	this.shape_6.setTransform(74.5,32.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglAsIgFgBIACgIIADAAIAFABIAEgBQADgBACgDQACgEACgHIAEgTIABgdIAAgQIA5AAIAABYIgKAAIAAhPIglAAIAAAKQAAASgBAMQgCANgDAIQgCAIgDAEQgDAEgFABIgIACIgGgBg");
	this.shape_7.setTransform(64.5,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggAtIAAhYIBAAAIAAAJIg2AAIAAAeIAwAAIAAAIIgwAAIAAAgIA2AAIAAAJg");
	this.shape_8.setTransform(177,18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAiAtIAAhYIAKAAIAABYgAgrAtIAAhYIAKAAIAAAiIAWAAQAKAAAHADQAIADAEAEQAFAGAAAJQAAAJgEAGQgEAGgIAEQgHAEgJAAgAghAkIAYAAQAJgBAHgFQAGgEAAgKQAAgIgGgFQgHgDgKAAIgXAAg");
	this.shape_9.setTransform(166.8,18.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAaAtIAAgpIgzAAIAAApIgKAAIAAhYIAKAAIAAAnIAzAAIAAgnIAKAAIAABYg");
	this.shape_10.setTransform(156.2,18.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjAtIAAhYIAlAAQAHAAAHACQAFABAFAFIADAFQACAFAAAEQAAAFgCAEQgCAFgEACIgGAEQAFABAFADQAEADADAEQACAEAAAGQAAAIgEAFQgEAGgIACQgGADgLABgAgZAkIAdAAQAKAAAGgFQAFgEABgHQAAgIgGgEQgGgEgMAAIgbAAgAgZgEIAaAAQAJAAAFgEQAFgEABgIQAAgHgFgEQgGgDgJAAIgaAAg");
	this.shape_11.setTransform(147,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAaAtIAAhKIg0BKIgKAAIAAhYIAKAAIAABJIA1hJIAJAAIAABYg");
	this.shape_12.setTransform(137.3,18.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEAtIAAhPIgeAAIAAgJIBFAAIAAAJIgeAAIAABPg");
	this.shape_13.setTransform(128.2,18.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAZAtIghgrIgTATIAAAYIgKAAIAAhYIAKAAIAAA0IAzg0IAMAAIglAmIAnAyg");
	this.shape_14.setTransform(120.1,18.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAiAtIgKgYIgvAAIgLAYIgKAAIAohZIAJAAIAoBZgAAUAMIgUgsIgUAsIAoAAg");
	this.shape_15.setTransform(110,18.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AggAtIAAhYIAgAAQAKgBAIAEQAHAEAEAFQAEAHAAAJQAAAKgEAFQgFAHgIADQgIADgIAAIgWAAIAAAggAgWAEIAWAAQAKAAAHgFQAGgFAAgJQAAgJgGgGQgHgEgKAAIgWAAg");
	this.shape_16.setTransform(101,18.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AggAtIAAhYIBAAAIAAAJIg2AAIAAAeIAwAAIAAAIIgwAAIAAAgIA2AAIAAAJg");
	this.shape_17.setTransform(92.5,18.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgEAtIAAhPIgeAAIAAgJIBFAAIAAAJIgeAAIAABPg");
	this.shape_18.setTransform(83.8,18.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAaAtIAAgpIgzAAIAAApIgKAAIAAhYIAKAAIAAAnIAzAAIAAgnIAKAAIAABYg");
	this.shape_19.setTransform(74.8,18.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAbAtIAAhKIg0BKIgKAAIAAhYIAKAAIAABJIA0hJIAKAAIAABYg");
	this.shape_20.setTransform(65.1,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ17, new cjs.Rectangle(0,0,186.7,51), null);


(lib.Символ15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.logopngкопия();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.82,0.82);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ15, new cjs.Rectangle(0,0,164.1,174.8), null);


(lib.Символ14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANANQgCAMgFAKQgGAJgIAFQgJAFgNAAQgMAAgKgGQgJgHgGgLQgGgMAAgQIAAg9ICTAAIAAALIg7AAIAAAwIA7AuIAAAOgAg/ABQABAUAJAMQAJAKAPABQALgBAIgFQAHgGAEgKQAEgJAAgNIAAgwIhEAAg");
	this.shape.setTransform(53.8,101.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJA7IAAgLICDAAIiDhfIAAgLICTAAIAAALIiDAAICDBfIAAALg");
	this.shape_1.setTransform(53.8,116.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhJA2IAAg2QAAgPAGgMQAFgMAKgHQAKgHAPAAQAPAAALAIQAJAIAFANQAGANAAAPIAAAnIA3AAIAAALgAgvglQgIAGgEAKQgEAKAAANIAAApIBIAAIAAgoQAAgNgFgLQgEgJgIgHQgIgFgLAAQgMAAgIAFg");
	this.shape_2.setTransform(53.8,131.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcBFQgOgFgKgKQgLgKgGgNQgGgOAAgRQAAgQAGgNQAGgOALgKQAKgKAOgFQAOgFAOAAQAPAAAOAFQAOAGAKAJQALAKAGAOQAGAOAAAPQAAARgGAOQgGANgLAKQgKAKgOAFQgOAFgPAAQgOAAgOgFgAggg1QgPAIgJAOQgJAOAAARQAAATAJAOQAIAOAPAIQAPAIASAAQATAAAOgIQAPgIAJgOQAJgPAAgSQAAgRgJgOQgIgPgPgHQgPgIgTgBQgSABgOAIg");
	this.shape_3.setTransform(53.8,147.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhJAuIAAhbIAKAAIAABQICJAAIAAALg");
	this.shape_4.setTransform(53.8,162.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhJA1IAAhnIAKAAIAABcIA6AAIAAhTIAJAAIAABTIA8AAIAAheIAKAAIAABpg");
	this.shape_5.setTransform(53.8,176);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhJA5IAAhxIAKAAIAAAzICJAAIAAAKIiJAAIAAA0g");
	this.shape_6.setTransform(53.8,190.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhJAFIAAgJICThFIAAAMIgpATIAABWIApATIAAALgAg9AAIBUAnIAAhNg");
	this.shape_7.setTransform(53.8,205.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhJA9IAAgLIBgAAIhghcIAAgPIBBA/IBShCIAAAOIhKA8IAkAkIAmAAIAAALg");
	this.shape_8.setTransform(53.8,220.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("Ao+LWIAA2qIJWAAQCPABBpArQBpAsA7BQQA5BRABBvQgBBigkBEQgkBFg5ArQg4Arg8AYQBYAVBJAqQBLAsAtBGQAtBGABBmQgBB6hABYQhABYh2AxQh0AvieACgAnTJzIINAAQC+gBBshPQBrhRACiMQgBiHhwhKQhxhIjXgCInrAAgAnTg3IHeAAQBuAABUgiQBTgjAwhDQAvhEABhjQgBh6hdhHQhdhJivgBInpAAg");
	this.shape_9.setTransform(130.8,165.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ14, new cjs.Rectangle(0,0,264.3,331.6), null);


(lib.Символ13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAUA+IAAg9IgoA9IgUAAIAAhdIAVAAIAAA8IAog8IATAAIAABdgAgOgrQgGgGgCgKIANgCQABAFACACQADACADAAQAFAAACgCQACgCACgFIAMACQgCAKgFAGQgHAEgJAAQgIAAgGgEg");
	this.shape.setTransform(81.4,42.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgjAvIAAhdIBGAAIAAASIgxAAIAAATIArAAIAAASIgrAAIAAAUIAyAAIAAASg");
	this.shape_1.setTransform(71.9,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAvIgFAAIgGgBIACgRIABAAIACAAQAEABADgCQAEgCACgGQACgGABgMQACgLAAgSIAAgUIBCAAIAABdIgVAAIAAhKIgaAAIAAAHQAAAVgCAMQgCAOgDAIQgEAHgGADQgFAEgHAAIgCgBg");
	this.shape_2.setTransform(61.6,44.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgmAvIAAhdIBHAAIAAASIgzAAIAAARIAYAAQALAAAHAEQAIADADAGQAEAGAAAJQAAAPgJAHQgJAIgRAAgAgSAdIAWAAQAHAAAEgEQAEgCAAgHQAAgFgEgDQgEgDgHAAIgWAAg");
	this.shape_3.setTransform(52.4,44.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeAuIgJgEIAIgPIAFACIAGABIAFgBIAGgGIglhGIAXAAIAYAxIAYgxIAWAAIglBIQgFAMgHAGQgHAFgKAAQgGAAgFgCg");
	this.shape_4.setTransform(42.5,44.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkAvIAAhdIAlAAQALAAAIAEQAIAEAFAIQAEAHAAAKQAAALgFAGQgFAHgJAEQgIAEgKAAIgQAAIAAAcgAgQABIAQAAQAHgBAFgDQAEgEAAgGQAAgHgEgEQgFgEgHAAIgQAAg");
	this.shape_5.setTransform(33.4,44.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoBOQgRgMgJgVQgKgTAAgaQAAgYAKgVQAJgUASgLQARgMAWgBQAXABASAMQARALAJAUQAKAUAAAZQAAAagKATQgJAVgSAMQgRAMgXgBQgWABgSgMgAgTgvQgJAHgEAMQgFAMAAAQQAAAQAFAMQAFAMAIAIQAJAHAKAAQAMAAAIgHQAJgHAEgNQAFgMAAgQQAAgPgFgNQgFgMgIgHQgJgHgLgBQgLABgIAHg");
	this.shape_6.setTransform(92.9,21.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBOQgRgMgJgVQgKgTAAgaQAAgYAKgVQAJgUASgLQARgMAWgBQAXABASAMQARALAJAUQAKAUAAAZQAAAagKATQgJAVgSAMQgRAMgXgBQgWABgSgMgAgTgvQgJAHgEAMQgFAMAAAQQAAAQAFAMQAFAMAIAIQAJAHAKAAQAMAAAIgHQAJgHAEgNQAFgMAAgQQAAgPgFgNQgFgMgIgHQgJgHgLgBQgLABgIAHg");
	this.shape_7.setTransform(74.8,21.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBOQgRgMgJgVQgKgTAAgaQAAgYAKgVQAJgUASgLQARgMAWgBQAXABASAMQARALAJAUQAKAUAAAZQAAAagKATQgJAVgSAMQgRAMgXgBQgWABgSgMgAgTgvQgJAHgEAMQgFAMAAAQQAAAQAFAMQAFAMAIAIQAJAHAKAAQAMAAAIgHQAJgHAEgNQAFgMAAgQQAAgPgFgNQgFgMgIgHQgJgHgLgBQgLABgIAHg");
	this.shape_8.setTransform(56.7,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag/BYIAAgeIA6gwQAKgIAGgGQAHgHADgGQACgGAAgHQAAgLgGgGQgGgGgKAAQgKAAgHAGQgIAGgKAMIgagWQAHgMAKgIQAJgIALgEQALgEAPAAQASAAANAHQAOAGAHAMQAIAMgBARQAAAOgEALQgFAKgLAKQgKAJgPAMIgcAWIBLAAIAAAhg");
	this.shape_9.setTransform(32.4,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag/BYIAAgeIA5gwQAKgIAHgGQAGgHADgGQADgGAAgHQABgLgHgGQgGgGgKAAQgKAAgHAGQgJAGgJAMIgagWQAIgMAJgIQAJgIALgEQAMgEAOAAQASAAANAHQAOAGAHAMQAIAMAAARQAAAOgGALQgFAKgJAKQgLAJgPAMIgbAWIBKAAIAAAhg");
	this.shape_10.setTransform(17,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ao8EpIAApSIR4AAIAAJSg");
	this.shape_11.setTransform(57.3,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ13, new cjs.Rectangle(0,0,114.5,59.5), null);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.машина2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.537,0.537);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ12, new cjs.Rectangle(0,0,380.6,211.5), null);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.мотоцикл2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ11, new cjs.Rectangle(0,0,232.5,213.8), null);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoBOQgRgMgJgVQgKgTAAgaQAAgYAKgVQAJgUASgLQARgMAWgBQAXABASAMQARALAJAUQAKAUAAAZQAAAagKATQgJAVgSAMQgRAMgXgBQgWABgSgMgAgTgvQgJAHgEAMQgFAMAAAQQAAAQAFAMQAFAMAIAIQAJAHAKAAQAMAAAIgHQAJgHAEgNQAFgMAAgQQAAgPgFgNQgFgMgIgHQgJgHgLgBQgLABgIAHg");
	this.shape.setTransform(92.2,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoBOQgRgMgJgVQgKgTAAgaQAAgYAKgVQAJgUASgLQARgMAWgBQAXABASAMQARALAJAUQAKAUAAAZQAAAagKATQgJAVgSAMQgRAMgXgBQgWABgSgMgAgTgvQgJAHgEAMQgFAMAAAQQAAAQAFAMQAFAMAIAIQAJAHAKAAQAMAAAIgHQAJgHAEgNQAFgMAAgQQAAgPgFgNQgFgMgIgHQgJgHgLgBQgLABgIAHg");
	this.shape_1.setTransform(74.1,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkBRQgQgGgMgNIAXgbQAKAIAKAFQAKAGALAAQANgBAHgGQAIgGAAgMQAAgLgIgHQgJgFgNgBQgIAAgHACIgNAEIgWgNIAFhVIBpAAIAAAhIhJAAIgCAeIAKgCIAMgBQARAAANAGQAOAFAIANQAIAMAAATQAAATgIANQgIANgPAIQgOAHgUAAQgUAAgQgHg");
	this.shape_2.setTransform(57,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag5BXIBMiMIhQAAIAAggIB7AAIAAAcIhMCQg");
	this.shape_3.setTransform(34.6,21.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABXIAAiGIgdAHIgIgfIAxgPIAaAAIAACtg");
	this.shape_4.setTransform(20.6,21.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAUA+IAAg9IgoA9IgUAAIAAhdIAUAAIAAA8IApg8IATAAIAABdgAgOgrQgGgGgCgKIAMgCQACAFADACQACACADAAQAEAAADgCQACgCACgFIAMACQgBAKgHAGQgFAEgKAAQgIAAgGgEg");
	this.shape_5.setTransform(81.6,42.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjAvIAAhdIBGAAIAAASIgxAAIAAATIArAAIAAASIgrAAIAAAUIAyAAIAAASg");
	this.shape_6.setTransform(72.1,44.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AghAvIgFAAIgGgBIACgRIABAAIACAAQAEABADgCQAEgCACgGQACgGABgMQACgLAAgSIAAgUIBCAAIAABdIgVAAIAAhKIgaAAIAAAHQAAAVgCAMQgCAOgDAIQgEAHgGADQgFAEgHAAIgCgBg");
	this.shape_7.setTransform(61.7,44.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmAvIAAhdIBHAAIAAASIgzAAIAAARIAYAAQALAAAHAEQAIADADAGQAEAGAAAJQAAAPgJAHQgJAIgRAAgAgSAdIAWAAQAHAAAEgEQAEgCAAgHQAAgFgEgDQgEgDgHAAIgWAAg");
	this.shape_8.setTransform(52.6,44.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAuIgKgEIAIgPIAGACIAFABIAGgBIAHgGIgmhGIAXAAIAZAxIAXgxIAWAAIglBIQgFAMgHAGQgIAFgJAAQgGAAgFgCg");
	this.shape_9.setTransform(42.6,44.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkAvIAAhdIAlAAQALAAAIAEQAIAEAFAIQAEAHAAAKQAAALgFAGQgFAHgJAEQgIAEgKAAIgQAAIAAAcgAgQABIAQAAQAHgBAFgDQAEgEAAgGQAAgHgEgEQgFgEgHAAIgQAAg");
	this.shape_10.setTransform(33.5,44.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("Ao8EpIAApSIR4AAIAAJSg");
	this.shape_11.setTransform(57.3,29.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(0,0,114.5,59.5), null);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCARQgHAKgJAHQgJAGgKAAQgLABgLgFQgLgFgGgKQgGgKAAgMQgBgNAHgPIAbg4ICEA/IgEAKIg2gZIgVAsIAiBCIgGANgAhCgZQgIASADANQAEAOANAGQAKAFAKgCQAJgBAIgIQAIgGAFgMIAUgsIg9gdg");
	this.shape.setTransform(105.4,97.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhbAVIAFgJIB2A4IhNiOIAEgJICFA/IgFAJIh2g4IBNCOIgEAJg");
	this.shape_1.setTransform(98,111.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhEAKIAWgvQAIgPAKgJQAKgJAMgCQALgBANAGQAPAGAFAMQAHAMgCAOQgBANgGAOIgRAkIAyAXIgFAKgAgGg9QgJACgHAHQgJAIgGAMIgRAlIBAAeIARgjQAGgNABgLQAAgLgFgJQgFgIgKgGQgIgDgGAAIgGAAg");
	this.shape_2.setTransform(89.7,125.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgCBLQgOgCgPgGQgOgHgKgKQgJgLgGgOQgFgNAAgOQAAgPAHgPQAIgPALgKQALgKAOgEQANgEAOABQAPABAOAHQAOAGAKALQAKAKAFAOQAFAOAAANQAAAPgHAQQgHAPgMAJQgLAKgOAFQgLADgLAAIgFAAgAgGg/QgRABgOAJQgOAJgIARQgIAQACAQQACAQALAOQAJANASAJQAQAHAQAAQARgCAOgIQAOgJAIgRQAIgRgCgPQgCgQgKgOQgLgOgQgIQgQgHgPAAIgCAAg");
	this.shape_3.setTransform(84.7,139.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhEAKIAnhSIAJAFIgjBIIB8A7IgFAJg");
	this.shape_4.setTransform(76.8,152.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhYAQIAsheIAJAFIgoBUIA1AYIAjhLIAJAEIgjBMIA1AZIAohVIAJAEIgtBfg");
	this.shape_5.setTransform(72.7,164.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgwABIgWAuIgJgEIAxhmIAJAFIgXAvIB8A5IgEAJg");
	this.shape_6.setTransform(65.5,175.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhTg5IAEgKICjACIgFALIgtgBIglBOIAdAjIgFAJgAgJAOIAfhFIhcgCg");
	this.shape_7.setTransform(61.5,194.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhcAWIAFgJIBXApIgvh9IAGgOIAgBVIBmgYIgGANIhdAVIARAyIAiAQIgEAJg");
	this.shape_8.setTransform(53.7,205.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AJhLbIi4mXItXAAIi4GXIhxAAIKk21IBnAAIKkW1gAF7DjIl8tGImANGIL8AAg");
	this.shape_9.setTransform(133.6,165.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ9, new cjs.Rectangle(0,0,272,331.6), null);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDA4IAAhnIgnAAIAAgIIBVAAIAAAIIgnAAIAABng");
	this.shape.setTransform(190.2,70.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvA4IgOgfIhBAAIgOAfIgJAAIA0hvIAHAAIA0BvgAAdASIgdhAIgcBAIA5AAg");
	this.shape_1.setTransform(178.8,70.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAjA4IAAg1IhGAAIAAA1IgIAAIAAhvIAIAAIAAA0IBGAAIAAg0IAJAAIAABvg");
	this.shape_2.setTransform(166.4,70.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAkA4IAAhjIhHBjIgIAAIAAhvIAIAAIAABjIBIhjIAIAAIAABvg");
	this.shape_3.setTransform(154.2,70.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgqA4IAAhvIBNAAIAAAIIhFAAIAAAnIAlAAQALAAAJAEQAKADAFAGQAFAHAAALQAAAQgKAIQgLAJgSAAgAgiAwIAkAAQAQAAAIgGQAIgGAAgNQAAgMgIgGQgJgFgPAAIgkAAg");
	this.shape_4.setTransform(142.8,70.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAtA4IAAhgIgsA/IgBAAIgrg/IAABgIgIAAIAAhvIAIAAIArBBIAthBIAIAAIAABvg");
	this.shape_5.setTransform(129.9,70.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgWA1QgKgFgIgIQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAIgIAKgFQAKgFAMAAQANAAAKAFQAKAFAIAIQAHAIAEAKQAEAKAAALQAAALgEALQgEAKgHAIQgIAIgKAFQgKAFgNAAQgMAAgKgFgAgYgqQgKAGgGAMQgGALgBANQABAOAGALQAGAMALAGQAKAHANAAQAOAAALgHQAKgGAGgMQAGgLAAgOQAAgNgGgLQgGgMgLgGQgKgHgOAAQgNAAgLAHg");
	this.shape_6.setTransform(116.2,70.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAkA4Igtg4IgcAbIAAAdIgIAAIAAhvIAIAAIAABIIBGhIIALAAIgvAxIAxA+g");
	this.shape_7.setTransform(104.4,70.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAkBGIAAhiIhHBiIgIAAIAAhuIAIAAIAABiIBIhiIAHAAIAABugAgNg3QgGgFgCgIIAHgBQABAFAEADQAEADAFAAQAGAAAEgDQAEgDABgFIAHABQgCAIgGAFQgFAFgJAAQgIAAgFgFg");
	this.shape_8.setTransform(174.6,49.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAtA4IAAhvIAIAAIAABvgAg0A4IAAhvIAJAAIAAAtIAhAAQAKAAAJADQAJADAFAHQAGAHAAALQAAALgFAIQgFAHgJAFQgJAEgLAAgAgrAwIAgAAQAOAAAJgGQAIgHABgOQgBgMgIgGQgJgFgPAAIgfAAg");
	this.shape_9.setTransform(161.6,51.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAjA4IAAg1IhGAAIAAA1IgIAAIAAhvIAIAAIAAA0IBGAAIAAg0IAJAAIAABvg");
	this.shape_10.setTransform(148.6,51.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgqA4IAAhvIBNAAIAAAIIhFAAIAAAnIAlAAQALAAAJAEQAKADAFAGQAFAHAAALQAAAQgKAIQgLAJgSAAgAgiAwIAkAAQAQAAAIgGQAIgGAAgNQAAgMgIgGQgJgFgPAAIgkAAg");
	this.shape_11.setTransform(137.2,51.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnA4IAAhvIBPAAIAAAIIhGAAIAAAsIA+AAIAAAGIg+AAIAAAtIBGAAIAAAIg");
	this.shape_12.setTransform(126.3,51.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAgA4IAAgyIgKAFIgOAFQgHACgFAAQgRAAgJgIQgJgIAAgPIAAgqIAIAAIAAAqQAAALAHAGQAHAGAMAAQAJAAAKgEQAKgDAIgEIAAg2IAIAAIAABvg");
	this.shape_13.setTransform(115,51.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjA4IgIgDIADgHIAHACIAIABQAHAAAHgEQAGgFAFgLIgyhVIAJAAIAsBNIAnhNIAJAAIgsBYQgHANgIAGQgIAGgJAAIgKgBg");
	this.shape_14.setTransform(103.9,51.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAvA4IgOgfIhBAAIgOAfIgJAAIA0hvIAHAAIA0BvgAAdASIgdhAIgcBAIA5AAg");
	this.shape_15.setTransform(207.1,31.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgtA4IgHgCIACgHIAFABIAGABIAGgBQAEgCADgEQADgFACgJQAEgJABgPIACgmIAAgVIBDAAIAABuIgIAAIAAhnIgzAAIAAAOQgBAZgBAPQgCAQgDAKQgDAKgFAGQgEAFgEACQgEABgGAAIgGAAg");
	this.shape_16.setTransform(193.8,31.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgWA1QgKgFgIgIQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAIgIAKgFQAKgFAMAAQANAAAKAFQAKAFAIAIQAHAIAEAKQAEAKAAALQAAALgEALQgEAKgHAIQgIAIgKAFQgKAFgNAAQgMAAgKgFgAgYgqQgKAGgGAMQgGALgBANQABAOAGALQAGAMALAGQAKAHANAAQAOAAALgHQAKgGAGgMQAGgLAAgOQAAgNgGgLQgGgMgLgGQgKgHgOAAQgNAAgLAHg");
	this.shape_17.setTransform(181.7,31.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAkA4Igtg4IgcAbIAAAdIgIAAIAAhvIAIAAIAABIIBGhIIALAAIgvAxIAxA+g");
	this.shape_18.setTransform(169.9,31.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhGA4IAAhvIAIAAIAABnIA7AAIAAhnIAHAAIAABnIA7AAIAAhnIAIAAIAABvg");
	this.shape_19.setTransform(154.9,31.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWA1QgKgFgIgIQgHgIgEgKQgEgKAAgMQAAgLAEgKQAEgKAHgIQAIgIAKgFQAKgFAMAAQANAAAKAFQAKAFAIAIQAHAIAEAKQAEAKAAALQAAALgEALQgEAKgHAIQgIAIgKAFQgKAFgNAAQgMAAgKgFgAgYgqQgKAGgGAMQgGALgBANQABAOAGALQAGAMALAGQAKAHANAAQAOAAALgHQAKgGAGgMQAGgLAAgOQAAgNgGgLQgGgMgLgGQgKgHgOAAQgNAAgLAHg");
	this.shape_20.setTransform(139.3,31.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDA4IAAhnIgnAAIAAgIIBVAAIAAAIIgmAAIAABng");
	this.shape_21.setTransform(127.4,31.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgrA4IAAhvIAtAAQALAAAIAEQAIADAFAGQAEAGAAAJQAAAHgDAGQgDAFgEADQgEAEgFABIANAEQAFAEAEAFQADAFAAAIQAAAKgFAHQgFAGgJAEQgJAEgMAAgAgjAwIAoAAQAOAAAIgGQAJgGAAgLQAAgKgJgGQgJgGgQAAIglAAgAgjgDIAkAAQAIAAAHgDQAGgDAEgFQADgFABgIQgBgJgHgFQgHgGgNAAIglAAg");
	this.shape_22.setTransform(116.7,31.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAvA4IgPgfIhAAAIgPAfIgIAAIA0hvIAHAAIA0BvgAAdASIgdhAIgdBAIA6AAg");
	this.shape_23.setTransform(104.4,31.8);

	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.434,0.434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ8, new cjs.Rectangle(0,0,217.7,92.5), null);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.шапочка();
	this.instance.parent = this;
	this.instance.setTransform(227.1,16.7,0.091,0.06,0,14.9,-165);

	this.instance_1 = new lib.авто();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,7.6,0.417,0.417);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ7, new cjs.Rectangle(0,0,295.6,168.5), null);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.теньполовина();
	this.instance.parent = this;
	this.instance.setTransform(0,24.8,0.116,0.006);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAtQgKgGgEgNQgGgMAAgOQAAgKADgKQADgJAGgHQAGgIAHgDQAIgFAJAAQANABAKAGQAJAIAGALQAFAMAAAOQAAALgDAKQgDAJgFAHQgGAHgIAFQgIAEgKAAQgMAAgKgIgAgQgkQgGAHgEAJQgEAJAAALQAAAMAEAJQAEAKAGAFQAHAGAJAAQAKAAAHgGQAHgFADgKQAEgJAAgMQAAgLgEgJQgEgJgGgHQgIgFgJAAQgIAAgIAFg");
	this.shape.setTransform(196.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAFA0IAAhbIgSAGIgDgJIAYgJIAJAAIAABng");
	this.shape_1.setTransform(187.9,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSAwQgJgFgFgLQgFgLAAgSQAAgPAFgMQAFgNAJgIQAKgGANgBQAIAAAIADQAHADAGAGIgGAJIgMgIQgFgCgHAAQgIAAgHAFQgHAGgEAKQgDAKAAANIAGgHQAEgEAGgCQAFgCAHAAQAJAAAJAEQAHAEAFAGQAFAHAAAKQAAAKgFAHQgFAIgIAFQgIAEgKAAQgLAAgJgFgAgLAAQgGAEgDAEQgDAGAAAGQAAAGADAGQADAFAGADQAGACAHAAQAHAAAGgCQAFgDADgGQADgGAAgGQAAgGgDgGQgDgEgGgDQgFgCgHAAQgIAAgFACg");
	this.shape_2.setTransform(181.4,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_3.setTransform(170.5,16.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFA3IAAgMQgQAAgMgFQgLgGgHgKQgFgJAAgNQAAgNAFgKQAHgKALgFQAMgGAQAAIAAgKIALAAIAAAKQAQAAAMAGQALAFAGAKQAGAKABANQgBANgFAJQgHAKgLAGQgMAFgQAAIAAAMgAAGAhQASAAALgJQAKgIAAgQQAAgQgKgIQgLgJgSAAgAgigYQgLAIAAAQQAAAQALAIQAKAJATAAIAAhCQgTAAgKAJg");
	this.shape_4.setTransform(162.2,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAxQgJgFgHgHQgHgIgEgJQgDgKAAgKQAAgKADgJQAEgKAHgHQAIgIAJgDQAJgFALAAQAMAAAKAFQAJADAHAIQAHAHAEAJQADAKAAAKQAAAKgDAKQgEAJgHAIQgIAHgJAFQgJAEgMAAQgLAAgKgEgAgUgkQgJAGgFAJQgFAKAAALQAAAMAFAJQAGAKAIAFQAKAGAKAAQAMAAAJgGQAJgFAFgJQAFgKAAgMQAAgLgFgKQgGgJgIgGQgKgFgLAAQgLAAgJAFg");
	this.shape_5.setTransform(149.4,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIALQAFgBACgDQACgDAAgEIAAAAIgFAAIAAgQIANAAIAAAOQAAAHgEAFQgEAFgHACg");
	this.shape_6.setTransform(136.8,17.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAoA0IgNgbIg2AAIgMAbIgMAAIAvhnIAKAAIAuBngAAXAOIgXgzIgWAzIAtAAg");
	this.shape_7.setTransform(129.5,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiA0IAAgJIAkghIAMgLQAEgFADgFQACgFAAgFQgBgGgCgEQgDgFgEgCQgFgDgGAAQgHAAgHAFQgGAEgGAJIgIgGQAEgHAFgFQAFgFAGgCQAHgDAIAAQAJAAAIAEQAHAEAEAGQADAHAAAIQAAAIgCAGQgDAGgGAFIgOAOIgbAYIA1AAIAAALg");
	this.shape_8.setTransform(119.3,12.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIALQAFgBACgDQACgDAAgEIAAAAIgFAAIAAgQIANAAIAAAOQAAAHgEAFQgEAFgHACg");
	this.shape_9.setTransform(108.7,17.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAnA0IgLgbIg3AAIgMAbIgMAAIAuhnIAKAAIAvBngAAXAOIgXgzIgWAzIAtAAg");
	this.shape_10.setTransform(101.4,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAdAzIAAguIg5AAIAAAuIgMAAIAAhlIAMAAIAAAuIA5AAIAAguIAMAAIAABlg");
	this.shape_11.setTransform(90.1,12.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAeAzIAAhTIg8BTIgLAAIAAhlIAMAAIAABTIA8hTIALAAIAABlg");
	this.shape_12.setTransform(78.9,12.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAeAzIAAguIg7AAIAAAuIgLAAIAAhlIALAAIAAAuIA7AAIAAguIALAAIAABlg");
	this.shape_13.setTransform(67.7,12.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgkAzIAAhlIBIAAIAAALIg9AAIAAAjIA3AAIAAAJIg3AAIAAAkIA+AAIAAAKg");
	this.shape_14.setTransform(57.6,12.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgjAzIgIAAIgFgCIACgJIAEABIAFAAIAGgBIAFgFQADgEACgIQACgIACgOQABgNAAgUIAAgTIBCAAIAABlIgMAAIAAhaIgqAAIAAALQgBAVgCAOQgBAOgDAJQgDAKgEAEQgDAFgFACQgDACgEAAIgCgBg");
	this.shape_15.setTransform(46.1,12.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_16.setTransform(35.1,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjAzIgHAAIgGgCIACgJIAEABIAFAAIAGgBIAFgFQADgEACgIQADgIABgOQACgNAAgUIAAgTIBBAAIAABlIgMAAIAAhaIgqAAIAAALQAAAVgCAOQgCAOgDAJQgDAKgEAEQgEAFgEACQgDACgEAAIgCgBg");
	this.shape_17.setTransform(26.9,12.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AggAyIgIgCIAFgJIAGABIAHABQAFAAAFgDQAFgDAFgJIgthNIANAAIAlBBIAghBIANAAIgpBQQgGAMgHAGQgIAFgJAAQgFAAgEgCg");
	this.shape_18.setTransform(16.7,12.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ6, new cjs.Rectangle(0,0.8,213,27.4), null);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAmIAAgQIANAAIAAAQgAgGgVIAAgQIANAAIAAAQg");
	this.shape.setTransform(151.4,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAnAzIAAhlIAMAAIAABlgAgyAzIAAhlIAMAAIAAAnIAaAAQALAAAIADQAIAEAGAFQAFAHAAAKQAAAKgFAIQgEAHgJAEQgIAEgLAAgAgmApIAbAAQALgBAHgFQAHgGABgKQgBgKgHgFQgHgEgMAAIgaAAg");
	this.shape_1.setTransform(143.1,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAeAzIAAguIg7AAIAAAuIgLAAIAAhlIALAAIAAAuIA7AAIAAguIALAAIAABlg");
	this.shape_2.setTransform(131,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUAxQgKgFgHgHQgGgIgEgJQgEgKAAgKQAAgKAEgJQADgKAIgHQAGgIAKgEQAKgEAKAAQAMAAAJAEQAKAEAGAIQAIAHADAJQAEAKAAAKQAAAKgEAKQgDAJgIAIQgHAHgJAFQgKAEgLAAQgLAAgJgEgAgUgkQgJAGgFAJQgFAKAAALQAAAMAFAJQAFAKAKAFQAJAGAKAAQAMAAAJgGQAJgFAFgJQAFgKAAgMQAAgLgFgKQgFgJgKgGQgIgFgMAAQgLAAgJAFg");
	this.shape_3.setTransform(119.2,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFA3IAAgMQgQAAgMgFQgMgGgFgKQgHgJABgNQgBgNAHgKQAFgKAMgFQAMgGAQAAIAAgKIALAAIAAAKQAQAAALAGQAMAFAGAKQAGAKABANQgBANgGAJQgGAKgMAGQgLAFgQAAIAAAMgAAGAhQASAAALgJQAKgIAAgQQAAgQgKgIQgLgJgSAAgAgigYQgLAIAAAQQAAAQALAIQAKAJATAAIAAhCQgTAAgKAJg");
	this.shape_4.setTransform(106.5,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgkAzIAAhlIBIAAIAAALIg9AAIAAAjIA3AAIAAAJIg3AAIAAAkIA+AAIAAAKg");
	this.shape_5.setTransform(95.3,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjAzIgHAAIgHgCIADgJIAEABIAFAAIAFgBIAGgFQADgEACgIQADgIABgOQABgNABgUIAAgTIBAAAIAABlIgLAAIAAhaIgqAAIAAALQgBAVgBAOQgCAOgDAJQgCAKgEAEQgFAFgEACQgDACgEAAIgCgBg");
	this.shape_6.setTransform(83.8,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgkAzIAAhlIBIAAIAAALIg9AAIAAAjIA3AAIAAAJIg3AAIAAAkIA+AAIAAAKg");
	this.shape_7.setTransform(74.4,12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgFAzIAAhaIgiAAIAAgLIBPAAIAAALIgiAAIAABag");
	this.shape_8.setTransform(64.4,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ5, new cjs.Rectangle(0.2,0.3,212.7,23.5), null);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.теньполовина();
	this.instance.parent = this;
	this.instance.setTransform(0,22.9,0.116,0.006);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSAwQgJgFgFgLQgFgMAAgRQAAgPAFgMQAFgNAJgHQAKgIANAAQAIAAAIADQAHADAGAFIgGAJIgMgHQgFgCgHgBQgIAAgHAHQgHAFgDAKQgEAKAAANIAGgHQAEgEAGgBQAGgDAGAAQAKAAAIAEQAHAEAFAGQAFAHAAAKQAAAJgFAJQgEAHgJAEQgIAEgLABQgKAAgJgFgAgLABQgFACgEAGQgDAFAAAGQAAAGADAFQAEAGAGACQAFADAGAAQAIAAAGgDQAGgDADgFQACgGAAgGQABgGgEgFQgDgGgFgCQgGgCgIAAQgGAAgGADg");
	this.shape.setTransform(194.7,11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgVAxQgHgEgHgFIAHgJQAGAGAGACQAGADAHAAQAIAAAHgFQAHgGAEgKQADgKAAgLIAAgCQgCAEgEADQgEAFgGABQgFADgGAAQgLAAgIgEQgIgFgFgFQgEgIAAgJQAAgKAFgIQAEgHAJgFQAIgEALgBQAKAAAJAFQAJAFAFALQAFALAAASQAAAQgFAMQgFAMgKAIQgKAGgLABQgKgBgIgDgAgOgnQgFAEgDAFQgDAGAAAHQAAAGADAFQADAFAGACQAFADAIAAQAHAAAFgDQAGgDADgFQADgFAAgGQAAgHgDgFQgDgFgGgEQgGgDgHAAQgHAAgGADg");
	this.shape_1.setTransform(185.2,11);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_2.setTransform(177.5,11.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAuQgKgEgGgIIAIgIQAGAIAHADQAIAEAIAAQAGAAAFgCQAFgDADgEQADgEABgHQgBgGgEgFQgDgEgGgDQgHgCgIAAIgGAAIgCgGIAfgkIgxAAIAAgKIBBAAIAAAIIghAkQAKABAHADQAHADAFAFQAFAHAAAJQAAAJgFAHQgEAHgIAEQgIADgJABQgMgBgJgFg");
	this.shape_3.setTransform(170,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAuQgKgEgGgIIAIgIQAGAIAHADQAIAEAIAAQAHAAAEgCQAFgDADgEQADgEABgHQgBgGgEgFQgDgEgHgDQgGgCgIAAIgGAAIgCgGIAfgkIgxAAIAAgKIBBAAIAAAIIghAkQAKABAHADQAIADAEAFQAFAHAAAJQAAAJgFAHQgEAHgIAEQgIADgJABQgMgBgJgFg");
	this.shape_4.setTransform(161.1,11.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_5.setTransform(153.9,11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgSAwQgJgFgFgLQgFgMAAgRQAAgPAFgMQAFgNAJgHQAKgIANAAQAJAAAHADQAHADAGAFIgGAJIgMgHQgFgCgHgBQgIAAgHAHQgHAFgDAKQgEAKAAANIAGgHQAFgEAFgBQAGgDAGAAQAJAAAJAEQAHAEAFAGQAFAHAAAKQAAAJgFAJQgFAHgIAEQgIAEgKABQgLAAgJgFgAgLABQgGACgDAGQgDAFAAAGQAAAGADAFQAEAGAFACQAGADAHAAQAHAAAGgDQAGgDADgFQACgGAAgGQABgGgEgFQgDgGgGgCQgFgCgHAAQgIAAgFADg");
	this.shape_6.setTransform(146.2,11);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAxQgHgEgHgFIAHgJQAGAGAGACQAGADAHAAQAIAAAHgFQAHgGAEgKQADgKAAgLIAAgCQgCAEgEADQgEAFgGABQgFADgGAAQgLAAgIgEQgIgFgFgFQgEgIAAgJQAAgKAFgIQAEgHAJgFQAIgEALgBQAKAAAJAFQAJAFAFALQAFALAAASQAAAQgFAMQgFAMgKAIQgKAGgLABQgKgBgIgDgAgOgnQgFAEgDAFQgDAGAAAHQAAAGADAFQADAFAGACQAFADAIAAQAHAAAFgDQAGgDADgFQADgFAAgGQAAgHgDgFQgDgFgGgEQgGgDgHAAQgHAAgGADg");
	this.shape_7.setTransform(136.7,11);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAuQgKgEgGgIIAIgIQAGAIAHADQAIAEAIAAQAGAAAFgCQAFgDADgEQADgEABgHQgBgGgEgFQgDgEgHgDQgGgCgHAAIgHAAIgCgGIAfgkIgxAAIAAgKIBBAAIAAAIIghAkQAJABAIADQAHADAFAFQAFAHAAAJQAAAJgEAHQgFAHgIAEQgIADgJABQgMgBgJgFg");
	this.shape_8.setTransform(127.4,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_9.setTransform(120.3,11.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiA0IAAgJIAjghIANgLQAEgFADgFQACgFAAgFQAAgGgDgEQgDgFgFgCQgEgDgGAAQgIAAgGAFQgGAEgGAJIgJgGQAFgHAFgFQAFgFAGgCQAHgDAIAAQAJAAAIAEQAHAEADAGQAFAHAAAIQAAAIgDAGQgCAGgHAFIgOAOIgaAYIA1AAIAAALg");
	this.shape_10.setTransform(112.8,10.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAFA0IAAhaIgSAFIgDgJIAYgJIAJAAIAABng");
	this.shape_11.setTransform(105.4,11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAxQgHgEgHgFIAHgJQAGAGAGACQAGADAHAAQAIAAAHgFQAHgGAEgKQADgKAAgLIAAgCQgCAEgEADQgEAFgGABQgFADgGAAQgLAAgIgEQgIgFgFgFQgEgIAAgJQAAgKAFgIQAEgHAJgFQAIgEALgBQAKAAAJAFQAJAFAFALQAFALAAASQAAAQgFAMQgFAMgKAIQgKAGgLABQgKgBgIgDgAgOgnQgFAEgDAFQgDAGAAAHQAAAGADAFQADAFAGACQAFADAIAAQAHAAAFgDQAGgDADgFQADgFAAgGQAAgHgDgFQgDgFgGgEQgGgDgHAAQgHAAgGADg");
	this.shape_12.setTransform(98.6,11);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAxQgKgEgFgHQgEgGgBgJQABgJAFgGQAGgGAKgDIgJgFQgEgEgDgEQgCgFAAgFQAAgIAFgHQAFgFAIgEQAIgDAIAAQAJAAAJADQAHAEAFAFQAEAHABAIQgBAFgCAFQgCAEgEAEIgIAFQAIADAGAGQAGAGABAJQgBAJgFAGQgFAHgIAEQgJAEgLAAQgKAAgIgEgAgNAGQgFACgEAFQgEAFAAAFQAAAGADAEQAEAEAFADQAHACAHAAQAJAAAFgCQAHgDACgEQAEgEAAgGQAAgGgEgEQgDgFgHgCQgFgCgIgBQgGABgHACgAgLgnQgFACgEAEQgDAEAAAGQABAFADAEQADAEAFADQAFACAGAAQAHAAAEgCQAGgCADgFQADgEAAgGQAAgFgDgEQgDgEgFgCQgFgCgHgBQgGABgFACg");
	this.shape_13.setTransform(89.3,11);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgIALQAFgBACgDQACgDAAgEIAAAAIgFAAIAAgQIANAAIAAAOQAAAHgEAFQgEAFgHACg");
	this.shape_14.setTransform(78.3,16.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgVAxQgHgEgHgFIAHgJQAGAGAGACQAGADAHAAQAIAAAHgFQAHgGAEgKQADgKAAgLIAAgCQgCAEgEADQgEAFgGABQgFADgGAAQgLAAgIgEQgIgFgFgFQgEgIAAgJQAAgKAFgIQAEgHAJgFQAIgEALgBQAKAAAJAFQAJAFAFALQAFALAAASQAAAQgFAMQgFAMgKAIQgKAGgLABQgKgBgIgDgAgOgnQgFAEgDAFQgDAGAAAHQAAAGADAFQADAFAGACQAFADAIAAQAHAAAFgDQAGgDADgFQADgFAAgGQAAgHgDgFQgDgFgGgEQgGgDgHAAQgHAAgGADg");
	this.shape_15.setTransform(72.2,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAvQgJgFgIgGIAIgIQAHAGAIADQAGAEAHAAQAIAAAFgDQAGgDADgFQADgFAAgGQAAgHgDgFQgDgEgGgDQgGgCgHAAQgGAAgFACIgKACIgIgDIADgyIA6AAIAAAKIgvAAIgDAhIAJgDIALgCQAJABAJAEQAHADAFAGQAFAIgBAJQABALgFAHQgEAIgJADQgIAEgLABQgKgBgJgEg");
	this.shape_16.setTransform(62.9,11.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_17.setTransform(55.6,11.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAvQgJgFgIgGIAIgIQAHAGAIADQAGAEAHAAQAIAAAFgDQAGgDADgFQADgFAAgGQAAgHgDgFQgDgEgGgDQgGgCgHAAQgGAAgFACIgKACIgIgDIADgyIA6AAIAAAKIgvAAIgDAhIAJgDIALgCQAJABAJAEQAHADAFAGQAFAIgBAJQABALgFAHQgEAIgJADQgIAEgLABQgKgBgJgEg");
	this.shape_18.setTransform(48.1,11.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAFA0IAAhaIgSAFIgDgJIAYgJIAJAAIAABng");
	this.shape_19.setTransform(40.6,11);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_20.setTransform(36,11.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAPA0IAAgZIg1AAIgDgIIA5hGIAKAAIAABEIAQAAIAAAKIgQAAIAAAZgAgbARIAqAAIAAgzg");
	this.shape_21.setTransform(28.1,11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPA0IAAgZIg1AAIgDgIIA5hGIAKAAIAABEIAQAAIAAAKIgQAAIAAAZgAgbARIAqAAIAAgzg");
	this.shape_22.setTransform(18.3,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ4, new cjs.Rectangle(0,-0.7,213,27.1), null);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAvQgJgFgGgKQgEgKAAgOIAAg7IALAAIAAA6QAAAQAIAJQAJAJANAAQAOAAAJgIQAIgJAAgQIAAg7IALAAIAAA6QABAPgGAKQgFAKgKAFQgJAFgNAAQgMAAgKgFg");
	this.shape.setTransform(198,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcAzIgdgoIgdAAIAAAoIgLAAIAAhlIArAAQAJAAAHADQAIADAFAEQADAEACAFQACAFAAAHQAAAIgDAGQgEAFgGAEQgGAEgIABIAfAqgAgeABIAfAAQAHAAAGgBQAGgDADgFQAEgFAAgGQAAgKgHgFQgHgGgMABIgfAAg");
	this.shape_1.setTransform(187.6,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAIIAAgPIANAAIAAAPg");
	this.shape_2.setTransform(180.1,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiAzIAAhlIAMAAIAABbIA5AAIAAAKg");
	this.shape_3.setTransform(174.2,11.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgFAzIAAhlIALAAIAABlg");
	this.shape_4.setTransform(167.2,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAoAzIgMgbIg3AAIgMAbIgMAAIAvhlIAJAAIAvBlgAAXAOIgXgzIgWAzIAtAAg");
	this.shape_5.setTransform(159.3,11.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAlAzIAAhRIglA1IAAAAIglg1IAABRIgLAAIAAhlIAMAAIAkA3IAlg3IAMAAIAABlg");
	this.shape_6.setTransform(147.2,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXA7QgMgFgJgJQgJgJgFgLQgEgMgBgNQABgMAEgLQAFgMAJgJQAJgJALgFQAMgFAMAAQAOAAALAFQAMAFAJAIQAIAIAFAKQAFALAAALQAAAMgEAHQgEAIgGAEQgGAEgHAAQgIAAgFgDQgGgEgCgFQgEAFgGADQgGAEgHAAQgHAAgGgDQgGgEgDgGQgEgGAAgIQAAgJAFgIQAFgIAIgFQAHgFAIAAQAFAAAFACIAHAEIAEAGIACgKIAKABIgGAhIgBAFIAAADQAAAGADADQADADAGAAQAGAAAEgDQAFgDADgHQADgGAAgKQAAgKgFgJQgEgKgIgHQgIgIgKgEQgLgFgNAAQgLAAgLAFQgLAFgIAIQgHAIgFAKQgEALAAALQAAANAEAKQAFALAIAIQAHAIALAEQALAFANAAQAKAAAJgDQAJgCAIgFIACAEQgIAFgKADQgJADgLAAQgOAAgLgFgAgKgTQgGADgDAGQgDAGAAAHQAAAIAFAFQAEAFAIAAQAGAAAFgEQAGgEADgGQADgFAAgGQAAgJgFgFQgFgFgHAAQgGAAgFAEg");
	this.shape_7.setTransform(133.7,12.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAuQgKgEgGgIIAIgIQAGAHAHAEQAIAEAIABQAHgBAEgCQAFgCADgFQADgFABgGQgBgGgEgFQgDgEgHgCQgGgDgHAAIgHAAIgCgFIAfglIgxAAIAAgKIBBAAIAAAIIghAkQAJABAIADQAHADAFAGQAFAFAAAKQAAAJgEAHQgFAHgIAEQgIADgJABQgMAAgJgGg");
	this.shape_8.setTransform(122,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTAxQgIgEgFgHQgFgGgBgIQABgKAFgGQAGgGAKgDIgJgFQgEgDgDgFQgCgEAAgHQAAgHAFgGQAFgHAIgDQAHgDAJgBQAKABAIADQAHADAFAHQAFAGAAAHQgBAHgCAEQgCAFgEADIgIAFQAIADAGAGQAGAGABAKQgBAIgFAGQgFAHgIAEQgJADgLABQgKgBgJgDgAgNAGQgFACgEAFQgEAEAAAHQAAAFADAEQAEAEAFADQAGACAIABQAJgBAFgCQAHgDACgEQADgEABgGQAAgGgEgEQgEgFgGgCQgFgDgIAAQgGAAgHADgAgLgnQgFACgEAEQgDAEAAAFQABAGADAEQADAEAFADQAGACAFAAQAHAAAFgDQAFgCADgEQADgEAAgGQAAgFgDgEQgDgEgFgCQgFgDgHAAQgGAAgFADg");
	this.shape_9.setTransform(113.1,11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUAtQgMgHgGgLQgHgMAAgPQAAgOAHgMQAGgLAMgIQAMgHAOAAQAJAAAHACQAHADAFADIALAIIgIAJQgGgGgHgEQgIgEgKAAQgLAAgJAFQgJAGgFAKQgFAJAAALQAAAMAFAJQAFAKAJAFQAJAGALAAQAKAAAIgEQAHgDAIgIIAHAJQgGAFgGADQgFAFgHACQgIACgJAAQgOAAgLgIg");
	this.shape_10.setTransform(103.3,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAcAzIgdgoIgdAAIAAAoIgLAAIAAhlIArAAQAJAAAHADQAIADAFAEQADAEACAFQACAFAAAHQAAAIgDAGQgEAFgGAEQgGAEgIABIAfAqgAgeABIAfAAQAHAAAGgBQAGgDADgFQAEgFAAgGQAAgKgHgFQgHgGgMABIgfAAg");
	this.shape_11.setTransform(92.8,11.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAcA0IgchSIgbBSIgKAAIgkhmIAMAAIAeBUIAchVIAIAAIAcBVIAdhUIAMAAIgkBmg");
	this.shape_12.setTransform(79.1,11.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAmIAAgQIANAAIAAAQgAgGgVIAAgQIANAAIAAAQg");
	this.shape_13.setTransform(64.7,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgiAzIAAhlIAMAAIAABbIA4AAIAAAKg");
	this.shape_14.setTransform(58.8,11.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAzIAAhlIALAAIAABlg");
	this.shape_15.setTransform(51.7,11.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAnAzIgLgbIg3AAIgMAbIgMAAIAuhlIAKAAIAvBlgAAXAOIgXgzIgXAzIAuAAg");
	this.shape_16.setTransform(43.9,11.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAlAzIAAhRIglA1IAAAAIglg1IAABRIgLAAIAAhlIAMAAIAkA3IAlg3IAMAAIAABlg");
	this.shape_17.setTransform(31.7,11.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAGIAAgLIAnAAIAAALg");
	this.shape_18.setTransform(22.5,12.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgkAzIAAhlIBIAAIAAALIg9AAIAAAiIA3AAIAAAKIg3AAIAAAkIA+AAIAAAKg");
	this.shape_19.setTransform(14.9,11.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ3, new cjs.Rectangle(0.4,0,212.6,23.5), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.541,0.541);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,1039.3,402), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.теньполовинаpngкопия();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.227,0.17);

	this.instance_1 = new lib.теньполовинаpngкопия();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,496.6,0.227,0.183,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,416.6,496.6), null);


// stage content:
(lib.Учебныйкомбинат = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Нажмите для перехода к веб-странице
		При нажатии на указанный экземпляр символа производится загрузка веб-страницы в новом окне обозревателя.
		
		Инструкции:
		1. Замените http://www.adobe.com на адрес желаемой веб-страницы.
		   Не удаляйте кавычки ("").
		*/
		
		movieClip_1.addEventListener(MouseEvent.CLICK, fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage(event:MouseEvent):void
		{
			navigateToURL(new URLRequest("http://online.uk72.ru"), "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(400));

	// Слой 1
	this.movieClip_1 = new lib.Символ21();
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(121.6,199.3,1,1,0,0,0,128.4,204.9);
	this.movieClip_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(400));

	// тень внизу
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(120.3,199.3,1,1,0,0,0,208.3,248.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(400));

	// лого
	this.instance_1 = new lib.Символ15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(122,97.4,1,1,0,0,0,82,87.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(300).to({_off:false},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(1));

	// текст1
	this.instance_2 = new lib.Символ17();
	this.instance_2.parent = this;
	this.instance_2.setTransform(135,430.4,1,1,0,0,0,93.4,25.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(300).to({_off:false},0).wait(1).to({regX:95.5,regY:26.1,x:137.1,y:407.9,alpha:0.143},0).wait(1).to({y:384.7,alpha:0.286},0).wait(1).to({y:361.5,alpha:0.429},0).wait(1).to({y:338.3,alpha:0.571},0).wait(1).to({y:315.1,alpha:0.714},0).wait(1).to({y:291.9,alpha:0.857},0).wait(1).to({y:268.7,alpha:1},0).wait(1).to({y:245.5},0).wait(1).to({y:222.3},0).wait(1).to({y:226.7},0).wait(83).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({y:281,alpha:0.429},0).wait(1).to({y:335.4,alpha:0.286},0).wait(1).to({y:389.8,alpha:0.143},0).wait(1).to({y:444.2,alpha:0},0).wait(1));

	// текст2
	this.instance_3 = new lib.Символ18();
	this.instance_3.parent = this;
	this.instance_3.setTransform(125.7,473.6,1,1,0,0,0,95.4,25.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(300).to({_off:false},0).wait(1).to({regX:98.1,regY:26,x:128.4,y:455.2,alpha:0.143},0).wait(1).to({y:436.2,alpha:0.286},0).wait(1).to({y:417.2,alpha:0.429},0).wait(1).to({y:398.2,alpha:0.571},0).wait(1).to({y:379.2,alpha:0.714},0).wait(1).to({y:360.3,alpha:0.857},0).wait(1).to({y:341.3,alpha:1},0).wait(1).to({y:322.3},0).wait(1).to({y:303.3},0).wait(1).to({y:284.3},0).wait(1).to({y:265.4},0).wait(1).to({y:269.7},0).wait(81).to({alpha:0.857},0).wait(1).to({y:296.3,alpha:0.714},0).wait(1).to({y:322.9,alpha:0.571},0).wait(1).to({y:349.5,alpha:0.429},0).wait(1).to({y:376,alpha:0.286},0).wait(1).to({y:402.6,alpha:0.143},0).wait(1).to({y:429.2,alpha:0},0).wait(1));

	// текст3
	this.instance_4 = new lib.Символ19();
	this.instance_4.parent = this;
	this.instance_4.setTransform(118.9,515.6,1,1,0,0,0,103.6,25.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(300).to({_off:false},0).wait(1).to({regX:100.6,regY:26.2,x:115.9,y:500.3,alpha:0.143},0).wait(1).to({y:484.2,alpha:0.286},0).wait(1).to({y:468.2,alpha:0.429},0).wait(1).to({y:452.1,alpha:0.571},0).wait(1).to({y:436,alpha:0.714},0).wait(1).to({y:420,alpha:0.857},0).wait(1).to({y:403.9,alpha:1},0).wait(1).to({y:387.9},0).wait(1).to({y:371.8},0).wait(1).to({y:355.7},0).wait(1).to({y:339.7},0).wait(1).to({y:323.6},0).wait(1).to({y:307.6},0).wait(1).to({y:311.9},0).wait(78).to({y:328.2},0).wait(1).to({y:344.5,alpha:0.857},0).wait(1).to({y:360.8,alpha:0.714},0).wait(1).to({y:377.2,alpha:0.571},0).wait(1).to({y:393.5,alpha:0.429},0).wait(1).to({y:409.8,alpha:0.286},0).wait(1).to({y:426.1,alpha:0.143},0).wait(1).to({y:442.4,alpha:0},0).wait(1));

	// текст4
	this.instance_5 = new lib.Символ20();
	this.instance_5.parent = this;
	this.instance_5.setTransform(125.6,557,1,1,0,0,0,87.5,25.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(300).to({_off:false},0).wait(1).to({regX:76.2,regY:26.4,x:114.3,y:544,alpha:0.143},0).wait(1).to({y:530.1,alpha:0.286},0).wait(1).to({y:516.2,alpha:0.429},0).wait(1).to({y:502.3,alpha:0.571},0).wait(1).to({y:488.4,alpha:0.714},0).wait(1).to({y:474.4,alpha:0.857},0).wait(1).to({y:460.5,alpha:1},0).wait(1).to({y:446.6},0).wait(1).to({y:432.7},0).wait(1).to({y:418.8},0).wait(1).to({y:404.8},0).wait(1).to({y:390.9},0).wait(1).to({y:377},0).wait(1).to({y:363.1},0).wait(1).to({y:349.2},0).wait(1).to({y:353.5},0).wait(74).to({y:362.2},0).wait(1).to({y:370.9},0).wait(1).to({y:379.6},0).wait(1).to({y:388.3,alpha:0.857},0).wait(1).to({y:397,alpha:0.714},0).wait(1).to({y:405.7,alpha:0.571},0).wait(1).to({y:414.4,alpha:0.429},0).wait(1).to({y:423.1,alpha:0.286},0).wait(1).to({y:431.8,alpha:0.143},0).wait(1).to({y:440.5,alpha:0},0).wait(1));

	// категория В
	this.instance_6 = new lib.Символ14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(130.6,106.4,1,1,0,0,0,132.1,165.8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(200).to({_off:false},0).wait(1).to({regX:117.3,x:115.8,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(100));

	// цена
	this.instance_7 = new lib.Символ13();
	this.instance_7.parent = this;
	this.instance_7.setTransform(73.5,340.5,1,1,0,0,0,57.3,29.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(200).to({_off:false},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(100));

	// авто
	this.instance_8 = new lib.Символ12();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-207.2,241.6,1,1,0,0,0,190.3,105.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(200).to({_off:false},0).wait(1).to({regY:105.7,x:-152.8,y:247.5,alpha:0.143},0).wait(1).to({x:-98.4,y:253.5,alpha:0.286},0).wait(1).to({x:-44,y:259.6,alpha:0.429},0).wait(1).to({x:10.3,y:265.6,alpha:0.571},0).wait(1).to({x:64.7,y:271.7,alpha:0.714},0).wait(1).to({x:119.1,y:277.7,alpha:0.857},0).wait(1).to({x:119.9,y:277.8,alpha:1},0).wait(1).to({x:120.6},0).wait(1).to({x:121.4,y:277.9},0).wait(1).to({x:122.2,y:278},0).wait(1).to({x:122.9},0).wait(1).to({x:123.7,y:278.1},0).wait(1).to({x:124.5,y:278.2},0).wait(1).to({x:125.2},0).wait(1).to({x:126,y:278.3},0).wait(1).to({x:126.8,y:278.4},0).wait(1).to({x:127.5},0).wait(1).to({x:128.3,y:278.5},0).wait(1).to({x:129.1,y:278.6},0).wait(1).to({x:129.8},0).wait(1).to({x:130.6,y:278.7},0).wait(1).to({x:131.4,y:278.8},0).wait(1).to({x:132.1},0).wait(1).to({x:132.9,y:278.9},0).wait(1).to({x:133.7,y:279},0).wait(1).to({x:134.4},0).wait(1).to({x:135.2,y:279.1},0).wait(1).to({x:136,y:279.2},0).wait(1).to({x:136.7},0).wait(1).to({x:137.5,y:279.3},0).wait(1).to({x:138.3,y:279.4},0).wait(1).to({x:139},0).wait(1).to({x:139.8,y:279.5},0).wait(1).to({x:140.6,y:279.6},0).wait(1).to({x:141.3},0).wait(1).to({x:142.1,y:279.7},0).wait(1).to({x:142.9,y:279.8},0).wait(1).to({x:143.6},0).wait(1).to({x:144.4,y:279.9},0).wait(1).to({x:145.2,y:280},0).wait(1).to({x:145.9},0).wait(1).to({x:146.7,y:280.1},0).wait(1).to({x:147.5,y:280.2},0).wait(1).to({x:148.2},0).wait(1).to({x:149,y:280.3},0).wait(1).to({x:149.8,y:280.4},0).wait(1).to({x:150.5},0).wait(1).to({x:151.3,y:280.5},0).wait(1).to({x:152.1,y:280.6},0).wait(1).to({x:152.8},0).wait(1).to({x:153.6,y:280.7},0).wait(1).to({x:154.4,y:280.8},0).wait(1).to({x:155.1},0).wait(1).to({x:155.9,y:280.9},0).wait(1).to({x:156.7,y:281},0).wait(1).to({x:157.4},0).wait(1).to({x:158.2,y:281.1},0).wait(1).to({x:159,y:281.2},0).wait(1).to({x:159.7},0).wait(1).to({x:160.5,y:281.3},0).wait(1).to({x:161.3,y:281.4},0).wait(1).to({x:162},0).wait(1).to({x:162.8,y:281.5},0).wait(1).to({x:163.6,y:281.6},0).wait(1).to({x:164.3},0).wait(1).to({x:165.1,y:281.7},0).wait(1).to({x:165.9,y:281.8},0).wait(1).to({x:166.6},0).wait(1).to({x:167.4,y:281.9},0).wait(1).to({x:168.2,y:282},0).wait(1).to({x:168.9},0).wait(1).to({x:169.7,y:282.1},0).wait(1).to({x:170.5,y:282.2},0).wait(1).to({x:171.2},0).wait(1).to({x:172,y:282.3},0).wait(1).to({x:172.8,y:282.4},0).wait(1).to({x:173.5},0).wait(1).to({x:174.3,y:282.5},0).wait(1).to({x:175.1,y:282.6},0).wait(1).to({x:175.8},0).wait(1).to({x:176.6,y:282.7},0).wait(1).to({x:177.4,y:282.8},0).wait(1).to({x:178.1},0).wait(1).to({x:178.9,y:282.9},0).wait(1).to({x:179.7,y:283},0).wait(1).to({x:180.4},0).wait(1).to({x:181.2,y:283.1},0).wait(1).to({x:182,y:283.2},0).wait(1).to({x:182.7},0).wait(1).to({x:183.5,y:283.3},0).wait(1).to({x:184.3,y:283.4},0).wait(1).to({x:185},0).wait(1).to({x:185.8,y:283.5,alpha:0.857},0).wait(1).to({x:227.8,y:287.4,alpha:0.714},0).wait(1).to({x:269.9,y:291.2,alpha:0.571},0).wait(1).to({x:311.9,y:295.1,alpha:0.429},0).wait(1).to({x:354,y:299,alpha:0.286},0).wait(1).to({x:396,y:302.8,alpha:0.143},0).wait(1).to({x:438.1,y:306.7,alpha:0},0).to({_off:true},1).wait(100));

	// категория А
	this.instance_9 = new lib.Символ9();
	this.instance_9.parent = this;
	this.instance_9.setTransform(126.8,107,1,1,0,0,0,136,165.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(100).to({_off:false},0).wait(1).to({regX:125.4,regY:163.6,x:116.2,y:104.8,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(200));

	// цена
	this.instance_10 = new lib.Символ10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(167.1,340.5,1,1,0,0,0,57.3,29.8);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({_off:false},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(200));

	// мотоцикл
	this.instance_11 = new lib.Символ11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-138.7,336.9,1,1,0,0,0,116.3,106.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(100).to({_off:false},0).wait(1).to({regX:116.2,x:-100.1,y:327.2,alpha:0.143},0).wait(1).to({x:-61.4,y:317.6,alpha:0.286},0).wait(1).to({x:-22.8,y:307.9,alpha:0.429},0).wait(1).to({x:15.9,y:298.2,alpha:0.571},0).wait(1).to({x:54.6,y:288.6,alpha:0.714},0).wait(1).to({x:93.2,y:278.9,alpha:0.857},0).wait(1).to({x:93.6,alpha:1},0).wait(1).to({x:94,y:278.8},0).wait(1).to({x:94.3},0).wait(1).to({x:94.7},0).wait(1).to({x:95.1,y:278.7},0).wait(1).to({x:95.4},0).wait(1).to({x:95.8},0).wait(1).to({x:96.2,y:278.6},0).wait(1).to({x:96.5},0).wait(1).to({x:96.9},0).wait(1).to({x:97.3,y:278.5},0).wait(1).to({x:97.6},0).wait(1).to({x:98},0).wait(1).to({x:98.4,y:278.4},0).wait(1).to({x:98.7},0).wait(1).to({x:99.1},0).wait(1).to({x:99.5,y:278.3},0).wait(1).to({x:99.8},0).wait(1).to({x:100.2},0).wait(1).to({x:100.6,y:278.2},0).wait(1).to({x:100.9},0).wait(1).to({x:101.3},0).wait(1).to({x:101.7,y:278.1},0).wait(1).to({x:102},0).wait(1).to({x:102.4},0).wait(1).to({x:102.8,y:278},0).wait(1).to({x:103.1},0).wait(1).to({x:103.5},0).wait(1).to({x:103.9,y:277.9},0).wait(1).to({x:104.2},0).wait(1).to({x:104.6},0).wait(1).to({x:105,y:277.8},0).wait(1).to({x:105.3},0).wait(1).to({x:105.7},0).wait(1).to({x:106.1,y:277.7},0).wait(1).to({x:106.4},0).wait(1).to({x:106.8},0).wait(1).to({x:107.2,y:277.6},0).wait(1).to({x:107.5},0).wait(1).to({x:107.9},0).wait(1).to({x:108.3,y:277.5},0).wait(1).to({x:108.6},0).wait(1).to({x:109},0).wait(1).to({x:109.4,y:277.4},0).wait(1).to({x:109.7},0).wait(1).to({x:110.1},0).wait(1).to({x:110.5,y:277.3},0).wait(1).to({x:110.8},0).wait(1).to({x:111.2},0).wait(1).to({x:111.6,y:277.2},0).wait(1).to({x:111.9},0).wait(1).to({x:112.3},0).wait(1).to({x:112.7,y:277.1},0).wait(1).to({x:113},0).wait(1).to({x:113.4},0).wait(1).to({x:113.8,y:277},0).wait(1).to({x:114.1},0).wait(1).to({x:114.5},0).wait(1).to({x:114.9,y:276.9},0).wait(1).to({x:115.2},0).wait(1).to({x:115.6},0).wait(1).to({x:116,y:276.8},0).wait(1).to({x:116.3},0).wait(1).to({x:116.7},0).wait(1).to({x:117,y:276.7},0).wait(1).to({x:117.4},0).wait(1).to({x:117.8},0).wait(1).to({x:118.1,y:276.6},0).wait(1).to({x:118.5},0).wait(1).to({x:118.9},0).wait(1).to({x:119.2,y:276.5},0).wait(1).to({x:119.6},0).wait(1).to({x:120},0).wait(1).to({x:120.3,y:276.4},0).wait(1).to({x:120.7},0).wait(1).to({x:121.1},0).wait(1).to({x:121.4,y:276.3},0).wait(1).to({x:121.8},0).wait(1).to({x:122.2},0).wait(1).to({x:122.5,y:276.2},0).wait(1).to({x:122.9},0).wait(1).to({x:123.3},0).wait(1).to({x:123.6,y:276.1},0).wait(1).to({x:124},0).wait(1).to({x:124.4},0).wait(1).to({x:124.7,y:276},0).wait(1).to({x:125.1,alpha:0.857},0).wait(1).to({x:165.7,y:271.7,alpha:0.714},0).wait(1).to({x:206.3,y:267.3,alpha:0.571},0).wait(1).to({x:246.9,y:263,alpha:0.429},0).wait(1).to({x:287.5,y:258.6,alpha:0.286},0).wait(1).to({x:328.1,y:254.3,alpha:0.143},0).wait(1).to({x:368.7,y:249.9,alpha:0},0).to({_off:true},1).wait(200));

	// лого
	this.instance_12 = new lib.Символ8();
	this.instance_12.parent = this;
	this.instance_12.setTransform(122.9,54.3,1,1,0,0,0,108.9,46.3);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:106.3,regY:46.2,x:120.3,y:54.2,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(300));

	// авто учебное
	this.instance_13 = new lib.Символ7();
	this.instance_13.parent = this;
	this.instance_13.setTransform(80.8,307.8,1,1,0,0,0,147.8,84.3);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regY:84.2,y:307.7,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(86).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(300));

	// текст1
	this.instance_14 = new lib.Символ6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(120.5,424.6,1,1,0,0,0,106.5,14.1);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regY:17.6,y:398.4,alpha:0.089},0).wait(1).to({y:368.7,alpha:0.178},0).wait(1).to({y:338.9,alpha:0.267},0).wait(1).to({y:309.2,alpha:0.356},0).wait(1).to({y:279.5,alpha:0.444},0).wait(1).to({y:249.8,alpha:0.533},0).wait(1).to({y:220,alpha:0.622},0).wait(1).to({y:190.3,alpha:0.711},0).wait(1).to({y:160.6,alpha:0.8},0).wait(1).to({y:130.9,alpha:0.9},0).wait(1).to({y:134.5,alpha:1},0).wait(1).to({y:134.4},0).wait(11).to({y:134.3},0).wait(11).to({y:134.2},0).wait(12).to({y:134.1},0).wait(11).to({y:134},0).wait(12).to({y:133.9},0).wait(11).to({y:133.8},0).wait(12).to({y:169.6},0).wait(1).to({y:205.5,alpha:0.857},0).wait(1).to({y:241.4,alpha:0.714},0).wait(1).to({y:277.3,alpha:0.571},0).wait(1).to({y:313.2,alpha:0.429},0).wait(1).to({y:349.1,alpha:0.286},0).wait(1).to({y:384.9,alpha:0.143},0).wait(1).to({y:420.9,alpha:0},0).to({_off:true},1).wait(300));

	// текст2
	this.instance_15 = new lib.Символ5();
	this.instance_15.parent = this;
	this.instance_15.setTransform(120.7,453.5,1,1,0,0,0,106.5,12.1);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:106.3,x:120.5,y:430.6,alpha:0.067},0).wait(1).to({y:407.8,alpha:0.133},0).wait(1).to({y:384.9,alpha:0.2},0).wait(1).to({y:362,alpha:0.267},0).wait(1).to({y:339.2,alpha:0.333},0).wait(1).to({y:316.3,alpha:0.4},0).wait(1).to({y:293.5,alpha:0.467},0).wait(1).to({y:270.6,alpha:0.533},0).wait(1).to({y:247.7,alpha:0.6},0).wait(1).to({y:224.8,alpha:0.667},0).wait(1).to({y:202,alpha:0.733},0).wait(1).to({y:179.1,alpha:0.8},0).wait(1).to({y:156.3,alpha:0.9},0).wait(1).to({y:159.9,alpha:1},0).wait(1).to({y:159.8},0).wait(10).to({y:159.7},0).wait(11).to({y:159.6},0).wait(11).to({y:159.5},0).wait(11).to({y:159.4},0).wait(11).to({y:159.3},0).wait(11).to({y:159.2},0).wait(11).to({y:187.8},0).wait(1).to({y:216.5},0).wait(1).to({y:245.2,alpha:0.857},0).wait(1).to({y:273.9,alpha:0.714},0).wait(1).to({y:302.5,alpha:0.571},0).wait(1).to({y:331.2,alpha:0.429},0).wait(1).to({y:359.9,alpha:0.286},0).wait(1).to({y:388.6,alpha:0.143},0).wait(1).to({y:417.3,alpha:0},0).to({_off:true},1).wait(300));

	// текст3
	this.instance_16 = new lib.Символ4();
	this.instance_16.parent = this;
	this.instance_16.setTransform(120.5,474.1,1,1,0,0,0,106.5,13.2);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regY:16,y:458.3,alpha:0.053},0).wait(1).to({y:439.7,alpha:0.107},0).wait(1).to({y:421.2,alpha:0.16},0).wait(1).to({y:402.6,alpha:0.213},0).wait(1).to({y:384,alpha:0.267},0).wait(1).to({y:365.4,alpha:0.32},0).wait(1).to({y:346.9,alpha:0.373},0).wait(1).to({y:328.3,alpha:0.427},0).wait(1).to({y:309.7,alpha:0.48},0).wait(1).to({y:291.1,alpha:0.533},0).wait(1).to({y:272.5,alpha:0.587},0).wait(1).to({y:254,alpha:0.64},0).wait(1).to({y:235.4,alpha:0.693},0).wait(1).to({y:216.8,alpha:0.747},0).wait(1).to({y:198.2,alpha:0.8},0).wait(1).to({y:179.7,alpha:0.9},0).wait(1).to({y:183.3,alpha:1},0).wait(1).to({y:183.2},0).wait(10).to({y:183.1},0).wait(10).to({y:183},0).wait(10).to({y:182.9},0).wait(11).to({y:182.8},0).wait(10).to({y:182.7},0).wait(10).to({y:182.6},0).wait(11).to({y:206.9},0).wait(1).to({y:231.3},0).wait(1).to({y:255.6},0).wait(1).to({y:280,alpha:0.857},0).wait(1).to({y:304.4,alpha:0.714},0).wait(1).to({y:328.7,alpha:0.571},0).wait(1).to({y:353.1,alpha:0.429},0).wait(1).to({y:377.4,alpha:0.286},0).wait(1).to({y:401.8,alpha:0.143},0).wait(1).to({y:426.2,alpha:0},0).to({_off:true},1).wait(300));

	// текст4
	this.instance_17 = new lib.Символ3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(120.5,504.2,1,1,0,0,0,106.5,13.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:106.7,regY:12.8,x:120.7,y:487.8,alpha:0.044},0).wait(1).to({y:472.2,alpha:0.089},0).wait(1).to({y:456.5,alpha:0.133},0).wait(1).to({y:440.9,alpha:0.178},0).wait(1).to({y:425.2,alpha:0.222},0).wait(1).to({y:409.6,alpha:0.267},0).wait(1).to({y:394,alpha:0.311},0).wait(1).to({y:378.3,alpha:0.356},0).wait(1).to({y:362.7,alpha:0.4},0).wait(1).to({y:347,alpha:0.444},0).wait(1).to({y:331.4,alpha:0.489},0).wait(1).to({y:315.7,alpha:0.533},0).wait(1).to({y:300.1,alpha:0.578},0).wait(1).to({y:284.4,alpha:0.622},0).wait(1).to({y:268.8,alpha:0.667},0).wait(1).to({y:253.1,alpha:0.711},0).wait(1).to({y:237.5,alpha:0.756},0).wait(1).to({y:221.9,alpha:0.8},0).wait(1).to({y:206.2,alpha:0.9},0).wait(1).to({y:209.8,alpha:1},0).wait(5).to({y:209.7},0).wait(10).to({y:209.6},0).wait(10).to({y:209.5},0).wait(10).to({y:209.4},0).wait(9).to({y:209.3},0).wait(10).to({y:209.2},0).wait(10).to({y:209.1},0).wait(5).to({y:228.6},0).wait(1).to({y:248.1},0).wait(1).to({y:267.6},0).wait(1).to({y:287.1},0).wait(1).to({y:306.6,alpha:0.857},0).wait(1).to({y:326.1,alpha:0.714},0).wait(1).to({y:345.6,alpha:0.571},0).wait(1).to({y:365.2,alpha:0.429},0).wait(1).to({y:384.7,alpha:0.286},0).wait(1).to({y:404.2,alpha:0.143},0).wait(1).to({y:423.7,alpha:0},0).to({_off:true},1).wait(300));

	// фон
	this.instance_18 = new lib.Символ2();
	this.instance_18.parent = this;
	this.instance_18.setTransform(29.1,199.1,1,1,0,0,0,519.6,201);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({x:28.6,alpha:0.2},0).wait(1).to({x:28.2,alpha:0.4},0).wait(1).to({x:27.7,alpha:0.6},0).wait(1).to({x:27.3,alpha:0.8},0).wait(1).to({x:26.8,alpha:1},0).wait(1).to({x:26.3},0).wait(1).to({x:25.9},0).wait(1).to({x:25.4},0).wait(1).to({x:24.9},0).wait(1).to({x:24.5},0).wait(1).to({x:24},0).wait(1).to({x:23.6},0).wait(1).to({x:23.1},0).wait(1).to({x:22.6},0).wait(1).to({x:22.2},0).wait(1).to({x:21.7},0).wait(1).to({x:21.2},0).wait(1).to({x:20.8},0).wait(1).to({x:20.3},0).wait(1).to({x:19.9},0).wait(1).to({x:19.4},0).wait(1).to({x:18.9},0).wait(1).to({x:18.5},0).wait(1).to({x:18},0).wait(1).to({x:17.6},0).wait(1).to({x:17.1},0).wait(1).to({x:16.6},0).wait(1).to({x:16.2},0).wait(1).to({x:15.7},0).wait(1).to({x:15.2},0).wait(1).to({x:14.8},0).wait(1).to({x:14.3},0).wait(1).to({x:13.9},0).wait(1).to({x:13.4},0).wait(1).to({x:12.9},0).wait(1).to({x:12.5},0).wait(1).to({x:12},0).wait(1).to({x:11.6},0).wait(1).to({x:11.1},0).wait(1).to({x:10.6},0).wait(1).to({x:10.2},0).wait(1).to({x:9.7},0).wait(1).to({x:9.2},0).wait(1).to({x:8.8},0).wait(1).to({x:8.3},0).wait(1).to({x:7.9},0).wait(1).to({x:7.4},0).wait(1).to({x:6.9},0).wait(1).to({x:6.5},0).wait(1).to({x:6},0).wait(1).to({x:5.5},0).wait(1).to({x:5.1},0).wait(1).to({x:4.6},0).wait(1).to({x:4.2},0).wait(1).to({x:3.7},0).wait(1).to({x:3.2},0).wait(1).to({x:2.8},0).wait(1).to({x:2.3},0).wait(1).to({x:1.9},0).wait(1).to({x:1.4},0).wait(1).to({x:0.9},0).wait(1).to({x:0.5},0).wait(1).to({x:0},0).wait(1).to({x:-0.5},0).wait(1).to({x:-0.9},0).wait(1).to({x:-1.4},0).wait(1).to({x:-1.8},0).wait(1).to({x:-2.3},0).wait(1).to({x:-2.8},0).wait(1).to({x:-3.2},0).wait(1).to({x:-3.7},0).wait(1).to({x:-4.1},0).wait(1).to({x:-4.6},0).wait(1).to({x:-5.1},0).wait(1).to({x:-5.5},0).wait(1).to({x:-6},0).wait(1).to({x:-6.5},0).wait(1).to({x:-6.9},0).wait(1).to({x:-7.4},0).wait(1).to({x:-7.8},0).wait(1).to({x:-8.3},0).wait(1).to({x:-8.8},0).wait(1).to({x:-9.2},0).wait(1).to({x:-9.7},0).wait(1).to({x:-10.2},0).wait(1).to({x:-10.6},0).wait(1).to({x:-11.1},0).wait(1).to({x:-11.5},0).wait(1).to({x:-12},0).wait(1).to({x:-12.5},0).wait(1).to({x:-12.9},0).wait(1).to({x:-13.4},0).wait(1).to({x:-13.8},0).wait(1).to({x:-14.3},0).wait(1).to({x:-14.8},0).wait(1).to({x:-15.2},0).wait(1).to({x:-15.7},0).wait(1).to({x:-16.2},0).wait(1).to({x:-16.6},0).wait(1).to({x:-17.1},0).wait(1).to({x:-17.5},0).wait(1).to({x:-18},0).wait(1).to({x:-18.5},0).wait(1).to({x:-18.9},0).wait(1).to({x:-19.4},0).wait(1).to({x:-19.8},0).wait(1).to({x:-20.3},0).wait(1).to({x:-20.8},0).wait(1).to({x:-21.2},0).wait(1).to({x:-21.7},0).wait(1).to({x:-22.2},0).wait(1).to({x:-22.6},0).wait(1).to({x:-23.1},0).wait(1).to({x:-23.5},0).wait(1).to({x:-24},0).wait(1).to({x:-24.5},0).wait(1).to({x:-24.9},0).wait(1).to({x:-25.4},0).wait(1).to({x:-25.9},0).wait(1).to({x:-26.3},0).wait(1).to({x:-26.8},0).wait(1).to({x:-27.2},0).wait(1).to({x:-27.7},0).wait(1).to({x:-28.2},0).wait(1).to({x:-28.6},0).wait(1).to({x:-29.1},0).wait(1).to({x:-29.5},0).wait(1).to({x:-30},0).wait(1).to({x:-30.5},0).wait(1).to({x:-30.9},0).wait(1).to({x:-31.4},0).wait(1).to({x:-31.9},0).wait(1).to({x:-32.3},0).wait(1).to({x:-32.8},0).wait(1).to({x:-33.2},0).wait(1).to({x:-33.7},0).wait(1).to({x:-34.2},0).wait(1).to({x:-34.6},0).wait(1).to({x:-35.1},0).wait(1).to({x:-35.5},0).wait(1).to({x:-36},0).wait(1).to({x:-36.5},0).wait(1).to({x:-36.9},0).wait(1).to({x:-37.4},0).wait(1).to({x:-37.9},0).wait(1).to({x:-38.3},0).wait(1).to({x:-38.8},0).wait(1).to({x:-39.2},0).wait(1).to({x:-39.7},0).wait(1).to({x:-40.2},0).wait(1).to({x:-40.6},0).wait(1).to({x:-41.1},0).wait(1).to({x:-41.6},0).wait(1).to({x:-42},0).wait(1).to({x:-42.5},0).wait(1).to({x:-42.9},0).wait(1).to({x:-43.4},0).wait(1).to({x:-43.9},0).wait(1).to({x:-44.3},0).wait(1).to({x:-44.8},0).wait(1).to({x:-45.2},0).wait(1).to({x:-45.7},0).wait(1).to({x:-46.2},0).wait(1).to({x:-46.6},0).wait(1).to({x:-47.1},0).wait(1).to({x:-47.6},0).wait(1).to({x:-48},0).wait(1).to({x:-48.5},0).wait(1).to({x:-48.9},0).wait(1).to({x:-49.4},0).wait(1).to({x:-49.9},0).wait(1).to({x:-50.3},0).wait(1).to({x:-50.8},0).wait(1).to({x:-51.2},0).wait(1).to({x:-51.7},0).wait(1).to({x:-52.2},0).wait(1).to({x:-52.6},0).wait(1).to({x:-53.1},0).wait(1).to({x:-53.6},0).wait(1).to({x:-54},0).wait(1).to({x:-54.5},0).wait(1).to({x:-54.9},0).wait(1).to({x:-55.4},0).wait(1).to({x:-55.9},0).wait(1).to({x:-56.3},0).wait(1).to({x:-56.8},0).wait(1).to({x:-57.3},0).wait(1).to({x:-57.7},0).wait(1).to({x:-58.2},0).wait(1).to({x:-58.6},0).wait(1).to({x:-59.1},0).wait(1).to({x:-59.6},0).wait(1).to({x:-60},0).wait(1).to({x:-60.5},0).wait(1).to({x:-60.9},0).wait(1).to({x:-61.4},0).wait(1).to({x:-61.9},0).wait(1).to({x:-62.3},0).wait(1).to({x:-62.8},0).wait(1).to({x:-63.3},0).wait(1).to({x:-63.7},0).wait(1).to({x:-64.2},0).wait(1).to({x:-64.6},0).wait(1).to({x:-65.1},0).wait(1).to({x:-65.6},0).wait(1).to({x:-66},0).wait(1).to({x:-66.5},0).wait(1).to({x:-67},0).wait(1).to({x:-67.4},0).wait(1).to({x:-67.9},0).wait(1).to({x:-68.3},0).wait(1).to({x:-68.8},0).wait(1).to({x:-69.3},0).wait(1).to({x:-69.7},0).wait(1).to({x:-70.2},0).wait(1).to({x:-70.6},0).wait(1).to({x:-71.1},0).wait(1).to({x:-71.6},0).wait(1).to({x:-72},0).wait(1).to({x:-72.5},0).wait(1).to({x:-73},0).wait(1).to({x:-73.4},0).wait(1).to({x:-73.9},0).wait(1).to({x:-74.3},0).wait(1).to({x:-74.8},0).wait(1).to({x:-75.3},0).wait(1).to({x:-75.7},0).wait(1).to({x:-76.2},0).wait(1).to({x:-76.6},0).wait(1).to({x:-77.1},0).wait(1).to({x:-77.6},0).wait(1).to({x:-78},0).wait(1).to({x:-78.5},0).wait(1).to({x:-79},0).wait(1).to({x:-79.4},0).wait(1).to({x:-79.9},0).wait(1).to({x:-80.3},0).wait(1).to({x:-80.8},0).wait(1).to({x:-81.3},0).wait(1).to({x:-81.7},0).wait(1).to({x:-82.2},0).wait(1).to({x:-82.7},0).wait(1).to({x:-83.1},0).wait(1).to({x:-83.6},0).wait(1).to({x:-84},0).wait(1).to({x:-84.5},0).wait(1).to({x:-85},0).wait(1).to({x:-85.4},0).wait(1).to({x:-85.9},0).wait(1).to({x:-86.3},0).wait(1).to({x:-86.8},0).wait(1).to({x:-87.3},0).wait(1).to({x:-87.7},0).wait(1).to({x:-88.2},0).wait(1).to({x:-88.7},0).wait(1).to({x:-89.1},0).wait(1).to({x:-89.6},0).wait(1).to({x:-90},0).wait(1).to({x:-90.5},0).wait(1).to({x:-91},0).wait(1).to({x:-91.4},0).wait(1).to({x:-91.9},0).wait(1).to({x:-92.3},0).wait(1).to({x:-92.8},0).wait(1).to({x:-93.3},0).wait(1).to({x:-93.7},0).wait(1).to({x:-94.2},0).wait(1).to({x:-94.7},0).wait(1).to({x:-95.1},0).wait(1).to({x:-95.6},0).wait(1).to({x:-96},0).wait(1).to({x:-96.5},0).wait(1).to({x:-97},0).wait(1).to({x:-97.4},0).wait(1).to({x:-97.9},0).wait(1).to({x:-98.4},0).wait(1).to({x:-98.8},0).wait(1).to({x:-99.3},0).wait(1).to({x:-99.7},0).wait(1).to({x:-100.2},0).wait(1).to({x:-100.7},0).wait(1).to({x:-101.1},0).wait(1).to({x:-101.6},0).wait(1).to({x:-102},0).wait(1).to({x:-102.5},0).wait(1).to({x:-103},0).wait(1).to({x:-103.4},0).wait(1).to({x:-103.9},0).wait(1).to({x:-104.4},0).wait(1).to({x:-104.8},0).wait(1).to({x:-105.3},0).wait(1).to({x:-105.7},0).wait(1).to({x:-106.2},0).wait(1).to({x:-106.7},0).wait(1).to({x:-107.1},0).wait(1).to({x:-107.6},0).wait(1).to({x:-108},0).wait(1).to({x:-108.5},0).wait(1).to({x:-109},0).wait(1).to({x:-109.4},0).wait(1).to({x:-109.9},0).wait(1).to({x:-110.4},0).wait(1).to({x:-110.8},0).wait(1).to({x:-111.3},0).wait(1).to({x:-111.7},0).wait(1).to({x:-112.2},0).wait(1).to({x:-112.7},0).wait(1).to({x:-113.1},0).wait(1).to({x:-113.6},0).wait(1).to({x:-114.1},0).wait(1).to({x:-114.5},0).wait(1).to({x:-115},0).wait(1).to({x:-115.4},0).wait(1).to({x:-115.9},0).wait(1).to({x:-116.4},0).wait(1).to({x:-116.8},0).wait(1).to({x:-117.3},0).wait(1).to({x:-117.7},0).wait(1).to({x:-118.2},0).wait(1).to({x:-118.7},0).wait(1).to({x:-119.1},0).wait(1).to({x:-119.6},0).wait(1).to({x:-120.1},0).wait(1).to({x:-120.5},0).wait(1).to({x:-121},0).wait(1).to({x:-121.4},0).wait(1).to({x:-121.9},0).wait(1).to({x:-122.4},0).wait(1).to({x:-122.8},0).wait(1).to({x:-123.3},0).wait(1).to({x:-123.7},0).wait(1).to({x:-124.2},0).wait(1).to({x:-124.7},0).wait(1).to({x:-125.1},0).wait(1).to({x:-125.6},0).wait(1).to({x:-126.1},0).wait(1).to({x:-126.5},0).wait(1).to({x:-127},0).wait(1).to({x:-127.4},0).wait(1).to({x:-127.9},0).wait(1).to({x:-128.4},0).wait(1).to({x:-128.8},0).wait(1).to({x:-129.3},0).wait(1).to({x:-129.8},0).wait(1).to({x:-130.2},0).wait(1).to({x:-130.7},0).wait(1).to({x:-131.1},0).wait(1).to({x:-131.6},0).wait(1).to({x:-132.1},0).wait(1).to({x:-132.5},0).wait(1).to({x:-133},0).wait(1).to({x:-133.4},0).wait(1).to({x:-133.9},0).wait(1).to({x:-134.4},0).wait(1).to({x:-134.8},0).wait(1).to({x:-135.3},0).wait(1).to({x:-135.8},0).wait(1).to({x:-136.2},0).wait(1).to({x:-136.7},0).wait(1).to({x:-137.1},0).wait(1).to({x:-137.6},0).wait(1).to({x:-138.1},0).wait(1).to({x:-138.5},0).wait(1).to({x:-139},0).wait(1).to({x:-139.4},0).wait(1).to({x:-139.9},0).wait(1).to({x:-140.4},0).wait(1).to({x:-140.8},0).wait(1).to({x:-141.3},0).wait(1).to({x:-141.8},0).wait(1).to({x:-142.2},0).wait(1).to({x:-142.7},0).wait(1).to({x:-143.1},0).wait(1).to({x:-143.6},0).wait(1).to({x:-144.1},0).wait(1).to({x:-144.5},0).wait(1).to({x:-145},0).wait(1).to({x:-145.5},0).wait(1).to({x:-145.9},0).wait(1).to({x:-146.4},0).wait(1).to({x:-146.8},0).wait(1).to({x:-147.3},0).wait(1).to({x:-147.8},0).wait(1).to({x:-148.2},0).wait(1).to({x:-148.7},0).wait(1).to({x:-149.1},0).wait(1).to({x:-149.6},0).wait(1).to({x:-150.1},0).wait(1).to({x:-150.5},0).wait(1).to({x:-151},0).wait(1).to({x:-151.5},0).wait(1).to({x:-151.9},0).wait(1).to({x:-152.4},0).wait(1).to({x:-152.8},0).wait(1).to({x:-153.3},0).wait(1).to({x:-153.8,alpha:0.75},0).wait(1).to({x:-154.2,alpha:0.5},0).wait(1).to({x:-154.7,alpha:0.25},0).wait(1).to({x:-155.2,alpha:0},0).wait(1));

	// белая подложка
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgUDAgBMAAAhABMAoHAAAMAAABABg");
	this.shape.setTransform(121.6,199.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(400));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-370.5,151,1039.3,563.1);
// library properties:
lib.properties = {
	id: '85F9590D2AC0D846A3D3B71FF4C62F4D',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Учебный комбинат_atlas_.png", id:"Учебный комбинат_atlas_"}
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
an.compositions['85F9590D2AC0D846A3D3B71FF4C62F4D'] = {
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