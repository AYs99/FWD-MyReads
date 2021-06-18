import React, { Component } from 'react'
import BookShelf from './BookShelf'

export default class ListShelf extends Component {
    render() {
        const shelves = [
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead', title: 'Want to Read' },
            { type: 'read', title: 'Read' }
        ]

        return (
            <div className="list-books-content">
                {shelves.map((shelf, index) => {
                    const booksInShelf = this.props.books.filter(book => book.shelf === shelf.type)
                    return (
                        <div className="bookshelf" key={index}>
                            <h2 className="bookshelf-title">{shelf.title}</h2>
                            <div className="bookshelf-books">
                                <BookShelf books={this.props.books} shelfBooks={booksInShelf} changeBookStatus={this.props.changeBookStatus} />
                            </div>
                        </div>    
                    )
                })}
                
            </div>
        )
    }
}
