import React from 'react';
import BookDataStore from './data/BookDataStore';
const dataStore = new BookDataStore();
const URL = 'http://localhost:4000/books';
export default class Day4 extends React.Component {
    constructor() {
        super();
        this.store = dataStore;
        this.state = { _json: [] }

        this.store.loadData(function (json) {
            this.setState({ _json: json });
        }.bind(this));
        
        this.createBook = this.createBook.bind(this);
        this.alertBook = this.alertBook.bind(this);
    }
        createBook(book, callback) {
        fetch(URL, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(book)
        }).then(function (data) {
            return data.json();
        }).then(() => this.loadData(callback));
    }
        alertBook(id) {
            for (var i = 0; i < this.state._json.length; i++){
                if (this.state._json[i].id === id) {
                    alert(
                        "you chose id: " + id + "\n" +
                        this.state._json[i].id + "\n" +
                        this.state._json[i].title + "\n" +
                        this.state._json[i].author + "\n" +
                        this.state._json[i].rating + "\n" +
                        this.state._json[i].year_published + "\n");
                }
                
            }
            

        }

        render() {
            this.alertBook(104);
        const getAllBooks = this.state._json.map(function (book) { return <h4 key={book.id.toString()}>{book.author}</h4> });
        return <div><button onClick={this.createBook}>Create a book</button>{getAllBooks}</div>
    }
    createBook() {
        const book = {
            "title": "qweqwe",
            "author": "sdfsd",
            "rating": 1.1,
            "year_published": 1700

        };
        this.store.createBook(book, (json) => { this.setState({ _json: json }) });
    }
}