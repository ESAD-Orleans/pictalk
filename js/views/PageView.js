// pictalk
// 2014
// PageView Backbone View
//
define(['underscore', 'jquery', 'backbone',
	'text!templates/pages/home.html',
	'text!templates/pages/help.html',
	'text!templates/pages/about.html',
	'text!templates/pages/me.html'
], function (_, $, Backbone) {
	return Backbone.View.extend({
		el:'#main',
		template: _.template('<div class="page <%= pagename %>"><%= content %></div>'),
		initialize:function(o){
			console.log(o)
			this.options = o;
			this.render();
		},
		render:function(){
			var content = require('text!templates/pages/'+this.options.pagename+'.html');
			this.$el.html(this.template({pagename:this.options.pagename,content:_.template(content)()}));
		}
	});
});