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

 		var currentTime2 = doc.querySelector('.currentTime');
 		var buu = new Date();
 		  hours = buu.getHours(),	
	 		minutes = buu.getMinutes(),
	 		seconds = buu.getSeconds(),

 		currentTime2.textContent = `Aktualna godzina: ${loadingZero(hours)}:${loadingZero(minutes)}:${loadingZero(seconds)}`;
 		
 		
 		setTimeout(function(){
 			getCurrentTime()
 		},1000);
 		
 	}

 	function getCurrentTime2(){
 		let getTime = new Date();
 		return getTime.toLocaleTimeString();
 	}

 	function getCurrentTime3(){
 		let getTime = new Date();
 		var currentTime2 = doc.querySelector('.currentTime');

 		currentTime2.textContent = `Time is: ${getTime.toLocaleTimeString()}`;

 		setTimeout(function(){
 			getCurrentTime3(); 
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

  getCurrentTime3();

	currentDate.textContent = `Date: ${loadingZero(day)}.${loadingZero(month)}.${year} `;
	currentDay.textContent = `Todays is: ${getWeekDay(currentDateObj.getDay())} `;

	

	
/*  -----------------------------------------------------  */

var btnAdd = document.querySelector('#btnAdd'),
		btnMinus = document.querySelector('#btnMinus');


function addNumber(){
	var val = document.querySelector('#adding').value,
			newVal = parseInt(val) + 1; 

	document.querySelector('#adding').value = newVal;
}

function minusNumber(){
	var val = document.querySelector('#adding').value,
			newVal = parseInt(val) - 1 ; 

	document.querySelector('#adding').value = newVal;
	
}


btnAdd.addEventListener('click', addNumber);
btnMinus.addEventListener('click', minusNumber);


}());




/*

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

*/

function longest(s1, s2){

	var newS1 = s1.concat(s2),
			arr = newS1.split(''),
			unique = arr.sort();
			
console.log(`dlugsc tablicy: ${arr.length}`);
	
	var unique = arr.filter(uniqueValueSort);

	console.log(unique.join(''));
}


function uniqueValueSort(elem, index, self){
	console.log(`elem: ${elem} index: ${index} self: ${self}`);
	console.log(`to co zwraca dla każdego element: ${index == self.indexOf(elem)}`);
	return index == self.indexOf(elem);
}



var a = 'aaaaasdasa';
var b = 'werxxxc';

longest(a, b);

/*
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

*/
/*
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}
*/

/*


function isBigEnough(element, index, array) {
  return (element >= 10);
}
filtered = [12, 5, 8, 130, 44].filter(isBigEnough);

*/



