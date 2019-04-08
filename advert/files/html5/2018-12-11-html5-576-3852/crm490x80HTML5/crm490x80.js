(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 490,
	height: 80,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/fon1.jpg", id:"fon1"},
		{src:"images/knopka.png", id:"knopka"},
		{src:"images/m1.png", id:"m1"},
		{src:"images/m2.png", id:"m2"}
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
	this.shape.graphics.f("#FF0000").s().p("AAAB7IAAjCIAAAAIguAWIgJgrIBAgeIAvAAIAAD1g");
	this.shape.setTransform(70.3,98.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("Ag4B5QgTgEgLgHIAMgsQAIAFAQAFQAPAFASABQAVgBALgJQAMgJAAgOQgBgNgHgHQgHgIgLgEQgJgEgNAAIgYAAIAAgnIAXAAQAKAAAKgDQAIgDAHgGQAHgGAAgLQAAgLgJgHQgJgHgRAAQgPAAgOAEQgOAFgIAFIgMgpQAMgHAUgHQAUgEAZgBQAYAAASAIQASAJAKAOQAJAOAAAQQAAAUgLAPQgLAPgXAIIAAABQAPACAMAGQAMAJAHAMQAHANABAQQgBAWgMARQgMARgWAJQgXAKgdAAQgZAAgTgGg");
	this.shape_1.setTransform(50.4,98.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgwATIAAglIBhAAIAAAlg");
	this.shape_2.setTransform(34.1,101.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAMB7IAAg7IhrAAIAAglIBdiVIBFAAIAACPIAdAAIAAArIgdAAIAAA7gAABg3IgJAXIghA0IAAABIA1AAIAAg1IABgXIABgXIgBAAIgMAXg");
	this.shape_3.setTransform(17.4,98.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag0B1QgUgLgKgPQgKgQAAgRQABgWALgPQAMgQAVgHIAAgBQgSgJgJgOQgJgOAAgRQAAgUALgQQAMgPATgKQAUgIAXAAQAdAAASAKQASAKAIANQAJAPAAAQQAAAPgJAPQgJAPgSAJIAAABQAMAFAKAFQAKAJAGAMQAHAMAAAQQAAAXgMARQgMAQgVAKQgVAJgbAAQgfgBgVgJgAgZAdQgIAKAAAOQAAAJAEAHQAFAJAHAEQAIAFAJAAQAQAAAJgJQAJgIAAgNQAAgRgLgKQgLgKgPgEQgOAEgIAJgAgVhOQgHAIAAALQAAANAJAIQAKAJANAEQAKgDAIgIQAHgJAAgLQAAgMgHgJQgHgKgPAAQgOAAgHAJg");
	this.shape_4.setTransform(-3.7,98.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgwATIAAglIBhAAIAAAlg");
	this.shape_5.setTransform(-20.3,101.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag5B/IgMAAIAAgtIALAAIAOAAQANgBANgEQANgEAHgHQANgIAIgMQAHgLAEgOIgBgBQgIAJgNAEQgMAFgPAAQgVAAgSgJQgRgJgKgSQgLgPAAgYQAAgYAMgUQAMgUAVgNQAVgLAagBQAfABAVAOQAVAOAKAYQAKAYAAAeQAAAkgMAcQgLAdgVASQgRAQgYAJQgWAIgdACIgHAAIgHAAgAgZhIQgJAMAAAUQAAAKADAJQAEAJAIAGQAIAFALAAQALAAAIgFQAIgEAEgHIACgGIABgJQAAgNgEgMQgDgMgIgHQgIgHgMgBQgPABgJALg");
	this.shape_6.setTransform(-37.1,98.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAMB7IAAg7IhrAAIAAglIBdiVIBFAAIAACPIAdAAIAAArIgdAAIAAA7gAABg3IgJAXIghA0IAAABIA1AAIAAg1IABgXIABgXIgBAAIgMAXg");
	this.shape_7.setTransform(-58.1,98.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Ag0BuQgTgRgKgdQgKgdAAgjQAAgiAKgdQAKgdAVgRQAUgQAegBQAZAAASAKQARALALARQALASAFAWQAGAXgBAZQAAAkgKAdQgKAdgVAQQgVAQgeABQgfgBgVgQgAgYg+QgKAVAAApQAAAqAKAVQAJAVAPgBQARAAAJgUQAJgWAAgpQAAgogJgVQgJgVgRgBQgOABgKAUg");
	this.shape_8.setTransform(-79.2,98.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgwATIAAglIBhAAIAAAlg");
	this.shape_9.setTransform(-95.9,101.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhWB9IAAgjIAggdQAagXATgTQAPgSAJgNQAJgPABgOQAAgQgKgKQgKgKgTAAQgQgBgNAHQgOAGgKAIIgQgqQAOgKAUgIQAVgGAZgBQAbAAATAKQATAKAKASQAKAQAAAXQAAAVgJASQgJARgPAQQgPARgRAQIgWATIAAAAIBcAAIAAAwg");
	this.shape_10.setTransform(-112.7,98.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhWB9IAAgjIAfgdQAcgXARgTQAQgSAJgNQAJgPAAgOQAAgQgJgKQgKgKgTAAQgQgBgOAHQgNAGgKAIIgQgqQANgKAWgIQAUgGAagBQAZAAAUAKQATAKAKASQAKAQAAAXQAAAVgJASQgJARgOAQQgPARgTAQIgUATIAAAAIBbAAIAAAwg");
	this.shape_11.setTransform(-133.8,98.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Ag5B/IgMAAIAAgtIALAAIAOAAQANgBANgEQANgEAHgHQANgIAIgMQAHgLAEgOIgBgBQgIAJgNAEQgMAFgPAAQgVAAgSgJQgRgJgKgSQgLgPAAgYQAAgYAMgUQAMgUAVgNQAVgLAagBQAfABAVAOQAVAOAKAYQAKAYAAAeQAAAkgMAcQgLAdgVASQgRAQgYAJQgWAIgdACIgHAAIgHAAgAgZhIQgJAMAAAUQAAAKADAJQAEAJAIAGQAIAFALAAQALAAAIgFQAIgEAEgHIACgGIABgJQAAgNgEgMQgDgMgIgHQgIgHgMgBQgPABgJALg");
	this.shape_12.setTransform(-154.8,98.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgwATIAAglIBhAAIAAAlg");
	this.shape_13.setTransform(-171.4,101.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("Ag0B1QgUgLgKgPQgKgQAAgRQABgWALgPQAMgQAVgHIAAgBQgSgJgJgOQgJgOAAgRQAAgUALgQQAMgPATgKQAUgIAXAAQAdAAASAKQASAKAIANQAJAPAAAQQAAAPgJAPQgJAPgSAJIAAABQAMAFAKAFQAKAJAGAMQAHAMAAAQQAAAXgMARQgMAQgVAKQgVAJgbAAQgfgBgVgJgAgZAdQgIAKAAAOQAAAJAEAHQAFAJAHAEQAIAFAJAAQAQAAAJgJQAJgIAAgNQAAgRgLgKQgLgKgPgEQgOAEgIAJgAgVhOQgHAIAAALQAAANAJAIQAKAJANAEQAKgDAIgIQAHgJAAgLQAAgMgHgJQgHgKgPAAQgOAAgHAJg");
	this.shape_14.setTransform(-188.1,98.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgXBVQgJgJAAgPQAAgPAJgKQAJgJAOgBQAPAAAJAKQAJAJAAAQQAAAPgJAJQgJAKgPAAQgOAAgJgKgAgXgiQgJgLAAgOQAAgQAJgKQAJgJAOAAQAPgBAJAKQAJAJAAARQAAAOgJALQgJAJgPAAQgOAAgJgJg");
	this.shape_15.setTransform(-210.9,101.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AhbAyQAHgBAFgDQAGgDADgDQAIgIACgOQACgPAAgVIAAhLICWAAIAAC3Ig6AAIAAiLIgmAAIAAAiQAAAggFAXQgGAYgPAMQgJAJgNAFQgNAEgTAAg");
	this.shape_16.setTransform(-227.8,102);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag9BHQgZgZgBgsQAAgQAGgRQAFgSAMgOQALgPASgIQARgJAXAAQAeAAASAOQASANAIAVQAJAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEANAAQAPAAANgCQANgCALgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgDAIQgEAJgBAIIBCAAQAAgHgCgJQgDgJgHgGQgIgGgNgBQgKABgHAGg");
	this.shape_17.setTransform(-246.9,101.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_18.setTransform(-265.8,101.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAMB7IAAg7IhrAAIAAgmIBdiUIBFAAIAACPIAdAAIAAArIgdAAIAAA7gAABg3IgJAXIghA0IAAABIA1AAIAAg1IABgXIABgXIgBAAIgMAXg");
	this.shape_19.setTransform(211,52.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgzBuQgVgSgKgcQgJgdgBgjQAAgjALgcQAKgdAVgRQAUgRAfAAQAYAAARAKQASALALARQALASAFAWQAFAXABAZQAAAlgLAdQgKAcgVARQgVAPgeABQgfgBgUgQgAgYg+QgJAVAAApQAAAqAJAVQAKAVAOAAQARAAAIgWQAJgVAAgpQABgogJgVQgJgWgRAAQgOAAgKAVg");
	this.shape_20.setTransform(190,52.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgxBwQgXgOgKgZQgLgYAAgeQAAghAMgcQALgcAVgTQASgRAZgJQAVgJAdgBIANgBIAKAAIAAAtIgKAAIgMABQgaACgRAIQgOAJgKAMQgJANgDAOIACAAQAJgJAMgFQALgFASAAQAVAAARAKQARAJALASQAKAQAAAaQAAAYgLAUQgMAVgVAMQgUALgbABQgegBgWgOgAgUAEQgJAGgEAKIgCAGIAAAJQAAANAEALQAFALAJAHQAIAHALAAQAQAAAJgMQAIgMABgTQAAgMgFgKQgEgJgHgGQgJgEgLAAQgLAAgJAEg");
	this.shape_21.setTransform(168.9,52.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXAYQgJgJgBgPQABgOAJgKQAKgKANAAQAPAAAJAKQAJAKAAAOQAAAPgJAJQgJAKgPAAQgOAAgJgKg");
	this.shape_22.setTransform(146,61.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgZCrIAAhIQgagCgWgLQgWgMgOgUQgNgVgBgdQABgcANgVQANgVAWgLQAWgMAbgCIAAhPIA0AAIgBBPQAbACAWAMQAWAMANAUQANAVABAbQgBAfgNAUQgOAUgWAMQgWALgaACIABBIgAAaA9QAVgFAKgPQAKgQAAgXQAAgTgKgQQgKgPgVgFgAg4ghQgKAQAAATQAAAYAKAPQALAPAUAFIAAhzQgVAGgKAPg");
	this.shape_23.setTransform(127,55.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgwBVQgWgLgNgWQgMgVgBgeQAAgdANgVQAMgWAXgMQAWgMAcAAQAcAAAWAMQAVAMAMAVQAMAWgBAbQAAAhgOAVQgNAXgXAKQgWAKgYAAQgbAAgVgLgAgUguQgIAIgEANQgEAMAAANQAAAQAFAMQAEANAIAHQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgNQgEgMgHgIQgJgIgNgBQgLABgJAIg");
	this.shape_24.setTransform(102.4,55.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZACQAHgaAEgbIA5gDQgKAdgMAaQgMAcgMAXIgnADQAJgZAIgcg");
	this.shape_25.setTransform(78.2,63.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgzBuQgVgSgJgcQgKgdgBgjQAAgjALgcQAKgdAVgRQAVgRAeAAQAYAAASAKQARALALARQALASAFAWQAFAXAAAZQAAAlgKAdQgKAcgVARQgVAPgeABQgfgBgUgQgAgYg+QgJAVAAApQAAAqAJAVQAJAVAPAAQARAAAJgWQAIgVABgpQAAgogJgVQgJgWgRAAQgOAAgKAVg");
	this.shape_26.setTransform(63.3,52.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgyBwQgVgOgLgZQgLgYAAgeQAAghAMgcQALgcAVgTQASgRAYgJQAWgJAdgBIANgBIAKAAIAAAtIgKAAIgMABQgaACgRAIQgOAJgKAMQgIANgEAOIABAAQAKgJANgFQALgFARAAQAVAAARAKQARAJAKASQALAQAAAaQAAAYgMAUQgLAVgUAMQgVALgbABQgegBgXgOgAgUAEQgJAGgEAKIgCAGIAAAJQAAANAEALQAFALAJAHQAIAHALAAQAQAAAJgMQAJgMAAgTQAAgMgFgKQgDgJgJgGQgIgEgLAAQgLAAgJAEg");
	this.shape_27.setTransform(42.2,52.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAAB7IAAjCIAAAAIguAXIgJgsIBAgeIAvAAIAAD1g");
	this.shape_28.setTransform(19.4,52.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgZACQAHgaAEgbIA5gDQgKAdgMAaQgMAcgMAXIgnADQAJgZAIgcg");
	this.shape_29.setTransform(-2.7,63.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAjBcIAAg4IABgZIABgWIABgfIgBAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA2AAIAAA4IAAAmIgCAkIABAAIALgcIAKgXIAihPIBHAAIAAC3g");
	this.shape_30.setTransform(-18.4,55.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAdBcQgEgGgEgKIgJgZQgGgQgHgIQgJgIgPAAIgFAAIAABJIg6AAIAAi3IA6AAIAABKIAGAAIAthKIBEAAIhFBQQARADAKALQAMAOAHAVIALAaIAMAcg");
	this.shape_31.setTransform(-38.7,55.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAkBcIAAg4IAAgZIABgWIABgfIgBAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA3AAIAAA4IgBAmIgCAkIABAAIALgcIAKgXIAihPIBHAAIAAC3g");
	this.shape_32.setTransform(-61.3,55.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhbAyQAHgBAFgDQAGgDADgDQAIgIACgOQACgPAAgVIAAhLICWAAIAAC3Ig6AAIAAiLIgmAAIAAAiQAAAggFAXQgGAYgPAMQgJAJgNAFQgNAEgTAAg");
	this.shape_33.setTransform(-84.2,55.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag0B7QgVgQgLgcQgLgcAAgjQAAgjAKgcQAKgdAUgUQAOgOATgIQATgIAYgDIATgDIAUgDIAQgCIgDAtQgJADgMABIgXADQgUACgNAFQgOAHgJAKQgJAJgFANQgFANgCALIACAAQAJgPAQgJQAQgKASAAQAagBASAMQATALAKAVQAKATAAAcQAAAegMAWQgNAWgVALQgWANgcAAQgegBgWgPgAgPgGQgHAFgEAFQgFAHgCAIQgDAJAAAMQAAANAEANQAEANAIAJQAIAIAMABQANAAAIgIQAJgIADgMQAEgNAAgOQAAgNgEgMQgDgMgIgGQgJgJgNAAQgIAAgHAEg");
	this.shape_34.setTransform(-104.3,51.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhNBWQAFgBAHgDQAGgCAHgEQAGgEAHgGQAGgGAFgHIACgFIABgEIgBgEIgCgFIhEioIBAAAIAcBbIAEASIADARIACAAIADgSIAFgRIAXhbIA9AAIgrB6QgNAjgLAXQgLAYgKAPQgJAOgJAJQgPANgPAGQgPAFgLABg");
	this.shape_35.setTransform(-125.2,59.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAcBcIAAiLIg4AAIAACLIg5AAIAAi3ICrAAIAAC3g");
	this.shape_36.setTransform(-146.1,55.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgbBVQgXgMgLgVQgMgVgBgdQAAgaANgWQAMgWAXgOQAYgNAhAAQALAAAMACQALACAKADIgJArQgFgCgIgCQgIgCgMAAQgXABgLAOQgNAOAAAWQAAAQAGAMQAHALAKAGQALAGAOAAQALAAAIgBQAIgCAHgDIAGArQgIADgNADQgOACgQAAQgdAAgVgLg");
	this.shape_37.setTransform(-165.4,55.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag9BHQgZgZgBgsQAAgQAGgRQAFgSAMgOQAMgPARgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEANAAQAPAAANgCQAMgCAMgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQABgHgEgJQgCgJgIgGQgGgGgOgBQgKABgHAGg");
	this.shape_38.setTransform(-184.1,55.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhaCBIAAj7QANgCATgCQATgBAbgBQAZABATAFQAUAFAMAKQANAKAHAPQAHAPAAAUQAAASgFAQQgHANgLALQgPAOgVAHQgWAGgYAAIgKAAIgJgCIAABdgAgYhTIgJABIAABMIAIABIALABQAVAAANgMQAOgKAAgUQAAgSgMgJQgLgKgUAAIgPAAg");
	this.shape_39.setTransform(-204.6,52.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgXAYQgJgJAAgPQAAgOAJgKQAKgKANAAQAPAAAJAKQAJAKAAAOQAAAPgJAJQgJAKgPAAQgOAAgJgKg");
	this.shape_40.setTransform(-228.6,61.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhbAyQAHgBAFgDQAGgDADgDQAIgIACgOQACgPAAgVIAAhLICWAAIAAC3Ig6AAIAAiLIgmAAIAAAiQAAAggFAXQgGAYgPAMQgJAJgNAFQgNAEgTAAg");
	this.shape_41.setTransform(-245.5,55.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhNBWQAFgBAHgDQAGgCAHgEQAGgEAHgGQAGgGAFgHIACgFIABgEIgBgEIgCgFIhEioIBAAAIAcBbIAEASIADARIACAAIADgSIAFgRIAXhbIA9AAIgrB6QgNAjgLAXQgLAYgKAPQgJAOgJAJQgPANgPAGQgPAFgLABg");
	this.shape_42.setTransform(-264.6,59.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZACQAHgaAEgbIA5gDQgKAdgMAaQgMAcgMAXIgnADQAJgZAIgcg");
	this.shape_43.setTransform(47.9,17.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ag4BdIgegDIAAi2IA5AAIAAA2IAOgBIAPgBQAVAAAUAGQAUAGANAOQANAOAAAXQAAARgHANQgGAMgMAIQgMAIgPAEQgPAFgQACIgdABIgfAAgAgVAAIgIAAIAAA1IAIABIALAAQAKABAIgDQAJgDAGgGQAHgGAAgMQAAgLgHgGQgHgGgJgCQgIgBgKAAIgKABg");
	this.shape_44.setTransform(33.6,9.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAcBcIAAhJIg4AAIAABJIg6AAIAAi3IA6AAIAABDIA4AAIAAhDIA6AAIAAC3g");
	this.shape_45.setTransform(11.5,9.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag9BHQgZgZgBgsQAAgQAGgRQAFgSAMgOQALgPASgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEANAAQAPAAANgCQAMgCAMgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQAAgHgCgJQgDgJgIgGQgGgGgOgBQgKABgHAGg");
	this.shape_46.setTransform(-9.4,9.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABCBcIgDhKIgBgSIgBgWIAAgXIgBAAIgGAUIgFARIgHAWIgZBLIgoAAIgWhKIgFgRIgFgWIgFgUIgCAAIgBAjIAAAcIgDBJIg0AAIAMi3IBKAAIAVBGIAFAVIAGAXIAAAAIAHgXIAIgZIAUhCIBJAAIALC3g");
	this.shape_47.setTransform(-33.2,9.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgCBXQgSgJgMgSQgMgRgDgZIgXAAIAABKIg5AAIAAi3IA5AAIAABFIAYAAQAHgjAXgTQAVgTAjgBQAaAAAUANQAUALALAWQALAVAAAdQAAAegNAWQgMAXgVALQgUAKgZABQgWAAgRgKgAATguQgHAIgDAMQgEANAAANQAAAPAEAMQAEANAHAIQAHAIALgBQALABAHgIQAIgIADgMQADgNAAgPQAAgNgDgNQgDgMgHgIQgHgIgMAAQgLAAgIAIg");
	this.shape_48.setTransform(-61,9.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgcB/IAAjNIhFAAIAAgxIDDAAIAAAxIhGAAIAADNg");
	this.shape_49.setTransform(-86.5,6.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXAZQgJgKgBgPQABgPAJgJQAKgKANAAQAPAAAJAKQAJAJABAPQAAAPgKAKQgJAJgPABQgOgBgJgJg");
	this.shape_50.setTransform(-109.2,15.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag/BcIAAi3IB/AAIAAAsIhGAAIAACLg");
	this.shape_51.setTransform(-121.6,9.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZACQAHgaAEgbIA5gDQgKAdgMAaQgMAcgMAXIgnADQAJgZAIgcg");
	this.shape_52.setTransform(-143.6,17.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag5B5QgSgEgLgGIALgrQAIAEAPAEQAPADARABQANAAAJgEQALgEAHgIQAIgJAAgNQAAgTgQgKQgPgLglAAIgSAAIgPACIAQiAICGAAIAAAwIheAAIgFAmIAIgBIAIAAQAQAAARAEQARAEANAKQAOAJAIAOQAIAPAAAWQAAAXgNAUQgMATgYAMQgYALgfABQgXAAgRgEg");
	this.shape_53.setTransform(-158.7,6.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag4B6QgTgGgLgGIAMgsQAIAFAQAFQAPAFASAAQAVAAALgJQAMgJAAgOQgBgNgHgIQgHgHgLgEQgJgEgNAAIgYAAIAAgnIAXAAQAKAAAKgDQAIgDAHgGQAHgGAAgLQAAgLgJgHQgJgHgRgBQgPABgOAFQgOAEgIAGIgMgrQAMgGAUgGQAUgGAZAAQAYAAASAIQASAJAKANQAJAOAAASQAAATgLAPQgLAPgXAHIAAABQAPADAMAGQAMAJAHAMQAHAMABARQgBAVgMARQgMASgWAJQgXAKgdAAQgZAAgTgFg");
	this.shape_54.setTransform(-180,6.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag0BtQgTgRgKgcQgKgdAAgjQAAgiAKgdQAKgdAVgRQAUgQAegBQAZAAASAKQARAKALASQALASAFAWQAGAXgBAZQAAAkgKAeQgKAcgVARQgVAQgeAAQgfAAgVgSgAgYg+QgKAVAAApQAAAqAKAVQAJAUAPABQARAAAJgWQAJgVAAgpQAAgogJgVQgJgWgRABQgOgBgKAVg");
	this.shape_55.setTransform(-200.7,6.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag5B5QgSgEgLgGIALgrQAIAEAPAEQAPADARABQANAAAJgEQALgEAHgIQAIgJAAgNQAAgTgQgKQgPgLglAAIgSAAIgPACIAQiAICGAAIAAAwIheAAIgFAmIAIgBIAIAAQAQAAARAEQARAEANAKQAOAJAIAOQAIAPAAAWQAAAXgNAUQgMATgYAMQgYALgfABQgXAAgRgEg");
	this.shape_56.setTransform(-222,6.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhWB9IAAgjIAfgcQAcgZARgSQARgSAIgOQAJgPAAgOQAAgPgJgLQgKgJgTgBQgQABgOAGQgNAGgKAHIgQgoQANgMAWgGQAUgIAZAAQAaAAAUAKQATAKAKARQAKARAAAXQAAAVgJATQgJAPgPARQgOARgTAQIgUATIAAABIBbAAIAAAvg");
	this.shape_57.setTransform(-243,6.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgxBwQgXgOgKgZQgLgYAAgeQAAghAMgcQALgcAVgTQATgRAXgJQAWgJAdgBIAOgBIAJAAIAAAtIgKAAIgNABQgZACgQAIQgPAJgJAMQgKANgDAOIABAAQAKgJANgFQAKgFASAAQAVAAARAKQARAJALASQAKAQAAAaQAAAYgMAUQgLAVgUAMQgVALgaABQgggBgVgOgAgUAEQgJAGgEAKIgCAGIgBAJQABANAFALQAEALAIAHQAJAHAMAAQAPAAAIgMQAJgMAAgTQAAgMgDgKQgFgJgIgGQgIgEgLAAQgLAAgJAEg");
	this.shape_58.setTransform(-263.9,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276.5,-20.7,782.9,143.3);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape.setTransform(175.4,93.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiBEIAAg5IgTAAQgIAAgFACQgEACgDAEQgGAEgDAHQgDAFgDAIIgEAOIgDAGIgDAFIgbAAIAFgHIAEgJIAGgNIAGgPQAEgHAFgFIAHgFIAIgDIAAgBQgIgBgJgCQgHgEgGgHQgFgHAAgLQAAgKAFgHQAFgHAHgFQAJgFAMgCQAJgCAOAAIAXABIAUABIAACFgAgCgxQgIACgGAGQgFAEgBAKQAAAJAHAFQAFAFAIADQAHABAHAAIANAAIAJAAIAAgtIgKgBIgLAAQgIAAgHABg");
	this.shape_1.setTransform(158.7,93.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgLAXIgMATIgTAhIgVAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAIgOIAHgNIAHgOIAohEIAdAAIAACFg");
	this.shape_2.setTransform(144.8,93.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_3.setTransform(131.3,93.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_4.setTransform(118,95.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgMQAVgMAlAAIAAgDQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAxIABAQIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAHQgJAGAAAOQAAAMAHAFQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_5.setTransform(102.5,93.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_6.setTransform(88.5,93.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_7.setTransform(67.4,93.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_8.setTransform(52.1,93.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAYgBIARABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgLAEQgKAEgMACIgQABIgFAAgAgeAzIAKABIAKAAQAJAAAHgCQAKgBAGgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgQAAIgLABg");
	this.shape_9.setTransform(32.1,93.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_10.setTransform(17,93.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_11.setTransform(1.8,95.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgMQAVgMAlAAIAAgDQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAxIABAQIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAHQgJAGAAAOQAAAMAHAFQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_12.setTransform(-13.8,93.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAXgBIASABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgKAEQgLAEgNACIgPABIgFAAgAgeAzIAKABIAKAAQAIAAAIgCQAJgBAHgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgRAAIgKABg");
	this.shape_13.setTransform(-26.7,93.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_14.setTransform(-41.8,93.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_15.setTransform(-55.2,93.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_16.setTransform(-72.6,93.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbA+QgPgJgIgPQgIgQAAgUQAAgTAIgQQAHgRAOgJQAPgKARAAQARAAALAGQALAGAGAKQAGAKADALQADALgBAJIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALgBQANAAAJgCQAJgBAGgDIAFASQgHACgLADQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOABQgKAAgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_17.setTransform(-85.4,93.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAcBEIAAg2IAAAAQgHAEgKADQgKACgIABQgNgBgKgEQgKgEgGgKQgFgIgBgPIAAgxIAZAAIAAAuQAAANAGAIQAGAGAPAAQAHgBAIgCQAIgCAFgDIAAhBIAZAAIAACHg");
	this.shape_18.setTransform(-99.7,93.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag3BNIALgEQAFgDAGgEQAFgEAFgHQAGgIAFgJIABgDIABgDIgBgCIgBgEIgyh7IAbAAIAdBQIAFAOIACAMIAAAAIAFgMIAEgPIAbhPIAaAAIglBgIgQAmQgHAQgGALQgHALgIAIQgKAHgIAEQgIADgFABg");
	this.shape_19.setTransform(-113.4,96.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgOAOIAGgWIAEgWIAagEIgJAaIgJAXIgHASIgSACIAHgVg");
	this.shape_20.setTransform(-129.1,100);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag3BEIgRgCIAAiFIAZAAIAAAuIAJgBIAMgBQAPAAALAEQAOAFAJAKQAIAIABARQgBALgEAHQgEAIgGAFQgIAGgJAEQgHAEgKABIgTABIgTAAgAgvgDIAAA0IAIABIAJAAQAJAAAJgCQAJgEAEgFQAFgHAAgKQAAgMgFgFQgEgFgIgCQgJgDgJAAIgKAAIgIACgAAxBDIAAiGIAYAAIAACGg");
	this.shape_21.setTransform(-141.1,93.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IALgBQAJgNAFgOQADgLADgOQACgNAAgOIAAgkIBYAAIAABzIAOABIgCA9gAgNgvQAAAOgCANQgCAMgDAKIgEANIgHAMIA9AAIAAhgIgrAAg");
	this.shape_22.setTransform(-158.1,95.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgMQAVgMAlAAIAAgDQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAxIABAQIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAHQgJAGAAAOQAAAMAHAFQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_23.setTransform(-172.4,93.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag7AxIAHgCIAGgEQAJgHACgOQAEgPgBgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgGACQgHACgJAAg");
	this.shape_24.setTransform(-186.8,93.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgGgQgLgIQgJgHgRAAIgEAAIAAA7IgZAAIAAiFIAZAAIAAA7IAFAAIAxg7IAeAAIg4A9QANACAMAIQAKALAJASIAGAQIAHARg");
	this.shape_25.setTransform(-198.7,93.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgUA+QgPgJgIgQQgJgPAAgVQAAgTAJgQQAJgRARgJQAPgJAVAAQALAAAJACQAJACAFADIgGATIgLgFQgHgBgKgBQgQAAgJAIQgKAGgGAMQgFAMAAAMQAAAQAGALQAGALALAGQAJAGANAAQALAAAHgCIAMgEIAFASIgQAFQgKACgOABQgSAAgPgIg");
	this.shape_26.setTransform(-212.5,93.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgOAOIAGgWIAEgWIAagEIgJAaIgJAXIgHASIgSACIAHgVg");
	this.shape_27.setTransform(-228,100);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgLATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAIgNIAIgOIAnhEIAeAAIAACFg");
	this.shape_28.setTransform(-238.4,93.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgHgQgKgIQgJgHgRAAIgEAAIAAA7IgYAAIAAiFIAYAAIAAA7IAFAAIAyg7IAdAAIg4A9QAOACALAIQAKALAJASIAFAQIAIARg");
	this.shape_29.setTransform(-251.9,93.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAXgBIASABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgKAEQgLAEgNACIgPABIgFAAgAgeAzIAKABIAKAAQAIAAAIgCQAJgBAHgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgRAAIgKABg");
	this.shape_30.setTransform(-266.1,93.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgMQAVgMAlAAIAAgDQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAxIABAQIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAHQgJAGAAAOQAAAMAHAFQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_31.setTransform(-280.7,93.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_32.setTransform(-292.8,93.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgUA+QgPgJgJgQQgHgPgBgVQAAgTAJgQQAJgRAQgJQARgJAUAAQALAAAJACQAJACAFADIgFATIgMgFQgHgBgKgBQgPAAgJAIQgLAGgFAMQgGAMAAAMQAAAQAGALQAHALAKAGQAIAGAOAAQAKAAAIgCIANgEIADASIgOAFQgLACgOABQgSAAgPgIg");
	this.shape_33.setTransform(-304.7,93.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_34.setTransform(-318.7,93.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_35.setTransform(-334,93.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOAOIAGgWIAEgWIAagEIgJAaIgJAWIgHATIgSABIAHgUg");
	this.shape_36.setTransform(174.7,67.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgMATIgTAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAIgOIAHgNIAIgOIAnhEIAdAAIAACFg");
	this.shape_37.setTransform(164.3,60.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgMAXIgLATIgSAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAIgOIAGgNIAIgOIAohEIAdAAIAACFg");
	this.shape_38.setTransform(148.8,60.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAqBZIgCgrIhlAAIAAiGIAYAAIAAByIA9AAIAAhyIAYAAIAABzIAOABIgBA9g");
	this.shape_39.setTransform(133.8,62.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgZAVgLQAVgNAlABIAAgDQAAgFgCgIQgCgHgGgFQgHgGgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAxIABARIABAPIgWAAIgCgRIgBAAQgFAIgLAGQgKAFgNABQgOAAgJgGgAABAAQgLACgJAHQgJAGAAANQAAAMAHAGQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_40.setTransform(118.5,60.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgGgQgLgIQgJgHgQAAIgFAAIAAA7IgZAAIAAiFIAZAAIAAA7IAGAAIAwg7IAfAAIg6A9QAOACALAIQAMALAHASIAHAQIAIARg");
	this.shape_41.setTransform(106.4,60.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgMAXIgLATIgSAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAHgOIAHgNIAIgOIAphEIAcAAIAACFg");
	this.shape_42.setTransform(91,60.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKB+IAAg1QgTgBgQgIQgPgJgJgPQgIgPgBgVQABgUAJgPQAJgQAPgIQAPgIATgCIAAg8IAVAAIAAA8QAUABAPAJQAPAJAJAPQAJAPAAATQAAAWgJAPQgJAPgQAJQgPAIgTABIAAA1gAALA5QANgCAKgIQAKgHAFgMQAGgLAAgOQgBgUgLgOQgMgOgUgDgAghgnQgKAHgFAMQgFALAAANQAAAOAFALQAFALAKAHQAKAIANABIAAhoQgNACgKAHg");
	this.shape_43.setTransform(74.2,60.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgLAXIgMATIgSAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAIgOIAHgNIAHgOIAohEIAdAAIAACFg");
	this.shape_44.setTransform(57.5,60.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAqBZIgCgrIhlAAIAAiGIAYAAIAAByIA9AAIAAhyIAYAAIAABzIAOABIgBA9g");
	this.shape_45.setTransform(42.6,62.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADAKgBAKIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALAAQANgBAJgCQAJgBAGgDIAFASQgHADgLACQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOAAQgKABgIAGQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_46.setTransform(27.3,60.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_47.setTransform(12.7,60.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgUA+QgPgJgIgQQgJgQAAgUQAAgTAJgQQAJgRARgJQAPgJAVAAQALAAAJACQAJACAFADIgGATIgLgFQgHgCgKAAQgQAAgJAHQgKAIgGALQgFALAAANQAAAPAGAMQAGALALAGQAJAGANAAQALAAAHgCIAMgEIAFASIgQAFQgKADgOAAQgSAAgPgIg");
	this.shape_48.setTransform(-1,60.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgOAOIAGgWIAEgWIAagEIgJAaIgJAWIgHATIgSABIAHgUg");
	this.shape_49.setTransform(-16.5,67.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag3BDIgRgBIAAiFIAYAAIAAAuIAKgBIANgBQAOAAALAEQAOAFAIAKQAJAIAAARQAAALgEAHQgDAIgHAFQgHAGgKAEQgHADgJACIgTABIgUgBgAgwgDIAAA0IAIABIAJAAQAKAAAJgCQAJgDAEgGQAGgHAAgKQAAgMgGgFQgDgFgJgDQgJgCgKAAIgKAAIgIACgAAwBDIAAiGIAZAAIAACGg");
	this.shape_50.setTransform(-28.4,60.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgdBDQgMgDgJgFIAGgRQAIAFAJACQAKADAJAAQAOAAAJgHQAJgGAAgKQAAgJgGgGQgGgFgIgCQgHgCgLAAIgMAAIAAgOIAMAAQAOgBAJgGQAJgGAAgKQAAgJgHgFQgHgFgKAAQgIAAgJACQgIADgIAEIgGgPQALgGALgDQALgDAMAAQAJAAAKADQALAEAHAIQAHAHAAAOQAAAIgEAGQgFAHgHAEQgHAEgHABIAAABQAKABAIACQAIAEAGAHQAEAIABAKQgBAOgIAJQgJAJgNAEQgNAEgNAAQgMAAgLgDg");
	this.shape_51.setTransform(-43.8,60.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgVAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAJAJAPQAIAQAAAUQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEANAAALQAAAOAFANQAFALAJAHQAJAGALABQALgBAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgLgIgJQgKgIgOAAQgMABgKAHg");
	this.shape_52.setTransform(-57.4,60.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_53.setTransform(-72.7,60.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgoBDIAAiFIBRAAIAAATIg5AAIAAByg");
	this.shape_54.setTransform(-85,60.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgVAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAJAJAPQAIAQAAAUQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEANAAALQAAAOAFANQAFALAJAHQAJAGALABQALgBAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgLgIgJQgKgIgOAAQgMABgKAHg");
	this.shape_55.setTransform(-98.8,60.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_56.setTransform(-114,63.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_57.setTransform(-130,60.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgOAOIAGgWIAEgWIAagEIgJAaIgJAWIgHATIgSABIAHgUg");
	this.shape_58.setTransform(-146.6,67.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag3BDIgRgBIAAiFIAYAAIAAAuIAKgBIANgBQAPAAALAEQANAFAIAKQAJAIAAARQAAALgDAHQgEAIgHAFQgHAGgJAEQgIADgJACIgTABIgUgBgAgwgDIAAA0IAIABIAJAAQAKAAAJgCQAJgDAEgGQAGgHAAgKQAAgMgGgFQgDgFgJgDQgJgCgKAAIgKAAIgIACgAAwBDIAAiGIAZAAIAACGg");
	this.shape_59.setTransform(-158.6,60.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_60.setTransform(-173.6,60.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADAKgBAKIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALAAQANgBAJgCQAJgBAGgDIAFASQgHADgLACQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOAAQgKABgIAGQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_61.setTransform(-186.4,60.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAcBEIAAg3IAAAAQgHAFgKADQgKADgIgBQgNAAgKgEQgKgFgGgJQgFgIgBgPIAAgxIAZAAIAAAuQAAANAGAHQAGAHAPgBQAHABAIgDQAIgDAFgCIAAhBIAZAAIAACHg");
	this.shape_62.setTransform(-200.7,60.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_63.setTransform(-213.6,60.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgVAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAJAJAPQAIAQAAAUQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEANAAALQAAAOAFANQAFALAJAHQAJAGALABQALgBAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgLgIgJQgKgIgOAAQgMABgKAHg");
	this.shape_64.setTransform(-227,60.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgMAXIgLATIgSAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAHgOIAHgNIAIgOIAphEIAcAAIAACFg");
	this.shape_65.setTransform(-248.3,60.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ag3BDIgRgBIAAiFIAZAAIAAAuIAJgBIAMgBQAPAAALAEQAOAFAJAKQAIAIABARQgBALgEAHQgDAIgHAFQgHAGgKAEQgHADgKACIgSABIgUgBgAgvgDIAAA0IAHABIAJAAQAKAAAJgCQAJgDAEgGQAFgHABgKQgBgMgFgFQgEgFgIgDQgJgCgJAAIgLAAIgHACgAAwBDIAAiGIAZAAIAACGg");
	this.shape_66.setTransform(-271.3,60.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_67.setTransform(-288.3,60.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgZAVgLQAVgNAlABIAAgDQAAgFgCgIQgCgHgGgFQgHgGgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAxIABARIABAPIgWAAIgCgRIgBAAQgFAIgLAGQgKAFgNABQgOAAgJgGgAABAAQgLACgJAHQgJAGAAANQAAAMAHAGQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_68.setTransform(-303.1,60.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("Ag8AxIAIgCIAGgEQAJgHACgOQADgPAAgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgHACQgFACgKAAg");
	this.shape_69.setTransform(-317.5,60.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AArBeIAAimIhVAAIAACmIgZAAIAAi7ICHAAIAAC7g");
	this.shape_70.setTransform(-332.6,58);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_71.setTransform(409.2,23);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("Ag4BZQgNgIgHgNQgHgNAAgQQAAgXANgQQAOgOAYgIQAZgHAfAAIAAgDQAAgFgDgGQgCgFgIgEQgHgEgMAAQgPABgNADQgOAEgJAGIgLglQAKgFASgGQATgFAXgBQAfABASAKQASALAHATQAIARAAAWIAAA/IAAAaIACATIgzAAIgEgSIgBAAQgJALgOAFQgMAHgQAAQgTgBgOgHgAAAAIQgMACgHAHQgHAGAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgJIAAgFIABgFIAAgUQgQAAgKADg");
	this.shape_72.setTransform(389.9,23);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_73.setTransform(371.6,23);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("Ag4BdIgegDIAAi2IA5AAIAAA2IAOgBIAPgBQAVAAAUAGQAUAGANAOQANAOAAAXQAAARgHANQgGAMgMAIQgMAIgPAEQgPAFgQACIgdABIgfAAgAgVAAIgIAAIAAA1IAIABIALAAQAKABAIgDQAJgDAGgGQAHgGAAgMQAAgLgHgGQgHgGgJgCQgIgBgKAAIgKABg");
	this.shape_74.setTransform(352.9,23.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AhbAyQAHgBAFgDQAGgDADgDQAIgIACgOQACgPAAgVIAAhLICWAAIAAC3Ig6AAIAAiLIgmAAIAAAiQAAAggFAXQgGAYgPAMQgJAJgNAFQgNAEgTAAg");
	this.shape_75.setTransform(330.3,23.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AhNBWQAFgBAHgDQAGgCAHgEQAGgEAHgGQAGgGAFgHIACgFIABgEIgBgEIgCgFIhEioIBAAAIAcBbIAEASIADARIACAAIADgSIAFgRIAXhbIA9AAIgrB6QgNAjgLAXQgLAYgKAPQgJAOgJAJQgPANgPAGQgPAFgLABg");
	this.shape_76.setTransform(311.2,27.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgvBbQgSgEgQgJIAMgkQAKAGAOADQAOAEAPAAQARAAAJgFQAIgGAAgJQAAgLgLgFQgIgEgTAAIgcAAIAAghIAcAAQASgBAGgFQAJgFAAgIQgBgIgHgGQgHgEgPAAQgNgBgMAEQgMAEgKAFIgLghQAQgKAVgEQATgFATAAQAQAAARAFQARAEALALQAMALAAATQABAMgHAIQgGAIgJAGQgJAEgKACIAAACQANACALACQAKAGAIAJQAGAIABAOQAAASgKAKQgIAMgOAGQgOAHgQACQgQADgMAAQgUAAgTgFg");
	this.shape_77.setTransform(291.8,23);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAFgRQAHgSALgOQAMgPARgIQARgJAXAAQAeAAASAOQASANAIAVQAJAVAAAYIgBALIgBAJIh2AAQABAMAIAIQAHAIAMAEQAJAEAOAAQAOAAANgCQAMgCAMgEIAHAnQgOAGgRACQgRADgTAAQgtAAgagZgAgQgyQgIAGgEAIQgEAJAAAIIBCAAQAAgHgDgJQgCgJgIgGQgHgGgMgBQgKABgIAGg");
	this.shape_78.setTransform(272.8,22.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AhdCEIAAjFIAAghIgCgdIAyAAIADAaIAAAAQALgPAPgHQAQgIATAAQAUAAASALQARAMALAVQAKAVABAdQgBAigMAUQgMAWgTALQgUALgUAAQgQAAgMgGQgNgGgGgKIgBAAIAABdgAgWhOQgKAIgDANIgBAFIAAAGIAAAZIAAAGIABAGQADAKAKAIQAIAHAOAAQAQAAALgOQAKgMAAgYQABgPgFgMQgEgLgJgHQgJgHgLAAQgMAAgKAIg");
	this.shape_79.setTransform(251.8,26.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAjCDIAAg5IABgZIABgXIACgeIgCAAIgJAYIgKAYIgSAqIgTAtIhGAAIAAi4IA2AAIAAA3IgBAoIgCAjIACABIALgcIAKgZIAjhOIBGAAIAAC4gAgnhbQgNgOgBgZIAkAAQAAANAFAHQAFAHAHAAQAIAAAEgHQAFgHAAgNIAlAAQgCAbgOANQgPAOgXAAQgagBgNgOg");
	this.shape_80.setTransform(220.9,19.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("Ag+BdIgfAAIgegDIAAi2IA5AAIAAA2IANgBIARgBQAVAAARAHQATAGAMAOQAMANABAXQAAASgHAMQgHAMgMAIQgSAMgUAEQgUAEgTAAIgFAAgAg6AAIgIAAIAAA2IAIAAIAJAAQAKAAAJgCQAJgDAGgHQAFgGAAgLQAAgKgFgGQgFgGgJgDQgIgBgJAAIgMABgABCBbIAAi3IA6AAIAAC3g");
	this.shape_81.setTransform(194.8,23.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AAcBcIAAhJIg4AAIAABJIg6AAIAAi3IA6AAIAABDIA4AAIAAhDIA6AAIAAC3g");
	this.shape_82.setTransform(169,23);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("Ag4BdIgegDIAAi2IA5AAIAAA2IAOgBIAPgBQAVAAAUAGQAUAGANAOQANAOAAAXQAAARgHANQgGAMgMAIQgMAIgPAEQgPAFgQACIgdABIgfAAgAgVAAIgIAAIAAA1IAIABIALAAQAKABAIgDQAJgDAGgGQAHgGAAgMQAAgLgHgGQgHgGgJgCQgIgBgKAAIgKABg");
	this.shape_83.setTransform(148,23.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AhbAyQAHgBAFgDQAGgDADgDQAIgIACgOQACgPAAgVIAAhLICWAAIAAC3Ig6AAIAAiLIgmAAIAAAiQAAAggFAXQgGAYgPAMQgJAJgNAFQgNAEgTAAg");
	this.shape_84.setTransform(125.4,23.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("Ag4BZQgNgIgHgNQgHgNAAgQQAAgXANgQQAOgOAYgIQAZgHAfAAIAAgDQAAgFgDgGQgCgFgIgEQgHgEgMAAQgPABgNADQgOAEgJAGIgLglQAKgFASgGQATgFAXgBQAfABASAKQASALAHATQAIARAAAWIAAA/IAAAaIACATIgzAAIgEgSIgBAAQgJALgOAFQgMAHgQAAQgTgBgOgHgAAAAIQgMACgHAHQgHAGAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgJIAAgFIABgFIAAgUQgQAAgKADg");
	this.shape_85.setTransform(105.7,23);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAGgRQAFgSAMgOQAMgPARgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEAOAAQAOAAANgCQAMgCAMgEIAHAnQgOAGgRACQgRADgTAAQgtAAgagZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQABgHgEgJQgCgJgIgGQgGgGgNgBQgKABgIAGg");
	this.shape_86.setTransform(86.2,22.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AhdCEIAAjFIAAghIgCgdIAyAAIADAaIABAAQAKgPAQgHQAPgIATAAQAVAAARALQASAMAKAVQALAVAAAdQAAAigNAUQgMAWgTALQgUALgUAAQgPAAgNgGQgNgGgGgKIgBAAIAABdgAgWhOQgJAIgEANIgBAFIAAAGIAAAZIAAAGIABAGQAEAKAJAIQAIAHANAAQASAAAKgOQAKgMABgYQAAgPgFgMQgFgLgIgHQgJgHgLAAQgMAAgKAIg");
	this.shape_87.setTransform(65.2,26.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgZACQAHgaAEgbIA5gDQgKAdgMAaQgMAcgMAXIgnADQAJgZAIgcg");
	this.shape_88.setTransform(40.2,31.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AhbAyQAHgBAFgDQAGgDADgDQAIgIACgOQACgPAAgVIAAhLICWAAIAAC3Ig6AAIAAiLIgmAAIAAAiQAAAggFAXQgGAYgPAMQgJAJgNAFQgNAEgTAAg");
	this.shape_89.setTransform(24.3,23.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("Ag4BZQgNgIgHgNQgHgNAAgQQAAgXANgQQAOgOAYgIQAZgHAfAAIAAgDQAAgFgDgGQgCgFgIgEQgHgEgMAAQgPABgNADQgOAEgJAGIgLglQAKgFASgGQATgFAXgBQAfABASAKQASALAHATQAIARAAAWIAAA/IAAAaIACATIgzAAIgEgSIgBAAQgJALgOAFQgMAHgQAAQgTgBgOgHgAAAAIQgMACgHAHQgHAGAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgJIAAgFIABgFIAAgUQgQAAgKADg");
	this.shape_90.setTransform(4.6,23);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AAcBcIAAhJIg4AAIAABJIg5AAIAAi3IA5AAIAABDIA4AAIAAhDIA7AAIAAC3g");
	this.shape_91.setTransform(-16,23);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgVQgMgWgBgeQAAgdANgWQANgWAVgLQAXgMAcgBQAdABAVAMQAVALALAWQANAVAAAdQAAAfgPAXQgOAWgWAKQgWALgYAAQgaAAgXgMgAgUguQgIAIgEANQgEAMAAANQAAAPAEANQAFAMAIAIQAJAHAKAAQASAAAJgPQAKgPAAgZQAAgNgEgMQgDgNgJgIQgIgIgNAAQgLAAgJAIg");
	this.shape_92.setTransform(-38,23);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AAjBcIAAg4IABgZIABgWIABgfIgBAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA2AAIAAA4IAAAmIgCAkIABAAIALgcIAKgXIAihPIBHAAIAAC3g");
	this.shape_93.setTransform(-60.3,23);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AAyB6IgCg8IiPAAIAAi3IA5AAIAACLIA4AAIAAiLIA6AAIAACPIAUAAIgCBkg");
	this.shape_94.setTransform(-82.1,26);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AAdBcQgEgGgEgKIgJgZQgGgQgHgIQgJgIgPAAIgFAAIAABJIg6AAIAAi3IA6AAIAABKIAGAAIAthKIBDAAIhEBQQARADAKALQAMAOAIAVIAKAaIAMAcg");
	this.shape_95.setTransform(-102.9,23);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AAcBcIAAhJIg4AAIAABJIg6AAIAAi3IA6AAIAABDIA4AAIAAhDIA7AAIAAC3g");
	this.shape_96.setTransform(-125.2,23);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AhNBWQAFgBAHgDQAGgCAHgEQAGgEAHgGQAGgGAFgHIACgFIABgEIgBgEIgCgFIhEioIBAAAIAcBbIAEASIADARIACAAIADgSIAFgRIAXhbIA9AAIgrB6QgNAjgLAXQgLAYgKAPQgJAOgJAJQgPANgPAGQgPAFgLABg");
	this.shape_97.setTransform(-146.1,27.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgZCrIAAhIQgagCgWgMQgWgKgOgVQgNgUgBgeQABgdANgUQANgVAWgLQAWgLAbgDIAAhPIA0AAIgBBOQAbADAWAMQAWALANAVQANAVABAbQgBAfgNAUQgOAVgWAKQgWAMgaACIABBIgAAaA9QAVgFAKgQQAKgPAAgXQAAgTgKgQQgKgPgVgFgAg4ghQgKAQAAATQAAAYAKAPQALAPAUAFIAAhzQgVAFgKAQg");
	this.shape_98.setTransform(-169.7,22.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AAkCDIAAg5IAAgZIABgXIACgeIgCAAIgJAYIgKAYIgSAqIgTAtIhGAAIAAi4IA3AAIAAA3IgCAoIgCAjIACABIALgcIAKgZIAjhOIBGAAIAAC4gAgnhbQgNgOgBgZIAlAAQgBANAFAHQAFAHAHAAQAIAAAEgHQAEgHACgNIAkAAQgCAbgOANQgPAOgXAAQgagBgNgOg");
	this.shape_99.setTransform(-202.4,19.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("Ag+BdIgfAAIgegDIAAi2IA5AAIAAA2IANgBIARgBQAVAAARAHQATAGAMAOQAMANABAXQAAASgHAMQgHAMgMAIQgSAMgUAEQgUAEgTAAIgFAAgAg6AAIgIAAIAAA2IAIAAIAJAAQAKAAAJgCQAJgDAGgHQAFgGAAgLQAAgKgFgGQgFgGgJgDQgIgBgJAAIgMABgABCBbIAAi3IA6AAIAAC3g");
	this.shape_100.setTransform(-228.6,23.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_101.setTransform(-252.1,23);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("Ag4BZQgNgIgHgNQgHgNAAgQQAAgXANgQQAOgOAYgIQAZgHAfAAIAAgDQAAgFgDgGQgCgFgIgEQgHgEgMAAQgPABgNADQgOAEgJAGIgLglQAKgFASgGQATgFAXgBQAfABASAKQASALAHATQAIARAAAWIAAA/IAAAaIACATIgzAAIgEgSIgBAAQgJALgOAFQgMAHgQAAQgTgBgOgHgAAAAIQgMACgHAHQgHAGAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgJIAAgFIABgFIAAgUQgQAAgKADg");
	this.shape_102.setTransform(-271.3,23);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("Ag/BcIAAi3IB/AAIAAAsIhGAAIAACLg");
	this.shape_103.setTransform(-287.9,23);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("AgwBVQgWgLgNgVQgMgWgBgeQAAgdANgWQAMgWAXgLQAWgMAcgBQAdABAVAMQAVALAMAWQALAVABAdQAAAfgPAXQgOAWgWAKQgWALgYAAQgbAAgVgMgAgUguQgIAIgEANQgEAMAAANQAAAPAEANQAFAMAIAIQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgMQgEgNgHgIQgJgIgNAAQgLAAgJAIg");
	this.shape_104.setTransform(-307.7,23);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AhFCAIgZgDIAAj9ICoAAIAAAvIhuAAIAAAsIAPgBIAQgBQARAAATAFQATAFAPALQANAKAIANQAIAPABAWQgBASgGAPQgHAOgLALQgMAKgRAHQgRAGgTADQgRADgUAAIglgBgAgaADIgKABIAABQIAKABIAMABQAKAAAIgEQAKgDAHgGQAGgGADgHQAEgIAAgJQAAgKgEgHQgEgHgGgFQgIgGgKgDQgIgDgKAAIgKABg");
	this.shape_105.setTransform(-329.5,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-343.5,-7.3,788.3,116.4);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAXgBIASABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIABAPQgBANgHAIQgIAIgKAEQgLAEgNACIgPABIgFAAgAgeAzIAJABIALAAQAIAAAIgCQAJgBAHgGQAHgFAAgJQAAgKgGgFQgGgGgKgBQgHgCgMAAIgSAAgAgVgyIgJABIAAAoIATAAQAJAAAHgCQAIgCAGgFQAFgFAAgIQAAgKgJgFQgJgFgRAAIgKABg");
	this.shape.setTransform(53.5,91.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAPAFALQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMAAgKAIg");
	this.shape_1.setTransform(38.4,91.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_2.setTransform(25,91.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAPAFALQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMAAgKAIg");
	this.shape_3.setTransform(11.6,91.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoBDIAAiFIBRAAIAAATIg5AAIAAByg");
	this.shape_4.setTransform(-0.7,91.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag7AxIAHgCIAGgEQAJgHACgOQAEgPgBgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgGACQgHACgJAAg");
	this.shape_5.setTransform(-20.8,91.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAiBfIAAg6IAAgTIABgRIABgRIgBAAIgLAUIgMAUIgTAiIgVAlIgdAAIAAiGIAYAAIAAA3IAAAUIgBARIAAASIAAAAIAIgPIAHgNIAHgOIAohEIAdAAIAACGgAgThAQgIgFgEgHQgEgIAAgKIASAAQABAJAEAGQAFAGAHAAQAIAAAEgGQAFgGABgJIASAAQgCARgJAJQgLAJgOAAQgMAAgHgFg");
	this.shape_6.setTransform(-34.7,88.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgLQAVgOAlAAIAAgCQAAgFgCgIQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABARIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAGQgJAIAAANQAAAMAHAFQAHAGAJAAQAMgBAIgGQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_7.setTransform(-49.6,91.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKB+IAAg1QgTgBgQgIQgPgJgJgPQgIgPgBgVQABgUAJgPQAJgQAPgIQAPgIATgCIAAg8IAVAAIAAA8QAUABAPAJQAPAJAJAPQAJAPAAATQAAAWgJAPQgJAPgQAJQgPAIgTABIAAA1gAALA5QANgCAKgIQAKgHAFgMQAGgLAAgOQgBgUgLgOQgMgOgUgDgAghgnQgKAHgFAMQgFALAAANQAAAOAFALQAFALAKAHQAKAIANABIAAhoQgNACgKAHg");
	this.shape_8.setTransform(-65,90.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgLATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAIgNIAIgOIAnhEIAeAAIAACFg");
	this.shape_9.setTransform(-87.6,91.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAYgBIARABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgLAEQgKAEgMACIgQABIgFAAgAgeAzIAKABIAKAAQAJAAAHgCQAKgBAGgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgQAAIgLABg");
	this.shape_10.setTransform(-107.9,91.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAPAFALQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMAAgKAIg");
	this.shape_11.setTransform(-123,91.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgHgQgKgIQgIgHgSAAIgEAAIAAA7IgZAAIAAiFIAZAAIAAA7IAGAAIAwg7IAfAAIg6A9QAOACALAIQAMALAHASIAHAQIAIARg");
	this.shape_12.setTransform(-136.4,91.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgMAXIgKATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAHgNIAJgOIAohEIAdAAIAACFg");
	this.shape_13.setTransform(-151.8,91.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag8AxIAIgCIAGgEQAJgHADgOQADgPgBgUIAAg2IBdAAIAACFIgZAAIAAhyIgsAAIAAAjQAAAagFATQgEATgNAJQgFAEgHACQgGACgJAAg");
	this.shape_14.setTransform(-167.6,91.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgGgQgLgIQgJgHgQAAIgFAAIAAA7IgZAAIAAiFIAZAAIAAA7IAGAAIAwg7IAfAAIg6A9QAOACALAIQAMALAHASIAHAQIAIARg");
	this.shape_15.setTransform(-179.5,91.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAPAFALQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMAAgKAIg");
	this.shape_16.setTransform(-200.7,91.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgGgQgLgIQgJgHgQAAIgFAAIAAA7IgZAAIAAiFIAZAAIAAA7IAGAAIAwg7IAfAAIg6A9QAOACALAIQAMALAHASIAHAQIAIARg");
	this.shape_17.setTransform(-214.1,91.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AglBEIgRgCIAAiFIAZAAIAAAtIALgBIALAAQAOAAAPAEQANAEAKAKQAJAIAAASQAAAKgEAIQgDAIgHAFQgHAHgKADQgLAEgKAAIgTACIgUAAgAgdgEIAAA1IAIABIAKAAQAKAAAHgCQAKgDAHgGQAHgHAAgLQgBgLgGgHQgHgEgKgCQgIgCgJAAIgJAAIgJABg");
	this.shape_18.setTransform(-228.3,91.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag8AxIAIgCIAGgEQAJgHACgOQADgPAAgUIAAg2IBdAAIAACFIgZAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgHACQgFACgKAAg");
	this.shape_19.setTransform(-243.8,91.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAPAFALQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMAAgKAIg");
	this.shape_20.setTransform(-257.6,91.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgGgQgLgIQgIgHgRAAIgFAAIAAA7IgYAAIAAiFIAYAAIAAA7IAFAAIAyg7IAdAAIg5A9QAPACAKAIQALALAJASIAFAQIAIARg");
	this.shape_21.setTransform(-271,91.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgUA9QgPgIgIgQQgJgPAAgVQAAgTAJgRQAJgPAQgKQARgJAUAAQALAAAJACQAJACAFADIgFATIgMgEQgHgCgKAAQgPgBgJAIQgLAGgGAMQgFALAAANQAAAQAGAKQAHAMAKAGQAIAGAOAAQALAAAHgCIAMgEIAEASIgOAFQgLADgOAAQgSAAgPgJg");
	this.shape_22.setTransform(-284.8,91.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgQQAHgRAOgJQAPgKARAAQARAAALAGQALAGAGAKQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHAEgLACQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOAAQgKgBgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_23.setTransform(-298.2,91.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_24.setTransform(-312.9,91.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgKA9QgFgFAAgHQAAgIAFgFQAEgFAGAAQAHAAAFAFQAEAFAAAIQAAAHgEAFQgFAFgHAAQgGAAgEgFgAgKgkQgFgEAAgIQAAgIAFgFQAEgEAGAAQAHAAAFAEQAEAFAAAIQAAAIgEAEQgFAFgHABQgGgBgEgFg");
	this.shape_25.setTransform(310.8,59);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgMQAVgMAlAAIAAgDQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAxIABAQIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAHQgJAGAAAOQAAAMAHAFQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_26.setTransform(300.5,58.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_27.setTransform(286.6,61.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgMgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_28.setTransform(270.6,58.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAXgBIASABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgKAEQgLAEgNACIgPABIgFAAgAgeAzIAKABIAKAAQAIAAAIgCQAJgBAHgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgRAAIgKABg");
	this.shape_29.setTransform(256.4,58.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgMgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_30.setTransform(241.3,58.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgoBDIAAiFIBRAAIAAATIg5AAIAAByg");
	this.shape_31.setTransform(229,58.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgMgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_32.setTransform(215.2,58.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAvBZIgBgrIhcAAIgBArIgTAAIgBg9IALgBQAJgNAFgOQADgLACgOQACgNAAgOIAAgkIBZAAIAABzIAOABIgBA9gAgNgvQAAAOgBANQgCAMgEAKIgEANIgGAMIA8AAIAAhgIgrAAg");
	this.shape_33.setTransform(199.8,60.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgOAOIAGgWIAEgWIAagEIgJAaIgJAXIgHASIgSABIAHgUg");
	this.shape_34.setTransform(183.6,65.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag3BEIgRgCIAAiFIAYAAIAAAuIAKgBIANgBQAPAAALAFQANAEAIAKQAJAIAAARQAAALgDAHQgFAIgGAFQgIAGgIAEQgIAEgJABIgTABIgUAAgAgwgDIAAA0IAIABIAJAAQAKAAAJgCQAJgEAEgFQAGgHgBgKQABgMgGgFQgEgFgIgCQgJgDgKAAIgKAAIgIACgAAwBDIAAiGIAZAAIAACGg");
	this.shape_35.setTransform(171.6,58.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_36.setTransform(156.6,58.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_37.setTransform(143.1,58.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgbA+QgPgJgIgPQgIgQAAgUQAAgTAIgQQAHgRAOgJQAPgKARAAQARAAALAGQALAGAGAKQAGAKADALQADALgBAJIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALgBQANAAAJgCQAJgBAGgDIAFASQgHACgLADQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOABQgKAAgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_38.setTransform(128.5,58.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape_39.setTransform(112.5,58.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag3BNIALgEQAFgDAGgEQAFgEAFgHQAGgIAFgJIABgDIABgDIgBgCIgBgEIgyh7IAbAAIAdBQIAFAOIACAMIAAAAIAFgMIAEgPIAbhPIAaAAIglBgIgQAmQgHAQgGALQgHALgIAIQgKAHgIADQgIAEgFABg");
	this.shape_40.setTransform(97,61.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgHgQgKgIQgJgHgQAAIgFAAIAAA7IgYAAIAAiFIAYAAIAAA7IAFAAIAyg7IAdAAIg4A9QAOACALAIQAKALAJASIAFAQIAIARg");
	this.shape_41.setTransform(84.6,58.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgMgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_42.setTransform(69.3,58.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IAMgBQAIgNAFgOQAEgLACgOQACgNAAgOIAAgkIBYAAIAABzIAOABIgCA9gAgNgvQAAAOgCANQgCAMgDAKIgFANIgGAMIA9AAIAAhgIgrAAg");
	this.shape_43.setTransform(53.9,60.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbA+QgPgJgIgPQgIgQAAgUQAAgTAIgQQAHgRAOgJQAPgKARAAQARAAALAGQALAGAGAKQAGAKADALQADALgBAJIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALgBQANAAAJgCQAJgBAGgDIAFASQgHACgLADQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOABQgKAAgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_44.setTransform(33.8,58.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag3BEIgRgCIAAiFIAYAAIAAAuIAKgBIAMgBQAQAAALAFQANAEAIAKQAJAIAAARQAAALgDAHQgFAIgGAFQgIAGgIAEQgIAEgKABIgTABIgTAAgAgwgDIAAA0IAJABIAJAAQAJAAAJgCQAJgEAEgFQAGgHgBgKQABgMgGgFQgDgFgJgCQgJgDgKAAIgJAAIgJACgAAxBDIAAiGIAYAAIAACGg");
	this.shape_45.setTransform(17.5,58.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_46.setTransform(0.5,58.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAcBEIAAg2IAAAAQgHAEgKADQgKACgIABQgNgBgKgEQgKgEgGgKQgFgIgBgPIAAgxIAZAAIAAAuQAAANAGAHQAGAHAPAAQAHgBAIgCQAIgCAFgDIAAhBIAZAAIAACHg");
	this.shape_47.setTransform(-14.4,58.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgMgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_48.setTransform(-29.1,58.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgdBDQgMgDgJgFIAGgRQAIAFAJACQAKADAJAAQAOAAAJgHQAJgGAAgKQAAgJgGgGQgGgFgIgCQgHgCgLAAIgMAAIAAgOIAMAAQAOgBAJgGQAJgGAAgKQAAgJgHgFQgHgFgKAAQgIAAgJACQgIADgIAEIgGgPQALgGALgDQALgDAMAAQAJAAAKADQALAEAHAIQAHAHAAAOQAAAIgEAGQgFAHgHAEQgHAEgHABIAAABQAKABAIACQAIAEAGAHQAEAIABAKQgBAOgIAJQgJAJgNAEQgNAEgNAAQgMAAgLgDg");
	this.shape_49.setTransform(-42.9,58.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag3BNIALgEQAFgDAGgEQAFgEAFgHQAGgIAFgJIABgDIABgDIgBgCIgBgEIgyh7IAbAAIAdBQIAFAOIACAMIAAAAIAFgMIAEgPIAbhPIAaAAIglBgIgQAmQgHAQgGALQgHALgIAIQgKAHgIADQgIAEgFABg");
	this.shape_50.setTransform(-55.4,61.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_51.setTransform(-69.5,61.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgoBDIAAiFIBRAAIAAATIg5AAIAAByg");
	this.shape_52.setTransform(-82.6,58.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_53.setTransform(-94.5,58.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgMgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_54.setTransform(-107.9,58.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOAOIAGgWIAEgWIAagEIgJAaIgJAXIgHASIgSABIAHgUg");
	this.shape_55.setTransform(-124.6,65.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("Ag3BNIALgEQAFgDAGgEQAFgEAFgHQAGgIAFgJIABgDIABgDIgBgCIgBgEIgyh7IAbAAIAdBQIAFAOIACAMIAAAAIAFgMIAEgPIAbhPIAaAAIglBgIgQAmQgHAQgGALQgHALgIAIQgKAHgIADQgIAEgFABg");
	this.shape_56.setTransform(-133.9,61.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_57.setTransform(-146.2,58.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgMQAVgMAlAAIAAgDQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAxIABAQIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAHQgJAGAAAOQAAAMAHAFQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_58.setTransform(-159.1,58.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag7AxIAHgCIAGgEQAJgHADgOQACgPAAgUIAAg2IBcAAIAACFIgYAAIAAhyIgsAAIAAAjQgBAagEATQgEATgNAJQgFAEgGACQgHACgJAAg");
	this.shape_59.setTransform(-173.5,58.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_60.setTransform(-187.3,58.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghA+QgOgJgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALAAQALAAAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgMgIgHQgKgJgOAAQgMABgKAHg");
	this.shape_61.setTransform(-202.5,58.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgMQAVgMAlAAIAAgDQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAxIABAQIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAHQgJAGAAAOQAAAMAHAFQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_62.setTransform(-223.2,58.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_63.setTransform(-237.3,58.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgMQAVgMAlAAIAAgDQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAxIABAQIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAHQgJAGAAAOQAAAMAHAFQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_64.setTransform(-258,58.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_65.setTransform(-270.1,58.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgbA+QgPgJgIgPQgIgQAAgUQAAgTAIgQQAHgRAOgJQAPgKARAAQARAAALAGQALAGAGAKQAGAKADALQADALgBAJIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALgBQANAAAJgCQAJgBAGgDIAFASQgHACgLADQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOABQgKAAgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_66.setTransform(-282.9,58.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAcBEIAAg2IAAAAQgHAEgKADQgKACgIABQgNgBgKgEQgKgEgGgKQgFgIgBgPIAAgxIAZAAIAAAuQAAANAGAHQAGAHAPAAQAHgBAIgCQAIgCAFgDIAAhBIAZAAIAACHg");
	this.shape_67.setTransform(-297.2,58.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgZBWQgVgLgMgWQgMgVAAgfQAAgcAMgWQANgWAWgMQAWgNAbAAQASAAALADQALADAFACIgGAUQgHgDgJgCQgKgCgMAAQgWAAgPAJQgQAJgJARQgJARAAAXQAAAYAIARQAJARAQAJQAOAJAXAAQALAAALgCQAKgCAIgEIAFAUQgHADgNADQgNADgRAAQgZAAgVgLg");
	this.shape_68.setTransform(-312.4,56);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AgVBfIgagBIgXgBIgQgBIAAi1QAHgCAMAAIAbgCIAdgBIAaABQAPACAPAEQAOAFAKAJQAKAKAAAQQAAAMgGAIQgFAJgJAFQgJAEgJACIAAABQAVAEAMAJQAMALABAUQgBATgLAMQgLALgSAGQgRAGgTABIgZACIgGAAgAgdA7IAIABIALAAQAKAAAHgCQAJgCAGgGQAFgFABgJQAAgMgLgGQgLgGgTAAIgQAAgAgUg6IgJABIAAAmIAPAAQAQAAAKgFQAKgFAAgKQAAgJgIgFQgIgFgPAAIgLAAg");
	this.shape_69.setTransform(357.3,21);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgVQgMgWgBgeQAAgcANgXQANgWAVgMQAXgMAcAAQAdAAAVAMQAVAMALAWQAMAVABAdQAAAfgPAXQgOAVgWALQgWALgYAAQgaAAgXgMgAgUguQgIAIgEANQgEANAAAMQAAAQAEAMQAFAMAIAIQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgMQgDgNgJgIQgIgIgNAAQgLAAgJAIg");
	this.shape_70.setTransform(335.3,21);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_71.setTransform(315.6,21);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AAdBcIAAhJIg5AAIAABJIg5AAIAAi3IA5AAIAABDIA5AAIAAhDIA5AAIAAC3g");
	this.shape_72.setTransform(295.8,21);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("Ag9BHQgZgZgBgsQAAgQAGgRQAFgSAMgOQAMgPARgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEANAAQAPAAANgCQAMgCAMgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQABgHgEgJQgCgJgIgGQgGgGgOgBQgKABgHAGg");
	this.shape_73.setTransform(274.9,20.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("ABCBcIgDhKIgBgSIAAgWIgBgXIgBAAIgGAUIgFARIgHAWIgZBLIgoAAIgWhKIgFgRIgFgWIgFgUIgBAAIgBAjIgBAcIgEBJIgzAAIAMi3IBKAAIAVBGIAFAVIAGAXIAAAAIAHgXIAIgZIAUhCIBJAAIALC3g");
	this.shape_74.setTransform(251.1,21);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AhNBWQAFgBAHgDQAGgCAHgEQAGgEAHgGQAGgGAFgHIACgFIABgEIgBgEIgCgFIhEioIBAAAIAcBbIAEASIADARIACAAIADgSIAFgRIAXhbIA9AAIgrB6QgNAjgLAXQgLAYgKAPQgJAOgJAJQgPANgPAGQgPAFgLABg");
	this.shape_75.setTransform(227.6,25.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AAdBcQgEgGgEgKIgJgZQgGgQgHgIQgKgIgOAAIgFAAIAABJIg6AAIAAi3IA6AAIAABKIAGAAIAthKIBEAAIhFBQQAQADALALQAMAOAHAVIALAaIAMAcg");
	this.shape_76.setTransform(208.7,21);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgVQgMgWAAgeQAAgcAMgXQAMgWAWgMQAXgMAcAAQAdAAAVAMQAVAMALAWQAMAVAAAdQAAAfgOAXQgOAVgWALQgWALgYAAQgaAAgXgMgAgUguQgIAIgEANQgEANAAAMQAAAQAEAMQAFAMAIAIQAJAHAKAAQASAAAJgPQAKgPAAgZQAAgNgEgMQgDgNgJgIQgIgIgNAAQgMAAgIAIg");
	this.shape_77.setTransform(186.5,21);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AA8B6IgCg8IhzAAIgDA8IgrAAIgChjIARgBQAHgJAEgKQAFgIADgKQAEgPACgPQACgPAAgQIAAgtICTAAIAACPIAUAAIgCBkgAgLg6QAAAMgBAMQgCANgEAMIgFAOIgHAPIA8AAIAAhjIgpAAg");
	this.shape_78.setTransform(164.1,24);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("Ag9BHQgZgZgBgsQAAgQAGgRQAFgSAMgOQALgPASgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEANAAQAPAAANgCQAMgCAMgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQAAgHgCgJQgDgJgIgGQgGgGgOgBQgKABgHAGg");
	this.shape_79.setTransform(135.5,20.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAkBcIAAg4IAAgZIABgWIACgfIgCAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA3AAIAAA4IgBAmIgDAkIACAAIALgcIAKgXIAjhPIBGAAIAAC3g");
	this.shape_80.setTransform(114,21);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AAdBcIAAhJIg5AAIAABJIg5AAIAAi3IA5AAIAABDIA5AAIAAhDIA5AAIAAC3g");
	this.shape_81.setTransform(91.7,21);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("Ag4BZQgNgJgHgNQgHgNAAgPQAAgYANgPQAOgOAYgIQAZgHAfgBIAAgCQAAgFgDgFQgCgGgIgEQgHgDgMgBQgPABgNAEQgOADgJAGIgLglQAKgFASgGQATgFAXgBQAfAAASALQASALAHASQAIATAAAWIAAA+IAAAaIACATIgzAAIgEgSIgBAAQgJALgOAGQgMAFgQABQgTgBgOgHgAAAAIQgMACgHAHQgHAGAAALQAAALAGAFQAHAGAJAAQAJAAAIgGQAIgHAEgIIAAgFIABgFIAAgVQgQAAgKAEg");
	this.shape_82.setTransform(70.2,21);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AA8B6IgCg8Ih0AAIgCA8IgrAAIgChjIASgBQAFgJAFgKQAFgIADgKQAEgPADgPQACgPAAgQIAAgtICRAAIAACPIAVAAIgDBkgAgLg6QAAAMgCAMQgBANgDAMIgGAOIgHAPIA8AAIAAhjIgpAAg");
	this.shape_83.setTransform(49.2,24);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AgvBbQgTgEgPgJIAMgkQAKAFAPAEQAOAEAOAAQARAAAJgGQAIgGAAgHQAAgMgKgFQgJgEgTgBIgcAAIAAggIAcAAQARgBAHgFQAJgFgBgIQAAgJgHgFQgGgEgQgBQgMAAgNAEQgMAEgKAGIgLgiQAQgKAVgEQATgFATAAQAQAAARAFQARAEAMALQALALAAATQAAAMgGAIQgGAJgJAEQgJAGgJABIAAACQAMACAKACQAMAFAGAKQAIAIAAAOQAAARgKALQgIAMgOAGQgOAGgQADQgQADgMAAQgUAAgTgFg");
	this.shape_84.setTransform(28.8,21);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgVQgMgWAAgeQAAgcAMgXQAMgWAWgMQAXgMAcAAQAdAAAVAMQAVAMALAWQAMAVAAAdQAAAfgOAXQgOAVgWALQgWALgYAAQgaAAgXgMgAgUguQgIAIgEANQgEANAAAMQAAAQAFAMQAEAMAIAIQAJAHAKAAQASAAAJgPQAKgPAAgZQAAgNgEgMQgDgNgJgIQgIgIgNAAQgMAAgIAIg");
	this.shape_85.setTransform(8.7,21);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgbBVQgXgMgLgVQgMgVgBgdQAAgaANgWQAMgWAXgOQAYgNAhAAQALAAAMACQALACAKADIgJArQgFgCgIgCQgIgCgMAAQgXABgLAOQgNAOAAAWQAAAQAGAMQAHALAKAGQALAGAOAAQALAAAIgBQAIgCAHgDIAGArQgIADgNADQgOACgQAAQgdAAgVgLg");
	this.shape_86.setTransform(-10.6,20.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAFgRQAHgSALgOQALgPASgIQASgJAWAAQAeAAASAOQASANAIAVQAJAVAAAYIgBALIgBAJIh2AAQABAMAIAIQAHAIAMAEQAJAEANAAQAPAAANgCQANgCALgEIAHAnQgOAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgEAIQgDAJgBAIIBCAAQABgHgDgJQgDgJgHgGQgIgGgMgBQgLABgHAGg");
	this.shape_87.setTransform(-37,20.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgVQgMgWgBgeQAAgcANgXQANgWAVgMQAXgMAcAAQAdAAAVAMQAVAMALAWQANAVAAAdQAAAfgPAXQgOAVgWALQgWALgYAAQgaAAgXgMgAgUguQgIAIgEANQgEANAAAMQAAAQAEAMQAFAMAIAIQAJAHAKAAQASAAAJgPQAKgPAAgZQAAgNgEgMQgDgNgJgIQgIgIgNAAQgLAAgJAIg");
	this.shape_88.setTransform(-58.1,21);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AAdBcQgEgGgEgKIgJgZQgGgQgHgIQgKgIgOAAIgFAAIAABJIg6AAIAAi3IA6AAIAABKIAGAAIAthKIBDAAIhEBQQAQADAMALQALAOAIAVIAKAaIAMAcg");
	this.shape_89.setTransform(-78,21);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgbBVQgXgMgLgVQgMgVgBgdQAAgaANgWQAMgWAXgOQAYgNAhAAQALAAAMACQALACAKADIgJArQgFgCgIgCQgIgCgMAAQgXABgLAOQgNAOAAAWQAAAQAGAMQAHALAKAGQALAGAOAAQALAAAIgBQAIgCAHgDIAGArQgIADgNADQgOACgQAAQgdAAgVgLg");
	this.shape_90.setTransform(-97.6,20.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("Ag9BHQgZgZgBgsQAAgQAFgRQAHgSALgOQALgPASgIQASgJAWAAQAeAAASAOQASANAIAVQAJAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIAMAEQAJAEANAAQAPAAANgCQANgCALgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgEAIQgDAJgBAIIBCAAQABgHgDgJQgDgJgHgGQgIgGgNgBQgJABgIAGg");
	this.shape_91.setTransform(-116.3,20.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AAaBeIAAhGIgBAAQgJAFgMADQgKADgOAAQgeAAgQgQQgRgRAAggIAAg/IA6AAIAAA6QAAAQAGAHQAHAJANAAQAHgBAHgCQAHgCAEgEIAAhRIA6AAIAAC7g");
	this.shape_92.setTransform(-137.1,21.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AAjBcIAAg4IABgZIABgWIACgfIgCAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA2AAIAAA4IgBAmIgCAkIACAAIALgcIAKgXIAjhPIBGAAIAAC3g");
	this.shape_93.setTransform(-159,21);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_94.setTransform(-179.1,21);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("Ag4BZQgNgJgHgNQgHgNAAgPQAAgYANgPQAOgOAYgIQAZgHAfgBIAAgCQAAgFgDgFQgCgGgIgEQgHgDgMgBQgPABgNAEQgOADgJAGIgLglQAKgFASgGQATgFAXgBQAfAAASALQASALAHASQAIATAAAWIAAA+IAAAaIACATIgzAAIgEgSIgBAAQgJALgOAGQgMAFgQABQgTgBgOgHgAAAAIQgMACgHAHQgHAGAAALQAAALAGAFQAHAGAJAAQAJAAAIgGQAIgHAEgIIAAgFIABgFIAAgVQgQAAgKAEg");
	this.shape_95.setTransform(-198.3,21);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("ABCBcIgDhKIgBgSIgBgWIAAgXIgBAAIgGAUIgFARIgHAWIgZBLIgoAAIgWhKIgFgRIgGgWIgEgUIgCAAIgBAjIgBAcIgCBJIg1AAIANi3IBLAAIAUBGIAGAVIAFAXIAAAAIAGgXIAIgZIAVhCIBJAAIAMC3g");
	this.shape_96.setTransform(-221.5,21);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AgwBVQgWgLgNgVQgMgWAAgeQAAgcAMgXQAMgWAXgMQAWgMAcAAQAcAAAWAMQAVAMAMAWQAMAVgBAdQAAAfgOAXQgNAVgXALQgWALgYAAQgaAAgWgMgAgUguQgIAIgEANQgEANAAAMQAAAQAFAMQAEAMAIAIQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgMQgEgNgHgIQgJgIgNAAQgMAAgIAIg");
	this.shape_97.setTransform(-246.2,21);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_98.setTransform(-265.9,21);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AgVBfIgagBIgXgBIgQgBIAAi1QAHgCAMAAIAbgCIAdgBIAaABQAPACAPAEQAOAFAKAJQAKAKAAAQQAAAMgGAIQgFAJgJAFQgJAEgJACIAAABQAVAEAMAJQAMALABAUQgBATgLAMQgLALgSAGQgRAGgTABIgZACIgGAAgAgdA7IAIABIALAAQAKAAAHgCQAJgCAGgGQAFgFABgJQAAgMgLgGQgLgGgTAAIgQAAgAgUg6IgJABIAAAmIAPAAQAQAAAKgFQAKgFAAgKQAAgJgIgFQgIgFgPAAIgLAAg");
	this.shape_99.setTransform(-284.6,21);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("AA2B/IgUhBIhHAAIgTBBIg7AAIBOj9IBKAAIBPD9gAAZATIgPg1IgHgZIgEgZIgBAAIgGAZIgGAZIgPA1IA2AAg");
	this.shape_100.setTransform(-308.2,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-322.5,-9.3,692.5,116.4);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape.setTransform(128.6,89.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag3BDIgRgBIAAiFIAZAAIAAAuIAJgCIAMAAQAPAAALAFQAOAEAJAKQAIAIABARQgBAKgEAIQgEAIgGAFQgHAHgKADQgHADgKABIgSACIgUgBgAgvgEIAAA1IAIABIAJAAQAJAAAJgDQAJgCAEgHQAFgGABgLQgBgLgFgGQgEgEgIgDQgJgCgJAAIgKAAIgIABgAAxBCIAAiFIAYAAIAACFg");
	this.shape_1.setTransform(110.4,89.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_2.setTransform(93.4,89.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_3.setTransform(78.1,89.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgYAVgLQAVgNAlgBIAAgCQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABASIABAPIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgGgAABAAQgLACgJAGQgJAIAAAMQAAAMAHAGQAHAGAJAAQAMgBAIgGQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_4.setTransform(63.3,89.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAvBZIgBgrIhcAAIgBArIgTAAIgBg9IALgBQAJgNAFgOQADgLACgOQADgNAAgOIAAgkIBYAAIAABzIAOABIgCA9gAgNgvQAAAOgBANQgCAMgEAKIgEANIgHAMIA9AAIAAhgIgrAAg");
	this.shape_5.setTransform(49.2,91.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape_6.setTransform(27.2,89.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag3BDIgRgBIAAiFIAYAAIAAAuIAKgCIAMAAQAQAAALAFQANAEAIAKQAJAIAAARQAAAKgDAIQgFAIgGAFQgIAHgIADQgIADgKABIgTACIgTgBgAgwgEIAAA1IAJABIAJAAQAJAAAJgDQAJgCAEgHQAGgGgBgLQABgLgGgGQgEgEgIgDQgJgCgKAAIgJAAIgJABgAAxBCIAAiFIAYAAIAACFg");
	this.shape_7.setTransform(9,89.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape_8.setTransform(-9.3,89.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgLATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAIgNIAIgOIAnhEIAeAAIAACFg");
	this.shape_9.setTransform(-26,89.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IAMgBQAIgNAEgOQAFgLACgOQACgNAAgOIAAgkIBYAAIAABzIAOABIgCA9gAgNgvQAAAOgCANQgCAMgDAKIgFANIgGAMIA9AAIAAhgIgrAAg");
	this.shape_10.setTransform(-41.5,91.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghA9QgOgIgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAJAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALAAQALAAAKgIQAJgGAFgMQAFgLABgPQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_11.setTransform(-56.2,89.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAiBDIgVgeIgHgMIgGgMIAAAAIgGAMIgIAMIgTAeIgbAAIAvhDIguhCIAcAAIATAdIAHALIAGALIAAAAIAHgMIAGgKIAUgdIAaAAIguBBIAwBEg");
	this.shape_12.setTransform(-70.4,89.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgcBeQgMgIgIgNQgHgNgDgQQgDgQAAgRQAAgVAFgTQAFgTAKgOQAKgOAPgHQAOgIASgDIASgDIAPgEIgBAUIgNAEIgPACQgRADgKAGQgMAGgHALQgHAJgDAMQgEANgBALIAAAAQAHgPANgIQANgIANAAQARAAANAIQANAIAHAPQAHANABAVQgBAWgHAQQgHARgOAIQgOAJgUAAQgQAAgMgIgAgQgLQgJAFgEAGIgFANQgCAIABAIQAAAIABAKQADAJAFAJQAEAIAHAFQAHAFAIABQAOgBAIgHQAJgIADgMQAEgLgBgNQABgLgDgMQgEgJgJgIQgHgIgPgBQgJABgHAFg");
	this.shape_13.setTransform(-84.2,86.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghA9QgOgIgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAJAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALAAQALAAAKgIQAJgGAFgMQAFgLABgPQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_14.setTransform(-99.3,89.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbA9QgPgIgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALABQANAAAJgCQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_15.setTransform(-114,89.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_16.setTransform(-128.7,89.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgGgQgLgIQgJgHgQAAIgFAAIAAA7IgZAAIAAiFIAZAAIAAA7IAGAAIAwg7IAfAAIg6A9QAOACALAIQAMALAHASIAHAQIAIARg");
	this.shape_17.setTransform(-148,89.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_18.setTransform(-169.2,89.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag3BOIALgFQAFgCAGgGQAFgDAFgIQAGgGAFgKIABgDIABgCIgBgEIgBgDIgyh7IAbAAIAdBQIAFAOIACALIAAAAIAFgKIAEgQIAbhPIAaAAIglBhIgQAlQgHAQgGALQgHALgIAHQgKAIgIAEQgIAEgFAAg");
	this.shape_19.setTransform(-183.3,92.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_20.setTransform(-195.7,89.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgUA9QgPgIgJgQQgHgQgBgUQAAgTAJgRQAJgPAQgKQAQgJAVAAQALAAAJACQAJACAFADIgFATIgMgEQgHgCgKAAQgQAAgIAGQgLAIgFALQgGAMAAAMQAAAPAGALQAGAMALAGQAJAGANAAQAKAAAIgCIANgEIADASIgOAGQgKACgOAAQgTAAgPgJg");
	this.shape_21.setTransform(-207.6,89.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghA9QgOgIgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAJAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALAAQALAAAKgIQAJgGAFgMQAFgLABgPQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_22.setTransform(-221.6,89.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IAMgBQAIgNAEgOQAFgLACgOQABgNAAgOIAAgkIBZAAIAABzIAOABIgBA9gAgNgvQAAAOgCANQgCAMgDAKIgFANIgFAMIA8AAIAAhgIgrAAg");
	this.shape_23.setTransform(-237,91.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAiBfIAAg6IAAgTIABgRIAAgRIAAAAIgLAUIgMAUIgTAiIgVAlIgcAAIAAiGIAXAAIAAA3IAAAUIgBARIgBASIABAAIAIgPIAHgNIAIgOIAnhEIAdAAIAACGgAgThAQgIgFgEgHQgEgIAAgKIASAAQAAAJAFAGQAEAGAIAAQAIAAAEgGQAFgGABgJIARAAQAAARgKAJQgLAJgOAAQgMAAgHgFg");
	this.shape_24.setTransform(-257.8,86.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag3BDIgRgBIAAiFIAYAAIAAAuIAKgCIANAAQAPAAALAFQANAEAIAKQAJAIAAARQAAAKgDAIQgFAIgGAFQgIAHgIADQgIADgJABIgUACIgTgBgAgwgEIAAA1IAIABIAJAAQAKAAAJgDQAJgCAEgHQAGgGgBgLQABgLgGgGQgEgEgIgDQgJgCgKAAIgKAAIgIABgAAwBCIAAiFIAZAAIAACFg");
	this.shape_25.setTransform(-274.9,89.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_26.setTransform(-291.7,91.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_27.setTransform(-305.9,89.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUA9QgPgIgIgQQgJgQAAgUQAAgTAJgRQAJgPARgKQAPgJAVAAQALAAAJACQAJACAFADIgGATIgLgEQgHgCgKAAQgQAAgJAGQgKAIgGALQgFAMAAAMQAAAPAGALQAGAMALAGQAJAGANAAQALAAAHgCIAMgEIAFASIgQAGQgKACgOAAQgSAAgPgJg");
	this.shape_28.setTransform(-317.8,89.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag3BDIgRgBIAAiFIAYAAIAAAuIAKgCIAMAAQAQAAALAFQANAEAIAKQAJAIAAARQAAAKgDAIQgFAIgGAFQgIAHgIADQgIADgKABIgTACIgTgBgAgwgEIAAA1IAJABIAJAAQAJAAAJgDQAJgCAEgHQAGgGgBgLQABgLgGgGQgEgEgIgDQgJgCgKAAIgJAAIgJABgAAxBCIAAiFIAYAAIAACFg");
	this.shape_29.setTransform(-333.5,89.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVBeIgWAAIgQgCIAAi6IBoAAIAAAVIhPAAIAAAyIALgBIAMAAQAMAAAMADQANADAKAGQAKAHAHAKQAHALgBAQQAAAOgDAKQgFAKgHAHQgMAMgSAFQgOAFgRAAIgEgBgAgYgFIgKABIAABOIAJABIALAAQALAAAJgDQAKgEAIgHQAEgFADgHQADgHAAgJQAAgLgEgHQgEgIgHgFQgHgDgKgCQgHgCgKAAIgJAAg");
	this.shape_30.setTransform(-349.9,86.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgHAAQgGAAgFgFg");
	this.shape_31.setTransform(129.5,61.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgMAXIgKATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAHgNIAJgOIAohEIAdAAIAACFg");
	this.shape_32.setTransform(118.7,56.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgLATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAIgNIAIgOIAnhEIAeAAIAACFg");
	this.shape_33.setTransform(103.2,56.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AAqBZIgCgrIhlAAIAAiGIAYAAIAAByIA9AAIAAhyIAYAAIAABzIAOABIgBA9g");
	this.shape_34.setTransform(88.2,58.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgLQAVgOAlAAIAAgCQAAgFgCgIQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABARIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAGQgJAIAAANQAAAMAHAFQAHAGAJAAQAMgBAIgGQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_35.setTransform(72.9,56.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape_36.setTransform(57.6,56.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_37.setTransform(41.1,59.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAPAFALQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMAAgKAIg");
	this.shape_38.setTransform(25,56.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgKB+IAAg1QgTgBgQgIQgPgJgJgPQgIgPgBgVQABgUAJgPQAJgQAPgIQAPgIATgCIAAg8IAVAAIAAA8QAUABAPAJQAPAJAJAPQAJAPAAATQAAAWgJAPQgJAPgQAJQgPAIgTABIAAA1gAALA5QANgCAKgIQAKgHAFgMQAGgLAAgOQgBgUgLgOQgMgOgUgDgAghgnQgKAHgFAMQgFALAAANQAAAOAFALQAFALAKAHQAKAIANABIAAhoQgNACgKAHg");
	this.shape_39.setTransform(8.4,56.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_40.setTransform(-8.3,56.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgLATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAIgNIAIgOIAnhEIAeAAIAACFg");
	this.shape_41.setTransform(-23.6,56.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgQQAHgRAOgJQAPgKARAAQARAAALAGQALAGAGAKQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHAEgLACQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOAAQgKgBgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_42.setTransform(-44.4,56.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgMAXIgLATIgSAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAIgOIAGgNIAIgOIAohEIAdAAIAACFg");
	this.shape_43.setTransform(-59.1,56.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_44.setTransform(-74.6,56.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgQQAHgRAOgJQAPgKARAAQARAAALAGQALAGAGAKQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHAEgLACQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOAAQgKgBgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_45.setTransform(-89.2,56.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag8AxIAIgCIAGgEQAJgHACgOQADgPAAgUIAAg2IBdAAIAACFIgZAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgHACQgFACgKAAg");
	this.shape_46.setTransform(-104.3,56.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgPBFIgWgBIgQgBIAAiDIATgDIAYgBIARABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgLAEQgLAEgLACIgQABIgFAAgAgeAzIAKABIAKAAQAJAAAHgCQAKgBAGgGQAHgFAAgJQAAgKgGgFQgFgGgKgBQgJgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAFgFABgIQAAgKgJgFQgJgFgQAAIgLABg");
	this.shape_47.setTransform(-117,56.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgLQAVgOAlAAIAAgCQAAgFgCgIQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABARIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAGQgJAIAAANQAAAMAHAFQAHAGAJAAQAMgBAIgGQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_48.setTransform(-131.6,56.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_49.setTransform(-143.7,56.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUA9QgPgIgJgQQgHgPgBgVQABgTAIgRQAJgPAQgKQAQgJAVAAQALAAAJACQAJACAFADIgGATIgLgFQgHgBgKAAQgPgBgKAIQgKAGgFAMQgGALAAANQAAAQAGAKQAHAMAKAGQAJAGANAAQAKAAAIgCIANgEIADASIgPAGQgJACgOAAQgTAAgPgJg");
	this.shape_50.setTransform(-155.6,56.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IAMgBQAIgNAEgOQAFgLACgOQACgNAAgOIAAgkIBYAAIAABzIAOABIgCA9gAgNgvQAAAOgCANQgCAMgDAKIgFANIgGAMIA9AAIAAhgIgrAAg");
	this.shape_51.setTransform(-169.7,58.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgQQAHgRAOgJQAPgKARAAQARAAALAGQALAGAGAKQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHAEgLACQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOAAQgKgBgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_52.setTransform(-183.9,56.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_53.setTransform(-198.4,59.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_54.setTransform(-214.4,56.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgQQAHgRAOgJQAPgKARAAQARAAALAGQALAGAGAKQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHAEgLACQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOAAQgKgBgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_55.setTransform(-235,56.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAIAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAPAFALQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgNgIgHQgKgJgOAAQgMAAgKAIg");
	this.shape_56.setTransform(-249.6,56.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_57.setTransform(-265,56.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IAMgBQAIgNAEgOQAEgLADgOQABgNAAgOIAAgkIBZAAIAABzIAOABIgCA9gAgNgvQAAAOgCANQgCAMgDAKIgFANIgGAMIA9AAIAAhgIgrAAg");
	this.shape_58.setTransform(-280.3,58.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAhBEIAAg5IgSAAQgHAAgGACQgDACgEAEQgFAEgDAHQgEAFgDAIIgEAOIgDAFIgDAGIgbAAIAFgHIAEgJIAGgNIAFgPQAFgHAFgFIAHgFIAIgDIAAAAQgJgCgIgCQgHgDgGgIQgFgHAAgLQAAgKAFgHQAFgHAHgFQAJgFAMgCQAKgCANAAIAYABIAUACIAACEgAgCgwQgJABgFAGQgFAEgBAKQAAAIAHAGQAGAFAHADQAHACAIAAIALAAIAJAAIAAguIgJgBIgLAAQgJAAgGACg");
	this.shape_59.setTransform(-295.2,56.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag8AxIAIgCIAGgEQAJgHACgOQADgPAAgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgHACQgFACgKAAg");
	this.shape_60.setTransform(-309.4,56.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgoBDIAAiFIBRAAIAAATIg5AAIAAByg");
	this.shape_61.setTransform(-320.2,56.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgLQAVgOAlAAIAAgCQAAgFgCgIQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABARIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAGQgJAIAAANQAAAMAHAFQAHAGAJAAQAMgBAIgGQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_62.setTransform(-333.5,56.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAtBeIAAhZIhZAAIAABZIgZAAIAAi7IAZAAIAABPIBZAAIAAhPIAZAAIAAC7g");
	this.shape_63.setTransform(-349,54);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FF0000").s().p("AAaBeIAAhGIgBAAQgJAFgMAEQgKACgOAAQgeABgQgSQgRgQAAgfIAAg/IA6AAIAAA5QAAAPAGAJQAHAHANABQAHAAAHgDQAHgCAEgDIAAhRIA6AAIAAC6g");
	this.shape_64.setTransform(284.5,19.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF0000").s().p("Ag4BYQgNgHgHgOQgHgNAAgPQAAgYANgPQAOgOAYgIQAZgIAfAAIAAgBQAAgGgDgFQgCgGgIgEQgHgDgMgBQgPAAgNAFQgOAEgJAFIgLglQAKgFASgGQATgGAXABQAfgBASALQASALAHASQAIATAAAWIAAA/IAAAZIACAUIgzAAIgEgTIgBAAQgJALgOAGQgMAFgQAAQgTAAgOgIgAAAAHQgMADgHAGQgHAHAAALQAAALAGAFQAHAGAJAAQAJAAAIgGQAIgHAEgJIAAgEIABgFIAAgVQgQAAgKADg");
	this.shape_65.setTransform(263.5,19);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF0000").s().p("AA8B6IgCg8Ih0AAIgCA8IgsAAIgBhjIARgBQAGgJAFgKQAFgIADgKQAFgPACgPQABgPAAgQIAAgtICTAAIAACPIAUAAIgCBkgAgKg6QAAAMgDAMQgBANgDAMIgGAOIgHAPIA7AAIAAhjIgnAAg");
	this.shape_66.setTransform(242.6,22);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FF0000").s().p("Ag4BYQgNgHgHgOQgHgNAAgPQAAgYANgPQAOgOAYgIQAZgIAfAAIAAgBQAAgGgDgFQgCgGgIgEQgHgDgMgBQgPAAgNAFQgOAEgJAFIgLglQAKgFASgGQATgGAXABQAfgBASALQASALAHASQAIATAAAWIAAA/IAAAZIACAUIgzAAIgEgTIgBAAQgJALgOAGQgMAFgQAAQgTAAgOgIgAAAAHQgMADgHAGQgHAHAAALQAAALAGAFQAHAGAJAAQAJAAAIgGQAIgHAEgJIAAgEIABgFIAAgVQgQAAgKADg");
	this.shape_67.setTransform(221.1,19);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF0000").s().p("AgvBcQgTgGgPgIIANgkQAJAGAOADQAOAEAQAAQAQAAAJgGQAJgFAAgIQgBgMgLgEQgIgGgTAAIgcAAIAAghIAbAAQASAAAHgFQAIgFAAgIQABgJgJgEQgFgFgQgBQgMABgMADQgNADgKAHIgLgiQARgKATgFQAUgEATAAQAQAAARAEQARAFALALQAMALABATQgBAMgGAIQgGAJgJAEQgJAFgKADIAAABQAMABAMAEQAKAFAIAIQAGAKABAOQgBAQgIALQgJAMgOAGQgOAGgQADQgQADgMAAQgUAAgTgEg");
	this.shape_68.setTransform(202.1,19);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FF0000").s().p("AAfBcIgSghIgIgOIgFgOIgBAAIgHAOIgHAOIgRAhIhAAAIA/hcIg9hbIBAAAIASAfIAJAOIAFANIABAAIAHgOIAHgOIAQgeIA/AAIg9BYIA+Bfg");
	this.shape_69.setTransform(175.5,19);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FF0000").s().p("Ag+BdIgfAAIgegDIAAi2IA5AAIAAA2IANgBIARgBQAVAAARAHQATAGAMAOQAMANABAXQAAASgHAMQgHAMgMAIQgSAMgUAEQgUAEgTAAIgFAAgAg6AAIgIAAIAAA2IAIAAIAJAAQAKAAAJgCQAJgDAGgHQAFgGAAgLQAAgKgFgGQgFgGgJgDQgIgBgJAAIgMABgABCBbIAAi3IA6AAIAAC3g");
	this.shape_70.setTransform(150.8,19.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("AAdBcIAAhJIg5AAIAABJIg5AAIAAi3IA5AAIAABDIA5AAIAAhDIA5AAIAAC3g");
	this.shape_71.setTransform(125.1,19);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("ABSBcIgIgRIgIgZQgFgQgJgIQgJgIgLAAIgEAAIAABKIg2AAIAAhKIgFAAQgMAAgJAIQgIAIgGAQIgJAZIgIARIg4AAQAGgNAFgPIAMgeQAFgSALgNQALgLAPgDIhAhQIA/AAIArBKIAGAAIAAhKIA2AAIAABKIAFAAIAqhKIBAAAIhBBQQAQADALALQALANAGASIAKAeQAFAPAHANg");
	this.shape_72.setTransform(100.1,19);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgWQgMgVgBgeQAAgcANgWQANgXAVgMQAXgMAcABQAdgBAVAMQAVANALAVQANAWAAAbQAAAhgPAWQgOAVgWALQgWAKgYAAQgaAAgXgLgAgUguQgIAIgEANQgEANAAAMQAAAPAEANQAFANAIAHQAJAHAKAAQASAAAJgPQAKgPAAgZQAAgNgEgMQgDgNgJgIQgIgIgNgBQgLABgJAIg");
	this.shape_73.setTransform(75.1,19);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AhbAyQAHgBAFgDQAGgDADgDQAIgIACgOQACgPAAgVIAAhLICWAAIAAC3Ig6AAIAAiLIgmAAIAAAiQAAAggFAXQgGAYgPAMQgJAJgNAFQgNAEgTAAg");
	this.shape_74.setTransform(52.6,19.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("AgbBVQgXgMgLgVQgMgVgBgdQAAgaANgWQAMgWAXgOQAYgNAhAAQALAAAMACQALACAKADIgJArQgFgCgIgCQgIgCgMAAQgXABgLAOQgNAOAAAWQAAAQAGAMQAHALAKAGQALAGAOAAQALAAAIgBQAIgCAHgDIAGArQgIADgNADQgOACgQAAQgdAAgVgLg");
	this.shape_75.setTransform(35,18.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("Ag9BHQgZgZgBgsQAAgQAGgRQAFgSAMgOQALgPASgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEANAAQAPAAANgCQAMgCAMgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQAAgHgCgJQgDgJgIgGQgGgGgOgBQgKABgHAGg");
	this.shape_76.setTransform(8.6,18.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AAkBcIAAg4IAAgZIABgWIABgfIgBAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA3AAIAAA4IgBAmIgDAkIACAAIALgcIAKgXIAjhPIBGAAIAAC3g");
	this.shape_77.setTransform(-12.9,19);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AAdBcIAAhJIg5AAIAABJIg5AAIAAi3IA5AAIAABDIA5AAIAAhDIA5AAIAAC3g");
	this.shape_78.setTransform(-35.2,19);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAFgRQAHgSALgOQAMgPARgIQARgJAXAAQAeAAASAOQASANAIAVQAJAVAAAYIgBALIgBAJIh2AAQABAMAIAIQAHAIAMAEQAJAEAOAAQAOAAANgCQAMgCAMgEIAHAnQgOAGgRACQgRADgTAAQgtAAgagZgAgQgyQgIAGgEAIQgEAJAAAIIBCAAQAAgHgDgJQgCgJgIgGQgHgGgMgBQgKABgIAGg");
	this.shape_79.setTransform(-56.2,18.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("AAcBcIAAhJIg4AAIAABJIg6AAIAAi3IA6AAIAABDIA4AAIAAhDIA7AAIAAC3g");
	this.shape_80.setTransform(-77.3,19);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("AhbAyQAHgBAFgDQAGgDADgDQAIgIACgOQACgPAAgVIAAhLICWAAIAAC3Ig6AAIAAiLIgmAAIAAAiQAAAggFAXQgGAYgPAMQgJAJgNAFQgNAEgTAAg");
	this.shape_81.setTransform(-99.8,19.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AgwBVQgWgLgNgWQgMgVgBgeQAAgcANgWQAMgXAXgMQAWgMAcABQAdgBAVAMQAVANAMAVQALAWABAbQAAAhgPAWQgOAVgWALQgWAKgYAAQgbAAgVgLgAgUguQgIAIgEANQgEANAAAMQAAAPAEANQAFANAIAHQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgMQgEgNgHgIQgJgIgNgBQgLABgJAIg");
	this.shape_82.setTransform(-120,19);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("AAbBcIAAiLIg3AAIAACLIg5AAIAAi3ICrAAIAAC3g");
	this.shape_83.setTransform(-141.9,19);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("Ag+BdIgfAAIgegDIAAi2IA5AAIAAA2IANgBIARgBQAVAAARAHQATAGAMAOQAMANABAXQAAASgHAMQgHAMgMAIQgSAMgUAEQgUAEgTAAIgFAAgAg6AAIgIAAIAAA2IAIAAIAJAAQAKAAAJgCQAJgDAGgHQAFgGAAgLQAAgKgFgGQgFgGgJgDQgIgBgJAAIgMABgABCBbIAAi3IA6AAIAAC3g");
	this.shape_84.setTransform(-167.6,19.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AgVBfIgagBIgXgBIgQgBIAAi1QAHgCAMAAIAbgCIAdgBIAaABQAPACAPAEQAOAFAKAJQAKAKAAAQQAAAMgGAIQgFAJgJAFQgJAEgJACIAAABQAVAEAMAJQAMALABAUQgBATgLAMQgLALgSAGQgRAGgTABIgZACIgGAAgAgdA7IAIABIALAAQAKAAAHgCQAJgCAGgGQAFgFABgJQAAgMgLgGQgLgGgTAAIgQAAgAgUg6IgJABIAAAmIAPAAQAQAAAKgFQAKgFAAgKQAAgJgIgFQgIgFgPAAIgLAAg");
	this.shape_85.setTransform(-192.3,19);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAFgRQAHgSALgOQAMgPARgIQARgJAXAAQAeAAASAOQASANAIAVQAJAVAAAYIgBALIgBAJIh2AAQABAMAIAIQAHAIAMAEQAJAEAOAAQAOAAANgCQAMgCAMgEIAHAnQgOAGgRACQgRADgTAAQgtAAgagZgAgQgyQgIAGgEAIQgEAJAAAIIBCAAQAAgHgDgJQgCgJgHgGQgIgGgMgBQgKABgIAGg");
	this.shape_86.setTransform(-221,18.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgWQgMgVgBgeQAAgcANgWQANgXAVgMQAXgMAcABQAdgBAVAMQAVANALAVQAMAWABAbQAAAhgPAWQgOAVgWALQgWAKgYAAQgaAAgXgLgAgUguQgIAIgEANQgEANAAAMQAAAPAEANQAFANAIAHQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgMQgDgNgJgIQgIgIgNgBQgLABgJAIg");
	this.shape_87.setTransform(-242.1,19);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_88.setTransform(-261.8,19);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgbBVQgXgMgLgVQgMgVgBgdQAAgaANgWQAMgWAXgOQAYgNAhAAQALAAAMACQALACAKADIgJArQgFgCgIgCQgIgCgMAAQgXABgLAOQgNAOAAAWQAAAQAGAMQAHALAKAGQALAGAOAAQALAAAIgBQAIgCAHgDIAGArQgIADgNADQgOACgQAAQgdAAgVgLg");
	this.shape_89.setTransform(-278.9,18.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgwBVQgWgLgNgWQgMgVgBgeQAAgcANgWQAMgXAXgMQAWgMAcABQAdgBAVAMQAVANAMAVQALAWABAbQAAAhgPAWQgOAVgWALQgWAKgYAAQgbAAgVgLgAgUguQgIAIgEANQgEANAAAMQAAAPAEANQAFANAIAHQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgMQgEgNgHgIQgJgIgNgBQgLABgJAIg");
	this.shape_90.setTransform(-298.7,19);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AhdCEIAAjFIAAghIgCgdIAyAAIADAaIABAAQAKgPAPgHQAQgIATAAQAVAAARALQASAMAKAVQALAVAAAdQAAAigNAUQgMAWgTALQgUALgUAAQgQAAgMgGQgNgGgGgKIgBAAIAABdgAgWhOQgJAIgEANIgBAFIAAAGIAAAZIAAAGIABAGQAEAKAJAIQAIAHANAAQASAAAKgOQAKgMABgYQAAgPgFgMQgFgLgIgHQgJgHgLAAQgMAAgKAIg");
	this.shape_91.setTransform(-320.5,22.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AAtCAIAAjPIhZAAIAADPIg6AAIAAj/IDNAAIAAD/g");
	this.shape_92.setTransform(-345.2,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360.1,-11.3,720.2,116.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgMAXIgLATIgSAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAIgOIAGgNIAIgOIAohEIAdAAIAACFg");
	this.shape.setTransform(-167.1,109.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_1.setTransform(-182.6,109.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgQQAHgRAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALgBQANAAAJgCQAJgBAGgDIAFASQgHADgLACQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOABQgKAAgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_2.setTransform(-197.2,109.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape_3.setTransform(-213.2,109.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgQQAHgRAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALgBQANAAAJgCQAJgBAGgDIAFASQgHADgLACQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOABQgKAAgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_4.setTransform(-229.2,109.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_5.setTransform(-243.7,111.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAXgBIASABQAKACAKADQAJAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAKAGQAJAIABAPQgBANgHAIQgHAIgLAEQgMAEgMACIgPABIgFAAgAgeAzIAJABIALAAQAIAAAIgCQAJgBAHgGQAHgFAAgJQAAgKgGgFQgGgGgKgBQgIgCgLAAIgSAAgAgVgyIgJABIAAAoIATAAQAJAAAGgCQAJgCAGgFQAEgFABgIQAAgKgJgFQgJgFgRAAIgKABg");
	this.shape_6.setTransform(-258.7,109.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAJAJAPQAIAQAAAUQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALABQALgBAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgMgIgHQgKgJgOAAQgMAAgKAIg");
	this.shape_7.setTransform(-279.7,109.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgoBDIAAiFIBRAAIAAATIg5AAIAAByg");
	this.shape_8.setTransform(-292,109.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgVQABgWAJgPQAIgQAQgIQAPgJARAAQATAAAPAJQAOAJAJAPQAIAQAAAUQAAARgGANQgGAOgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEAMQgEAMAAALQAAAPAFAMQAFALAJAHQAJAGALABQALgBAKgGQAJgHAFgMQAFgMABgOQAAgLgEgMQgFgMgIgHQgKgJgOAAQgMAAgKAIg");
	this.shape_9.setTransform(-305.8,109.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_10.setTransform(-321.2,109.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AglBEIgRgCIAAiFIAZAAIAAAuIALgBIAMgBQANAAAPAEQANAEAKAKQAJAIABASQgBALgEAHQgDAIgHAFQgHAHgLADQgKAEgKABIgTABIgUAAgAgdgDIAAA0IAIABIAKAAQAKAAAHgCQAKgCAHgHQAGgGABgLQAAgMgIgGQgGgEgKgDQgIgDgKABIgJAAIgIACg");
	this.shape_11.setTransform(-335.3,109.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag8AxIAIgCIAGgEQAJgHACgOQADgPAAgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgHACQgFACgKAAg");
	this.shape_12.setTransform(-350.8,109.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgiBBQgJgGgFgJQgEgJAAgKQAAgZAVgLQAVgMAlAAIAAgDQAAgGgCgHQgCgHgGgFQgHgGgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAxIABARIABAPIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgFgAABAAQgLACgJAHQgJAGAAANQAAANAHAFQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_13.setTransform(-364.1,109.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgQQAHgRAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALgBQANAAAJgCQAJgBAGgDIAFASQgHADgLACQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOABQgKAAgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_14.setTransform(-377.5,109.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_15.setTransform(-392,111.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAGAGAKQAGAKADALQADAKgBAKIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALAAQANAAAJgDQAJgBAGgDIAFASQgHADgLACQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOAAQgKABgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_16.setTransform(20,76.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape_17.setTransform(4.1,76.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgMAXIgKATIgTAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAHgNIAIgOIAphEIAdAAIAACFg");
	this.shape_18.setTransform(-12.6,76.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABDBDIgHgOIgGgRQgGgQgKgGQgJgHgNAAIgEAAIAAA8IgWAAIAAg8IgEAAQgPAAgJAHQgJAGgGAQIgHARIgGAOIgYAAQAEgIAEgKIAHgTQAGgRAKgJQAJgHAQgCIg2g9IAcAAIAtA7IAFAAIAAg7IAWAAIAAA7IAEAAIAtg7IAcAAIg1A9QAPACAKAHQAKAJAFAQIAIAUIAHASg");
	this.shape_19.setTransform(-29.8,76.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAGAGAKQAGAKADALQADAKgBAKIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALAAQANAAAJgDQAJgBAGgDIAFASQgHADgLACQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOAAQgKABgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_20.setTransform(-46.1,76.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_21.setTransform(-60.7,79.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAXgBIASABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgKAEQgLAEgNACIgPABIgFAAgAgeAzIAKABIAKAAQAIAAAIgCQAJgBAHgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgRAAIgKABg");
	this.shape_22.setTransform(-81.6,76.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABDBDIgHgOIgGgRQgGgQgKgGQgJgHgNAAIgEAAIAAA8IgWAAIAAg8IgEAAQgPAAgJAHQgJAGgGAQIgHARIgGAOIgYAAQAEgIAEgKIAHgTQAGgRAKgJQAJgHAQgCIg2g9IAcAAIAtA7IAFAAIAAg7IAWAAIAAA7IAEAAIAtg7IAcAAIg1A9QAPACAKAHQAKAJAFAQIAIAUIAHASg");
	this.shape_23.setTransform(-104.4,76.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgZAVgLQAVgNAlABIAAgDQAAgGgCgHQgCgHgGgFQgHgGgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAxIABARIABAPIgWAAIgCgRIgBAAQgFAIgLAGQgKAFgNABQgOAAgJgGgAABAAQgLACgJAHQgJAHAAAMQAAAMAHAGQAHAGAJAAQAMgBAIgGQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_24.setTransform(-120.8,76.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAvBZIgBgrIhcAAIgBArIgTAAIgBg9IALgBQAJgNAFgOQADgLACgOQACgNABgOIAAgkIBYAAIAABzIAOABIgCA9gAgNgvQAAAOgBANQgCAMgEAKIgEANIgHAMIA9AAIAAhgIgrAAg");
	this.shape_25.setTransform(-134.9,78.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgVAJgPQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAPAAAVQAAARgGANQgGAOgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAHQAJAHALAAQALAAAKgHQAJgHAFgMQAFgLABgPQAAgLgEgMQgFgMgIgIQgKgHgOgBQgMABgKAHg");
	this.shape_26.setTransform(-149.7,76.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_27.setTransform(-164.9,79.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_28.setTransform(-180.9,76.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgZAVgLQAVgNAlABIAAgDQAAgGgCgHQgCgHgGgFQgHgGgMAAQgKAAgJACQgJADgHAFIgGgRQAJgFALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAxIABARIABAPIgWAAIgCgRIgBAAQgFAIgLAGQgKAFgNABQgOAAgJgGgAABAAQgLACgJAHQgJAHAAAMQAAAMAHAGQAHAGAJAAQAMgBAIgGQAJgHADgJIAAgEIABgEIAAgVIgGAAQgLAAgKAAg");
	this.shape_29.setTransform(-201.5,76.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag7AxIAHgCIAGgEQAJgHADgOQACgPAAgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagEATQgEATgNAJQgFAEgGACQgHACgJAAg");
	this.shape_30.setTransform(-215.9,76.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAGAGAKQAGAKADALQADAKgBAKIAAAGIAAADIheAAQABARAGAKQAHALAKAFQAKAFALAAQANAAAJgDQAJgBAGgDIAFASQgHADgLACQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgGQgIgIgOAAQgKABgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_31.setTransform(-229.1,76.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IAMgBQAIgNAEgOQAEgLADgOQABgNAAgOIAAgkIBZAAIAABzIAOABIgCA9gAgNgvQAAAOgCANQgCAMgDAKIgFANIgGAMIA9AAIAAhgIgrAAg");
	this.shape_32.setTransform(-243.9,78.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_33.setTransform(-256.7,76.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgVAJgPQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAPAAAVQAAARgGANQgGAOgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAHQAJAHALAAQALAAAKgHQAJgHAFgMQAFgLABgPQAAgLgEgMQgFgMgIgIQgKgHgOgBQgMABgKAHg");
	this.shape_34.setTransform(-270.1,76.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgkBDIgRgBIAAiFIAYAAIAAAtIALAAIALgBQAOAAAOAEQAOAEAKAKQAJAIAAASQAAALgDAHQgFAIgGAFQgIAGgJAEQgKADgLABIgTACIgTgBgAgdgEIAAA1IAIABIALAAQAJABAIgDQAJgCAHgHQAHgGgBgMQAAgLgGgHQgHgDgKgDQgIgDgJABIgJAAIgJABg");
	this.shape_35.setTransform(-290.2,76.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag8AxIAIgCIAGgEQAJgHADgOQADgPgBgUIAAg2IBdAAIAACFIgZAAIAAhyIgsAAIAAAjQAAAagFATQgEATgNAJQgFAEgHACQgGACgJAAg");
	this.shape_36.setTransform(-305.7,76.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgVAJgPQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAPAAAVQAAARgGANQgGAOgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAHQAJAHALAAQALAAAKgHQAJgHAFgMQAFgLABgPQAAgLgEgMQgFgMgIgIQgKgHgOgBQgMABgKAHg");
	this.shape_37.setTransform(-319.5,76.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_38.setTransform(-334.7,79.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_39.setTransform(-348.9,76.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_40.setTransform(-362.3,76.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgVAJgPQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAPAAAVQAAARgGANQgGAOgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAHQAJAHALAAQALAAAKgHQAJgHAFgMQAFgLABgPQAAgLgEgMQgFgMgIgIQgKgHgOgBQgMABgKAHg");
	this.shape_41.setTransform(-377.6,76.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAlBeIgJgWIgIgXQgFgMgFgKQgHgJgHgFQgLgGgQAAIgIAAIAABXIgYAAIAAi7IAYAAIAABUIAIAAIA/hUIAdAAIhGBWQAOADAKAEQAKAHAGAKQAHAKAEANIAKAcIAMAag");
	this.shape_42.setTransform(-391.9,73.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgHAAQgGAAgFgFg");
	this.shape_43.setTransform(208.9,49.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbA9QgPgIgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALABQANAAAJgCQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_44.setTransform(198.8,43.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgrAAIAAByg");
	this.shape_45.setTransform(186,43.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghA9QgOgIgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAJAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgLABgPQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_46.setTransform(172.6,43.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgcBeQgMgIgIgNQgHgNgDgQQgDgQAAgRQgBgVAGgTQAFgTALgOQAJgOAPgHQAOgIASgDIARgDIAQgEIgBAUIgNAEIgPACQgQADgKAGQgMAGgJALQgGAJgEAMQgDANgBALIABAAQAGgPANgIQANgIANAAQARAAAMAIQAOAIAHAPQAIANAAAVQAAAWgIAQQgHARgOAIQgOAJgUAAQgQAAgMgIgAgQgLQgJAFgEAGIgFANQgCAIAAAIQABAIACAKQACAJAEAJQAFAIAHAFQAIAFAIABQANgBAIgHQAJgIADgMQAEgLAAgNQAAgLgEgMQgDgJgJgIQgHgIgPgBQgJABgHAFg");
	this.shape_47.setTransform(157.6,40.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgZAVgKQAVgNAlgBIAAgCQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABARIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgGgAABAAQgLACgJAGQgJAIAAAMQAAAMAHAGQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_48.setTransform(143,43.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_49.setTransform(129.1,46.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAiBfIAAg6IAAgTIABgRIABgRIgBAAIgLAUIgMAUIgTAiIgVAlIgdAAIAAiGIAYAAIAAA3IAAAUIgBARIAAASIAAAAIAIgPIAHgNIAHgOIAohEIAdAAIAACGgAgThAQgIgFgEgHQgEgIAAgKIASAAQABAJAEAGQAFAGAHAAQAIAAAEgGQAFgGABgJIASAAQgCARgJAJQgLAJgOAAQgMAAgHgFg");
	this.shape_50.setTransform(107,41.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AghA9QgOgIgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAJAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgLABgPQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_51.setTransform(91.6,43.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_52.setTransform(76.3,43.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_53.setTransform(61,43.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgZAVgKQAVgNAlgBIAAgCQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABARIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgGgAABAAQgLACgJAGQgJAIAAAMQAAAMAHAGQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_54.setTransform(46.2,43.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ag7AxIAHgCIAGgEQAJgHACgOQAEgPgBgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgGACQgHACgJAAg");
	this.shape_55.setTransform(31.8,43.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgbA9QgPgIgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALABQANAAAJgCQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_56.setTransform(18.6,43.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IALgBQAJgNAFgOQADgLADgOQACgNAAgOIAAgkIBYAAIAABzIAOABIgCA9gAgNgvQAAAOgBANQgDAMgDAKIgEANIgHAMIA9AAIAAhgIgrAAg");
	this.shape_57.setTransform(3.9,46);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghA9QgOgIgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAJAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgLABgPQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_58.setTransform(-10.9,43.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_59.setTransform(-26.1,46.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_60.setTransform(-42.1,43.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AghA9QgOgIgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAJAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgLABgPQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_61.setTransform(-63.2,43.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAhBEIAAg5IgSAAQgHAAgGACQgEACgDAEQgFAEgDAGQgEAHgDAHIgEAOIgDAFIgDAGIgbAAIAFgHIAEgJIAGgOIAFgOQAFgHAFgGIAHgEIAIgDIAAAAQgJgCgIgCQgHgDgGgIQgFgHAAgKQAAgLAFgHQAFgIAHgEQAJgFAMgCQAKgCANAAIAYABIAUACIAACEgAgCgwQgJACgFAEQgFAGgBAJQAAAJAHAEQAGAGAHACQAHACAIABIALAAIAJAAIAAguIgJgBIgLgBQgJAAgGADg");
	this.shape_62.setTransform(-84.6,43.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgMAXIgLATIgSAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAHgOIAHgNIAIgOIAphEIAcAAIAACFg");
	this.shape_63.setTransform(-98.5,43.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAqBZIgCgrIhlAAIAAiGIAYAAIAAByIA9AAIAAhyIAYAAIAABzIAOABIgBA9g");
	this.shape_64.setTransform(-113.4,46);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgZAVgKQAVgNAlgBIAAgCQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABARIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgGgAABAAQgLACgJAGQgJAIAAAMQAAAMAHAGQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_65.setTransform(-128.8,43.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape_66.setTransform(-144.1,43.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_67.setTransform(-160.6,46.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AghA9QgOgIgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAJAJAQQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgLABgPQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_68.setTransform(-176.6,43.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgKB+IAAg1QgTgBgQgIQgPgJgJgPQgIgPgBgVQABgUAJgPQAJgQAPgIQAPgIATgCIAAg8IAVAAIAAA8QAUABAPAJQAPAJAJAPQAJAPAAATQAAAWgJAPQgJAPgQAJQgPAIgTABIAAA1gAALA5QANgCAKgIQAKgHAFgMQAGgLAAgOQgBgUgLgOQgMgOgUgDgAghgnQgKAHgFAMQgFALAAANQAAAOAFALQAFALAKAHQAKAIANABIAAhoQgNACgKAHg");
	this.shape_69.setTransform(-193.3,43.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_70.setTransform(-209.9,43.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgMAXIgLATIgSAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAIgOIAGgNIAIgOIAphEIAcAAIAACFg");
	this.shape_71.setTransform(-225.3,43.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAiBEIAAg5IgTAAQgIAAgFACQgEACgDAEQgGAEgDAGQgDAHgDAHIgEAOIgDAFIgDAGIgbAAIAFgHIAEgJIAGgOIAGgOQAEgHAFgGIAHgEIAIgDIAAAAQgIgCgJgCQgHgDgGgIQgFgHAAgKQAAgLAFgHQAFgIAHgEQAJgFAMgCQAJgCAOAAIAXABIAUACIAACEgAgCgwQgIACgGAEQgFAGgBAJQAAAJAHAEQAFAGAIACQAHACAHABIANAAIAJAAIAAguIgKgBIgLgBQgIAAgHADg");
	this.shape_72.setTransform(-246.8,43.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgZAVgKQAVgNAlgBIAAgCQAAgGgCgHQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABARIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAGgNAAQgOAAgJgGgAABAAQgLACgJAGQgJAIAAAMQAAAMAHAGQAHAGAJAAQAMAAAIgHQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_73.setTransform(-260,43.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_74.setTransform(-274.1,43.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAYgBIARABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgLAEQgKAEgMACIgQABIgFAAgAgeAzIAKABIAKAAQAJAAAHgCQAKgBAGgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgQAAIgLABg");
	this.shape_75.setTransform(-288.2,43.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgMAXIgKATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAHgNIAJgOIAohEIAdAAIAACFg");
	this.shape_76.setTransform(-303.4,43.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_77.setTransform(-316.9,43.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgGgQgLgIQgJgHgQAAIgFAAIAAA7IgZAAIAAiFIAZAAIAAA7IAGAAIAwg7IAfAAIg6A9QAOACALAIQAMALAHASIAHAQIAIARg");
	this.shape_78.setTransform(-328.4,43.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgbA9QgPgIgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALABQANAAAJgCQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_79.setTransform(-343.1,43.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgQBDIgRgBIAAhyIgnAAIAAgTIBAAAIAAAtIAJgBIANAAQAOAAAOAFQANADAJAKQAJAIAAASQAAALgDAHQgEAIgGAGQgMAIgPAEQgQADgPAAIgSgBgAgIgEIAAA1IAIABIAIAAQAKAAAKgDQAJgCAGgGQAGgGAAgLQgBgMgFgGQgHgFgJgCQgKgCgKAAIgHAAIgIABg");
	this.shape_80.setTransform(-358.5,43.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgcBeQgMgIgHgNQgIgNgDgQQgEgQAAgRQAAgVAGgTQAFgTALgOQAJgOAOgHQAPgIASgDIARgDIARgEIgBAUIgOAEIgPACQgQADgLAGQgMAGgIALQgGAJgEAMQgDANgBALIABAAQAGgPAOgIQAMgIANAAQARAAAMAIQANAIAIAPQAHANAAAVQAAAWgHAQQgHARgOAIQgOAJgUAAQgQAAgMgIgAgRgLQgHAFgFAGIgFANQgBAIgBAIQAAAIACAKQADAJAEAJQAFAIAHAFQAIAFAHABQAOgBAJgHQAHgIAEgMQAEgLgBgNQABgLgEgMQgDgJgIgIQgJgIgOgBQgJABgIAFg");
	this.shape_81.setTransform(-373.7,40.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgsBVQgTgMgLgWQgKgWgBgcQABgcALgWQALgXAUgLQATgNAYAAQAaABATAMQATALAKAWQALAVAAAdQgBAegLAWQgMAWgUAMQgTALgXAAQgZAAgTgMgAgghBQgOALgGASQgHASAAASQAAAVAHASQAHARAOALQANAKASAAQATAAANgKQAOgLAHgSQAHgSAAgUQAAgNgEgOQgDgNgIgMQgHgLgMgHQgLgGgPAAQgSAAgOALg");
	this.shape_82.setTransform(-390.8,41.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("Ag4BYQgNgHgHgNQgHgNAAgPQAAgYANgQQAOgOAYgHQAZgJAfABIAAgCQAAgGgDgGQgCgFgIgEQgHgEgMAAQgPAAgNAEQgOAFgJAFIgLglQAKgGASgFQATgGAXABQAfAAASALQASAKAHASQAIATAAAVIAABAIAAAZIACAUIgzAAIgEgTIgBAAQgJALgOAFQgMAHgQgBQgTABgOgJgAAAAHQgMADgHAGQgHAHAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgKIAAgEIABgFIAAgUQgQAAgKACg");
	this.shape_83.setTransform(309,6.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("AAdBcQgEgGgEgKIgJgZQgGgQgHgIQgKgIgNAAIgGAAIAABJIg6AAIAAi3IA6AAIAABKIAGAAIAthKIBEAAIhFBQQAQADALALQAMAOAHAVIALAaIAMAcg");
	this.shape_84.setTransform(290.5,6.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AAkBcIAAg4IAAgZIABgWIABgfIgBAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA3AAIAAA4IgBAmIgDAkIACAAIALgcIAKgXIAjhPIBGAAIAAC3g");
	this.shape_85.setTransform(267.9,6.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AAdBcIAAhJIg5AAIAABJIg5AAIAAi3IA5AAIAABDIA5AAIAAhDIA5AAIAAC3g");
	this.shape_86.setTransform(245.6,6.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AA8B6IgCg8IhzAAIgDA8IgrAAIgChjIASgBQAGgJAEgKQAFgIADgKQAEgPACgPQACgPABgQIAAgtICRAAIAACPIAVAAIgCBkgAgLg6QAAAMgBAMQgCANgEAMIgFAOIgHAPIA8AAIAAhjIgpAAg");
	this.shape_87.setTransform(223.2,9.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AhNBWQAFgBAHgDQAGgCAHgEQAGgEAHgGQAGgGAFgHIACgFIABgEIgBgEIgCgFIhEioIBAAAIAcBbIAEASIADARIACAAIADgSIAFgRIAXhbIA9AAIgrB6QgNAjgLAXQgLAYgKAPQgJAOgJAJQgPANgPAGQgPAFgLABg");
	this.shape_88.setTransform(202.3,10.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AheCEIAAjFIAAghIgBgdIAyAAIADAaIABAAQAKgPAQgHQAPgIATAAQAVAAARALQASAMAKAVQAKAVABAdQAAAigNAUQgMAWgTALQgUALgUAAQgPAAgNgGQgNgGgGgKIgBAAIAABdgAgWhOQgJAIgDANIgCAFIAAAGIAAAZIAAAGIACAGQACAKAKAIQAJAHAMAAQASAAAKgOQAKgMABgYQgBgPgEgMQgFgLgIgHQgJgHgLAAQgMAAgKAIg");
	this.shape_89.setTransform(181.4,9.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_90.setTransform(160.9,6.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgWQgMgVgBgeQAAgdANgVQANgWAVgMQAXgMAcAAQAdAAAVAMQAVAMALAVQANAWAAAbQAAAhgPAVQgOAXgWAKQgWAKgYAAQgaAAgXgLgAgUguQgIAIgEANQgEAMAAANQAAAQAEAMQAFANAIAHQAJAHAKAAQASAAAJgPQAKgPAAgZQAAgNgEgNQgDgMgJgIQgIgIgNgBQgLABgJAIg");
	this.shape_91.setTransform(141.1,6.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AgbBVQgXgMgLgVQgMgVgBgdQAAgaANgWQAMgWAXgOQAYgNAhAAQALAAAMACQALACAKADIgJArQgFgCgIgCQgIgCgMAAQgXABgLAOQgNAOAAAWQAAAQAGAMQAHALAKAGQALAGAOAAQALAAAIgBQAIgCAHgDIAGArQgIADgNADQgOACgQAAQgdAAgVgLg");
	this.shape_92.setTransform(121.8,6.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgWQgMgVgBgeQABgdAMgVQANgWAVgMQAXgMAcAAQAdAAAVAMQAVAMALAVQANAWAAAbQAAAhgPAVQgOAXgWAKQgWAKgYAAQgaAAgXgLgAgUguQgIAIgEANQgEAMAAANQAAAQAEAMQAFANAIAHQAJAHAKAAQASAAAJgPQAKgPAAgZQAAgNgEgNQgDgMgJgIQgIgIgNgBQgLABgJAIg");
	this.shape_93.setTransform(94.3,6.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("Ag/BcIAAi3IB/AAIAAAsIhGAAIAACLg");
	this.shape_94.setTransform(76.3,6.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("AgwBVQgWgLgNgWQgMgVAAgeQAAgdAMgVQAMgWAXgMQAWgMAcAAQAcAAAWAMQAVAMAMAVQAMAWgBAbQAAAhgOAVQgNAXgXAKQgWAKgYAAQgbAAgVgLgAgUguQgIAIgEANQgEAMAAANQAAAQAFAMQAEANAIAHQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgNQgEgMgHgIQgJgIgNgBQgLABgJAIg");
	this.shape_95.setTransform(56.6,6.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AA8B6IgCg8Ih0AAIgCA8IgsAAIgBhjIARgBQAGgJAFgKQAFgIADgKQAFgPACgPQABgPAAgQIAAgtICTAAIAACPIAUAAIgCBkgAgKg6QAAAMgDAMQgBANgDAMIgGAOIgHAPIA7AAIAAhjIgnAAg");
	this.shape_96.setTransform(34.2,9.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("ABSBcIgHgRIgJgZQgGgQgIgIQgJgIgLAAIgFAAIAABKIg2AAIAAhKIgEAAQgNAAgIAIQgIAIgGAQIgIAZIgIARIg5AAQAHgNAFgPIAKgeQAHgSAKgNQALgLAQgDIhBhQIBAAAIApBKIAGAAIAAhKIA2AAIAABKIAGAAIArhKIA/AAIhABQQAPADALALQALANAGASIALAeQAFAPAGANg");
	this.shape_97.setTransform(9.2,6.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("Ag4BYQgNgHgHgNQgHgNAAgPQAAgYANgQQAOgOAYgHQAZgJAfABIAAgCQAAgGgDgGQgCgFgIgEQgHgEgMAAQgPAAgNAEQgOAFgJAFIgLglQAKgGASgFQATgGAXABQAfAAASALQASAKAHASQAIATAAAVIAABAIAAAZIACAUIgzAAIgEgTIgBAAQgJALgOAFQgMAHgQgBQgTABgOgJgAAAAHQgMADgHAGQgHAHAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgKIAAgEIABgFIAAgUQgQAAgKACg");
	this.shape_98.setTransform(-15.3,6.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AAdBcQgEgGgEgKIgJgZQgGgQgHgIQgJgIgPAAIgFAAIAABJIg6AAIAAi3IA6AAIAABKIAGAAIAthKIBEAAIhFBQQARADAKALQAMAOAHAVIALAaIAMAcg");
	this.shape_99.setTransform(-33.7,6.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("Ag4BYQgNgHgHgNQgHgNAAgPQAAgYANgQQAOgOAYgHQAZgJAfABIAAgCQAAgGgDgGQgCgFgIgEQgHgEgMAAQgPAAgNAEQgOAFgJAFIgLglQAKgGASgFQATgGAXABQAfAAASALQASAKAHASQAIATAAAVIAABAIAAAZIACAUIgzAAIgEgTIgBAAQgJALgOAFQgMAHgQgBQgTABgOgJgAAAAHQgMADgHAGQgHAHAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgKIAAgEIABgFIAAgUQgQAAgKACg");
	this.shape_100.setTransform(-63.2,6.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_101.setTransform(-81.5,6.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgWQgMgVgBgeQAAgdANgVQANgWAVgMQAXgMAcAAQAdAAAVAMQAVAMALAVQAMAWABAbQAAAhgPAVQgOAXgWAKQgWAKgYAAQgaAAgXgLgAgUguQgIAIgEANQgEAMAAANQAAAQAEAMQAFANAIAHQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgNQgDgMgJgIQgIgIgNgBQgLABgJAIg");
	this.shape_102.setTransform(-101.2,6.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FF0000").s().p("Ag0B7QgVgQgLgcQgLgcAAgjQAAgjAKgcQAKgdAUgUQAOgOATgIQATgIAYgDIATgDIAUgDIAQgCIgDAtQgJADgMABIgXADQgUACgNAFQgOAHgJAKQgJAJgFANQgFANgCALIACAAQAJgPAQgJQAQgKASAAQAagBASAMQATALAKAVQAKATAAAcQAAAegMAWQgNAVgVAMQgWANgcAAQgegBgWgPgAgPgGQgHAFgEAFQgFAHgCAIQgDAJAAAMQAAANAEANQAEANAIAJQAIAJAMAAQANAAAIgIQAJgIADgMQAEgNAAgOQAAgNgEgMQgDgMgIgGQgJgJgNAAQgIAAgHAEg");
	this.shape_103.setTransform(-123.1,2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FF0000").s().p("Ag4BYQgNgHgHgNQgHgNAAgPQAAgYANgQQAOgOAYgHQAZgJAfABIAAgCQAAgGgDgGQgCgFgIgEQgHgEgMAAQgPAAgNAEQgOAFgJAFIgLglQAKgGASgFQATgGAXABQAfAAASALQASAKAHASQAIATAAAVIAABAIAAAZIACAUIgzAAIgEgTIgBAAQgJALgOAFQgMAHgQgBQgTABgOgJgAAAAHQgMADgHAGQgHAHAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgKIAAgEIABgFIAAgUQgQAAgKACg");
	this.shape_104.setTransform(-144.6,6.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FF0000").s().p("AheCEIAAjFIAAghIgBgdIAyAAIADAaIABAAQAKgPAQgHQAPgIATAAQAVAAARALQASAMAKAVQAKAVABAdQAAAigNAUQgMAWgTALQgUALgUAAQgPAAgNgGQgNgGgGgKIgBAAIAABdgAgWhOQgJAIgDANIgCAFIAAAGIAAAZIAAAGIACAGQACAKAKAIQAJAHAMAAQASAAAKgOQAKgMABgYQgBgPgEgMQgFgLgIgHQgJgHgLAAQgNAAgJAIg");
	this.shape_105.setTransform(-165.1,9.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FF0000").s().p("AAjBeIAAhGIgMAAQgJAAgHAEQgGADgDAGQgHAIgFALIgIAXIgDAHIgEAIIg+AAIAHgKIAFgLIAHgRIAIgTQAFgJAGgGIAKgJQAGgDAHgCIAAgBQgKgBgLgFQgLgDgIgKQgHgKAAgPQAAgRAIgLQAJgKAOgGQANgHASgCQAQgDAUAAQAVAAATACIAfACIAAC3gAgHgzQgKAFgBANQABAIAFAFQAFAGAHACQAHADAJAAIALAAIAIAAIAAgvIgJgBIgLAAQgOAAgIAGg");
	this.shape_106.setTransform(-196,6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FF0000").s().p("Ag4BYQgNgHgHgNQgHgNAAgPQAAgYANgQQAOgOAYgHQAZgJAfABIAAgCQAAgGgDgGQgCgFgIgEQgHgEgMAAQgPAAgNAEQgOAFgJAFIgLglQAKgGASgFQATgGAXABQAfAAASALQASAKAHASQAIATAAAVIAABAIAAAZIACAUIgzAAIgEgTIgBAAQgJALgOAFQgMAHgQgBQgTABgOgJgAAAAHQgMADgHAGQgHAHAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgKIAAgEIABgFIAAgUQgQAAgKACg");
	this.shape_107.setTransform(-216,6.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FF0000").s().p("AAcBcIAAhJIg4AAIAABJIg6AAIAAi3IA6AAIAABDIA4AAIAAhDIA7AAIAAC3g");
	this.shape_108.setTransform(-236.6,6.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FF0000").s().p("AAaBdIAAhFIgBAAQgJAFgMAEQgKACgOAAQgeAAgQgRQgRgQAAgfIAAg/IA6AAIAAA6QAAAOAGAJQAHAHANAAQAHAAAHgCQAHgCAEgDIAAhRIA6AAIAAC5g");
	this.shape_109.setTransform(-258.3,6.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FF0000").s().p("Ag4BYQgNgHgHgNQgHgNAAgPQAAgYANgQQAOgOAYgHQAZgJAfABIAAgCQAAgGgDgGQgCgFgIgEQgHgEgMAAQgPAAgNAEQgOAFgJAFIgLglQAKgGASgFQATgGAXABQAfAAASALQASAKAHASQAIATAAAVIAABAIAAAZIACAUIgzAAIgEgTIgBAAQgJALgOAFQgMAHgQgBQgTABgOgJgAAAAHQgMADgHAGQgHAHAAALQAAALAGAGQAHAFAJAAQAJAAAIgGQAIgGAEgKIAAgEIABgFIAAgUQgQAAgKACg");
	this.shape_110.setTransform(-279.3,6.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FF0000").s().p("AhdCEIAAjFIAAghIgCgdIAyAAIADAaIABAAQAKgPAQgHQAPgIATAAQAVAAARALQASAMAKAVQALAVAAAdQAAAigNAUQgMAWgTALQgUALgUAAQgPAAgNgGQgNgGgGgKIgBAAIAABdgAgWhOQgJAIgEANIgBAFIAAAGIAAAZIAAAGIABAGQAEAKAJAIQAIAHANAAQASAAAKgOQAKgMABgYQAAgPgFgMQgFgLgIgHQgJgHgLAAQgMAAgKAIg");
	this.shape_111.setTransform(-299.7,9.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FF0000").s().p("AgvBcQgSgGgQgIIAMgkQAKAFAPAEQAOAEAOAAQARAAAJgFQAIgHAAgIQAAgLgKgEQgJgGgTABIgcAAIAAgiIAbAAQATAAAGgFQAJgFgBgIQAAgJgIgEQgGgFgPgBQgNABgMADQgMADgKAGIgLghQAQgKAUgFQAUgEATAAQAQAAARAEQARAFAMALQALALAAATQAAAMgGAIQgGAJgJAFQgJAFgJACIAAABQALABALAEQAMAEAGAJQAIAKAAAOQAAAQgKAMQgIALgOAHQgOAFgQADQgQADgMAAQgUAAgTgEg");
	this.shape_112.setTransform(-320.9,6.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgWQgMgVAAgeQAAgdAMgVQAMgWAWgMQAXgMAcAAQAcAAAWAMQAVAMALAVQAMAWAAAbQAAAhgOAVQgOAXgWAKQgWAKgYAAQgaAAgXgLgAgUguQgIAIgEANQgEAMAAANQAAAQAFAMQAEANAIAHQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgNQgDgMgJgIQgIgIgNgBQgMABgIAIg");
	this.shape_113.setTransform(-341,6.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FF0000").s().p("AheCEIAAjFIAAghIgBgdIAzAAIACAaIAAAAQALgPAQgHQAPgIATAAQAUAAASALQARAMALAVQALAVAAAdQgBAigMAUQgMAWgTALQgTALgWAAQgOAAgNgGQgMgGgHgKIAAAAIAABdgAgWhOQgKAIgCANIgBAFIAAAGIAAAZIAAAGIABAGQACAKAJAIQAKAHANAAQARAAAKgOQAKgMAAgYQAAgPgEgMQgFgLgIgHQgJgHgLAAQgNAAgJAIg");
	this.shape_114.setTransform(-362.9,9.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FF0000").s().p("AAtCAIAAjPIhZAAIAADPIg6AAIAAj/IDNAAIAAD/g");
	this.shape_115.setTransform(-387.6,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-402.4,-24.1,805,149.1);


(lib.Символ5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABDBDIgHgOIgGgRQgGgQgKgGQgJgHgNAAIgEAAIAAA8IgWAAIAAg8IgEAAQgPAAgJAHQgJAGgGAQIgHARIgGAOIgYAAQAEgIAEgKIAHgTQAGgRAKgJQAJgHAQgCIg2g9IAcAAIAtA7IAFAAIAAg7IAWAAIAAA7IAEAAIAtg7IAcAAIg1A9QAPACAKAHQAKAJAFAQIAIAUIAHASg");
	this.shape.setTransform(37.3,81.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgiBAQgJgFgFgJQgEgJAAgKQAAgZAVgLQAVgNAlABIAAgDQAAgGgCgHQgCgHgGgFQgHgGgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEAMQAFANgBAOIAAAwIABASIABAPIgWAAIgCgRIgBAAQgFAIgLAGQgKAFgNABQgOAAgJgGgAABAAQgLACgJAGQgJAIAAAMQAAAMAHAGQAHAGAJAAQAMgBAIgGQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_1.setTransform(20.8,81.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAvBZIgBgrIhcAAIgBArIgTAAIgBg9IALgBQAJgNAFgOQADgLACgOQACgNAAgOIAAgkIBZAAIAABzIAOABIgBA9gAgNgvQAAAOgBANQgCAMgEAKIgEANIgGAMIA8AAIAAhgIgrAAg");
	this.shape_2.setTransform(6.7,83.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAQAAAUQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALAAQALAAAKgIQAJgGAFgMQAFgLABgPQAAgLgEgMQgFgLgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_3.setTransform(-8,81.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_4.setTransform(-23.2,84.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_5.setTransform(-39.2,81.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAOIAGgWIAEgXIAagCIgJAZIgJAWIgHASIgSACIAHgUg");
	this.shape_6.setTransform(-55.9,88.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAcBEIAAg3IAAAAQgHAFgKADQgKACgIAAQgNABgKgFQgKgFgGgJQgFgIgBgPIAAgxIAZAAIAAAtQAAAOAGAHQAGAGAPAAQAHAAAIgCQAIgDAFgCIAAhBIAZAAIAACHg");
	this.shape_7.setTransform(-65.8,81.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALABQANAAAJgCQAJgCAGgDIAFASQgHACgLADQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgHQgIgHgOAAQgKABgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_8.setTransform(-80,81.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_9.setTransform(-94.5,84.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_10.setTransform(-108.7,81.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUA+QgPgJgJgQQgIgQAAgUQABgTAIgRQAJgQARgJQAPgJAVAAQALAAAJACQAJACAFADIgGATIgLgEQgHgCgKgBQgPABgKAGQgKAIgGALQgFAMAAAMQAAAPAGALQAGAMALAGQAJAGANAAQAKAAAIgCIAMgEIAFASIgQAGQgKABgNABQgTAAgPgIg");
	this.shape_11.setTransform(-120.6,81.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAYgBIARABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgLAEQgKAEgMACIgQABIgFAAgAgeAzIAKABIAKAAQAJAAAHgCQAKgBAGgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgQAAIgLABg");
	this.shape_12.setTransform(-133.5,81.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAOIAGgWIAEgXIAagCIgJAZIgJAWIgHASIgSACIAHgUg");
	this.shape_13.setTransform(-150.1,88.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgPBFIgWgBIgQgBIAAiDIATgDIAYgBIARABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgLAEQgLAEgLACIgQABIgFAAgAgeAzIAKABIAKAAQAJAAAHgCQAKgBAGgGQAHgFAAgJQAAgKgGgFQgFgGgKgBQgJgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAFgFABgIQAAgKgJgFQgJgFgQAAIgLABg");
	this.shape_14.setTransform(-159.3,81.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAQAAAUQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALAAQALAAAKgIQAJgGAFgMQAFgLABgPQAAgLgEgMQgFgLgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_15.setTransform(-174.4,81.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAeBDIgGgMIgHgQQgHgQgKgIQgIgHgSAAIgEAAIAAA7IgZAAIAAiFIAZAAIAAA7IAFAAIAxg7IAeAAIg4A9QANACAMAIQAKALAIASIAHAQIAIARg");
	this.shape_16.setTransform(-187.8,81.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_17.setTransform(-203.1,81.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAQAAAUQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALAAQALAAAKgIQAJgGAFgMQAFgLABgPQAAgLgEgMQgFgLgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_18.setTransform(-218.4,81.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAXgBIASABQAKACAKADQAJAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAKAGQAJAIABAPQgBANgHAIQgHAIgLAEQgMAEgMACIgPABIgFAAgAgeAzIAJABIALAAQAIAAAIgCQAJgBAHgGQAHgFAAgJQAAgKgGgFQgGgGgKgBQgIgCgLAAIgSAAgAgVgyIgJABIAAAoIATAAQAJAAAGgCQAJgCAGgFQAFgFAAgIQAAgKgJgFQgJgFgRAAIgKABg");
	this.shape_19.setTransform(-232.6,81.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgdBDQgMgDgJgFIAGgRQAIAFAJACQAKADAJAAQAOAAAJgHQAJgGAAgKQAAgJgGgGQgGgFgIgCQgHgCgLAAIgMAAIAAgOIAMAAQAOgBAJgGQAJgGAAgKQAAgJgHgFQgHgFgKAAQgIAAgJACQgIADgIAEIgGgPQALgGALgDQALgDAMAAQAJAAAKADQALAEAHAIQAHAHAAAOQAAAIgEAGQgFAHgHAEQgHAEgHABIAAABQAKABAIACQAIAEAGAHQAEAIABAKQgBAOgIAJQgJAJgNAEQgNAEgNAAQgMAAgLgDg");
	this.shape_20.setTransform(-246.1,81.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbA+QgPgJgIgQQgIgPAAgVQAAgSAIgRQAHgQAOgKQAPgJARAAQARAAALAGQALAHAGAJQAGAKADALQADAKgBAKIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALABQANAAAJgCQAJgCAGgDIAFASQgHACgLADQgLADgRAAQgSAAgPgIgAAkgMQAAgIgDgJQgDgJgHgHQgIgHgOAAQgKABgIAGQgIAGgEAJQgEAJgBAJIBGAAIAAAAg");
	this.shape_21.setTransform(-265,81.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhSBDIAAiFIAYAAIAAByIAvAAIAAhyIAXAAIAAByIAvAAIAAhyIAYAAIAACFg");
	this.shape_22.setTransform(-282.4,81.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AglBDIgRgBIAAiFIAZAAIAAAtIALgBIAMAAQANAAAOAEQAOAEAKAKQAJAIABASQgBAKgEAIQgEAIgGAFQgHAGgLAEQgKADgKABIgTACIgUgBgAgdgEIAAA1IAIABIAKAAQAKABAHgDQAKgDAHgGQAGgHABgLQAAgLgIgHQgGgDgKgDQgIgDgKABIgJAAIgIABg");
	this.shape_23.setTransform(-299.2,81.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag7AxIAHgCIAGgEQAJgHACgOQAEgPgBgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgGACQgHACgJAAg");
	this.shape_24.setTransform(-314.7,81.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AghA+QgOgJgJgQQgIgPgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAQAAAUQAAARgGAOQgGANgKAJQgKAJgLAEQgMAEgLAAQgSAAgPgIgAgWgrQgJAIgEALQgEAMAAAMQAAAOAFAMQAFAMAJAGQAJAIALAAQALAAAKgIQAJgGAFgMQAFgLABgPQAAgLgEgMQgFgLgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_25.setTransform(-328.5,81.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgVBeIgWAAIgPgCIAAi6IBnAAIAAAVIhPAAIAAAyIALgBIAMAAQAMAAAMADQAMADALAGQAKAHAHAKQAGALAAAQQAAAOgDAKQgFAKgHAHQgMAMgSAFQgOAFgRAAIgEgBgAgYgFIgKABIAABOIAJABIALAAQALAAAJgDQALgEAHgHQAEgFADgHQADgHAAgJQAAgLgEgHQgEgIgHgFQgHgDgJgCQgIgCgKAAIgJAAg");
	this.shape_26.setTransform(-343.3,79);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLAMQgEgFAAgHQAAgGAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAGQAAAHgFAFQgEAFgHAAQgGAAgFgFg");
	this.shape_27.setTransform(295.7,54.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAYgBIARABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgKAEQgLAEgNACIgPABIgFAAgAgeAzIAKABIAKAAQAIAAAIgCQAJgBAHgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgQAAIgLABg");
	this.shape_28.setTransform(286.1,48.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAOAFAMQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_29.setTransform(271,48.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_30.setTransform(255.8,51.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgRQAHgQAOgJQAPgKARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_31.setTransform(240.3,48.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("ABDBDIgHgOIgGgRQgGgQgKgGQgJgHgNAAIgEAAIAAA8IgWAAIAAg8IgEAAQgPAAgJAHQgJAGgGAQIgHARIgGAOIgYAAQAEgIAEgKIAHgTQAGgRAKgJQAJgHAQgCIg2g9IAcAAIAtA7IAFAAIAAg7IAWAAIAAA7IAEAAIAtg7IAcAAIg1A9QAPACAKAHQAKAJAFAQIAIAUIAHASg");
	this.shape_32.setTransform(223.9,48.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAvBZIgBgrIhcAAIgBArIgTAAIgBg9IALgBQAJgNAEgOQAFgLABgOQACgNAAgOIAAgkIBZAAIAABzIAOABIgBA9gAgNgvQAAAOgBANQgDAMgDAKIgFANIgFAMIA8AAIAAhgIgrAAg");
	this.shape_33.setTransform(206.9,51);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgRQAHgQAOgJQAPgKARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_34.setTransform(192.7,48.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_35.setTransform(178,48.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgRQAHgQAOgJQAPgKARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_36.setTransform(163.4,48.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AA2BDIgDhAIgCgWIgBgZIAAAAIgEAMIgFAOIgHASIgaBCIgPAAIgYhCIgFgNIgFgQIgEgPIgBAAIgBAZIgBAWIgEBAIgWAAIAKiFIAeAAIAYBCIAFAMIAEANIADAMIAAAAIAEgNIAGgRIAGgOIAVg7IAfAAIAJCFg");
	this.shape_37.setTransform(147.4,48.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgiBBQgJgHgFgIQgEgJAAgKQAAgYAVgLQAVgNAlgBIAAgCQAAgFgCgIQgCgHgGgGQgHgFgMAAQgKAAgJADQgJACgHAFIgGgQQAJgGALgDQAMgDALAAQAUAAAMAIQALAIAEANQAFAMgBAOIAAAwIABARIABAQIgWAAIgCgRIgBAAQgFAIgLAGQgKAFgNABQgOAAgJgFgAABAAQgLACgJAGQgJAIAAANQAAALAHAGQAHAGAJAAQAMgBAIgGQAJgHADgJIAAgEIABgDIAAgWIgGAAQgLAAgKAAg");
	this.shape_38.setTransform(125.4,48.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IAMgBQAIgNAEgOQAFgLACgOQABgNAAgOIAAgkIBZAAIAABzIAOABIgBA9gAgNgvQAAAOgCANQgCAMgDAKIgFANIgFAMIA8AAIAAhgIgrAAg");
	this.shape_39.setTransform(111.3,51);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag3BOIALgFQAFgCAGgFQAFgFAFgHQAGgGAFgKIABgDIABgCIgBgDIgBgEIgyh7IAbAAIAdBQIAFAOIACALIAAAAIAFgKIAEgQIAbhPIAaAAIglBgIgQAmQgHAQgGALQgHALgIAHQgKAIgIAEQgIAEgFAAg");
	this.shape_40.setTransform(97.6,52);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_41.setTransform(83.4,51.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_42.setTransform(69.3,48.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgLATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAIgNIAIgOIAohEIAdAAIAACFg");
	this.shape_43.setTransform(49.8,48.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_44.setTransform(36.3,48.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgUA9QgPgIgJgQQgHgPgBgVQABgTAIgRQAJgPARgKQAPgJAVAAQALAAAJACQAJACAFADIgGATIgLgEQgHgCgKAAQgPAAgKAGQgKAIgFALQgGALAAANQAAAQAGAKQAHAMAKAGQAJAGANAAQAKAAAIgCIANgEIADASIgPAGQgJACgOAAQgTAAgPgJg");
	this.shape_45.setTransform(24.4,48.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAOAFAMQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_46.setTransform(10.4,48.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_47.setTransform(-5,48.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgkBDIgRgBIAAiFIAYAAIAAAtIALgBIAMAAQANAAAOAEQAPAEAJAKQAJAIABASQgBALgEAHQgEAIgGAFQgIAHgKADQgJAEgLAAIgTACIgTgBgAgdgEIAAA1IAIABIAKAAQAKAAAIgCQAJgDAHgGQAGgHAAgLQABgLgIgHQgGgDgKgDQgIgCgKAAIgJAAIgIABg");
	this.shape_48.setTransform(-19.1,49);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag7AxIAHgCIAGgEQAJgHADgOQACgPAAgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagEATQgEATgNAJQgFAEgGACQgHACgJAAg");
	this.shape_49.setTransform(-34.6,49);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgRQAHgQAOgJQAPgKARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_50.setTransform(-47.8,48.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgLBDIAAhyIgqAAIAAgTIBrAAIAAATIgqAAIAAByg");
	this.shape_51.setTransform(-60.5,48.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgLATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAIgNIAIgOIAnhEIAeAAIAACFg");
	this.shape_52.setTransform(-74,48.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAvBZIgBgrIhbAAIgCArIgTAAIgBg9IAMgBQAIgNAEgOQAEgLADgOQABgNAAgOIAAgkIBZAAIAABzIAOABIgCA9gAgNgvQAAAOgCANQgCAMgDAKIgFANIgGAMIA9AAIAAhgIgrAAg");
	this.shape_53.setTransform(-89.5,51);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAOAFAMQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_54.setTransform(-104.3,48.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgPBFIgWgBIgRgBIAAiDIAUgDIAXgBIASABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgKAEQgLAEgNACIgPABIgFAAgAgeAzIAKABIAKAAQAIAAAIgCQAJgBAHgGQAHgFAAgJQAAgKgGgFQgFgGgLgBQgIgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgRAAIgKABg");
	this.shape_55.setTransform(-118.5,48.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgdBDQgMgDgJgFIAGgRQAIAFAJACQAKADAJAAQAOAAAJgHQAJgGAAgKQAAgJgGgGQgGgFgIgCQgHgCgLAAIgMAAIAAgOIAMAAQAOgBAJgGQAJgGAAgKQAAgJgHgFQgHgFgKAAQgIAAgJACQgIADgIAEIgGgPQALgGALgDQALgDAMAAQAJAAAKADQALAEAHAIQAHAHAAAOQAAAIgEAGQgFAHgHAEQgHAEgHABIAAABQAKABAIACQAIAEAGAHQAEAIABAKQgBAOgIAJQgJAJgNAEQgNAEgNAAQgMAAgLgDg");
	this.shape_56.setTransform(-132,48.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgLATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAIgNIAIgOIAnhEIAeAAIAACFg");
	this.shape_57.setTransform(-145.7,48.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AghA9QgOgIgJgPQgIgQgBgWQABgUAJgQQAIgQAQgJQAPgIARAAQATAAAPAIQAOAKAJAPQAIAPAAAVQAAARgGAOQgGANgKAJQgKAIgLAFQgMAEgLAAQgSAAgPgJgAgWgrQgJAIgEAMQgEALAAAMQAAAOAFAMQAFAMAJAGQAJAIALgBQALABAKgIQAJgGAFgMQAFgMABgOQAAgLgEgLQgFgMgIgJQgKgHgOgBQgMAAgKAIg");
	this.shape_58.setTransform(-161.1,48.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("Ag+BgIAAiRIgBgXIAAgVIAVAAIACAYIAAAAQAIgNAMgHQAMgGAPAAQAQAAANAIQANAJAHAPQAIAQAAAUQAAAYgJAOQgIARgOAIQgPAIgQAAQgLAAgLgGQgLgFgGgKIgBAAIAABJgAgWhEQgLAIgDAOIgBAFIgBAFIAAAYIAAAFIABAFQAEALAKAHQAKAIANAAQALAAAJgGQAKgHAEgLQAFgKAAgQQAAgNgEgMQgFgLgJgHQgJgHgMAAQgMAAgKAIg");
	this.shape_59.setTransform(-176.3,51.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AAfBDIAAhyIg9AAIAAByIgZAAIAAiFIBvAAIAACFg");
	this.shape_60.setTransform(-192.3,48.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgRQAHgQAOgJQAPgKARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_61.setTransform(-212.8,48.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIAAgTIAAAAIgLAXIgLATIgUAhIgVAkIgcAAIAAiFIAXAAIAAA5IAAARIgBARIgBASIABAAIAHgOIAIgNIAIgOIAnhEIAeAAIAACFg");
	this.shape_62.setTransform(-227.6,48.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAgBDIAAg9Ig/AAIAAA9IgYAAIAAiFIAYAAIAAA2IA/AAIAAg2IAYAAIAACFg");
	this.shape_63.setTransform(-243,48.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgRQAHgQAOgJQAPgKARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_64.setTransform(-257.7,48.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAcBEIAAg3IAAAAQgHAFgKADQgKADgIAAQgNAAgKgFQgKgFgGgJQgFgIgBgPIAAgxIAZAAIAAAtQAAAOAGAIQAGAFAPABQAHAAAIgDQAIgDAFgCIAAhBIAZAAIAACHg");
	this.shape_65.setTransform(-272,49);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAiBDIAAg5IAAgRIABgSIABgTIgBAAIgMAXIgLATIgSAhIgWAkIgdAAIAAiFIAYAAIAAA5IAAARIgBARIAAASIAAAAIAIgOIAGgNIAIgOIAohEIAdAAIAACFg");
	this.shape_66.setTransform(-286.8,48.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ag8AxIAIgCIAGgEQAJgHACgOQADgPAAgUIAAg2IBcAAIAACFIgYAAIAAhyIgtAAIAAAjQAAAagDATQgFATgNAJQgFAEgHACQgFACgKAAg");
	this.shape_67.setTransform(-302.6,49);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgbA9QgPgIgIgPQgIgQAAgUQAAgTAIgRQAHgQAOgJQAPgKARAAQARAAALAGQALAHAGAJQAGAKADALQADALgBAJIAAAGIAAAEIheAAQABAQAGALQAHAKAKAFQAKAEALAAQANAAAJgBQAJgCAGgDIAFARQgHADgLADQgLADgRAAQgSAAgPgJgAAkgMQAAgIgDgJQgDgJgHgHQgIgGgOgBQgKAAgIAHQgIAGgEAJQgEAKgBAIIBGAAIAAAAg");
	this.shape_68.setTransform(-315.8,48.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgPBFIgWgBIgQgBIAAiDIATgDIAYgBIARABQAKACAJADQAKAEAGAGQAGAHAAALQAAANgIAIQgIAHgMADIAAAAQAPADAJAGQAKAIAAAPQAAANgHAIQgIAIgLAEQgLAEgLACIgQABIgFAAgAgeAzIAKABIAKAAQAJAAAHgCQAKgBAGgGQAHgFAAgJQAAgKgGgFQgFgGgKgBQgJgCgLAAIgSAAgAgVgyIgIABIAAAoIASAAQAJAAAHgCQAIgCAFgFQAGgFAAgIQAAgKgJgFQgJgFgQAAIgLABg");
	this.shape_69.setTransform(-329.4,48.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgzBfIgGgCIADgTIADABIAGAAQAKgBAHgFQAHgFAFgHQAFgIADgHQABgDAAgCIgCgGIg/h9IAcAAIAmBQIAGAPIAFAQIABAAIAFgPIAGgQIAehQIAaAAIgoBfIgLAaIgLAYIgLAVQgJALgLAHQgKAFgNAAIgIAAg");
	this.shape_70.setTransform(-344.1,46.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF0000").s().p("Ag4BYQgNgHgHgNQgHgOAAgOQAAgYANgQQAOgOAYgHQAZgJAfAAIAAgBQAAgGgDgFQgCgGgIgEQgHgDgMgBQgPAAgNAFQgOAEgJAFIgLglQAKgFASgGQATgGAXABQAfAAASALQASAKAHASQAIASAAAXIAAA/IAAAZIACAUIgzAAIgEgTIgBAAQgJALgOAGQgMAFgQAAQgTABgOgJgAAAAHQgMADgHAGQgHAHAAALQAAALAGAFQAHAGAJAAQAJAAAIgGQAIgHAEgJIAAgEIABgFIAAgVQgQABgKACg");
	this.shape_71.setTransform(337.4,11.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FF0000").s().p("AheCEIAAjFIAAghIgBgdIAzAAIACAaIABAAQAKgPAQgHQAPgIATAAQAUAAASALQARAMALAVQAKAVABAdQgBAigMAUQgMAWgTALQgTALgWAAQgOAAgNgGQgMgGgHgKIAAAAIAABdgAgWhOQgKAIgCANIgBAFIAAAGIAAAZIAAAGIABAGQACAKAJAIQAKAHAMAAQARAAALgOQAKgMABgYQgBgPgEgMQgEgLgJgHQgJgHgLAAQgNAAgJAIg");
	this.shape_72.setTransform(317,14.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FF0000").s().p("Ag9BHQgZgZgBgsQAAgQAGgRQAFgSAMgOQALgPASgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEANAAQAPAAANgCQAMgCAMgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQAAgHgCgJQgDgJgIgGQgGgGgOgBQgKABgHAGg");
	this.shape_73.setTransform(295.2,11.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FF0000").s().p("AAkCDIAAg5IAAgZIABgXIABgeIgBAAIgJAYIgKAYIgSAqIgTAtIhGAAIAAi4IA3AAIAAA3IgBAoIgDAjIACABIALgcIAKgZIAjhOIBGAAIAAC4gAgnhbQgNgOgBgZIAlAAQgBANAFAHQAFAHAHAAQAHAAAFgHQAFgHABgNIAkAAQgCAbgOANQgPAOgXAAQgagBgNgOg");
	this.shape_74.setTransform(273.8,7.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FF0000").s().p("Ag9BHQgZgZgBgsQAAgQAGgRQAFgSAMgOQALgPASgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEANAAQAPAAANgCQAMgCAMgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQAAgHgCgJQgDgJgIgGQgGgGgOgBQgKABgHAGg");
	this.shape_75.setTransform(252.5,11.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FF0000").s().p("AgVBfIgagBIgXgBIgQgBIAAi1QAHgCAMAAIAbgCIAdgBIAaABQAPACAPAEQAOAFAKAJQAKAKAAAQQAAAMgGAIQgFAJgJAFQgJAEgJACIAAABQAVAEAMAJQAMALABAUQgBATgLAMQgLALgSAGQgRAGgTABIgZACIgGAAgAgdA7IAIABIALAAQAKAAAHgCQAJgCAGgGQAFgFABgJQAAgMgLgGQgLgGgTAAIgQAAgAgUg6IgJABIAAAmIAPAAQAQAAAKgFQAKgFAAgKQAAgJgIgFQgIgFgPAAIgLAAg");
	this.shape_76.setTransform(232.4,11.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FF0000").s().p("AAdBcIAAhJIg5AAIAABJIg6AAIAAi3IA6AAIAABDIA5AAIAAhDIA5AAIAAC3g");
	this.shape_77.setTransform(210.4,11.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FF0000").s().p("AgwBVQgWgLgNgWQgMgVAAgeQAAgdAMgVQAMgXAXgLQAWgMAcAAQAcAAAWAMQAVAMAMAVQAMAWgBAbQAAAhgOAVQgNAXgXAKQgWAKgYAAQgbAAgVgLgAgUguQgIAIgEANQgEAMAAANQAAAQAFAMQAEANAIAHQAJAHAKAAQARAAAKgPQAKgPAAgZQAAgNgEgNQgEgMgHgIQgJgIgNgBQgLABgJAIg");
	this.shape_78.setTransform(188.4,11.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FF0000").s().p("AAdBcQgEgGgEgKIgJgZQgGgQgHgIQgKgIgNAAIgGAAIAABJIg6AAIAAi3IA6AAIAABKIAGAAIAthKIBEAAIhFBQQAQADALALQAMAOAHAVIALAaIAMAcg");
	this.shape_79.setTransform(168.6,11.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAFgRQAHgSALgOQAMgPARgIQARgJAXAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAIAIQAHAIAMAEQAJAEAOAAQAOAAANgCQAMgCAMgEIAHAnQgOAGgRACQgRADgTAAQgtAAgagZgAgQgyQgIAGgEAIQgEAJAAAIIBCAAQAAgHgDgJQgCgJgIgGQgGgGgNgBQgKABgIAGg");
	this.shape_80.setTransform(139.7,11.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FF0000").s().p("ABCBcIgDhKIAAgSIgBgWIgBgXIgBAAIgGAUIgFARIgHAWIgZBLIgoAAIgWhKIgFgRIgGgWIgEgUIgBAAIgBAjIgBAcIgEBJIg0AAIAOi3IBJAAIAUBGIAGAVIAGAXIAAAAIAHgXIAHgZIAVhCIBJAAIALC3g");
	this.shape_81.setTransform(115.9,11.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FF0000").s().p("AAjBcIAAg4IABgZIABgWIABgfIgBAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA2AAIAAA4IAAAmIgCAkIABAAIALgcIAKgXIAihPIBHAAIAAC3g");
	this.shape_82.setTransform(90.9,11.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FF0000").s().p("ABSBcIgHgRIgJgZQgGgQgIgIQgJgIgLAAIgFAAIAABKIg2AAIAAhKIgEAAQgMAAgJAIQgIAIgGAQIgIAZIgJARIg4AAQAHgNAEgPIALgeQAHgSAKgNQALgLAPgDIhAhQIBAAAIAqBKIAFAAIAAhKIA2AAIAABKIAGAAIArhKIA/AAIhABQQAPADALALQALANAGASIALAeQAFAPAGANg");
	this.shape_83.setTransform(65.6,11.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FF0000").s().p("Ag9BHQgZgZgBgsQAAgQAFgRQAHgSALgOQALgPASgIQASgJAWAAQAeAAASAOQASANAIAVQAJAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIAMAEQAJAEANAAQAPAAANgCQANgCALgEIAIAnQgPAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgDAIQgEAJgBAIIBCAAQABgHgDgJQgDgJgHgGQgIgGgNgBQgJABgIAGg");
	this.shape_84.setTransform(41.6,11.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FF0000").s().p("AheCEIAAjFIAAghIgBgdIAzAAIACAaIAAAAQALgPAPgHQAQgIATAAQAUAAASALQARAMALAVQALAVAAAdQAAAigNAUQgMAWgTALQgTALgWAAQgPAAgMgGQgMgGgHgKIAAAAIAABdgAgWhOQgKAIgCANIgBAFIAAAGIAAAZIAAAGIABAGQADAKAIAIQAKAHANAAQARAAAKgOQAKgMAAgYQAAgPgEgMQgFgLgIgHQgJgHgLAAQgNAAgJAIg");
	this.shape_85.setTransform(20.6,14.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FF0000").s().p("AgVBfIgagBIgXgBIgQgBIAAi1QAHgCAMAAIAbgCIAdgBIAaABQAPACAPAEQAOAFAKAJQAKAKAAAQQAAAMgGAIQgFAJgJAFQgJAEgJACIAAABQAVAEAMAJQAMALABAUQgBATgLAMQgLALgSAGQgRAGgTABIgZACIgGAAgAgdA7IAIABIALAAQAKAAAHgCQAJgCAGgGQAFgFABgJQAAgMgLgGQgLgGgTAAIgQAAgAgUg6IgJABIAAAmIAPAAQAQAAAKgFQAKgFAAgKQAAgJgIgFQgIgFgPAAIgLAAg");
	this.shape_86.setTransform(-8.8,11.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FF0000").s().p("AgVBfIgagBIgXgBIgQgBIAAi1QAHgCAMAAIAbgCIAdgBIAaABQAPACAPAEQAOAFAKAJQAKAKAAAQQAAAMgGAIQgFAJgJAFQgJAEgJACIAAABQAVAEAMAJQAMALABAUQgBATgLAMQgLALgSAGQgRAGgTABIgZACIgGAAgAgdA7IAIABIALAAQAKAAAHgCQAJgCAGgGQAFgFABgJQAAgMgLgGQgLgGgTAAIgQAAgAgUg6IgJABIAAAmIAPAAQAQAAAKgFQAKgFAAgKQAAgJgIgFQgIgFgPAAIgLAAg");
	this.shape_87.setTransform(-37.5,11.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FF0000").s().p("AgxBVQgVgLgNgWQgMgVgBgeQAAgdANgVQANgXAVgLQAXgMAcAAQAdAAAVAMQAVAMALAVQANAWAAAbQAAAhgPAVQgOAXgWAKQgWAKgYAAQgaAAgXgLgAgUguQgIAIgEANQgEAMAAANQAAAQAEAMQAFANAIAHQAJAHAKAAQASAAAJgPQAKgPAAgZQAAgNgEgNQgDgMgJgIQgIgIgNgBQgLABgJAIg");
	this.shape_88.setTransform(-59.5,11.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FF0000").s().p("AgbBcIAAiLIg2AAIAAgsICjAAIAAAsIg2AAIAACLg");
	this.shape_89.setTransform(-79.2,11.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FF0000").s().p("AAdBcIAAhJIg5AAIAABJIg5AAIAAi3IA5AAIAABDIA5AAIAAhDIA5AAIAAC3g");
	this.shape_90.setTransform(-98.9,11.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAGgRQAFgSAMgOQAMgPARgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEAOAAQAOAAANgCQAMgCAMgEIAHAnQgOAGgRACQgRADgTAAQgtAAgagZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQABgHgEgJQgCgJgIgGQgGgGgOgBQgJABgIAGg");
	this.shape_91.setTransform(-119.9,11.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FF0000").s().p("AAjBcIAAg4IABgZIABgWIACgfIgCAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA2AAIAAA4IgBAmIgCAkIACAAIALgcIAKgXIAjhPIBGAAIAAC3g");
	this.shape_92.setTransform(-141.3,11.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FF0000").s().p("AhbAyQAHgBAFgDQAGgDADgDQAIgIACgOQACgPAAgVIAAhLICWAAIAAC3Ig6AAIAAiLIgmAAIAAAiQAAAggFAXQgGAYgPAMQgJAJgNAFQgNAEgTAAg");
	this.shape_93.setTransform(-164.2,11.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FF0000").s().p("AAdBcQgEgGgEgKIgJgZQgGgQgHgIQgKgIgOAAIgFAAIAABJIg6AAIAAi3IA6AAIAABKIAGAAIAthKIBEAAIhFBQQAQADALALQAMAOAHAVIALAaIAMAcg");
	this.shape_94.setTransform(-182.3,11.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAGgRQAFgSAMgOQAMgPARgIQASgJAWAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAHAIQAIAIALAEQAKAEAOAAQAOAAANgCQAMgCAMgEIAHAnQgOAGgRACQgRADgTAAQgtAAgagZgAgQgyQgIAGgDAIQgFAJAAAIIBCAAQABgHgEgJQgCgJgIgGQgGgGgOgBQgJABgIAGg");
	this.shape_95.setTransform(-211.2,11.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FF0000").s().p("AAjBcIAAg4IABgZIABgWIACgfIgCAAIgJAZIgKAWIgSArIgTAsIhGAAIAAi3IA2AAIAAA4IgBAmIgCAkIACAAIALgcIAKgXIAjhPIBGAAIAAC3g");
	this.shape_96.setTransform(-232.7,11.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FF0000").s().p("AAcBcIAAhJIg4AAIAABJIg6AAIAAi3IA6AAIAABDIA4AAIAAhDIA7AAIAAC3g");
	this.shape_97.setTransform(-255,11.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAFgRQAHgSALgOQALgPASgIQASgJAWAAQAeAAASAOQASANAIAVQAJAVAAAYIgBALIgBAJIh2AAQABAMAIAIQAHAIAMAEQAJAEANAAQAPAAANgCQANgCALgEIAHAnQgOAGgRACQgRADgTAAQguAAgZgZgAgQgyQgIAGgEAIQgDAJgBAIIBCAAQABgHgDgJQgDgJgHgGQgIgGgMgBQgLABgHAGg");
	this.shape_98.setTransform(-276,11.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FF0000").s().p("AA8B6IgCg8IhzAAIgDA8IgrAAIgChjIASgBQAFgJAFgKQAFgIADgKQAEgPACgPQACgPABgQIAAgtICRAAIAACPIAVAAIgDBkgAgLg6QAAAMgBAMQgCANgEAMIgFAOIgHAPIA8AAIAAhjIgpAAg");
	this.shape_99.setTransform(-297.5,14.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FF0000").s().p("Ag9BHQgagZAAgsQAAgQAFgRQAHgSALgOQAMgPARgIQARgJAXAAQAeAAASAOQASANAJAVQAIAVAAAYIgBALIgBAJIh2AAQABAMAIAIQAHAIALAEQAKAEAOAAQAOAAANgCQAMgCAMgEIAHAnQgOAGgRACQgRADgTAAQgtAAgagZgAgQgyQgIAGgEAIQgEAJAAAIIBCAAQAAgHgDgJQgCgJgIgGQgGgGgNgBQgKABgIAGg");
	this.shape_100.setTransform(-318.4,11.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FF0000").s().p("AhECBIgZgDIAAj5IATgDIAbgCIAcgBQAZAAARADQASAEAPAIQANAHAIANQAJAMAAASQAAARgKAPQgLAOgWAJIAAAAQAXAGAOAOQAOAQABAZQgBASgHANQgHAOgMAKQgOALgYAGQgZAGgjAAIgmgBgAgkBWIAJABIAOAAQANAAAJgEQALgDAHgJQAGgIAAgNQABgNgIgIQgGgIgMgDQgKgEgPAAIgTAAgAgbhWIgJABIAAA8IATAAQAVAAAMgJQAMgIAAgPQAAgPgLgHQgLgIgRAAIgQABg");
	this.shape_101.setTransform(-339.4,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-353.4,-19.1,707,116.4);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.m2();
	this.instance.setTransform(-48,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48,-28,107,152);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVBQQgHgGAAgKQAAgLAHgFQAGgHAKAAQAIAAAGAHQAGAFAAALQAAAKgGAGQgGAGgIABQgLgBgFgGgAgVAeIAAgHQgBgKADgJQAEgIAJgKIAIgOQAEgGAAgGQAAgHgEgEQgDgEgJAAQgHAAgGABQgHACgFAEIgJgbQAIgEAKgDQALgDANAAQAOgBALAGQALAFAGAKQAEAIAAALQAAAJgDAIQgEAHgFAGIgJAMQgHAFgDAIQgDAHAAAJIAAAFg");
	this.shape.setTransform(470.7,39.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgfA4QgOgIgJgOQgIgOgBgTQABgSAIgPQAIgPAPgHQAPgIARAAQATAAAOAIQAOAIAIAOQAHAOABASQgBAVgJAOQgJAPgPAGQgPAHgPAAQgRAAgOgHgAgNgeQgFAGgDAIQgCAIAAAIQAAAKADAIQACAJAGAEQAGAFAGAAQALAAAHgKQAGgKAAgQQAAgIgDgIQgCgIgFgGQgGgFgIAAQgHAAgGAFg");
	this.shape_1.setTransform(457.7,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AATA8IAAgwIglAAIAAAwIgmAAIAAh3IAmAAIAAArIAlAAIAAgrIAmAAIAAB3g");
	this.shape_2.setTransform(443.2,42.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA2A8IgFgLIgFgQQgEgLgGgFQgFgFgIAAIgDAAIAAAwIgjAAIAAgwIgDAAQgIAAgFAFQgGAFgEALIgGAQIgEALIgmAAIAIgSIAHgUQAEgMAHgIQAHgHAKgCIgrg0IAqAAIAcAxIAEAAIAAgxIAjAAIAAAxIAEAAIAbgxIArAAIgrA0QAKACAHAHQAIAIADAMIAHAUIAIASg");
	this.shape_3.setTransform(426.8,42.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyA4IAHgCIAJgEIAJgHIAHgJIABgDIABgCIgBgDIgBgDIgthuIAqAAIATA8IACALIACAMIABAAIACgMIADgLIAPg8IApAAIgdBQQgIAWgIAQQgHAPgGAKQgGAJgGAGQgKAJgJAEQgKADgHABg");
	this.shape_4.setTransform(411,44.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AATA8IAAgwIglAAIAAAwIgmAAIAAh3IAmAAIAAArIAlAAIAAgrIAmAAIAAB3g");
	this.shape_5.setTransform(397.2,42.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AggA4QgOgIgIgOQgIgOAAgTQAAgSAIgPQAIgPAOgHQAQgIARAAQATAAAOAIQAOAIAHAOQAJAOgBASQAAAVgJAOQgJAPgOAGQgQAHgPAAQgRAAgPgHgAgMgeQgGAGgCAIQgDAIAAAIQAAAKADAIQACAJAGAEQAGAFAGAAQAMAAAFgKQAHgKAAgQQAAgIgCgIQgDgIgFgGQgGgFgIAAQgHAAgFAFg");
	this.shape_6.setTransform(377.7,42.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgpA8IAAh3IBTAAIAAAdIgtAAIAABag");
	this.shape_7.setTransform(365.8,42.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AggA4QgOgIgIgOQgIgOAAgTQAAgSAIgPQAIgPAOgHQAPgIASAAQATAAAOAIQAOAIAHAOQAJAOgBASQAAAVgJAOQgJAPgPAGQgOAHgQAAQgRAAgPgHgAgNgeQgFAGgCAIQgDAIAAAIQAAAKADAIQADAJAFAEQAGAFAGAAQALAAAHgKQAGgKAAgQQAAgIgDgIQgBgIgGgGQgFgFgJAAQgHAAgGAFg");
	this.shape_8.setTransform(352.8,42.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgSA8IAAhaIgjAAIAAgdIBrAAIAAAdIgkAAIAABag");
	this.shape_9.setTransform(339.9,42.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjA9QgKgCgHgEIAFgaIAMAEQAHABAKAAQANAAAHgGQAJgFADgMIgzAAIAAgWIAzAAQgBgKgIgHQgGgGgPAAQgJAAgHABQgHACgEACIgIgYQAJgFALgCQALgCAKAAQALAAAMAEQALADAJAIQAJAIAGAMQAFAMAAAPQAAATgJAOQgIAOgPAIQgQAIgUAAQgKAAgKgCg");
	this.shape_10.setTransform(327.8,42.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAXA9IAAguIgIAAQgGABgFACQgEADgBADQgEAFgEAHIgFAQIgCAFIgDAEIgoAAIAEgGIAEgHIAEgMIAGgMQADgFADgEIAHgHQAEgCAFgBIAAAAQgHgBgHgEQgHgBgFgHQgFgGgBgKQABgLAFgHQAGgHAJgEQAJgEAMgCQAJgCANAAIAbABIAUACIAAB3gAgEgiQgHAFAAAIQAAAFADAEQAEADAEACQAEABAGAAIAHAAIAGAAIAAgeIgGgBIgHAAQgKAAgEADg");
	this.shape_11.setTransform(309.3,42.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ag7AhIAIgDIAGgEQAFgFABgKQACgJgBgNIAAgyIBiAAIAAB4IgmAAIAAhbIgYAAIAAAXQAAAUgEAPQgDAQgKAIQgGAGgJADQgIADgNAAg");
	this.shape_12.setTransform(295.4,42.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAnBQIgBgnIhLAAIgCAnIgdAAIgBhBIAMgBIAHgMIAFgLQADgKABgKQACgKAAgLIAAgdIBfAAIAABdIAOABIgCBBgAgGglIgCAPIgDAQIgDAJIgFAKIAmAAIAAhBIgZAAg");
	this.shape_13.setTransform(281.8,44.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfA4QgPgIgIgOQgIgOgBgTQABgSAIgPQAIgPAPgHQAPgIARAAQATAAAOAIQAOAIAIAOQAHAOABASQgBAVgJAOQgJAPgOAGQgPAHgQAAQgRAAgOgHgAgMgeQgGAGgCAIQgDAIAAAIQAAAKADAIQADAJAFAEQAGAFAGAAQAMAAAFgKQAHgKAAgQQAAgIgCgIQgCgIgGgGQgFgFgJAAQgHAAgFAFg");
	this.shape_14.setTransform(262.3,42.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgSA8IAAhaIgjAAIAAgdIBrAAIAAAdIgjAAIAABag");
	this.shape_15.setTransform(249.4,42.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AARA9IAAgtIgBAAQgFADgJACQgGACgIAAQgUAAgLgLQgLgLAAgUIAAgpIAmAAIAAAmQAAAKAEAFQAEAFAIAAQAFAAAFgBIAHgEIAAg1IAmAAIAAB5g");
	this.shape_16.setTransform(236.5,42.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgkA9IgUgCIAAh3IAmAAIAAAkIAJgBIAJgBQAOAAANAEQANAEAJAJQAIAJAAAPQAAALgEAIQgFAJgHAFQgIAFgKADQgKADgLABIgSABIgUAAgAgNAAIgGAAIAAAjIAGAAIAHAAQAGABAFgCQAGgCAEgEQAFgEAAgIQAAgHgFgEQgEgEgHgBIgKAAIgHAAg");
	this.shape_17.setTransform(218,42.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSA8IAAhaIgjAAIAAgdIBrAAIAAAdIgkAAIAABag");
	this.shape_18.setTransform(205,42.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgkA6QgJgFgFgJQgEgIAAgKQAAgQAJgKQAIgJARgFQAQgFAUAAIAAgBIgCgHQgCgEgEgDQgFgCgIAAQgKAAgJADQgIACgGAEIgHgYQAGgEAMgEQAMgDAPAAQAUAAAMAHQALAHAGAMQAEAMAAAOIAAApIABARIABANIgiAAIgCgNIgBAAQgGAIgJAEQgHADgLAAQgMAAgJgFgAAAAFQgIACgEAEQgEAEgBAHQAAAIAFADQAEAEAGAAQAGAAAEgEQAGgEACgGIAAgDIAAgEIAAgNIgDAAQgIAAgFACg");
	this.shape_19.setTransform(192.3,42.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATA8IAAgwIglAAIAAAwIgmAAIAAh3IAmAAIAAArIAlAAIAAgrIAmAAIAAB3g");
	this.shape_20.setTransform(178.7,42.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgeA8QgNgDgKgGIAJgXQAGADAJADQAKACAKAAQAKAAAFgEQAGgDAAgGQAAgHgHgDQgFgEgMAAIgTAAIAAgVIASAAQAMAAAEgDQAFgEAAgFQAAgFgFgEQgDgDgLAAQgIAAgIACQgIADgHAEIgHgWQALgHANgDQANgDAMAAQAKAAAMADQALADAHAHQAIAHAAANQAAAIgEAFQgEAGgGADIgMAFIAAABQAIABAHABQAHADAFAGQAFAGAAAJQAAALgGAIQgGAHgJAEQgJAFgLABIgSACQgNAAgMgDg");
	this.shape_21.setTransform(165.2,42.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgyA4IAHgCIAJgEIAJgHIAHgJIABgDIABgCIgBgDIgBgDIgthuIAqAAIATA8IACALIACAMIABAAIACgMIADgLIAPg8IApAAIgdBQQgIAWgIAQQgHAPgGAKQgGAJgGAGQgKAJgJAEQgKADgHABg");
	this.shape_22.setTransform(152.7,44.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgoAuQgQgQAAgdQAAgKADgLQAEgMAHgJQAIgKALgFQAMgGAOAAQATAAANAJQAMAJAFAOQAGANgBAQIAAAHIgBAGIhMAAQAAAIAFAFQAFAFAIACQAFADAJAAIASgBIAQgEIAFAaQgJADgMACQgLACgMAAQgeAAgRgRgAgKghQgFAEgDAGIgCALIAqAAQAAgFgCgGQgBgFgFgEQgEgFgKAAQgFAAgFAEg");
	this.shape_23.setTransform(134.6,42.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSA8IAAhaIgjAAIAAgdIBrAAIAAAdIgkAAIAABag");
	this.shape_24.setTransform(122.2,42.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAXA8IAAglIAAgQIABgOIABgVIgBAAIgGASIgGANIgMAcIgMAdIguAAIAAh3IAkAAIAAAlIgBAYIgBAXIABAAIAHgSIAHgOIAWg0IAuAAIAAB3g");
	this.shape_25.setTransform(108.9,42.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRA8IAAhaIgkAAIAAgdIBrAAIAAAdIgjAAIAABag");
	this.shape_26.setTransform(95.7,42.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AggA4QgNgIgJgOQgIgOAAgTQAAgSAIgPQAIgPAOgHQAPgIASAAQATAAAOAIQAOAIAHAOQAJAOAAASQgBAVgJAOQgJAPgPAGQgPAHgPAAQgRAAgPgHgAgNgeQgFAGgDAIQgCAIAAAIQAAAKADAIQACAJAGAEQAGAFAGAAQALAAAHgKQAGgKAAgQQAAgIgDgIQgCgIgFgGQgGgFgIAAQgHAAgGAFg");
	this.shape_27.setTransform(82.6,42.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAcBUIgPgfIgIgQIgFgOIgBAAIgGAOIgHAQIgOAfIgrAAIAwhUIgvhTIAsAAIAPAfIAHAOIAEAOIAAAAIAGgOIAGgOIAOgfIArAAIgvBTIAyBUg");
	this.shape_28.setTransform(67.7,39.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgJALQgEgEAAgHQAAgFAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAFQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_29.setTransform(52.3,46.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYA3QgNgHgIgOQgHgOAAgTQAAgQAHgPQAHgOANgIQAMgJAQAAQAPAAAKAGQAJAFAGAIQAFAKADAJQACAJAAAJIAAAFIgBADIhTAAQABAPAFAJQAGAKAJAEQAKAEAJAAQALAAAIgBQAIgCAGgDIAEAQIgQAFQgKACgOABQgRgBgNgHgAAggKQAAgIgDgHQgCgJgHgGQgGgFgNAAQgJgBgHAGQgHAFgEAJQgEAIAAAIIA+AAIAAAAg");
	this.shape_30.setTransform(43.3,42.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhJA8IAAh3IAVAAIAABmIArAAIAAhmIATAAIAABmIArAAIAAhmIAVAAIAAB3g");
	this.shape_31.setTransform(27.8,42.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AghA8IgOgBIAAh2IAVAAIAAAoIAKgBIAKAAQAMAAANADQANAEAIAJQAIAHABAQQAAAJgEAHQgDAHgGAFQgHAFgJAEQgJACgKABIgQABIgSAAgAgSgEIgIABIAAAvIAIAAIAIABQAJAAAHgCQAIgCAHgGQAFgGAAgJQAAgLgGgFQgGgEgIgDQgIgBgIAAIgIAAg");
	this.shape_32.setTransform(12.8,42.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag1AsIAGgCQAEgBACgCQAJgGACgNQACgNgBgTIAAgwIBTAAIAAB3IgWAAIAAhmIgoAAIAAAfQAAAYgDARQgEARgMAIQgEADgGACQgGACgHAAg");
	this.shape_33.setTransform(-1,42.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgdA3QgNgHgHgOQgJgPAAgTQABgRAIgPQAHgOAOgHQANgJAQABQARgBANAJQANAHAHAOQAIAOgBASQAAAPgEAMQgGANgJAHQgJAIgKAEQgKADgKABQgQgBgNgHgAgTgmQgIAHgEAKQgEALAAAKQAAANAEALQAFAKAIAGQAJAGAJAAQAKAAAJgGQAHgGAFgKQAFgLAAgNQAAgJgEgLQgDgLgIgGQgIgIgNAAQgLABgIAGg");
	this.shape_34.setTransform(-13.4,42.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZBUQgLgHgGgMQgHgLgDgPQgDgOAAgPQAAgTAFgQQAEgRAKgNQAIgMANgIQANgGAQgDIAQgCIAOgEIgBASIgMADIgNACQgPACgJAGQgLAFgGALQgGAHgEAMQgDAKgBAKIABAAQAGgNAMgHQALgHALAAQAPAAAMAHQALAHAHANQAHALAAAUQAAATgHAPQgGAOgNAIQgNAIgRAAQgOAAgLgHgAgPgKQgHAEgEAGQgDAFgBAGQgCAHAAAIQAAAHACAIQACAJAEAHQAEAIAHAFQAGAEAHAAQAMAAAIgHQAHgGADgLQAEgLgBgLQABgKgDgKQgEgJgHgGQgHgIgNAAQgIABgHAEg");
	this.shape_35.setTransform(-26.9,39.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAeA8IAAgzIAAgQIABgPIABgRIgBAAIgKAUIgKASIgQAcIgUAhIgZAAIAAh3IAVAAIAAAzIAAAQIgBAOIgBAQIABABIAHgNIAGgMIAHgNIAjg8IAaAAIAAB3g");
	this.shape_36.setTransform(-45.7,42.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYA3QgNgHgIgOQgHgOAAgTQAAgQAHgPQAHgOANgIQAMgJAQAAQAPAAAKAGQAJAFAGAIQAFAKADAJQACAJAAAJIAAAFIgBADIhTAAQABAPAFAJQAGAKAJAEQAKAEAJAAQALAAAIgBQAIgCAGgDIAEAQIgQAFQgKACgOABQgRgBgNgHgAAggKQAAgIgDgHQgCgJgHgGQgGgFgNAAQgJgBgHAGQgHAFgEAJQgEAIAAAIIA+AAIAAAAg");
	this.shape_37.setTransform(-64.2,42.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgYA3QgNgHgIgOQgHgOAAgTQAAgQAHgPQAHgOANgIQAMgJAQAAQAPAAAKAGQAJAFAGAIQAFAKADAJQACAJAAAJIAAAFIgBADIhTAAQABAPAFAJQAGAKAJAEQAKAEAJAAQALAAAIgBQAIgCAGgDIAEAQIgQAFQgKACgOABQgRgBgNgHgAAggKQAAgIgDgHQgCgJgHgGQgGgFgNAAQgJgBgHAGQgHAFgEAJQgEAIAAAIIA+AAIAAAAg");
	this.shape_38.setTransform(-76.7,42.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("Ag3BWIAAiBIgBgVIAAgSIATAAIABAVIABAAQAGgMALgGQALgGANAAQAPAAALAIQAMAHAGAOQAHAOAAASQAAAWgIAMQgIAPgMAHQgNAHgOAAQgKAAgKgFQgKgEgFgKIgBAAIAABCgAgUg8QgJAHgDAMIgBAFIgBAEIAAAWIABAEIAAAEQADAKAJAHQAJAHAMAAQAKAAAIgGQAIgGAFgKQAEgIAAgPQAAgMgEgKQgEgKgIgGQgIgHgLAAQgLAAgJAIg");
	this.shape_39.setTransform(-89.7,44.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgJA8IAAhmIgmAAIAAgRIBfAAIAAARIglAAIAABmg");
	this.shape_40.setTransform(-102.4,42.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgSA3QgNgHgIgOQgHgOAAgTQAAgRAIgPQAIgOAOgIQAPgIASAAQAKAAAIABQAIACAEADIgFARQgEgCgGgCQgGgCgJAAQgOAAgIAHQgJAGgFAJQgFALAAALQAAAOAFAKQAGAKAJAFQAIAGAMAAQAJAAAHgCQAGgCAFgCIAEAQQgFADgJACQgJACgMABQgQgBgOgHg");
	this.shape_41.setTransform(-113,42.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgxA8IgPgBIAAh2IAWAAIAAAoIAIgBIAMAAQANAAAJAEQANAEAHAJQAIAHAAAPQAAAJgEAHQgDAHgGAFQgGAFgJAEQgGACgIABIgRABIgSAAgAgjgEIgIABIAAAvIAIAAIAIABQAIAAAIgDQAJgCACgGQAGgFAAgKQAAgKgFgFQgDgEgIgCQgIgDgIABIgJAAgAArA7IAAh2IAWAAIAAB2g");
	this.shape_42.setTransform(-127,42.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgZBUQgLgHgGgMQgHgLgDgPQgDgOAAgPQAAgTAFgQQAEgRAKgNQAIgMANgIQANgGAQgDIAQgCIAOgEIgBASIgMADIgNACQgPACgJAGQgLAFgGALQgGAHgEAMQgDAKgBAKIABAAQAGgNAMgHQALgHALAAQAPAAAMAHQALAHAHANQAHALAAAUQAAATgHAPQgGAOgNAIQgNAIgRAAQgOAAgLgHgAgPgKQgHAEgEAGQgDAFgBAGQgCAHAAAIQAAAHACAIQACAJAEAHQAEAIAHAFQAGAEAHAAQAMAAAIgHQAHgGADgLQAEgLgBgLQABgKgDgKQgEgJgHgGQgHgIgNAAQgIABgHAEg");
	this.shape_43.setTransform(-141.9,39.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgMAMIAFgTIAEgUIAWgDIgHAXIgJAUIgGAQIgPACIAGgTg");
	this.shape_44.setTransform(-156.7,48.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYA3QgNgHgIgOQgHgOAAgTQAAgQAHgPQAHgOANgIQAMgJAQAAQAPAAAKAGQAJAFAGAIQAFAKADAJQACAJAAAJIAAAFIgBADIhTAAQABAPAFAJQAGAKAJAEQAKAEAJAAQALAAAIgBQAIgCAGgDIAEAQIgQAFQgKACgOABQgRgBgNgHgAAggKQAAgIgDgHQgCgJgHgGQgGgFgNAAQgJgBgHAGQgHAFgEAJQgEAIAAAIIA+AAIAAAAg");
	this.shape_45.setTransform(-165.3,42.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AA+BPIgBgmIiNAAIAAh3IAWAAIAABmIAqAAIAAhmIAVAAIAABmIApAAIAAhmIAWAAIAABnIAMAAIgBA2g");
	this.shape_46.setTransform(-180.4,44.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgeA5QgJgFgEgHQgDgIAAgJQAAgWASgKQATgLAhAAIAAgCIgBgMQgDgGgFgGQgGgEgKAAQgJAAgIACQgJADgHAEIgEgPQAIgFAKgDQAKgCAKAAQASAAAKAHQAKAHAEAMQAEALAAAMIAAArIAAAPIABAOIgTAAIgCgPIAAAAQgGAHgKAFQgJAFgKABQgNAAgIgGgAAAAAQgJACgIAGQgHAGgBAMQAAAKAHAGQAFAEAJAAQAKAAAIgGQAHgGADgIIABgEIAAgDIAAgTQgNAAgMAAg");
	this.shape_47.setTransform(-196.6,42.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAZA9IAAgxQgGAEgKACQgIADgHAAQgMAAgIgEQgJgEgGgJQgEgGgBgOIAAgsIAWAAIAAApQAAAMAGAHQAFAFANAAQAHAAAGgDQAHgCAFgBIAAg7IAWAAIAAB5g");
	this.shape_48.setTransform(-208.9,42.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAeA8IAAgzIAAgQIABgPIABgRIgBAAIgKAUIgKASIgQAcIgUAhIgZAAIAAh3IAVAAIAAAzIAAAQIgBAOIgBAQIABABIAHgNIAGgMIAHgNIAjg8IAaAAIAAB3g");
	this.shape_49.setTransform(-227.5,42.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag1AsIAGgCQAEgBACgCQAJgGABgNQADgNgBgTIAAgwIBTAAIAAB3IgWAAIAAhmIgnAAIAAAfQgBAYgEARQgDARgMAIQgEADgGACQgGACgHAAg");
	this.shape_50.setTransform(-241.6,42.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgxA8IgPgBIAAh2IAWAAIAAAoIAJgBIAKAAQAOAAAKAEQAMAEAHAJQAHAHABAPQAAAJgEAHQgDAHgGAFQgGAFgJAEQgGACgIABIgSABIgRAAgAgjgEIgHABIAAAvIAHAAIAIABQAJAAAHgDQAIgCAEgGQAFgFAAgKQAAgKgFgFQgDgEgIgCQgIgDgIABIgJAAgAArA7IAAh2IAWAAIAAB2g");
	this.shape_51.setTransform(-255.4,42.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgZBUQgLgHgGgMQgHgLgDgPQgDgOAAgPQAAgTAFgQQAEgRAKgNQAIgMANgIQANgGAQgDIAQgCIAOgEIgBASIgMADIgNACQgPACgJAGQgLAFgGALQgGAHgEAMQgDAKgBAKIABAAQAGgNAMgHQALgHALAAQAPAAAMAHQALAHAHANQAHALAAAUQAAATgHAPQgGAOgNAIQgNAIgRAAQgOAAgLgHgAgPgKQgHAEgEAGQgDAFgBAGQgCAHAAAIQAAAHACAIQACAJAEAHQAEAIAHAFQAGAEAHAAQAMAAAIgHQAHgGADgLQAEgLgBgLQABgKgDgKQgEgJgHgGQgHgIgNAAQgIABgHAEg");
	this.shape_52.setTransform(-270.3,39.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAeA8IAAgzIAAgPIABgQIABgRIgBAAIgKAUIgKASIgQAdIgUAgIgZAAIAAh3IAVAAIAAAzIAAAPIgBAPIgBARIABAAIAHgOIAGgLIAHgMIAjg9IAaAAIAAB3g");
	this.shape_53.setTransform(471.7,12.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AA7A8IgFgMIgGgQQgFgOgJgGQgJgGgLAAIgEAAIAAA2IgTAAIAAg2IgEAAQgMAAgJAGQgIAGgGAOIgFAQIgGAMIgVAAQADgIADgJIAHgQQAFgQAJgIQAJgFANgCIgvg3IAZAAIAnA1IAFAAIAAg1IATAAIAAA1IAEAAIAog1IAaAAIgxA3QAPACAIAFQAIAJAGAOIAGASQADAJAFAHg");
	this.shape_54.setTransform(456.5,12.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeA6QgIgFgFgIQgEgIAAgJQAAgWATgKQATgLAhAAIAAgDIgBgLQgDgHgFgEQgGgFgLAAQgIAAgJACQgIACgHAEIgEgOQAIgEAKgDQAKgDAKAAQASAAAKAHQAKAHAEALQAEAMAAAMIAAArIAAAQIACANIgUAAIgCgPIgBAAQgFAHgJAFQgKAGgLAAQgMgBgIgEgAAAAAQgJACgIAGQgIAGAAALQABAMAFAEQAGAGAJAAQAKgBAIgGQAHgGACgIIABgEIAAgDIAAgTQgMAAgMAAg");
	this.shape_55.setTransform(441.8,12.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAqBPIgBgmIhSAAIgBAmIgRAAIgBg2IALgBQAHgLAFgNQADgJACgNQACgMAAgNIAAgfIBOAAIAABmIANABIgBA2gAgLgpQAAAMgCALQgBAMgDAIIgFALIgFALIA2AAIAAhVIgmAAg");
	this.shape_56.setTransform(429.1,14.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgdA3QgNgHgIgPQgHgOAAgSQAAgTAHgOQAIgOAOgIQANgHAPAAQASAAANAHQANAIAIAOQAGAOABASQgBAPgFANQgFAMgIAIQgJAHgLAEQgKAEgKAAQgQAAgNgIgAgTgmQgIAHgEAKQgEALAAAKQAAANAFAKQAEALAJAGQAIAGAJAAQAKAAAIgGQAIgGAGgLQAEgKAAgNQAAgKgDgKQgEgKgIgIQgIgGgNgBQgLAAgIAHg");
	this.shape_57.setTransform(415.9,12.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ag3BWIAAiBIgBgWIAAgSIATAAIABAWIABAAQAGgMALgGQALgGANAAQAPAAALAIQAMAIAGANQAHAOAAASQAAAWgIANQgIAOgMAHQgNAHgOAAQgKAAgKgFQgKgEgFgKIgBAAIAABCgAgUg8QgJAHgDAMIgBAFIgBAEIAAAVIABAFIAAAEQADAKAJAHQAJAHAMAAQAKAAAIgGQAIgGAFgKQAEgIAAgPQAAgMgEgKQgEgKgIgGQgIgGgLAAQgLAAgJAHg");
	this.shape_58.setTransform(402.3,14.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAbA8IAAhmIg2AAIAABmIgVAAIAAh3IBiAAIAAB3g");
	this.shape_59.setTransform(388,12.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgxA8IgPgBIAAh3IAWAAIAAAqIAJgBIALgBQANAAAKAEQALAEAIAJQAIAHAAAOQAAAKgEAHQgDAHgGAEQgGAHgJACQgGAEgIABIgRABIgSgBgAgjgEIgHABIAAAvIAHAAIAIABQAJAAAHgCQAIgDAEgFQAFgHAAgJQAAgJgFgGQgDgEgIgCQgIgDgIAAIgJABgAArA8IAAh4IAWAAIAAB4g");
	this.shape_60.setTransform(367.6,12.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZBUQgLgHgGgLQgHgMgDgOQgDgPAAgPQAAgTAFgRQAEgQAKgNQAIgMANgIQANgGAQgDIAQgCIAOgEIgBASIgMADIgNADQgPACgJAFQgLAGgGAJQgGAJgEALQgDAKgBALIABAAQAGgOAMgHQALgHALAAQAPAAAMAHQALAHAHANQAHALAAATQAAAVgHAOQgGAPgNAHQgNAIgRAAQgOAAgLgHgAgPgKQgHAFgEAFQgDAFgBAHQgCAGAAAHQAAAIACAIQACAJAEAIQAEAHAHAEQAGAGAHAAQAMgBAIgHQAHgHADgKQAEgKgBgMQABgKgDgKQgEgIgHgIQgHgGgNAAQgIgBgHAFg");
	this.shape_61.setTransform(352.7,9.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgdA3QgNgHgIgPQgHgOgBgSQABgTAHgOQAJgOANgIQAOgHAOAAQASAAANAHQANAIAIAOQAGAOAAASQAAAPgEANQgGAMgJAIQgJAHgKAEQgKAEgKAAQgQAAgNgIgAgTgmQgIAHgEAKQgEALAAAKQAAANAEAKQAGALAIAGQAHAGAKAAQAKAAAJgGQAIgGAEgLQAFgKAAgNQAAgKgDgKQgEgKgIgIQgIgGgNgBQgLAAgIAHg");
	this.shape_62.setTransform(339.2,12.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgJA8IAAhmIgmAAIAAgRIBfAAIAAARIglAAIAABmg");
	this.shape_63.setTransform(327.2,12.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAZA9IAAgxQgHAEgIACQgJADgHAAQgMAAgJgEQgIgEgFgJQgFgGgBgOIAAgsIAWAAIAAApQAAAMAFAHQAGAFANAAQAHAAAGgDQAHgCAFgBIAAg7IAWAAIAAB5g");
	this.shape_64.setTransform(315.5,12.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgMAMIAFgTIAEgUIAWgDIgHAXIgJAUIgGAQIgPACIAGgTg");
	this.shape_65.setTransform(301,18.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAaA8IgFgLIgGgOQgGgOgJgIQgHgGgQAAIgEAAIAAA1IgVAAIAAh3IAVAAIAAA1IAGAAIArg1IAbAAIgzA3QAMABAKAHQAKAKAGARIAGAOQADAHAFAIg");
	this.shape_66.setTransform(293.5,12.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgeA6QgIgFgEgIQgFgIAAgJQAAgWATgKQATgLAhAAIAAgDIgBgLQgCgHgHgEQgFgFgLAAQgIAAgJACQgIACgGAEIgFgOQAHgEALgDQAKgDAKAAQASAAAKAHQAKAHAEALQAEAMAAAMIAAArIAAAQIACANIgUAAIgCgPIgBAAQgFAHgJAFQgKAGgLAAQgMgBgIgEgAABAAQgKACgIAGQgIAGABALQAAAMAFAEQAGAGAJAAQAKgBAHgGQAIgGACgIIABgEIAAgDIAAgTQgMAAgLAAg");
	this.shape_67.setTransform(280.3,12.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgJA8IAAhmIgmAAIAAgRIBfAAIAAARIglAAIAABmg");
	this.shape_68.setTransform(269.4,12.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAwA8IgDg5IAAgTIgBgXIgBAAIgEALIgEAMIgGAQIgXA7IgOAAIgWg7IgEgMIgEgOIgEgNIgBAAIAAAXIgBATIgEA5IgUAAIAJh3IAbAAIAWA7IADALIAEALIADALIAAAAIADgMIAGgPIAFgMIAUg1IAbAAIAIB3g");
	this.shape_69.setTransform(251,12.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgdA3QgNgHgHgPQgJgOABgSQAAgTAIgOQAHgOAOgIQAOgHAOAAQASAAANAHQANAIAHAOQAIAOAAASQAAAPgGANQgFAMgIAIQgKAHgKAEQgLAEgJAAQgQAAgNgIgAgTgmQgIAHgEAKQgEALAAAKQAAANAFAKQAFALAHAGQAJAGAJAAQAKAAAIgGQAJgGAFgLQAEgKAAgNQAAgKgEgKQgDgKgIgIQgIgGgNgBQgLAAgIAHg");
	this.shape_70.setTransform(236.1,12.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgJA8IAAhmIgmAAIAAgRIBfAAIAAARIglAAIAABmg");
	this.shape_71.setTransform(224.1,12.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AAcA8IAAg3Ig3AAIAAA3IgWAAIAAh3IAWAAIAAAwIA3AAIAAgwIAWAAIAAB3g");
	this.shape_72.setTransform(212.1,12.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgYA3QgNgHgIgPQgHgNAAgSQAAgRAHgPQAHgOANgIQAMgJAQAAQAPAAAKAFQAJAGAGAJQAFAIADAKQACAKAAAIIAAAFIgBADIhTAAQABAPAFAKQAGAJAJAEQAKAFAJAAQALAAAIgDQAIgBAGgDIAEAQIgQAFQgKADgOAAQgRAAgNgIgAAggLQAAgGgDgIQgCgJgHgGQgGgFgNgBQgJAAgHAGQgHAGgEAHQgEAJAAAHIA+AAIAAAAg");
	this.shape_73.setTransform(199.1,12.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAeA8IAAgzIAAgPIABgQIABgRIgBAAIgKAUIgKASIgQAdIgUAgIgZAAIAAh3IAVAAIAAAzIAAAPIgBAPIgBARIABAAIAHgOIAGgLIAHgMIAjg9IAaAAIAAB3g");
	this.shape_74.setTransform(185.9,12.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ag1AsIAGgCQAEgBACgCQAJgGACgNQACgNgBgTIAAgwIBTAAIAAB3IgWAAIAAhmIgoAAIAAAfQAAAYgDARQgEARgMAIQgEADgGACQgGACgHAAg");
	this.shape_75.setTransform(171.8,12.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAbA8IgGgLIgGgOQgGgOgJgIQgIgGgPAAIgEAAIAAA1IgWAAIAAh3IAWAAIAAA1IAFAAIArg1IAbAAIgyA3QAMABAKAHQAJAKAHARIAGAOQADAHAFAIg");
	this.shape_76.setTransform(161.1,12.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgSA3QgNgHgIgPQgHgNAAgTQAAgRAIgOQAIgOAOgJQAPgJASABQAKAAAIACQAIACAEACIgFARQgEgDgGgBQgGgCgJAAQgOAAgIAGQgJAHgFAJQgFALAAALQAAAOAFAKQAGAKAJAFQAIAGAMAAQAJAAAHgCQAGgBAFgDIAEARQgFACgJACQgJADgMAAQgQAAgOgIg");
	this.shape_77.setTransform(143.5,12.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgeA6QgIgFgFgIQgDgIAAgJQAAgWASgKQATgLAhAAIAAgDIgBgLQgCgHgGgEQgGgFgKAAQgJAAgIACQgJACgHAEIgEgOQAHgEALgDQAKgDAKAAQASAAAKAHQAKAHAEALQAEAMAAAMIAAArIAAAQIABANIgTAAIgCgPIgBAAQgFAHgKAFQgJAGgKAAQgNgBgIgEgAAAAAQgJACgIAGQgIAGAAALQAAAMAHAEQAFAGAJAAQAKgBAIgGQAHgGADgIIABgEIAAgDIAAgTQgNAAgMAAg");
	this.shape_78.setTransform(126.1,12.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgkA8IAAh3IBJAAIAAASIgzAAIAABlg");
	this.shape_79.setTransform(116.2,12.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgdA3QgNgHgIgPQgHgOgBgSQABgTAHgOQAJgOANgIQAOgHAOAAQASAAANAHQANAIAIAOQAGAOAAASQAAAPgEANQgGAMgJAIQgJAHgKAEQgKAEgKAAQgQAAgNgIgAgTgmQgIAHgEAKQgEALAAAKQAAANAEAKQAGALAIAGQAHAGAKAAQAKAAAJgGQAIgGAEgLQAFgKAAgNQAAgKgDgKQgEgKgIgIQgIgGgNgBQgLAAgIAHg");
	this.shape_80.setTransform(103.9,12.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("Ag1AsIAGgCQAEgBACgCQAIgGACgNQADgNgBgTIAAgwIBTAAIAAB3IgWAAIAAhmIgnAAIAAAfQAAAYgFARQgDARgMAIQgEADgGACQgFACgJAAg");
	this.shape_81.setTransform(89.8,12.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgeA6QgIgFgFgIQgDgIAAgJQAAgWASgKQATgLAhAAIAAgDIgBgLQgCgHgGgEQgGgFgKAAQgJAAgIACQgJACgHAEIgEgOQAHgEALgDQAKgDAKAAQASAAAKAHQAKAHAEALQAEAMAAAMIAAArIAAAQIABANIgTAAIgCgPIgBAAQgFAHgKAFQgJAGgKAAQgNgBgIgEgAAAAAQgJACgIAGQgIAGAAALQAAAMAHAEQAFAGAJAAQAKgBAIgGQAHgGADgIIABgEIAAgDIAAgTQgNAAgMAAg");
	this.shape_82.setTransform(78,12.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAeA8IAAgzIAAgPIABgQIABgRIgBAAIgKAUIgKASIgQAdIgUAgIgZAAIAAh3IAVAAIAAAzIAAAPIgBAPIgBARIABAAIAHgOIAGgLIAHgMIAjg9IAaAAIAAB3g");
	this.shape_83.setTransform(65.3,12.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AAqBPIgBgmIhSAAIgBAmIgRAAIgBg2IALgBQAHgLAFgNQADgJACgNQACgMAAgNIAAgfIBOAAIAABmIANABIgBA2gAgLgpQAAAMgCALQgBAMgDAIIgFALIgFALIA2AAIAAhVIgmAAg");
	this.shape_84.setTransform(51.5,14.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgYA3QgNgHgIgPQgHgNAAgSQAAgRAHgPQAHgOANgIQAMgJAQAAQAPAAAKAFQAJAGAGAJQAFAIADAKQACAKAAAIIAAAFIgBADIhTAAQABAPAFAKQAGAJAJAEQAKAFAJAAQALAAAIgDQAIgBAGgDIAEAQIgQAFQgKADgOAAQgRAAgNgIgAAggLQAAgGgDgIQgCgJgHgGQgGgFgNgBQgJAAgHAGQgHAGgEAHQgEAJAAAHIA+AAIAAAAg");
	this.shape_85.setTransform(33.6,12.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAeA8IAAgzIAAgPIABgQIABgRIgBAAIgKAUIgKASIgQAdIgUAgIgZAAIAAh3IAVAAIAAAzIAAAPIgBAPIgBARIABAAIAHgOIAGgLIAHgMIAjg9IAaAAIAAB3g");
	this.shape_86.setTransform(20.4,12.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAcA8IAAg3Ig3AAIAAA3IgWAAIAAh3IAWAAIAAAwIA3AAIAAgwIAWAAIAAB3g");
	this.shape_87.setTransform(6.7,12.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgYA3QgNgHgIgPQgHgNAAgSQAAgRAHgPQAHgOANgIQAMgJAQAAQAPAAAKAFQAJAGAGAJQAFAIADAKQACAKAAAIIAAAFIgBADIhTAAQABAPAFAKQAGAJAJAEQAKAFAJAAQALAAAIgDQAIgBAGgDIAEAQIgQAFQgKADgOAAQgRAAgNgIgAAggLQAAgGgDgIQgCgJgHgGQgGgFgNgBQgJAAgHAGQgHAGgEAHQgEAJAAAHIA+AAIAAAAg");
	this.shape_88.setTransform(-6.4,12.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgdA3QgNgHgIgPQgHgOgBgSQABgTAHgOQAJgOANgIQAOgHAPAAQARAAANAHQANAIAIAOQAGAOAAASQAAAPgEANQgGAMgJAIQgIAHgLAEQgLAEgJAAQgQAAgNgIgAgTgmQgIAHgEAKQgEALAAAKQAAANAEAKQAGALAIAGQAHAGAKAAQAKAAAJgGQAHgGAFgLQAFgKAAgNQAAgKgEgKQgDgKgIgIQgIgGgNgBQgLAAgIAHg");
	this.shape_89.setTransform(-19.5,12.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("Ag3BWIAAiBIgBgWIAAgSIATAAIABAWIABAAQAGgMALgGQALgGANAAQAPAAALAIQAMAIAGANQAHAOAAASQAAAWgIANQgIAOgMAHQgNAHgOAAQgKAAgKgFQgKgEgFgKIgBAAIAABCgAgUg8QgJAHgDAMIgBAFIgBAEIAAAVIABAFIAAAEQADAKAJAHQAJAHAMAAQAKAAAIgGQAIgGAFgKQAEgIAAgPQAAgMgEgKQgEgKgIgGQgIgGgLAAQgLAAgJAHg");
	this.shape_90.setTransform(-33.1,14.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgJA8IAAhmIgmAAIAAgRIBfAAIAAARIglAAIAABmg");
	this.shape_91.setTransform(-45.8,12.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgSA3QgNgHgIgPQgHgNAAgTQAAgRAIgOQAIgOAOgJQAPgJASABQAKAAAIACQAIACAEACIgFARQgEgDgGgBQgGgCgJAAQgOAAgIAGQgJAHgFAJQgFALAAALQAAAOAFAKQAGAKAJAFQAIAGAMAAQAJAAAHgCQAGgBAFgDIAEARQgFACgJACQgJADgMAAQgQAAgOgIg");
	this.shape_92.setTransform(-56.4,12.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgdA3QgNgHgIgPQgHgOgBgSQABgTAHgOQAJgOANgIQAOgHAPAAQARAAANAHQANAIAIAOQAGAOAAASQAAAPgEANQgGAMgJAIQgIAHgLAEQgLAEgJAAQgQAAgNgIgAgTgmQgIAHgEAKQgEALAAAKQAAANAEAKQAGALAIAGQAHAGAKAAQAKAAAJgGQAHgGAFgLQAFgKAAgNQAAgKgEgKQgDgKgIgIQgIgGgNgBQgLAAgIAHg");
	this.shape_93.setTransform(-69,12.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAbA8IAAhmIg2AAIAABmIgVAAIAAh3IBiAAIAAB3g");
	this.shape_94.setTransform(-82.7,12.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Ah0ALIAAgVIDpAAIAAAVg");
	this.shape_95.setTransform(-107,11.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgkA6QgJgFgEgJQgGgIAAgKQABgQAIgKQAKgJAPgFQARgFATAAIAAgBIgBgHQgCgEgFgDQgEgCgIAAQgJAAgJADQgKACgGAEIgHgYQAHgEAMgEQAMgDAPAAQAUAAAMAHQALAHAGAMQAEAMAAAOIAAApIABARIACANIgjAAIgCgNIgBAAQgGAIgJAEQgHADgLAAQgMAAgJgFgAAAAFQgHACgFAEQgEAEgBAHQABAIAEADQADAEAHAAQAFAAAFgEQAGgEACgGIAAgDIAAgEIAAgNIgDAAQgIAAgFACg");
	this.shape_96.setTransform(-131.4,12.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AArA9IgCgyIAAgLIgBgOIAAgPIgBAAIgEANIgDALIgFAOIgQAyIgaAAIgOgxIgDgLIgEgPIgDgMIgBAAIgBAXIAAARIgCAxIgiAAIAIh5IAxAAIANAuIAEAOIADAPIAAAAIAEgPIAFgQIAOgsIAwAAIAHB5g");
	this.shape_97.setTransform(-146.7,12.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgnAuQgSgQABgdQgBgKAEgLQADgMAIgJQAIgKAMgFQALgGAOAAQAUAAALAJQAMAJAGAOQAGANAAAQIgBAHIAAAGIhNAAQAAAIAFAFQAFAFAIACQAFADAJAAIASgBIAQgEIAFAaQgJADgMACQgLACgNAAQgdAAgQgRgAgKghQgFAEgDAGIgCALIAqAAQAAgFgBgGQgCgFgFgEQgEgFgKAAQgFAAgFAEg");
	this.shape_98.setTransform(-162.2,12.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgSA9IAAhcIgjAAIAAgdIBrAAIAAAdIgjAAIAABcg");
	this.shape_99.setTransform(-174.6,12.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgSA4QgOgIgIgOQgIgOAAgTQAAgQAIgPQAIgPAQgIQAPgJAVAAQAIAAAHABQAIABAGADIgGAcIgJgDIgMgBQgPAAgHAKQgJAJAAAOQAAAKAFAIQAEAIAGAEQAHADAJAAIANgBIAJgDIAFAcQgFADgJABQgJACgLAAQgSAAgPgHg");
	this.shape_100.setTransform(-186,12.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAXA9IAAglIAAgRIABgOIABgUIgBAAIgGARIgGANIgMAcIgMAeIguAAIAAh5IAkAAIAAAmIgBAYIgBAYIABAAIAHgSIAHgPIAWg1IAuAAIAAB5g");
	this.shape_101.setTransform(-199.2,12.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgSA4QgOgIgIgOQgIgOAAgTQAAgQAIgPQAIgPAQgIQAPgJAVAAQAIAAAHABQAIABAGADIgGAcIgJgDIgMgBQgPAAgHAKQgJAJAAAOQAAAKAFAIQAEAIAGAEQAHADAJAAIANgBIAJgDIAFAcQgFADgJABQgJACgLAAQgSAAgPgHg");
	this.shape_102.setTransform(-212.2,12.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgfAMIAAgXIA/AAIAAAXg");
	this.shape_103.setTransform(-222,11.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AA4BUIgDhBIgBgfIgBgkIAAAAIgJAhIgKAeIgUBCIgcAAIgShBIgIgeIgHgiIgBAAIgBAkIgBAgIgEBAIgkAAIALinIAzAAIARA5IAIAcIAFAeIAAAAIAHgfIAJgcIASg4IAyAAIAJCng");
	this.shape_104.setTransform(-236.6,9.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAYBUIgFgOIgGgZQgCgLgEgGQgEgGgDgCQgFgCgIAAIgMAAIAABCIglAAIAAikIAWgCIAdgBQARAAANADQAOADAIAHQAIAGAEAJQAEAJAAALQAAALgFAIQgEAIgGAGQgIAEgHACIAAABQAJAEAGAIQAFAIADALIAFAUIAFARIADALgAgZg2IAAAuIAPAAQANAAAIgGQAIgHAAgLQAAgLgHgGQgIgGgLAAIgLAAIgHABg");
	this.shape_105.setTransform(-254,9.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgaBLQgUgLgJgTQgKgTAAgYQAAgbAMgUQAMgUAVgKQAUgKAZAAQAOAAALACQALACAFADIgIAeQgGgCgIgCQgIgCgKAAQgPAAgLAGQgLAGgHANQgHAMAAARQAAAZAOAPQAMAOAZABQAJAAAJgCQAIgBAGgDIAGAeQgFADgMACQgLACgPAAQgbAAgUgLg");
	this.shape_106.setTransform(-269.4,9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.9,-8.5,773.3,65);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.m1();
	this.instance.setTransform(-77,27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77,27,154,163);


(lib.Анимация2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.knopka();
	this.instance.setTransform(-473,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473,73,192,48);


(lib.Анимация1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon1();
	this.instance.setTransform(-500,-117);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500,-117,999,266);


// stage content:
(lib.crm490x80 = function(mode,startPosition,loop) {
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
	this.btnMain.setTransform(245.9,40.8,2.044,0.203,0,0,0,0.4,1.5);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.url(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1701));

	// Слой 12
	this.instance = new lib.Символ10();
	this.instance.setTransform(219.1,14.4,0.495,0.495,0,0,0,0,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1395).to({_off:false},0).to({alpha:1},22,cjs.Ease.get(1)).wait(284));

	// Слой 5
	this.instance_1 = new lib.Анимация2("synched",0);
	this.instance_1.setTransform(252.4,62.4,0.495,0.495,0,0,0,-377,97);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(62).to({_off:false},0).to({y:62.3,alpha:1},20,cjs.Ease.get(1)).to({regX:-376.9,regY:98,scaleX:0.62,scaleY:0.62,y:62.8},8,cjs.Ease.get(1)).to({regX:-377.1,regY:97.1,scaleX:0.5,scaleY:0.5,y:62.3},8).to({startPosition:0},204).to({x:435.9},17,cjs.Ease.get(1)).to({startPosition:0},1076).to({regX:-376.9,regY:97,scaleX:0.64,scaleY:0.64,rotation:-360,x:413.2,y:41.9},17,cjs.Ease.get(1)).wait(289));

	// Слой 4
	this.instance_2 = new lib.Символ3();
	this.instance_2.setTransform(227.5,2,0.495,0.495,0,0,0,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({y:13.7,alpha:1},23,cjs.Ease.get(1)).wait(228).to({regX:-0.1,scaleY:1.11,skewX:-63.4,alpha:0},17).wait(1382));

	// Слой 11
	this.instance_3 = new lib.Символ9();
	this.instance_3.setTransform(248.3,13.7,0.495,0.495,0,0,0,0,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1174).to({_off:false},0).to({alpha:1},17).wait(204).to({y:-25.3,alpha:0},17,cjs.Ease.get(1)).wait(289));

	// Слой 10
	this.instance_4 = new lib.Символ8();
	this.instance_4.setTransform(237.4,14.1,0.495,0.495,0,0,0,0.1,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(969).to({_off:false},0).to({alpha:1},16).wait(189).to({y:-12.4,alpha:0},17,cjs.Ease.get(1)).wait(510));

	// Слой 9
	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(256,14.2,0.495,0.495,0,0,0,0,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(751).to({_off:false},0).to({alpha:1},16).to({regX:0.1,regY:0.2},114).to({regX:0,regY:0.1},88).to({y:-9.8,alpha:0},16,cjs.Ease.get(1)).wait(716));

	// Слой 8
	this.instance_6 = new lib.Символ6();
	this.instance_6.setTransform(276.9,13.6,0.495,0.495,0,0,0,0,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(539).to({_off:false},0).to({alpha:1},15).wait(197).to({y:-17.4,alpha:0},16,cjs.Ease.get(1)).wait(934));

	// Слой 7
	this.instance_7 = new lib.Символ5();
	this.instance_7.setTransform(252.2,14.2,0.495,0.495,0,0,0,0.1,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(319).to({_off:false},0).to({alpha:1},18).wait(202).to({y:-13.3,alpha:0},15,cjs.Ease.get(1)).wait(1147));

	// Слой 6
	this.instance_8 = new lib.Символ4();
	this.instance_8.setTransform(-28.9,15.4,0.495,0.495);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(309).to({_off:false},0).to({regY:0.1,x:38.4,alpha:1},14,cjs.Ease.get(1)).wait(1378));

	// Слой 3
	this.instance_9 = new lib.Символ2();
	this.instance_9.setTransform(38.2,73.5,0.495,0.495,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:64.9,y:-3.5},21,cjs.Ease.get(1)).to({scaleX:0.59,scaleY:0.59,rotation:8,x:58.9,y:-5.1},7,cjs.Ease.get(-1)).to({regX:0.5,scaleX:0.45,scaleY:0.45,rotation:0,x:43.8,y:-8.9},30,cjs.Ease.get(1)).wait(244).to({x:-44.2,alpha:0},21).wait(1378));

	// Слой 1
	this.instance_10 = new lib.Анимация1("synched",0);
	this.instance_10.setTransform(247.3,10.4,0.495,0.495,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regY:0,y:19.3},28,cjs.Ease.get(1)).to({y:57.4},17).to({startPosition:0},257).to({regY:0.1,y:25.3},237).to({y:57},212).to({y:33.2},218).to({y:53.5},205).to({y:30.7},221).to({y:55.5},25,cjs.Ease.get(1)).wait(281));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(244.8,-7.5,494.5,215.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;