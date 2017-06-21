module.exports = function(){

	var init = function(){
		messages = document.querySelector(".messages__item-wrapper");
		messages.addEventListener('click', makeActive);
	};

	var makeUnactive = function(){

		messages = document.querySelector(".messages__item-wrapper");
		activeMsg = messages.querySelectorAll(".messages__item--active");

		if (activeMsg.length) {
			for (var i = 0; i < activeMsg.length; i++) {
				activeMsg[i].classList.remove("messages__item--active");
			}
		}
	};
	var makeActive = function(e){
		makeUnactive();
		if(e.target.classList.contains("wholeClickable")) {
			e.target.parentNode.classList.toggle("messages__item--active");
		}
	}
	return {
		init : init
	}
	
}({})