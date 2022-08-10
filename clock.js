var mins=document.querySelector('.min');
var secs=document .querySelector('.sec');
var hours=document.querySelector('.hour');

function startTime(){
const date=new Date();
// console.log(date);
const sd=date.getSeconds();
const md=date.getMinutes() ;
const hd=date.getHours();
var h=((hd/12) *360)+((md/60) *30) - 90;
var m=md/60 * 360 - 90;
var s=sd/60 * 360 - 90;
secs.style.transform=`rotate(${s}deg)`;
mins.style.transform=`rotate(${m}deg)`;
hours.style.transform=`rotate(${h}deg)`;
setInterval(startTime, 1000);
}
startTime()
