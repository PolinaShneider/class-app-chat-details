module.exports = function(){

	var menuHide = function(el){

		var targetShown = document.querySelector(".show-menu");

	    if (!menu.contains(el.target)) {
	        targetShown.classList.remove('show-menu');

	    }
			    
	}

	var menuToggle = function(event){
		event.stopPropagation();
		menu.classList.toggle("show-menu");
	}

	return {
		menuHide : menuHide,
		menuToggle : menuToggle
	}

}({})