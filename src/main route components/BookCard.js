import React, { Component } from 'react'
import noCover from '../images/no-cover-image.png'
import BookStatus from './BookStatus';

export default class BookCard extends Component {
    render() {
        const coverImg =
            this.props.book.imageLinks && this.props.book.imageLinks.thumbnail
            ? this.props.book.imageLinks.thumbnail
            : noCover;
        const title = this.props.book.title ? this.props.book.title : 'No title available';

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${coverImg})` }}></div>
                        <BookStatus changeBookStatus={this.props.changeBookStatus} books={this.props.books} book={this.props.book} />
                    </div>
                    <div className="book-title">{title}</div>
                    {this.props.book.authors &&
                    this.props.book.authors.map((author, index) => (
                    <div className="book-authors" key={index}>
                        {author}
                    </div>
                    ))}
                </div>
            </li>
        )
    }
}
