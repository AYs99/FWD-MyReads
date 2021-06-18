import React, { Component } from 'react'
import BookCard from './BookCard'

export default class BookShelf extends Component {
    render() {
        return (
            <ol className="books-grid">
                {this.props.shelfBooks.map((shelfBook) => (
                    <BookCard book={shelfBook} books={this.props.books} key={shelfBook.id} changeBookStatus={this.props.changeBookStatus} />
                ))}   
            </ol>
        )
    }
}
