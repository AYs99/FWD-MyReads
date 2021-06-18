import React from 'react'
import { Route, Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './search route components/Search'
import AppTitle from './main route components/AppTitle'
import ListShelf from './main route components/ListShelf'
import SearchButton from './main route components/SearchButton'


class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  changeBookStatus = (changedStatus, shelf) => {
    BooksAPI.update(changedStatus, shelf).then(response => {
      changedStatus.shelf = shelf
      this.setState(prevState => ({
        books: prevState.books.filter(book => book.id !== changedStatus.id).concat(changedStatus)
      }));
    });
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Switch>
          <Route path="/search" render={() => (
            <Search books={books} changeBookStatus={this.changeBookStatus} />
            )}
          />
          <Route exact path="/" render={() => (
              <div className="list-books">
              <AppTitle />
              <ListShelf books={books} changeBookStatus={this.changeBookStatus} />
              <SearchButton />
            </div>
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
