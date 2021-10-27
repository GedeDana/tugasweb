const main = function () {
    const searchElement = document.querySelector("#searchElement");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const provinceListCovidElement = document.querySelector("#covidList");

    const onButtonSearchClicked = function () {
        const dataSource = new DataSource(renderResult, fallbackResult);
        dataSource.searchProvince(searchElement.value);
    };

    var renderResult = function (results) {
        provinceListCovidElement.innerHTML = "";
        results.forEach(function (covid) {
            const provinsi = covid.attributes.Provinsi;
            const positif = covid.attributes.Kasus_Posi;
            const negatif = covid.attributes.Kasus_Semb;
            const meninggal = covid.attributes.Kasus_Meni;

            const covidNameProvince = document.createElement("div");
            covidNameProvince.setAttribute("class", "title");

            const covidInformation = document.createElement("div");
            covidInformation.setAttribute("class", "container-box");
           
            covidInformation.innerHTML = `
                        <div class="box blue">
                        <h3>Negatif</h3>
                        <p>${negatif}</p>
                    </div>
                    <div class="box yellow">
                        <h3>Positif</h3>
                        <p>${positif}</p>
                    </div>
                    <div class="box red">
                        <h3>Meninggal</h3>
                        <p>${meninggal}</p>
                     </div>`;
        

            covidNameProvince.innerHTML = `<h3>${provinsi}</h3>`;
            provinceListCovidElement.appendChild(covidNameProvince);
            provinceListCovidElement.appendChild(covidInformation);
        })
    };

    var fallbackResult = function (message) {
        provinceListCovidElement.innerHTML = " ";
        provinceListCovidElement.innerHTML += `<h2> ${message}</h2>`;
    };

    buttonSearchElement.addEventListener("click", onButtonSearchClicked);
};
