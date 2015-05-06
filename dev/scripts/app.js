$(document).ready(function() {

	$('.title').each(function(index, element) {
	    var heading = $(element), word_array, last_word, first_part;

	    word_array = heading.html().split(/\s+/); // split on spaces
	    last_word = word_array.pop();             // pop the last word
	    first_part = word_array.join(' ');        // rejoin the first words together

	    heading.html([first_part, ' <span class="title--word-color">', last_word, '</span>'].join(''));
	});

	$(window).scroll(function() {
		var top = $(document).scrollTop();
	    
	    if (top > 0) {
	    	$(".header__top").addClass("header__top--fixed");
	    } else {
	    	$(".header__top").removeClass("header__top--fixed");
	    }
	});

});
