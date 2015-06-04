// pictalk
// 2014
// router RequireJS Module
//
define(['backbone'], function (Backbone) {

	var PATHS = {
		PAGE : 'page:',
		HOME : 'home',
		CREATE : 'create',
		SHARE : 'share',
		ME : 'me',
		HELP : 'help',
		ABOUT : 'about',
		PREVIEW : 'create/preview/:preview'
	};

	var Router = Backbone.Router.extend({

		PATHS: PATHS,

		routes:{
			'': 'page',
			':page/:option':'page',
			':page':'page'
		},
		go:function(route){
			this.navigate(route,{trigger:true})
		}
	});

	return new Router();
});