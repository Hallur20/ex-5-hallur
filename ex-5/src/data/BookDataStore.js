const URL = 'http://localhost:4000/books';

class BookDataStore {
    constructor() {
        this.books = [];
    }

    loadData(callback) {
        fetch(URL, { method: 'GET' }).then(function (data) {
            return data.json();
        }).then(function (json) {
            console.log(json);
            callback(json);
        });
    }
    createBook(book, callback) {
        alert("test");
        fetch(URL, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(book)
        }).then(function (data) {
            return data.json();
        }).then(() => this.loadData(callback));
    }

}

export default BookDataStore;