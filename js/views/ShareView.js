// pictalk
// 2014
// ShareView Backbone View
//
define(['underscore', 'jquery', 'backbone', 'text!templates/Share.html'], function (_, $, Backbone,template) {
	return Backbone.View.extend({
		el: '#main',
		template: _.template(template),
		initialize:function(o){
			this.options = o;
			this.render();
		},
		render:function(){
			var messageDecoded = "", m = this.options.message;
			for(var i=0; i< m.length; i+=2){
				var charCode = String.fromCharCode(Number('0x'+m.charAt(i)+m.charAt(i+1))+ 58880-1);
				messageDecoded+= charCode;
			}
			this.message = messageDecoded;
			this.$el.html(this.template(this));
		}
	});
});