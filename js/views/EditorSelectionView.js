// pictalk
// 2014
// EditorSelectionView Backbone View
//
define(['underscore', 'jquery', 'backbone','router','text!templates/EditorSelection.html', 'Sortable'], function (_, $, Backbone, router, template, Sortable) {
	return Backbone.View.extend({

		template: _.template(template),
		events:{
			'submit':'submit',
			'click .delete':'deleteChar'
		},
		initialize:function(){
			this.model.on('all',this.router,this);
			this.render();
		},
		render:function(){
			// remove previous sortable
			if (this.sortable) {
				this.sortable.destroy();
			}
			this.$el.html(this.template(this.model));
			this.sortable =
			new Sortable(this.$el.find('.prompt').get(0),{
				animation:150,
				handle:'.char',
				draggable:'.char-box',
				onStart: $.proxy(this.startSortable,this),
				onUpdate: $.proxy(this.updateSortable,this)
			})
		},
		startSortable:function(e) {
			var t = $(e.target);
			t.data('index', t.index());
		},
		updateSortable:function(e){
			var t = $(e.target);
			this.model.moveIndex(t.data('index'), t.index());
		},
		router:function(e,a,b){
			switch(e){
				case 'change:message':
					this.render();
			}
		},
		deleteChar:function(e){
			var i = $(e.currentTarget).parent().index();
			this.model.removeIndex(i);
		},
		submit:function(){
			router.go(router.PATHS.SHARE+'/'+this.model.message());
			return false;
		}

	});
});