import { config } from "./modules/config";
import { format } from "date-fns";
import "./style.css";

async function fetchData(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${config.MY_API_TOKEN}${config.SECRET_API_KEY}`,
    { mode: "cors" }
  );

  const weatherData = await response.json();
  handleData.processData(weatherData);
}

class handleData {
  constructor(location, temperature, wind, weather, date, country) {
    this.location = location;
    this.temperature = temperature;
    this.wind = wind;
    this.weather = weather;
    this.date = date;
    this.country = country;
    this.icon = icon;
  }

  static processData(weatherData) {
    this.location = weatherData.name;
    this.temperature = weatherData.main;
    this.wind = weatherData.wind;
    this.weather = weatherData.weather;
    this.date = handleData.getDate(weatherData.dt);
    this.country = handleData.getCountry(weatherData.sys.country);
    this.icon = handleData.getImage(weatherData.weather[0].main);
    UI.updateInformation();
  }

  static getDate() {
    let today = new Date().getTime();
    let date = new Date(today);
    console.log(date);
    let todayInformation = `${format(date, "p")} - ${format(
      date,
      "EEEE"
    )}, ${format(date, "do")} ${format(date, "MMM")} '${format(date, "yy")} `;

    return todayInformation;
  }

  static getCountry(code) {
    const regionNameInEnglish = new Intl.DisplayNames(["en"], {
      type: "region",
    });
    return regionNameInEnglish.of(code);
  }

  static getImage(iconCode) {
    switch (iconCode) {
      case "Clear":
        document.body.style.backgroundImage = `url(images/clearSky.jpg)`;
        break;
      case "Clouds":
        document.body.style.backgroundImage = `url(images/cloudySky.jpg)`;
        break;

      case "Rain":
        document.body.style.backgroundImage = `url(images/rainy.jpg)`;
        break;

      default:
        console.log(iconCode);
        break;
    }
  }
}

const container = document.querySelector(".container");

class UI {
  static loadUI() {
    UI.loadLeft();
    UI.loadRight();
    UI.initEventListener();
    fetchData("Woodrising");
  }

  static loadLeft() {
    const leftDiv = document.createElement("div");
    const leftDivContent = document.createElement("div");

    leftDivContent.innerHTML = `<div class="leftDivInfo">
                                    <h1>12 &#176;</h1>
                                    <div><h2>Sydney</h2><p>11:57 - Monday, 13 Dec '21 </p></div>
                                    <div><p>Cloudy</p></div>
                                </div>`;

    // Assign the approprate classes
    leftDiv.classList.add("leftSide");
    leftDivContent.classList.add("leftDivContent");

    // Add divs to the viewport
    leftDiv.appendChild(leftDivContent);
    container.appendChild(leftDiv);
  }
  static loadRight() {
    const rightDiv = document.createElement("div");
    const rightDivContent = document.createElement("div");

    rightDivContent.innerHTML = ``;

    // Assign the approprate classes
    rightDiv.classList.add("rightSide");
    rightDivContent.classList.add("rightDivContent");

    const form = UI.searchBar();

    const weatherDetails = UI.weatherDetails();

    // Add divs to the viewport
    rightDiv.appendChild(rightDivContent);
    rightDiv.appendChild(form);
    rightDiv.appendChild(weatherDetails);
    container.appendChild(rightDiv);
  }

  static updateInformation() {
    const leftDivContent = document.querySelector(".leftDivContent");

    leftDivContent.innerHTML = `<div class="leftDivInfo">
                                    <h1>${Math.round(
                                      handleData.temperature.temp
                                    )}&#176;</h1>
                                    <div><h2>${handleData.location}</h2>
                                    <p>${handleData.date}</p></div>
                                    <div>
                                    <img src=" http://openweathermap.org/img/wn/${
                                      handleData.weather[0].icon
                                    }@2x.png">
                                    <p>${
                                      handleData.weather[0].description
                                    }</p></div>
                                </div>`;

    UI.updateWeatherDetails();
  }

  static searchBar() {
    const form = document.createElement("form");

    form.innerHTML = `
            <input type="text" name="location" id="locName" placeholder="Location">
            <button type="submit" id="searchBtn">Search</button>
    `;

    form.classList.add("searchBar");

    return form;
  }

  static initEventListener() {
    const searchBar = document.querySelector(".searchBar");
    const locName = document.getElementById("locName");

    searchBar.addEventListener("submit", (e) => {
      e.preventDefault();
      fetchData(locName.value);
    });
  }

  static weatherDetails() {
    const detailsContainer = document.createElement("div");

    detailsContainer.innerHTML = `<h3>Weather Details</h3>
                                  <div><h4>Feels Like</h4><p>21</p></div>
                                  <div><h4>Humidity</h4><p>21</p></div>
                                  <div><h4>Wind</h4><p>1km/h</p></div>`;
    detailsContainer.classList.add("weatherDetails");

    return detailsContainer;
  }

  static updateWeatherDetails() {
    const detailsContainer = document.querySelector(".weatherDetails");

    detailsContainer.innerHTML = `<h3>Weather Details</h3>
                                  <div><h4>Feels Like</h4><p>${handleData.temperature.feels_like}</p></div>
                                  <div><h4>Humidity</h4><p>${handleData.temperature.humidity}</p></div>
                                  <div><h4>Wind</h4><p>${handleData.wind.speed}km/h</p></div>`;
  }
}

addEventListener("DOMContentLoaded", UI.loadUI());
