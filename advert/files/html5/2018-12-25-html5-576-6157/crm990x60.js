(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 990,
	height: 60,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"fon1.jpg", id:"fon1"},
		{src:"knopka.png", id:"knopka"},
		{src:"m1.png", id:"m1"},
		{src:"m2.png", id:"m2"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.fon1 = function() {
	this.initialize(img.fon1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,999,266);


(lib.knopka = function() {
	this.initialize(img.knopka);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,192,48);


(lib.m1 = function() {
	this.initialize(img.m1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,163);


(lib.m2 = function() {
	this.initialize(img.m2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,107,152);


(lib.url = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABHIAAhwIAAAAIgaANIgFgYIAkgSIAbAAIAACNg");
	this.shape.setTransform(-83.2,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggBGQgLgCgGgEIAGgaQAFADAKADQAIACALABQALAAAHgGQAGgFAAgIQAAgHgEgEQgEgFgHgCQgEgCgIAAIgNAAIAAgWIANAAIAMgCQADgCAEgEQAEgDAAgGQAAgHgFgDQgFgFgJAAQgJABgIACIgMAFIgHgXQAGgFAMgDQALgDAPgBQANABALAEQAKAFAFAIQAGAJAAAJQAAALgHAKQgGAIgNAEIAAABQAIACAIACQAGAFAEAHQAEAHABAKQAAAMgHAKQgHAKgOAFQgNAHgQAAQgNgBgMgDg");
	this.shape_1.setTransform(-94.6,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbALIAAgVIA3AAIAAAVg");
	this.shape_2.setTransform(-104.1,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAHBHIAAgiIg+AAIAAgWIA2hVIAnAAIAABSIASAAIAAAZIgSAAIAAAigAABgfIgGANIgSAeIAAAAIAeAAIAAgeIABgNIAAgNIgBAAIgGANg");
	this.shape_3.setTransform(-113.7,14.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgdBDQgMgGgFgIQgHgKAAgKQAAgNAIgIQAGgJAMgEQgKgGgGgHQgEgJAAgJQgBgMAHgJQAGgJAMgGQAMgEAMgBQAQABALAFQALAGAEAIQAFAJAAAJQAAAIgFAJQgFAJgLAFIAAAAQAHADAGADQAGAFAEAGQADAIAAAJQABANgIAKQgGAJgNAGQgMAFgPABQgRgBgMgGgAgOARQgEAGAAAHQgBAFADAFQADAFAEACQAFADAEAAQAJAAAFgFQAGgFgBgIQABgJgHgFQgGgHgIgCQgIACgFAGgAgLgsQgFAEAAAHQABAHAFAFQAGAEAGADQAGgBAEgGQAEgEAAgHQAAgHgDgFQgFgFgIgBQgIAAgDAGg");
	this.shape_4.setTransform(-125.9,14.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbALIAAgVIA3AAIAAAVg");
	this.shape_5.setTransform(-135.6,15.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AghBJIgGAAIAAgaIAGAAIAIAAQAIAAAIgCQAGgDAEgEQAIgEAEgHQAEgHACgIIAAAAQgFAFgHACQgHADgIAAQgMAAgKgFQgKgGgGgKQgGgIgBgOQABgOAHgLQAGgMAMgHQANgHAOAAQASAAAMAIQAMAJAFAOQAHANgBARQAAAVgGAQQgHARgMAKQgJAKgOAFQgMAFgRAAIgEAAIgFAAgAgOgpQgFAHAAALQAAAHACAFQADAFAEADQAFADAFAAQAGAAAFgCQAEgDADgEIABgEIAAgFQAAgHgCgHQgBgHgGgEQgEgFgGAAQgIAAgGAHg");
	this.shape_6.setTransform(-145.2,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAHBHIAAgiIg9AAIAAgWIA2hVIAmAAIAABSIARAAIAAAZIgRAAIAAAigAAAgfIgFANIgSAeIgBAAIAfAAIAAgeIAAgNIABgNIgBAAIgHANg");
	this.shape_7.setTransform(-157.4,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgdBAQgMgLgGgQQgFgRAAgUQAAgTAFgRQAGgRAMgJQAMgKARgBQAOABAKAFQAKAHAHAKQAGAKADANQADANAAAOQAAAVgGARQgGARgMAJQgMAJgRABQgRgBgMgJgAgNgjQgGAMAAAXQAAAYAGAMQAFAMAIAAQAJAAAGgMQAFgNAAgXQAAgXgFgLQgGgNgJAAQgIAAgFAMg");
	this.shape_8.setTransform(-169.6,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgbALIAAgVIA3AAIAAAVg");
	this.shape_9.setTransform(-179.3,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgxBIIAAgUIASgQQAQgOAKgLQAIgLAGgGQAFgJAAgIQAAgJgGgGQgFgGgLAAQgJAAgIAEIgNAHIgKgXQAIgHANgEQAMgEAOAAQAOAAAMAGQALAGAFAKQAGAKAAANQAAAMgFAKQgFAJgJAJQgIAKgLAJIgLALIAAABIA0AAIAAAbg");
	this.shape_10.setTransform(-189,14);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgxBIIAAgUIASgQQAQgOAKgLQAIgLAGgGQAFgJAAgIQAAgJgGgGQgFgGgLAAQgJAAgIAEIgNAHIgKgXQAIgHANgEQAMgEAOAAQAOAAAMAGQALAGAFAKQAGAKAAANQAAAMgFAKQgFAJgJAJQgIAKgLAJIgLALIAAABIA0AAIAAAbg");
	this.shape_11.setTransform(-201.2,14);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AggBJIgHAAIAAgaIAGAAIAIAAQAIAAAHgCQAHgDAFgEQAGgEAFgHQAFgHACgIIgBAAQgFAFgHACQgHADgIAAQgMAAgKgFQgKgGgGgKQgGgIgBgOQABgOAGgLQAHgMAMgHQAMgHAPAAQASAAAMAIQAMAJAGAOQAFANAAARQABAVgHAQQgGARgMAKQgLAKgOAFQgMAFgQAAIgEAAIgEAAgAgNgpQgGAHAAALQAAAHACAFQACAFAFADQAEADAGAAQAGAAAFgCQAFgDACgEIABgEIABgFQAAgHgDgHQgCgHgEgEQgFgFgGAAQgJAAgEAHg");
	this.shape_12.setTransform(-213.3,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgbALIAAgVIA3AAIAAAVg");
	this.shape_13.setTransform(-223,15.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgeBDQgLgGgGgIQgFgKAAgKQAAgNAGgIQAHgJAMgEQgLgGgEgHQgGgJAAgJQABgMAGgJQAGgJAMgGQALgEANgBQAQABALAFQALAGAEAIQAFAJAAAJQAAAIgFAJQgFAJgLAFIAAAAQAIADAFADQAGAFAEAGQAEAIAAAJQgBANgGAKQgHAJgMAGQgMAFgQABQgRgBgNgGgAgOARQgFAGAAAHQAAAFADAFQADAFAEACQAFADAEAAQAJAAAFgFQAFgFABgIQgBgJgGgFQgGgHgIgCQgIACgFAGgAgMgsQgEAEAAAHQAAAHAGAFQAGAEAGADQAGgBAEgGQAFgEgBgHQAAgHgEgFQgDgFgJgBQgIAAgEAGg");
	this.shape_14.setTransform(-232.6,14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNAxQgFgFAAgJQAAgJAFgFQAGgGAHAAQAIAAAGAFQAFAGAAAJQAAAJgFAFQgGAGgIAAQgHAAgGgGgAgNgTQgFgGAAgJQAAgJAFgFQAGgGAHAAQAIAAAGAGQAFAFAAAJQAAAJgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_15.setTransform(-245.8,15.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag0AcIAHgBIAFgEQAEgFACgIIABgTIAAgsIBWAAIAABpIgiAAIAAhQIgVAAIAAAUQAAASgDANQgDAOgJAHQgFAFgHADQgIACgLABg");
	this.shape_16.setTransform(-255.5,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgjApQgOgOAAgaQAAgIACgLQAEgKAGgIQAHgJAKgEQALgFAMAAQARAAALAIQAKAHAFANQAEALAAAOIAAAGIAAAFIhEAAQABAIAEAEQAEAEAHACQAFADAIAAQAIAAAHgCIAPgDIADAXQgHADgLACQgJABgMAAQgZAAgPgOgAAUgKIgCgJQgCgGgDgDQgFgEgIAAQgEAAgFAEQgEADgDAFIgCAKIAmAAIAAAAg");
	this.shape_17.setTransform(-266.5,15.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgQA1IAAhPIgeAAIAAgaIBeAAIAAAaIggAAIAABPg");
	this.shape_18.setTransform(-277.4,15.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAHBHIAAgiIg9AAIAAgWIA2hVIAmAAIAABSIARAAIAAAZIgRAAIAAAigAAAgfIgFANIgSAdIgBABIAfAAIAAgeIABgNIAAgNIgBAAIgHANg");
	this.shape_19.setTransform(192.2,-12.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdA/QgMgKgGgRQgFgQAAgUQAAgTAFgRQAGgQAMgKQAMgKARAAQAOAAAKAFQAKAGAHAKQAGALADANQADANAAAOQAAAVgGAQQgGARgMAKQgMAJgRAAQgRAAgMgKgAgNgjQgGAMAAAXQAAAYAGAMQAFAMAIAAQAJAAAGgMQAFgMAAgYQAAgWgFgNQgGgMgJAAQgIAAgFAMg");
	this.shape_20.setTransform(180,-12.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgcBBQgNgJgGgOQgGgOAAgRQAAgTAHgQQAHgQALgLQALgKAOgFQAMgFAQgBIAIAAIAGAAIAAAaIgGAAIgHAAQgPABgKAFQgHAFgGAHQgFAIgCAIIABAAQAFgFAIgDQAFgDAKAAQAMAAAKAFQAKAGAGAKQAGAJAAAOQAAAPgGALQgHAMgMAHQgMAHgPAAQgRAAgNgIgAgLACQgFAEgCAFIgCAEIAAAFQAAAHADAHQADAGAFAEQAFAEAFABQAJgBAFgHQAFgHABgLQAAgGgDgGQgCgGgFgDQgFgCgGAAQgGAAgFACg");
	this.shape_21.setTransform(167.8,-12.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHgBQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIABQgHgBgGgFg");
	this.shape_22.setTransform(154.6,-6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgOBjIAAgqQgPgBgNgGQgNgHgHgMQgIgMAAgRQAAgPAIgMQAHgMANgHQANgGAPgCIAAguIAdAAIAAAuQAPABANAHQANAHAIAMQAHAMAAAPQAAARgIAMQgIAMgMAHQgNAGgPABIAAAqgAAPAjQAMgDAGgJQAFgJAAgNQAAgKgFgJQgGgJgMgDgAgggSQgFAJAAALQAAANAFAJQAGAIAMADIAAhCQgMAEgGAJg");
	this.shape_23.setTransform(143.6,-10.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_24.setTransform(129.3,-10.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgOABIAHgeIAggCQgGARgHAOQgHARgGANIgXACIAKgfg");
	this.shape_25.setTransform(115.3,-5.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgdA/QgMgKgGgRQgFgQAAgUQAAgTAFgRQAGgQAMgKQAMgKARAAQAOAAAKAFQAKAGAHAKQAGALADANQADANAAAOQAAAVgGAQQgGARgMAKQgMAJgRAAQgRAAgMgKgAgNgjQgGAMAAAXQAAAYAGAMQAFAMAIAAQAJAAAGgMQAFgMAAgYQAAgWgFgNQgGgMgJAAQgIAAgFAMg");
	this.shape_26.setTransform(106.7,-12.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgcBBQgNgJgGgOQgGgOAAgRQAAgTAHgQQAHgQALgLQALgKAOgFQAMgFAQgBIAIAAIAGAAIAAAaIgGAAIgHAAQgPABgKAFQgHAFgGAHQgFAIgCAIIABAAQAFgFAIgDQAFgDAKAAQAMAAAKAFQAKAGAGAKQAGAJAAAOQAAAPgGALQgHAMgMAHQgMAHgPAAQgRAAgNgIgAgLACQgFAEgCAFIgCAEIAAAFQAAAHADAHQADAGAFAEQAFAEAFABQAJgBAFgHQAFgHABgLQAAgGgDgGQgCgGgFgDQgFgCgGAAQgGAAgFACg");
	this.shape_27.setTransform(94.5,-12.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAABHIAAhwIAAAAIgaAOIgFgaIAkgRIAbAAIAACNg");
	this.shape_28.setTransform(81.3,-12.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOABIAHgeIAggCQgGARgHAOQgHARgGANIgXACIAKgfg");
	this.shape_29.setTransform(68.6,-5.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAVA1IAAghIAAgOIAAgMIABgSIgBAAIgFAPIgFAMIgLAYIgKAaIgpAAIAAhpIAgAAIAAAhIgBAVIgBAUIABABIAHgRIAGgMIASguIApAAIAABpg");
	this.shape_30.setTransform(59.5,-10.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAQA1IgEgJIgFgOQgEgKgDgFQgGgEgIAAIgDAAIAAAqIghAAIAAhpIAhAAIAAArIAEAAIAZgrIAnAAIgoAuQAKACAGAGQAHAIAEAMIAGAPIAHAQg");
	this.shape_31.setTransform(47.8,-10.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAVA1IAAghIAAgOIAAgMIABgSIgBAAIgFAPIgFAMIgLAYIgKAaIgpAAIAAhpIAgAAIAAAhIgBAVIgBAUIABABIAHgRIAGgMIASguIApAAIAABpg");
	this.shape_32.setTransform(34.7,-10.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag0AcIAHgCIAFgDQAEgFACgIIABgTIAAgtIBWAAIAABqIgiAAIAAhQIgVAAIAAAUQAAARgDAOQgDANgJAIQgFAFgIADQgHADgLgBg");
	this.shape_33.setTransform(21.5,-10.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdBHQgNgKgGgPQgGgQAAgVQAAgTAGgQQAFgRAMgLQAIgJALgFQALgEANgCIALgCIALgBIAKgCIgCAbIgMACIgNABQgMABgGAEQgJADgFAHQgFAFgDAHQgDAIgBAGIABAAQAFgIAJgGQAKgGAKAAQAOAAALAGQALAHAGAMQAFAKAAAQQAAASgHANQgHANgMAGQgNAHgQAAQgRAAgMgJgAgIgDQgEADgCACQgDAEgCAFQgBAFAAAHQAAAHACAIQACAIAFAFQAFAFAGAAQAIAAAEgEQAFgGACgHQACgGAAgIQAAgIgCgHQgCgHgFgDQgEgEgIgBQgEAAgEACg");
	this.shape_34.setTransform(9.8,-12.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgtAxIAHgCIAIgDIAIgGIAGgIIACgCIAAgCIAAgDIgBgDIgohhIAlAAIAQA2IACAJIACAKIAAAAIACgKIADgJIANg2IAkAAIgZBIIgOAhQgGANgGAIQgFAJgFAFQgIAIgJADQgJADgGAAg");
	this.shape_35.setTransform(-2.2,-7.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAQA1IAAhPIgfAAIAABPIgiAAIAAhpIBjAAIAABpg");
	this.shape_36.setTransform(-14.3,-10.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAxQgMgHgHgMQgHgNAAgQQAAgOAHgNQAHgNANgIQAOgHASgBIAOABIAMAEIgGAYIgHgCIgLgBQgOAAgFAJQgIAIAAAMQAAAJAEAHQAEAGAFAEQAGADAIABIALgBIAJgDIADAYIgMAEQgIACgJAAQgQAAgNgHg");
	this.shape_37.setTransform(-25.4,-10.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgjApQgOgPAAgZQAAgJADgKQADgJAGgJQAHgIALgFQAKgFAMgBQARABALAHQAKAIAFAMQAEANABANIgBAGIAAAGIhEAAQABAGAEAFQAEAFAHACQAFACAHAAQAJAAAHgBIAPgEIADAXQgHAEgLABQgKACgKAAQgaAAgPgPgAATgLIgBgJQgBgFgEgEQgFgDgIAAQgEAAgFADQgEAEgDAFIgCAJIAlAAIAAAAg");
	this.shape_38.setTransform(-36.2,-10.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag0BKIAAiQIATgCIAbgBQANAAALADQAMADAHAGQAHAGAEAIQAFAJAAALQAAALgEAJQgDAHgHAGQgJAIgMAEQgMAEgNAAIgGAAIgGgBIAAA1gAgTguIAAArIAFABIAHAAQALAAAIgGQAHgHABgLQgBgKgGgGQgHgFgLAAIgIAAIgGABg");
	this.shape_39.setTransform(-48.1,-12.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHgBQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIABQgHgBgGgFg");
	this.shape_40.setTransform(-61.9,-6.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag0AcIAHgCIAFgDQAEgFACgIIABgTIAAgtIBWAAIAABqIgiAAIAAhQIgVAAIAAAUQAAARgDAOQgDANgJAIQgFAFgIADQgHADgLgBg");
	this.shape_41.setTransform(-71.6,-10.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgsAxIAGgCIAIgDIAIgGIAGgIIACgCIAAgCIAAgDIgBgDIgohhIAlAAIAQA2IACAJIACAKIAAAAIACgKIADgJIANg2IAkAAIgZBIIgOAhQgGANgGAIQgFAJgFAFQgJAIgIADQgJADgGAAg");
	this.shape_42.setTransform(-82.6,-7.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgOABIAHgeIAggCQgGARgHAOQgHARgGANIgXACIAKgfg");
	this.shape_43.setTransform(-96.1,-5.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AggA2IgSgCIAAhpIAiAAIAAAgIAIgBIAIAAQAMAAAMADQAMADAHAJQAIAHAAANQAAAKgFAHQgEAHgGAFQgHAEgJADIgSAEIgQABIgSAAgAgLAAIgFAAIAAAeIAFABIAGAAQAFAAAFgBQAFgCAEgEQADgDAAgHQAAgGgDgEQgFgDgGgBQgDAAgGAAIgFAAg");
	this.shape_44.setTransform(-104.4,-10.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AARA1IAAgqIggAAIAAAqIgiAAIAAhpIAiAAIAAAnIAgAAIAAgnIAhAAIAABpg");
	this.shape_45.setTransform(-117.2,-10.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgiApQgPgPgBgZQAAgJAEgKQADgJAHgJQAGgIALgFQAJgFAMgBQASABAKAHQALAIAFAMQAFANAAANIgBAGIgBAGIhDAAQAAAGAFAFQAEAFAHACQAFACAHAAQAJAAAIgBIANgEIAFAXQgJAEgJABQgLACgKAAQgaAAgOgPgAATgLIgBgJQgBgFgFgEQgEgDgIAAQgEAAgFADQgEAEgDAFIgCAJIAlAAIAAAAg");
	this.shape_46.setTransform(-129.2,-10.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAmA1IgCgrIAAgKIgBgMIAAgNIgBAAIgDALIgDAKIgEAMIgOAsIgWAAIgOgrIgCgKIgEgMIgCgMIgBAAIgBAVIAAAPIgCAqIgeAAIAHhpIArAAIAMAoIAEAMIACANIAAAAIAEgNIAEgOIAMgmIAqAAIAHBpg");
	this.shape_47.setTransform(-143,-10.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAAAyQgLgFgHgKQgHgLgCgOIgNAAIAAArIghAAIAAhpIAhAAIAAAoIAOAAQAEgUANgLQAMgMAUAAQAPAAAMAHQALAHAHANQAGAMAAAQQAAARgHANQgIANgMAGQgLAHgOAAQgOAAgIgGgAALgaQgEAEgCAIQgCAHAAAHQAAAIACAIQACAHAEAEQAFAFAGAAQAGAAAFgFQAEgEACgHQACgHAAgJQAAgHgCgHQgCgIgEgEQgEgFgHAAQgHAAgEAFg");
	this.shape_48.setTransform(-159.1,-10.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgQBJIAAh2IgoAAIAAgcIBxAAIAAAcIgpAAIAAB2g");
	this.shape_49.setTransform(-173.8,-12.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHgBQAIAAAGAGQAFAFAAAIQAAAIgFAGQgGAFgIABQgHgBgGgFg");
	this.shape_50.setTransform(-187,-6.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgkA1IAAhpIBJAAIAAAaIgoAAIAABPg");
	this.shape_51.setTransform(-194.1,-10.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgOABIAHgeIAggCQgGARgHAOQgHARgGANIgXACIAKgfg");
	this.shape_52.setTransform(-206.8,-5.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AghBGQgKgDgGgDIAGgZIAOAFQAIACAKAAQAHAAAFgCQAGgDAFgEQAEgFAAgIQAAgLgJgGQgIgGgVgBIgLABIgIABIAJhJIBMAAIAAAbIg1AAIgDAWIAEAAIAFAAQAJAAAJACQAKADAIAFQAIAGAFAHQAEAIAAANQAAANgHAMQgHALgOAHQgOAHgRAAQgNAAgLgCg");
	this.shape_53.setTransform(-215.6,-12);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgfBGQgMgDgGgEIAGgZQAFADAJADQAKADAKAAQALAAAGgFQAHgGAAgIQAAgHgEgEQgEgFgHgDQgEgBgHAAIgPAAIAAgXIAOAAIALgBQAEgCAEgEQAEgDAAgGQAAgGgFgFQgFgEgJAAQgJAAgIADIgNAGIgHgZQAHgEAMgDQAMgDAOAAQANAAAKAEQALAGAGAIQAFAHAAALQAAAKgGAJQgHAJgNAEIAAABQAJABAGADQAIAFADAHQAFAIAAAJQgBANgGAJQgIAKgMAGQgNAFgRAAQgOABgKgEg");
	this.shape_54.setTransform(-227.8,-12.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgdA/QgMgKgGgRQgFgQAAgUQAAgTAFgRQAGgQAMgKQAMgKARAAQAOAAAKAFQAKAGAHAKQAGALADANQADANAAAOQAAAVgGAQQgGARgMAKQgMAJgRAAQgRAAgMgKgAgNgjQgGAMAAAXQAAAYAGAMQAFAMAIAAQAJAAAGgMQAFgMAAgYQAAgWgFgNQgGgMgJAAQgIAAgFAMg");
	this.shape_55.setTransform(-239.8,-12.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghBGQgKgDgGgDIAGgZIAOAFQAIACAKAAQAHAAAFgCQAGgDAFgEQAEgFAAgIQAAgLgJgGQgIgGgVgBIgLABIgIABIAJhJIBMAAIAAAbIg1AAIgDAWIAEAAIAFAAQAJAAAJACQAKADAIAFQAIAGAFAHQAEAIAAANQAAANgHAMQgHALgOAHQgOAHgRAAQgNAAgLgCg");
	this.shape_56.setTransform(-252.2,-12);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgxBIIAAgUIASgQQAQgOAKgLQAIgLAGgGQAFgJAAgIQAAgJgGgGQgFgGgLAAQgJAAgIAEIgNAHIgKgXQAIgHANgEQAMgEAOAAQAOAAAMAGQALAGAFAKQAGAKAAANQAAAMgFAKQgFAJgJAJQgIAKgLAJIgLALIAAABIA0AAIAAAbg");
	this.shape_57.setTransform(-264.3,-12.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgcBBQgNgJgGgOQgGgOAAgRQAAgTAHgQQAHgQALgLQALgKAOgFQAMgFAQgBIAIAAIAGAAIAAAaIgGAAIgHAAQgPABgKAFQgHAFgGAHQgFAIgCAIIABAAQAFgFAIgDQAFgDAKAAQAMAAAKAFQAKAGAGAKQAGAJAAAOQAAAPgGALQgHAMgMAHQgMAHgPAAQgRAAgNgIgAgLACQgFAEgCAFIgCAEIAAAFQAAAHADAHQADAGAFAEQAFAEAFABQAJgBAFgHQAFgHABgLQAAgGgDgGQgCgGgFgDQgFgCgGAAQgGAAgFACg");
	this.shape_58.setTransform(-276.4,-12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.5,-28.7,569.2,57.5);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAhApIgCgoIgBgMIgBgPIAAAAIgCAHIgDAJIgEAKIgQAoIgJAAIgOgoIgDgHIgDgKIgDgJIAAAAIgBAPIgBANIgCAnIgOAAIAHhRIASAAIAPAoIACAHIADAIIABAIIAAAAIACgJIAEgKIADgIIAOgkIASAAIAGBRg");
	this.shape.setTransform(291.3,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAUApIAAgiIgLAAIgIABIgEADIgFAHIgDAIIgDAIIgCAEIgCADIgQAAIADgEIACgFIAEgJIADgJIAGgHIAEgDIAFgCIAAAAQgFgBgFgBQgFgBgDgFQgDgEAAgHQAAgGADgEQADgFAFgCQAFgDAHgCQAFgBAIAAIAOAAIANACIAABPgAgBgdQgFABgDAEQgEADAAAFQAAAFAEAEQADADAFABIAIACIAIAAIAFAAIAAgcIgGgBIgHAAIgCAAIgGABg");
	this.shape_1.setTransform(281.1,14.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_2.setTransform(272.7,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_3.setTransform(264.5,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_4.setTransform(256.5,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_5.setTransform(247,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AATApIAAhFIglAAIAABFIgOAAIAAhRIBBAAIAABRg");
	this.shape_6.setTransform(238.6,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_7.setTransform(225.7,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AATApIAAhFIglAAIAABFIgOAAIAAhRIBBAAIAABRg");
	this.shape_8.setTransform(216.4,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_9.setTransform(204.2,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_10.setTransform(195,15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_11.setTransform(185.8,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_12.setTransform(176.4,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_13.setTransform(168.5,15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_14.setTransform(159.3,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_15.setTransform(151.1,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_16.setTransform(140.5,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_17.setTransform(132.8,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AARApIAAghIgLAFIgKABQgIAAgGgCQgGgDgDgGQgEgEAAgJIAAgeIAPAAIAAAcQAAAIAEAEQAEADAIAAQAEAAAFgBQAFgCADAAIAAgoIAPAAIAABRg");
	this.shape_18.setTransform(124.1,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghAvIAHgDQADgBADgDIAHgHQADgEADgGIABgCIAAgCIAAgBIgBgDIgehJIAQAAIASAwIADAJIAAAGIABAAIACgGIADgJIAQgwIAQAAIgWA6IgKAWIgHARQgFAHgFAEQgFAEgFADIgIADg");
	this.shape_19.setTransform(115.8,16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgIAIIAEgMIADgOIAOgCIgFAQIgGANIgDALIgLABIAEgNg");
	this.shape_20.setTransform(106.3,19.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAGgBIAHAAQAJAAAGACQAJADAEAGQAFAEABALQAAAGgDAFQgCAEgEAEQgEADgGACQgDADgHAAIgLABIgMAAgAgdgBIAAAfIAGAAIAFAAQAGAAAGgBQAFgCACgEQADgEAAgGQAAgHgDgEQgCgCgFgBQgGgCgGABIgFAAIgGABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_21.setTransform(99.1,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAdA2IgBgaIg3AAIgBAaIgMAAIAAglIAHAAQAFgIADgJQACgGACgIQABgIAAgJIAAgWIA0AAIAABGIAJAAIgBAlgAgHgcIgBAQQgBAIgDAFIgCAIIgEAHIAkAAIAAg5IgZAAg");
	this.shape_22.setTransform(88.7,16.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_23.setTransform(80.1,15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgjAeIADgCIAFgCQAFgEABgJQACgJAAgLIAAghIA4AAIAABQIgQAAIAAhEIgaAAIAAAVQABAPgDAMQgDALgIAFIgGAEIgKABg");
	this.shape_24.setTransform(71.4,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgEgEgLAAIgDAAIAAAkIgPAAIAAhRIAPAAIAAAkIAEAAIAdgkIASAAIgiAmQAIABAHAEQAGAHAFALIADAJIAGALg");
	this.shape_25.setTransform(64.1,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMAlQgJgFgFgKQgFgJAAgMQAAgLAFgLQAGgJAJgFQALgHALABQAHgBAFACIAJADIgDAMIgHgEIgLgBQgJABgFAEQgGAEgDAHQgEAHAAAHQAAAJAEAHQAEAHAGAEQAEADAJAAIALgBIAHgCIADALIgKACIgOACQgKAAgKgFg");
	this.shape_26.setTransform(55.8,15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgIAIIAEgMIADgOIAOgCIgFAQIgGANIgDALIgLABIAEgNg");
	this.shape_27.setTransform(46.4,19.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_28.setTransform(40.1,15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgFgEgKAAIgDAAIAAAkIgPAAIAAhRIAPAAIAAAkIAEAAIAdgkIASAAIgiAmQAIABAGAEQAHAHAFALIADAJIAGALg");
	this.shape_29.setTransform(31.9,15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_30.setTransform(23.2,15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_31.setTransform(14.4,15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_32.setTransform(7,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgMAlQgJgFgFgKQgFgJAAgMQAAgLAGgLQAFgJAJgFQALgHALABQAHgBAFACIAJADIgDAMIgIgEIgKgBQgKABgEAEQgHAEgDAHQgDAHAAAHQAAAJAEAHQADAHAHAEQAEADAIAAIALgBIAIgCIACALIgJACIgOACQgLAAgJgFg");
	this.shape_33.setTransform(-0.2,15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_34.setTransform(-8.8,15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AATApIAAhFIglAAIAABFIgOAAIAAhRIBBAAIAABRg");
	this.shape_35.setTransform(-18,15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgIAIIAEgMIADgOIAOgCIgFAQIgFANIgEALIgLABIAEgNg");
	this.shape_36.setTransform(-28.1,19.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_37.setTransform(-34.4,15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_38.setTransform(-43.8,15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAZA2IgBgaIg9AAIAAhRIAQAAIAABFIAjAAIAAhFIAPAAIAABGIAIAAIgBAlg");
	this.shape_39.setTransform(-52.9,16.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_40.setTransform(-62.2,15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgFgEgKAAIgDAAIAAAkIgOAAIAAhRIAOAAIAAAkIAEAAIAcgkIATAAIgiAmQAIABAGAEQAHAHAFALIAEAJIAEALg");
	this.shape_41.setTransform(-69.6,15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_42.setTransform(-78.9,15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGBMIAAgfQgLgBgJgFQgKgGgFgIQgGgKABgNQgBgLAGgJQAGgKAJgFQAJgEALgCIAAglIANAAIAAAlQAMABAJAFQAJAGAGAJQAEAJAAAKQABAOgGAKQgFAIgKAFQgJAGgLABIAAAfgAAHAjQAHgCAGgFQAHgEACgHQAEgHAAgJQAAgKgHgJQgHgIgMgCgAgTgXQgHAFgCAGQgEAIAAAGQAAAIAEAIQACAGAHAFQAGAEAHACIAAg/QgHAAgGAFg");
	this.shape_43.setTransform(-89.1,14.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_44.setTransform(-99.2,15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAZA2IgBgaIg9AAIAAhRIAPAAIAABFIAkAAIAAhFIAPAAIAABGIAJAAIgBAlg");
	this.shape_45.setTransform(-108.3,16.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_46.setTransform(-117.5,15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AATApIAAhFIglAAIAABFIgOAAIAAhRIBBAAIAABRg");
	this.shape_47.setTransform(-126.4,15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgMAlQgJgFgFgKQgFgJAAgMQAAgLAFgLQAGgJAJgFQALgHALABQAHgBAFACIAJADIgDAMIgHgEIgLgBQgKABgEAEQgGAEgDAHQgEAHAAAHQAAAJAEAHQAEAHAGAEQAFADAIAAIALgBIAHgCIADALIgJACIgPACQgKAAgKgFg");
	this.shape_48.setTransform(-134.7,15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgIAIIAEgMIADgOIAOgCIgFAQIgGANIgDALIgLABIAEgNg");
	this.shape_49.setTransform(-144.1,19.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAGgBIAHAAQAJAAAGACQAJADAFAGQAEAEABALQgBAGgCAFQgCAEgEAEQgFADgFACQgEADgGAAIgLABIgMAAgAgdgBIAAAfIAGAAIAFAAQAGAAAFgBQAGgCABgEQAEgEAAgGQAAgHgEgEQgBgCgGgBQgEgCgHABIgFAAIgGABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_50.setTransform(-151.3,15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRApIgNgFIAEgKIALAEQAFABAGAAQAIAAAFgEQAFgEAAgGQAAgFgDgDQgDgDgGgCIgKgBIgHAAIAAgIIAHAAQAIAAAFgEQAGgEAAgFQAAgGgEgDQgFgDgFAAIgKABIgKAEIgDgJQAGgEAHgBQAHgCAGAAQAFAAAHACQAGACAEAFQAFAEAAAIQAAAFgDAEQgDAEgEADIgJADQAGABAGABQAFACADAEQADAFAAAGQAAAJgGAFQgFAGgIACQgIACgHAAQgHAAgHgBg");
	this.shape_51.setTransform(-160.8,15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_52.setTransform(-169,15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_53.setTransform(-178.3,15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgYApIAAhRIAxAAIAAAMIgiAAIAABFg");
	this.shape_54.setTransform(-185.8,15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_55.setTransform(-194.2,15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_56.setTransform(-203.4,16.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AATApIAAhFIgkAAIAABFIgPAAIAAhRIBBAAIAABRg");
	this.shape_57.setTransform(-213.1,15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgIAIIAEgMIACgOIAPgCIgFAQIgFANIgEALIgLABIAEgNg");
	this.shape_58.setTransform(-223.2,19.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAFgBIAIAAQAJAAAGACQAJADAEAGQAGAEAAALQAAAGgCAFQgDAEgEAEQgFADgFACQgEADgFAAIgMABIgMAAgAgcgBIAAAfIAEAAIAGAAQAGAAAFgBQAGgCABgEQAEgEAAgGQAAgHgEgEQgBgCgGgBQgEgCgGABIgHAAIgEABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_59.setTransform(-230.5,15);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_60.setTransform(-239.7,15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_61.setTransform(-247.4,15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AARApIAAghIgLAFIgKABQgIAAgGgCQgGgDgDgGQgEgEAAgJIAAgeIAPAAIAAAcQAAAIAEAEQAEADAIAAQAEAAAFgBQAFgCADAAIAAgoIAPAAIAABRg");
	this.shape_62.setTransform(-256.1,15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_63.setTransform(-263.9,15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_64.setTransform(-272.1,15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_65.setTransform(-285,15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAFgBIAIAAQAJAAAGACQAJADAEAGQAGAEAAALQgBAGgBAFQgDAEgEAEQgEADgGACQgDADgGAAIgMABIgMAAgAgdgBIAAAfIAFAAIAGAAQAGAAAGgBQAFgCACgEQADgEAAgGQAAgHgDgEQgCgCgFgBQgFgCgGABIgHAAIgFABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_66.setTransform(-299,15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_67.setTransform(-309.3,15);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_68.setTransform(-318.3,15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgjAeIADgCIAEgCQAGgEABgJQACgJAAgLIAAghIA4AAIAABQIgQAAIAAhEIgaAAIAAAVQAAAPgCAMQgDALgIAFIgGAEIgKABg");
	this.shape_69.setTransform(-327,15);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAaA5IAAhkIgzAAIAABkIgPAAIAAhxIBRAAIAABxg");
	this.shape_70.setTransform(-336.1,13.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgPA1IAAhPIgfAAIAAgaIBdAAIAAAaIgfAAIAABPg");
	this.shape_71.setTransform(92.6,-7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AgfAzQgJgFgDgHQgFgIAAgIQAAgOAJgJQAHgIAOgEQAPgFAQAAIAAgBIgBgGQgBgDgFgDQgEgCgGAAQgIAAgJADQgHACgGADIgGgVQAGgEALgDQAKgDANAAQARAAALAHQALAGADAKQAFALAAANIAAAjIABAPIABALIgeAAIgDgLIAAAAQgGAHgHADQgHAEgJAAQgLAAgHgFgAAAAEQgGACgFADQgDAEAAAGQgBAHAEADQAEADAFAAQAFAAAEgDQAFgEACgFIAAgDIAAgDIAAgMQgIAAgGACg");
	this.shape_72.setTransform(81.5,-7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgPA1IAAhPIggAAIAAgaIBeAAIAAAaIgfAAIAABPg");
	this.shape_73.setTransform(70.9,-7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AggA1IgSgBIAAhpIAiAAIAAAgIAIgBIAIAAQAMgBALAEQAMADAIAIQAIAIgBANQAAAKgDAHQgEAHgHAFQgHAEgJADIgSAEIgQABIgSgBgAgLAAIgFAAIAAAfIAEAAIAHAAQAFAAAEgBQAGgCADgEQAEgDABgHQgBgGgEgDQgDgEgHgBIgIAAIgGAAg");
	this.shape_74.setTransform(60,-6.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("Ag0AcIAHgBIAFgEQAEgFACgIIABgTIAAgsIBWAAIAABpIghAAIAAhQIgWAAIAAAUQABASgEANQgDAOgJAHQgFAFgIADQgHACgLAAg");
	this.shape_75.setTransform(47,-6.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgtAxIAHgBIAIgEIAIgGIAGgHIACgDIAAgDIAAgCIgBgDIgohgIAlAAIAQA1IACAKIACAKIAAAAIADgKIACgKIANg1IAkAAIgZBHIgOAhQgHANgFAIQgFAJgFAFQgIAIgJADQgIADgHAAg");
	this.shape_76.setTransform(36,-4.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgbA1QgKgDgJgFIAHgVQAFADAJACIARADQAIAAAFgEQAFgDAAgFQAAgGgGgDQgEgDgLAAIgQAAIAAgSIAQAAQAKAAADgDQAFgDAAgFQAAgFgFgDQgCgCgJgBQgHAAgIACIgNAGIgGgTQAKgGALgDQAMgCAKAAQAJgBAKADQAKADAGAGQAHAGAAALQAAAHgDAFQgEAFgFADQgFADgGABIAAABQAHABAGABQAHACAEAGQAEAFAAAIQAAAKgFAGQgFAHgIAEQgIADgKACIgPABQgMAAgLgCg");
	this.shape_77.setTransform(24.7,-7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIADgLQAEgKAHgIQAGgJAKgEQAKgFAMgBQASABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAEADAIAAQAJAAAIgBIANgEIAFAXQgIADgKACQgLABgLAAQgZAAgOgOgAAUgKIgCgJQgBgFgFgEQgEgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAmAAIAAAAg");
	this.shape_78.setTransform(13.8,-7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("Ag1BMIAAhxIgBgTIAAgRIAdAAIABAPIABAAQAGgIAJgFQAIgEALAAQAMAAAKAGQAKAHAGAMQAGAMAAASQAAATgHALQgHANgLAGQgLAGgMAAQgIAAgIgDQgHgEgDgFIgBAAIAAA1gAgMgsQgFAEgCAIIgBADIAAADIAAAPIAAADIABAEQACAEAFAFQAFAEAHAAQAJAAAGgIQAGgGAAgOQAAgJgCgGQgDgHgFgEQgFgEgGAAQgGAAgGAFg");
	this.shape_79.setTransform(1.6,-4.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAUBLIAAggIABgPIAAgOIABgQIgBAAIgFANIgGAOIgKAYIgKAaIgpAAIAAhpIAgAAIAAAfIAAAXIgCAVIABAAIAGgRIAHgOIASgsIApAAIAABpgAgWg0QgIgIAAgPIAVAAQAAAIADAEQADAEADAAQAEAAADgEQACgEABgIIAVAAQgBAQgJAIQgIAHgNABQgPAAgHgJg");
	this.shape_80.setTransform(-16.3,-9.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("Ag1A1IgSgBIAAhpIAiAAIAAAgIAHgBIAKAAQAMgBAJAEQALAEAHAIQAHAHABANQAAAKgEAIQgEAGgHAFQgLAHgLACQgMADgNAAIgSgBgAggAAIgFAAIAAAfIAEAAIAGAAIALgBQAFgCADgEQADgEAAgGQAAgGgDgDQgDgEgFgBQgEAAgGAAIgGAAgAAnA0IAAhpIAhAAIAABpg");
	this.shape_81.setTransform(-31.4,-6.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AARA1IAAgqIghAAIAAAqIghAAIAAhpIAhAAIAAAnIAhAAIAAgnIAhAAIAABpg");
	this.shape_82.setTransform(-46.3,-7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AggA1IgSgBIAAhpIAiAAIAAAgIAIgBIAIAAQAMgBAMAEQAMADAHAIQAIAIAAANQAAAKgFAHQgEAHgGAFQgHAEgJADIgSAEIgQABIgSgBgAgLAAIgFAAIAAAfIAFAAIAGAAQAFAAAFgBQAFgCAEgEQADgDAAgHQAAgGgDgDQgFgEgGgBIgJAAIgFAAg");
	this.shape_83.setTransform(-58.5,-6.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("Ag0AcIAHgBIAFgEQAEgFACgIIABgTIAAgsIBWAAIAABpIgiAAIAAhQIgVAAIAAAUQAAASgDANQgDAOgJAHQgFAFgHADQgIACgLAAg");
	this.shape_84.setTransform(-71.5,-6.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AggAzQgHgFgEgHQgEgIgBgIQABgOAHgJQAIgIAOgEQAOgFARAAIAAgBIgBgGQgBgDgEgDQgFgCgGAAQgJAAgIADQgHACgGADIgGgVQAGgEAKgDQALgDANAAQASAAAKAHQAKAGAFAKQAEALAAANIAAAjIAAAPIABALIgeAAIgBgLIgBAAQgFAHgJADQgGAEgJAAQgLAAgIgFgAAAAEQgHACgDADQgFAEAAAGQABAHADADQAEADAGAAQAEAAAFgDQAEgEACgFIABgDIAAgDIAAgMQgKAAgFACg");
	this.shape_85.setTransform(-82.9,-7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIAEgLQADgKAHgIQAGgJALgEQAJgFAMgBQASABAKAIQALAHAFAMQAFAMAAAOIgBAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAFADAHAAQAJAAAIgBIANgEIAFAXQgJADgJACQgLABgKAAQgaAAgOgOgAATgKIgBgJQgBgFgFgEQgEgEgIAAQgEAAgFAEQgEADgDAFIgCAKIAlAAIAAAAg");
	this.shape_86.setTransform(-94.1,-7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("Ag1BMIAAhxIgBgTIAAgRIAdAAIABAPIABAAQAGgIAJgFQAIgEALAAQAMAAAKAGQAKAHAGAMQAGAMAAASQAAATgHALQgHANgLAGQgLAGgMAAQgIAAgIgDQgHgEgDgFIgBAAIAAA1gAgMgsQgFAEgCAIIgBADIAAADIAAAPIAAADIABAEQACAEAFAFQAFAEAHAAQAJAAAGgIQAGgGAAgOQAAgJgCgGQgDgHgFgEQgFgEgGAAQgGAAgGAFg");
	this.shape_87.setTransform(-106.3,-4.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgOABIAHgeIAggCQgGARgHAOQgHARgGANIgXACIAKgfg");
	this.shape_88.setTransform(-120.8,-2.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("Ag0AcIAHgBIAFgEQAEgFACgIIABgTIAAgsIBWAAIAABpIgiAAIAAhQIgVAAIAAAUQAAASgDANQgDAOgJAHQgFAFgHADQgIACgLAAg");
	this.shape_89.setTransform(-129.9,-6.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AggAzQgHgFgFgHQgDgIAAgIQAAgOAHgJQAIgIAOgEQAOgFASAAIAAgBIgCgGQgBgDgEgDQgFgCgGAAQgJAAgHADQgJACgFADIgGgVQAGgEAKgDQALgDANAAQARAAALAHQAKAGAFAKQAEALAAANIAAAjIAAAPIABALIgeAAIgBgLIgBAAQgFAHgJADQgFAEgKAAQgLAAgIgFgAAAAEQgHACgDADQgFAEAAAGQABAHADADQAEADAGAAQAEAAAFgDQAEgEACgFIABgDIAAgDIAAgMQgKAAgFACg");
	this.shape_90.setTransform(-141.3,-7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AAQA1IAAgqIggAAIAAAqIghAAIAAhpIAhAAIAAAnIAgAAIAAgnIAiAAIAABpg");
	this.shape_91.setTransform(-153.2,-7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_92.setTransform(-166,-7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AAVA1IAAghIAAgOIABgMIABgSIgBAAIgGAPIgGAMIgKAYIgKAaIgpAAIAAhpIAgAAIAAAhIAAAVIgCAUIABABIAHgRIAFgMIATguIApAAIAABpg");
	this.shape_93.setTransform(-178.9,-7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AAdBHIgBgjIhTAAIAAhpIAiAAIAABQIAfAAIAAhQIAiAAIAABRIAMABIgCA6g");
	this.shape_94.setTransform(-191.5,-5.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AAQA1IgEgJIgFgOQgEgKgDgFQgGgEgIAAIgDAAIAAAqIghAAIAAhpIAhAAIAAArIAEAAIAZgrIAnAAIgoAuQAKACAGAGQAHAIAEAMIAGAPIAHAQg");
	this.shape_95.setTransform(-203.5,-7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AAQA1IAAgqIgfAAIAAAqIgiAAIAAhpIAiAAIAAAnIAfAAIAAgnIAiAAIAABpg");
	this.shape_96.setTransform(-216.4,-7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgtAxIAIgBIAHgEIAIgGIAGgHIABgDIAAgDIAAgCIgBgDIgnhgIAlAAIAQA1IACAKIABAKIABAAIADgKIACgKIANg1IAkAAIgZBHIgOAhQgGANgGAIQgFAJgFAFQgJAIgIADQgJADgGAAg");
	this.shape_97.setTransform(-228.4,-4.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgOBjIAAgqQgPgBgNgGQgNgHgHgMQgIgMAAgRQAAgPAIgMQAHgMANgHQANgGAPgCIAAguIAdAAIAAAuQAPABANAHQANAHAIAMQAHAMAAAPQAAARgIAMQgIAMgMAHQgNAGgPABIAAAqgAAPAjQAMgDAGgJQAFgJAAgNQAAgKgFgJQgGgJgMgDgAgggSQgFAJAAALQAAANAFAJQAGAIAMADIAAhCQgMAEgGAJg");
	this.shape_98.setTransform(-242.1,-7.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AAUBLIAAggIABgPIAAgOIABgQIgBAAIgFANIgGAOIgKAYIgKAaIgpAAIAAhpIAgAAIAAAfIAAAXIgCAVIABAAIAGgRIAHgOIASgsIApAAIAABpgAgWg0QgIgIAAgPIAVAAQAAAIADAEQADAEADAAQAEAAADgEQACgEABgIIAVAAQgBAQgJAIQgIAHgNABQgPAAgHgJg");
	this.shape_99.setTransform(-261.1,-9.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("Ag1A1IgSgBIAAhpIAiAAIAAAgIAHgBIAKAAQAMgBAJAEQALAEAHAIQAHAHABANQAAAKgEAIQgEAGgHAFQgLAHgLACQgMADgNAAIgSgBgAggAAIgFAAIAAAfIAEAAIAGAAIALgBQAFgCADgEQADgEAAgGQAAgGgDgDQgDgEgFgBQgEAAgGAAIgGAAgAAnA0IAAhpIAhAAIAABpg");
	this.shape_100.setTransform(-276.2,-6.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgQA1IAAhPIgeAAIAAgaIBdAAIAAAaIgfAAIAABPg");
	this.shape_101.setTransform(-289.8,-7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AggAzQgIgFgDgHQgFgIAAgIQABgOAHgJQAIgIAOgEQAPgFAQAAIAAgBIgBgGQgCgDgEgDQgEgCgGAAQgIAAgJADQgHACgGADIgGgVQAGgEALgDQAKgDANAAQASAAAKAHQAKAGAEAKQAFALAAANIAAAjIAAAPIABALIgdAAIgCgLIgBAAQgFAHgJADQgGAEgJAAQgLAAgIgFgAAAAEQgGACgFADQgDAEAAAGQAAAHADADQAEADAFAAQAFAAAFgDQAEgEACgFIAAgDIAAgDIAAgMQgIAAgGACg");
	this.shape_102.setTransform(-300.9,-7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgkA1IAAhpIBJAAIAAAaIgoAAIAABPg");
	this.shape_103.setTransform(-310.5,-7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_104.setTransform(-322,-7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AgnBKIgPgCIAAiRIBhAAIAAAbIg/AAIAAAZIAIAAIAKgBQAJAAALADQALADAIAGQAIAGAFAHQAFAJAAAMQAAALgEAIQgEAIgGAGQgIAHgJADQgKAEgLACQgJABgMAAIgVAAgAgOABIgGABIAAAuIAGABIAGAAQAHAAADgCQAGgCAEgDQAEgDACgFQABgEAAgGQAAgFgCgEQgCgFgEgCQgEgEgGgBQgEgCgGAAIgFAAg");
	this.shape_105.setTransform(-334.6,-8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-343.5,-25.3,687.2,50.7);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape.setTransform(295.4,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_1.setTransform(286.2,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_2.setTransform(278,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_3.setTransform(269.9,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYApIAAhRIAxAAIAAAMIgiAAIAABFg");
	this.shape_4.setTransform(262.4,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjAeIADgCIAFgCQAFgEACgJQABgJAAgLIAAghIA3AAIAABQIgPAAIAAhEIgaAAIAAAVQAAAPgCAMQgDALgIAFIgHAEIgJABg");
	this.shape_5.setTransform(250.2,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUA5IAAgjIAAgLIABgLIAAgJIAAAAIgHALIgHAMIgKAVIgOAWIgRAAIAAhQIAOAAIAAAhIAAALIAAALIgBALIABAAIAEgJIAEgIIAFgJIAYgoIASAAIAABQgAgLgmQgFgDgCgFQgCgFgBgFIALAAQAAAFADAEQADADAEAAQAEAAADgDQADgEABgFIAKAAQgBAKgFAFQgGAGgJAAQgHAAgEgDg");
	this.shape_6.setTransform(241.8,13.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_7.setTransform(232.7,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGBMIAAgfQgLgBgKgFQgJgGgFgIQgFgKAAgNQAAgLAFgJQAFgKAKgFQAJgEALgCIAAglIAMAAIAAAlQAMABAKAFQAJAGAFAJQAFAJABAKQAAAOgGAKQgFAIgKAFQgJAGgMABIAAAfgAAGAjQAJgCAGgFQAFgEAEgHQADgHAAgJQAAgKgHgJQgHgIgNgCgAgTgXQgHAFgCAGQgDAIAAAGQAAAIADAIQACAGAHAFQAFAEAIACIAAg/QgIAAgFAFg");
	this.shape_8.setTransform(223.4,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_9.setTransform(209.7,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_10.setTransform(197.4,15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_11.setTransform(188.2,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgFgEgKAAIgDAAIAAAkIgPAAIAAhRIAPAAIAAAkIAEAAIAdgkIASAAIgiAmQAIABAHAEQAGAHAFALIADAJIAGALg");
	this.shape_12.setTransform(180,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_13.setTransform(170.7,15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgjAeIADgCIAFgCQAFgEACgJQABgJAAgLIAAghIA3AAIAABQIgPAAIAAhEIgaAAIAAAVQAAAPgDAMQgCALgIAFIgHAEIgJABg");
	this.shape_14.setTransform(161.1,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgEgEgLAAIgDAAIAAAkIgOAAIAAhRIAOAAIAAAkIAEAAIAcgkIATAAIgiAmQAIABAHAEQAGAHAFALIAEAJIAEALg");
	this.shape_15.setTransform(153.9,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_16.setTransform(140.9,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgFgEgKAAIgDAAIAAAkIgPAAIAAhRIAPAAIAAAkIAEAAIAdgkIASAAIgiAmQAIABAHAEQAGAHAFALIADAJIAGALg");
	this.shape_17.setTransform(132.8,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWApIgKgBIAAhQIAPAAIAAAcIAHgBIAHAAQAHAAAJACQAIADAGAGQAGAEAAALQAAAGgDAFQgCAEgEAEQgEADgGACQgHADgGAAIgLABIgMAAgAgRgBIAAAfIAFAAIAGAAIAKgBQAGgCAEgDQAEgEAAgHQAAgHgEgEQgFgCgGgBQgEgCgFABIgGAAIgFABg");
	this.shape_18.setTransform(124.2,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgkAeIAFgCIADgCQAGgEABgJQACgJAAgLIAAghIA4AAIAABQIgPAAIAAhEIgbAAIAAAVQAAAPgCAMQgDALgIAFIgGAEIgKABg");
	this.shape_19.setTransform(114.8,15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_20.setTransform(106.4,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgEgEgLAAIgDAAIAAAkIgPAAIAAhRIAPAAIAAAkIAEAAIAdgkIASAAIgiAmQAIABAHAEQAGAHAFALIADAJIAGALg");
	this.shape_21.setTransform(98.2,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgMAlQgJgFgFgKQgFgJAAgMQAAgLAFgLQAGgJAKgFQAKgHALABQAHgBAGACIAIADIgDAMIgHgEIgLgBQgKABgEAEQgGAEgDAHQgEAHAAAHQAAAJAEAHQAEAHAGAEQAFADAIAAIALgBIAHgCIADALIgJACIgPACQgKAAgKgFg");
	this.shape_22.setTransform(89.9,15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_23.setTransform(81.7,15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_24.setTransform(72.8,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGAlQgDgDAAgEQAAgFAEgDQACgDADAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDgAgGgVQgDgDAAgEQAAgFAEgDQACgDADAAQAEAAADADQADADAAAFQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_25.setTransform(63,15.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_26.setTransform(56.7,15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_27.setTransform(48.3,16.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_28.setTransform(38.5,15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_29.setTransform(29.9,15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_30.setTransform(20.7,15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgYApIAAhRIAxAAIAAAMIgiAAIAABFg");
	this.shape_31.setTransform(13.2,15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_32.setTransform(4.8,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAcA2IAAgaIg3AAIgBAaIgMAAIAAglIAHAAQAFgIADgJQADgGAAgIQACgIAAgJIAAgWIA1AAIAABGIAIAAIgBAlgAgHgcIgBAQQgBAIgDAFIgDAIIgDAHIAkAAIAAg5IgZAAg");
	this.shape_33.setTransform(-4.6,16.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgIAIIAEgMIADgOIAOgCIgFAQIgGANIgDALIgLABIAEgNg");
	this.shape_34.setTransform(-14.4,19.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAGgBIAHAAQAJAAAGACQAJADAEAGQAFAEABALQgBAGgCAFQgCAEgEAEQgFADgFACQgDADgHAAIgLABIgMAAgAgdgBIAAAfIAGAAIAFAAQAGAAAGgBQAFgCACgEQADgEAAgGQAAgHgDgEQgCgCgFgBQgGgCgGABIgFAAIgGABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_35.setTransform(-21.6,15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_36.setTransform(-30.8,15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_37.setTransform(-38.9,15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_38.setTransform(-47.8,15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAhApIgCgoIgBgMIgBgPIAAAAIgCAHIgDAJIgEAKIgQAoIgJAAIgOgoIgDgHIgDgKIgDgJIAAAAIgBAPIgBANIgCAnIgOAAIAHhRIASAAIAPAoIACAHIADAIIABAIIAAAAIACgJIAEgKIADgIIAOgkIASAAIAGBRg");
	this.shape_39.setTransform(-57.5,15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AghAvIAHgDQADgBADgDIAHgHQADgEADgGIABgCIAAgCIAAgBIgBgDIgehJIAQAAIASAwIADAJIAAAGIABAAIACgGIADgJIAQgwIAQAAIgWA6IgKAWIgHARQgFAHgFAEQgFAEgFADIgIADg");
	this.shape_40.setTransform(-66.9,16.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgEgEgLAAIgDAAIAAAkIgOAAIAAhRIAOAAIAAAkIAEAAIAcgkIATAAIgiAmQAIABAHAEQAGAHAFALIAEAJIAEALg");
	this.shape_41.setTransform(-74.4,15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_42.setTransform(-83.7,15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAdA2IgBgaIg3AAIgBAaIgMAAIAAglIAHAAQAFgIADgJQACgGABgIQACgIAAgJIAAgWIA0AAIAABGIAJAAIgBAlgAgHgcIgBAQQgBAIgDAFIgCAIIgEAHIAkAAIAAg5IgZAAg");
	this.shape_43.setTransform(-93.1,16.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_44.setTransform(-105.2,15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAGgBIAHAAQAJAAAGACQAJADAEAGQAFAEABALQAAAGgDAFQgCAEgEAEQgEADgGACQgDADgHAAIgLABIgMAAgAgdgBIAAAfIAGAAIAFAAQAGAAAGgBQAFgCACgEQADgEAAgGQAAgHgDgEQgCgCgFgBQgGgCgGABIgFAAIgGABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_45.setTransform(-115.1,15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_46.setTransform(-125.4,15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARApIAAghIgLAFIgKABQgIAAgGgCQgGgDgDgGQgEgEAAgJIAAgeIAPAAIAAAcQAAAIAEAEQAEADAIAAQAEAAAFgBQAFgCADAAIAAgoIAPAAIAABRg");
	this.shape_47.setTransform(-134.5,15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_48.setTransform(-143.5,15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgRApIgNgFIAEgKIALAEQAFABAGAAQAIAAAFgEQAFgEAAgGQAAgFgDgDQgDgDgGgCIgKgBIgHAAIAAgIIAHAAQAIAAAFgEQAGgEAAgFQAAgGgEgDQgFgDgFAAIgKABIgKAEIgDgJQAGgEAHgBQAHgCAGAAQAFAAAHACQAGACAEAFQAFAEAAAIQAAAFgDAEQgDAEgEADIgJADQAGABAGABQAFACADAEQADAFAAAGQAAAJgGAFQgFAGgIACQgIACgHAAQgHAAgHgBg");
	this.shape_49.setTransform(-152,15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AghAvIAHgDQADgBADgDIAHgHQADgEADgGIABgCIAAgCIAAgBIgBgDIgehJIAQAAIASAwIADAJIAAAGIABAAIACgGIADgJIAQgwIAQAAIgWA6IgKAWIgHARQgFAHgFAEQgFAEgFADIgIADg");
	this.shape_50.setTransform(-159.5,16.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_51.setTransform(-168.1,16.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgYApIAAhRIAxAAIAAAMIgiAAIAABFg");
	this.shape_52.setTransform(-176,15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_53.setTransform(-183.3,15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_54.setTransform(-191.4,15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgIAIIAEgMIADgOIAOgCIgFAQIgGANIgDALIgLABIAEgNg");
	this.shape_55.setTransform(-201.6,19.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghAvIAHgDQADgBADgDIAHgHQADgEADgGIABgCIAAgCIAAgBIgBgDIgehJIAQAAIASAwIADAJIAAAGIABAAIACgGIADgJIAQgwIAQAAIgWA6IgKAWIgHARQgFAHgFAEQgFAEgFADIgIADg");
	this.shape_56.setTransform(-207.2,16.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_57.setTransform(-214.7,15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_58.setTransform(-222.5,15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgkAeIAFgCIADgCQAGgEABgJQACgJAAgLIAAghIA4AAIAABQIgQAAIAAhEIgaAAIAAAVQAAAPgCAMQgDALgIAFIgGAEIgKABg");
	this.shape_59.setTransform(-231.2,15);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AATApIAAhFIgkAAIAABFIgQAAIAAhRIBDAAIAABRg");
	this.shape_60.setTransform(-239.6,15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_61.setTransform(-248.9,15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_62.setTransform(-261.5,15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_63.setTransform(-270,15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_64.setTransform(-282.6,15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_65.setTransform(-290,15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_66.setTransform(-297.7,15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AARApIAAghIgLAFIgKABQgIAAgGgCQgGgDgDgGQgEgEAAgJIAAgeIAPAAIAAAcQAAAIAEAEQAEADAIAAQAEAAAFgBQAFgCADAAIAAgoIAPAAIAABRg");
	this.shape_67.setTransform(-306.4,15);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgOA0QgNgHgIgNQgGgNgBgTQAAgQAIgNQAHgOAOgHQANgHAQgBIARACIAKADIgDANQgFgDgFgBQgHgBgHAAQgNAAgIAFQgKAGgFAKQgGALgBANQAAAOAGAKQAFALAKAFQAIAGANAAIAOgBIALgEIADAMIgMAEIgSACQgPgBgMgGg");
	this.shape_68.setTransform(-315.6,13.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgaA2IgOAAIgJgBIAAhoIALgBIAPgBIARgBIAOABQAJABAJACQAIADAGAGQAFAFABAKQgBAHgDAEQgDAFgFADQgFADgFABIAAAAQAMACAHAFQAHAGAAAMQAAALgHAHQgGAGgKAEQgKADgLABIgRABIgPgBgAgQAiIAFABIAGAAQAFAAAEgCQAFgBADgDQAEgDAAgFQAAgHgGgEQgHgDgKAAIgJAAgAgLghIgFABIAAAWIAJAAQAIAAAGgDQAFgDABgGQAAgFgFgDQgFgDgIAAIgGAAg");
	this.shape_69.setTransform(71.4,-7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_70.setTransform(58.7,-7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgPA1IAAhPIggAAIAAgaIBfAAIAAAaIggAAIAABPg");
	this.shape_71.setTransform(47.3,-7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AARA1IAAgqIggAAIAAAqIgiAAIAAhpIAiAAIAAAnIAgAAIAAgnIAhAAIAABpg");
	this.shape_72.setTransform(35.8,-7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIAEgLQADgKAHgIQAGgJALgEQAJgFAMgBQASABAKAIQALAHAFAMQAFAMAAAOIgBAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAFADAHAAQAJAAAIgBIANgEIAFAXQgIADgKACQgLABgKAAQgaAAgOgOgAATgKIgBgJQgBgFgFgEQgEgEgHAAQgFAAgFAEQgEADgDAFIgCAKIAlAAIAAAAg");
	this.shape_73.setTransform(23.8,-7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AAmA1IgCgrIAAgKIgBgMIAAgNIAAAAIgEALIgDAKIgEAMIgOAsIgWAAIgOgrIgCgKIgEgMIgCgMIgBAAIgBAVIAAAPIgCAqIgeAAIAHhpIArAAIAMAoIAEAMIACANIAAAAIAEgNIAEgOIAMgmIAqAAIAHBpg");
	this.shape_74.setTransform(10,-7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgtAxIAHgBIAIgEIAIgGIAGgHIACgDIAAgDIAAgCIgBgDIgohgIAlAAIAQA1IACAKIACAKIAAAAIACgKIADgKIANg1IAkAAIgZBHIgOAhQgGANgGAIQgFAJgFAFQgIAIgJADQgJADgGAAg");
	this.shape_75.setTransform(-3.5,-4.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AAQA1IgEgJIgFgOQgEgKgDgFQgGgEgIAAIgDAAIAAAqIghAAIAAhpIAhAAIAAArIAEAAIAZgrIAnAAIgoAuQAKACAGAGQAHAIAEAMIAGAPIAHAQg");
	this.shape_76.setTransform(-14.4,-7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_77.setTransform(-27.3,-7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AAiBHIgBgjIhCAAIgBAjIgZAAIgBg6IAKgBIAGgLIAFgJQACgJABgJIABgRIAAgbIBUAAIAABSIAMABIgBA6gAgGghIgBAOIgDAOIgDAIIgEAIIAiAAIAAg4IgXAAg");
	this.shape_78.setTransform(-40.3,-5.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIAEgLQADgKAHgIQAGgJALgEQAJgFAMgBQASABAKAIQALAHAFAMQAFAMAAAOIgBAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAFADAHAAQAJAAAIgBIANgEIAFAXQgJADgJACQgLABgKAAQgaAAgOgOgAATgKIgBgJQgBgFgFgEQgEgEgIAAQgEAAgFAEQgEADgDAFIgCAKIAlAAIAAAAg");
	this.shape_79.setTransform(-56.8,-7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAVA1IAAghIAAgOIAAgMIABgSIgBAAIgFAPIgFAMIgLAYIgKAaIgpAAIAAhpIAgAAIAAAhIgBAVIgBAUIABABIAHgRIAGgMIASguIApAAIAABpg");
	this.shape_80.setTransform(-69.2,-7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AARA1IAAgqIggAAIAAAqIgiAAIAAhpIAiAAIAAAnIAgAAIAAgnIAhAAIAABpg");
	this.shape_81.setTransform(-82.2,-7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AgfAzQgIgFgFgHQgEgIAAgIQAAgOAJgJQAHgIAOgEQAPgFAQAAIAAgBIgBgGQgBgDgFgDQgEgCgGAAQgIAAgJADQgIACgFADIgGgVQAGgEALgDQAKgDANAAQARAAALAHQALAGADAKQAFALAAANIAAAjIABAPIABALIgeAAIgDgLIAAAAQgGAHgHADQgHAEgJAAQgLAAgHgFgAAAAEQgHACgEADQgDAEAAAGQgBAHAEADQAEADAFAAQAFAAAEgDQAFgEACgFIAAgDIAAgDIAAgMQgJAAgFACg");
	this.shape_82.setTransform(-94.5,-7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AAiBHIgBgjIhCAAIgBAjIgZAAIgBg6IAKgBIAGgLIAFgJQACgJABgJIABgRIAAgbIBUAAIAABSIAMABIgBA6gAgGghIgBAOIgDAOIgDAIIgEAIIAiAAIAAg4IgXAAg");
	this.shape_83.setTransform(-106.7,-5.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgbA1QgKgDgJgFIAHgVQAFADAJACIARADQAIAAAFgEQAFgDAAgFQAAgGgGgDQgEgDgLAAIgQAAIAAgSIAQAAQAKAAADgDQAFgDAAgFQAAgFgFgDQgCgCgJgBQgHAAgIACIgNAGIgGgTQAKgGALgDQAMgCAKAAQAJgBAKADQAKADAGAGQAHAGAAALQAAAHgDAFQgEAFgFADQgFADgGABIAAABQAHABAGABQAHACAEAGQAEAFAAAIQAAAKgFAGQgFAHgIAEQgIADgKACIgPABQgMAAgLgCg");
	this.shape_84.setTransform(-118.5,-7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_85.setTransform(-130.2,-7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgQAxQgMgHgHgMQgHgNAAgQQAAgOAHgNQAHgNANgHQAPgIARgBIAOABIAMAEIgGAYIgHgCIgLAAQgNAAgGAIQgIAIAAAMQAAAJAEAHQAEAGAFAEQAHAEAHAAIALgCIAIgCIAFAZIgNADQgIABgKAAQgPABgNgHg");
	this.shape_86.setTransform(-141.3,-7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgiApQgQgOABgaQAAgIACgLQAEgKAGgIQAHgJAKgEQALgFAMgBQARABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQABAIAEAEQAEAFAHABQAEADAJAAQAIAAAIgBIANgEIAFAXQgJADgJACQgKABgMAAQgZAAgOgOgAAUgKIgCgJQgCgFgEgEQgEgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAmAAIAAAAg");
	this.shape_87.setTransform(-156.5,-7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_88.setTransform(-168.8,-7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AAQA1IgEgJIgFgOQgEgKgDgFQgGgEgIAAIgDAAIAAAqIghAAIAAhpIAhAAIAAArIAEAAIAZgrIAnAAIgoAuQAKACAGAGQAHAIAEAMIAGAPIAHAQg");
	this.shape_89.setTransform(-180.2,-7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgQAxQgMgHgHgMQgHgNAAgQQAAgOAHgNQAHgNANgHQAOgIASgBIAOABIAMAEIgGAYIgHgCIgLAAQgOAAgFAIQgIAIAAAMQAAAJAEAHQAEAGAFAEQAGAEAIAAIALgCIAJgCIADAZIgMADQgIABgJAAQgQABgNgHg");
	this.shape_90.setTransform(-191.5,-7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgjApQgOgOAAgaQAAgIADgLQADgKAGgIQAHgJALgEQAKgFAMgBQARABALAIQAKAHAFAMQAEAMABAOIgBAGIAAAFIhEAAQABAIAEAEQAEAFAHABQAFADAHAAQAJAAAHgBIAPgEIADAXQgHADgLACQgKABgKAAQgaAAgPgOgAATgKIgBgJQgBgFgEgEQgFgEgIAAQgEAAgFAEQgEADgDAFIgCAKIAlAAIAAAAg");
	this.shape_91.setTransform(-202.3,-7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AAPA2IAAgoIgBAAQgFACgHACQgFADgIAAQgRgBgKgJQgJgKAAgSIAAgkIAhAAIAAAhQAAAKAEAEQAEAEAGAAQAFAAAEgBQAEgBACgCIAAgvIAhAAIAABrg");
	this.shape_92.setTransform(-214.4,-6.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AAVA1IAAghIAAgOIABgMIABgSIgBAAIgGAPIgGAMIgKAYIgKAaIgpAAIAAhpIAgAAIAAAhIAAAVIgCAUIABABIAHgRIAFgMIATguIApAAIAABpg");
	this.shape_93.setTransform(-227,-7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AgQA1IAAhPIgfAAIAAgaIBfAAIAAAaIggAAIAABPg");
	this.shape_94.setTransform(-238.6,-7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AggAzQgHgFgFgHQgDgIAAgIQAAgOAHgJQAIgIAOgEQAOgFASAAIAAgBIgCgGQgBgDgEgDQgFgCgGAAQgJAAgHADQgJACgFADIgGgVQAGgEAKgDQALgDANAAQARAAALAHQAKAGAFAKQAEALAAANIAAAjIAAAPIABALIgeAAIgBgLIgBAAQgFAHgJADQgFAEgKAAQgLAAgIgFgAAAAEQgHACgDADQgFAEAAAGQABAHADADQAEADAGAAQAEAAAFgDQAEgEACgFIABgDIAAgDIAAgMQgKAAgFACg");
	this.shape_95.setTransform(-249.7,-7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AAmA1IgCgrIAAgKIAAgMIgBgNIgBAAIgDALIgDAKIgEAMIgOAsIgXAAIgMgrIgEgKIgCgMIgDgMIgBAAIgBAVIAAAPIgCAqIgeAAIAIhpIAqAAIAMAoIADAMIADANIAAAAIADgNIAGgOIALgmIArAAIAGBpg");
	this.shape_96.setTransform(-263.2,-7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_97.setTransform(-277.5,-7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgPA1IAAhPIggAAIAAgaIBfAAIAAAaIggAAIAABPg");
	this.shape_98.setTransform(-288.8,-7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgaA2IgOAAIgJgBIAAhoIALgBIAPgBIARgBIAOABQAJABAJACQAIADAGAGQAFAFABAKQgBAHgDAEQgDAFgFADQgFADgFABIAAAAQAMACAHAFQAHAGAAAMQAAALgHAHQgGAGgKAEQgKADgLABIgRABIgPgBgAgQAiIAFABIAGAAQAFAAAEgCQAFgBADgDQAEgDAAgFQAAgHgGgEQgHgDgKAAIgJAAgAgLghIgFABIAAAWIAJAAQAIAAAGgDQAFgDABgGQAAgFgFgDQgFgDgIAAIgGAAg");
	this.shape_99.setTransform(-299.7,-7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AAfBJIgMgmIgoAAIgLAmIgiAAIAtiRIAqAAIAuCRgAAOAKIgJgdIgEgPIgBgNIgBAAIgDANIgEAPIgIAdIAeAAg");
	this.shape_100.setTransform(-313.4,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.5,-25.3,645.2,50.7);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAhApIgCgoIgBgMIgBgPIAAAAIgCAHIgDAJIgEAKIgQAoIgJAAIgOgoIgDgHIgDgKIgDgJIAAAAIgBAPIgBANIgCAnIgOAAIAHhRIASAAIAPAoIACAHIADAIIABAIIAAAAIACgJIAEgKIADgIIAOgkIASAAIAGBRg");
	this.shape.setTransform(238.4,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAGgBIAHAAQAJAAAGACQAJADAEAGQAFAEABALQAAAGgDAFQgCAEgEAEQgEADgGACQgDADgHAAIgLABIgMAAgAgdgBIAAAfIAGAAIAFAAQAGAAAGgBQAFgCACgEQADgEAAgGQAAgHgDgEQgCgCgFgBQgGgCgGABIgFAAIgGABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_1.setTransform(227.3,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_2.setTransform(217,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_3.setTransform(207.7,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_4.setTransform(198.7,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAdA2IgBgaIg3AAIgBAaIgMAAIAAglIAHAAQAFgIADgJQADgGAAgIQACgIAAgJIAAgWIA0AAIAABGIAJAAIgBAlgAgHgcIgBAQQgBAIgDAFIgCAIIgEAHIAkAAIAAg5IgZAAg");
	this.shape_5.setTransform(190.2,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAhApIgCgoIgBgMIgBgPIAAAAIgCAHIgDAJIgEAKIgQAoIgJAAIgOgoIgDgHIgDgKIgDgJIAAAAIgBAPIgBANIgCAnIgOAAIAHhRIASAAIAPAoIACAHIADAIIABAIIAAAAIACgJIAEgKIADgIIAOgkIASAAIAGBRg");
	this.shape_6.setTransform(176.9,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAGgBIAHAAQAJAAAGACQAIADAGAGQAEAEABALQgBAGgCAFQgCAEgEAEQgEADgGACQgEADgGAAIgLABIgMAAgAgcgBIAAAfIAEAAIAGAAQAGAAAFgBQAGgCABgEQAEgEAAgGQAAgHgEgEQgBgCgGgBQgEgCgHABIgGAAIgEABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_7.setTransform(165.8,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAhApIgCgoIgBgMIgBgPIAAAAIgCAHIgDAJIgEAKIgQAoIgJAAIgOgoIgDgHIgDgKIgDgJIAAAAIgBAPIgBANIgCAnIgOAAIAHhRIASAAIAPAoIACAHIADAIIABAIIAAAAIACgJIAEgKIADgIIAOgkIASAAIAGBRg");
	this.shape_8.setTransform(154.8,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_9.setTransform(144.7,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAcA2IAAgaIg3AAIgBAaIgMAAIAAglIAHAAQAFgIADgJQADgGAAgIQACgIAAgJIAAgWIA0AAIAABGIAJAAIgBAlgAgHgcIgBAQQgBAIgDAFIgDAIIgDAHIAkAAIAAg5IgZAAg");
	this.shape_10.setTransform(135.3,16.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_11.setTransform(126.3,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAVApIgNgTIgEgHIgEgHIAAAAIgDAHIgFAHIgLATIgRAAIAdgpIgcgoIARAAIALASIAFAHIACAGIAAAAIAFgGIAEgHIALgSIAQAAIgcAoIAdApg");
	this.shape_12.setTransform(117.7,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRA5QgHgFgFgIQgEgHgCgKIgCgUQAAgMADgMQADgLAHgJQAGgIAIgFQAJgEAKgCIALgCIAKgDIgBANIgIACIgJABQgKACgGADQgHAEgFAHQgEAGgCAHQgCAHgBAHIABAAQAEgJAIgFQAIgFAGAAQALAAAIAFQAHAFAFAJQAEAHABANQAAAOgFAJQgEAKgJAFQgIAGgMAAQgJAAgIgFgAgKgGQgFADgCADIgDAIIgBAJIABALQABAGADAFQADAFAEADQAFADAEABQAIgBAFgEQAFgFACgHQACgHAAgIQAAgHgCgHQgCgFgFgEQgFgFgIAAQgFAAgFADg");
	this.shape_13.setTransform(109.3,13.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_14.setTransform(100.1,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_15.setTransform(91.2,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_16.setTransform(82.3,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgEgEgLAAIgDAAIAAAkIgOAAIAAhRIAOAAIAAAkIAEAAIAdgkIASAAIgiAmQAIABAHAEQAGAHAFALIAEAJIAEALg");
	this.shape_17.setTransform(70.5,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AATApIAAhFIglAAIAABFIgOAAIAAhRIBBAAIAABRg");
	this.shape_18.setTransform(57.7,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AghAvIAHgDQADgBADgDIAHgHQADgEADgGIABgCIAAgCIAAgBIgBgDIgehJIAQAAIASAwIADAJIAAAGIABAAIACgGIADgJIAQgwIAQAAIgWA6IgKAWIgHARQgFAHgFAEQgFAEgFADIgIADg");
	this.shape_19.setTransform(49.1,16.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_20.setTransform(41.5,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgMAlQgJgFgFgKQgFgJAAgMQAAgLAGgLQAFgJAJgFQAKgHAMABQAHgBAFACIAJADIgDAMIgIgEIgKgBQgJABgFAEQgHAEgDAHQgDAHAAAHQAAAJAEAHQADAHAHAEQAEADAJAAIAKgBIAIgCIACALIgJACIgOACQgLAAgJgFg");
	this.shape_21.setTransform(34.4,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_22.setTransform(25.8,15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAcA2IAAgaIg3AAIgBAaIgLAAIgBglIAHAAQAFgIADgJQADgGABgIQABgIAAgJIAAgWIA1AAIAABGIAIAAIAAAlgAgHgcIgBAQQgBAIgCAFIgEAIIgDAHIAkAAIAAg5IgZAAg");
	this.shape_23.setTransform(16.4,16.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAUA5IAAgjIAAgLIABgLIAAgJIAAAAIgHALIgHAMIgKAVIgOAWIgRAAIAAhQIAOAAIAAAhIAAALIAAALIgBALIABAAIAEgJIAEgIIAFgJIAYgoIASAAIAABQgAgLgmQgFgDgCgFQgCgFgBgFIALAAQAAAFADAEQADADAEAAQAEAAADgDQADgEABgFIAKAAQgBAKgFAFQgGAGgJAAQgHAAgEgDg");
	this.shape_24.setTransform(3.8,13.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAGgBIAHAAQAJAAAGACQAIADAGAGQAEAEABALQgBAGgCAFQgCAEgEAEQgEADgGACQgEADgGAAIgLABIgMAAgAgcgBIAAAfIAEAAIAGAAQAGAAAFgBQAGgCABgEQAEgEAAgGQAAgHgEgEQgBgCgGgBQgEgCgHABIgGAAIgEABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_25.setTransform(-6.5,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_26.setTransform(-16.7,16.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_27.setTransform(-25.4,15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgMAlQgJgFgFgKQgFgJAAgMQAAgLAFgLQAGgJAJgFQALgHALABQAHgBAFACIAJADIgDAMIgHgEIgLgBQgKABgEAEQgGAEgDAHQgEAHAAAHQAAAJAEAHQAEAHAGAEQAFADAIAAIALgBIAHgCIADALIgJACIgPACQgKAAgKgFg");
	this.shape_28.setTransform(-32.5,15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghApIgKgBIAAhQIAPAAIAAAcIAGgBIAHAAQAJAAAGACQAIADAGAGQAEAEABALQgBAGgCAFQgCAEgEAEQgEADgGACQgEADgGAAIgLABIgMAAgAgcgBIAAAfIAEAAIAGAAQAGAAAFgBQAGgCABgEQAEgEAAgGQAAgHgEgEQgBgCgGgBQgEgCgHABIgGAAIgEABgAAdAoIAAhQIAPAAIAABQg");
	this.shape_29.setTransform(-42.1,15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgaA5IgJgBIAAhwIA+AAIAAAMIgvAAIAAAfIAGgBIAIAAQAGAAAHACQAJACAGAEQAGAEAEAFQAEAHAAAKQAAAIgCAGQgDAGgFAFQgGAGgMADQgIADgMAAIgOAAgAgUgCIAAAvIAFABIAHAAQAHAAAFgCQAGgDAEgEIAFgHQABgFAAgFQAAgHgCgEQgDgFgEgDQgEgBgGgBIgKgBIgFAAIgGAAg");
	this.shape_30.setTransform(-52.1,13.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAHQgCgDgBgEQABgDACgDQADgDADAAQAEAAACADQADADAAADQAAAEgDADQgCADgEAAQgDAAgDgDg");
	this.shape_31.setTransform(-62.2,18.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_32.setTransform(-68.8,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_33.setTransform(-78.2,15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAZA2IAAgaIg9AAIAAhRIAOAAIAABFIAkAAIAAhFIAPAAIAABGIAIAAIgBAlg");
	this.shape_34.setTransform(-87.3,16.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_35.setTransform(-96.6,15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAhApIgCgoIgBgMIgBgPIAAAAIgCAHIgDAJIgEAKIgQAoIgJAAIgOgoIgDgHIgDgKIgDgJIAAAAIgBAPIgBANIgCAnIgOAAIAHhRIASAAIAPAoIACAHIADAIIABAIIAAAAIACgJIAEgKIADgIIAOgkIASAAIAGBRg");
	this.shape_36.setTransform(-105.9,15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_37.setTransform(-115.8,16.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_38.setTransform(-125.6,15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFBMIAAgfQgMgBgJgFQgKgGgFgIQgGgKAAgNQAAgLAGgJQAFgKAKgFQAJgEAMgCIAAglIALAAIAAAlQANABAJAFQAJAGAFAJQAGAJgBAKQAAAOgFAKQgGAIgIAFQgKAGgMABIAAAfgAAGAjQAJgCAFgFQAGgEADgHQAEgHAAgJQAAgKgHgJQgHgIgNgCgAgUgXQgFAFgEAGQgDAIAAAGQAAAIADAIQAEAGAFAFQAGAEAJACIAAg/QgJAAgGAFg");
	this.shape_39.setTransform(-135.7,14.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_40.setTransform(-145.8,15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_41.setTransform(-155.2,15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_42.setTransform(-167.7,15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_43.setTransform(-176.7,15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_44.setTransform(-186,15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_45.setTransform(-194.9,15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgjAeIADgCIAFgCQAFgEABgJQACgJAAgLIAAghIA4AAIAABQIgQAAIAAhEIgaAAIAAAVQABAPgDAMQgDALgIAFIgGAEIgKABg");
	this.shape_46.setTransform(-204,15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_47.setTransform(-211.8,15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_48.setTransform(-220.6,15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_49.setTransform(-228,15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgMAlQgJgFgFgKQgFgJAAgMQAAgLAGgLQAFgJAJgFQAKgHAMABQAHgBAFACIAJADIgDAMIgIgEIgKgBQgJABgFAEQgHAEgDAHQgDAHAAAHQAAAJAEAHQADAHAHAEQAEADAJAAIAKgBIAIgCIACALIgJACIgOACQgLAAgJgFg");
	this.shape_50.setTransform(-235.2,15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAcA2IAAgaIg3AAIgBAaIgLAAIgBglIAHAAQAFgIADgJQACgGACgIQABgIAAgJIAAgWIA1AAIAABGIAIAAIAAAlgAgHgcIgBAQQgBAIgCAFIgEAIIgDAHIAkAAIAAg5IgZAAg");
	this.shape_51.setTransform(-243.8,16.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_52.setTransform(-252.3,15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_53.setTransform(-261.1,16.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AATApIAAhFIglAAIAABFIgOAAIAAhRIBBAAIAABRg");
	this.shape_54.setTransform(-270.8,15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_55.setTransform(-283.3,15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_56.setTransform(-292.2,15);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_57.setTransform(-301.5,15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAdA2IgBgaIg3AAIgBAaIgMAAIAAglIAHAAQAFgIADgJQACgGABgIQACgIAAgJIAAgWIA0AAIAABGIAJAAIgBAlgAgHgcIgBAQQgBAIgDAFIgCAIIgEAHIAkAAIAAg5IgZAAg");
	this.shape_58.setTransform(-310.9,16.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAUApIAAgiIgLAAIgIABIgEADIgFAHIgDAIIgDAIIgCAEIgCADIgQAAIADgEIACgFIAEgJIADgJIAGgHIAEgDIAFgCIAAAAQgFgBgFgBQgFgBgDgFQgDgEAAgHQAAgGADgEQADgFAFgCQAFgDAHgCQAFgBAIAAIAOAAIANACIAABPgAgBgdQgFABgDAEQgEADAAAFQAAAFAEAEQADADAFABIAIACIAIAAIAFAAIAAgcIgGgBIgHAAIgCAAIgGABg");
	this.shape_59.setTransform(-319.9,14.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgjAeIADgCIAFgCQAFgEACgJQABgJAAgLIAAghIA3AAIAABQIgPAAIAAhEIgaAAIAAAVQAAAPgDAMQgCALgIAFIgHAEIgJABg");
	this.shape_60.setTransform(-328.5,15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgYApIAAhRIAxAAIAAAMIgiAAIAABFg");
	this.shape_61.setTransform(-335.1,15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_62.setTransform(-343.1,15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAbA5IAAg2Ig1AAIAAA2IgPAAIAAhxIAPAAIAAAwIA1AAIAAgwIAPAAIAABxg");
	this.shape_63.setTransform(-352.5,13.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AAPA2IAAgoIgBAAQgFACgHACQgFADgIAAQgRgBgKgJQgJgKAAgSIAAgkIAhAAIAAAhQAAAKAEAEQAEAEAGAAQAFAAAEgBQAEgBACgCIAAgvIAhAAIAABrg");
	this.shape_64.setTransform(13.6,-6.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("AggAzQgIgFgDgHQgFgIAAgIQABgOAHgJQAIgIAOgEQAPgFAQAAIAAgBIgBgGQgCgDgEgDQgEgCgGAAQgIAAgJADQgHACgGADIgGgVQAGgEALgDQAKgDANAAQASAAAKAHQAKAGAEAKQAFALAAANIAAAjIAAAPIABALIgdAAIgCgLIgBAAQgFAHgJADQgGAEgJAAQgLAAgIgFgAAAAEQgGACgFADQgDAEAAAGQAAAHADADQAEADAFAAQAFAAAFgDQAEgEACgFIAAgDIAAgDIAAgMQgIAAgGACg");
	this.shape_65.setTransform(1.5,-7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AAiBHIgBgjIhCAAIgBAjIgZAAIgBg6IAKgBIAGgLIAFgJQACgJABgJIABgRIAAgbIBUAAIAABSIAMABIgBA6gAgGghIgBAOIgDAOIgDAIIgEAIIAiAAIAAg4IgXAAg");
	this.shape_66.setTransform(-10.7,-5.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("AggAzQgHgFgEgHQgEgIgBgIQABgOAHgJQAIgIAOgEQAOgFARAAIAAgBIgBgGQgBgDgEgDQgFgCgGAAQgJAAgIADQgHACgGADIgGgVQAGgEAKgDQALgDANAAQASAAAKAHQAKAGAFAKQAEALAAANIAAAjIAAAPIABALIgeAAIgBgLIgBAAQgFAHgJADQgGAEgJAAQgLAAgIgFgAAAAEQgHACgDADQgFAEAAAGQABAHADADQAEADAGAAQAEAAAFgDQAEgEACgFIABgDIAAgDIAAgMQgKAAgFACg");
	this.shape_67.setTransform(-23,-7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgbA1QgKgDgJgFIAHgVQAFADAJACIARADQAIAAAFgEQAFgDAAgFQAAgGgGgDQgEgDgLAAIgQAAIAAgSIAQAAQAKAAADgDQAFgDAAgFQAAgFgFgDQgCgCgJgBQgHAAgIACIgNAGIgGgTQAKgGALgDQAMgCAKAAQAJgBAKADQAKADAGAGQAHAGAAALQAAAHgDAFQgEAFgFADQgFADgGABIAAABQAHABAGABQAHACAEAGQAEAFAAAIQAAAKgFAGQgFAHgIAEQgIADgKACIgPABQgMAAgLgCg");
	this.shape_68.setTransform(-34,-7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AASA1IgLgTIgEgIIgDgIIAAAAIgEAIIgEAIIgKATIglAAIAkg1Igjg0IAmAAIAKASIAEAIIADAIIABAAIADgJIAFgIIAJgRIAlAAIgkAzIAkA2g");
	this.shape_69.setTransform(-49.4,-7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("Ag1A1IgSgBIAAhpIAiAAIAAAgIAHgBIAKAAQAMgBAJAEQALAEAHAIQAHAHABANQAAAKgEAIQgEAGgHAFQgLAHgLACQgMADgNAAIgSgBgAggAAIgFAAIAAAfIAEAAIAGAAIALgBQAFgCADgEQADgEAAgGQAAgGgDgDQgDgEgFgBQgEAAgGAAIgGAAgAAnA0IAAhpIAhAAIAABpg");
	this.shape_70.setTransform(-63.7,-6.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AAQA1IAAgqIggAAIAAAqIghAAIAAhpIAhAAIAAAnIAgAAIAAgnIAiAAIAABpg");
	this.shape_71.setTransform(-78.6,-7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AAwA1IgFgKIgFgOQgDgJgFgFQgFgFgGAAIgEAAIAAArIgdAAIAAgrIgEAAQgHAAgFAFQgFAFgDAJIgEAOIgFAKIghAAQAEgHADgJIAGgSQADgKAHgIQAGgFAJgCIglguIAlAAIAYArIAEAAIAAgrIAdAAIAAArIAEAAIAYgrIAmAAIgmAuQAJACAGAGQAGAHAEAKIAHASIAGAQg");
	this.shape_72.setTransform(-93.1,-7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_73.setTransform(-107.6,-7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("Ag0AcIAHgBIAFgEQAFgFABgIIABgTIAAgsIBWAAIAABpIghAAIAAhQIgWAAIAAAUQABASgEANQgDAOgJAHQgFAFgIADQgHACgLAAg");
	this.shape_74.setTransform(-120.5,-6.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgPAxQgNgHgHgMQgHgNAAgQQAAgOAHgNQAHgNANgHQAOgIATgBIANABIAMAEIgGAYIgHgCIgLAAQgNAAgGAIQgIAIAAAMQAAAJAEAHQAEAGAEAEQAHAEAIAAIALgCIAIgCIAFAZIgNADQgIABgKAAQgPABgMgHg");
	this.shape_75.setTransform(-130.7,-7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgjApQgOgOAAgaQAAgIACgLQAEgKAGgIQAHgJAKgEQALgFAMgBQARABALAIQAKAHAFAMQAEAMAAAOIAAAGIAAAFIhEAAQABAIAEAEQAEAFAHABQAFADAIAAQAIAAAHgBIAPgEIADAXQgHADgLACQgJABgMAAQgZAAgPgOgAAUgKIgCgJQgBgFgEgEQgFgEgIAAQgEAAgFAEQgEADgDAFIgCAKIAmAAIAAAAg");
	this.shape_76.setTransform(-145.9,-7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AAUA1IAAghIABgOIAAgMIACgSIgCAAIgFAPIgGAMIgKAYIgKAaIgpAAIAAhpIAgAAIAAAhIAAAVIgCAUIABABIAGgRIAGgMIATguIApAAIAABpg");
	this.shape_77.setTransform(-158.4,-7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AAQA1IAAgqIggAAIAAAqIghAAIAAhpIAhAAIAAAnIAgAAIAAgnIAiAAIAABpg");
	this.shape_78.setTransform(-171.3,-7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AgjApQgOgOAAgaQAAgIADgLQADgKAGgIQAHgJALgEQAKgFAMgBQARABALAIQAKAHAFAMQAEAMABAOIgBAGIAAAFIhEAAQABAIAEAEQAEAFAHABQAFADAHAAQAJAAAHgBIAPgEIADAXQgHADgLACQgKABgKAAQgaAAgPgOgAATgKIgBgJQgBgFgEgEQgFgEgIAAQgEAAgFAEQgEADgDAFIgCAKIAlAAIAAAAg");
	this.shape_79.setTransform(-183.4,-7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAQA1IAAgqIggAAIAAAqIghAAIAAhpIAhAAIAAAnIAgAAIAAgnIAiAAIAABpg");
	this.shape_80.setTransform(-195.6,-7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("Ag0AcIAHgBIAFgEQAEgFACgIIABgTIAAgsIBWAAIAABpIghAAIAAhQIgWAAIAAAUQABASgEANQgDAOgJAHQgFAFgIADQgHACgLAAg");
	this.shape_81.setTransform(-208.6,-6.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_82.setTransform(-220.4,-7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AAQA1IAAhPIgfAAIAABPIgiAAIAAhpIBjAAIAABpg");
	this.shape_83.setTransform(-233,-7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("Ag1A1IgSgBIAAhpIAiAAIAAAgIAHgBIAKAAQAMgBAJAEQALAEAHAIQAHAHABANQAAAKgEAIQgEAGgHAFQgLAHgLACQgMADgNAAIgSgBgAggAAIgFAAIAAAfIAEAAIAGAAIALgBQAFgCADgEQADgEAAgGQAAgGgDgDQgDgEgFgBQgEAAgGAAIgGAAgAAnA0IAAhpIAhAAIAABpg");
	this.shape_84.setTransform(-247.9,-6.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgaA2IgOAAIgJgBIAAhoIALgBIAPgBIARgBIAOABQAJABAJACQAIADAGAGQAFAFABAKQgBAHgDAEQgDAFgFADQgFADgFABIAAAAQAMACAHAFQAHAGAAAMQAAALgHAHQgGAGgKAEQgKADgLABIgRABIgPgBgAgQAiIAFABIAGAAQAFAAAEgCQAFgBADgDQAEgDAAgFQAAgHgGgEQgHgDgKAAIgJAAgAgLghIgFABIAAAWIAJAAQAIAAAGgDQAFgDABgGQAAgFgFgDQgFgDgIAAIgGAAg");
	this.shape_85.setTransform(-262.2,-7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIADgLQAEgKAHgIQAGgJAKgEQAKgFAMgBQASABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAEADAIAAQAJAAAIgBIANgEIAFAXQgIADgKACQgLABgLAAQgZAAgOgOgAATgKIgBgJQgBgFgFgEQgEgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAlAAIAAAAg");
	this.shape_86.setTransform(-278.7,-7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_87.setTransform(-291,-7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgPA1IAAhPIggAAIAAgaIBfAAIAAAaIggAAIAABPg");
	this.shape_88.setTransform(-302.3,-7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgPAxQgNgHgHgMQgHgNAAgQQAAgOAHgNQAHgNAOgHQANgIATgBIANABIAMAEIgFAYIgIgCIgLAAQgOAAgFAIQgIAIAAAMQAAAJAEAHQAEAGAEAEQAIAEAIAAIAKgCIAJgCIADAZIgMADQgHABgLAAQgPABgMgHg");
	this.shape_89.setTransform(-312.2,-7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_90.setTransform(-323.7,-7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("Ag1BMIAAhxIgBgTIAAgRIAdAAIABAPIABAAQAGgIAJgFQAIgEALAAQAMAAAKAGQAKAHAGAMQAGAMAAASQAAATgHALQgHANgLAGQgLAGgMAAQgIAAgIgDQgHgEgDgFIgBAAIAAA1gAgMgsQgFAEgCAIIgBADIAAADIAAAPIAAADIABAEQACAEAFAFQAFAEAHAAQAJAAAGgIQAGgGAAgOQAAgJgCgGQgDgHgFgEQgFgEgGAAQgGAAgGAFg");
	this.shape_91.setTransform(-336.4,-4.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AAaBJIAAh2IgzAAIAAB2IgiAAIAAiRIB3AAIAACRg");
	this.shape_92.setTransform(-350.6,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.1,-25.3,720.2,50.7);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAkIAAgfIAAgIIABgJIAAgLIAAAAIgHAMIgGALIgJAQIgLAUIgQAAIAAhHIANAAIAAAfIAAAIIAAAJIgBAKIABAAIADgIIAEgHIAFgHIAUgkIAPAAIAABHg");
	this.shape.setTransform(288.2,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AARAkIAAghIghAAIAAAhIgNAAIAAhHIANAAIAAAdIAhAAIAAgdIANAAIAABHg");
	this.shape_1.setTransform(279.9,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOAhQgIgFgEgIQgEgIgBgLQABgJAEgJQAEgJAHgFQAIgFAJAAQAIAAAGADQAGADADAGQAEAFABAGQACAGgBAFIAAACIAAACIgxAAQAAAJAEAFQADAGAGACQAFADAFAAQAHAAAFgBIAIgDIACAKIgJADQgGABgJAAQgJAAgIgEgAATgGIgCgJQgBgFgEgDQgEgEgIAAQgEAAgFAEQgEADgCAFIgDAJIAlAAIAAAAg");
	this.shape_2.setTransform(272.1,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAcAkIgBgjIAAgKIgBgOIAAAAIgDAHIgDAHIgDAJIgOAjIgHAAIgNgjIgDgGIgDgJIgBgIIgBAAIAAAOIgBAKIgCAjIgMAAIAGhHIAQAAIAMAjIADAGIACAHIABAHIAAAAIACgHIADgJIADgHIAMggIAQAAIAFBHg");
	this.shape_3.setTransform(263.5,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgOAhQgIgFgEgIQgEgIgBgLQABgJAEgJQAEgJAHgFQAIgFAJAAQAIAAAGADQAGADADAGQAEAFABAGQACAGgBAFIAAACIAAACIgxAAQAAAJAEAFQADAGAGACQAFADAFAAQAHAAAFgBIAIgDIACAKIgJADQgGABgJAAQgJAAgIgEgAATgGIgCgJQgBgFgEgDQgEgEgIAAQgEAAgFAEQgEADgCAFIgDAJIAlAAIAAAAg");
	this.shape_4.setTransform(255,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AghAzIAAhMIAAgNIAAgLIALAAIABANQAEgHAHgEQAGgDAHAAQAJAAAHAEQAHAFAEAIQAEAIAAALQAAANgFAHQgEAJgIAEQgHAEgJAAQgFAAgGgDQgGgDgDgFIgBAAIAAAngAgLgjQgGAEgCAHIAAADIgBADIAAAMIAAADIABADQACAFAFAEQAFAEAHAAQAGAAAFgEQAEgDADgGQADgFAAgIQAAgHgDgGQgCgGgFgEQgFgEgGAAQgGAAgFAFg");
	this.shape_5.setTransform(247.2,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTAkIgJAAIAAhGIAKgBIANgBIAJABQAFABAFACQAFABADAEQADAEAAAGQAAAGgEAFQgEAEgHABQAJABAFADQAEAEABAIQAAAHgEAFQgEAEgGACQgGACgGABIgLABIgLgBgAgQAbIAGABIAFAAIAIgBQAFgBAEgDQADgDABgFQgBgFgDgDQgDgDgFgBIgKgBIgKAAgAgQgaIAAAWIAKAAIAIgBQAEgBADgDQAEgCAAgFQgBgFgFgDQgEgCgIAAIgFAAIgGAAg");
	this.shape_6.setTransform(239.2,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAhQgHgFgFgIQgEgIgBgMQABgKAEgJQAFgIAIgFQAIgEAIAAQAKAAAIAEQAIAFAFAIQAEAJAAAKQAAAJgDAHQgDAHgFAFQgGAFgGACQgGACgGAAQgJAAgIgEgAgKgWQgFAEgDAGQgCAHAAAFQAAAIACAGQADAGAFAEQAFADAFAAQAGAAAFgDQAFgEACgGQADgGABgIQgBgFgCgGQgCgHgEgEQgGgEgHAAQgGAAgEAEg");
	this.shape_7.setTransform(227.8,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgVAkIAAhHIArAAIAAALIgeAAIAAA8g");
	this.shape_8.setTransform(221.2,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRAhQgIgFgEgIQgEgIgBgMQABgKAEgJQAFgIAIgFQAIgEAIAAQALAAAHAEQAJAFADAIQAFAJAAAKQAAAJgDAHQgDAHgFAFQgGAFgGACQgHACgFAAQgJAAgIgEgAgKgWQgFAEgDAGQgCAHAAAFQAAAIADAGQADAGAEAEQAFADAFAAQAGAAAFgDQAFgEACgGQADgGAAgIQAAgFgCgGQgCgHgFgEQgFgEgHAAQgGAAgEAEg");
	this.shape_9.setTransform(213.8,14.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AARAkIAAghIghAAIAAAhIgNAAIAAhHIANAAIAAAdIAhAAIAAgdIANAAIAABHg");
	this.shape_10.setTransform(205.6,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTAkIgJgBIAAhGIANAAIAAAYIAGAAIAGgBQAHAAAHACQAIADAFAFQAFAEAAAJQAAAGgDAEQgCAEgDADIgJAFQgGACgGAAIgIABIgLAAgAgPgBIAAAbIAFAAIAFABIAIgCQAGgBADgDQADgEABgFQgBgHgDgDQgEgCgFgBIgJgBIgEAAIgFABg");
	this.shape_11.setTransform(198,14.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgfAaIAEgBIADgCQAFgEACgIIABgRIAAgdIAwAAIAABGIgNAAIAAg8IgXAAIAAATQAAANgCAKQgDAKgGAFIgHADIgIABg");
	this.shape_12.setTransform(189.7,14.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgSAiQgEgDgDgEQgCgFAAgFQAAgOALgFQALgHATABIAAgCIgBgHQgBgEgDgDQgEgCgFgBQgGAAgFACQgFABgDADIgDgJQAEgDAGgCQAHgBAFAAQALAAAGAEQAGAEACAHQACAHAAAHIAAAZIAAAKIABAIIgMAAIgBgJIAAAAQgDAEgGADQgGADgFAAQgIAAgFgDgAAAAAQgFABgFADQgEAEAAAHQAAAHADADQAEADAFAAQAFgBAFgDQAEgEACgFIAAgCIAAgCIAAgLIgDAAIgLAAg");
	this.shape_13.setTransform(182.6,14.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAhQgIgFgEgIQgEgIgBgLQABgJAEgJQAEgJAHgFQAIgFAJAAQAIAAAGADQAGADADAGQAEAFABAGQACAGgBAFIAAACIAAACIgxAAQAAAJAEAFQADAGAGACQAFADAFAAQAHAAAFgBIAIgDIACAKIgJADQgGABgJAAQgJAAgIgEgAATgGIgCgJQgBgFgEgDQgEgEgIAAQgEAAgFAEQgEADgCAFIgDAJIAlAAIAAAAg");
	this.shape_14.setTransform(175.4,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghAzIAAhMIAAgNIAAgLIALAAIABANQAEgHAHgEQAGgDAHAAQAJAAAHAEQAHAFAEAIQAEAIAAALQAAANgFAHQgEAJgIAEQgHAEgJAAQgFAAgGgDQgGgDgDgFIgBAAIAAAngAgLgjQgGAEgCAHIAAADIgBADIAAAMIAAADIABADQACAFAFAEQAFAEAHAAQAGAAAFgEQAEgDADgGQADgFAAgIQAAgHgDgGQgCgGgFgEQgFgEgGAAQgGAAgFAFg");
	this.shape_15.setTransform(167.6,16.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOAhQgIgFgEgIQgEgIgBgLQABgJAEgJQAEgJAHgFQAIgFAJAAQAIAAAGADQAGADADAGQAEAFABAGQACAGgBAFIAAACIAAACIgxAAQAAAJAEAFQADAGAGACQAFADAFAAQAHAAAFgBIAIgDIACAKIgJADQgGABgJAAQgJAAgIgEgAATgGIgCgJQgBgFgEgDQgEgEgIAAQgEAAgFAEQgEADgCAFIgDAJIAlAAIAAAAg");
	this.shape_16.setTransform(156.2,14.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAcAkIgBgjIAAgKIgBgOIAAAAIgCAHIgEAHIgDAJIgOAjIgHAAIgNgjIgCgGIgEgJIgCgIIAAAAIgBAOIAAAKIgCAjIgMAAIAGhHIAQAAIAMAjIADAGIACAHIABAHIAAAAIACgHIADgJIADgHIAMggIAQAAIAFBHg");
	this.shape_17.setTransform(147.6,14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASAkIAAgfIAAgIIABgJIAAgLIAAAAIgHAMIgGALIgJAQIgLAUIgQAAIAAhHIANAAIAAAfIAAAIIgBAJIAAAKIAAAAIAFgIIADgHIAFgHIAUgkIAPAAIAABHg");
	this.shape_18.setTransform(138.7,14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAkAkIgEgIIgDgJQgEgJgFgDQgFgDgHAAIgCAAIAAAgIgLAAIAAggIgCAAQgHAAgFADQgGADgDAJIgEAJIgCAIIgOAAIAFgKIADgKQAEgJAFgFQAFgDAJgBIgdghIAOAAIAZAgIACAAIAAggIALAAIAAAgIADAAIAYggIAOAAIgcAhQAIABAGADQAEAFADAIIAFALIADAKg");
	this.shape_19.setTransform(129.5,14.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOAhQgIgFgEgIQgEgIgBgLQABgJAEgJQAEgJAHgFQAIgFAJAAQAIAAAGADQAGADADAGQAEAFABAGQACAGgBAFIAAACIAAACIgxAAQAAAJAEAFQADAGAGACQAFADAFAAQAHAAAFgBIAIgDIACAKIgJADQgGABgJAAQgJAAgIgEgAATgGIgCgJQgBgFgEgDQgEgEgIAAQgEAAgFAEQgEADgCAFIgDAJIAlAAIAAAAg");
	this.shape_20.setTransform(120.8,14.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AghAzIAAhMIAAgNIAAgLIALAAIABANQAEgHAHgEQAGgDAHAAQAJAAAHAEQAHAFAEAIQAEAIAAALQAAANgFAHQgEAJgIAEQgHAEgJAAQgFAAgGgDQgGgDgDgFIgBAAIAAAngAgLgjQgGAEgCAHIAAADIgBADIAAAMIAAADIABADQACAFAFAEQAFAEAHAAQAGAAAFgEQAEgDADgGQADgFAAgIQAAgHgDgGQgCgGgFgEQgFgEgGAAQgGAAgFAFg");
	this.shape_21.setTransform(113,16.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUAkIgIAAIAAhGIAKgBIANgBIAJABQAFABAFACQAFABADAEQADAEAAAGQABAGgFAFQgFAEgFABQAHABAFADQAGAEAAAIQgBAHgDAFQgEAEgGACQgGACgGABIgKABIgNgBgAgPAbIAEABIAGAAIAIgBQAFgBAEgDQADgDAAgFQAAgFgDgDQgDgDgFgBIgKgBIgJAAgAgPgaIAAAWIAKAAIAHgBQAEgBAEgDQACgCAAgFQABgFgGgDQgEgCgIAAIgGAAIgEAAg");
	this.shape_22.setTransform(101.8,14.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAkAkIgEgIIgDgJQgDgJgGgDQgFgDgHAAIgCAAIAAAgIgLAAIAAggIgCAAQgIAAgEADQgGADgDAJIgEAJIgDAIIgMAAIADgKIAEgKQAEgJAFgFQAFgDAJgBIgdghIAOAAIAZAgIACAAIAAggIALAAIAAAgIACAAIAZggIAOAAIgcAhQAIABAGADQAEAFAEAIIADALIAEAKg");
	this.shape_23.setTransform(89.6,14.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSAiQgEgDgDgEQgCgFAAgFQAAgOALgFQALgHATABIAAgCIgBgHQgBgEgDgDQgEgCgFgBQgGAAgFACQgFABgDADIgDgJQAEgDAGgCQAHgBAFAAQALAAAGAEQAGAEACAHQACAHAAAHIAAAZIAAAKIABAIIgMAAIgBgJIAAAAQgDAEgGADQgGADgFAAQgIAAgFgDgAAAAAQgFABgFADQgEAEAAAHQAAAHADADQAEADAFAAQAFgBAFgDQAEgEACgFIAAgCIAAgCIAAgLIgDAAIgLAAg");
	this.shape_24.setTransform(80.7,14.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAZAvIAAgXIgxAAIAAAXIgKAAIgBggIAGgBQAFgHACgHIADgMIACgPIAAgTIAuAAIAAA8IAHABIAAAggAgGgYIgBAOIgDALIgCAHIgDAGIAfAAIAAgyIgWAAg");
	this.shape_25.setTransform(73.2,15.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgQAhQgJgFgEgIQgEgIgBgMQABgKAEgJQAFgIAIgFQAIgEAIAAQALAAAHAEQAJAFADAIQAFAJAAAKQAAAJgDAHQgDAHgFAFQgGAFgGACQgHACgFAAQgJAAgHgEgAgKgWQgFAEgDAGQgCAHAAAFQAAAIADAGQADAGAEAEQAFADAFAAQAGAAAFgDQAFgEACgGQADgGAAgIQAAgFgCgGQgCgHgFgEQgFgEgHAAQgGAAgEAEg");
	this.shape_26.setTransform(65.3,14.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AghAzIAAhMIAAgNIAAgLIALAAIABANQAEgHAHgEQAGgDAHAAQAJAAAHAEQAHAFAEAIQAEAIAAALQAAANgFAHQgEAJgIAEQgHAEgJAAQgFAAgGgDQgGgDgDgFIgBAAIAAAngAgLgjQgGAEgCAHIAAADIgBADIAAAMIAAADIABADQACAFAFAEQAFAEAHAAQAGAAAFgEQAEgDADgGQADgFAAgIQAAgHgDgGQgCgGgFgEQgFgEgGAAQgGAAgFAFg");
	this.shape_27.setTransform(57.1,16.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAQAkIAAg9IgfAAIAAA9IgOAAIAAhHIA7AAIAABHg");
	this.shape_28.setTransform(48.6,14.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgSAiQgEgDgDgEQgCgFAAgFQAAgOALgFQALgHATABIAAgCIgBgHQgBgEgDgDQgEgCgFgBQgGAAgFACQgFABgDADIgDgJQAEgDAGgCQAHgBAFAAQALAAAGAEQAGAEACAHQACAHAAAHIAAAZIAAAKIABAIIgMAAIgBgJIAAAAQgDAEgGADQgGADgFAAQgIAAgFgDgAAAAAQgFABgFADQgEAEAAAHQAAAHADADQAEADAFAAQAFgBAFgDQAEgEACgFIAAgCIAAgCIAAgLIgDAAIgLAAg");
	this.shape_29.setTransform(37.5,14.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgfAaIADgBIAEgCQAFgEABgIIACgRIAAgdIAwAAIAABGIgNAAIAAg8IgXAAIAAATQAAANgCAKQgDAKgGAFIgHADIgIABg");
	this.shape_30.setTransform(29.8,14.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgOAhQgIgFgEgIQgEgIgBgLQABgJAEgJQAEgJAHgFQAIgFAJAAQAIAAAGADQAGADADAGQAEAFABAGQACAGgBAFIAAACIAAACIgxAAQAAAJAEAFQADAGAGACQAFADAFAAQAHAAAFgBIAIgDIACAKIgJADQgGABgJAAQgJAAgIgEgAATgGIgCgJQgBgFgEgDQgEgEgIAAQgEAAgFAEQgEADgCAFIgDAJIAlAAIAAAAg");
	this.shape_31.setTransform(22.7,14.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAZAvIAAgXIgxAAIAAAXIgKAAIgBggIAGgBQAFgHACgHIADgMIACgPIAAgTIAuAAIAAA8IAHABIAAAggAgGgYIgBAOIgDALIgCAHIgDAGIAfAAIAAgyIgWAAg");
	this.shape_32.setTransform(14.8,15.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAkIAAg9IgXAAIAAgKIA5AAIAAAKIgXAAIAAA9g");
	this.shape_33.setTransform(8,14.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgRAhQgHgFgFgIQgEgIgBgMQABgKAEgJQAFgIAIgFQAIgEAIAAQALAAAHAEQAIAFAFAIQAEAJAAAKQAAAJgDAHQgDAHgGAFQgEAFgHACQgHACgFAAQgJAAgIgEgAgLgWQgEAEgDAGQgDAHABAFQAAAIACAGQADAGAFAEQAFADAFAAQAGAAAFgDQAFgEACgGQAEgGAAgIQAAgFgCgGQgDgHgEgEQgGgEgHAAQgGAAgFAEg");
	this.shape_34.setTransform(0.8,14.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTAkIgJgBIAAhGIANAAIAAAYIAGAAIAGgBQAHAAAHACQAIADAFAFQAFAEAAAJQAAAGgCAEQgCAEgEADIgJAFQgGACgGAAIgIABIgLAAgAgPgBIAAAbIAFAAIAFABIAIgCQAGgBADgDQAEgEAAgFQAAgHgEgDQgEgCgFgBIgJgBIgEAAIgFABg");
	this.shape_35.setTransform(-10,14.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgfAaIADgBIAEgCQAFgEACgIIABgRIAAgdIAwAAIAABGIgNAAIAAg8IgXAAIAAATQAAANgCAKQgDAKgGAFIgHADIgIABg");
	this.shape_36.setTransform(-18.3,14.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgQAhQgJgFgEgIQgFgIAAgMQAAgKAFgJQAFgIAIgFQAIgEAIAAQAKAAAIAEQAJAFADAIQAFAJAAAKQAAAJgDAHQgDAHgFAFQgGAFgGACQgHACgFAAQgJAAgHgEgAgKgWQgGAEgCAGQgDAHAAAFQABAIADAGQADAGAEAEQAFADAFAAQAGAAAFgDQAFgEACgGQADgGAAgIQAAgFgCgGQgCgHgFgEQgEgEgIAAQgGAAgEAEg");
	this.shape_37.setTransform(-25.7,14.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AghAzIAAhMIAAgNIAAgLIALAAIABANQAEgHAHgEQAGgDAHAAQAJAAAHAEQAHAFAEAIQAEAIAAALQAAANgFAHQgEAJgIAEQgHAEgJAAQgFAAgGgDQgGgDgDgFIgBAAIAAAngAgLgjQgGAEgCAHIAAADIgBADIAAAMIAAADIABADQACAFAFAEQAFAEAHAAQAGAAAFgEQAEgDADgGQADgFAAgIQAAgHgDgGQgCgGgFgEQgFgEgGAAQgGAAgFAFg");
	this.shape_38.setTransform(-33.9,16.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgFAkIAAg9IgXAAIAAgKIA5AAIAAAKIgXAAIAAA9g");
	this.shape_39.setTransform(-41.5,14.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAQAkIAAghIggAAIAAAhIgNAAIAAhHIANAAIAAAdIAgAAIAAgdIAOAAIAABHg");
	this.shape_40.setTransform(-48.6,14.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgQAhQgJgFgEgIQgEgIgBgMQABgKAEgJQAFgIAIgFQAIgEAIAAQAKAAAJAEQAHAFAEAIQAFAJAAAKQAAAJgDAHQgDAHgGAFQgFAFgGACQgGACgGAAQgJAAgHgEgAgLgWQgFAEgCAGQgDAHAAAFQABAIADAGQADAGAEAEQAFADAFAAQAGAAAFgDQAFgEADgGQACgGAAgIQAAgFgCgGQgCgHgFgEQgEgEgIAAQgGAAgFAEg");
	this.shape_41.setTransform(-56.9,14.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAUAyIgFgLIgFgNQgCgHgDgFQgDgEgEgEQgFgCgJAAIgEAAIAAAuIgNAAIAAhjIANAAIAAAtIAEAAIAhgtIAPAAIgkAuQAHABAFACQAFADAEAGQADAFADAIIAFAOIAGAOg");
	this.shape_42.setTransform(-64.6,13.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgFAGQgCgCAAgEQAAgCACgDQACgDADAAQAEAAACADQACADAAACQAAAEgCACQgDADgDAAQgDAAgCgDg");
	this.shape_43.setTransform(-73.8,17.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgOAhQgIgFgEgIQgEgIgBgLQABgJAEgJQAEgJAHgFQAIgFAJAAQAIAAAGADQAGADADAGQAEAFABAGQACAGgBAFIAAACIAAACIgxAAQAAAJAEAFQADAGAGACQAFADAFAAQAHAAAFgBIAIgDIACAKIgJADQgGABgJAAQgJAAgIgEgAATgGIgCgJQgBgFgEgDQgEgEgIAAQgEAAgFAEQgEADgCAFIgDAJIAlAAIAAAAg");
	this.shape_44.setTransform(-79.2,14.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgFAkIAAg9IgXAAIAAgKIA5AAIAAAKIgXAAIAAA9g");
	this.shape_45.setTransform(-86,14.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgQAhQgJgFgEgIQgFgIAAgMQAAgKAFgJQAFgIAIgFQAIgEAIAAQAKAAAIAEQAJAFADAIQAFAJAAAKQAAAJgDAHQgDAHgFAFQgGAFgGACQgHACgFAAQgJAAgHgEgAgKgWQgGAEgCAGQgDAHAAAFQABAIADAGQADAGAEAEQAFADAFAAQAGAAAFgDQAFgEACgGQADgGAAgIQAAgFgCgGQgCgHgFgEQgEgEgIAAQgGAAgEAEg");
	this.shape_46.setTransform(-93.2,14.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgOAyQgHgEgEgHQgEgHgCgJIgBgSQAAgKACgKQADgKAGgHQAFgIAIgEQAIgEAIgBIAKgCIAIgDIAAAMIgIABIgIABQgIACgFADQgGADgEAHQgEAEgCAHIgCAMQAEgHAHgFQAGgEAGAAQAJAAAHAEQAHAEAEAIQAEAGAAALQAAAMgEAJQgEAJgHAEQgIAFgKABQgIgBgGgEgAgIgFQgFACgCADIgDAGIAAAJIABAJQABAGACAEQADAEAEADQAEADADABQAHgBAFgEQAEgEACgGQACgGAAgIIgCgMQgCgEgEgEQgFgEgHgBQgEABgEADg");
	this.shape_47.setTransform(-101.3,13.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgSAiQgEgDgDgEQgCgFAAgFQAAgOALgFQALgHATABIAAgCIgBgHQgBgEgDgDQgEgCgFgBQgGAAgFACQgFABgDADIgDgJQAEgDAGgCQAHgBAFAAQALAAAGAEQAGAEACAHQACAHAAAHIAAAZIAAAKIABAIIgMAAIgBgJIAAAAQgDAEgGADQgGADgFAAQgIAAgFgDgAAAAAQgFABgFADQgEAEAAAHQAAAHADADQAEADAFAAQAFgBAFgDQAEgEACgFIAAgCIAAgCIAAgLIgDAAIgLAAg");
	this.shape_48.setTransform(-109.1,14.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AghAzIAAhMIAAgNIAAgLIALAAIABANQAEgHAHgEQAGgDAHAAQAJAAAHAEQAHAFAEAIQAEAIAAALQAAANgFAHQgEAJgIAEQgHAEgJAAQgFAAgGgDQgGgDgDgFIgBAAIAAAngAgLgjQgGAEgCAHIAAADIgBADIAAAMIAAADIABADQACAFAFAEQAFAEAHAAQAGAAAFgEQAEgDADgGQADgFAAgIQAAgHgDgGQgCgGgFgEQgFgEgGAAQgGAAgFAFg");
	this.shape_49.setTransform(-116.5,16.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AASAyIAAgeIAAgKIAAgJIABgJIgBAAIgFAKIgHAKIgIATIgMATIgPAAIAAhGIAMAAIAAAdIAAAKIgBAJIAAAKIAAAAIAFgIIADgHIAFgHIAUgkIAQAAIAABGgAgKghQgEgDgCgEQgBgFgBgFIAJAAQABAFADAEQACACADABQAEgBACgCQADgEAAgFIAKAAQgBAKgFAEQgGAFgHAAQgGAAgEgCg");
	this.shape_50.setTransform(-128.4,13.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgRAhQgHgFgFgIQgEgIgBgMQABgKAEgJQAFgIAIgFQAIgEAIAAQAKAAAIAEQAIAFAFAIQAEAJAAAKQAAAJgDAHQgDAHgFAFQgGAFgGACQgGACgGAAQgJAAgIgEgAgKgWQgFAEgDAGQgCAHAAAFQAAAIACAGQADAGAFAEQAFADAFAAQAGAAAFgDQAFgEACgGQADgGABgIQgBgFgCgGQgCgHgEgEQgGgEgHAAQgGAAgEAEg");
	this.shape_51.setTransform(-136.7,14.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AARAkIAAghIghAAIAAAhIgNAAIAAhHIANAAIAAAdIAhAAIAAgdIANAAIAABHg");
	this.shape_52.setTransform(-144.9,14.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AARAkIAAghIghAAIAAAhIgNAAIAAhHIANAAIAAAdIAhAAIAAgdIANAAIAABHg");
	this.shape_53.setTransform(-153.1,14.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgSAiQgEgDgDgEQgCgFAAgFQAAgOALgFQALgHATABIAAgCIgBgHQgBgEgDgDQgEgCgFgBQgGAAgFACQgFABgDADIgDgJQAEgDAGgCQAHgBAFAAQALAAAGAEQAGAEACAHQACAHAAAHIAAAZIAAAKIABAIIgMAAIgBgJIAAAAQgDAEgGADQgGADgFAAQgIAAgFgDgAAAAAQgFABgFADQgEAEAAAHQAAAHADADQAEADAFAAQAFgBAFgDQAEgEACgFIAAgCIAAgCIAAgLIgDAAIgLAAg");
	this.shape_54.setTransform(-161,14.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgfAaIAEgBIADgCQAFgEACgIIAAgRIAAgdIAxAAIAABGIgNAAIAAg8IgXAAIAAATQAAANgCAKQgDAKgHAFIgGADIgIABg");
	this.shape_55.setTransform(-168.7,14.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgOAhQgIgFgEgIQgEgIgBgLQABgJAEgJQAEgJAHgFQAIgFAJAAQAIAAAGADQAGADADAGQAEAFABAGQACAGgBAFIAAACIAAACIgxAAQAAAJAEAFQADAGAGACQAFADAFAAQAHAAAFgBIAIgDIACAKIgJADQgGABgJAAQgJAAgIgEgAATgGIgCgJQgBgFgEgDQgEgEgIAAQgEAAgFAEQgEADgCAFIgDAJIAlAAIAAAAg");
	this.shape_56.setTransform(-175.8,14.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAZAvIAAgXIgxAAIAAAXIgKAAIgBggIAGgBQAFgHACgHIADgMIACgPIAAgTIAuAAIAAA8IAHABIAAAggAgGgYIgBAOIgDALIgCAHIgDAGIAfAAIAAgyIgWAAg");
	this.shape_57.setTransform(-183.7,15.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgRAhQgHgFgFgIQgEgIgBgMQABgKAEgJQAFgIAIgFQAIgEAIAAQAKAAAIAEQAIAFAFAIQAEAJAAAKQAAAJgDAHQgDAHgFAFQgGAFgGACQgGACgGAAQgJAAgIgEgAgKgWQgFAEgDAGQgCAHAAAFQAAAIACAGQADAGAFAEQAFADAFAAQAGAAAFgDQAFgEACgGQADgGABgIQgBgFgCgGQgCgHgEgEQgGgEgHAAQgGAAgEAEg");
	this.shape_58.setTransform(-191.6,14.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AghAzIAAhMIAAgNIAAgLIALAAIABANQAEgHAHgEQAGgDAHAAQAJAAAHAEQAHAFAEAIQAEAIAAALQAAANgFAHQgEAJgIAEQgHAEgJAAQgFAAgGgDQgGgDgDgFIgBAAIAAAngAgLgjQgGAEgCAHIAAADIgBADIAAAMIAAADIABADQACAFAFAEQAFAEAHAAQAGAAAFgEQAEgDADgGQADgFAAgIQAAgHgDgGQgCgGgFgEQgFgEgGAAQgGAAgFAFg");
	this.shape_59.setTransform(-199.7,16.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAQAkIAAg9IgfAAIAAA9IgOAAIAAhHIA7AAIAABHg");
	this.shape_60.setTransform(-208.3,14.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgQAhQgJgFgEgIQgFgIAAgMQAAgKAFgJQAFgIAIgFQAIgEAIAAQAKAAAIAEQAJAFADAIQAFAJAAAKQAAAJgDAHQgDAHgFAFQgGAFgGACQgHACgFAAQgJAAgHgEgAgKgWQgGAEgCAGQgDAHAAAFQABAIADAGQADAGAEAEQAFADAFAAQAGAAAFgDQAFgEACgGQADgGAAgIQAAgFgCgGQgCgHgFgEQgEgEgIAAQgGAAgEAEg");
	this.shape_61.setTransform(-219.7,14.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AASAkIAAgeIgKAAIgHABIgDADIgFAGIgDAHIgCAHIgCADIgCADIgOAAIADgEIACgEIADgIIADgHQACgEADgDIAEgCIAFgCQgFgBgFgBQgEgBgDgEQgDgEAAgGQAAgFADgEQADgEAEgCQAEgDAHgBIALgBIANAAIALABIAABGgAAAgZQgFABgDACQgDADAAAFQAAAFADADQADACAFACIAGABIAHAAIAFAAIAAgZIgFAAIgGAAIgHABg");
	this.shape_62.setTransform(-231.2,14.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AASAkIAAgfIAAgIIAAgJIABgLIgBAAIgGAMIgFALIgKAQIgLAUIgQAAIAAhHIANAAIAAAfIAAAIIAAAJIgBAKIABAAIADgIIAEgHIAEgHIAVgkIAPAAIAABHg");
	this.shape_63.setTransform(-238.6,14.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAWAvIgBgXIg1AAIAAhGIANAAIAAA8IAfAAIAAg8IAOAAIAAA8IAHABIAAAgg");
	this.shape_64.setTransform(-246.6,15.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgSAiQgEgDgDgEQgCgFAAgFQAAgOALgFQALgHATABIAAgCIgBgHQgBgEgDgDQgEgCgFgBQgGAAgFACQgFABgDADIgDgJQAEgDAGgCQAHgBAFAAQALAAAGAEQAGAEACAHQACAHAAAHIAAAZIAAAKIABAIIgMAAIgBgJIAAAAQgDAEgGADQgGADgFAAQgIAAgFgDgAAAAAQgFABgFADQgEAEAAAHQAAAHADADQAEADAFAAQAFgBAFgDQAEgEACgFIAAgCIAAgCIAAgLIgDAAIgLAAg");
	this.shape_65.setTransform(-254.8,14.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAcAkIgBgjIgBgKIAAgOIgBAAIgBAHIgDAHIgEAJIgNAjIgIAAIgNgjIgCgGIgDgJIgDgIIAAAAIgBAOIAAAKIgCAjIgMAAIAFhHIAQAAIANAjIADAGIACAHIABAHIAAAAIACgHIADgJIADgHIAMggIAQAAIAFBHg");
	this.shape_66.setTransform(-263,14.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AghAzIAAhMIAAgNIAAgLIALAAIABANQAEgHAHgEQAGgDAHAAQAJAAAHAEQAHAFAEAIQAEAIAAALQAAANgFAHQgEAJgIAEQgHAEgJAAQgFAAgGgDQgGgDgDgFIgBAAIAAAngAgLgjQgGAEgCAHIAAADIgBADIAAAMIAAADIABADQACAFAFAEQAFAEAHAAQAGAAAFgEQAEgDADgGQADgFAAgIQAAgHgDgGQgCgGgFgEQgFgEgGAAQgGAAgFAFg");
	this.shape_67.setTransform(-271.9,16.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgQAhQgJgFgEgIQgEgIgBgMQABgKAEgJQAFgIAIgFQAIgEAIAAQAKAAAJAEQAHAFAEAIQAFAJAAAKQAAAJgDAHQgDAHgGAFQgFAFgGACQgGACgGAAQgJAAgHgEgAgLgWQgFAEgCAGQgDAHAAAFQABAIADAGQADAGAEAEQAFADAFAAQAGAAAFgDQAFgEADgGQACgGAAgIQAAgFgCgGQgCgHgFgEQgEgEgIAAQgGAAgFAEg");
	this.shape_68.setTransform(-280.5,14.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgFBDIAAgcQgKgBgIgEQgIgFgFgIQgEgIgBgLQABgKAEgIQAFgIAIgFQAIgEAKgBIAAggIALAAIAAAgQAKABAJAEQAHAFAFAIQAFAIAAAJQAAAMgFAIQgFAJgIAEQgIAEgKABIAAAcgAAGAeQAHgBAFgEQAGgEACgGQADgGAAgIQAAgJgGgIQgHgHgKgCgAgRgUQgFAEgDAGQgCAGAAAGQAAAHACAGQADAGAFAEQAGAEAGABIAAg3QgGABgGAEg");
	this.shape_69.setTransform(-289.4,14.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AARAkIAAghIghAAIAAAhIgNAAIAAhHIANAAIAAAdIAhAAIAAgdIANAAIAABHg");
	this.shape_70.setTransform(-298.3,14.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AASAkIAAgfIAAgIIAAgJIABgLIgBAAIgFAMIgHALIgIAQIgMAUIgPAAIAAhHIAMAAIAAAfIAAAIIgBAJIAAAKIAAAAIAFgIIADgHIAFgHIAUgkIAQAAIAABHg");
	this.shape_71.setTransform(-306.6,14.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AASAkIAAgeIgKAAIgHABIgDADIgFAGIgDAHIgCAHIgCADIgCADIgOAAIADgEIACgEIADgIIADgHQACgEADgDIAEgCIAFgCQgFgBgFgBQgEgBgDgEQgDgEAAgGQAAgFADgEQADgEAEgCQAEgDAHgBIALgBIANAAIALABIAABGgAAAgZQgFABgDACQgDADAAAFQAAAFADADQADACAFACIAGABIAHAAIAFAAIAAgZIgFAAIgGAAIgHABg");
	this.shape_72.setTransform(-318.1,14.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgSAiQgEgDgDgEQgCgFAAgFQAAgOALgFQALgHATABIAAgCIgBgHQgBgEgDgDQgEgCgFgBQgGAAgFACQgFABgDADIgDgJQAEgDAGgCQAHgBAFAAQALAAAGAEQAGAEACAHQACAHAAAHIAAAZIAAAKIABAIIgMAAIgBgJIAAAAQgDAEgGADQgGADgFAAQgIAAgFgDgAAAAAQgFABgFADQgEAEAAAHQAAAHADADQAEADAFAAQAFgBAFgDQAEgEACgFIAAgCIAAgCIAAgLIgDAAIgLAAg");
	this.shape_73.setTransform(-325.2,14.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AARAkIAAghIghAAIAAAhIgNAAIAAhHIANAAIAAAdIAhAAIAAgdIANAAIAABHg");
	this.shape_74.setTransform(-332.7,14.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgUAkIgIAAIAAhGIAKgBIANgBIAJABQAFABAFACQAFABADAEQAEAEgBAGQABAGgFAFQgEAEgGABQAIABAEADQAFAEABAIQgBAHgDAFQgEAEgGACQgGACgGABIgLABIgMgBgAgQAbIAFABIAGAAIAIgBQAFgBAEgDQADgDAAgFQAAgFgDgDQgDgDgFgBIgKgBIgKAAgAgQgaIAAAWIALAAIAHgBQAEgBADgDQAEgCAAgFQAAgFgGgDQgEgCgIAAIgGAAIgFAAg");
	this.shape_75.setTransform(-340.3,14.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AASAkIAAgfIAAgIIABgJIAAgLIAAAAIgHAMIgFALIgKAQIgLAUIgQAAIAAhHIANAAIAAAfIAAAIIAAAJIgBAKIABAAIADgIIAEgHIAEgHIAVgkIAPAAIAABHg");
	this.shape_76.setTransform(-348.5,14.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgFAkIAAg9IgXAAIAAgKIA5AAIAAAKIgXAAIAAA9g");
	this.shape_77.setTransform(-355.7,14.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAQAkIgEgHIgDgIQgEgJgFgEQgEgEgJAAIgDAAIAAAgIgMAAIAAhHIAMAAIAAAgIADAAIAaggIAQAAIgdAhQAGABAGAEQAGAFAEAKIADAJIAEAJg");
	this.shape_78.setTransform(-361.9,14.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgOAhQgIgFgEgIQgEgIgBgLQABgJAEgJQAEgJAHgFQAIgFAJAAQAIAAAGADQAGADADAGQAEAFABAGQACAGgBAFIAAACIAAACIgxAAQAAAJAEAFQADAGAGACQAFADAFAAQAHAAAFgBIAIgDIACAKIgJADQgGABgJAAQgJAAgIgEgAATgGIgCgJQgBgFgEgDQgEgEgIAAQgEAAgFAEQgEADgCAFIgDAJIAlAAIAAAAg");
	this.shape_79.setTransform(-369.7,14.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AABAkIgJAAIgJgBIAAg8IgVAAIAAgKIAjAAIAAAYIADAAIAHgBQAIAAAHADQAHACAFAFQAFAEAAAJQAAAGgCAEQgCAEgDADQgHAFgIABQgHACgGAAIgDAAgAgEgBIAAAbIAEAAIAEABQAGAAAFgCQAFgBADgEQADgDAAgGQAAgGgDgDQgEgCgFgBQgFgBgFAAIgEAAIgEABg");
	this.shape_80.setTransform(-378,14.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgOAyQgHgEgEgHQgEgHgCgJIgBgSQAAgKACgKQADgKAGgHQAFgIAIgEQAIgEAIgBIAKgCIAIgDIAAAMIgIABIgIABQgIACgFADQgGADgEAHQgEAEgCAHIgCAMQAEgHAHgFQAGgEAGAAQAJAAAHAEQAHAEAEAIQAEAGAAALQAAAMgEAJQgEAJgHAEQgIAFgKABQgIgBgGgEgAgIgFQgFACgCADIgDAGIAAAJIABAJQABAGACAEQADAEAEADQAEADADABQAHgBAFgEQAEgEACgGQACgGAAgIIgCgMQgCgEgEgEQgFgEgHgBQgEABgEADg");
	this.shape_81.setTransform(-386.1,13.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgXAtQgKgGgGgMQgGgLAAgQQAAgOAGgMQAGgLALgHQAKgHAMAAQAOABAKAGQAKAGAGAMQAFALABAPQgBAQgGAMQgGAMgLAGQgKAGgMAAQgNAAgKgHgAgRgiQgHAGgDAJQgEAKAAAJQAAALAEAKQADAJAIAFQAHAGAJAAQAKAAAHgGQAHgFAEgKQAEgJAAgLQAAgGgCgIQgCgHgEgGQgEgGgGgDQgGgEgIAAQgJAAgIAGg");
	this.shape_82.setTransform(-395.3,13.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AggAzQgHgFgEgHQgEgIAAgIQAAgOAHgJQAIgIAOgEQAOgFASAAIAAgBIgCgGQgBgDgEgDQgFgCgGAAQgJAAgHADQgJACgFADIgGgVQAGgEAKgDQALgDANAAQARAAALAHQAKAGAFAKQAEALAAANIAAAjIAAAPIABALIgeAAIgBgLIgBAAQgFAHgJADQgFAEgKAAQgLAAgIgFgAAAAEQgHACgDADQgFAEAAAGQABAHADADQAEADAGAAQAEAAAFgDQAEgEACgFIABgDIAAgDIAAgMQgKAAgFACg");
	this.shape_83.setTransform(9.9,-5.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AAQA1IgEgJIgFgOQgEgKgDgFQgGgEgIAAIgDAAIAAAqIghAAIAAhpIAhAAIAAArIAEAAIAZgrIAnAAIgoAuQAKACAGAGQAHAIAEAMIAGAPIAHAQg");
	this.shape_84.setTransform(-0.7,-5.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AAUA1IAAghIABgOIABgMIABgSIgBAAIgGAPIgGAMIgKAYIgKAaIgpAAIAAhpIAgAAIAAAhIAAAVIgCAUIABABIAGgRIAGgMIATguIApAAIAABpg");
	this.shape_85.setTransform(-13.8,-5.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AAQA1IAAgqIggAAIAAAqIghAAIAAhpIAhAAIAAAnIAgAAIAAgnIAiAAIAABpg");
	this.shape_86.setTransform(-26.8,-5.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AAiBHIgBgjIhCAAIgBAjIgZAAIgBg6IAKgBIAGgLIAFgJQACgJABgJIABgRIAAgbIBUAAIAABSIAMABIgBA6gAgGghIgBAOIgDAOIgDAIIgEAIIAiAAIAAg4IgXAAg");
	this.shape_87.setTransform(-39.8,-4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgtAxIAHgCIAIgDIAIgGIAGgIIACgCIAAgCIAAgDIgBgDIgohhIAlAAIAQA1IACAKIACAKIAAAAIACgKIADgKIANg1IAkAAIgZBHIgOAiQgHANgFAIQgFAJgFAFQgIAHgJAEQgIADgHAAg");
	this.shape_88.setTransform(-51.8,-3.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("Ag1BMIAAhxIgBgTIAAgRIAdAAIABAPIABAAQAGgIAJgFQAIgEALAAQAMAAAKAGQAKAHAGAMQAGAMAAASQAAATgHALQgHANgLAGQgLAGgMAAQgIAAgIgDQgHgEgDgFIgBAAIAAA1gAgMgsQgFAEgCAIIgBADIAAADIAAAPIAAADIABAEQACAEAFAFQAFAEAHAAQAJAAAGgIQAGgGAAgOQAAgJgCgGQgDgHgFgEQgFgEgGAAQgGAAgGAFg");
	this.shape_89.setTransform(-63.9,-3.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgPA1IAAhPIggAAIAAgaIBeAAIAAAaIgfAAIAABPg");
	this.shape_90.setTransform(-75.8,-5.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_91.setTransform(-87.3,-5.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgPAxQgNgHgHgMQgHgMAAgRQAAgOAHgNQAHgNAOgIQANgHATgBIANABIAMAEIgFAZIgIgDIgLgBQgNAAgGAJQgIAIAAAMQAAAJAEAHQAEAGAEAEQAHADAJABIAKgBIAIgDIAEAYIgMAEQgHABgLABQgPgBgMgGg");
	this.shape_92.setTransform(-98.4,-5.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_93.setTransform(-114.3,-5.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AgkA1IAAhpIBJAAIAAAaIgoAAIAABPg");
	this.shape_94.setTransform(-124.7,-5.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_95.setTransform(-136.2,-5.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AAiBHIgBgjIhCAAIgBAjIgZAAIgBg6IAKgBIAGgLIAFgJQACgJABgJIABgRIAAgbIBUAAIAABSIAMABIgBA6gAgGghIgBAOIgDAOIgDAIIgEAIIAiAAIAAg4IgXAAg");
	this.shape_96.setTransform(-149.1,-4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AAwA1IgFgKIgFgOQgDgJgFgFQgFgFgHAAIgDAAIAAArIgeAAIAAgrIgDAAQgGAAgFAFQgGAFgCAJIgGAOIgEAKIghAAQAEgHADgJIAHgSQADgKAGgIQAGgFAJgCIgmguIAlAAIAZArIADAAIAAgrIAeAAIAAArIAEAAIAYgrIAlAAIglAuQAJACAHAGQAFAHAEAKIAHASIAGAQg");
	this.shape_97.setTransform(-163.6,-5.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgfAzQgJgFgDgHQgFgIAAgIQAAgOAIgJQAIgIAOgEQAPgFAQAAIAAgBIgBgGQgBgDgFgDQgEgCgGAAQgIAAgJADQgHACgGADIgGgVQAGgEALgDQAKgDANAAQARAAALAHQALAGADAKQAFALAAANIAAAjIABAPIAAALIgdAAIgDgLIAAAAQgGAHgHADQgHAEgJAAQgLAAgHgFgAAAAEQgGACgFADQgDAEAAAGQgBAHAEADQAEADAFAAQAFAAAEgDQAFgEACgFIAAgDIAAgDIAAgMQgIAAgGACg");
	this.shape_98.setTransform(-177.7,-5.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AAQA1IgEgJIgFgOQgEgKgDgFQgGgEgIAAIgDAAIAAAqIghAAIAAhpIAhAAIAAArIAEAAIAZgrIAnAAIgoAuQAKACAGAGQAHAIAEAMIAGAPIAHAQg");
	this.shape_99.setTransform(-188.3,-5.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AggAzQgHgFgEgHQgEgIgBgIQABgOAHgJQAIgIAOgEQAOgFARAAIAAgBIgBgGQgBgDgEgDQgFgCgGAAQgJAAgIADQgHACgGADIgGgVQAGgEAKgDQALgDANAAQASAAAKAHQAKAGAFAKQAEALAAANIAAAjIAAAPIABALIgeAAIgBgLIgBAAQgFAHgJADQgGAEgJAAQgLAAgIgFgAAAAEQgHACgDADQgFAEAAAGQABAHADADQAEADAGAAQAEAAAFgDQAEgEACgFIABgDIAAgDIAAgMQgKAAgFACg");
	this.shape_100.setTransform(-205.3,-5.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgQA1IAAhPIgeAAIAAgaIBdAAIAAAaIgfAAIAABPg");
	this.shape_101.setTransform(-215.9,-5.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_102.setTransform(-227.4,-5.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("AgdBHQgNgKgGgQQgGgPAAgVQAAgTAGgQQAFgRAMgLQAIgJALgFQALgEANgCIALgCIALgBIAKgCIgCAbIgMACIgNABQgMABgGAEQgJAEgFAGQgFAFgDAHQgDAIgBAGIABAAQAFgIAJgGQAKgGAKAAQAOAAALAGQALAIAGALQAFAKAAARQAAARgHANQgHAMgMAHQgNAHgQAAQgRAAgMgJgAgIgDQgEADgCACQgDAEgCAFQgBAGAAAGQAAAIACAHQACAHAFAGQAFAFAGAAQAIAAAEgEQAFgGACgHQACgHAAgHQAAgIgCgHQgCgHgFgDQgEgEgIgBQgEAAgEACg");
	this.shape_103.setTransform(-240,-8.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgfAzQgJgFgDgHQgFgIAAgIQAAgOAIgJQAIgIAOgEQAPgFAQAAIAAgBIgBgGQgBgDgFgDQgEgCgGAAQgIAAgJADQgHACgGADIgGgVQAGgEALgDQAKgDANAAQARAAALAHQALAGADAKQAFALAAANIAAAjIABAPIAAALIgdAAIgDgLIAAAAQgGAHgHADQgHAEgJAAQgLAAgHgFgAAAAEQgGACgFADQgDAEAAAGQgBAHAEADQAEADAFAAQAFAAAEgDQAFgEACgFIAAgDIAAgDIAAgMQgIAAgGACg");
	this.shape_104.setTransform(-252.4,-5.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("Ag1BMIAAhxIgBgTIAAgRIAdAAIABAPIABAAQAGgIAJgFQAIgEALAAQAMAAAKAGQAKAHAGAMQAGAMAAASQAAATgHALQgHANgLAGQgLAGgMAAQgIAAgIgDQgHgEgDgFIgBAAIAAA1gAgMgsQgFAEgCAIIgBADIAAADIAAAPIAAADIABAEQACAEAFAFQAFAEAHAAQAJAAAGgIQAGgGAAgOQAAgJgCgGQgDgHgFgEQgFgEgGAAQgGAAgGAFg");
	this.shape_105.setTransform(-264.3,-3.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AAUA2IAAgoIgHAAQgFAAgEACIgEAFQgFAFgCAGIgFANIgCAFIgCAEIgkAAIAEgGIADgGIAEgKIAFgLQACgFAEgEIAGgEIAHgDIAAgBQgGgBgGgDQgGgBgEgGQgFgFAAgIQAAgKAFgHQAFgGAIgDQAHgEALgCQAIgBAMAAIAXAAIASACIAABpgAgDgdQgGADgBAIQAAAEAEADQADADADACQAEABAFAAIAGAAIAFAAIAAgbIgFgBIgHAAQgIABgDADg");
	this.shape_106.setTransform(-282.2,-5.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("AggAzQgIgFgDgHQgFgIAAgIQABgOAHgJQAIgIAOgEQAPgFAQAAIAAgBIgBgGQgCgDgEgDQgEgCgGAAQgIAAgJADQgHACgGADIgGgVQAGgEALgDQAKgDANAAQASAAAKAHQAKAGAEAKQAFALAAANIAAAjIAAAPIABALIgdAAIgCgLIgBAAQgFAHgJADQgGAEgJAAQgLAAgIgFgAAAAEQgGACgFADQgDAEAAAGQAAAHADADQAEADAFAAQAFAAAFgDQAEgEACgFIAAgDIAAgDIAAgMQgIAAgGACg");
	this.shape_107.setTransform(-293.7,-5.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AARA1IAAgqIghAAIAAAqIghAAIAAhpIAhAAIAAAnIAhAAIAAgnIAhAAIAABpg");
	this.shape_108.setTransform(-305.6,-5.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AAPA2IAAgpIgBAAQgFADgHADQgFABgIAAQgRABgKgKQgJgKAAgRIAAglIAhAAIAAAhQAAAKAEAEQAEAFAGgBQAFAAAEgBQAEgBACgCIAAgvIAhAAIAABrg");
	this.shape_109.setTransform(-318.2,-5.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("AggAzQgHgFgFgHQgDgIAAgIQAAgOAHgJQAIgIAOgEQAOgFASAAIAAgBIgCgGQgBgDgEgDQgFgCgGAAQgJAAgHADQgJACgFADIgGgVQAGgEAKgDQALgDANAAQARAAALAHQAKAGAFAKQAEALAAANIAAAjIAAAPIABALIgeAAIgBgLIgBAAQgFAHgJADQgFAEgKAAQgLAAgIgFgAAAAEQgHACgDADQgFAEAAAGQAAAHAEADQAEADAGAAQAEAAAFgDQAEgEACgFIABgDIAAgDIAAgMQgKAAgFACg");
	this.shape_110.setTransform(-330.3,-5.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("Ag1BMIAAhxIgBgTIAAgRIAdAAIABAPIABAAQAGgIAJgFQAIgEALAAQAMAAAKAGQAKAHAGAMQAGAMAAASQAAATgHALQgHANgLAGQgLAGgMAAQgIAAgIgDQgHgEgDgFIgBAAIAAA1gAgMgsQgFAEgCAIIgBADIAAADIAAAPIAAADIABAEQACAEAFAFQAFAEAHAAQAJAAAGgIQAGgGAAgOQAAgJgCgGQgDgHgFgEQgFgEgGAAQgGAAgGAFg");
	this.shape_111.setTransform(-342.2,-3.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AgbA1QgKgDgJgFIAHgVQAFADAJACIARADQAIAAAFgEQAFgDAAgFQAAgGgGgDQgEgDgLAAIgQAAIAAgSIAQAAQAKAAADgDQAFgDAAgFQAAgFgFgDQgCgCgJgBQgHAAgIACIgNAGIgGgTQAKgGALgDQAMgCAKAAQAJgBAKADQAKADAGAGQAHAGAAALQAAAHgDAFQgEAFgFADQgFADgGABIAAABQAHABAGABQAHACAEAGQAEAFAAAIQAAAKgFAGQgFAHgIAEQgIADgKACIgPABQgMAAgLgCg");
	this.shape_112.setTransform(-354.4,-5.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_113.setTransform(-366.1,-5.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("Ag1BMIAAhxIgBgTIAAgRIAdAAIABAPIABAAQAGgIAJgFQAIgEALAAQAMAAAKAGQAKAHAGAMQAGAMAAASQAAATgHALQgHANgLAGQgLAGgMAAQgIAAgIgDQgHgEgDgFIgBAAIAAA1gAgMgsQgFAEgCAIIgBADIAAADIAAAPIAAADIABAEQACAEAFAFQAFAEAHAAQAJAAAGgIQAGgGAAgOQAAgJgCgGQgDgHgFgEQgFgEgGAAQgGAAgGAFg");
	this.shape_114.setTransform(-378.7,-3.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AAaBKIAAh3IgzAAIAAB3IghAAIAAiTIB1AAIAACTg");
	this.shape_115.setTransform(-393,-7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.4,-24.1,805,48.3);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAoApIgEgJIgDgKQgEgKgGgEQgGgEgIAAIgCAAIAAAlIgNAAIAAglIgCAAQgJAAgGAEQgFAEgEAKIgEAKIgEAJIgOAAIAFgLIAEgMQAEgKAGgGQAFgDAKgBIghgmIARAAIAbAkIADAAIAAgkIANAAIAAAkIADAAIAbgkIARAAIghAmQAKABAGADQAGAGADAKIAEAMIAFALg");
	this.shape.setTransform(282.6,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_1.setTransform(272.6,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAdA2IgBgaIg3AAIgBAaIgLAAIgBglIAHAAQAFgIADgJQADgGABgIQABgIAAgJIAAgWIA0AAIAABGIAJAAIAAAlgAgHgcIgBAQQgBAIgCAFIgDAIIgEAHIAkAAIAAg5IgZAAg");
	this.shape_2.setTransform(264,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_3.setTransform(255,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_4.setTransform(245.8,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASApIAAhFIgkAAIAABFIgOAAIAAhRIBBAAIAABRg");
	this.shape_5.setTransform(236.1,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgIAIIAEgMIADgOIAOgCIgFAQIgGANIgDALIgLABIAEgNg");
	this.shape_6.setTransform(226,19.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AARApIAAghIgLAFIgKABQgIAAgGgCQgGgDgDgGQgEgEAAgJIAAgeIAPAAIAAAcQAAAIAEAEQAEADAIAAQAEAAAFgBQAFgCADAAIAAgoIAPAAIAABRg");
	this.shape_7.setTransform(220,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_8.setTransform(211.4,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_9.setTransform(202.6,16.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_10.setTransform(194,15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgMAlQgJgFgFgKQgFgJAAgMQAAgLAGgLQAFgJAJgFQAKgHAMABQAHgBAFACIAJADIgDAMIgIgEIgKgBQgJABgFAEQgHAEgDAHQgDAHAAAHQAAAJAEAHQADAHAHAEQAEADAJAAIAKgBIAIgCIACALIgJACIgOACQgLAAgJgFg");
	this.shape_11.setTransform(186.8,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_12.setTransform(178.9,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIAIIAEgMIACgOIAPgCIgFAQIgGANIgDALIgLABIAEgNg");
	this.shape_13.setTransform(168.9,19.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_14.setTransform(163.3,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_15.setTransform(154.1,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AASApIgEgHIgEgKQgEgKgGgFQgFgEgKAAIgDAAIAAAkIgOAAIAAhRIAOAAIAAAkIAEAAIAcgkIATAAIgiAmQAIABAGAEQAHAHAFALIAEAJIAEALg");
	this.shape_16.setTransform(146,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_17.setTransform(136.7,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_18.setTransform(127.3,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_19.setTransform(118.7,15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgRApIgNgFIAEgKIALAEQAFABAGAAQAIAAAFgEQAFgEAAgGQAAgFgDgDQgDgDgGgCIgKgBIgHAAIAAgIIAHAAQAIAAAFgEQAGgEAAgFQAAgGgEgDQgFgDgFAAIgKABIgKAEIgDgJQAGgEAHgBQAHgCAGAAQAFAAAHACQAGACAEAFQAFAEAAAIQAAAFgDAEQgDAEgEADIgJADQAGABAGABQAFACADAEQADAFAAAGQAAAJgGAFQgFAGgIACQgIACgHAAQgHAAgHgBg");
	this.shape_20.setTransform(110.4,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_21.setTransform(99,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgxApIAAhRIAOAAIAABFIAdAAIAAhFIANAAIAABFIAcAAIAAhFIAPAAIAABRg");
	this.shape_22.setTransform(88.4,15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgWApIgKgBIAAhQIAPAAIAAAcIAHgBIAHAAQAHAAAJACQAIADAGAGQAGAEAAALQAAAGgDAFQgCAEgEAEQgEADgGACQgHADgGAAIgLABIgMAAgAgRgBIAAAfIAFAAIAGAAIAKgBQAGgCAEgDQAEgEAAgHQAAgHgEgEQgFgCgGgBQgEgCgFABIgGAAIgFABg");
	this.shape_23.setTransform(78.2,15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgjAeIADgCIAFgCQAFgEACgJQABgJAAgLIAAghIA3AAIAABQIgPAAIAAhEIgaAAIAAAVQAAAPgDAMQgCALgIAFIgHAEIgJABg");
	this.shape_24.setTransform(68.9,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_25.setTransform(60.4,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgaA5IgJgBIAAhwIA+AAIAAAMIgvAAIAAAfIAGgBIAIAAQAGAAAIACQAIACAGAEQAGAEAEAFQAEAHAAAKQAAAIgCAGQgDAGgFAFQgGAGgMADQgIADgMAAIgOAAgAgUgCIAAAvIAFABIAHAAQAHAAAFgCQAGgDAEgEIAFgHQABgFAAgFQAAgHgCgEQgDgFgEgDQgEgBgGgBIgKgBIgFAAIgGAAg");
	this.shape_26.setTransform(51.4,13.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAHQgCgDgBgEQABgDACgDQADgDADAAQAEAAACADQADADAAADQAAAEgDADQgCADgEAAQgDAAgDgDg");
	this.shape_27.setTransform(41.3,18.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_28.setTransform(35.4,15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_29.setTransform(26.2,15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_30.setTransform(17,16.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_31.setTransform(7.6,15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAoApIgEgJIgDgKQgEgKgGgEQgGgEgIAAIgCAAIAAAlIgNAAIAAglIgCAAQgJAAgGAEQgFAEgEAKIgEAKIgEAJIgOAAIAFgLIAEgMQAEgKAGgGQAFgDAKgBIghgmIARAAIAbAkIADAAIAAgkIANAAIAAAkIADAAIAbgkIARAAIghAmQAKABAGADQAGAGADAKIAEAMIAFALg");
	this.shape_32.setTransform(-2.3,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAcA2IAAgaIg3AAIgBAaIgMAAIAAglIAHAAQAFgIADgJQADgGAAgIQACgIAAgJIAAgWIA1AAIAABGIAIAAIgBAlgAgHgcIgBAQQgBAIgDAFIgDAIIgDAHIAkAAIAAg5IgZAAg");
	this.shape_33.setTransform(-12.7,16.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_34.setTransform(-21.2,15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_35.setTransform(-30.1,15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_36.setTransform(-39,15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAhApIgCgoIgBgMIgBgPIAAAAIgCAHIgDAJIgEAKIgQAoIgJAAIgOgoIgDgHIgDgKIgDgJIAAAAIgBAPIgBANIgCAnIgOAAIAHhRIASAAIAPAoIACAHIADAIIABAIIAAAAIACgJIAEgKIADgIIAOgkIASAAIAGBRg");
	this.shape_37.setTransform(-48.7,15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgUAnQgGgEgCgFQgDgFAAgGQAAgQANgFQAMgIAWAAIAAgCIgBgIQgBgEgEgDQgEgDgGgBIgMACIgKAFIgDgKQAFgEAHgCQAHgBAGAAQAMAAAHAEQAHAGACAHQADAHAAAJIAAAdIAAAKIABAJIgNAAIgBgKIgBAAQgDAFgHADQgGAEgHAAQgIAAgGgDgAAAAAQgGABgFAEQgFAEAAAIQAAAIAEADQAEAEAGgBQAGAAAFgEQAFgEACgFIAAgDIABgCIAAgNIgEAAIgNAAg");
	this.shape_38.setTransform(-62,15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAdA2IgBgaIg3AAIgBAaIgMAAIAAglIAHAAQAFgIADgJQACgGABgIQACgIAAgJIAAgWIA0AAIAABGIAJAAIgBAlgAgHgcIgBAQQgBAIgDAFIgCAIIgEAHIAkAAIAAg5IgZAAg");
	this.shape_39.setTransform(-70.6,16.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AghAvIAHgDQADgBADgDIAHgHQADgEADgGIABgCIAAgCIAAgBIgBgDIgehJIAQAAIASAwIADAJIAAAGIABAAIACgGIADgJIAQgwIAQAAIgWA6IgKAWIgHARQgFAHgFAEQgFAEgFADIgIADg");
	this.shape_40.setTransform(-78.9,16.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_41.setTransform(-87.4,16.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_42.setTransform(-96.1,15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_43.setTransform(-107.8,15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_44.setTransform(-116.1,15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgMAlQgJgFgFgKQgFgJAAgMQAAgLAGgLQAFgJAJgFQAKgHAMABQAHgBAFACIAJADIgDAMIgIgEIgKgBQgJABgFAEQgHAEgDAHQgDAHAAAHQAAAJAEAHQADAHAHAEQAEADAJAAIAKgBIAIgCIACALIgJACIgOACQgLAAgJgFg");
	this.shape_45.setTransform(-123.2,15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_46.setTransform(-131.8,15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_47.setTransform(-141.1,15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgWApIgKgBIAAhQIAPAAIAAAcIAHgBIAHAAQAHAAAJACQAIADAGAGQAGAEAAALQAAAGgDAFQgCAEgEAEQgEADgGACQgHADgGAAIgLABIgMAAgAgRgBIAAAfIAFAAIAGAAIAKgBQAGgCAEgDQAEgEAAgHQAAgHgEgEQgFgCgGgBQgEgCgFABIgGAAIgFABg");
	this.shape_48.setTransform(-149.7,15);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkAeIAFgCIADgCQAGgEACgJQABgJAAgLIAAghIA3AAIAABQIgOAAIAAhEIgbAAIAAAVQAAAPgDAMQgCALgIAFIgHAEIgJABg");
	this.shape_49.setTransform(-159.1,15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_50.setTransform(-167.1,15);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgGApIAAhFIgaAAIAAgMIBBAAIAAAMIgaAAIAABFg");
	this.shape_51.setTransform(-174.9,15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_52.setTransform(-183,15);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAdA2IgBgaIg3AAIgBAaIgMAAIAAglIAHAAQAFgIADgJQACgGABgIQACgIAAgJIAAgWIA0AAIAABGIAJAAIgBAlgAgHgcIgBAQQgBAIgDAFIgCAIIgEAHIAkAAIAAg5IgZAAg");
	this.shape_53.setTransform(-192.4,16.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_54.setTransform(-201.4,15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_55.setTransform(-210.1,15);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgRApIgNgFIAEgKIALAEQAFABAGAAQAIAAAFgEQAFgEAAgGQAAgFgDgDQgDgDgGgCIgKgBIgHAAIAAgIIAHAAQAIAAAFgEQAGgEAAgFQAAgGgEgDQgFgDgFAAIgKABIgKAEIgDgJQAGgEAHgBQAHgCAGAAQAFAAAHACQAGACAEAFQAFAEAAAIQAAAFgDAEQgDAEgEADIgJADQAGABAGABQAFACADAEQADAFAAAGQAAAJgGAFQgFAGgIACQgIACgHAAQgHAAgHgBg");
	this.shape_56.setTransform(-218.4,15);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_57.setTransform(-226.6,15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgTAlQgJgFgFgKQgGgJAAgNQAAgLAGgLQAFgJAJgFQAKgFAJAAQAMAAAJAFQAJAFAFAJQAEAKABAMQgBAKgDAJQgEAHgGAGQgFAFgIADQgHACgGAAQgLAAgIgFgAgNgZQgFAEgDAHQgDAIAAAGQABAIADAIQADAHAFAEQAGAEAGAAQAHAAAFgEQAGgEADgIQADgGAAgJQAAgGgCgHQgDgHgFgFQgGgFgIAAQgHAAgGAFg");
	this.shape_58.setTransform(-236,15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AglA6IAAhXIAAgOIgBgNIANAAIABAPQAFgIAHgEQAIgEAIAAQAKAAAIAFQAIAFAEAKQAFAJAAAMQgBAPgFAIQgFAKgJAFQgIAFgKAAQgGgBgHgDQgGgDgEgGIgBAAIAAAsgAgNgoQgGAFgDAIIAAADIgBADIAAAOIABADIAAADQACAGAGAFQAGAFAIAAQAHAAAFgEQAGgEADgHQADgFAAgKQAAgIgDgHQgDgHgGgEQgFgEgHAAQgHAAgGAFg");
	this.shape_59.setTransform(-245.2,16.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AASApIAAhFIgkAAIAABFIgPAAIAAhRIBCAAIAABRg");
	this.shape_60.setTransform(-254.9,15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_61.setTransform(-267.4,15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_62.setTransform(-276.3,15);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AATApIAAgmIglAAIAAAmIgPAAIAAhRIAPAAIAAAiIAlAAIAAgiIAPAAIAABRg");
	this.shape_63.setTransform(-285.7,15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_64.setTransform(-294.6,15);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AARApIAAghIgLAFIgKABQgIAAgGgCQgGgDgDgGQgEgEAAgJIAAgeIAPAAIAAAcQAAAIAEAEQAEADAIAAQAEAAAFgBQAFgCADAAIAAgoIAPAAIAABRg");
	this.shape_65.setTransform(-303.3,15);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAUApIAAgjIAAgKIABgKIAAgMIAAAAIgHAOIgHAMIgKATIgOAWIgRAAIAAhRIAOAAIAAAjIAAAKIAAAKIgBALIABAAIAEgJIAEgHIAFgJIAYgpIASAAIAABRg");
	this.shape_66.setTransform(-312.3,15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgjAeIADgCIAFgCQAFgEABgJQACgJAAgLIAAghIA3AAIAABQIgPAAIAAhEIgaAAIAAAVQABAPgDAMQgDALgIAFIgHAEIgJABg");
	this.shape_67.setTransform(-321.8,15);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgQAlQgJgFgFgKQgFgJAAgMQAAgLAFgKQAFgKAIgFQAJgHAKABQAKAAAHADQAGAEAEAGQAEAGABAHIACAMIAAADIgBACIg3AAQAAAKAEAHQADAGAHADQAGACAGAAIANAAIAJgDIADAKIgLADIgQACQgLAAgJgFgAAVgGIgBgLQgCgFgEgEQgFgFgIAAQgGABgFADQgFAEgCAGQgDAFAAAGIApAAIAAAAg");
	this.shape_68.setTransform(-329.8,15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgWApIgKgBIAAhPIAMgBIAOAAIAKAAQAGABAGACQAGACADAEQAEAEAAAHQAAAHgFAGQgFAEgHABIAAABQAJABAGADQAGAFAAAJQAAAIgFAFQgEAFgHADQgHACgHAAIgMABIgNAAgAgSAfIAGAAIAGAAIAJgBQAGgBAEgDQAEgDABgGQgBgGgDgDQgEgDgGgCIgLAAIgLAAgAgRgeIAAAZIALAAIAJgBQAFgBADgEQADgDAAgEQAAgGgFgDQgGgDgJAAIgGAAIgFAAg");
	this.shape_69.setTransform(-338.1,15);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgeA5IgEAAIACgMIACAAIADAAQAGAAAEgDQAFgDADgFIAFgIIAAgEIgBgDIgmhMIARAAIAXAxIADAIIADAKIAAAAIAEgJIADgJIASgxIAQAAIgYA5IgHAQIgHAPIgGANQgFAHgGADQgHAEgHAAIgFgBg");
	this.shape_70.setTransform(-347,13.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AggAzQgIgFgDgHQgFgIAAgIQABgOAHgJQAIgIAOgEQAPgFAQAAIAAgBIgBgGQgCgDgEgDQgEgCgGAAQgIAAgJADQgHACgGADIgGgVQAGgEALgDQAKgDANAAQASAAAKAHQALAGADAKQAFALAAANIAAAjIAAAPIABALIgdAAIgCgLIgBAAQgFAHgJADQgGAEgJAAQgLAAgIgFgAAAAEQgGACgFADQgDAEAAAGQAAAHADADQAEADAFAAQAFAAAFgDQAEgEACgFIAAgDIAAgDIAAgMQgIAAgGACg");
	this.shape_71.setTransform(47,-7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("Ag1BMIAAhxIgBgTIAAgRIAdAAIABAPIABAAQAGgIAJgFQAIgEALAAQAMAAAKAGQAKAHAGAMQAGAMAAASQAAATgHALQgHANgLAGQgLAGgMAAQgIAAgIgDQgHgEgDgFIgBAAIAAA1gAgMgsQgFAEgCAIIgBADIAAADIAAAPIAAADIABAEQACAEAFAFQAFAEAHAAQAJAAAGgIQAGgGAAgOQAAgJgCgGQgDgHgFgEQgFgEgGAAQgGAAgGAFg");
	this.shape_72.setTransform(35.1,-4.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgiApQgQgOABgaQAAgIACgLQAEgKAGgIQAHgJAKgEQALgFAMgBQARABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQABAIAEAEQAEAFAHABQAEADAJAAQAIAAAIgBIANgEIAFAXQgJADgJACQgKABgMAAQgZAAgOgOgAAUgKIgCgJQgCgFgDgEQgFgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAmAAIAAAAg");
	this.shape_73.setTransform(22.6,-7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AAVBLIAAggIAAgPIABgOIABgQIgBAAIgGANIgGAOIgKAYIgKAaIgpAAIAAhpIAgAAIAAAfIAAAXIgCAVIABAAIAHgRIAFgOIATgsIApAAIAABpgAgWg0QgHgIgBgPIAVAAQABAIACAEQADAEADAAQAEAAADgEQADgEAAgIIAVAAQgBAQgIAIQgJAHgNABQgOAAgIgJg");
	this.shape_74.setTransform(10.1,-9.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgjApQgPgOAAgaQABgIADgLQADgKAHgIQAGgJALgEQAKgFALgBQASABALAIQAKAHAFAMQAEAMABAOIgBAGIAAAFIhEAAQAAAIAFAEQAEAFAHABQAFADAHAAQAJAAAHgBIAPgEIADAXQgHADgLACQgKABgKAAQgaAAgPgOgAATgKIgBgJQgBgFgEgEQgFgEgIAAQgEAAgFAEQgEADgDAFIgCAKIAlAAIAAAAg");
	this.shape_75.setTransform(-2.1,-7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgaA2IgOAAIgJgBIAAhoIALgBIAPgBIARgBIAOABQAJABAJACQAIADAGAGQAFAFABAKQgBAHgDAEQgDAFgFADQgFADgFABIAAAAQAMACAHAFQAHAGAAAMQAAALgHAHQgGAGgKAEQgKADgLABIgRABIgPgBgAgQAiIAFABIAGAAQAFAAAEgCQAFgBADgDQAEgDAAgFQAAgHgGgEQgHgDgKAAIgJAAgAgLghIgFABIAAAWIAJAAQAIAAAGgDQAFgDABgGQAAgFgFgDQgFgDgIAAIgGAAg");
	this.shape_76.setTransform(-13.8,-7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AARA1IAAgqIghAAIAAAqIghAAIAAhpIAhAAIAAAnIAhAAIAAgnIAhAAIAABpg");
	this.shape_77.setTransform(-26.5,-7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_78.setTransform(-39.3,-7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AAQA1IgEgJIgFgOQgEgKgDgFQgGgEgIAAIgDAAIAAAqIghAAIAAhpIAhAAIAAArIAEAAIAZgrIAnAAIgoAuQAKACAGAGQAHAIAEAMIAGAPIAHAQg");
	this.shape_79.setTransform(-50.7,-7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIADgLQAEgKAGgIQAHgJAKgEQALgFALgBQASABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAEADAJAAQAIAAAIgBIANgEIAFAXQgJADgJACQgLABgLAAQgZAAgOgOgAAUgKIgCgJQgCgFgEgEQgEgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAmAAIAAAAg");
	this.shape_80.setTransform(-67.3,-7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AAmA1IgCgrIAAgKIAAgMIgBgNIAAAAIgEALIgDAKIgEAMIgOAsIgXAAIgMgrIgDgKIgEgMIgCgMIgBAAIAAAVIgBAPIgCAqIgeAAIAHhpIAsAAIALAoIADAMIADANIAAAAIADgNIAGgOIALgmIArAAIAGBpg");
	this.shape_81.setTransform(-81.1,-7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AAUA1IAAghIABgOIAAgMIABgSIgBAAIgFAPIgGAMIgKAYIgKAaIgpAAIAAhpIAgAAIAAAhIgBAVIgBAUIABABIAGgRIAHgMIASguIApAAIAABpg");
	this.shape_82.setTransform(-95.6,-7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AAvA1IgEgKIgFgOQgDgJgFgFQgFgFgHAAIgCAAIAAArIgfAAIAAgrIgCAAQgIAAgEAFQgGAFgCAJIgGAOIgEAKIghAAQAEgHADgJIAGgSQAEgKAGgIQAGgFAJgCIgmguIAlAAIAZArIADAAIAAgrIAfAAIAAArIADAAIAZgrIAkAAIglAuQAJACAHAGQAGAHADAKIAGASIAHAQg");
	this.shape_83.setTransform(-110.2,-7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIADgLQAEgKAGgIQAHgJAKgEQALgFALgBQASABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAEADAJAAQAIAAAIgBIANgEIAFAXQgJADgJACQgLABgLAAQgZAAgOgOgAAUgKIgCgJQgCgFgEgEQgEgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAmAAIAAAAg");
	this.shape_84.setTransform(-124,-7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("Ag1BMIAAhxIgBgTIAAgRIAdAAIABAPIABAAQAGgIAJgFQAIgEALAAQAMAAAKAGQAKAHAGAMQAGAMAAASQAAATgHALQgHANgLAGQgLAGgMAAQgIAAgIgDQgHgEgDgFIgBAAIAAA1gAgMgsQgFAEgCAIIgBADIAAADIAAAPIAAADIABAEQACAEAFAFQAFAEAHAAQAJAAAGgIQAGgGAAgOQAAgJgCgGQgDgHgFgEQgFgEgGAAQgGAAgGAFg");
	this.shape_85.setTransform(-136.2,-4.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgaA2IgOAAIgJgBIAAhoIALgBIAPgBIARgBIAOABQAJABAJACQAIADAGAGQAFAFABAKQgBAHgDAEQgDAFgFADQgFADgFABIAAAAQAMACAHAFQAHAGAAAMQAAALgHAHQgGAGgKAEQgKADgLABIgRABIgPgBgAgQAiIAFABIAGAAQAFAAAEgCQAFgBADgDQAEgDAAgFQAAgHgGgEQgHgDgKAAIgJAAgAgLghIgFABIAAAWIAJAAQAIAAAGgDQAFgDABgGQAAgFgFgDQgFgDgIAAIgGAAg");
	this.shape_86.setTransform(-153.3,-7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgaA2IgOAAIgJgBIAAhoIALgBIAPgBIARgBIAOABQAJABAJACQAIADAGAGQAFAFABAKQgBAHgDAEQgDAFgFADQgFADgFABIAAAAQAMACAHAFQAHAGAAAMQAAALgHAHQgGAGgKAEQgKADgLABIgRABIgPgBgAgQAiIAFABIAGAAQAFAAAEgCQAFgBADgDQAEgDAAgFQAAgHgGgEQgHgDgKAAIgJAAgAgLghIgFABIAAAWIAJAAQAIAAAGgDQAFgDABgGQAAgFgFgDQgFgDgIAAIgGAAg");
	this.shape_87.setTransform(-169.9,-7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgbAxQgNgHgHgMQgHgMgBgSQABgPAHgNQAHgNANgHQANgHAPAAQARAAAMAHQAMAHAHANQAHAMAAAQQAAASgIANQgJAMgMAGQgNAHgOAAQgPAAgMgHgAgLgaQgFAFgCAHQgCAHAAAHQAAAJADAHQACAHAFAEQAFAFAFAAQAKgBAGgIQAFgJAAgOQAAgHgCgHQgCgHgFgFQgEgFgIAAQgGAAgFAFg");
	this.shape_88.setTransform(-182.6,-7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgPA1IAAhPIggAAIAAgaIBfAAIAAAaIggAAIAABPg");
	this.shape_89.setTransform(-194,-7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AARA1IAAgqIggAAIAAAqIgiAAIAAhpIAiAAIAAAnIAgAAIAAgnIAhAAIAABpg");
	this.shape_90.setTransform(-205.5,-7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIADgLQAEgKAHgIQAGgJAKgEQAKgFAMgBQASABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAEADAIAAQAJAAAIgBIANgEIAFAXQgIADgKACQgLABgLAAQgZAAgOgOgAATgKIgBgJQgBgFgFgEQgEgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAlAAIAAAAg");
	this.shape_91.setTransform(-217.5,-7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AAVA1IAAghIAAgOIABgMIAAgSIAAAAIgGAPIgFAMIgLAYIgKAaIgpAAIAAhpIAgAAIAAAhIgBAVIgBAUIABABIAHgRIAFgMIATguIApAAIAABpg");
	this.shape_92.setTransform(-230,-7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("Ag0AcIAHgBIAFgEQAEgFACgIIABgTIAAgsIBWAAIAABpIgiAAIAAhQIgVAAIAAAUQABASgEANQgDAOgJAHQgFAFgIADQgHACgLAAg");
	this.shape_93.setTransform(-243.2,-6.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AAQA1IgEgJIgFgOQgEgKgDgFQgGgEgIAAIgDAAIAAAqIghAAIAAhpIAhAAIAAArIAEAAIAZgrIAnAAIgoAuQAKACAGAGQAHAIAEAMIAGAPIAHAQg");
	this.shape_94.setTransform(-253.6,-7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIADgLQAEgKAGgIQAHgJAKgEQALgFALgBQASABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAEADAJAAQAIAAAIgBIANgEIAFAXQgJADgJACQgLABgLAAQgZAAgOgOgAAUgKIgCgJQgCgFgEgEQgEgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAmAAIAAAAg");
	this.shape_95.setTransform(-270.3,-7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AAVA1IAAghIAAgOIABgMIABgSIgBAAIgGAPIgFAMIgLAYIgKAaIgpAAIAAhpIAgAAIAAAhIgBAVIgBAUIABABIAHgRIAFgMIATguIApAAIAABpg");
	this.shape_96.setTransform(-282.7,-7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AAQA1IAAgqIgfAAIAAAqIgiAAIAAhpIAiAAIAAAnIAfAAIAAgnIAiAAIAABpg");
	this.shape_97.setTransform(-295.7,-7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgiApQgQgOABgaQAAgIACgLQAEgKAGgIQAHgJAKgEQALgFAMgBQARABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQABAIAEAEQAEAFAHABQAEADAJAAQAIAAAIgBIANgEIAFAXQgJADgJACQgKABgMAAQgZAAgOgOgAAUgKIgCgJQgCgFgEgEQgEgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAmAAIAAAAg");
	this.shape_98.setTransform(-307.7,-7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AAiBHIgBgjIhCAAIgBAjIgZAAIgBg6IAKgBIAGgLIAFgJQACgJABgJIABgRIAAgbIBUAAIAABSIAMABIgBA6gAgGghIgBAOIgDAOIgDAIIgEAIIAiAAIAAg4IgXAAg");
	this.shape_99.setTransform(-320.2,-5.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AgiApQgPgOgBgaQAAgIADgLQAEgKAHgIQAGgJAKgEQAKgFAMgBQASABAKAIQALAHAFAMQAFAMgBAOIAAAGIgBAFIhDAAQAAAIAFAEQAEAFAHABQAEADAIAAQAJAAAIgBIANgEIAFAXQgIADgKACQgLABgLAAQgZAAgOgOgAATgKIgBgJQgBgFgFgEQgEgEgHAAQgGAAgEAEQgEADgCAFIgDAKIAlAAIAAAAg");
	this.shape_100.setTransform(-332.3,-7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgnBKIgPgBIAAiQIAMgBIAPgBIARgBQANAAALACQAKACAIAFQAIAEAEAHQAGAIAAAKQAAAKgHAIQgGAJgMAEQANAEAIAIQAIAIAAAPQABAKgFAIQgEAIgHAGQgIAGgOADQgPAEgTAAIgWgBgAgUAyIAFAAIAHAAQAIAAAFgCQAHgCADgFQAEgEAAgJQAAgGgEgFQgEgFgGgCQgGgCgIAAIgLAAgAgPgxIgFAAIAAAjIALAAQALAAAHgFQAHgFAAgIQAAgIgHgFQgFgFgKAAIgJABg");
	this.shape_101.setTransform(-344.5,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.4,-25.3,707,50.7);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.m2();
	this.instance.setTransform(-53.5,-76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.5,-76,107,152);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQA9QgEgFgBgIQABgHAEgFQAFgFAHAAQAGAAAFAFQAEAFABAIQgBAHgEAFQgFAFgGAAQgHAAgFgFgAgPAWIgBgFQAAgHACgHQADgGAGgHIAGgLQADgFAAgEQAAgFgDgDQgBgDgHgBQgFAAgFACIgJAEIgHgVIAOgFQAIgCAKgBQALABAIAEQAIAEAEAGQAEAHAAAIQAAAHgDAGQgCAGgEAEIgIAJQgFAEgCAGQgCAFAAAHIAAADg");
	this.shape.setTransform(207,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAqQgLgFgHgLQgGgLAAgOQAAgOAGgLQAGgLAMgGQALgGANAAQAOAAALAGQAKAGAGALQAGALAAANQAAAQgHALQgHAKgLAGQgLAFgMAAQgNAAgKgGgAgJgWQgEAEgCAGQgCAGAAAGQAAAHACAHQACAGAEADQAFAFAEAAQAIgBAFgHQAFgIAAgMQAAgFgCgHQgBgGgFgEQgEgFgGABQgFgBgEAFg");
	this.shape_1.setTransform(197.3,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAOAuIAAglIgbAAIAAAlIgdAAIAAhbIAdAAIAAAhIAbAAIAAghIAdAAIAABbg");
	this.shape_2.setTransform(186.3,13.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AApAuIgEgJIgEgMQgDgIgEgEQgEgEgGAAIgCAAIAAAlIgaAAIAAglIgDAAQgGAAgEAEQgEAEgDAIIgEAMIgEAJIgdAAIAGgOIAGgPQADgJAFgGQAFgFAIgCIgggoIAgAAIAVAmIADAAIAAgmIAaAAIAAAmIADAAIAVgmIAgAAIghAoQAIACAGAFQAFAGADAJIAFAPIAGAOg");
	this.shape_3.setTransform(173.8,13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgmArIAGgCIAGgDIAHgFIAGgHIABgCIAAgCIAAgCIgBgDIgihTIAfAAIAPAuIABAJIABAIIABAAIACgIIACgJIALguIAgAAIgXA9IgMAdQgFALgFAIQgEAHgEAEQgHAHgIACQgHADgGABg");
	this.shape_4.setTransform(161.9,15.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAOAuIAAglIgbAAIAAAlIgdAAIAAhbIAdAAIAAAhIAbAAIAAghIAdAAIAABbg");
	this.shape_5.setTransform(151.4,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAqQgLgFgHgLQgGgLAAgOQAAgOAGgLQAGgLAMgGQALgGANAAQAOAAALAGQAKAGAGALQAGALAAANQAAAQgHALQgHAKgLAGQgLAFgMAAQgNAAgKgGgAgJgWQgEAEgCAGQgCAGAAAGQAAAHACAHQACAGAEADQAFAFAEAAQAIgBAFgHQAFgIAAgMQAAgFgCgHQgBgGgFgEQgEgFgGABQgFgBgEAFg");
	this.shape_6.setTransform(136.6,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAuIAAhbIA/AAIAAAWIgiAAIAABFg");
	this.shape_7.setTransform(127.6,13.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgXAqQgLgFgHgLQgGgLAAgOQAAgOAGgLQAGgLAMgGQALgGANAAQAOAAALAGQAKAGAGALQAGALAAANQAAAQgHALQgHAKgLAGQgLAFgMAAQgNAAgKgGgAgJgWQgEAEgCAGQgCAGAAAGQAAAHACAHQACAGAEADQAFAFAEAAQAIgBAFgHQAFgIAAgMQAAgFgCgHQgBgGgFgEQgEgFgGABQgFgBgEAFg");
	this.shape_8.setTransform(117.8,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAuIAAhFIgbAAIAAgWIBRAAIAAAWIgbAAIAABFg");
	this.shape_9.setTransform(108,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgaAvQgHgCgGgEIAEgTIAJADIANABQAKAAAFgFQAHgEACgIIgmAAIAAgRIAmAAQgBgIgGgFQgEgFgMAAQgGAAgGACIgIACIgGgSQAHgEAIgBQAIgCAIAAQAIAAAJADQAJACAGAHQAHAGAEAIQAEAKAAALQAAAOgGALQgGALgMAGQgMAGgPAAIgPgBg");
	this.shape_10.setTransform(98.8,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AARAvIAAgjIgFAAQgGAAgCACQgEABAAADQgEAEgCAGIgEALIgCAEIgBAEIggAAIADgFIAEgGIADgIIAEgJIAFgIIAGgEIAGgDIAAgBQgFAAgGgDQgFAAgEgFQgDgFgBgHQAAgJAEgFQAFgGAHgDQAHgDAIgBQAHgCAKAAIAUABIAPACIAABagAgDgZQgFADAAAGQAAAEACADIAGAEIAIABIAFAAIAEAAIAAgXIgEgBIgGAAQgHAAgDADg");
	this.shape_11.setTransform(84.8,13.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgtAZIAGgCIAFgDQAEgEABgHIABgRIAAgmIBKAAIAABbIgdAAIAAhFIgSAAIAAASQAAAOgDAMQgDALgIAHQgEAEgGADQgHACgKAAg");
	this.shape_12.setTransform(74.3,13.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAeA9IgBgeIg5AAIgBAeIgWAAIgBgyIAJAAIAGgJIADgJIAEgOIABgQIAAgXIBIAAIAABHIAKAAIgBAygAgFgcIgBAMIgCAMIgCAHIgFAHIAeAAIAAgxIgUAAg");
	this.shape_13.setTransform(64,15.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXAqQgLgFgHgLQgGgLAAgOQAAgOAGgLQAGgLAMgGQALgGANAAQAOAAALAGQAKAGAGALQAGALAAANQAAAQgHALQgHAKgLAGQgLAFgMAAQgNAAgKgGgAgJgWQgEAEgCAGQgCAGAAAGQAAAHACAHQACAGAEADQAFAFAEAAQAIgBAFgHQAFgIAAgMQAAgFgCgHQgBgGgFgEQgEgFgGABQgFgBgEAFg");
	this.shape_14.setTransform(49.2,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgNAuIAAhFIgbAAIAAgWIBRAAIAAAWIgbAAIAABFg");
	this.shape_15.setTransform(39.4,13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AANAvIAAgjIAAAAIgLAEQgEACgHAAQgPAAgIgJQgJgIABgPIAAggIAdAAIAAAdQgBAIADAEQAEAEAGAAIAGgBIAGgDIAAgpIAcAAIAABdg");
	this.shape_16.setTransform(29.7,13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbAuIgPgBIAAhaIAcAAIAAAbIAHgBIAHAAQAKAAAKADQAKADAHAHQAGAGABAMQAAAIgEAGQgDAGgHAEQgFAFgIACQgHACgJABIgNAAIgPAAgAgJAAIgFAAIAAAaIAFABIAEAAIAIgBQAFgBADgDQADgEAAgFQAAgGgDgDQgEgDgEgBIgIAAIgEAAg");
	this.shape_17.setTransform(15.6,13.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAuIAAhFIgbAAIAAgWIBRAAIAAAWIgbAAIAABFg");
	this.shape_18.setTransform(5.7,13.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgbAsQgHgEgEgHQgDgGAAgHQAAgNAHgHQAHgHAMgDQAMgEAPAAIAAgBIgBgGQgCgCgEgCQgDgCgGAAQgHAAgHACQgGACgFADIgFgTQAEgDAKgCQAJgDALAAQAPAAAJAGQAJAFAEAJQADAJAAALIAAAeIAAANIACAKIgaAAIgCgJIgBAAQgEAFgHADQgFADgIAAQgKAAgGgEgAAAADQgGACgDADQgDADgBAGQAAAGADACQAEACAFABQADAAAEgEQAFgDABgEIAAgDIAAgCIAAgKQgHAAgFABg");
	this.shape_19.setTransform(-4,13.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAOAuIAAglIgbAAIAAAlIgdAAIAAhbIAdAAIAAAhIAbAAIAAghIAdAAIAABbg");
	this.shape_20.setTransform(-14.3,13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXAuQgJgDgIgEIAHgSIALAFIAPACQAIAAADgDQAFgDAAgEQAAgGgGgCQgDgDgJAAIgOAAIgBgPIAPAAQAIAAADgDQAEgDAAgEQAAgEgEgCQgCgDgHAAQgHAAgGACQgGACgGADIgFgRQAJgFAKgCQAKgCAIAAQAIgBAJADQAIACAFAGQAGAFABAJQAAAGgDAFQgEAEgEACIgJAEIAAABQAFAAAGABQAGACADAFQAEAEgBAHQABAJgFAFQgFAGgGADQgIADgHACIgOABQgKAAgJgCg");
	this.shape_21.setTransform(-24.5,13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgmArIAGgCIAGgDIAHgFIAGgHIABgCIAAgCIAAgCIgBgDIgihTIAfAAIAPAuIABAJIABAIIABAAIACgIIACgJIALguIAgAAIgXA9IgLAdQgGALgFAIQgEAHgEAEQgHAHgIACQgHADgGABg");
	this.shape_22.setTransform(-34,15.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdAjQgOgNAAgVQAAgIADgIQADgJAGgHQAGgHAIgEQAJgFALAAQAOAAAJAHQAJAHAFAKQADALAAALIAAAFIgBAFIg5AAQAAAFAEAFQAEADAFACQAEADAHAAIAOgBIALgEIAFAUQgIADgIACQgIABgKAAQgWAAgMgNgAARgJIgCgIQgBgEgDgDQgEgDgHgBQgDABgFADQgDADgCAEIgDAIIAhAAIAAAAg");
	this.shape_23.setTransform(-47.8,13.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgNAuIAAhFIgbAAIAAgWIBRAAIAAAWIgbAAIAABFg");
	this.shape_24.setTransform(-57.2,13.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AARAuIAAgcIABgNIAAgJIABgRIgBAAIgEAOIgFAJIgJAVIgJAXIgjAAIAAhbIAcAAIAAAdIgBASIgBASIABAAIAFgPIAFgKIAQgoIAkAAIAABbg");
	this.shape_25.setTransform(-67.3,13.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNAuIAAhFIgbAAIAAgWIBRAAIAAAWIgbAAIAABFg");
	this.shape_26.setTransform(-77.3,13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgXAqQgLgFgHgLQgGgLAAgOQAAgOAGgLQAGgLAMgGQALgGANAAQAOAAALAGQAKAGAGALQAGALAAANQAAAQgHALQgHAKgLAGQgLAFgMAAQgNAAgKgGgAgJgWQgEAEgCAGQgCAGAAAGQAAAHACAHQACAGAEADQAFAFAEAAQAIgBAFgHQAFgIAAgMQAAgFgCgHQgBgGgFgEQgEgFgGABQgFgBgEAFg");
	this.shape_27.setTransform(-87.2,13.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAVA/IgLgWIgGgNIgEgLIAAAAIgFALIgFANIgLAWIghAAIAlg/Igjg/IAhAAIALAYIAFALIADAKIAAAAIAFgLIAEgKIALgYIAhAAIgkA/IAmA/g");
	this.shape_28.setTransform(-98.4,11.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgEAEgEAAQgEAAgDgEg");
	this.shape_29.setTransform(-110.1,17.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgSAqQgKgGgGgLQgFgKAAgOQAAgMAFgLQAFgLAKgGQAKgHALAAQALAAAIAEQAHAEAEAHQAFAHABAHQACAIAAAGIAAADIAAADIg/AAQAAALAEAHQAFAHAHADQAHADAGAAQAJABAGgCQAGgBAFgCIADAMIgMADQgIACgLABQgMgBgKgFgAgLgeQgGAFgCAGQgDAFgBAGIAvAAQAAgFgCgGQgCgGgFgEQgFgFgJgBQgHABgFAEg");
	this.shape_30.setTransform(-117,13.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag3AtIAAhaIAQAAIAABOIAhAAIAAhOIAOAAIAABOIAgAAIAAhOIAQAAIAABag");
	this.shape_31.setTransform(-128.7,13.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgYAuIgMgBIAAhaIARAAIAAAfIAHgBIAIAAQAJAAAJACQAKADAGAHQAGAFABAMQgBAHgCAGQgDAEgEAFQgFAEgHACIgOADIgMABIgNAAgAgOgDIgFABIAAAjIAFABIAHAAIALgCQAHgCAEgDQAFgFAAgIQAAgIgFgEQgFgCgGgCIgMgBIgGAAg");
	this.shape_32.setTransform(-140.1,13.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgoAhIAFgBIAEgDQAHgFABgJQACgKAAgOIAAgkIA+AAIAABaIgRAAIAAhNIgdAAIAAAXQAAASgDANQgDAMgJAGQgDADgFACQgEABgGAAg");
	this.shape_33.setTransform(-150.7,13.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgVAqQgLgGgFgLQgGgKgBgPQABgNAGgLQAGgLALgFQAJgGALAAQANAAALAGQAKAFAFALQAFALAAANQAAALgDAKQgFAJgGAGQgGAGgJACQgIADgHABQgMgBgJgFgAgOgcQgHAFgCAIQgDAIAAAHQAAAKADAIQAEAHAGAGQAHAEAGAAQAIAAAGgEQAGgFAEgIQAEgIgBgKQAAgGgCgJQgDgHgGgGQgGgFgKgBQgIABgGAFg");
	this.shape_34.setTransform(-160.1,13.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgTBAQgIgFgFgJQgFgJgCgLQgCgLAAgMQAAgNADgNQAEgNAHgJQAHgKAJgFQAKgFAMgCIAMgCIAKgDIAAAOIgJACIgLACQgLABgGAFQgIAEgFAIQgFAFgCAJIgEAQIABAAQAFgKAJgGQAIgFAIAAQAMAAAIAFQAJAGAFAKQAFAIAAAPQAAAPgFALQgFAKgJAGQgKAGgNAAQgKAAgJgFgAgLgHQgFADgDAEIgEAJIgBALIACAMQABAGADAGQADAGAFADQAFAEAFAAQAJgBAGgFQAGgFACgIQADgIgBgIQABgIgDgIQgCgGgGgFQgFgFgKgBQgGABgFADg");
	this.shape_35.setTransform(-170.3,11.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAXAtIAAgnIAAgKIAAgMIABgNIgBAAIgHAPIgIAOIgMAVIgPAYIgTAAIAAhaIAQAAIAAAnIAAAMIgBALIAAAMIAAABIAFgLIAFgJIAFgJIAbguIAUAAIAABag");
	this.shape_36.setTransform(-184.7,13.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgSAqQgKgGgGgLQgFgKAAgOQAAgMAFgLQAFgLAKgGQAKgHALAAQALAAAIAEQAHAEAEAHQAFAHABAHQACAIAAAGIAAADIAAADIg/AAQAAALAEAHQAFAHAHADQAHADAGAAQAJABAGgCQAGgBAFgCIADAMIgMADQgIACgLABQgMgBgKgFgAgLgeQgGAFgCAGQgDAFgBAGIAvAAQAAgFgCgGQgCgGgFgEQgFgFgJgBQgHABgFAEg");
	this.shape_37.setTransform(-198.7,13.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgSAqQgKgGgGgLQgFgKAAgOQAAgMAFgLQAFgLAKgGQAKgHALAAQALAAAIAEQAHAEAEAHQAFAHABAHQACAIAAAGIAAADIAAADIg/AAQAAALAEAHQAFAHAHADQAHADAGAAQAJABAGgCQAGgBAFgCIADAMIgMADQgIACgLABQgMgBgKgFgAgLgeQgGAFgCAGQgDAFgBAGIAvAAQAAgFgCgGQgCgGgFgEQgFgFgJgBQgHABgFAEg");
	this.shape_38.setTransform(-208.2,13.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgpBBIAAhhIgBgQIAAgOIAOAAIACAQIAAAAQAFgJAIgEQAIgFAJAAQAMAAAIAGQAKAGAEAKQAFALABANQgBARgFAJQgHALgJAFQgJAGgLAAQgIAAgHgEQgIgEgDgHIgBAAIAAAygAgOgtQgHAFgDAKIAAADIgBADIAAAQIAAAEIABADQACAHAHAFQAHAGAIAAQAHAAAHgFQAGgEADgIQAEgGAAgLQAAgJgEgIQgDgHgGgFQgGgFgIAAQgIAAgGAGg");
	this.shape_39.setTransform(-218.1,15.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgHAtIAAhMIgcAAIAAgOIBHAAIAAAOIgcAAIAABMg");
	this.shape_40.setTransform(-227.7,13.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgNAqQgKgGgGgLQgGgKAAgPQABgMAFgKQAHgLAKgHQAMgGAMAAIAOABQAGABAEACIgEAOQgDgCgFgBQgFgCgHAAQgKAAgFAFQgHAFgEAHQgEAIAAAIQAAALAFAHQAEAHAGAFQAGAEAJAAQAHAAAFgBIAIgDIAEANIgLACQgHACgJABQgMgBgKgFg");
	this.shape_41.setTransform(-235.7,13.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AglAuIgLgBIAAhaIAQAAIAAAfIAHgBIAIAAQAKAAAHADQAJADAGAHQAGAEAAAMQAAAHgDAGQgCAEgFAFQgFAEgGACIgLADIgNABIgNAAgAgagDIgGABIAAAjIAFABIAHAAQAGAAAGgCQAGgCACgEQAEgEAAgIQAAgHgEgEQgBgDgGgBQgGgCgHAAIgGAAgAAhAtIAAhaIAQAAIAABag");
	this.shape_42.setTransform(-246.4,13.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgTBAQgIgFgFgJQgFgJgCgLQgCgLAAgMQAAgNADgNQAEgNAHgJQAHgKAJgFQAKgFAMgCIAMgCIAKgDIAAAOIgJACIgLACQgLABgGAFQgIAEgFAIQgFAFgCAJIgEAQIABAAQAFgKAJgGQAIgFAIAAQAMAAAIAFQAJAGAFAKQAFAIAAAPQAAAPgFALQgFAKgJAGQgKAGgNAAQgKAAgJgFgAgLgHQgFADgDAEIgEAJIgBALIACAMQABAGADAGQADAGAFADQAFAEAFAAQAJgBAGgFQAGgFACgIQADgIgBgIQABgIgDgIQgCgGgGgFQgFgFgKgBQgGABgFADg");
	this.shape_43.setTransform(-257.8,11.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgJAJIAEgOIADgPIARgCIgGARIgHAPIgDAMIgNABIAFgOg");
	this.shape_44.setTransform(-269,18.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSAqQgKgGgGgLQgFgKAAgOQAAgMAFgLQAFgLAKgGQAKgHALAAQALAAAIAEQAHAEAEAHQAFAHABAHQACAIAAAGIAAADIAAADIg/AAQAAALAEAHQAFAHAHADQAHADAGAAQAJABAGgCQAGgBAFgCIADAMIgMADQgIACgLABQgMgBgKgFgAgLgeQgGAFgCAGQgDAFgBAGIAvAAQAAgFgCgGQgCgGgFgEQgFgFgJgBQgHABgFAEg");
	this.shape_45.setTransform(-275.5,13.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAvA8IgBgdIhqAAIAAhaIARAAIAABNIAfAAIAAhNIAPAAIAABNIAgAAIAAhNIAQAAIAABNIAKAAIgBAqg");
	this.shape_46.setTransform(-287,15.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXArQgGgDgDgGQgDgGAAgHQAAgRAOgGQAOgJAZAAIAAgCIgBgIQgBgGgFgDQgEgEgIAAQgGAAgHACQgGABgFAEIgEgLQAGgEAIgCQAIgCAHAAQAOAAAHAGQAIAFADAIQADAJAAAJIAAAhIAAALIABAKIgPAAIgBgLIgBAAQgEAGgHADQgHAEgIABQgJgBgHgEgAAAAAQgGACgGAEQgGAFAAAIQAAAIAEAFQAFADAGAAQAHAAAGgEQAGgFACgGIAAgDIABgCIAAgPQgKAAgJAAg");
	this.shape_47.setTransform(-299.4,13.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AATAuIAAglIgBAAQgEADgHACQgGACgGAAQgIAAgHgDQgHgDgDgHQgFgEAAgLIAAghIARAAIAAAfQAAAJAEAFQAEAEAKgBIAKgBIAJgCIAAgtIAQAAIAABbg");
	this.shape_48.setTransform(-308.6,13.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAXAuIAAgoIAAgLIAAgLIABgNIgBAAIgHAPIgIANIgMAVIgPAaIgTAAIAAhaIAQAAIAAAnIAAAKIgBAMIAAAMIAAAAIAFgJIAFgJIAFgKIAbgtIAUAAIAABag");
	this.shape_49.setTransform(302,-8.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgoAhIAFgBIAEgDQAHgFABgJQACgKAAgOIAAgkIA+AAIAABaIgRAAIAAhNIgdAAIAAAXQAAASgDANQgDAMgJAGQgDADgFACQgEABgGAAg");
	this.shape_50.setTransform(291.3,-8.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AglAtIgLgBIAAhZIAQAAIAAAfIAHgBIAIAAQAKAAAHADQAJADAGAHQAGAEAAAMQAAAIgDAEQgCAGgFADQgFAFgGACIgLADIgNABIgNgBgAgagCIgGAAIAAAjIAFABIAHAAQAGAAAGgCQAGgCACgEQAEgFAAgGQAAgIgEgEQgBgDgGgBQgGgCgHAAIgGABgAAhAtIAAhaIAQAAIAABag");
	this.shape_51.setTransform(280.8,-8.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgTBAQgIgFgFgJQgFgJgCgLQgCgLAAgLQAAgOADgNQAEgNAHgKQAHgJAJgFQAKgFAMgCIAMgCIAKgDIAAAOIgJADIgLABQgLACgGAEQgIAEgFAHQgFAGgCAJIgEAQIABAAQAFgLAJgEQAIgGAIAAQAMAAAIAGQAJAFAFAJQAFAJAAAOQAAAPgFALQgFAMgJAFQgKAGgNAAQgKAAgJgFgAgLgHQgFAEgDADIgEAJIgBAKIACAMQABAHADAGQADAGAFADQAFADAFAAQAJAAAGgEQAGgGACgIQADgHgBgKQABgHgDgIQgCgGgGgFQgFgGgKAAQgGAAgFAEg");
	this.shape_52.setTransform(269.4,-11);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAXAuIAAgoIAAgLIAAgLIABgNIgBAAIgHAPIgIANIgMAVIgPAaIgTAAIAAhaIAQAAIAAAnIAAAKIgBAMIAAAMIAAAAIAFgJIAFgJIAFgKIAbgtIAUAAIAABag");
	this.shape_53.setTransform(255.1,-8.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAtAuIgEgKIgEgMQgFgKgGgFQgHgEgIAAIgDAAIAAApIgOAAIAAgpIgDAAQgKAAgGAEQgHAFgEAKIgEAMIgEAKIgRAAIAGgNIAFgNQAEgLAGgHQAHgDAKgCIgkgpIATAAIAeAnIAEAAIAAgnIAOAAIAAAnIADAAIAegnIATAAIgkApQAKACAHADQAHAGAEAMIAFANIAFANg");
	this.shape_54.setTransform(243.5,-8.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgXAsQgGgEgDgGQgDgGAAgHQAAgRAOgHQAOgIAZAAIAAgCIgBgJQgBgEgFgEQgEgEgIAAQgGAAgHACQgGACgFADIgEgMQAGgDAIgCQAIgCAHgBQAOABAHAFQAIAGADAJQADAIAAAJIAAAgIAAAMIABALIgPAAIgBgMIgBAAQgEAFgHAFQgHADgIAAQgJAAgHgDgAAAAAQgGACgGAEQgGAFAAAIQAAAJAEADQAFAEAGAAQAHAAAGgFQAGgEACgGIAAgDIABgDIAAgOQgKAAgJAAg");
	this.shape_55.setTransform(232.3,-8.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAgA8IAAgdIg/AAIgBAdIgMAAIgBgpIAIAAQAGgJADgKIAEgQIABgTIAAgYIA7AAIAABOIAKAAIgBApgAgIgfIgBASQgBAIgDAGIgDAJIgEAJIAoAAIAAhBIgcAAg");
	this.shape_56.setTransform(222.8,-7.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgVApQgLgFgFgKQgGgLgBgOQABgOAGgLQAGgKALgHQAJgFALgBQANABAKAFQALAHAFAKQAGALgBANQAAALgDAJQgEAKgHAGQgHAGgIADQgIACgHAAQgLABgKgHgAgOgdQgGAGgDAIQgDAIAAAHQAAAKAEAIQADAIAGAEQAHAFAGAAQAIAAAGgFQAGgEAEgIQADgIAAgKQAAgHgDgHQgCgJgGgFQgGgGgKAAQgIAAgGAFg");
	this.shape_57.setTransform(212.7,-8.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgqBBIAAhhIAAgQIgBgOIAQAAIABAQIAAAAQAFgJAIgEQAIgFAJAAQALAAAKAGQAIAGAFAKQAGALAAANQAAARgHAJQgFALgKAFQgKAGgLAAQgHAAgHgEQgIgEgDgHIgBAAIAAAygAgPgtQgGAFgDAKIAAADIgBADIAAAQIAAAEIABADQACAHAHAFQAGAGAJAAQAHAAAHgFQAGgEAEgIQADgGAAgLQAAgJgDgIQgEgHgGgFQgGgFgIAAQgHAAgIAGg");
	this.shape_58.setTransform(202.4,-7.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAVAuIAAhOIgpAAIAABOIgRAAIAAhaIBLAAIAABag");
	this.shape_59.setTransform(191.6,-8.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AglAtIgLgBIAAhZIAQAAIAAAfIAHgBIAIAAQAKAAAHADQAJADAGAHQAGAEAAAMQAAAIgDAEQgCAGgFADQgFAFgGACIgLADIgNABIgNgBgAgagCIgGAAIAAAjIAFABIAHAAQAGAAAGgCQAGgCACgEQAEgFAAgGQAAgIgEgEQgBgDgGgBQgGgCgHAAIgGABgAAhAtIAAhaIAQAAIAABag");
	this.shape_60.setTransform(176,-8.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgTBAQgIgFgFgJQgFgJgCgLQgCgLAAgLQAAgOADgNQAEgNAHgKQAHgJAJgFQAKgFAMgCIAMgCIAKgDIAAAOIgJADIgLABQgLACgGAEQgIAEgFAHQgFAGgCAJIgEAQIABAAQAFgLAJgEQAIgGAIAAQAMAAAIAGQAJAFAFAJQAFAJAAAOQAAAPgFALQgFAMgJAFQgKAGgNAAQgKAAgJgFgAgLgHQgFAEgDADIgEAJIgBAKIACAMQABAHADAGQADAGAFADQAFADAFAAQAJAAAGgEQAGgGACgIQADgHgBgKQABgHgDgIQgCgGgGgFQgFgGgKAAQgGAAgFAEg");
	this.shape_61.setTransform(164.7,-11);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgWApQgJgFgHgKQgFgLAAgOQAAgOAGgLQAGgKAKgHQALgFALgBQAMABAKAFQALAHAFAKQAGALAAANQgBALgEAJQgDAKgHAGQgHAGgIADQgIACgHAAQgLABgLgHgAgOgdQgGAGgDAIQgDAIAAAHQAAAKAEAIQADAIAGAEQAHAFAGAAQAHAAAHgFQAGgEAEgIQAEgIAAgKQAAgHgEgHQgCgJgGgFQgGgGgKAAQgIAAgGAFg");
	this.shape_62.setTransform(154.4,-8.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgHAuIAAhOIgdAAIAAgMIBJAAIAAAMIgdAAIAABOg");
	this.shape_63.setTransform(145.3,-8.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AATAuIAAglIAAAAQgFADgHACQgGACgGAAQgIAAgHgDQgHgDgEgHQgDgEAAgLIAAghIAQAAIAAAfQAAAJAEAFQAFAEAJAAIAKgCIAJgDIAAgsIARAAIAABbg");
	this.shape_64.setTransform(136.5,-8.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgJAJIAEgOIADgPIARgCIgGARIgHAPIgDAMIgNABIAFgOg");
	this.shape_65.setTransform(125.5,-4.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAUAuIgEgIIgEgLQgFgMgHgEQgGgGgLAAIgDAAIAAApIgRAAIAAhaIARAAIAAAnIAEAAIAggnIAVAAIgmApQAJABAHAFQAHAIAGAMIAEALQACAGAEAGg");
	this.shape_66.setTransform(119.8,-8.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgXAsQgGgEgDgGQgDgGAAgHQAAgRAOgHQAOgIAZAAIAAgCIgBgJQgBgEgFgEQgEgEgIAAQgGAAgHACQgGACgFADIgEgMQAGgDAIgCQAIgCAHgBQAOABAHAFQAIAGADAJQADAIAAAJIAAAgIAAAMIABALIgPAAIgBgMIgBAAQgEAFgHAFQgHADgIAAQgJAAgHgDgAAAAAQgGACgGAEQgGAFAAAIQAAAJAEADQAFAEAGAAQAHAAAGgFQAGgEACgGIAAgDIABgDIAAgOQgKAAgJAAg");
	this.shape_67.setTransform(109.7,-8.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgHAuIAAhOIgcAAIAAgMIBIAAIAAAMIgdAAIAABOg");
	this.shape_68.setTransform(101.5,-8.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAkAuIgCgsIAAgPIgBgQIgBAAIgCAIIgEAJIgEAMIgSAtIgKAAIgQgtIgDgIIgEgMIgCgJIgBAAIgBARIAAAOIgDAsIgPAAIAHhaIAUAAIARAsIADAIIADAJIABAIIAAAAIACgJIAEgLIAFgKIAOgnIAVAAIAGBag");
	this.shape_69.setTransform(87.5,-8.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgVApQgLgFgFgKQgGgLgBgOQABgOAGgLQAGgKALgHQAJgFALgBQANABALAFQAKAHAFAKQAFALAAANQAAALgDAJQgFAKgGAGQgGAGgJADQgIACgHAAQgMABgJgHgAgOgdQgHAGgCAIQgDAIAAAHQAAAKADAIQAEAIAGAEQAHAFAGAAQAIAAAGgFQAGgEAEgIQAEgIgBgKQAAgHgCgHQgDgJgGgFQgGgGgKAAQgIAAgGAFg");
	this.shape_70.setTransform(76.2,-8.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgHAuIAAhOIgcAAIAAgMIBHAAIAAAMIgcAAIAABOg");
	this.shape_71.setTransform(67.1,-8.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAVAuIAAgqIgqAAIAAAqIgQAAIAAhaIAQAAIAAAlIAqAAIAAglIARAAIAABag");
	this.shape_72.setTransform(58,-8.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgSApQgKgFgGgKQgFgLAAgOQAAgMAFgLQAFgLAKgHQAKgGALgBQALABAIAEQAHAEAEAHQAFAHABAHQACAIAAAGIAAADIAAACIg/AAQAAAMAEAHQAFAHAHADQAHAEAGAAQAJAAAGgCQAGgBAFgDIADAMIgMAFQgIABgLAAQgMABgKgHgAgLgeQgGAFgCAFQgDAGgBAHIAvAAQAAgGgCgGQgCgGgFgFQgFgEgJAAQgHAAgFAEg");
	this.shape_73.setTransform(48.1,-8.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAXAuIAAgoIAAgLIAAgLIABgNIgBAAIgHAPIgIANIgMAVIgPAaIgTAAIAAhaIAQAAIAAAnIAAAKIgBAMIAAAMIAAAAIAFgJIAFgJIAFgKIAbgtIAUAAIAABag");
	this.shape_74.setTransform(38,-8.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgoAhIAFgBIAEgDQAHgFABgJQACgKAAgOIAAgkIA+AAIAABaIgRAAIAAhNIgdAAIAAAXQAAASgDANQgDAMgJAGQgDADgFACQgEABgGAAg");
	this.shape_75.setTransform(27.3,-8.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAUAuIgEgIIgEgLQgFgMgHgEQgFgGgMAAIgDAAIAAApIgRAAIAAhaIARAAIAAAnIAEAAIAggnIAUAAIglApQAIABAIAFQAHAIAFAMIAFALQACAGAEAGg");
	this.shape_76.setTransform(19.2,-8.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgNApQgKgFgGgKQgGgLAAgOQABgMAFgMQAHgLALgGQALgGANgBIANADQAGABAEACIgEAMQgDgCgFgBQgFgBgGAAQgLAAgFAFQgIAFgDAHQgEAIAAAIQAAALAFAHQADAHAIAFQAFAEAJAAQAHAAAFgCIAIgDIADANIgKAEQgHABgJAAQgMABgKgHg");
	this.shape_77.setTransform(5.8,-8.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgXAsQgGgEgDgGQgDgGAAgHQAAgRAOgHQAOgIAZAAIAAgCIgBgJQgBgEgFgEQgEgEgIAAQgGAAgHACQgGACgFADIgEgMQAGgDAIgCQAIgCAHgBQAOABAHAFQAIAGADAJQADAIAAAJIAAAgIAAAMIABALIgPAAIgBgMIgBAAQgEAFgHAFQgHADgIAAQgJAAgHgDgAAAAAQgGACgGAEQgGAFAAAIQAAAJAEADQAFAEAGAAQAHAAAGgFQAGgEACgGIAAgDIABgDIAAgOQgKAAgJAAg");
	this.shape_78.setTransform(-7.4,-8.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgbAuIAAhaIA3AAIAAANIgmAAIAABNg");
	this.shape_79.setTransform(-14.9,-8.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgWApQgJgFgGgKQgGgLgBgOQABgOAGgLQAGgKALgHQAJgFALgBQANABALAFQAJAHAGAKQAFALAAANQAAALgDAJQgFAKgGAGQgHAGgIADQgIACgHAAQgLABgLgHgAgOgdQgHAGgCAIQgDAIAAAHQAAAKADAIQAEAIAGAEQAGAFAHAAQAIAAAGgFQAGgEAEgIQADgIAAgKQAAgHgCgHQgDgJgGgFQgGgGgKAAQgIAAgGAFg");
	this.shape_80.setTransform(-24.3,-8.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgoAhIAFgBIAEgDQAHgFABgJQACgKAAgOIAAgkIA+AAIAABaIgRAAIAAhNIgdAAIAAAXQAAASgDANQgDAMgJAGQgDADgFACQgEABgGAAg");
	this.shape_81.setTransform(-35,-8.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgXAsQgGgEgDgGQgDgGAAgHQAAgRAOgHQAOgIAZAAIAAgCIgBgJQgBgEgFgEQgEgEgIAAQgGAAgHACQgGACgFADIgEgMQAGgDAIgCQAIgCAHgBQAOABAHAFQAIAGADAJQADAIAAAJIAAAgIAAAMIABALIgPAAIgBgMIgBAAQgEAFgHAFQgHADgIAAQgJAAgHgDgAAAAAQgGACgGAEQgGAFAAAIQAAAJAEADQAFAEAGAAQAHAAAGgFQAGgEACgGIAAgDIABgDIAAgOQgKAAgJAAg");
	this.shape_82.setTransform(-44,-8.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAXAuIAAgoIAAgLIAAgLIABgNIgBAAIgHAPIgIANIgMAVIgPAaIgTAAIAAhaIAQAAIAAAnIAAAKIgBAMIAAAMIAAAAIAFgJIAFgJIAFgKIAbgtIAUAAIAABag");
	this.shape_83.setTransform(-53.6,-8.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAgA8IgBgdIg+AAIgBAdIgMAAIgBgpIAIAAQAGgJADgKIAEgQQACgJgBgKIAAgYIA8AAIAABOIAJAAIgBApgAgIgfIgBASQgCAIgCAGIgDAJIgEAJIAoAAIAAhBIgcAAg");
	this.shape_84.setTransform(-64.1,-7.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgSApQgKgFgGgKQgFgLAAgOQAAgMAFgLQAFgLAKgHQAKgGALgBQALABAIAEQAHAEAEAHQAFAHABAHQACAIAAAGIAAADIAAACIg/AAQAAAMAEAHQAFAHAHADQAHAEAGAAQAJAAAGgCQAGgBAFgDIADAMIgMAFQgIABgLAAQgMABgKgHgAgLgeQgGAFgCAFQgDAGgBAHIAvAAQAAgGgCgGQgCgGgFgFQgFgEgJAAQgHAAgFAEg");
	this.shape_85.setTransform(-77.7,-8.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAXAuIAAgoIAAgLIAAgLIABgNIgBAAIgHAPIgIANIgMAVIgPAaIgTAAIAAhaIAQAAIAAAnIAAAKIgBAMIAAAMIAAAAIAFgJIAFgJIAFgKIAbgtIAUAAIAABag");
	this.shape_86.setTransform(-87.7,-8.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAVAuIAAgqIgqAAIAAAqIgQAAIAAhaIAQAAIAAAlIAqAAIAAglIARAAIAABag");
	this.shape_87.setTransform(-98.1,-8.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgSApQgKgFgGgKQgFgLAAgOQAAgMAFgLQAFgLAKgHQAKgGALgBQALABAIAEQAHAEAEAHQAFAHABAHQACAIAAAGIAAADIAAACIg/AAQAAAMAEAHQAFAHAHADQAHAEAGAAQAJAAAGgCQAGgBAFgDIADAMIgMAFQgIABgLAAQgMABgKgHgAgLgeQgGAFgCAFQgDAGgBAHIAvAAQAAgGgCgGQgCgGgFgFQgFgEgJAAQgHAAgFAEg");
	this.shape_88.setTransform(-108.1,-8.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgWApQgKgFgGgKQgFgLAAgOQAAgOAGgLQAGgKAKgHQALgFALgBQANABAJAFQAKAHAGAKQAFALABANQAAALgFAJQgEAKgGAGQgGAGgJADQgIACgHAAQgMABgKgHgAgOgdQgHAGgCAIQgDAIAAAHQAAAKADAIQAEAIAGAEQAGAFAHAAQAHAAAHgFQAGgEAEgIQADgIABgKQAAgHgDgHQgDgJgGgFQgGgGgKAAQgIAAgGAFg");
	this.shape_89.setTransform(-118.1,-8.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgpBBIAAhhIgBgQIgBgOIAPAAIABAQIABAAQAFgJAIgEQAIgFAKAAQAKAAAJAGQAJAGAGAKQAEALAAANQAAARgFAJQgHALgJAFQgKAGgKAAQgHAAgIgEQgHgEgFgHIAAAAIAAAygAgOgtQgIAFgCAKIgBADIAAADIAAAQIAAAEIAAADQADAHAHAFQAHAGAIAAQAIAAAGgFQAGgEADgIQADgGAAgLQAAgJgDgIQgCgHgHgFQgGgFgIAAQgHAAgHAGg");
	this.shape_90.setTransform(-128.4,-7.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgHAuIAAhOIgcAAIAAgMIBIAAIAAAMIgdAAIAABOg");
	this.shape_91.setTransform(-138,-8.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgNApQgKgFgGgKQgFgLgBgOQAAgMAHgMQAFgLAMgGQALgGANgBIANADQAHABADACIgEAMQgDgCgFgBQgFgBgGAAQgLAAgFAFQgHAFgEAHQgEAIAAAIQAAALAFAHQADAHAIAFQAFAEAJAAQAHAAAFgCIAJgDIACANIgKAEQgHABgJAAQgMABgKgHg");
	this.shape_92.setTransform(-146,-8.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgWApQgJgFgHgKQgFgLAAgOQAAgOAGgLQAGgKAKgHQALgFALgBQAMABAKAFQALAHAFAKQAGALAAANQgBALgEAJQgDAKgHAGQgHAGgIADQgIACgHAAQgLABgLgHgAgOgdQgGAGgDAIQgDAIAAAHQAAAKAEAIQADAIAGAEQAHAFAGAAQAHAAAHgFQAGgEAEgIQAEgIAAgKQAAgHgEgHQgCgJgGgFQgGgGgKAAQgIAAgGAFg");
	this.shape_93.setTransform(-155.6,-8.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAVAuIAAhOIgpAAIAABOIgRAAIAAhaIBLAAIAABag");
	this.shape_94.setTransform(-166,-8.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AhYAIIAAgPICxAAIAAAPg");
	this.shape_95.setTransform(-184.5,-9.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgbAsQgHgEgEgGQgDgHAAgIQAAgMAHgHQAGgGANgEQAMgEAPAAIAAgBIgBgFQgCgDgEgCQgEgCgEAAQgIAAgHACQgGACgFADIgGgSQAGgEAJgCQAJgDALAAQAPAAAJAFQAJAGAEAJQADAJABALIAAAfIAAAMIABAKIgaAAIgCgKIAAAAQgFAGgHADQgEADgJAAQgJAAgHgEgAAAAEQgFABgEADQgEADABAFQAAAGACADQAEADAFgBQADAAAEgCQAEgDACgFIABgCIAAgDIAAgKQgIAAgFACg");
	this.shape_96.setTransform(-203.1,-8.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AAhAuIgCglIAAgJIAAgKIgBgLIAAAAIgDAKIgDAIIgDAKIgNAlIgTAAIgLglIgCgHIgDgLIgCgKIgBAAIgBASIAAAMIgCAlIgZAAIAGhbIAlAAIAKAkIADAJIACALIAAAAIADgLIAEgMIAKghIAlAAIAFBbg");
	this.shape_97.setTransform(-214.7,-8.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgeAjQgNgMABgXQgBgGADgJQADgJAFgHQAHgHAJgFQAIgEAKAAQAPABAKAGQAIAGAEALQAFALAAAMIAAAEIgBAFIg6AAQAAAFAEAEQADAFAGACQAFABAGAAIANgBIANgCIADATQgGADgJABQgIACgKAAQgWgBgNgMgAARgJIgBgIQgCgEgEgEQgDgCgGAAQgFAAgDACQgEADgCAFIgCAIIAgAAIAAAAg");
	this.shape_98.setTransform(-226.5,-8.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgNAuIAAhFIgbAAIAAgWIBRAAIAAAWIgbAAIAABFg");
	this.shape_99.setTransform(-235.9,-8.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgNAqQgLgGgGgLQgGgKAAgPQAAgMAGgLQAGgKAMgHQALgGAQgBIALABIALACIgFAWIgGgCIgKgBQgLAAgFAHQgHAIAAAKQAAAHAEAHQADAFAEAEQAGACAHAAIAJAAIAHgDIAEAVQgEACgHABQgHACgIAAQgNAAgLgGg");
	this.shape_100.setTransform(-244.5,-8.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AARAuIAAgdIABgLIAAgLIABgPIgBAAIgEAMIgFAKIgJAWIgJAWIgjAAIAAhbIAcAAIAAAcIgBASIgBASIABAAIAFgNIAFgLIAQgoIAkAAIAABbg");
	this.shape_101.setTransform(-254.6,-8.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgNAqQgLgGgGgLQgGgKAAgPQAAgMAGgLQAGgKAMgHQALgGAQgBIALABIALACIgEAWIgHgCIgKgBQgLAAgFAHQgHAIAAAKQAAAHAEAHQADAFAEAEQAGACAHAAIAJAAIAHgDIAEAVQgEACgHABQgGACgJAAQgNAAgLgGg");
	this.shape_102.setTransform(-264.4,-8.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgXAJIAAgRIAvAAIAAARg");
	this.shape_103.setTransform(-271.8,-9.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAqBAIgCgyIgBgWIAAgcIgHAZIgIAWIgQAzIgUAAIgOgyIgGgXIgFgZIgBAAIgBAbIgBAYIgCAxIgbAAIAIh+IAnAAIAMAqIAGAVIAEAXIAAAAIAGgXIAGgVIANgqIAmAAIAHB+g");
	this.shape_104.setTransform(-282.9,-10.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AASBAIgDgLIgFgTQgCgIgDgEQgCgFgDgBQgEgCgGAAIgIAAIAAAyIgdAAIAAh9IARgBIAWgBQAMAAAKACQAKADAHAFQAGAFADAGQADAHAAAJQAAAIgDAHQgDAFgGAFQgFACgFACIAAABQAGACAEAHQAEAGADAIIAEAQIADAMIADAJgAgNgpIgFAAIAAAjIALAAQAJAAAGgEQAGgGAAgIQAAgIgFgFQgGgFgIAAIgIABg");
	this.shape_105.setTransform(-296.1,-10.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgTA5QgPgJgHgOQgIgOAAgSQAAgVAJgOQAKgPAQgJQAOgHATgBQALAAAIADQAIABAEACIgGAXQgEgCgGgBQgGgBgIgBQgMABgIAEQgIAEgFAKQgGAJAAANQAAATALALQAJALATAAIAOgBIAKgDIAFAXQgEACgJACQgIABgMAAQgUAAgPgIg");
	this.shape_106.setTransform(-307.7,-10.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-315.4,-25,631,50.1);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.m1();
	this.instance.setTransform(-77,-81.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,-81.5,154,163);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.knopka();
	this.instance.setTransform(-96,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-24,192,48);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon1();
	this.instance.setTransform(-499.5,-133);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-499.5,-133,999,266);


// stage content:
(lib.crm990x60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if (typeof(this.stopCycle) == "undefined") {     
		    this.btnMain.addEventListener( "click", function() {
		        window.callClick();
		    } );
		    this.stopCycle = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1701));

	// url
	this.btnMain = new lib.url();
	this.btnMain.setTransform(496.9,30,4.129,0.15,0,0,0,0.4,0.4);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.url(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1701));

	// Слой 12
	this.instance = new lib.Символ10();
	this.instance.setTransform(442.6,29.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1402).to({_off:false},0).to({x:479.6,alpha:1},32,cjs.Ease.get(1)).wait(267));

	// Слой 5
	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(939.5,29,0.453,1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(74).to({_off:false},0).to({scaleX:1,x:887},15,cjs.Ease.get(1)).to({regX:0.1,scaleX:0.95,x:891.6},8,cjs.Ease.get(1)).to({regX:0,scaleX:1,x:887},7,cjs.Ease.get(1)).to({startPosition:0},198).to({startPosition:0},3).to({regX:0.1,regY:0.1,scaleX:0.64,scaleY:0.64,x:924.1,y:31.6},14,cjs.Ease.get(1)).to({startPosition:0},1076).to({regX:0.3,regY:0.4,scaleX:0.85,scaleY:0.85,rotation:360,x:893.2,y:29.3},24,cjs.Ease.get(1)).wait(282));

	// Слой 4
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(459.5,4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({y:27.7,alpha:1},23,cjs.Ease.get(1)).wait(228).to({scaleY:2.24,skewX:-63.4,alpha:0},17).wait(1382));

	// Слой 11
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(501.6,27.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1174).to({_off:false},0).to({alpha:1},17).wait(204).to({x:564.6,alpha:0},17,cjs.Ease.get(1)).wait(289));

	// Слой 10
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(479.6,28.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(969).to({_off:false},0).to({alpha:1},16).wait(189).to({x:543.6,y:27.7,alpha:0},17,cjs.Ease.get(1)).wait(510));

	// Слой 9
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(517.2,28.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(751).to({_off:false},0).to({alpha:1},16).wait(202).to({x:596.2,alpha:0},16,cjs.Ease.get(1)).wait(716));

	// Слой 8
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(559.5,27.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(539).to({_off:false},0).to({alpha:1},15).wait(197).to({x:646.5,alpha:0},16,cjs.Ease.get(1)).wait(934));

	// Слой 7
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(509.5,28.6);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(319).to({_off:false},0).to({alpha:1},18).wait(202).to({x:611.5,alpha:0},15,cjs.Ease.get(1)).wait(1147));

	// Слой 6
	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(-58.5,31.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(309).to({_off:false},0).to({x:77.5,y:31,alpha:1},14,cjs.Ease.get(1)).wait(1378));

	// Слой 3
	this.instance_9 = new lib.Символ2();
	this.instance_9.setTransform(77.1,148.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:119,y:65.6},21,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18,rotation:8,y:70.5},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,rotation:0,y:56.6},10,cjs.Ease.get(1)).to({regX:0.1,regY:0.1,scaleX:0.62,scaleY:0.62,x:67.1,y:39.6},20,cjs.Ease.get(-1)).wait(244).to({rotation:30,x:-75.9},13,cjs.Ease.get(1)).wait(1386));

	// Слой 1
	this.instance_10 = new lib.Анимация1("synched",0);
	this.instance_10.setTransform(499.5,21);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:39},28,cjs.Ease.get(1)).to({y:116},17).to({startPosition:0},257).to({y:51},237).to({y:115.1},212).to({y:67.1},218).to({y:108.1},205).to({y:62},221).to({y:112},25,cjs.Ease.get(1)).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(494.7,-82,999.4,342);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;