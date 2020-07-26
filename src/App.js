import React from 'react'
import { Route, Switch } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import SearchBooks from "./SearchBooks"
import ListBooks from "./ListBooks"
import NotFound from "./NotFound";
import './App.css'

class BooksApp extends React.Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((booksArray) => {
            this.setState({books: this.state.books.concat(booksArray)})
        })
    }

    updateShelf = (book, shelf) => {
        book.shelf = shelf
        this.setState({
            books: this.state.books.filter((b) => b.id !== book.id).concat([book])
        })
        BooksAPI.update(book, shelf)
    }

    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path='/' render={() => (
                        <ListBooks
                            books={this.state.books}
                            onShelfUpdate={this.updateShelf}
                        />
                    )} />
                    <Route path='/search' render={() => (
                        <SearchBooks
                            books={this.state.books}
                            onShelfUpdate={this.updateShelf}
                        />
                    )} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}

export default BooksApp
