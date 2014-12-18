// pictalk
// 2014
// AppView Backbone View
//
define(['router','underscore', 'jquery', 'backbone', 'views/MainMenuView', 'views/EditorView', 'views/ShareView', 'views/PageView', 'models/EditorModel',  'text!templates/App.html'], function (router, _, $, Backbone, MainMenuView, EditorView, ShareView, PageView, EditorModel, template) {
	return Backbone.View.extend({
		el:'body',
		template: _.template(template),
		events:{
		},
		initialize:function(){
			this.render();
			new MainMenuView();
			router.bind('route:page',this.route,this);
			Backbone.history.start();//{pushState:true});
			router.go(Backbone.history.fragment);
		},
		route:function(r,options, parameters){
			var view = null;
			//console.log(r, options, parameters);

			switch(r){
					//
					//
					//
				case router.PATHS.CREATE:
					this.display(EditorView,{model: new EditorModel()});
					break;
					//
					//
					//
				case router.PATHS.SHARE:
					this.display(ShareView,{message:options})
					break;
					//
					//
					//
				case null :
					// force home route
					r = router.PATHS.HOME;
				case router.PATHS.ABOUT :
				case router.PATHS.HELP :
					this.display(PageView,{pagename:r});
					break;
			}
		},
		display:function(View,options){
			this.mainView = new View(options);
		},
		render:function(){
			this.$el.html(this.template(this));
		}
	});
});