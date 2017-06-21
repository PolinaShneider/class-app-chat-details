module.exports = function(){

	var init = function(){

		menuButton = document.getElementById("menu-button");
		menu = document.getElementById("menu");

		menuButton.addEventListener('click', menuToggle);
	};

	var menuToggle = function(event){
		event.stopPropagation();
		menu.classList.toggle("show-menu");
		menu.classList.toggle("hide-menu");
	}

	return {
		init : init
	}

}({})