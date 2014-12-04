// pictalk
// 2014
// EditorView Backbone View
//
define(['underscore', 'jquery', 'backbone', 'router', 'views/EditorSelectionView', 'text!templates/Editor.html'], function (_, $, Backbone,router, EditorSelectionView, template) {
	return Backbone.View.extend({
		template: _.template(template),
		el:'#main',
		events:{
			'click .characters-set .char':'clickChar',
			'submit .char-box form':'submitChar'
		},
		initialize:function(){
			//
			router.on('route',this.route,this);
			//
			this.render();

		},
		render:function(){
			this.$el.html(this.template(this.model));
			new EditorSelectionView({model: this.model, el: this.$('#editorselection')});
		},
		route:function(route){
			switch(route){
				case router.PATHS.CREATE :
					this.render();
					break;
				default:
					//console.log(route);
			}
		},
		submitChar:function(e){
			var content = $('input.content', e.currentTarget),
				code = $('input.code', e.currentTarget).val();
			content.val('');
			this.model.addChar(code);
			return false;
		},
		clickChar:function(e){
			this.model.addChar($(e.currentTarget).text());
		}

	});
});