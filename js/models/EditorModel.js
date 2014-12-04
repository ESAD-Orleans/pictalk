// pictalk
// 2014
// EditorModel Backbone Model
//
define(['underscore', 'jquery', 'backbone', 'underscore.string'], function (_, $, Backbone) {
	return Backbone.Model.extend({
		defaults:{
			message:'',
			selectionStart:0,
			selectionEnd:0
		},
		message:function(s){
			if(s){this.set('message',s)}
			return this.get('message');
		},
		messageLetters:function(){
			return _(this.message().split(''));
		},
		addChar:function(c){
			this.message(this.message()+c);
		},
		removeIndex:function(i){
			var m = this.message();
			this.message(m.slice(0,i)+ m.slice(i + 1, m.length));
		},
		moveIndex:function(from,to){
			var m = this.message(),
				c = m.charAt(from),
				rm = m.slice(0, from) + m.slice(from + 1, m.length),
				am = rm.slice(0,to)+ c +rm.slice(to,rm.length);
			this.message(am);
		}
	});
});