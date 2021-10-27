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