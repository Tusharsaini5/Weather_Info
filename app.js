function fetch_data()
{
    var cityName = document.getElementById('city').value
    console.log(cityName)
    if (cityName == "")
    {
        alert("Please enter city name")
    }
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=4a984e8a5e60ac90e8288ab027adc7c8&units=metric'
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        var res_code = data['cod']
        if(res_code ==='404')
        {
            alert("City not found")
        }
        else
        {
            var cityTemp = data['main']['temp']
            console.log(cityTemp)
            var maxTemp = data['main']['temp_max']
            console.log(maxTemp)
            var minTemp = data['main']['temp_min']
            console.log(minTemp)
            var icon = data['weather']['0']['icon']
            console.log(icon)
            var icon_url ='https://openweathermap.org/img/wn/'+icon+'@2x.png'
            document.getElementById('result0').innerHTML =
            `<img src=`+icon_url+`>`+`<br>`
            document.getElementById('result').innerHTML =
            `<h3>Temprature : `+cityTemp+`&deg;C</h3>`
            document.getElementById('result1').innerHTML =
            `<h4>Max Temprature : `+maxTemp+`&deg;C</h4>`
            document.getElementById('result2').innerHTML =
            ` <h4>Min Temprature : `+minTemp+`&deg;C</h4>`
        }
    })
}