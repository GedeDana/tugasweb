function DataSource(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
}

DataSource.prototype.searchProvince = function (key) {
    const filteredCovid = covid.filter(function (covid) {
        return covid.attributes.Provinsi.toUpperCase().includes(key);
    });

    if (filteredCovid.length) {
        this.onSuccess(filteredCovid);
    } else {
        this.onFailed(`${key} is not found`);
    }
};
DataSource.prototype.renderCovidInfo = function (){
    const indoCovid19 = indoCovid19.map((covidIndo) => {
        if(covidIndo !== undefined){
            this.onSuccess(indoCovid19);
        } else {
            this.onFailed('Tidak ada informasi')
        }
    });

}
