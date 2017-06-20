module.exports = function(){

	var menuHide = function(el){

		var targetShown = document.querySelector(".show-menu");


	    if (targetShown && !menu.contains(el.target)) {
	        targetShown.classList.remove("show-menu");
	        targetShown.classList.add("hide-menu");

	    }
			    
	}

	var menuToggle = function(event){
		event.stopPropagation();
		menu.classList.toggle("show-menu");
		menu.classList.toggle("hide-menu");
	}

	return {
		menuHide : menuHide,
		menuToggle : menuToggle
	}

}({})