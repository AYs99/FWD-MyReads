import React, { Component } from 'react'

export default class BookStatus extends Component {
    updateStatus = event =>
    this.props.changeBookStatus(this.props.book, event.target.value);

    render() {
        return (
            <div className="book-shelf-changer">
                <select onChange={this.updateStatus} defaultValue='none'>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
