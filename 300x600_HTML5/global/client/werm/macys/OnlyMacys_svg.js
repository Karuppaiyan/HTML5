	var OnlyMacys_svg_cls = Svg.extend({
		///////////////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////////////
		//private var
		///////////////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////////////
		//---------------------------------------------------------
		//Number
		//---------------------------------------------------------
		color: "",
		strokeWidth:0.8,
		classID:"OnlyMacys_svg",
		///////////////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////////////
		//static methods
		///////////////////////////////////////////////////////////////////////////////////////
		///////////////////////////////////////////////////////////////////////////////////////
		go:function($elm, obj) {
			return new OnlyMacys_svg_cls($elm, obj);
		},
		//------------------------------------------------------------------------------------- 
		start:function() {
			if (this.$elm.hasClass('white')) {
			   this.color = "white";
			}else{ 
			   this.color = "black"; 
			}

		},
		//------------------------------------------------------------------------------------- 
		output_CFG:function() {
			this.output = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="'+this.width+'" height="'+this.height+'" viewBox="0 0 '+this.width+' '+this.height+'" enable-background="new 0 0 193.469 42.75" xml:space="preserve"><g id="'+this.id+'"><polygon id="star" fill="#E01A2B" points="59.941,13.708 45.605,13.708 57.196,22.179 52.772,35.885 64.375,27.412 75.975,35.885 71.547,22.179 83.142,13.708 68.805,13.708 64.374,0 "/><path fill="'+this.color+'" stroke="'+this.color+'" stroke-width="'+this.strokeWidth+'" stroke-miterlimit="10" d="M105.352,18.627v8.514h-0.838v-8.273c0-2.789-1.949-4.678-4.404-4.678c-2.46,0-4.411,1.89-4.411,4.678v8.273h-0.838v-8.273c0-2.789-1.949-4.678-4.408-4.678c-2.457,0-4.405,1.89-4.405,4.678v8.273h-0.837V13.712h0.837v2.456h0.06c0.63-1.769,2.246-2.757,4.345-2.757c2.43,0,4.14,1.32,4.826,3.178c0.689-1.858,2.4-3.178,4.831-3.178C103.344,13.411,105.352,15.749,105.352,18.627z M119.115,13.712h0.84v13.429h-0.84v-3.54h-0.061c-1.048,2.281-3.419,3.84-6.146,3.84c-3.896,0-7.044-3.148-7.044-7.015c0-3.868,3.147-7.016,7.044-7.016c2.727,0,5.127,1.557,6.146,3.867h0.061V13.712z M119.115,20.427c0-3.447-2.789-6.237-6.207-6.237c-3.417,0-6.202,2.79-6.202,6.237c0,3.445,2.786,6.232,6.202,6.232C116.326,26.659,119.115,23.872,119.115,20.427z M127.503,14.189c2.463,0,4.62,1.469,5.607,3.657h0.842c-0.692-2.126-3.031-4.435-6.449-4.435c-3.895,0-7.042,3.147-7.042,7.016c0,3.866,3.147,7.015,7.042,7.015c3.418,0,5.757-2.31,6.449-4.438h-0.842c-0.987,2.187-3.145,3.656-5.607,3.656c-3.416,0-6.205-2.787-6.205-6.232C121.298,16.979,124.087,14.189,127.503,14.189z M144.173,13.712l-5.069,12.527l-5.031-12.527h-0.842l5.369,13.309c0.025,0.06,0.056,0.121,0.056,0.211c0,0.061-0.119,0.417-0.33,0.929l-1.559,3.958h0.842l7.407-18.406H144.173z M145.222,12.662l1.051-0.721l1.046,0.721l-0.386-1.2l1.019-0.779h-1.26l-0.418-1.2l-0.421,1.2h-1.257l1.016,0.779L145.222,12.662z M145.91,16.768c0-1.499,1.17-2.579,2.609-2.579c1.41,0,2.58,1.08,2.58,2.579h0.84c-0.062-1.857-1.532-3.357-3.42-3.357c-1.919,0-3.45,1.5-3.45,3.357c0,4.346,6.569,2.818,6.569,6.833c0,1.501-1.08,3.058-3.355,3.058c-1.802,0-3.36-1.705-3.36-3.716h-0.842c0,2.31,1.829,4.499,4.379,4.499c2.549,0,4.018-1.949,4.018-3.717C152.478,18.808,145.91,20.366,145.91,16.768z M12.409,15.414c1.27,1.266,2.034,3.031,2.034,5.04c0,2.018-0.764,3.786-2.034,5.049c-1.271,1.259-3.045,2.017-5.062,2.017s-3.792-0.757-5.062-2.017c-1.271-1.263-2.035-3.032-2.035-5.049c0-2.008,0.764-3.773,2.035-5.04c1.27-1.266,3.045-2.027,5.062-2.027S11.138,14.148,12.409,15.414z M13.622,20.453c-0.001-3.605-2.698-6.305-6.275-6.306c-3.578,0-6.274,2.7-6.275,6.306c0.001,3.605,2.698,6.302,6.275,6.303C10.924,26.755,13.621,24.059,13.622,20.453z M25.83,14.737c-1.067-0.894-2.489-1.35-4.209-1.35l-0.151-0.002c-2.056,0.001-4.344,0.98-5.203,2.844v-2.516h-0.77h-0.052V27.19h0.769h0.053v-7.748c0.004-3.331,2.031-5.239,5.355-5.295c1.35,0,2.719,0.325,3.737,1.248c0.992,0.896,1.618,2.367,1.618,4.679v7.116h0.77h0.052v-7.116C27.798,17.668,27.154,15.861,25.83,14.737z M29.748,8.425V27.19h0.769h0.053v-0.053V8.425h-0.768H29.748z M42.632,13.713l-5.235,12.311l-4.908-12.311h-0.817h-0.078l5.316,13.409l-2.196,4.999h0.888l0,0l7.976-18.408h-0.911H42.632z"/></g></svg>';
		}
	});
	
	var OnlyMacys_svg = new OnlyMacys_svg_cls();
	$(document).ready($.proxy(OnlyMacys_svg.comb, OnlyMacys_svg));