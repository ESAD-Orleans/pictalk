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
			if(!_.isUndefined(s)){this.set('message',s)}
			return this.get('message');
		},
		messageLetters:function(){
			return _(this.message().split(''));
		},
		messageHexEncoded:function() {
			var hexMessage = "",
				hexChar = 0;
			_(this.message()).each(function(char,i){
				var code = char.charCodeAt(0)-58880+1,
					hex = code.toString(16);
				// encode on 12 bytes
				hexMessage+= (hex.length<2?'0':'')+hex;//console.log(hexPad);
			});
			return hexMessage;
		},
		addChar:function(c){
			this.message(this.message()+c);
		},
		removeIndex:function(i){
			var m = this.message();
			this.message(_.str.splice(m, i, 1));
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