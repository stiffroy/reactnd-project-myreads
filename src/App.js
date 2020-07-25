import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBooks from "./SearchBooks"
import ListBooks from "./ListBooks"
import { Route } from "react-router-dom"
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
                <Route exact path='/' render={() => (
                    <ListBooks
                        books={this.state.books}
                        onShelfUpdate={this.updateShelf}
                    />
                )} />
                <Route path='/search' render={() => (
                    <SearchBooks
                        onShelfUpdate={this.updateShelf}
                    />
                )} />
            </div>
        )
    }
}

export default BooksApp
