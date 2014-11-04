// Плагин для окраски первого слова в заголовках
(function($) {
	$.fn.colorized = function(){
		var str = this.text();
    	var splited = str.split(' ');
    	var replaced = str.split(splited[0]).join('<span class = "title--first-word-color">' + splited[0] + '</span>');
		this.html(replaced);
};
})(jQuery);