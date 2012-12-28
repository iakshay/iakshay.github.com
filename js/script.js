document.addEventListener('DOMContentLoaded', function() {
	var $ = function(q){
		return document.querySelectorAll(q);
	}

	var searchBtn = $('.search-btn')[0],
		   search = $('.search')[0],
		     list = $('nav ul')[0],
			  nav = $('nav')[0];
	var f = 0;
	searchBtn.addEventListener('click', function(){
		if(f) return;
		f ++;
		nav.classList.add('hideNav');
		setTimeout(function(){
			f--;
			list.classList.toggle('face');
			search.classList.toggle('face');
			nav.classList.remove('hideNav');
		}, 800);
	}, false);

});