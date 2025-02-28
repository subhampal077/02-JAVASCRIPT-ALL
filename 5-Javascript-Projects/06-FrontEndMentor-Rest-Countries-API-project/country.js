const backButton = document.querySelector(".back-btn");
const flagImage = document.querySelector(".country-details-image");
const countryNameH2 = document.querySelector(".country-details-text h2");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountries = document.querySelector(".border-countries");
const themeChanger = document.querySelector(".theme");

const themeColor = JSON.parse(localStorage.getItem("theme"));
if (themeColor === "dark") {
  document.body.classList.add("dark");
  themeChanger.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp; Light Mode`;
} else {
  themeChanger.innerHTML = `<i class="fa-regular fa-moon"></i>&nbsp; Dark Mode`;
}

backButton.addEventListener("click", () => {
  window.history.back();
});

const urlParams = new URLSearchParams(window.location.search);
const countryName = urlParams.get("name");

async function fetchCountryData() {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await res.json();
    // console.log(data);
    displayCountryData(data?.[0]);
  } catch (err) {
    console.log(err.message);
  }
}

fetchCountryData();

function displayCountryData(data) {
  //   console.log(data);

  flagImage.src = data?.flags?.svg;
  flagImage.alt = `${data?.name?.common} flag`;

  countryNameH2.innerText = data?.name?.common;
  population.innerText = data?.population?.toLocaleString("en-IN");
  region.textContent = data?.region;
  topLevelDomain.textContent = data?.tld.join(", ");

  subRegion.textContent = data.subregion
    ? data?.subregion
    : "No subregion found";

  capital.textContent = data.capital
    ? data?.capital?.join(", ")
    : "No capital found";

  if (data.name.nativeName) {
    nativeName.innerText = Object.values(data.name.nativeName)[0].common;
  } else {
    nativeName.textContent = data.name.common;
  }

  if (data.currencies) {
    currencies.textContent = Object.values(data.currencies)
      .map((curr) => curr.name)
      .join(", ");
  } else {
    currencies.textContent = "No currency fuund";
  }

  if (data.languages) {
    languages.textContent = Object.values(data.languages).join(", ");
  } else {
    languages.textContent = "No language found";
  }

  if (data.borders) {
    data.borders.forEach((border) => {
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then((countryData) => {
          //   console.log(countryData[0].name.common);

          const newAnchorTag = document.createElement("a");
          newAnchorTag.textContent = countryData[0].name.common;
          newAnchorTag.href = `/country.html?name=${countryData[0].name.common}`;
          borderCountries.append(newAnchorTag);
        });
    });
  } else {
    borderCountries.innerHTML = "<a>No border countries found</a>";
  }
}

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
