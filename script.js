const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function  setDate(){
	const now = new Date();
	
	const second = now.getSeconds();
	const secdegs = (second/60)*360+90;
	secondHand.style.transform = `rotate(${secdegs}deg)`;
		
	const minute = now.getMinutes();
	const mindegs = ((minute/60)*360) + ((second/60)*6)+90;
	minHand.style.transform = `rotate(${mindegs}deg)`;
	
	const hour = now.getHours();
	const hourdegs = ((hour/12)*360)+((minute/60)*30) + 90;
	hourHand.style.transform = `rotate(${hourdegs}deg)`;
}

setInterval(setDate,1000);
setDate();