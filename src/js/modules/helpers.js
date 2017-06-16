module.exports = function() {

	var randomFrom = function (arr) {

        return arr[random_(0, arr.length - 1)];

    };

    var random_ = function(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;

    };

    return {
    	randomFrom : randomFrom
    }

}({})