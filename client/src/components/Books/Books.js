import React, { Component } from 'react';
import SearchArea from '../SearchArea/SearchArea';
import request from 'superagent';
import BookList from '../BookList/BookList';
import API from '../../utils/API';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    }

    searchBook = (e) => {
        e.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items]})
            })
    }

    handleSearch = (e) => {
        console.log(e.target.value)
        this.setState({ searchField: e.target.value })
    }

    saveBooks = (thisBook) => {
        API.savedBooks({
            id: thisBook.id,
            title: thisBook.title,
            authors: thisBook.authors,
            description: thisBook.description,
            image: thisBook.image,
            link: thisBook.link
        })
        .then(res => console.log("Success", res))
        .catch(err => console.log("error", err));
    }

    render() {
        return (
        <div>
            <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books}/>
        </div>
        )
    }
}

export default Books;