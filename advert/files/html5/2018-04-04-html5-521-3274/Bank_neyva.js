(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 24,
	color: "#CCCCCC",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/fon2.png", id:"fon2"},
		{src:"images/picsh1.png", id:"picsh1"}
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



(lib.fon2 = function() {
	this.initialize(img.fon2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,90);


(lib.picsh1 = function() {
	this.initialize(img.picsh1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,570,250);


(lib.url = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ4BCIgQgEQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAAAIgBgCIAAgOIABgDIACgBIATACIAQAAQAKAAAFgEQADgEAAgHIAAgDQAAgGgCgFQgDgEgJAAIgfAAIgCgBIgBgDIAAgNIABgDIACAAIAeAAQAGAAAEgDQADgCABgEIABgHIAAgDQAAgFgDgEQgEgEgLAAIgLAAIgLABIgMABIgBAAIgCAAIgBgDIAAgOQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAIADgBIAQgEQAKgCAJAAQAPAAALAEQAKADAGAIQAFAIABANIAAADQAAAFgDAFQgBAGgEAEQgEAEgEADQAGACAFAHQAEAHABAJIAAADQgBANgFAJQgGAJgLAEQgKAEgPAAIgUgBgADoA9QgKgGgGgNQgFgNgBgVIAAgOQABgVAFgNQAGgOAKgGQAMgGAOAAQAPAAALAGQALAGAFAOQAGANAAAVIAAAOQAAAVgGANQgFANgLAGQgLAGgPAAQgOAAgMgGgAD6gmQgFADgBAHQgDAIAAAOIAAAOQAAANADAIQABAHAFADQADADAFAAQAFAAADgDQAFgDACgHQACgIAAgNIAAgOQAAgOgCgIQgCgHgFgDQgDgDgFAAQgFAAgDADgAB2A9QgMgGgFgNQgGgNAAgVIAAgOQAAgVAGgNQAFgOAMgGQAKgGAPAAQAPAAALAGQALAGAFAOQAHANgBAVIAAAOQABAVgHANQgFANgLAGQgLAGgPAAQgPAAgKgGgACHgmQgEADgDAHQgCAIAAAOIAAAOQAAANACAIQADAHAEADQADADAFAAQAFAAAFgDQAEgDABgHQADgIAAgNIAAgOQAAgOgDgIQgBgHgEgDQgFgDgFAAQgFAAgDADgAADA9QgJgGgFgNQgGgNAAgVIAAgOQAAgVAGgNQAFgOAJgGQAKgGAQAAQAPAAAKAGQALAGAGAOQAGANgBAVIAAAOQABAVgGANQgGANgLAGQgKAGgPAAQgQAAgKgGgAAUgmQgFADgCAHQgCAIAAAOIAAAOQAAANACAIQACAHAFADQAEADAFAAQAEAAAEgDQAEgDADgHQACgIAAgNIAAgOQAAgOgCgIQgDgHgEgDQgEgDgEAAQgFAAgEADgAkWA9QgLgGgFgNQgGgNAAgVIAAgOQAAgVAGgNQAFgOALgGQALgGAOAAQAQAAAKAGQALAGAFAOQAHANAAAVIAAAOQAAAVgHANQgFANgLAGQgKAGgQAAQgOAAgLgGgAkFgmQgEADgCAHQgDAIAAAOIAAAOQAAANADAIQACAHAEADQAEADAEAAQAFAAAFgDQADgDACgHQADgIAAgNIAAgOQAAgOgDgIQgCgHgDgDQgFgDgFAAQgEAAgEADgAmJA9QgLgGgGgNQgFgNAAgVIAAgOQAAgVAFgNQAGgOALgGQALgGAPAAQAPAAAKAGQAMAGAFAOQAFANAAAVIAAAOQAAAVgFANQgFANgMAGQgKAGgPAAQgPAAgLgGgAl4gmQgEADgDAHQgBAIAAAOIAAAOQAAANABAIQADAHAEADQAEADAFAAQAEAAAFgDQAEgDADgHQACgIAAgNIAAgOQAAgOgCgIQgDgHgEgDQgFgDgEAAQgFAAgEADgAnjBDQgOAAgLgFQgKgEgGgJQgGgIAAgNIAAgCQAAgJAEgHQAFgIAGgDQgHgFgEgGQgDgHAAgJIAAgCQAAgMAFgIQAGgIAKgEQALgEAOAAIACAAQAOAAALAEQAKAEAGAIQAGAIgBAMIAAACQABAJgEAHQgEAGgHAFQAHADAEAIQAFAHgBAJIAAACQAAANgFAIQgHAJgKAEQgLAFgOAAgAnuALQgDACgCAEQgBAEgBAFIAAABQAAAIAEAFQAFAFAJAAIACAAQAIAAAGgFQAEgFAAgIIAAgBQAAgFgCgEQgBgEgEgCQgEgDgFAAIgGAAQgGAAgDADgAnxgnQgEAEAAAHIAAABQABAHADAEQAEAFAIAAIAGAAQAIAAAEgFQAEgEAAgHIAAgBQAAgHgEgEQgFgFgJAAIgCAAQgKAAgEAFgAqLBDQgOAAgLgFQgLgEgFgJQgHgIAAgNIAAgCQABgJAEgHQAEgIAHgDQgIgFgCgGQgFgHAAgJIAAgCQABgMAFgIQAGgIAKgEQALgEAOAAIACAAQAOAAAKAEQALAEAFAIQAGAIAAAMIAAACQAAAJgEAHQgDAGgIAFQAHADAFAIQAEAHAAAJIAAACQAAANgGAIQgGAJgLAEQgLAFgNAAgAqXALQgDACgCAEQgBAEAAAFIAAABQAAAIAEAFQAFAFAJAAIACAAQAIAAAFgFQAFgFgBgIIAAgBQAAgFgCgEQgBgEgDgCQgEgDgFAAIgGAAQgGAAgEADgAqZgnQgEAEAAAHIAAABQAAAHAEAEQADAFAJAAIAGAAQAHAAAEgFQAEgEAAgHIAAgBQAAgHgEgEQgDgFgKAAIgCAAQgKAAgEAFgAH5BCIgCgCIgBgCIAAgSIABgDIACAAIAYAAIAAhLIgXAKIgCABQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgCIAAgUIABgCIABgBIAggPIACAAIACgBIAQAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIAAACIAABmIAYAAIADAAIAAADIAAASIAAACIgDACgAGDBCIgEgCIAAgCIAAgSQAAgKADgIQADgJAGgGQAFgHAHgEIARgLIAKgIQAFgDABgDIABgGQAAgGgEgDQgDgCgLAAIgSABIgRABIgDgBIgBgDIAAgNIABgCIADgBQAHgDAKgBQAKgCAKAAQAQAAAKAEQALADAEAIQAEAHAAAMQAAALgFAIQgFAIgKAFIgQAKIgMAJQgHAFgCAFQgEAEAAAHIAAABIA5AAIACAAIABADIAAASIgBACQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAgAh3BCIgDgBIgBgCIABgBIAAAAIAwhkIABAAIAAgBIgBAAIgBgBIgwAAIgDgBIgCgDIAAgRQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAIBMAAIAFACIABAEIAAANIgBAEIgCAEIguBkQgBABAAAAQAAABAAAAQgBAAAAAAQAAABgBAAIgCABgAFFAWIgCgBIgBgCIAAgPIABgCIACgBIAjAAIACABIABACIAAAPIgBACIgCABgAi5AWIgDgBIgBgCIAAgPIABgCIADgBIAiAAIACABIACACIAAAPIgCACIgCABgApHAWIgCgBIgCgCIAAgPIACgCIACgBIAjAAIACABIABACIAAAPIgBACIgCABg");
	this.shape.setTransform(70,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,140,13.6);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape.setTransform(161.9,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZAzIAAhMIgvBMIgTAAIAAhlIASAAIAABNIAuhNIATAAIAABlg");
	this.shape_1.setTransform(150.8,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYAzIAAguIgvAAIAAAuIgRAAIAAhlIARAAIAAArIAvAAIAAgrIARAAIAABlg");
	this.shape_2.setTransform(139.7,34.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_3.setTransform(128.6,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgpAzIAAhlIAoAAQAOAAAHACQAHADAFAGQAFAHABAJQgBAIgDAFQgDAGgGADQAIABAEAGQAFAHAAAJQgBAPgKAHQgJAHgTAAgAgXAlIAWAAQAOAAAFgEQAGgDAAgJQAAgFgDgEQgEgEgFgBIgPgBIgUAAgAgXgHIASAAIAOgBQAEgBADgEQADgDABgFQAAgIgHgEQgFgDgNAAIgSAAg");
	this.shape_4.setTransform(118.1,34.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAzIAAhMIgvBMIgTAAIAAhlIASAAIAABNIAuhNIATAAIAABlg");
	this.shape_5.setTransform(106.9,34.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAvAzIgTggQgFgKgFgDQgDgDgHAAIAAAwIgQAAIAAgwQgFAAgFADQgEADgGAKIgSAgIgUAAIAUggQAKgSALgBQgHgEgDgEQgEgEgFgQQgDgFgDgCQgCgBgFAAIgFAAIAAgOIACAAIAPABQAEABADAEQADAEAGAMQAGAQAEADQADADAIAAIAAgsIAQAAIAAAsQAJAAADgDQAEgDAGgQQAGgOAFgEQAFgEAKAAIAHAAIAAAOIgFAAQgHAAgCACQgCACgEALQgEAKgEAEQgCAEgIADQAMABAKASIAUAgg");
	this.shape_6.setTransform(94.6,34.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AglBGIgCgQIAKABQAHAAADgCQADgCACgDQADgDADgKIACgFIgohlIATAAIAWA8IAGAWIAHgWIAVg8IASAAIgnBnIgIAYQgFAIgGAEQgGAEgIAAQgGAAgGgCg");
	this.shape_7.setTransform(83,36.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxAzIAAgOIAHAAQAGgBACgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBQACgCAAgOIAAhBIBPAAIAABlIgRAAIAAhXIgtAAIAAAxQAAATgCAGQAAAFgGAEQgFAEgKAAIgOAAg");
	this.shape_8.setTransform(71.6,34.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAoQgNgOABgaQAAgPAFgNQAFgMAMgGQALgHALAAQARAAALAJQALAIADAQIgRADQgDgLgFgFQgHgFgJAAQgLAAgIAJQgJAKABATQgBAUAJAKQAHAJALAAQAKAAAIgGQAHgHABgNIASADQgDARgMALQgMAKgRAAQgTAAgNgOg");
	this.shape_9.setTransform(61.6,34.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgaBBQgKgIgGgNQgFgNAAgfQAAgpAOgOQANgPAbAAIAVAAQAAgBABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAPAAQgBALgDADQgEAFgFABIgWABQgUAAgIAEQgIAFgDAJQgEAJAAAPQAGgKAJgFQAJgFAJAAQAVAAANAOQANAOAAAVQAAATgGALQgHAMgJAGQgKAHgPAAQgRAAgKgJgAgUgFQgIAJAAASQAAATAJAJQAJAKALAAQANAAAIgMQAIgKAAgTQAAgQgIgJQgHgKgOAAQgNAAgIALg");
	this.shape_10.setTransform(50.6,32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_11.setTransform(39.2,34.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_12.setTransform(183.9,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_13.setTransform(172.8,15.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgpAzIAAhlIApAAQANAAAGACQAIADAFAGQAGAHgBAJQAAAIgDAFQgDAGgGADQAIABAEAGQAFAHAAAJQgBAPgJAHQgKAHgSAAgAgYAlIAYAAQAMAAAGgEQAFgDABgJQAAgFgDgEQgEgEgEgBIgPgBIgWAAgAgYgHIATAAIANgBQAFgBADgEQADgDAAgFQAAgIgFgEQgGgDgMAAIgUAAg");
	this.shape_14.setTransform(162.2,15.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_15.setTransform(151,15.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgeAoQgOgOAAgaQAAgPAGgNQAGgMALgGQALgHAMAAQAQAAALAJQALAIADAQIgRADQgCgLgHgFQgGgFgIAAQgMAAgJAJQgHAKgBATQABAUAHAKQAJAJALAAQAJAAAIgGQAGgHADgNIAQADQgCARgMALQgMAKgQAAQgUAAgMgOg");
	this.shape_16.setTransform(140.8,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgeAoQgOgOAAgaQAAgPAGgNQAFgMAMgGQALgHAMAAQAQAAALAJQALAIADAQIgRADQgCgLgHgFQgGgFgIAAQgMAAgJAJQgHAKgBATQABAUAHAKQAJAJALAAQAJAAAHgGQAIgHABgNIARADQgCARgMALQgMAKgQAAQgUAAgMgOg");
	this.shape_17.setTransform(130.8,15.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_18.setTransform(119.9,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASAzIgSggQgEgKgFgDQgEgDgGAAIAAAwIgSAAIAAhlIASAAIAAAsQAIAAAEgDQADgDAFgQQAFgMADgEQADgEAEgBIAOgBIADAAIAAAOIgEAAQgHAAgCACQgCACgFALQgDAKgEAEQgDAEgFADQAKABALASIATAgg");
	this.shape_19.setTransform(110.8,15.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAIIAAgPIA0AAIAAAPg");
	this.shape_20.setTransform(102.4,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiAoQgNgOAAgaQAAgbAQgOQANgMASAAQAVAAANAOQAOAOAAAZQAAASgGALQgGAMgLAGQgMAHgNAAQgUAAgOgOgAgUgcQgJAJAAATQAAATAJAKQAIAKAMAAQANAAAIgKQAJgKAAgTQAAgSgJgKQgIgKgNAAQgMAAgIAKg");
	this.shape_21.setTransform(93.4,15.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAYAzIAAguIgvAAIAAAuIgRAAIAAhlIARAAIAAArIAvAAIAAgrIARAAIAABlg");
	this.shape_22.setTransform(82.4,15.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgHAzIAAhXIgiAAIAAgOIBTAAIAAAOIgiAAIAABXg");
	this.shape_23.setTransform(72.3,15.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AghAoQgNgOAAgaQAAgYANgOQAOgPATAAQAVAAANAOQANAPAAAYIAAAEIhLAAQABARAIAJQAJAJALAAQAKAAAHgFQAGgFAEgLIATACQgFAQgLAJQgMAJgSAAQgVAAgNgOgAgSgeQgIAIgBANIA4AAQgCgNgFgGQgIgKgOAAQgKAAgIAIg");
	this.shape_24.setTransform(62.1,15.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAYAzIAAgqQgQAGgMAAQgMAAgJgGQgJgGgDgHQgEgJAAgKIAAgbIASAAIAAATQAAANACAGQABAFAGAFQAGACAIAAQAIAAAQgDIAAgvIASAAIAABlg");
	this.shape_25.setTransform(51.1,15.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgeAoQgNgOgBgaQABgPAFgNQAGgMALgGQALgHALAAQASAAAKAJQALAIADAQIgRADQgDgLgGgFQgGgFgJAAQgLAAgJAJQgIAKAAATQAAAUAIAKQAJAJAKAAQALAAAGgGQAIgHABgNIARADQgCARgMALQgLAKgSAAQgTAAgMgOg");
	this.shape_26.setTransform(41.5,15.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AglAtQgJgIAAgNQAAgIADgGQAEgGAGgEQAFgCAHgCIAQgDQATgCAKgEIAAgEQAAgLgFgEQgGgGgNAAQgLAAgGAEQgGAEgDALIgRgCQACgLAGgHQAFgGAKgEQAKgEAMAAQANAAAIADQAJADAEAFQADAFACAHIABAQIAAAWQAAAYABAHQABAGADAGIgSAAQgDgFAAgIQgKAJgJADQgHAEgLAAQgRAAgJgJgAgDAGQgKABgFACQgEACgDAEQgCAEAAAEQAAAHAFAFQAFAFALAAQAIAAAIgFQAIgEADgIQADgGAAgLIAAgGQgJADgSADg");
	this.shape_27.setTransform(30.6,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag1BHIAAiNIA1AAIAVABQAKACAIAFQAGAFAFAJQAEAJAAAKQAAASgMALQgLANgfAAIgiAAIAAA6gAgigCIAjAAQASAAAIgHQAHgHAAgMQABgJgFgHQgFgGgHgCQgEgCgOAAIgiAAg");
	this.shape_28.setTransform(18.8,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.7,0.5,181.9,45.7);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E4C88").s().p("ArUI6QiVAAgBiWIAAtHQABiWCVAAIWqAAQCUAAAACWIAANHQAACWiUAAg");
	this.shape.setTransform(87.5,57);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,175,114);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("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QADgCADAAIArAAQADAAACACQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAIgHCvQAAAEgCACQgCACgDAAgAr2D4QgDAAgCgCQAAAAgBAAQAAgBgBAAQAAgBAAgBQAAAAAAgBIAAgcQAAgDACgCQACgCADAAIBEAAIAFACIACAFIAAAcQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAAAQgCACgDAAgAHUgfIgGgCQgCgCAAgDIAAgkIhAAAQgeAAgQgJQgPgJgGgQQgHgQABgUIAAh7QAAgDACgCQACgCADAAIArAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQACACAAADIAACAQAAAFAAAFQABADAEADQADACAHAAIAcAAQAIAAADgCQADgDABgDIABgKIAAiAQAAgDABgCQACgCAEAAIAqAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQACACAAADIAAB7IAAAMIgBALIAQAAQACAAACACQACACAAADIAABMQAAADgCACIgEACgAJThLQgPgFgNgKQgMgLgIgRQgIgRAAgaIAAgYQAAgcALgVQAKgVAUgLQAUgLAcAAQAdAAASAMQAUAMAJAVQAKAUAAAbIAAAUQAAAEgCACQgCADgDAAIhwAAIAAAAQAAAKAEAJQADAJAIAFQAHAFAOABIAZgBIAYgBIATgCIABAAQACAAACACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAbQAAAEgCACQgBACgEABIgWAFIgXACIgbABQgQAAgQgEgAJcjeQgJAKAAATIAAACIBAAAIAAgCQAAgTgJgKQgHgKgPAAQgQAAgIAKgAgIhRQgRgKgKgUQgLgUAAgcIAAgeQAAgcALgUQAKgUARgKQARgKAZAAIAcACIASADIAGADQABABABAEIAAAfQAAABgBABQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAIgBAAIgSgBIgZgBQgLAAgIAIQgJAKAAAWIAAAeQAAAXAJAJQAIAJALgBIAZAAIASgCIABAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAABIAAAfQgBAEgBABQgCACgEABIgSAEQgNABgPAAQgZAAgRgKgAjEhLQgPgFgNgKQgMgLgIgRQgHgRgBgaIAAgYQAAgcALgVQAKgVAUgLQAUgLAcAAQAdAAATAMQATAMAJAVQAKAUAAAbIAAAUQAAAEgCACQgCADgDAAIhwAAIAAAAQAAAKADAJQAEAJAIAFQAHAFAOABIAZgBIAXgBIAUgCIABAAQACAAACACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAAbQAAAEgCACQgBACgEABIgWAFIgXACIgbABQgQAAgQgEgAi7jeQgJAKAAATIAAACIBAAAIAAgCQAAgTgJgKQgHgKgPAAQgQAAgIAKgAsLhSQgVgLgLgXQgNgXAAgjIAAg1QAAgnANgZQAMgYAVgLQAWgLAdAAQAYAAASACQARACALADQAEABABACQADACAAADIAAAeQAAAEgDACQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgBAAIAAAAIgUgDIgXgCIgVAAQgPAAgKAEQgKAFgFALQgEAMAAATIAAACIATgCIAWgCQAYAAATAHQAUAIAMARQAMARgBAdIAAACQABAbgLAUQgKAUgVALQgVALgdAAQgdAAgVgLgArIh4QAHgDAEgKQAFgJAAgSIAAgCQAAgVgLgIQgKgIgRABIgPABIgQACIAAAVQAAAYAEANQAFAMAIAFQAIAEALAAQAJAAAIgEgAMXhJQgPgBgRgCQgFgBgCgEQgCgDAAgHIAAisQAAgGAEgCQADgDAFAAIAdgDQAQgBARAAQAaAAAUAFQAUAFALANQAMANgBAYIAAADQABANgGAKQgFAJgMAHQALAEAHAKQAGAKAAAQIAAACQgBAYgMAOQgMAOgVAFQgVAGgaAAIgegCgAMmhzIAFAAIAOAAQATAAAIgFQAIgFgBgKIAAgDQAAgJgFgGQgGgFgOgBIgcAAgAMmjrIAAAoIAcAAQAOAAAFgFQAGgGgBgIIAAgDQAAgKgHgEQgJgEgSAAIgJAAIgJAAgADohKQgDAAgCgCQgCgCAAgDIAAhAIgEAAIgEAAIgEAAIgGAAIgkBCIgDAEQgCABgDAAIgrAAQgEAAgCgCQgCgCgBgDIAAgCIACgDIAohFQgOgHgKgOQgKgNgBgVIAAgDQABgYAMgPQALgOAUgGQAUgGAZAAIAhABIAhADQAGABABACQACACgBAEIAAC4QAAADgCACQgDACgDAAgAC3jkQgJAFAAAMIAAADQAAANAHAFQAHAGATgBIAJAAIAJAAIAAgvIgMAAIgGAAQgPAAgJAEgAlQhKIgDgBIgBgEIAAhxIgBgBIAAgBIgBAAIgBACIgZAsIgDAEIgFABIgrAAIgEgBIgEgEIgYgsIgBgCIgBAAIgBABIgBABIAABxIgBAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgrAAIgCAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAgBIAAi7QAAgFADgCQADgCAEAAIAqAAQAFAAACACIAGAFIApBNIABADIACAAIACAAIABgDIAphNIAFgFQADgCAEAAIArAAQAEAAACACQADADABAEIAAC7IgCAEIgDAAg");
	this.shape.setTransform(155.3,33.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,310.5,67.6);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AS+EKIgYgBQgDAAgDgDQgCgCAAgEIALk6QABgEACgCQABgDAHgBQARgEAXgCQAXgCAVABQAiABAWAPQAVAOALAaQAJAYgBAjIgBAhQgCA2gaAcQgZAcgzgBIgagCIgcgFIgCBTQgBADgDADQgCACgCAAIgBAAgATpgpIgYACIgHC0IAbAFIAbACQAhABAPgVQAOgUABglIABghQABgkgMgUQgNgWghgBIgLAAIgTAAgAaVDBQgEgBgDgCQgCgDAAgEIACgrQAAgDADgDQACgCADAAIAXABQADAAACADQADACABAEIgCArQAAAEgDACQgDACgEAAgAX/C7IgWAAQgEgBgDgCQgCgDABgEIAHjQIhNgCQgEgBgCgDQgCgCgBgEIABgPQABgEACgDQADgCAEAAIDAAGQAEABACADQACACABAEIAAAPQgBAEgDADQgCACgEAAIhNgCIgHDQQAAADgDADQgCACgDAAIgBAAgARECsQgEAAgCgDQgCgDAAgDIAAgLQgQAKgTAGQgRAFgUgBQgTAAgSgHQgPgHgLgRQgJgRAAgcIAAgGQABgZALgQQAMgQAZgIQAYgHApABIAiABIABgSQABgbgLgMQgMgMgbAAIgngBIgeACQgEAAgEgCQgDgBABgFIAAgQQAAgEADgCQABgCAGAAIAfgEQARgBAXABQAwACAUAXQAVAYgCAmIgFChQAAAEgEADQgDACgDAAgAPyAzQgQAEgGAKQgHAKAAAQIAAAGQgBAYALAJQAKAJAUABQAQAAAQgEQAPgEAQgJIADhKIgigBIgLAAQgUAAgMADgAMPChQgEAAgDgCQgBgDAAgEIAHjQIhNgCQgEgBgCgDQgCgCgBgEIABgPQABgEACgDQADgCAEAAIDAAGQAEABACACQACADABAEIAAAPQgBAEgDACQgCADgEAAIhNgCIgHDQQAAADgCADQgDACgEAAgAJKCeQgggBgVgPQgVgOgLgaQgLgZABgiIACgkQABggAMgZQAMgYAXgNQAWgNAgABQAPAAAPACIAaAFQAGABACACQACACAAAFIgBAQQAAAEgDACQgDACgEgBIgcgDIgdgCQgcgBgPASQgPASgCAlIgBAkQgCAnAPATQAOATAcABIAdABIAcgCQAEAAACACQADABAAAEIAAARQAAAEgCACQgDADgFABIgaACIgVABIgKAAgAEiCQQgEAAgDgCQgCgDAAgEIAAgKQgQAJgSAGQgSAFgTAAQgUgBgRgHQgQgHgKgRQgKgQAAgdIAAgGQACgYAKgRQAMgQAZgFQAZgIApABIAiACIAAgTQABgcgKgMQgMgNgbAAIgnAAIgfABQgEAAgDgBQgEgCABgFIAAgQQAAgEADgCQACgCAFAAIAfgEIAoAAQAxACATAXQAWAYgDAoIgFCfQAAAEgDADQgDACgEAAgADPAXQgQAEgGAKQgHAKAAAQIAAAGQgBAYALAJQAKAKAVAAQAQAAAPgEQAPgEAQgIIADhKIghgCIgLAAQgUAAgNADgABJCJIgXgBQgEAAgCgDQgCgDgBgDIAEhnIh4gEIgDBnQAAADgDADQgDACgEAAIgWAAQgEgBgCgCQgCgDgBgEIAIjoQABgEACgDQADgCAEAAIAWAAQAEABACADQACACABAEIgEBiIB4AEIADhiQABgEADgCQACgCAEgBIAXABQADABADACQACADAAAEIgIDoQAAAEgDADQgCACgDAAIgBAAgAlfB9QgggBgUgPQgWgOgLgZQgLgaACgiIABgiQABgiANgYQAMgZAWgNQAXgNAfABQAQABAPACIAaAEQAGABACADQABACAAAFIAAAQQgBAEgCABQgEACgDAAIgcgEIgegBQgcgCgOATQgPASgCAnIgBAiQgCAmAOAUQAOATAcABIAdAAIAcgBQAEgBADACQADACAAAEIgBARQAAAEgBACQgDACgGABIgaADIgUAAIgLAAgApSB1QgbgBgXgKQgYgLgNgZQgPgZABgqIACgnQABghAMgYQANgXAXgNQAYgMAgABQAjABAWAOQAVAOAKAYQAMAZgCAhIgBAYQAAAFgCABQgCADgFgBIiagDIAAAFQgCAoAQASQAPASAgAAIAdABIAcgBIAagCQADAAAEABQACACAAAEIgBAQQAAAEgCACQgCADgFABQgUADgUABIgZABIgSAAgAp7hZQgQARgCAlIAAAEIB6AEIAAgEQABgmgOgSQgOgRgfgBIgFAAQgaAAgPAQgAsQBrQgEAAgCgCIgDgHIAEhlIh7gEIgDBlQAAADgDADQgDADgDgBIgXAAQgEAAgCgDQgCgDgBgEIAIjoQABgEADgDQACgCAEAAIAXAAQADABADADQACACAAAEIgEBiIB6AEIAEhiQABgEACgCQADgCAEgBIAWABQAEABACACQACADABAEIgJDoQAAAEgCADQgEACgDAAgAabBoQgEAAgDgEQgCgCAAgEIAEjtQABgEADgCQADgDADABIAXAAQAEAAADADQACADAAAEIgMDtQAAADgDACQgDADgDAAgAxZBjQgTgBgRgCQgSgCgOgDIgFgDQgDgBAAgFIABgQQAAgFADgCQACgBAFABIAjAEIAfACQAfABAPgJQAPgJAAgXIAAgFQABgQgKgJQgJgLgagBIhIgDQgDAAgDgCQgCgCAAgEIABgPQAAgEACgCQADgCADAAIBIADQASAAAKgFQAKgEAFgJQADgIAAgLIAAgDQABgTgMgIQgOgIghgBIghAAIgiACQgEAAgCgCQgDgBAAgFIABgQQAAgFADgBIAGgCQAOgDASgBQARgBATABQAdAAAXAIQAWAHANAOQAMAQAAAaIAAAEQgBAPgJAPQgJAOgSAIQATALAIAPQAHAMgCAPIAAAEQgBAagNARQgOAQgXAIQgVAGgYAAIgHAAgAz+BaQgEAAgCgCQgDgDABgEIAFixIAAgCIgBABIhuCwQgDAFgDABIgJABIgdgBQgFAAgEgFQgDgEAAgFIAIjlQAAgEACgCQADgCAEAAIAXAAQAEABACACQACACAAAFIgGCyIAAABIACgBIBuiuQADgGAFgCQAEgBAHAAIAbABQAFAAADADQACADAAAHIgIDlQAAAEgDADQgCACgEAAgA5lBRQgYgBgTgCQgTgBgOgDQgHgBgEgEQgDgEAAgIIALk5QAAgEACgCQADgDAEAAICvAGQAEABADACQACADAAAEIgBASQAAAEgDADQgCACgEABIiPgFIgDBqIAXgBIAZABQAlABAeAJQAeAKARAWQASAWgBAmIAAAIQgCAkgSAVQgUAVgfAHQgYAGgbAAIgPAAgA6VAqIAYACIAZABQAdACAUgFQAVgEAMgNQALgOABgWIAAgIQACgZgLgOQgLgOgUgGQgVgGgdgBIgYAAIgYAAg");
	this.shape.setTransform(172.6,21.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-5.4,345.7,53.3);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7CA07").s().p("A8TE2QhkgBAAhjIgFmjQAAhjBkgBMA4sAAAQBkABAABjIAFGjQAABjhkABg");
	this.shape.setTransform(191.8,31);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,383.5,62);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjOFgQgIAAgFgFQgFgFgBgJIAAhiQABgIAFgFQAFgEAIgBIB+AAIAAmWIh7A1QgHADgFAAQgFAAgCgDQgCgDgBgGIAAhsQABgFACgEQACgDAFgCICshRIAJgDIANgBIBTAAQAIAAAFAGQAFAEAAAIIAAInIB+AAQAJABAFAEQAGAFgBAIIAABiQABAJgGAFQgFAFgJAAg");
	this.shape.setTransform(22.6,35.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.2,70.6);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjWFlQgIgBgGgFQgFgFAAgIIAAhhQAAg1ARgtQARgtAdgkQAdglAlgZIBXg8QAngcAVgRQAVgQAHgOQAHgOAAgWQABgegXgOQgWgNg3AAQgsAAgxAFIheAIIgBAAIgBAAQgHgBgFgFQgEgFgBgIIAAhKQABgHAFgFQAFgEAHgCQApgMA2gJQA2gIA1gBQBVAAA2AUQA1AUAYApQAZAoAAA9QgBA5gcArQgcArg1AhIhRA3QgoAagdAZQgfAYgRAbQgRAagBAhIAAAEIEqAAQAIAAAFAFQAGAFAAAIIAABiQAAAIgGAFQgFAFgIABg");
	this.shape.setTransform(23.5,35.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.9,71.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah6FhQg0gHgmgMQgHgCgFgEQgGgEAAgHIAAhNQAAgHAFgFQAFgFAIAAIABAAQAzAFAyACQAxACAnAAQAwAAAXgVQAWgVgBgnIAAgRQABghgQgYQgQgXgsgBIinAAQgIgBgFgFQgFgGAAgHIAAhPQAAgIAFgFQAFgFAIAAICkAAQAcgBASgLQASgMAHgTQAIgSgBgWIAAgNQABghgUgTQgUgTg1AAQghAAgcABIg8AEIhCAGIgBAAIgBAAQgHAAgFgFQgFgEAAgIIAAhMQABgHAFgEQAGgFAHgCQAmgMAygIQAygJA4gBQBMAAA3ATQA3ATAeAsQAdAqABBHIAAAOQAAAcgLAbQgKAcgTAYQgUAXgZAPQAoATAWAlQAWAlABAvIAAARQgBBJgfAuQgfAvg3AWQg4AWhIAAQg4AAgzgIg");
	this.shape.setTransform(23.1,36.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.3,72.3);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANBrIg9hsIg/BsQgNAUgYAAQgLABgKgHQgPgIgEgRQgFgRAJgPIBkiqQAFgJAKgGQAJgGAMABQAYgBAMAVIA9BrIA/hrQANgVAYABQALgBAKAGQAPAIAEARQAEARgIAPIhkCrQgMAUgYAAQgYAAgMgUg");
	this.shape.setTransform(31.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFAE5F","#F17352","#E82628","#E61B21","#B01315","#E71D23"],[0,0.059,0.588,0.69,0.859,1],6.5,-12.4,0,6.5,-12.4,43.8).s().p("AjYDZQhahaAAh/QAAh+BahaQBahaB+AAQB/AABaBaQBaBaAAB+QAAB/haBaQhaBah/AAQh+AAhahag");
	this.shape_1.setTransform(31.5,31.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,0.6,61.6,61.6);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AANBqIg9hrIg/BrQgNAWgYgBQgLAAgKgFQgPgJgEgRQgFgQAJgQIBkiqQALgUAZgBQAYABAMAUIA9BrIA/hrQANgUAYgBQALABAKAFQAPAJAEAQQAEARgIAPIhkCqQgMAWgYgBQgYABgMgWg");
	mask.setTransform(19.7,12.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#FFFFFF","#FBFCFC","#F1F1F1","#DEDFE0","#C5C7C8","#BCBEC0","#C1C2C4","#CED0D1","#DCDDDE"],[0,0.149,0.333,0.502,0.663,0.816,0.859,0.906,0.961,1],11.8,-16.7,0,11.8,-16.7,47.8).s().p("AjEB/IAAj+IGJAAIAAD+g");
	this.shape.setTransform(19.7,12.8);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0,38.3,25.6);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.fon2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,130,90);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.picsh1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,570,250);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE1E23").s().p("EhLxATmMAAAgnLMCXjAAAMAAAAnLg");
	this.shape.setTransform(485,125.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,970.1,251);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(155.3,33.8,1,1,0,0,0,155.3,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.9,0,332.7,80.2);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.setTransform(172.4,21.8,1,1,0,0,0,172.4,21.8);
	this.instance.cache(-2,-7,350,57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-5.4,360.8,60.9);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(22.6,35.3,1,1,0,0,0,22.6,35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.1,110.2);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(23.4,35.7,1,1,0,0,0,23.4,35.7);
	this.instance.cache(-2,-2,51,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.1,110.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(23.1,36.1,1,1,0,0,0,23.1,36.1);
	this.instance.cache(-2,-2,50,76);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.1,110.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(227.9,22.9,0.74,0.74,0,0,0,19.8,12.9);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(227.8,22.9,0.74,0.74,0,0,0,31.5,31.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiBCfIAAk9IDvAAQgBARgIARQgQAigjAAIhrAAIAAC1IBKAAQATAAALgJQALgJAAgNQAAgKgBgDQgCgIgIgJQgHgGgLgDIgWgFQgYgHgFgZIgBgaIAtAAQA1AFAZAaQAeAeAAAlQAAAtgiAeQghAcguAAg");
	this.shape.setTransform(9.7,20,0.74,0.74);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhwB5IAAjxICcAAQAaAAARASQASATAAAaQAAAOgGAOQgHARgMAIQAOADAKASQAJARAAAPQAAAggZAVQgWATggAAgAgnAcIAAAZIAzAAQAMAAAJgEQAHgEAAgHQAAgFgBgEQgEgGgQAAIgoAAQgKAAgIAFgAAdgaQAFgHgCgKQgBgJgMAAIg6AAIAAAZIAygBQAOAAAEACg");
	this.shape_1.setTransform(162.1,22.8,0.74,0.74);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhRAQIALgXQAEgKANgEQAMgEAOADQAxAKAwgUIAKAZQAFAIgKAMQgKANgSADQgWAEgVAAQgrAAgqgRg");
	this.shape_2.setTransform(141.4,9.2,0.74,0.74);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAlB5IAAhZQgGgGgMAAIglAAQgMAAgGAGIAABZIhJAAIAAi6QAAgZAPgPQANgQAVABIAYAAIAABRQAIgBAKAAIAlAAQAKAAAIABIAAgdQAAgZAOgOQANgNAVAAIAZAAIAADxg");
	this.shape_3.setTransform(49.7,22.8,0.74,0.74);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA3CfIAAh2QgIgHgKAAIhIAAQgMAAgGAHIAAB2IhJAAIAAkLQAAgXATgPQAQgMARAAIAVAAIAAB/QAIgCAKAAIBIAAQAKAAAIACIAAhHQgBgWAMgPQAOgTAcAAIATAAIAAE9g");
	this.shape_4.setTransform(100.4,20,0.74,0.74);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHBjQgsggAAhCQAAg9AighQAjghAwAAQAsAAAhAbQASAPAKAWQAJAVAAAWQAAAVgSANQgPAKgWAAIhLAAQgIAAgVgFIAAADQACAMAIALQAJAKAMAEQATAGASABIAdgCQAMgCAMAGQALAGAEALIALAbQglAOgpAAQg5AAgogcgAAXgcQAJAAAQAEQgDgWgMgJQgNgJgSgBQgPAAgNAKQgLAIgGAXQAQgEAJAAg");
	this.shape_5.setTransform(121.6,22.9,0.74,0.74);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAdB6IgyhkQgNAEgJAAIgEAAIAABgIhIAAIAAjyIANAAQA7AAAAAzIAAAaIASAAQAKAAAJgOIAUgjQATgdAjAAIAuAAIhLB0IBVB/g");
	this.shape_6.setTransform(70.7,22.8,0.74,0.74);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhOBhQgegZgBgsIAAiXIBJAAIAACXQAAAaAjAAQAHAAAfgGIAAirIBIAAIAADbQhGAcgoAAQgtAAgggbg");
	this.shape_7.setTransform(141.7,23,0.74,0.74);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKBtQgdgTAAgsQAAgWAKgRQALgRATgHQAXgJAyAAQAKAAAHgGQAFgGAAgHQAAgTgdAAQgPAAgbAFIgPAEQgGACgIgHQgIgFgFgMIgMgaQAwgWA4AAQAkAAAbAUQAeAWAAAjIAACqQhCAEgvAAQgpAAgYgRgAgZAhQgGAGAAAIQAAAVAeAAIAgAAIAAgrIgPACIgVAAQgNgBgHAHg");
	this.shape_8.setTransform(181.2,22.8,0.74,0.74);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhKBtQgdgTAAgsQAAgWAKgRQAKgRATgHQAYgJAyAAQAKAAAHgGQAFgGAAgHQAAgTgdAAQgQAAgaAFIgPAEQgGACgIgHQgIgFgFgMIgMgaQAwgWA4AAQAkAAAbAUQAeAWAAAjIAACqQhCAEgvAAQgpAAgYgRgAgZAhQgGAGAAAIQAAAVAeAAIAgAAIAAgrIgPACIgVAAQgNgBgHAHg");
	this.shape_9.setTransform(29.8,22.8,0.74,0.74);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AANBrIg9hsIg/BsQgNAVgYAAQgLAAgKgGQgPgJgEgRQgFgQAJgPIBkiqQALgVAZAAQAYAAAMAVIA9BrIA/hrQAJgQARgEQARgEAPAIQAPAJAEARQAEAQgIAPIhkCrQgMAVgYAAQgYAAgMgVg");
	this.shape_10.setTransform(227.8,22.8,0.74,0.74);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,250.6,45.6);


(lib.Синий = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 2
	this.instance = new lib.Symbol2();
	this.instance.setTransform(-276.4,-79.7,0.559,0.558,0,0,0,169.3,30.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).wait(1).to({regX:125.3,regY:22.8,x:-301,y:-83.9},0).wait(1).to({y:-82.6},0).wait(1).to({y:-80.2},0).wait(1).to({y:-76.6},0).wait(1).to({y:-71.2},0).wait(1).to({y:-63.7},0).wait(1).to({y:-53.8},0).wait(1).to({y:-41.8},0).wait(1).to({y:-28.9},0).wait(1).to({y:-17.4},0).wait(1).to({y:-8.5},0).wait(1).to({y:-2.4},0).wait(1).to({y:1.4},0).wait(1).to({y:3.4},0).wait(1).to({regX:169.3,regY:30.9,x:-276.4,y:8.5},0).wait(208).to({y:8},0).wait(1).to({regX:125.3,regY:22.8,scaleX:0.56,scaleY:0.56,x:-300.6,y:3.7},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:-299.4,y:4.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:-297,y:6.6},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:-292.9,y:10},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:-286.5,y:15.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:-278,y:21.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:-270.3,y:28.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-265.1,y:32.4},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:-262.1,y:34.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:-260.6,y:36},0).wait(1).to({regX:169.3,regY:31.1,scaleX:0.99,scaleY:0.99,x:-216.7,y:44.4},0).wait(100));

	// Symbol 15
	this.instance_1 = new lib.Symbol15();
	this.instance_1.setTransform(-291.6,-54,0.708,0.708,0,0,0,115.4,31.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(1).to({regX:101,regY:25.2,x:-301.8,y:-57.8},0).wait(1).to({y:-56.4},0).wait(1).to({y:-53.8},0).wait(1).to({y:-49.7},0).wait(1).to({y:-43.8},0).wait(1).to({y:-35.6},0).wait(1).to({y:-24.7},0).wait(1).to({y:-11.4},0).wait(1).to({y:2.8},0).wait(1).to({y:15.5},0).wait(1).to({y:25.2},0).wait(1).to({y:31.9},0).wait(1).to({y:36.1},0).wait(1).to({y:38.3},0).wait(1).to({regX:115.4,regY:31.2,x:-291.6,y:43.2},0).wait(207).to({y:43.3},0).wait(1).to({regX:101,regY:25.2,scaleX:0.71,scaleY:0.71,x:-299.3,y:38.8},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:-290.9,y:38.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:-274,y:36.8},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:-244.9,y:34.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-199.2,y:30.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:-139.5,y:25.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:-84.7,y:21.2},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:-47.9,y:18.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:-26.7,y:16.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-16.4,y:15.6},0).wait(1).to({regX:115.4,regY:31.3,scaleX:0.92,scaleY:0.92,x:-0.3,y:20.8},0).wait(103));

	// Symbol 16
	this.instance_2 = new lib.Symbol16();
	this.instance_2.setTransform(-281.2,-26.3,1,1,0,0,0,89.8,8.7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(1).to({regX:70,regY:6.8,x:-301,y:-27.7},0).wait(1).to({y:-26.3},0).wait(1).to({y:-23.7},0).wait(1).to({y:-19.6},0).wait(1).to({y:-13.7},0).wait(1).to({y:-5.4},0).wait(1).to({y:5.6},0).wait(1).to({y:18.9},0).wait(1).to({y:33.2},0).wait(1).to({y:46},0).wait(1).to({y:55.8},0).wait(1).to({y:62.5},0).wait(1).to({y:66.7},0).wait(1).to({y:68.9},0).wait(1).to({regX:89.8,regY:8.7,x:-281.2,y:71.5},0).wait(209).to({y:71.6},0).wait(1).to({regX:70,regY:6.8,scaleX:1,scaleY:1,x:-298.5,y:69.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:-290.1,y:69.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:-273.2,y:69.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:-244.2,y:68.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:-198.6,y:67.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:-138.9,y:66.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:-84.2,y:65},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:-47.4,y:64.2},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:-26.3,y:63.7},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:-15.9,y:63.5},0).wait(1).to({regX:89.8,regY:8.7,scaleX:1.3,scaleY:1.3,x:12.6,y:65.9},0).wait(103));

	// Symbol 14
	this.instance_3 = new lib.Symbol14();
	this.instance_3.setTransform(-303,-71,1,1,0,0,0,85,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:87.5,regY:57,x:-300.5,y:-69.4},0).wait(1).to({y:-67.7},0).wait(1).to({y:-64.5},0).wait(1).to({y:-59.4},0).wait(1).to({y:-51.9},0).wait(1).to({y:-41.4},0).wait(1).to({y:-27.6},0).wait(1).to({y:-11.7},0).wait(1).to({y:3.7},0).wait(1).to({y:15.9},0).wait(1).to({y:24.3},0).wait(1).to({y:29.5},0).wait(1).to({y:32.3},0).wait(1).to({regX:85,regY:56,x:-303,y:32},0).wait(209).to({regX:87.5,regY:57,scaleX:1.03,scaleY:1,x:-299.6,y:33},0).wait(1).to({scaleX:1.11,scaleY:1.01,x:-297.1,y:33.1},0).wait(1).to({scaleX:1.24,scaleY:1.03,x:-292.8},0).wait(1).to({scaleX:1.43,scaleY:1.05,x:-286.8,y:33.2},0).wait(1).to({scaleX:1.68,scaleY:1.08,x:-278.9,y:33.3},0).wait(1).to({scaleX:1.99,scaleY:1.12,x:-269.1,y:33.5},0).wait(1).to({scaleX:2.36,scaleY:1.16,x:-257.3,y:33.6},0).wait(1).to({scaleX:2.8,scaleY:1.21,x:-243.4,y:33.8},0).wait(1).to({scaleX:3.3,scaleY:1.27,x:-227.5,y:34},0).wait(1).to({regX:85,regY:55.9,scaleX:3.87,scaleY:1.34,x:-218.9,y:33},0).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-388,-127,175,114);


(lib._321 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.Symbol7();
	this.instance.setTransform(1,44,0.05,0.05,0,0,0,23,37);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(67).to({_off:false},0).wait(1).to({regX:22.6,regY:35.3,scaleX:0.06,scaleY:0.06,y:43.9},0).wait(1).to({scaleX:0.09,scaleY:0.09},0).wait(1).to({scaleX:0.15,scaleY:0.15},0).wait(1).to({scaleX:0.25,scaleY:0.25,y:43.8},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:0.9,y:43.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:0.8,y:43.6},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:0.7,y:43.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:43.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:0.6},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({regX:22.9,regY:37.1,scaleX:1,scaleY:1,x:0.9,y:45.1},0).wait(7).to({scaleX:0.04,x:1},5).to({_off:true},1).wait(249));

	// Layer 7
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(0,45,0.05,0.05,0,0,0,23,38);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(1).to({regX:23.5,regY:35.7,scaleX:0.06,scaleY:0.06,x:0.1,y:44.9},0).wait(1).to({scaleX:0.08,scaleY:0.08},0).wait(1).to({scaleX:0.13,scaleY:0.13,y:44.8},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:0.2,y:44.7},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:44.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:0.3,y:44.3},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:0.4,y:44.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,y:43.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:0.5,y:43.8},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({regX:22.9,regY:38.1,scaleX:1,scaleY:1,x:-0.1,y:46.1},0).wait(7).to({regX:21.7,scaleX:0.04,x:0},5).to({_off:true},1).wait(267));

	// Layer 6
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(0,45,0.063,0.05,0,0,0,22.3,38);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(1).to({regX:23.1,regY:36.1,scaleX:0.07,scaleY:0.06,x:0.1,y:44.9},0).wait(1).to({scaleX:0.1,scaleY:0.09},0).wait(1).to({scaleX:0.16,scaleY:0.15,y:44.8},0).wait(1).to({scaleX:0.26,scaleY:0.25,y:44.7},0).wait(1).to({scaleX:0.42,scaleY:0.42,y:44.6},0).wait(1).to({scaleX:0.63,scaleY:0.62,y:44.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,y:44.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,y:44.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,y:44.2},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({regX:22.2,regY:38.1,scaleX:1,scaleY:1,x:-0.8,y:46.1},0).wait(9).to({scaleX:0.01,x:-0.7},5).to({_off:true},1).wait(285));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Бизнеснастарт = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol12();
	this.instance.setTransform(0.3,45,0.07,0.07,0,0,0,159.7,43.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(169).to({_off:false},0).wait(1).to({regX:155.3,regY:33.8,scaleX:0.08,scaleY:0.08,x:0.1,y:44.3},0).wait(1).to({scaleX:0.09,scaleY:0.09,x:0},0).wait(1).to({scaleX:0.12,scaleY:0.12},0).wait(1).to({scaleX:0.17,scaleY:0.17,x:-0.1},0).wait(1).to({scaleX:0.25,scaleY:0.25},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:-0.2,y:44.2},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:-0.4},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:-0.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:-0.7},0).wait(1).to({scaleX:0.88,scaleY:0.88},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:-0.8},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:-0.9,y:44.1},0).wait(1).to({regX:159.5,regY:44,scaleX:1,scaleY:1,x:3.5,y:54},0).wait(43).to({alpha:0},11).to({_off:true},1).wait(102));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_154 = new cjs.Graphics().p("AcOGWMg4pgBwQhkgDADhkIAImlQADhkBkADMA4qABwQBjADgDBkIgIGlQgDBhheAAIgGAAg");
	var mask_graphics_155 = new cjs.Graphics().p("AcFGWMg4XgBvQhkgEADhkIAImkQAEhlBjADMA4XABwQBkADgDBkIgIGkQgDBiheAAIgGAAg");
	var mask_graphics_156 = new cjs.Graphics().p("AbmGVMg3agBtQhhgDADhlIAImkQADhkBiADMA3aABtQBhADgDBlIgIGkQgDBhhcAAIgGAAg");
	var mask_graphics_157 = new cjs.Graphics().p("AarGVMg1kgBrQhegDADhkIAImkQADhkBfACMA1kABrQBeADgDBkIgIGkQgDBihZAAIgGAAg");
	var mask_graphics_158 = new cjs.Graphics().p("AZLGTMgykgBkQhagDAEhlIAImkQADhkBaADMAykABkQBaADgEBlIgIGjQgDBihVAAIgFAAg");
	var mask_graphics_159 = new cjs.Graphics().p("AW6GRMguCgBcQhSgDAEhkIAJmkQADhkBRACMAuCABcQBSADgEBkIgJGkQgDBihNAAIgEAAg");
	var mask_graphics_160 = new cjs.Graphics().p("AToGOMgnggBQQhFgCADhkIAKmkQADhkBGACMAngABQQBFACgDBkIgKGkQgDBihDAAIgDAAg");
	var mask_graphics_161 = new cjs.Graphics().p("APVGJI+6g+Qg3gCAEhkIALmjQADhlA2ACIe6A/QA3ACgEBkIgLGjQgDBig1AAIgBAAg");
	var mask_graphics_162 = new cjs.Graphics().p("AKoGFI1igtQgmgBADhkIAMmjQAEhkAmACIViAsQAmABgDBkIgMGjQgEBjglAAIgBAAg");
	var mask_graphics_163 = new cjs.Graphics().p("AGnGAIthgcQgYAAADhkIANmjQAEhkAYABINhAcQAYABgDBkIgNGiQgEBjgXAAIgBAAg");
	var mask_graphics_164 = new cjs.Graphics().p("ADvF9InxgQQgOAAADhkIAOmiQADhkAOAAIHxAQQAOABgDBkIgOGiQgDBjgOAAIAAAAg");
	var mask_graphics_165 = new cjs.Graphics().p("AB2F7IkAgIQgHAAADhkIAOmiQAEhkAHAAIEAAIQAHABgDBkIgOGiQgEBjgHAAIAAAAg");
	var mask_graphics_166 = new cjs.Graphics().p("AAtF6IhugEQgEAAAEhkIAOmhQAEhkADAAIBuADQAEABgEBjIgOGiQgEBkgDAAIAAAAg");
	var mask_graphics_167 = new cjs.Graphics().p("AAHF5IgjgBQgBAAADhkIAPmhQAEhkABAAIAjABQABAAgDBkIgPGiQgEBjgBAAIAAAAg");
	var mask_graphics_168 = new cjs.Graphics().p("AgCF6IgPgBIADhkIAOmiIADhkIAPABIgDBkIgPGiIgCBkIAAAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(154).to({graphics:mask_graphics_154,x:4.5,y:40.7}).wait(1).to({graphics:mask_graphics_155,x:4.5,y:40.6}).wait(1).to({graphics:mask_graphics_156,x:4.4,y:40.6}).wait(1).to({graphics:mask_graphics_157,x:4.2,y:40.5}).wait(1).to({graphics:mask_graphics_158,x:4,y:40.4}).wait(1).to({graphics:mask_graphics_159,x:3.7,y:40.1}).wait(1).to({graphics:mask_graphics_160,x:3.2,y:39.8}).wait(1).to({graphics:mask_graphics_161,x:2.5,y:39.4}).wait(1).to({graphics:mask_graphics_162,x:1.8,y:38.9}).wait(1).to({graphics:mask_graphics_163,x:1.2,y:38.5}).wait(1).to({graphics:mask_graphics_164,x:0.8,y:38.2}).wait(1).to({graphics:mask_graphics_165,x:0.5,y:38}).wait(1).to({graphics:mask_graphics_166,x:0.3,y:37.9}).wait(1).to({graphics:mask_graphics_167,x:0.2,y:37.8}).wait(1).to({graphics:mask_graphics_168,x:0.2,y:37.8}).wait(1).to({graphics:null,x:0,y:0}).wait(171));

	// Layer 1
	this.instance_1 = new lib.Symbol10();
	this.instance_1.setTransform(10.9,54.6,1.093,1.093,0,0,0,177.8,29.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({_off:false},0).wait(1).to({regX:172.6,regY:21.2,scaleX:1.09,scaleY:1.09,x:5.2,y:45.5,alpha:0.01},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.047},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:45.6,alpha:0.121},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:5.3,alpha:0.253},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:5.4,y:45.8,alpha:0.456},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:5.5,y:45.9,alpha:0.683},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:5.6,y:46.1,alpha:0.849},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.943},0).wait(1).to({scaleX:1,scaleY:1,y:46.2,alpha:0.988},0).wait(1).to({regX:177.8,regY:29.5,scaleX:1,scaleY:1,x:10.8,y:54.5,alpha:1},0).to({_off:true},60).wait(171));

	// Layer 10
	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(0.2,45,0.004,1,0,2,1.9,187.7,31.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).wait(1).to({regX:191.8,regY:31,scaleX:0.01,y:44.6},0).wait(1).to({scaleX:0.02,x:0.3},0).wait(1).to({scaleX:0.05,x:0.4},0).wait(1).to({scaleX:0.1,scaleY:1,x:0.6},0).wait(1).to({scaleX:0.17,x:0.9},0).wait(1).to({scaleX:0.27,skewX:1.9,skewY:1.8,x:1.4},0).wait(1).to({scaleX:0.41,scaleY:1,x:2},0).wait(1).to({scaleX:0.57,scaleY:1,x:2.7},0).wait(1).to({scaleX:0.72,scaleY:1,rotation:1.8,skewX:0,skewY:0,x:3.3},0).wait(1).to({scaleX:0.83,x:3.7},0).wait(1).to({scaleX:0.9,scaleY:1,x:4.1},0).wait(1).to({scaleX:0.95,x:4.3},0).wait(1).to({scaleX:0.98,x:4.5},0).wait(1).to({regX:187.6,regY:31.3,scaleX:1,x:0.4,y:44.8},0).wait(56).to({regX:191.8,regY:31,scaleX:1,x:4.6,y:44.6},0).wait(1).to({scaleX:0.98,x:4.5},0).wait(1).to({scaleX:0.95,x:4.4},0).wait(1).to({scaleX:0.89,x:4.1},0).wait(1).to({scaleX:0.81,scaleY:1,x:3.7,y:44.5},0).wait(1).to({scaleX:0.7,x:3.2,y:44.6},0).wait(1).to({scaleX:0.55,scaleY:1,rotation:0,skewX:1.9,skewY:1.8,x:2.6,y:44.5},0).wait(1).to({scaleX:0.38,scaleY:1,x:1.9,y:44.6},0).wait(1).to({scaleX:0.24,scaleY:1,x:1.3},0).wait(1).to({scaleX:0.14,skewX:2,skewY:1.9,x:0.8},0).wait(1).to({scaleX:0.07,scaleY:1,x:0.6},0).wait(1).to({scaleX:0.03,x:0.3},0).wait(1).to({scaleX:0.01},0).wait(1).to({regX:187.7,regY:31.3,scaleX:0,x:0.2,y:45},0).to({_off:true},1).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


// stage content:



(lib.Bank_neyva = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(340));

	// url
	this.btnMain = new lib.url();
	this.btnMain.setTransform(-214.7,35.6,2.7,0.339,0,0,0,0.1,0.3);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.url(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(340));

	// Секундомер
	this.instance = new lib.Символ3();
	this.instance.setTransform(905,201,1,1,0,0,0,65,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225).to({x:1082.6,y:205},10).wait(105));

	// 321
	this.instance_1 = new lib.Бизнеснастарт();
	this.instance_1.setTransform(657.6,68.8);

	this.instance_2 = new lib._321();
	this.instance_2.setTransform(620,75.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},339).wait(1));

	// Слой 5
	this.instance_3 = new lib.Синий();
	this.instance_3.setTransform(218.3,-66.9,1.837,1.837,0,0,0,-300.3,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(340));

	// Слой 2
	this.instance_4 = new lib.Символ2();
	this.instance_4.setTransform(285,126,1,1,0,0,0,285,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(221).to({x:65.1},14,cjs.Ease.get(1)).wait(94).to({alpha:0},10).wait(1));

	// Слой 1
	this.instance_5 = new lib.Символ1();
	this.instance_5.setTransform(485,125.5,1,1,0,0,0,485,125.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(340));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-46.7,1509.1,422.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;