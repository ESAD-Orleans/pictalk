// baliseimage
// 2014
// main RequireJS Module
//
require.config({
	paths: {
		//
		'text': 'vendor/requirejs-plugins/text',
		//
		'jquery': 'vendor/jquery/jquery',
		'backbone': 'vendor/backbone/backbone',
		'underscore': 'vendor/underscore/underscore',
		//
		'underscore.string':'vendor/underscore.string/underscore.string',
		'Sortable':'vendor/Sortable/Sortable',
		//
		'router':'app/router'
		//
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'underscore.string':{
			deps:['underscore']
		},
		'Sortable':{
			exports:'Sortable'
		}

	}
})
require(['app/main']);
