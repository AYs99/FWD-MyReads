import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookCard from '../main route components/BookCard'
import * as BooksAPI from '../BooksAPI'

export default class Search extends Component {
    state = {
        query: '',
        searchResults: [],
    }

    showResults = event => {
        const query = event.target.value;
        this.setState({ query });
        if (query) {
          BooksAPI.search(query.trim(), 20).then(books => {
            books.length > 0
              ? this.setState({ searchResults: books})
              : this.setState({ searchResults: []})
          })} else this.setState({ searchResults: []})
        };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={this.showResults}/>
                    </div>
                </div>
                <div className="search-books-results">
                    {this.state.searchResults.length > 0 && (
                        <div>
                            <h3>Search returned {this.state.searchResults.length} books </h3>
                            <ol className="books-grid">
                            {this.state.searchResults.map(book => (
                                <BookCard book={book} books={this.props.books} key={book.id} changeBookStatus={this.props.changeBookStatus} />
                            ))}  
                            </ol>
                        </div>
                    )}    
                </div>
            </div>
        )
    }
}
