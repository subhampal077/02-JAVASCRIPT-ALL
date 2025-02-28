const countriesContainer = document.querySelector(".countries-container");
const searchInput = document.querySelector("input");
const selectInput = document.querySelector("select");
const themeChanger = document.querySelector(".theme");

const themeColor = JSON.parse(localStorage.getItem("theme"));
if (themeColor === "dark") {
  document.body.classList.add("dark");
  themeChanger.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp; Light Mode`;
} else {
  themeChanger.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp; Dark Mode`;
}

let allCountriesArray;

function fetchCardData() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      allCountriesArray = data;
      displayCards(data);
    })
    .catch((err) => console.log(err.message));
}
fetchCardData();

function displayCards(data) {
  countriesContainer.innerHTML = data
    .map((country) => {
      return `<a href="/country.html?name=${
        country?.name?.common
      }" class="country-card">
      <img
        class="country-img"
        src=${country?.flags?.svg}
        alt="countryflag"
      />
      <h2 class="country-name">${country?.name?.common}</h2>
      <div class="country-text">
        <p>
          <b>Population: </b>${country?.population.toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>${country?.region}
        </p>
        <p>
          <b>Capital: </b>${country?.capital?.join(", ")}
        </p>
      </div>
    </a>`;
    })
    .join("");
}

//for search debouncing
let timeoutId;

searchInput.addEventListener("input", () => {
  clearTimeout(timeoutId);
  //   applying Debouncing
  timeoutId = setTimeout(() => {
    const filteredCountriesArray = allCountriesArray.filter((item) =>
      item.name.common
        .toLowerCase()
        .includes(searchInput.value.toLowerCase().trim())
    );
    displayCards(filteredCountriesArray);
  }, 600); // Debounce delay
});

selectInput.addEventListener("change", () => {
  const filteredRegionArray =
    selectInput.value !== "all"
      ? allCountriesArray.filter(
          (item) =>
            item.region.toLowerCase() === selectInput.value.toLowerCase()
        )
      : allCountriesArray;

  displayCards(filteredRegionArray);
});

themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeChanger.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp; Light Mode`;

    localStorage.setItem("theme", JSON.stringify("dark"));
  } else {
    themeChanger.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp; Dark Mode`;

    localStorage.setItem("theme", JSON.stringify("light"));
  }
});
