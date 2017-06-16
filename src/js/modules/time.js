module.exports = function(){
	var buildDate = function() {

        var date = new Date(),
            dayofMonth = date.getDate(),
            time = date.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', hour12: true });
            year = date.getFullYear();

        var weekday = new Array(7);
		    weekday[0] = "Sunday";
		    weekday[1] = "Monday";
		    weekday[2] = "Tuesday";
		    weekday[3] = "Wednesday";
		    weekday[4] = "Thursday";
		    weekday[5] = "Friday";
		    weekday[6] = "Saturday";

		var month = new Array();
			month[0] = "January";
			month[1] = "February";
			month[2] = "March";
			month[3] = "April";
			month[4] = "May";
			month[5] = "June";
			month[6] = "July";
			month[7] = "August";
			month[8] = "September";
			month[9] = "October";
			month[10] = "November";
			month[11] = "December";

		var monthtoStr = month[date.getMonth()];

		var dayofWeek = weekday[date.getDay()];


        if ( dayofMonth < 10 ) {

            dayofMonth = '0' + dayofMonth;

        }

        return  dayofWeek + ', ' + monthtoStr + ' ' + dayofMonth +', ' + year + ', at ' + time.toLowerCase();

    };

    return {
    	buildDate : buildDate 
    }
}({})