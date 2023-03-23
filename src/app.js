function updateTime() {
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Ireland");

  dublinDateElement.innerHTML = dublinTime.format("dddd D MMMM YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "hh:mm:ss [<small>]a[</small>]"
  );
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd D MMMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format(
    "hh:mm:ss [<small>]a[</small>]"
  );

  let aucklandElement = document.querySelector("#auckland");
  let aucklandDateElement = aucklandElement.querySelector(".date");
  let aucklandTimeElement = aucklandElement.querySelector(".time");
  let aucklandTime = moment().tz("Pacific/Auckland");

  aucklandDateElement.innerHTML = aucklandTime.format("dddd D MMMM YYYY");
  aucklandTimeElement.innerHTML = aucklandTime.format(
    "hh:mm:ss [<small>]a[</small>]"
  );
}
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("dddd D MMMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "hh:mm:ss"
        )}<small>${cityTime.format("a")}</small>
          </div>
      </div>
  `;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
