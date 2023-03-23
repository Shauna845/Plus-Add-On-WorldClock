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

  let wellingtonElement = document.querySelector("#wellington");
  let wellingtonDateElement = wellingtonElement.querySelector(".date");
  let wellingtonTimeElement = wellingtonElement.querySelector(".time");
  let wellingtonTime = moment().tz("Pacific/Auckland");

  wellingtonDateElement.innerHTML = wellingtonTime.format("dddd D MMMM YYYY");
  wellingtonTimeElement.innerHTML = wellingtonTime.format(
    "hh:mm:ss [<small>]a[</small>]"
  );
}
setInterval(updateTime, 1000);
