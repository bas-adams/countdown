(function(){

	var currentDateObj = new Date(),
	 		doc = document,
	 		
	 		day = currentDateObj.getDate(),
	 		month = currentDateObj.getMonth()+1,
	 		year = currentDateObj.getFullYear(),

			currentTime = doc.querySelector('.currentTime')
	 		currentDate = doc.querySelector('.currentDate'),
	 		currentDay = doc.querySelector('.currentDay');
	 		
				
	function getWeekDay(day){
 		var nameOfDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 		return nameOfDays[day];
 	}


 	function getCurrentTime(){
 		let getTime = new Date();
 		var currentTime2 = doc.querySelector('.currentTime');

 		currentTime2.textContent = `Time is: ${getTime.toLocaleTimeString()}`;

 		setTimeout(function(){
 			getCurrentTime(); 
 		}, 1000);

 	}
	
	function loadingZero(number){
		return (number < 10) ? '0' + number : number;
	}


	function counting(endYear, endMonth, endDay){
		let now = new Date();
		let end = new Date(endYear, endMonth, endDay);
		let diff = Date.parse(end) - Date.parse(now);
		let days = diff / (1000*60*60*24);
		let hours = (diff / (1000*60*60)) % 24;
		let minutes = (diff / (1000*60)) % 60;
		let seconds = (diff / 1000) % 60;

		return {
			total: diff,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		}

	}

	function checkEnd(checkDate){
   	return (parseInt(checkDate.textContent) < 0) ? checkDate.textContent = 0 : checkDate.textContent;;
   }

	function initializing(){
		var doc = document.getElementById('countDown'),
				countDay = doc.querySelector('.countDay'),
				countHour = doc.querySelector('.countHour'),
				countMinute = doc.querySelector('.countMinute'),
				countSecond = doc.querySelector('.countSecond');
		
				function updateing(){
					var time = counting(2017, 03, 4);

					countDay.textContent = ` ${loadingZero(Math.floor(time.days))}  `;
					countHour.textContent = ` ${loadingZero(Math.floor(time.hours))}  `;
					countMinute.textContent = `  ${loadingZero(Math.floor(time.minutes))}  `;
					countSecond.textContent = `  ${loadingZero(Math.floor(time.seconds))} `;

					checkEnd(countDay);
					checkEnd(countHour);
					checkEnd(countMinute);
					checkEnd(countSecond);
	
					setTimeout(function(){
							updateing();
						}, 1000);
				
				}

			updateing();	
	}

	initializing();

  getCurrentTime();

	currentDate.textContent = `Date: ${loadingZero(day)}.${loadingZero(month)}.${year} `;
	currentDay.textContent = `Todays is: ${getWeekDay(currentDateObj.getDay())} `;

}());	

