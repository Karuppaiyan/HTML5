var MSC_300x600_Videos1116 = Project_Base.extend({
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
	  	$elm = this.$div;
		TweenLite.set($elm, { borderTopColor:"#bbbbbb", borderRightColor:"#bbbbbb", borderBottomColor:"#bbbbbb", borderLeftColor:"#bbbbbb"});
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
	    TweenLite.set($elm, {opacity:1, scale:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0, ease:Quad.easeInOut});
		//--------------------------------------
		TweenLite.set($elm, {scale:1.1});
		TweenLite.from($elm, 9, {delay:delay, scale:1, ease:Linear.easeIn});
		//--------------------------------------
		delay += .2;	
		$elm = this.$div.find(".lockup_0");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0,  y:"40", ease:Expo.easeOut});	
		//--------------------------------------
		$elm = this.$div.find(".OnlyMacys_svg.white");
		TweenLite.set($elm, {opacity:1});
		
		delay += 0.2;
		$elm = this.$div.find(".OnlyMacys_svg.white #shell");
		TweenLite.set($elm, {opacity:1, scale:.850, x:98, y:558});
		TweenLite.from($elm,1, {delay:delay, opacity:0, ease:Quad.easeOut});
		//--------------------------------------
		delay += 2;
	    TweenLite.delayedCall(delay, $.proxy(this.step_1, this));	  
	  },
	 	//------------------------------------------------------------------------------------- 
	  step_1:function() {
	  	//--------------------------------------
		//Remove 1st Frame
		var delay = .1;
		//--------------------------------------
		$elm = this.$div.find(".item_1");
	    TweenLite.set($elm, {opacity:1, scale:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0, ease:Quad.easeInOut});
		//--------------------------------------
		TweenLite.set($elm, {scale:1.1});
		TweenLite.from($elm, 9, {delay:delay, scale:1, ease:Linear.easeIn});
		//--------------------------------------
		$elm = this.$div.find(".item_0");
		TweenLite.to($elm, 2, {delay:delay, opacity:0, ease:Quad.easeInOut});
		//--------------------------------------
		delay += 2.5;
		TweenLite.delayedCall(delay, $.proxy(this.step_2, this));
	  },
	 	//------------------------------------------------------------------------------------- 
	  step_2:function() {
	  	//--------------------------------------
		//Remove 1st Frame
		var delay = .1;
		//--------------------------------------
		$elm = this.$div.find(".item_1");
		TweenLite.to($elm, 2, {delay:delay, opacity:0, ease:Quad.easeInOut});
		//--------------------------------------				
		delay += .1;
		$elm = this.$div.find(".rect_0");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2, {delay:delay, y:650,  ease:Expo.easeInOut});	
		//--------------------------------------
		delay += 1;		
		$elm = this.$div.find(".text_0");
		TweenLite.set($elm, {opacity:1, scale:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0,   ease:Quad.easeOut});
		//--------------------------------------
		delay += 0.1;
		$elm = this.$div.find(".text_1");
		TweenLite.set($elm, {opacity:1, scale:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0,  ease:Quad.easeOut});
		//--------------------------------------
		delay += 0.2;
		$elm = this.$div.find(".OnlyMacys_svg.white #shell");
		TweenLite.set($elm, {scale:.850, x:98, y:558});
		TweenLite.to($elm, .5, {delay:delay, x:18,  ease:Quad.easeOut});
		//--------------------------------------
		delay += .1;
		$elm = this.$div.find(".item_2");
	    TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0, ease:Quad.easeInOut});	
		//--------------------------------------
		delay += 0.5;
		$elm = this.$div.find(".text_2");
		TweenLite.set($elm, {opacity:1, scale:1});
		TweenLite.from($elm, 2, {delay:delay, opacity:0, ease:Quad.easeOut});
		//--------------------------------------
		delay += .2;
		$elm = this.$div.find(".bottom");
		TweenLite.set($elm, {opacity:1});
		TweenLite.from($elm, 1, {delay:delay, opacity:0,  ease:Quad.easeInOut});
	    //--------------------------------------		
		},
	 	//-------------------------------------------------------------------------------------
	  mouseover:function(e) {
	}
});