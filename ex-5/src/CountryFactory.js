const URL1 = 'http://localhost:3333/labels';
const URL2 = 'http://localhost:3333/countries';

class CountryFactory {
    constructor() {
        this.labels = [];
        this.countries = [];
    }

    loadLabels(callback) {
        fetch(URL1, { method: 'GET' }).then(function (data) {
            return data.json();
        }).then(function (json) {
            console.log(json);
            callback(json);
        });
    }

    loadCountries(callback) {
        fetch(URL2, { method: 'GET' }).then(function (data) {
            return data.json();
        }).then(function (json) {
            console.log(json);
            callback(json);
        });
    }

}

export default CountryFactory;