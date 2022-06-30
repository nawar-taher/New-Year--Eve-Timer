const newYears ='1 Jan 2023';


 let Day =document.querySelector('#day')
 let Hours =document.querySelector('#hours')
let Minutes =document.querySelector('#minutes')
let Seconds =document.querySelector('#seconds')



function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalsconds=(newYearsDate-currentDate)/1000 ;

    const days=Math.floor(totalsconds /3600/24); 
    const hours= Math.floor(totalsconds /3600)%24; 
    const minutes=Math.floor(totalsconds/60)%60;
    const seconds =Math.floor(totalsconds)%60;

    Day.innerHTML=days;
    Hours.innerHTML=hours;
    Minutes.innerHTML=minutes;
    Seconds.innerHTML=seconds;

    
 console.log(days,hours,minutes,seconds);
}

countdown();

setInterval(countdown,1000)

// 184	days
// 4419	hours
// 265183	minutes
// 15911014	seconds