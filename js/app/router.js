// pictalk
// 2014
// router RequireJS Module
//
define(['backbone'], function (Backbone) {

	var PATHS = {
		PAGE : 'page:',
		HOME : 'home',
		CREATE : 'create',
		ME : 'me',
		HELP : 'help',
		ABOUT : 'about'
	};

	var Router = Backbone.Router.extend({

		PATHS: PATHS,

		routes:{
			'': PATHS.PAGE+PATHS.HOME,
			'create': PATHS.CREATE,
			'me': PATHS.ME,
			'help': PATHS.PAGE+PATHS.HELP,
			'about': PATHS.PAGE +PATHS.ABOUT
		},
		go:function(route){
			this.navigate(route,{trigger:true})
		}
	})

	return new Router();
});