$(function() {
  var handleWeatherResponse = function(data) {
    // "data" is an object that holds all the information you need. Here, we
    // write it out to the console for easy viewing.
    console.log(data);

    // We also set a window-level variable so we can use it in the console,
    // by typing data
    window.data = data;

    temp=data.currently.apparentTemperature;
    temp=Math.ceil(temp);

    var outlook="Outlook for the week: "+data.daily.summary;
    var high="High: "+Math.ceil(data.daily.data[0].apparentTemperatureMax)+" <sup>o</sup>F";
    var low="Low: "+Math.ceil(data.daily.data[0].apparentTemperatureMin)+" <sup>o</sup>F";

    var today_pic="<h3>Rest of Today</h3>"+"<img src="+data.daily.data[0].icon+".png>"
    var tom_pic="<h3>Tomorrow</h3>"+"<img src="+data.daily.data[1].icon+".png>"  
    var dft_pic="<h3>Day After</h3>"+"<img src="+data.daily.data[2].icon+".png>"  

    var today_temp="High: "+Math.ceil(data.daily.data[0].apparentTemperatureMax)+" <sup>o</sup>F"+"&nbsp&nbsp&nbsp&nbspLow: "+Math.ceil(data.daily.data[0].apparentTemperatureMin)+" <sup>o</sup>F"
    var tom_temp="High: "+Math.ceil(data.daily.data[1].apparentTemperatureMax)+" <sup>o</sup>F"+"&nbsp&nbsp&nbsp&nbspLow: "+Math.ceil(data.daily.data[1].apparentTemperatureMin)+" <sup>o</sup>F"
    var dft_temp="High: "+Math.ceil(data.daily.data[2].apparentTemperatureMax)+" <sup>o</sup>F"+"&nbsp&nbsp&nbsp&nbspLow: "+Math.ceil(data.daily.data[2].apparentTemperatureMin)+" <sup>o</sup>F"
    //"<div class="container"><div style="left: 0px;" class="col-sm-4 text-left"><h1 class="loc">Chicago<br></h1><h2 class="current">Currently</h2></div>"
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    //var markup = "<img src="+data.currently.icon+".png>" + "<br>" +data.currently.summary+ data.currently.apparentTemperature;
    var topleft = data.timezone;
    var topmid = "<img src="+data.currently.icon+".png>";
    var summary= data.currently.summary;
    // var topright = data.currently.apparentTemperature + " deg"
    var topright = temp+" <sup>o</sup>F"
    var markup = topleft+"<h3><br>Now</h3>";
    // End of your code. No, really. Don't change anything below this, or above line 11.

    // Takes the contents of the "markup" variable (which should contain HTML) 
    // and write it out to the page.
    $('.weather-report').html(markup);
    $('.weather-report1').html(outlook);
    $('.weather-report2').html(topmid);
    $('.weather-report2_1').html(summary);
    $('.weather-report3').html(topright);
    $('.weather-report4').html(high);
    $('.weather-report5').html(low);
    $('.weather-report6').html(today_pic);
    $('.weather-report7').html(tom_pic);
    $('.weather-report8').html(dft_pic);
    $('.weather-report9').html(today_temp);
    $('.weather-report10').html(tom_temp);
    $('.weather-report11').html(dft_temp);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});