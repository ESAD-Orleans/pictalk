// pictalk
// 2014
// AppView Backbone View
//
define(['router','underscore', 'jquery', 'backbone', 'views/MainMenuView', 'views/EditorView', 'models/EditorModel',  'text!templates/App.html'], function (router, _, $, Backbone, MainMenuView, EditorView, EditorModel, template) {
	return Backbone.View.extend({
		el:'body',
		template: _.template(template),
		events:{
		},
		initialize:function(){
			this.render();
			new MainMenuView();
			new EditorView({model:new EditorModel()});
			Backbone.history.start();//{pushState:true});
			router.go(Backbone.history.fragment);
		},
		render:function(){
			this.$el.html(this.template(this));
		}
	});
});