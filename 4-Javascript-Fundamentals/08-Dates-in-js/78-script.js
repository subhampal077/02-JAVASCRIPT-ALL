const inputMilliSeconds = document.querySelector("#input-milliseconds");
const convertButton = document.querySelector("#button");
const getTime = document.querySelector("#get-time");
const localeTime = document.querySelector("#locale-time");
const gmt = document.querySelector("#gmt");
const yourTimeZone = document.querySelector("#locale-time-zone");
const valueTable = document.querySelector("#value-table");

setInterval(() => {
  const myDate = new Date();

  const getTimeTillSec = parseInt(myDate.getTime() / 1000);
  //   console.log(getTimeTillSec);

  getTime.textContent = getTimeTillSec;
  localeTime.textContent = myDate.toLocaleTimeString();
}, 1000);

convertButton.addEventListener("click", () => {
  if (inputMilliSeconds.value) {
    convertClicked(+inputMilliSeconds.value);
  }
});

function convertClicked(milliseconds) {
  const inputDate = new Date(milliseconds);

  valueTable.style.display = "flex";
  
  gmt.textContent = inputDate.toUTCString();
  yourTimeZone.textContent = inputDate.toString();
}

