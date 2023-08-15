let body = document.querySelector("body");

function getData() {
    fetch("https://countryapi.io/api/all?apikey=1R669RSlGrW4xM3LIIl0p0xP4duO9LmsIFIuxOoa")
        .then(response => response.json())
        .then(data => {
            let country = Object.values(data);
            country.forEach((x) => {
                // console.log(x);
                // console.log(x.flag.large);
                // console.log(x.name);
                // console.log(x.capital);
                // console.log(Object.values(x.currencies)[0].name);
                // console.log(Object.values(x.currencies)[0].symbol);
                // console.log(x.callingCode);
                // console.log(x.area);
                // console.log(x.population);
                // console.log(x.region);
                body.innerHTML += `
                <div class="card">
                    <img src="${x.flag.large}" alt="Flag" />
                    <p class="countryName">${x.name}</p>
                    <div class="about">
                        <div class="capital">
                            <p class="description">Capital :</p>
                            <p class="name">${x.capital}</p>
                        </div>
                        <div class="currencies">
                            <p class="description">Currencies :</p>
                            <p class="name">${Object.values(x.currencies)[0].name}</p>
                        </div>
                        <div class="callingCode">
                            <p class="description">Calling code :</p>
                            <p class="name">${x.callingCode}</p>
                        </div>
                        <div class="area">
                            <p class="description">Area :</p>
                            <p class="name">${x.area} km<sup>2</sup></p>
                        </div>
                        <div class="population">
                            <p class="description">Population :</p>
                            <p class="name">${x.population}</p>
                        </div>
                        <div class="region">
                            <p class="description">Region :</p>
                            <p class="name">${x.region}</p>
                        </div>
                    </div>
                </div>
            `
            })
        })
}

getData();