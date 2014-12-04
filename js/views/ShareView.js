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
			this.$el.html(this.template(this));
		}
	});
});