var NOPRO_160x600_RTWStyle1Col0317 = Project_Base.extend({
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //private var
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //---------------------------------------------------------
	  //Number
	  //---------------------------------------------------------
	  width:undefined,
	  height:undefined,
	  firstLoad:true,
	  //---------------------------------------------------------
	  //---------------------------------------------------------
	  //Boolean
	  //---------------------------------------------------------
	  callStart:true,
	  //---------------------------------------------------------
	  //String
	  //---------------------------------------------------------
	  traceID:undefined,
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Constructor
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  init:function(obj, init_preStart) {
		  this._super(obj, false);
	  },
	  //------------------------------------------------------------------------------------- 
	  div_CFG:function() {
		  this._super();
	  },
	  //------------------------------------------------------------------------------------- 
	  visibility_CFG:function() {	
		//--------------------------------------
		$elm = this.$div.find(".item_0");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		$elm = this.$div.find(".lockup");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		$elm = this.$div.find(".lockup *");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		$elm = this.$div.find(".Macys_svg.black");
		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		$elm = this.$div.find(".Macys_svg.black #shell");
		TweenLite.set($elm, {opacity:1, scale:.915, x:11, y:552});
		//--------------------------------------
		$elm = this.$div.find(".bottom");
 		TweenLite.set($elm, {opacity:1});
		//--------------------------------------
		},
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  //Methods
	  ///////////////////////////////////////////////////////////////////////////////////////
	  ///////////////////////////////////////////////////////////////////////////////////////
	  step_0:function() {
		//--------------------------------------
		//Init var
		//--------------------------------------
		var delay = .1;
    	var state = 0;
		var dur = dur;
		var $elm;
		//--------------------------------------
		$elm = this.$div.find(".item_0");
	    TweenLite.set($elm, {opacity:1, scaleX:1});
		TweenLite.from($elm, 1, {delay:delay, opacity:1, ease:Power4.easeOut});
		//--------------------------------------
		TweenLite.set($elm, {scale:1.1});
		TweenLite.from($elm, 9, {delay:delay,  scale:1, ease:Quad.easeInOut});			
		//--------------------------------------
		// building lockup
		//--------------------------------------
		$elm = this.$div.find(".lockup");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 1, {delay:delay, opacity:1});
		//--------------------------------------
		$elm = this.$div.find(".lockup .outline_1");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0});
		//--------------------------------------
		delay += 0.2;	
		$elm = this.$div.find(".lockup .outline_2");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0});
		//--------------------------------------		
		delay += .2;
		$elm = this.$div.find(".text_3");
 		TweenLite.set($elm, {opacity:1, x:0});
		TweenLite.from($elm, 2, {delay:delay, opacity:0, x:0, ease:Expo.easeInOut});			
		//--------------------------------------				
		delay += .2;
		//--------------------------------------		
		$elm = this.$div.find(".text_0");
 		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0, ease:Expo.easeInOut});
		//--------------------------------------
		delay += 3;
 	  	TweenLite.delayedCall(delay, $.proxy(this.step_1, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  step_1:function() {
	  	//--------------------------------------
		var delay = .1;
		//--------------------------------------	
		$elm = this.$div.find(".text_0");
		TweenLite.set($elm, {x:0, y:0});
		TweenLite.to($elm, 3, {delay:delay, /*x:4, y:-11,*/ color:0xffffff, ease:Expo.easeInOut});				
		//--------------------------------------
		$elm = this.$div.find(".text_3");
		TweenLite.to($elm, 3, {delay:delay, color:0xffffff, ease:Expo.easeInOut});				
		//--------------------------------------
		$elm = this.$div.find(".item_0");
		TweenLite.to($elm, 3, {delay:delay, opacity:0, ease:Expo.easeInOut});				
		//--------------------------------------
		delay += .5;		
		//--------------------------------------		
		$elm = this.$div.find(".item_1");
	    TweenLite.set($elm, {opacity:1, x:0});
		TweenLite.from($elm, 3, {delay:delay, opacity:0,  ease:Expo.easeInOut});				
		//--------------------------------------
		TweenLite.set($elm, {scale:1.1});
		TweenLite.from($elm, 9, {delay:delay,  scale:1,  ease:Quad.easeInOut});							
		//--------------------------------------
		delay += 5;
 	    TweenLite.delayedCall(delay, $.proxy(this.step_2, this));
	  },
	  //------------------------------------------------------------------------------------- 
	  step_2:function() {
	  	//--------------------------------------
		var delay = .1;
		//--------------------------------------
		$elm = this.$div.find(".item_1");
		TweenLite.to($elm, 3, {delay:delay, opacity:0,  ease:Expo.easeInOut});				
		//--------------------------------------	
		$elm = this.$div.find(".text_0");
		TweenLite.to($elm, 3, {delay:delay, opacity:0,  ease:Expo.easeInOut});
		//--------------------------------------
		$elm = this.$div.find(".Macys_svg.black #shell path:nth-child(2)");
		TweenLite.set($elm, {opacity:1});
		TweenLite.to($elm, 1, {delay:delay, opacity:1, fill:0xffffff, ease:Expo.easeInOut});	
		//--------------------------------------
		delay += .5;
		//--------------------------------------		
		$elm = this.$div.find(".item_2");
	    TweenLite.set($elm, {opacity:1, x:0});
		TweenLite.from($elm, 3, {delay:delay, opacity:0, ease:Expo.easeInOut});
		//--------------------------------------		
		$elm = this.$div.find(".text_1");
 		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 3, {delay:delay, opacity:0, ease:Expo.easeInOut});	
		//--------------------------------------
	  },
	  //-------------------------------------------------------------------------------------
	  mouseover:function(e) {
	}
});