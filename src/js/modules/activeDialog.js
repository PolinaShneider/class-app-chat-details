module.exports = function(){

	var answers = [
        'Уже работаем над этим!',
        'Я так не умею',
        'Клево!',
        'Потрясающе',
        'Продолжайте',
        'Не понял',
        'Когда уже релизим?',
        'Работаем!',
        'Топ :)',
        'Прекрасно выглядите!',
        'Сам такой!',
        'В смысле?',
        'Автозамена, простите',
        'Жду ревью',
        'Жду мерджа',
        'Когда допишем и оттестируем',
        'Алло'
    ];

	var sendMessageMe = function() {

	    var dialog__item = document.createElement("div");
	    dialog__item.setAttribute("class", "active-dialog__item active-dialog__item--me");

	    chat.appendChild(dialog__item);

	    var dialog__wrapper = document.createElement("div");
	    dialog__wrapper.setAttribute("class", "active-dialog__wrapper");

	    dialog__item.appendChild(dialog__wrapper);

	    var dialog__person = document.createElement("div");
	    dialog__person.setAttribute("class", "person active-dialog__person active-dialog__person--me");

	    dialog__wrapper.appendChild(dialog__person);

	    var person__ava = document.createElement("img");
	    person__ava.setAttribute("class", "person__ava");
	    person__ava.setAttribute("src", "src/img/person5.jpg");

	    dialog__person.appendChild(person__ava);

	    var dialog__message = document.createElement("div");
	    dialog__message.setAttribute("class", "active-dialog__message active-dialog__message--me");


	    dialog__message.textContent += senderField.value;

	    dialog__wrapper.appendChild(dialog__message);

	    var dialog__date = document.createElement("div");
	    dialog__date.setAttribute("class", "active-dialog__date");

	    dialog__date.textContent += appChat.time.buildDate();

	    dialog__item.appendChild(dialog__date);

	    senderField.value = '';
	    sendMessageOther();
	}

	var sendMessageOther = function() {
		var dialog__item = document.createElement("div");
	    dialog__item.setAttribute("class", "active-dialog__item");

	    chat.appendChild(dialog__item);

	    var dialog__wrapper = document.createElement("div");
	    dialog__wrapper.setAttribute("class", "active-dialog__wrapper");

	    dialog__item.appendChild(dialog__wrapper);

	    var dialog__person = document.createElement("div");
	    dialog__person.setAttribute("class", "person active-dialog__person");

	    dialog__wrapper.appendChild(dialog__person);

	    var person__ava = document.createElement("img");
	    person__ava.setAttribute("class", "person__ava");
	    person__ava.setAttribute("src", "src/img/person6.jpg");

	    dialog__person.appendChild(person__ava);

	    var dialog__message = document.createElement("div");
	    dialog__message.setAttribute("class", "active-dialog__message");


	    dialog__message.textContent += appChat.helpers.randomFrom(answers);

	    dialog__wrapper.appendChild(dialog__message);

	    var dialog__date = document.createElement("div");
	    dialog__date.setAttribute("class", "active-dialog__date");

	    dialog__date.textContent += appChat.time.buildDate();

	    dialog__item.appendChild(dialog__date);
	    
	};

	return {
		sendMessageMe : sendMessageMe
	}
}({})