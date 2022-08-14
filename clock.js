const secondTime = document.querySelector('.time-second');
const minuteTime = document.querySelector('.time-minute');
const hourTime = document.querySelector('.time-hour');

const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
	const now = new Date();
	
	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds/60) * 360) + 90;
	secondTime.textContent = ((seconds < 10)?"0":"") + seconds;

	console.log(seconds);

	if (seconds === 0) {
		secondHand.style.transition = `none`;
	} else {
		secondHand.style.transition = `all 0.2s cubic-bezier(0.88, 2.42, 0, 0.96)`;
	}

	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = ((minutes/60) * 360) + 90;
	minuteTime.textContent = ((minutes < 10)?"0":"") + minutes;
	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursDegrees = ((hours/12) * 360) + 90;
	hourTime.textContent = ((hours == 12)?"":(hours%12 < 10)?"0":"") + ((hours <= 12)?hours:hours%12);
	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);