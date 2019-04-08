(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



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



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,333);// helper functions:

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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Az6eyMAAAg9jMAn1AAAMAAAA9jg");
	this.shape.setTransform(127.5,197);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#03ACEF").ss(1,1,1).p("As9AAIZ7AA");
	this.shape.setTransform(83.5,55.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#03ACEF").s().p("AADATIAPgTIgPgSIAAghIAoAzIgoA0gAgqATIAQgTIgQgSIAAghIAoAzIgoA0g");
	this.shape_1.setTransform(132.4,41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#03ACEF").s().p("AgnA3IAAhtIAnAAQAKAAAIACQAHABAFAEQAFAEACAFQACAFAAAJQAAAHgCAEQgCAFgEACIgEADIgEACIAEABIAEACQAEADACAFQADAFAAAIQAAAJgDAGQgCAFgFAEQgFAEgHACQgIACgKAAgAgNAkIALAAQAHAAAEgDQAEgDAAgIQAAgIgEgEQgEgDgHAAIgLAAgAgNgJIAMAAQAGAAAEgDQAEgDAAgHQAAgHgEgDQgEgDgGAAIgMAAg");
	this.shape_2.setTransform(122.1,41.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#03ACEF").s().p("AgQA2QgIgDgGgGQgGgIgCgLQgBgMAAgOQAAgNABgMQACgMAGgHQAGgHAIgCQAHgDAJABQAKgBAHADQAIACAGAHQAGAHACAMQACAMgBANQABAOgCAMQgCALgGAIQgGAGgIADQgHACgKAAQgJAAgHgCgAgFgjIgEAEQgDADAAAJQgBAIAAALQAAAMABAIQAAAIADAEIAEADIAFACQADAAADgCIAEgDQADgEAAgIQABgIAAgMQAAgLgBgIQAAgJgDgDIgEgEIgGgBIgFABg");
	this.shape_3.setTransform(111.9,41.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#03ACEF").s().p("AAQA3Ighg4IAeg1IAdAAIghA0IAkA5gAgsA3IAAhtIAaAAIAABtg");
	this.shape_4.setTransform(102.4,41.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#03ACEF").s().p("AgQA2QgIgDgGgGQgFgIgCgLQgCgMAAgOQAAgNACgMQACgMAFgHQAGgHAIgCQAIgDAJABQAIgBAHACQAGACAGAEQAGAGADAGQACAHABAHIgaAAIgBgFQgBgDgCgCIgEgDIgFgBIgFABIgFAEQgCADgBAJQgBAIABALQgBAMABAIQABAIACAEIAFADIAFACIAFgBIAEgDQACgCABgDIABgGIAaAAQgBAIgCAHQgDAHgGAEQgFAEgHACQgHACgIAAQgJAAgIgCg");
	this.shape_5.setTransform(91.9,41.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#03ACEF").s().p("AgOA2QgHgBgGgGQgIgHgCgMQgCgNAAgPQAAgOACgNQACgMAIgIQAGgFAHgCQAHgCAHABQAIgBAHACQAHACAGAFQAIAHACAOQADAOgBASIg1AAQAAAKABAGQABAHACADIAEADQADACACAAIAGgBIAEgEIADgEIAAgGIAbAAQAAAIgDAGQgDAGgFAGQgGAEgHACQgHACgJAAQgHAAgHgCgAAOgJIgBgPQgBgFgCgCIgEgEIgGgBIgFABIgEAEQgCACgBAFIgBAPIAbAAIAAAAg");
	this.shape_6.setTransform(82.1,41.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#03ACEF").s().p("AALA3IAAgkIgHAAIgGABQgRAAgJgHQgJgGAAgOIAAgvIAbAAIAAArQAAAHACADQADABAGAAIAFAAIAFAAIAAg2IAbAAIAABtg");
	this.shape_7.setTransform(72.2,41.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#03ACEF").s().p("AgQA2QgIgDgGgGQgFgIgCgLQgCgMAAgOQAAgNACgMQACgMAFgHQAGgHAIgCQAIgDAJABQAIgBAHACQAGACAGAEQAGAGADAGQACAHABAHIgaAAIgBgFQgBgDgCgCIgEgDIgFgBIgFABIgFAEQgCADgBAJQgBAIABALQgBAMABAIQABAIACAEIAFADIAFACIAFgBIAEgDQACgCABgDIABgGIAaAAQgBAIgCAHQgDAHgGAEQgFAEgHACQgHACgIAAQgJAAgIgCg");
	this.shape_8.setTransform(62.7,41.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#03ACEF").s().p("AgUA2QgGgCgFgFQgEgEgCgGQgCgGAAgIQAAgIADgGQADgGAGgEQAFgDAHgCQAHgCAKAAIAMAAIAAgPQAAgHgDgDQgEgDgGAAIgEABIgDACQgDACgBACIgBAGIgaAAQAAgGADgGQACgGAGgFQAFgEAHgDQAIgCAHAAQAIAAAIABQAHACAFAFQAFAEADAGQADAHAAAIIAABNIgZAAIAAgKIgDAEIgEAEIgHACIgHABQgJAAgFgCgAgBAHIgGADQgDACgBADIgCAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgGIAAgRIgJAAIgGABg");
	this.shape_9.setTransform(52.6,41.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#03ACEF").s().p("AgsBKIAAiTIAsAAQAXAAAMALQAKALAAAXQAAAXgKAKQgMALgXAAIgQAAIAAA6gAgQgEIAQAAQAJAAAEgHQAFgFgBgMQABgLgFgGQgEgHgJAAIgQAAg");
	this.shape_10.setTransform(42.5,39.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#03ACEF").s().p("AAOA3IAAgqIgKAAIgQAqIgcAAIAVgvQgJgEgEgHQgEgHAAgKQAAgLAEgHQAEgIAIgEQAIgEAOAAIAnAAIAABtgAgHgeQgCAEAAAGQAAAGACAEQADAEAGAAIAMAAIAAgcIgMAAQgGAAgDAEg");
	this.shape_11.setTransform(163.4,18.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#03ACEF").s().p("AANA3IAAg+IgcA+IgYAAIAAhtIAbAAIAAA+IAdg+IAXAAIAABtg");
	this.shape_12.setTransform(153.5,18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#03ACEF").s().p("AghA3IAAhtIBDAAIAAAUIgoAAIAABZg");
	this.shape_13.setTransform(144.5,18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#03ACEF").s().p("AgnBLIAAiTIAaAAIAAAIIADgEIAFgDIAGgCIAHgBQAHAAAGACQAFACAFAFQAGAGABAMQACAMAAARQAAASgCALQgBAMgGAGQgFAFgFACQgGACgHAAIgHgBIgGgCIgEgDIgDgDIAAAugAgIgzIgDAEIgBAGIAAAuIABAGIADAEIAEACIAEABIAFgBIAEgDQACgCABgEIABgJIAAgRIAAgQIgBgLIgDgFIgEgDIgFgBQgFAAgDADg");
	this.shape_14.setTransform(134.9,20.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#03ACEF").s().p("AgmA2IAKgBQAEAAAEgCQAEgDABgFIACgHIghhtIAdAAIARBJIARhJIAdAAIglB7QgDAKgGAFQgHAGgKABQgJACgMAAg");
	this.shape_15.setTransform(124.9,20.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#03ACEF").s().p("AgnBLIAAiTIAaAAIAAAIIADgEIAFgDIAGgCIAHgBQAHAAAGACQAFACAFAFQAGAGABAMQACAMAAARQAAASgCALQgBAMgGAGQgFAFgFACQgGACgHAAIgHgBIgGgCIgEgDIgDgDIAAAugAgIgzIgDAEIgBAGIAAAuIABAGIADAEIAEACIAEABIAFgBIAEgDIADgGIABgJIAAgRIAAgQIgBgLIgDgFIgEgDIgFgBQgFAAgDADg");
	this.shape_16.setTransform(115.3,20.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#03ACEF").s().p("AANA3IAAg+IgcA+IgYAAIAAhtIAbAAIAAA+IAdg+IAXAAIAABtg");
	this.shape_17.setTransform(104.7,18.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#03ACEF").s().p("AASA3IgSgiIgQAiIgeAAIAgg3Igdg2IAdAAIAOAhIAPghIAeAAIgeA2IAgA3g");
	this.shape_18.setTransform(94.6,18.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#03ACEF").s().p("AAOA3IAAgqIgKAAIgQAqIgcAAIAVgvQgJgEgEgHQgEgHAAgKQAAgLAEgHQAEgIAIgEQAIgEAOAAIAnAAIAABtgAgHgeQgCAEAAAGQAAAGACAEQADAEAGAAIAMAAIAAgcIgMAAQgGAAgDAEg");
	this.shape_19.setTransform(80,18.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#03ACEF").s().p("AgUA2QgGgCgFgFQgEgEgCgGQgCgGAAgIQAAgIADgGQADgGAGgEQAFgDAHgCQAHgCAKAAIAMAAIAAgPQAAgHgDgDQgEgDgGAAIgEABIgDACQgDACgBACIgBAGIgaAAQAAgGADgGQACgGAGgFQAFgEAHgDQAIgCAHAAQAIAAAIABQAHACAFAFQAFAEADAGQADAHAAAIIAABNIgZAAIAAgKIgDAEIgEAEIgHACIgHABQgJAAgFgCgAgBAHIgGADQgDACgBADIgCAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgGIAAgRIgJAAIgGABg");
	this.shape_20.setTransform(70.1,18.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#03ACEF").s().p("AAMA3IAAguIgXAAIAAAuIgbAAIAAhtIAbAAIAAAsIAXAAIAAgsIAbAAIAABtg");
	this.shape_21.setTransform(60.2,18.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#03ACEF").s().p("AgQA2QgHgCgEgEQgGgEgDgHQgDgGAAgJIAbAAIAAAHQABADADACIAEACIAEABIAGgBIAEgCIADgEIABgHQAAgFgCgDQgBgDgCgBIgEgCIgFgBIgJAAIAAgRIAJAAIAEAAIAEgCQACgCABgDQACgCAAgEIgBgHIgDgEIgEgCIgFgBIgEABIgEACQgDACgBADIAAAGIgbAAQAAgIADgGQADgHAFgEQAFgEAHgCQAHgCAJAAQAKAAAHABQAHACAFAEQAFAEACAGQADAFAAAJQAAAGgCAEQgBAEgEADIgEADIgFADIAFACIAFADQAEADABAFQACAFAAAIQAAAIgDAGQgDAGgGAEQgEAEgHACQgHABgKAAQgJAAgHgCg");
	this.shape_22.setTransform(50.2,18.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#03ACEF").s().p("AgUA2QgGgCgFgFQgEgEgCgGQgCgGAAgIQAAgIADgGQADgGAGgEQAFgDAHgCQAHgCAKAAIAMAAIAAgPQAAgHgDgDQgEgDgGAAIgEABIgDACQgDACgBACIgBAGIgaAAQAAgGADgGQACgGAGgFQAFgEAHgDQAIgCAHAAQAIAAAIABQAHACAFAFQAFAEADAGQADAHAAAIIAABNIgZAAIAAgKIgDAEIgEAEIgHACIgHABQgJAAgFgCgAgBAHIgGADQgDACgBADIgCAHQAAAHAEAEQADAEAGAAQAGAAAEgEQAEgEAAgGIAAgRIgJAAIgGABg");
	this.shape_23.setTransform(40.3,18.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#03ACEF").s().p("AAUA3IAAhZIgUAAIAAAsQAAARgEAKQgEAKgJAEQgIAEgMAAIgJAAIAAgUIAEAAIAIgBQAEgCACgGQADgGAAgOIAAg8IBIAAIAABtg");
	this.shape_24.setTransform(29.6,18.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#03ACEF").s().p("AgjBKIAAiTIBIAAIAAAVIgsAAIAAB+g");
	this.shape_25.setTransform(20.4,16.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#03ACEF").s().p("AADAAIAogzIAAAhIgQASIAQATIAAAhgAgqAAIAogzIAAAhIgPASIAPATIAAAhg");
	this.shape_26.setTransform(9.8,18.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ10, new cjs.Rectangle(-0.5,0,174.3,56.4), null);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF668C").s().p("AANApIgcgqIAagnIAYAAIgdAmIAfArgAgkApIAAhRIAVAAIAAAnIAAAqgAgPgBg");
	this.shape.setTransform(193.7,51.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF668C").s().p("AAOApIAAgxIgcAxIgUAAIAAhRIAUAAIAAAwIAcgwIAVAAIAABRg");
	this.shape_1.setTransform(184.2,51.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF668C").s().p("AgHAoQgGgCgGgEQgGgFgDgIQgDgJAAgMQAAgMADgIQADgIAGgFQAGgEAGgCQAGgCAGAAQAJAAAGACQAHADAFAGIgOAOQgDgEgDgBQgDgCgEAAQgEAAgCACQgDABgCADQgDADgBAEIgBAKIABALQABAEADADIAFAEQACACAEAAQAEAAADgCQADgBADgEIAOAOQgFAGgHACQgGADgJAAQgGAAgGgCg");
	this.shape_2.setTransform(175.9,51.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF668C").s().p("AgRAoQgGgCgDgDQgEgEgBgFQgCgEAAgGQAAgGADgGQADgEAGgDQAHgEAJAAIATAAIAAgEQAAgHgEgDQgEgDgHAAQgFAAgEACIgHAFIgNgNIAJgHQAEgCAFgBIAMgBQARAAAIAHQAJAHAAAPIAAA1IgUAAIAAgHQgEAEgFACQgEACgGAAQgHAAgFgCgAgKAJQgDACAAAFQAAAEADADQADACAGAAIAGAAQADgBACgDQABAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBIABgGIAAgFIgPAAQgGAAgDADg");
	this.shape_3.setTransform(167.4,51.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF668C").s().p("AAZA4IAAhcIgaAAIAAAhQAAARgDAMQgCAMgEAGQgFAHgGACQgHADgIAAIgJAAIAAgTIADAAQAEAAADgCQAEgCADgEQACgFACgHIABgVIAAgzIBFAAIAABvg");
	this.shape_4.setTransform(157.5,49.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF668C").s().p("AgXAKIAAgTIAvAAIAAATg");
	this.shape_5.setTransform(149.2,50.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF668C").s().p("AgPAnQgFgDgEgEQgGgGgCgHQgCgIAAgLQAAgKACgIQACgHAGgGQAEgEAFgDQAHgDAIAAQAJAAAGADQAGADAFAEQAFAGACAHQACAIAAAKQAAALgCAIQgCAHgFAGQgFAEgGADQgGADgJAAQgIAAgHgDgAgFgWIgDADQgEADgBAFIgBALIABAMQABAFAEADIADADIAFABIAFgBIAFgDQACgDABgFIABgMIgBgLQgBgFgCgDIgFgDIgFgBIgFABg");
	this.shape_6.setTransform(141.5,51.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF668C").s().p("AgJApIAAg/IgYAAIAAgSIBDAAIAAASIgYAAIAAA/g");
	this.shape_7.setTransform(133.6,51.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF668C").s().p("AAWApIAAguIgQAdIgKAAIgRgdIAAAuIgUAAIAAhRIAUAAIAWAqIAVgqIAUAAIAABRg");
	this.shape_8.setTransform(124.7,51.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF668C").s().p("AgPAnQgJgEgGgJQgFgKAAgQQAAgNAEgJQAFgJAIgFQAIgFAKAAQALAAAJAFQAHAFAEAJQAFAJAAAMIAAAHIgzAAQAAAJAFAFQAEAFAIAAQAHAAAEgCQAEgCAEgEIAMAMQgEAFgEACQgEADgGACQgGABgHAAQgJAAgIgDgAAPgHIAAgEIgCgFQgBgDgDgDQgEgCgFAAQgFAAgDACIgFAGIgBAFIgBAEIAeAAIAAAAg");
	this.shape_9.setTransform(115,51.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF668C").s().p("AgKA7IAAgNQgZgCgMgMQgLgMAAgUQAAgWALgMQAMgMAZgCIAAgLIAVAAIAAALQAZACALAMQAMAMAAAWQAAAUgMAMQgLAMgZACIAAANgAALAbQAOgBAGgHQAGgHAAgMQAAgOgGgHQgGgHgOAAgAgegVQgGAHAAAOQAAAMAGAHQAGAHAOABIAAg3QgOAAgGAHg");
	this.shape_10.setTransform(104.2,49.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAOApIAAgdIgMAAIgMAdIgYAAIASghQgIgDgEgFQgEgGAAgIQAAgIAEgGQADgGAGgDQAGgDAIAAIAoAAIAABRgAgJgVQgDADAAAEQAAAFADADQADADAFAAIAPAAIAAgVIgPAAQgFAAgDADg");
	this.shape_11.setTransform(169.1,32.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AAOApIAAgxIgcAxIgUAAIAAhRIAUAAIAAAwIAcgwIAVAAIAABRg");
	this.shape_12.setTransform(160.5,32.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AANApIAAghIgaAAIAAAhIgUAAIAAhRIAUAAIAAAfIAaAAIAAgfIAVAAIAABRg");
	this.shape_13.setTransform(151.3,32.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgQAnQgIgEgFgJQgGgKAAgQQAAgNAFgJQAEgJAIgFQAIgFAKAAQAMAAAHAFQAIAFAFAJQAEAJAAAMIAAAHIgzAAQAAAJAFAFQAFAFAHAAQAHAAAEgCQAEgCAEgEIANAMQgEAFgFACQgEADgGACQgGABgHAAQgJAAgJgDgAAQgHIgBgEIgBgFQgCgDgEgDQgDgCgFAAQgFAAgDACIgFAGIgCAFIAAAEIAfAAIAAAAg");
	this.shape_14.setTransform(142.4,32.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgiA5IAAhwIAUAAIAAAIQAFgFAEgCQAFgCAGAAQAHAAAEACQAFACAEAEQAEAEACAFIACAMIABANIgBAOIgCALQgCAFgEAEQgEAEgFACQgEACgHAAQgGAAgEgCQgFgCgEgFIAAAmgAgIgiQgDADgBAFIgBAMIABAMQABAFADADQADADAFAAQAGAAADgDQAEgDAAgFIABgMIgBgMQAAgFgEgDQgDgDgGAAQgFAAgDADg");
	this.shape_15.setTransform(133.7,34.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgQAoQgJgDgIgHIAMgMQAEADAFACQAGACAGAAIAGgBIAFgDQACgCAAgEQABgEgEgCQgDgCgGAAIgLAAIAAgOIALAAQAGAAADgDQACgCAAgEQAAgEgDgDQgFgCgEAAQgGAAgEACQgEABgEADIgMgNQAHgFAIgCQAJgCAIAAQAIAAAIACQAGADAFAFQADAFAAAHQAAAGgDAFQgCAEgGADQAGABADAFQADAFABAHQgBAIgEAFQgEAGgHADQgHADgJAAQgJAAgJgCg");
	this.shape_16.setTransform(125,32.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AAOApIAAgdIgMAAIgMAdIgYAAIARghQgHgDgEgFQgEgGAAgIQAAgIAEgGQADgGAGgDQAGgDAIAAIAoAAIAABRgAgJgVQgDADAAAEQAAAFADADQADADAFAAIAPAAIAAgVIgPAAQgFAAgDADg");
	this.shape_17.setTransform(219.7,14.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AAOApIAAgxIgcAxIgUAAIAAhRIAUAAIAAAwIAcgwIAVAAIAABRg");
	this.shape_18.setTransform(211.1,14.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AAUAzIAAgUIg7AAIAAhRIAVAAIAAA/IAZAAIAAg/IAWAAIAAA/IAKAAIAAAmg");
	this.shape_19.setTransform(202.2,15.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AAMApIgbgqIAagnIAYAAIgdAmIAfArgAgkApIAAhRIAVAAIAAAnIAAAqg");
	this.shape_20.setTransform(193.5,14.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgPAnQgJgEgGgJQgFgKAAgQQAAgNAEgJQAFgJAIgFQAIgFAKAAQALAAAJAFQAHAFAEAJQAFAJAAAMIAAAHIgzAAQAAAJAFAFQAEAFAJAAQAGAAAEgCQAEgCAEgEIAMAMQgEAFgEACQgFADgFACQgGABgHAAQgJAAgIgDgAAPgHIAAgEIgCgFQgBgDgDgDQgEgCgFAAQgFAAgDACIgFAGIgCAFIAAAEIAeAAIAAAAg");
	this.shape_21.setTransform(184.3,14.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AghA5IAAhwIATAAIAAAIQAFgFAFgCQAEgCAGAAQAGAAAGACQAFACADAEQAEAEACAFIACAMIAAANIAAAOIgCALQgCAFgEAEQgDAEgFACQgGACgGAAQgGAAgEgCQgFgCgEgFIAAAmgAgIgiQgDADgBAFIgBAMIABAMQABAFADADQADADAFAAQAGAAADgDQAEgDAAgFIABgMIgBgMQAAgFgEgDQgDgDgGAAQgFAAgDADg");
	this.shape_22.setTransform(175.6,16.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AghA5IAAhwIATAAIAAAIQAEgFAFgCQAFgCAGAAQAGAAAGACQAFACADAEQAEAEACAFIACAMIABANIgBAOIgCALQgCAFgEAEQgDAEgFACQgGACgGAAQgGAAgEgCQgFgCgEgFIAAAmgAgIgiQgDADgBAFIgBAMIABAMQABAFADADQADADAFAAQAGAAADgDQADgDABgFIABgMIgBgMQgBgFgDgDQgDgDgGAAQgFAAgDADg");
	this.shape_23.setTransform(166.7,16.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgOAnQgGgDgFgEQgFgGgCgHQgCgIAAgLQAAgKACgIQACgHAFgGQAFgEAGgDQAGgDAIAAQAJAAAHADQAFADAEAEQAGAGACAHQACAIAAAKQAAALgCAIQgCAHgGAGQgEAEgFADQgHADgJAAQgIAAgGgDgAgEgWIgFADQgCADgBAFIgBALIABAMQABAFACADIAFADIAEABIAGgBIADgDQAEgDABgFIABgMIgBgLQgBgFgEgDIgDgDIgGgBIgEABg");
	this.shape_24.setTransform(157.8,14.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AAMApIgbgqIAagnIAYAAIgdAmIAfArgAgkApIAAhRIAVAAIAAAnIAAAqgAgPgBg");
	this.shape_25.setTransform(149.9,14.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AAOApIAAgdIgMAAIgMAdIgYAAIARghQgHgDgEgFQgEgGAAgIQAAgIAEgGQADgGAGgDQAGgDAIAAIAoAAIAABRgAgJgVQgDADAAAEQAAAFADADQADADAFAAIAPAAIAAgVIgPAAQgFAAgDADg");
	this.shape_26.setTransform(136.8,14.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgRAoQgGgCgDgDQgEgEgBgFQgCgEAAgGQAAgGADgGQADgEAGgDQAHgEAJAAIATAAIAAgEQAAgHgEgDQgEgDgHAAQgFAAgEACIgHAFIgNgNIAJgHQAEgCAFgBIAMgBQARAAAIAHQAJAHAAAPIAAA1IgUAAIAAgHQgEAEgFACQgEACgGAAQgHAAgFgCgAgKAJQgDACAAAFQAAAEADADQADACAGAAIAGAAQADgBACgDQABAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBIABgGIAAgFIgPAAQgGAAgDADg");
	this.shape_27.setTransform(128.4,14.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AANApIAAghIgaAAIAAAhIgUAAIAAhRIAUAAIAAAfIAaAAIAAgfIAVAAIAABRg");
	this.shape_28.setTransform(119.9,14.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AghA5IAAhwIAUAAIAAAIQADgFAGgCQAEgCAGAAQAGAAAFACQAGACADAEQAEAEACAFIACAMIAAANIAAAOIgCALQgCAFgEAEQgDAEgGACQgFACgGAAQgGAAgEgCQgFgCgEgFIAAAmgAgIgiQgDADgBAFIgBAMIABAMQABAFADADQADADAFAAQAGAAADgDQADgDABgFIABgMIgBgMQgBgFgDgDQgDgDgGAAQgFAAgDADg");
	this.shape_29.setTransform(111.1,16.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgPAnQgJgEgGgJQgFgKAAgQQAAgNAFgJQAEgJAIgFQAIgFAKAAQAMAAAIAFQAIAFAEAJQAEAJAAAMIAAAHIgzAAQAAAJAFAFQAEAFAJAAQAGAAAEgCQAEgCAEgEIAMAMQgDAFgFACQgFADgFACQgFABgIAAQgJAAgIgDgAAPgHIAAgEIgBgFQgCgDgEgDQgDgCgFAAQgFAAgDACIgFAGIgBAFIgBAEIAeAAIAAAAg");
	this.shape_30.setTransform(102.1,14.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgQAoQgKgDgHgHIAMgMQAEADAGACQAFACAGAAIAGgBIAFgDQACgCAAgEQAAgEgDgCQgDgCgGAAIgLAAIAAgOIALAAQAGAAACgDQADgCAAgEQAAgEgDgDQgEgCgFAAQgFAAgFACQgEABgEADIgMgNQAHgFAIgCQAJgCAIAAQAIAAAIACQAGADAEAFQAEAFABAHQgBAGgDAFQgCAEgGADQAGABADAFQAEAFAAAHQAAAIgFAFQgEAGgHADQgHADgJAAQgJAAgJgCg");
	this.shape_31.setTransform(93.6,14.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgRAoQgGgCgDgDQgEgEgBgFQgCgEAAgGQAAgGADgGQADgEAGgDQAHgEAJAAIATAAIAAgEQAAgHgEgDQgEgDgHAAQgFAAgEACIgHAFIgNgNIAJgHQAEgCAFgBIAMgBQARAAAIAHQAJAHAAAPIAAA1IgUAAIAAgHQgEAEgFACQgEACgGAAQgHAAgFgCgAgKAJQgDACAAAFQAAAEADADQADACAGAAIAGAAQADgBACgDQABAAAAgBQABAAAAAAQAAgBAAgBQABAAAAgBIABgGIAAgFIgPAAQgGAAgDADg");
	this.shape_32.setTransform(85.4,14.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AAYA4IAAhcIgaAAIAAAhQAAARgBAMQgDAMgFAGQgDAHgHACQgHADgJAAIgJAAIAAgTIAEAAQAEAAADgCQAEgCADgEQADgFABgHIABgVIAAgzIBGAAIAABvg");
	this.shape_33.setTransform(75.5,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(-16.5,-1.6,328.1,64.6), null);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF668C").s().p("AgiBJIABgGQACgKAFgBIAHAAQAHgBABAFQAAADgDAEIgEAHQgEAEgEAAIgCABQgFAAgBgGgAgUAiIACgHIAGgQIAIgZIAJggQAGgVACgFQACgFADgBIAOADQAAAAABAAQAAABABAAQAAAAAAABQAAAAABAAIAAACIgCALIgIAUIgMAcIgOAlIgEAJQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAIgGABQgGAAAAgEg");
	this.shape.setTransform(103.1,43.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF668C").s().p("AgaApQgIgDgBgJIAAgIIAPgJIAAAEIAAAEQABAEACAEQADADAHAAQAEgBADgDQAFgDACgFQADgFgBgEQgBgFgGABIgEABIgEgJQAagNgCgLQAAgEgFABQgDAAgFAEQgFADgIAHIgIgIQAHgIAJgFQAIgGAJgBQAIgBAFAEQAFADABAHQABAGgEAGQgEAGgGAFQgHAEgGACIAAABIABAAQAQgCACALQABAIgGAHQgGAIgJAGQgJAFgJABIgFAAQgGAAgGgDg");
	this.shape_1.setTransform(93.5,48.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF668C").s().p("AgvApIAghUIAPAFIgNAjIAEgCIAFgCIAEgBIAOgDIAKgeIAPAEIgOApIgCAFIgBAGQAAABAAABQABAAAAABQABAAAAAAQABAAABAAQADAAAKgGIAJgHIgDAPQgVAQgIABQgFABgEgDQgEgDgBgGQAAgEAHgWQgKADgRAHIgMAig");
	this.shape_2.setTransform(85.6,49.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF668C").s().p("AgoAqQgDgBgBgHIACgKQABgIAGgOIASgtIAPAGIgTAwIgCAFIAAABQABABAAAAQAAABABAAQAAAAAAAAQABAAAAAAQADAAADgEIAMgNIAKgNIAJgMIAIgQIAPAGIgRAsIgBAEQAAABABABQAAABAAAAQABAAAAAAQABABABgBIAJgEIAKgHIgDAPIgPAKQgKAGgEAAQgDABgDgCQgDgCgBgDIgBgEQAAgFACgFIAHgOIgBgBIgIAKQgWAdgNACIgBAAIgGgCg");
	this.shape_3.setTransform(76.4,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF668C").s().p("AgpAsQgFgCAAgHQgBgGABgDIAPgKIAAABIAAADIAAADQABAGAFgBQAFAAAIgLQAKgMAJgRQAKgRAIgRIAQAGIgKAcQgIAVABAHQAAAEAEAAIACAAIAGgDIALgHIgDAOQgTAQgHABQgEAAgEgCQgDgCgBgGQgBgFACgHIAEgMIACgEIgCgBIgNAXQgGAIgHAGQgHAHgHABIgCAAQgFAAgFgDg");
	this.shape_4.setTransform(67,51.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF668C").s().p("AgoAqQgDgBgBgHIACgKQABgIAGgOIASgtIAPAGIgTAwIgCAFIAAABQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAQADAAADgEIAMgNIAKgNIAJgMIAIgQIAPAGIgRAsIgBAEQAAABABABQAAABAAAAQABAAAAAAQABABABgBIAJgEIAKgHIgDAPIgPAKQgKAGgEAAQgDABgDgCQgDgCgBgDIgBgEQAAgFACgFIAHgOIgBgBIgIAKQgWAdgNACIgBAAIgGgCg");
	this.shape_5.setTransform(51.4,53.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF668C").s().p("AgdA9QgGgGgDgIIgKAJIADgPIAGgGQABgPAHgRQAHgRALgPQALgOAMgKQAMgJAMgCQANgBACAOQABALgLAQQgLAPgQAOIgfAbIgBALQAAADADADQACACAFgBQAIgBADgJQAEgKgBgNIASgGIAAAFQABAMgEALQgEAKgJAHQgIAHgKACIgDAAQgJAAgFgEgAAbgwQgEABgHAGQgGAGgEAHQgJAMgEAJQgFAHgEAOIALgJIAJgIIAJgKIAJgLIADgDIAEgFIACgFIABgGQgBgFgDAAIgBAAg");
	this.shape_6.setTransform(86.7,28.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF668C").s().p("AgjAaQgBgNAGgNQAHgNAMgMQANgMARgIIAEAMQgNAGgJAKQgJALgFAJQgEALABAHQABAGACADQAEACADgBQAGAAAFgHQAHgGADgLQADgKgBgMIgBgHIASgIIACAJQABAQgGAOQgGAPgMAKQgLAKgMACIgEAAQgTAAgCgUg");
	this.shape_7.setTransform(78.3,31);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF668C").s().p("AgtAsIAfhVIAOAHIgSArIABAAIAJgJIASgWQAKgLARgMIAJAMQgYAPgQARIgEADIAAABIAGgBQAFAAACAHIgBACIAAADIgBACQgBAEAAABIAAACQABAEADAAQAEgBAJgGIAPgMIgCAPQgRASgRACQgHABgCgEQgDgDgBgGIAAgJIACgDIABgBIAAgCIAAgBQgBAAAAAAQAAgBAAAAQAAAAgBAAQAAAAAAABQgCAAgEAEIgKAOIgJANg");
	this.shape_8.setTransform(69.8,32.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF668C").s().p("AgCAoQgDgDAAgEQgBgJAJgUIADgGIgBAAQgEAEgIAHQgJAGgHABQgGABgDgEQgDgDgBgEQAAgFACgFIAOglIAOAEIgKAdIgCAGQAAADADAAQADgBAGgEQAGgEAFgIQAGgIAFgLIANAFIgOAnIgDAMQAAABABABQAAAAAAAAQAAABABAAQAAAAABAAIABAAQABAAAIgGIAMgIIgDAPIgRAMQgGAEgFABIgBAAQgFAAgCgCg");
	this.shape_9.setTransform(61.7,33.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF668C").s().p("AgjAaQgBgNAGgNQAHgNAMgMQANgMARgIIAEAMQgNAGgJAKQgJALgFAJQgEALABAHQABAGACADQAEACADgBQAGAAAFgHQAHgGADgLQADgKgBgMIgBgHIASgIIACAJQABAQgGAOQgGAPgMAKQgLAKgMACIgEAAQgTAAgCgUg");
	this.shape_10.setTransform(53.8,33.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF668C").s().p("AhEA/IAfhVIAQAHIgOAgIADAAIAMgOQAQgTAJgCIAHACQAEABABAGQAAAFgGALIgCADIgCAEIgBACIACABQAWgbAMgBQADAAADABQADACABAEQAAAGgGAOIgFAIIgDAHIAAACQAAABAAAAQAAABABAAQAAAAAAAAQAAAAABAAIAYgNIgDAQIgQALIgKAEIgHADQgHABgCgHIgBgDIAAgEIABgFIADgIIADgHIADgEIABgDIAAgCQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgEAAgIAJIgPAXIgLAPIgQgCIASguIgBgEQgBAAgLAOQgJAKgHAJQgGAJgIAQgAgOgcQAngdAsgIIgGAVIgQABQgaACgaAWg");
	this.shape_11.setTransform(36.1,34.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF668C").s().p("AgjAaQgBgNAGgNQAHgNAMgMQANgMARgIIAEAMQgNAGgJAKQgJALgFAJQgEALABAHQABAGACADQAEACADgBQAGAAAFgHQAHgGADgLQADgKgBgMIgBgHIASgIIACAJQABAQgGAOQgGAPgMAKQgLAKgMACIgEAAQgTAAgCgUg");
	this.shape_12.setTransform(25.5,37.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF668C").s().p("AgoAnQgGgEgBgLQgBgIAFgKQAEgLAIgKQAJgLAJgIQAKgHAIgBQAMgBAIAGIABgEIAQAGIgOAlQgEAKABADQAAABAAABQAAAAABABQAAAAAAABQABAAABAAQACAAAHgFIAMgIIgDAPIgNAKQgIAGgFABQgFAAgEgCQgDgDgBgEIAAgFIABgFIABgDIAAgBIABgCIgBAAIgBACIgBABIgHAKQgGAGgHAFQgIAFgHABIgCAAQgFAAgFgEgAALgfQgGAAgJAJQgKAJgGALQgHALABAIQABAJAGgBQAEAAAHgGIANgPIAIgLIAIgVQgDgEgFAAIgCABg");
	this.shape_13.setTransform(98.2,10.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF668C").s().p("AgTA/QAMgiANgZIAFgJIgBgBIgDAEQgRAUgQACQgHABgGgDQgGgEgBgJQgBgIAEgMQAGgLAIgMQAJgLALgHQAKgIALgCQAJgBAIAIIACgFIAQAGIgZA9IgOAoIgIAYgAAQg2QgIABgJAJQgKAKgHAMQgHALABAIQAAADACAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAEgBAIgFQAHgFAJgMQAJgLAGgRQgDgFgFAAIgBAAg");
	this.shape_14.setTransform(88.7,13.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF668C").s().p("AgjAaQgBgNAGgNQAHgNAMgMQANgMARgIIAEAMQgNAGgJAKQgJALgFAJQgEALABAHQABAGACADQAEACADgBQAGAAAFgHQAHgGADgLQADgKgBgMIgBgHIASgIIACAJQABAQgGAOQgGAPgMAKQgLAKgMACIgEAAQgTAAgCgUg");
	this.shape_15.setTransform(79.6,12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF668C").s().p("AgpBDQgIgGgBgLQgBgKAFgNQAFgLAMgKQALgKAQgFIAFAJQgMAGgIAJQgIAIgDAIQgDAJAAAGQABAFACADQADACADAAQAGgBAHgHQAIgGAEgLQAFgLABgLIgBgJIgBgKIgHgUQgEgGAAgDQAAgEABgDQABgCAEgDQAFgEANgFIAggKIgDATIgXAHQgHADgCACQAAAAgBABQAAAAAAABQgBABAAAAQAAABAAAAQABAGAEAJIACAOQADASgGASQgHARgMALQgKALgNACIgFAAQgHAAgGgEg");
	this.shape_16.setTransform(73.2,10.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF668C").s().p("AgjAaQgBgNAGgNQAHgNAMgMQANgMARgIIAEAMQgNAGgJAKQgJALgFAJQgEALABAHQABAGACADQAEACADgBQAGAAAFgHQAHgGADgLQADgKgBgMIgBgHIASgIIACAJQABAQgGAOQgGAPgMAKQgLAKgMACIgEAAQgTAAgCgUg");
	this.shape_17.setTransform(63.8,14.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF668C").s().p("AgdA9QgGgGgDgIIgKAJIADgPIAGgGQABgPAHgRQAHgRALgPQALgOAMgKQAMgJAMgCQANgBACAOQABALgLAQQgLAPgQAOIgfAbIgBALQAAADADADQACACAFgBQAIgBADgJQAEgKgBgNIASgGIAAAFQABAMgEALQgEAKgJAHQgIAHgKACIgDAAQgJAAgFgEgAAbgwQgEABgHAGQgGAGgEAHQgJAMgEAJQgFAHgEAOIALgJIAJgIIAJgKIAJgLIADgDIAEgFIACgFIABgGQgBgFgDAAIgBAAg");
	this.shape_18.setTransform(56.5,13);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF668C").s().p("AgbBMQgHgCgFgEQgGgFgEgIQgEgHgBgLQgCgSAGgUQAGgTAMgRQANgSAPgLQAPgLAPgBQAMgCAIAGQAIAFABAKQABAJgGALQgGAKgMAKIgQgHQAIgIAHgJQAHgJgBgGQAAgDgDgDQgDgCgEABQgPABgOARQgQARgJAXQgJAXACATQACAOAGAGQAIAGAMgCQAHgBAKgFQAKgFAIgHIgDAPQgIAHgLAGQgKAFgKABIgEABQgFAAgFgCg");
	this.shape_19.setTransform(48.2,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-9.8,124.3,82.9);


// stage content:
(lib.racheskov = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.ad_exit_button.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			window.open("http://prokazan.ru/news/view/119927", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(134));

	// Layer 1
	this.ad_exit_button = new lib.Symbol1();
	this.ad_exit_button.parent = this;
	this.ad_exit_button.setTransform(111.5,174.1,1,1,0,0,0,127.5,197);
	new cjs.ButtonHelper(this.ad_exit_button, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ad_exit_button).wait(134));

	// Layer 5
	this.instance = new lib.Символ2();
	this.instance.parent = this;
	this.instance.setTransform(98.1,111.9,1.181,1.181,0,0,0,145.5,23.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(78));

	// Layer 6
	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(85.9,112.6,1.429,1.429,0,0,0,57,23.2);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(56).to({x:97.9,alpha:0},0).wait(78));

	// Layer 7
	this.instance_2 = new lib.Символ10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(101.6,33.5,1,1,0,0,0,86.6,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(134));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AARBPIgGgrIgVAAIgGArIgJAAIAXidIAGAAIAWCdgAAKAYIgKhOIgJBOIATAAg");
	this.shape.setTransform(194.9,321.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgDBPIAAiRIgRAAIAAgMIApAAIAAAMIgRAAIAACRg");
	this.shape_1.setTransform(190,321.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgHBOQgDgCgDgFQgCgDgCgFIgCgMIgBgUIAAgfIAAgdIABgUIACgMQACgFACgEQADgEADgDQAEgCAEAAQAEAAAEACQADACADAEQADAGABAHQACAIAAAJIgIAAIgBgMQgBgFgCgEIgDgEQgCgBgDAAQgCAAgCABIgEAEIgCAHIgCAKIgBASIAAAbIAAAcIABASIACALIACAGIAEAEQACACACAAQADAAACgCIADgEQACgDABgGIABgLIAIAAQAAAJgCAIQgCAIgDAFQgCAEgEACQgDABgEAAQgEAAgEgCg");
	this.shape_2.setTransform(185,321.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AANBPIAAh6IgZB6IgIAAIAAidIAIAAIAAB6IAZh6IAIAAIAACdg");
	this.shape_3.setTransform(179.1,321.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AARBPIAAiRIgSAAIAABGQgBAagBAPQgCAPgDAHQgCAHgFACQgDACgEABIgDAAIAAgMIABAAQADAAADgCQACgBADgHQABgGACgNIABglIAAhPIAjAAIAACdg");
	this.shape_4.setTransform(172.5,321.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AARBPIgFgrIgXAAIgEArIgJAAIAVidIAHAAIAWCdgAAKAYIgKhOIgIBOIASAAg");
	this.shape_5.setTransform(167.2,321.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AANBPIAAh6IgZB6IgIAAIAAidIAIAAIAAB6IAZh6IAIAAIAACdg");
	this.shape_6.setTransform(161.5,321.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AAQBeIAAgfIgnAAIAAicIAIAAIAACRIAYAAIAAiRIAIAAIAACRIAHAAIAAAqg");
	this.shape_7.setTransform(155.6,323.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AgQBPIAAidIAhAAIAAAMIgZAAIAAA9IAWAAIAAAKIgWAAIAAA+IAZAAIAAAMg");
	this.shape_8.setTransform(149.9,321.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("AAMBPIAAiRIgXAAIAACRIgIAAIAAidIAnAAIAACdg");
	this.shape_9.setTransform(144.3,321.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgHBOQgDgCgDgFQgCgDgCgFIgCgMIgBgUIAAgfIAAgdIABgUIACgMQACgFACgEQADgEADgDQAEgCAEAAQAEAAAEACQADACADAEQADAGABAHQACAIAAAJIgIAAIgBgMQgBgFgCgEIgDgEQgCgBgDAAQgCAAgCABIgEAEIgCAHIgCAKIgBASIAAAbIAAAcIABASIACALIACAGIAEAEQACACACAAQADAAACgCIADgEQACgDABgGIABgLIAIAAQAAAJgCAIQgCAIgDAFQgCAEgEACQgDABgEAAQgEAAgEgCg");
	this.shape_10.setTransform(138.6,321.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AAOBPIAAhHIgNAAIgNBHIgJAAIAPhJQgGgEgDgIQgDgKAAgSQAAgSADgJQADgKAFgDQAEgEAFABIAUAAIAACcgAgHg5QgDAIAAAPQAAAPADAIQADAJAGAAIAMAAIAAhAIgMAAQgGABgDAIg");
	this.shape_11.setTransform(130.1,321.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AANBPIAAh6IgZB6IgIAAIAAidIAIAAIAAB6IAZh6IAIAAIAACdg");
	this.shape_12.setTransform(124.6,321.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AAQBeIAAgfIgnAAIAAicIAIAAIAACRIAYAAIAAiRIAIAAIAACRIAHAAIAAAqg");
	this.shape_13.setTransform(118.7,323.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AARBPIgGgrIgVAAIgFArIgJAAIAVidIAHAAIAWCdgAAKAYIgKhOIgIBOIASAAg");
	this.shape_14.setTransform(112.8,321.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AgDBPIAAiRIgRAAIAAgMIApAAIAAAMIgRAAIAACRg");
	this.shape_15.setTransform(107.9,321.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AgTBPIAAidIAIAAIAABGIALAAQAGAAAFAEQAEAEADAJQACAKAAAQQAAASgDAKQgCAJgFADQgFADgFABgAgLBDIALAAQAHAAACgJQADgIAAgPQAAgQgDgIQgCgIgHgBIgLAAg");
	this.shape_16.setTransform(102.9,321.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AARBPIAAiRIgSAAIAABGQgBAagBAPQgCAPgDAHQgCAHgFACQgDACgEABIgDAAIAAgMIABAAQAEAAACgCQADgBABgHQADgGABgNIABglIAAhPIAjAAIAACdg");
	this.shape_17.setTransform(96.4,321.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AgUBDQAFAAADgDQADgDACgLIAEgWIgUhqIAJAAIAOBYIAPhYIAJAAIgYCGQgCAJgDAGQgCAFgEABQgEACgFAAg");
	this.shape_18.setTransform(91.1,321.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AgHBOQgDgCgDgFQgCgDgCgFIgCgMIgBgUIAAgfIAAgdIABgUIACgMQACgFACgEQADgEADgDQAEgCAEAAQAEAAAEACQADACADAEQADAGABAHQACAIAAAJIgIAAIgBgMQgBgFgCgEIgDgEQgCgBgDAAQgCAAgCABIgEAEIgCAHIgCAKIgBASIAAAbIAAAcIABASIACALIACAGIAEAEQACACACAAQADAAACgCIADgEQACgDABgGIABgLIAIAAQAAAJgCAIQgCAIgDAFQgCAEgEACQgDABgEAAQgEAAgEgCg");
	this.shape_19.setTransform(86,321.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("AAMBPIAAhLIgXAAIAABLIgIAAIAAidIAIAAIAABIIAXAAIAAhIIAIAAIAACdg");
	this.shape_20.setTransform(80.2,321.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("AgHBOQgEgCgCgFQgDgDgCgFIgCgMIgBgUIAAgfIAAgdIABgUIACgMQACgFADgEQACgEAEgDQADgCAEAAQAEAAAEACQAEADACAEQADAEABAFIADAMIAAAUIABAdIgBAfIAAAUIgDAMQgBAFgDADQgCAFgEACQgEACgEAAQgEAAgDgCgAgEhCQgCACgBACQgDADAAAEIgCAKIAAASIAAAbIAAAcIAAASIACALQAAADADADQABADACABQACACACAAQADAAACgCQACgBABgDIADgGIACgLIAAgSIAAgcIAAgbIAAgSIgCgKIgDgHQgBgCgCgCQgCgBgDAAQgCAAgCABg");
	this.shape_21.setTransform(74.3,321.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("AAOBPIgchSIAbhLIAJAAIgcBLIAdBSgAgWBPIAAidIAIAAIAABLIAABSg");
	this.shape_22.setTransform(68.9,321.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AARBPIgFgrIgXAAIgEArIgJAAIAVidIAHAAIAVCdgAAKAYIgKhOIgJBOIATAAg");
	this.shape_23.setTransform(60.3,321.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AAVBPIAAh+IgSBSIgFAAIgShPIAAB7IgIAAIAAidIAIAAIAUBcIAVhcIAIAAIAACdg");
	this.shape_24.setTransform(53.9,321.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AANBPIAAh6IgZB6IgIAAIAAidIAIAAIAAB6IAZh6IAIAAIAACdg");
	this.shape_25.setTransform(47,321.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AAVBcIAAgbIgoAAIAAAbIgIAAIAAgmIAGAAQAEgQACgUQACgSAAgXIAAhEIAiAAIAACRIAHAAIAAAmgAgGgVQAAAVgBASQgCATgEARIAaAAIAAiFIgTAAg");
	this.shape_26.setTransform(40.7,322.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AgHBOQgEgCgDgFQgCgDgBgFIgDgMIgBgUIAAgfIAAgdIABgUIADgMQABgFACgEQADgEAEgDQADgCAEAAQAEAAAFACQADADACAEQADAEABAFIADAMIAAAUIAAAdIAAAfIAAAUIgDAMQgBAFgDADQgCAFgDACQgFACgEAAQgEAAgDgCgAgEhCQgDACAAACQgCADgBAEIgCAKIgBASIAAAbIAAAcIABASIACALQABADACADQAAADADABQACACACAAQADAAACgCQACgBACgDIACgGIACgLIAAgSIAAgcIAAgbIAAgSIgCgKIgCgHQgCgCgCgCQgCgBgDAAQgCAAgCABg");
	this.shape_27.setTransform(34.8,321.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AAPBPIgPhFIgNBFIgJAAIAThSIgRhLIAJAAIALA+IAMg+IAJAAIgQBLIASBSg");
	this.shape_28.setTransform(29.3,321.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AgTBPIAAidIAjAAIAAAMIgbAAIAAA6IALAAQAHAAAEAEQAEAEADAJQACAKAAAQQAAASgDAKQgCAJgFADQgFADgFABgAgLBDIALAAQAHAAACgJQADgIABgPQgBgQgDgIQgCgIgHgBIgLAAg");
	this.shape_29.setTransform(24,321.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AgHBOQgEgCgDgFQgCgDgBgFIgDgMIgBgUIAAgfIAAgdIABgUIADgMQABgFACgEQADgEAEgDQADgCAEAAQAEAAAFACQADADACAEQADAEABAFIADAMIAAAUIAAAdIAAAfIAAAUIgDAMQgBAFgDADQgCAFgDACQgFACgEAAQgEAAgDgCgAgEhCQgDACAAACQgCADgBAEIgCAKIgBASIAAAbIAAAcIABASIACALQABADACADQAAADADABQACACACAAQADAAACgCQACgBACgDIACgGIACgLIAAgSIAAgcIAAgbIAAgSIgCgKIgCgHQgCgCgCgCQgCgBgDAAQgCAAgCABg");
	this.shape_30.setTransform(18.1,321.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AgQBPIAAidIAhAAIAAAMIgZAAIAAA9IAVAAIAAAKIgVAAIAAA+IAZAAIAAAMg");
	this.shape_31.setTransform(12.8,321.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AAMBPIAAhLIgXAAIAABLIgIAAIAAidIAIAAIAABIIAXAAIAAhIIAIAAIAACdg");
	this.shape_32.setTransform(7.2,321.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("AAUBNIAAhFIgSAAIgUBFIgMAAIAVhIQgIgDgFgIQgDgKAAgRQAAgSADgJQAEgKAHgDQAHgDAIAAIAbAAIAACZgAgKg4QgFAIABAPQgBAOAFAIQAEAIAJAAIARAAIAAg9IgRAAQgJAAgEAIg");
	this.shape_33.setTransform(192.2,302.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("AATBNIAAh3IgkB3IgMAAIAAiZIAMAAIAAB3IAkh3IALAAIAACZg");
	this.shape_34.setTransform(184.4,302.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AARBNIAAhJIghAAIAABJIgMAAIAAiZIAMAAIAABGIAhAAIAAhGIAMAAIAACZg");
	this.shape_35.setTransform(175.7,302.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AAYBNIgIgqIgfAAIgIAqIgMAAIAfiZIAJAAIAfCZgAAOAXIgOhMIgNBMIAbAAg");
	this.shape_36.setTransform(167.8,302.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AgKBNQgFgCgEgDQgFgGgCgIQgCgHAAgJIALAAQAAAGACAGQABAFADAEQACACADABIAGABIAHgBQADgCACgCQAEgFABgFQABgGAAgKIgBgMIgCgIIgDgGQgDgCgDgBIgGgBIgKAAIAAgLIAKAAQAEAAACgBQADgBADgCIADgGIACgIIAAgMIgBgPQAAgGgEgFQgCgDgDAAQgDgCgEAAQgDAAgDACQgDAAgCADQgDADgBAGQgCAGAAAFIgLAAQAAgIACgHQACgIAFgFQADgEAFgCQAFgCAGgBQAGAAAFACQAGADADAEQAGAHABAIQACAIAAALIgBAMIgCAJIgDAGIgEAFIgFADIAFADIAEAFQACADABADIADAJIAAAOQAAALgBAIQgCAHgFAHQgEAFgFABQgGADgGAAQgGAAgEgCg");
	this.shape_37.setTransform(160.1,302.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AAYBNIgIgqIgfAAIgIAqIgMAAIAfiZIAJAAIAfCZgAAOAXIgOhMIgNBMIAbAAg");
	this.shape_38.setTransform(152.7,302.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AAUBNIgphPIAmhKIANAAIgnBJIArBQgAghBNIAAiZIAMAAIAACZg");
	this.shape_39.setTransform(145.4,302.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AgLBMQgFgCgEgEIgFgIQgCgFgBgIIgBgTIgBgeIABgdIABgTQABgIACgEQACgFADgEQAEgEAFgCQAFgCAGgBQAHABAFACQAFACAEAEQADAEACAFIADAMIABATIABAdIgBAeIgBATIgDANQgCAEgDAEQgEAEgFACQgFADgHAAQgGAAgFgDgAgGhAIgFADQgDADgBAEIgCAKIgBASIAAAaIAAAcIABARIACAKQABAEADADIAFADQADACADAAQAEAAADgCIAFgDQADgDABgEIACgKIABgRIAAgcIAAgaIgBgSIgCgKQgBgEgDgDIgFgDQgDgCgEAAQgDAAgDACg");
	this.shape_40.setTransform(136.5,302.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AARBNIAAiNIghAAIAACNIgMAAIAAiZIA5AAIAACZg");
	this.shape_41.setTransform(128.1,302.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("AgLBMQgFgCgEgEIgFgIQgCgFgBgIIgBgTIgBgeIABgdIABgTQABgIACgEQACgFADgEQAEgEAFgCQAFgCAGgBQAHABAFACQAFACAEAEQADAEACAFIADAMIABATIABAdIgBAeIgBATIgDANQgCAEgDAEQgEAEgFACQgFADgHAAQgGAAgFgDgAgGhAIgFADQgDADgBAEIgCAKIgBASIAAAaIAAAcIABARIACAKQABAEADADIAFADQADACADAAQAEAAADgCIAFgDQADgDABgEIACgKIABgRIAAgcIAAgaIgBgSIgCgKQgBgEgDgDIgFgDQgDgCgEAAQgDAAgDACg");
	this.shape_42.setTransform(119.8,302.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AgcBNIAAiZIAZAAQAIAAAFACQAGACAEAFQAEAFACAHQACAHAAAMQAAAIgCAHQgBAHgFAGIgFAEIgEACIAFACIAEADQAGAGACAIQABAJAAAIIgBAQQgBAGgCAEIgEAIQgFAFgFACQgGACgIAAgAgQBBIAOAAQAFAAAFgCQAEgDADgHQACgHAAgMQAAgRgFgHQgFgHgJAAIgOAAgAgQgIIAOAAQAIABAFgHQAFgHAAgPQAAgLgCgGQgCgHgFgCQgEgDgFABIgOAAg");
	this.shape_43.setTransform(111.7,302.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AASBNIAAh3IgjB3IgMAAIAAiZIAMAAIAAB3IAjh3IAMAAIAACZg");
	this.shape_44.setTransform(103.1,302.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("AgFBNIAAiNIgXAAIAAgMIA5AAIAAAMIgYAAIAACNg");
	this.shape_45.setTransform(95.5,302.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("AgLBMQgFgCgEgEIgFgIQgCgFgBgIIgBgTIgBgeIABgdIABgTQABgIACgEQACgFADgEQAEgEAFgCQAFgCAGgBQAHABAFACQAFACAEAEQADAEACAFIADAMIABATIABAdIgBAeIgBATIgDANQgCAEgDAEQgEAEgFACQgFADgHAAQgGAAgFgDgAgGhAIgFADQgDADgBAEIgCAKIgBASIAAAaIAAAcIABARIACAKQABAEADADIAFADQADACADAAQAEAAADgCIAFgDQADgDABgEIACgKIABgRIAAgcIAAgaIgBgSIgCgKQgBgEgDgDIgFgDQgDgCgEAAQgDAAgDACg");
	this.shape_46.setTransform(88,302.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AgcBNIAAiZIAcAAQAHAAAHADQAHADAEAKQAEAJAAASQAAASgEAJQgEAIgHAEQgHADgHAAIgQAAIAABEgAgQgCIAPAAQAFAAAEgCQAEgDADgGQACgHAAgNQAAgNgCgHQgDgHgEgCQgEgDgFABIgPAAg");
	this.shape_47.setTransform(80,302.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AARBNIAAiNIghAAIAACNIgMAAIAAiZIA5AAIAACZg");
	this.shape_48.setTransform(71.5,302.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AATBNIAAhFIgSAAIgTBFIgMAAIAVhIQgIgDgEgIQgFgKAAgRQAAgSAFgJQAEgKAGgDQAHgDAIAAIAbAAIAACZgAgKg4QgEAIAAAPQAAAOAEAIQAEAIAJAAIAQAAIAAg9IgQAAQgJAAgEAIg");
	this.shape_49.setTransform(59.1,302.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AgKBMQgFgCgEgEIgFgIQgCgFgBgIIgBgTIgBgeIABgdIABgTQABgIACgEQACgFADgEQAEgEAFgCQAFgCAGgBQAHABAEACQAFACAEAEQAEAFADAIQACAHAAAIIgMAAIgBgLQgBgFgDgEIgFgDQgDgCgEAAQgDAAgDACIgFADQgDADgBAEIgCAKIgBASIAAAaIAAAcIABARIACAKQABAEADADIAFADQADACADAAQAEAAADgCQADgBACgCQADgDABgGIABgLIAMAAQAAAJgDAHQgCAJgFAFQgDADgFACQgFACgGAAQgGAAgFgDg");
	this.shape_50.setTransform(51.8,302.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("AgFBNIAAiNIgXAAIAAgMIA5AAIAAAMIgXAAIAACNg");
	this.shape_51.setTransform(44.5,302.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AADBMQgEgCgEgEIgFgIQgCgFgBgGIgBgSIgBgdIgSAAIAABJIgMAAIAAiZIAMAAIAABGIASAAIABgbIABgRIADgLIAFgIQAEgEAEgCQAFgCAHgBQAHABAFACQAFACAEAEQADAEACAFQACAEABAIIABATIABAdIgBAeIgBATQgBAIgCAFIgFAIQgEAEgFACQgFADgHAAQgHAAgFgDgAAIhAIgFADIgDAHIgCAKIgBASIAAAaIAAAcIABARIACAKIADAHIAFADQADACAEAAQAEAAADgCQAEgBACgCIADgHIACgKIABgRIAAgcIAAgaIgBgSIgCgKIgDgHQgCgCgEgBQgDgCgEAAQgEAAgDACg");
	this.shape_52.setTransform(35.6,302.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AgXBNIAAiZIAvAAIAAAMIgkAAIAAA7IAfAAIAAAKIgfAAIAAA8IAkAAIAAAMg");
	this.shape_53.setTransform(26.2,302.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("AAeBNIAAh7IgaBQIgHAAIgahNIAAB4IgLAAIAAiZIALAAIAdBZIAehZIALAAIAACZg");
	this.shape_54.setTransform(17,302.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AATBNIAAh3IglB3IgLAAIAAiZIALAAIAAB3IAlh3IALAAIAACZg");
	this.shape_55.setTransform(7.2,302.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AgHATQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgDgDIAAgEQAAgGADgCQAEgCAHAAIALAAIAAgFQAAgEgCgDQgDgCgGAAIgFABIgEAEIgEgDQADgDADgCIAHgBQAIAAADAEQAEADAAAGIAAAZIgEAAIAAgEIgFAEIgGABIgHgBgAgKAJQAAADADACQACACAFAAIAEAAQADgBACgCQACgCAAgFIAAgFIgLAAQgKAAAAAIg");
	this.shape_56.setTransform(193.7,7.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#999999").s().p("AAOATIAAgdIgMAYIgDAAIgMgYIAAAdIgEAAIAAglIAEAAIANAcIAOgcIAEAAIAAAlg");
	this.shape_57.setTransform(189.2,7.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("AgHATQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBIgCgDIgBgEQAAgGADgCQAEgCAGAAIAMAAIAAgFQAAgEgDgDQgCgCgGAAIgFABIgFAEIgCgDQACgDADgCIAHgBQAHAAAFAEQADADAAAGIAAAZIgEAAIAAgEIgFAEIgGABIgHgBgAgKAJQAAADACACQADACAFAAIAEAAQACgBACgCQADgCAAgFIAAgFIgLAAQgKAAAAAIg");
	this.shape_58.setTransform(184.3,7.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#999999").s().p("AANATIAAgiIgPAAIAAAPIgBAJIgCAGIgEADIgFABIgCAAIAAgDIACAAIACgBIADgCIACgFIABgJIAAgRIAXAAIAAAlg");
	this.shape_59.setTransform(179.9,7.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("AAKATIgUgTIASgSIAFAAIgSASIAUATgAgOATIAAglIAEAAIAAASIAAATgAgKAAg");
	this.shape_60.setTransform(176.5,7.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("AgLAPQgEgFABgKQgBgIAEgGQAFgFAGAAQAHAAAEAFQAEAFAAAJIAAABIgaAAIABAFIABADQADAHAIAAIAEgBIADgBIADgDIADADIgEADIgCABQgEACgEAAQgHAAgFgFgAgFgNQgDABgBADIgBADIgBAFIAWAAIAAgEIAAgCQgBgEgEgCQgCgCgEAAQgCAAgDACg");
	this.shape_61.setTransform(172.1,7.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("AgSAdIAAg5IAUAAIAHACIAFADQACACABADQACADAAAEQAAAEgCACQgBADgCACIgFADQgDACgEgBIgQAAIAAAZgAgOABIAPAAQAHAAADgDQADgDAAgGQAAgGgDgEQgDgCgHAAIgPAAg");
	this.shape_62.setTransform(167.9,6.9);

	this.instance_3 = new lib._1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(134));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(84,143.6,255,394);
// library properties:
lib.properties = {
	id: 'E058F0E76C04D144A7AF46D0BA828A88',
	width: 200,
	height: 333,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/_1.jpg", id:"_1"}
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
an.compositions['E058F0E76C04D144A7AF46D0BA828A88'] = {
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