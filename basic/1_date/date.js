function changeTime() {


    var today  = new Date();

    var day = today.getDay();

    var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

    day = dayList[day];

    var hour = today.getHours();

    var minute = today.getMinutes();

    var seconds = today.getSeconds();

//am pm

    var prepand = (hour >= 12 )?'PM':'AM';

    hour  =  (hour > 12) ?  hour -12 : hour;

    if (hour == 12){

        if (minute == 0 && minute == 0 && seconds == 0){

            prepand = 'AM';
        }

    }

    var outputTime =  document.getElementById('outPutTime');
//inner html

    outputTime.textContent = "Tody is : "+day+'\n Current time is : '+hour+" "+ prepand +" : "+minute+" : "+seconds;

}

setInterval(changeTime,1000);



