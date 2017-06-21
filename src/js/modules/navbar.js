module.exports = function(){

	var init = function(){

		profileButton = document.getElementById("profile-button");
		dropDownMenu = document.querySelector(".dropdown");

		profileButton.addEventListener('mouseenter', function(){
				dropDownMenu.classList.add("open")
		});

		profileButton.addEventListener('click', function(){
			dropDownMenu.classList.toggle("open")
		});

		dropDownMenu.addEventListener('mouseleave', function(){
			dropDownMenu.classList.remove("open")
		});
	};

	return {
		init : init
	}
}({})