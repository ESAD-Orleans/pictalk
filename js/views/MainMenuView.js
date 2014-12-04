// pictalk
// 2014
// MainMenuView Backbone View
//
define(['underscore', 'jquery', 'backbone', 'router', 'text!templates/MainMenu.html'], function (_, $, Backbone, router, template) {
	return Backbone.View.extend({

		el:'#mainmenu',
		template: _.template(template),
		events:{
			'click .menu':'navigate'
		},
		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template(this.model));
			return this;
		},
		navigate:function(e){
			router.go($(e.currentTarget).attr('href'));
			return false;
		}

	});
});