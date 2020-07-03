const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

var y;
var check;
let countDown = new Date('Jul 10, 2020 00:00:00').getTime(),
    x = setInterval(function() {
         document.getElementById('mai').style.display = 'none';
        document.getElementById('after_timer').style.opacity = 0;
        document.getElementById('timer2').style.opacity = 0;
        
        
        
      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

      
      if (distance < 0) {
        clearInterval(x);
          document.getElementById('timer').style.animation = 'opaci 2s forwards';
          document.getElementById('after_timer').style.animation = "opaci 2s reverse";
          document.getElementById('after_timer').style.opacity = 1;
          document.getElementById('timer2').style.animation = "opaci 2s reverse";
          document.getElementById('timer2').style.opacity = 1;
          
         
          var countDownDate = new Date("Jul 10, 2020 00:10:00").getTime();

            // Update the count down every 1 second
             y = setInterval(function() {

              // Get today's date and time
              var now2 = new Date().getTime();

              // Find the distance between now and the count down date
              var distance2 = countDownDate - now2;

              // Time calculations for days, hours, minutes and seconds
              var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
              var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
              var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

              // Display the result in the element with id="demo"
              document.getElementById("demo").innerHTML = days2 + "d " + hours2 + "h "
              + minutes2 + "m " + seconds2 + "s ";

              // If the count down is finished, write some text
              if (distance2 < 0) {
                clearInterval(y);
                check = 1;
                document.getElementById("after_timer").style.animation = 'opaci 2s forwards';
                  document.getElementById('after_timer').style.opacity = 0;
                   document.getElementById('mai').style.display = 'block';
              }
            }, 1000);
        
      }

    }, second);

function clearit(){
    clearInterval(y);
    check=1
    document.getElementById("after_timer").style.animation = 'opaci 2s forwards';
    document.getElementById('after_timer').style.opacity = 0;
    document.getElementById('after_timer').style.display = 'none';
    document.getElementById('mai').style.display = 'block';
    
}
