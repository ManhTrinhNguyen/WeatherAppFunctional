
const imgURL = `http://openweathermap.org/img/wn/$@2x.png`
const city = document.querySelector(".city")
const temp = document.querySelector(".temp")
const desc = document.querySelector(".description")
const icon = document.querySelector(".icon")

const input = document.getElementById("input")
const btn = document.querySelector(".submit")




 btn.addEventListener("click", postData)

function postData () {
    const inputCity = input.value
    const data = {
        cityName : inputCity
    }

    fetch("/weather", {
        method: "POST",
        headers : {
            'Content-Type': "application/json",
            "Accepted" : "application/json" 
        },
        body : JSON.stringify(data)
    }).then(res => res.json()).then(data => displayWeather(data))
}


function displayWeather (data) {
    city.textContent = data.name
    temp.textContent = data.main.temp
    desc.textContent = data.weather[0].description
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
}




   
