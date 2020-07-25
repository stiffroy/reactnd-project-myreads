import React from 'react';
import { Link } from "react-router-dom";
import Book from "./Book";

class ListBooks extends React.Component{
    render() {
        let currentlyReading = this.props.books.filter(book => book.shelf === "currentlyReading")
        let wantToRead = this.props.books.filter(book => book.shelf === "wantToRead")
        let read = this.props.books.filter(book => book.shelf === "read")

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    { currentlyReading.map(book => (
                                        <Book
                                            key={book.id}
                                            book={book}
                                            onShelfUpdate={this.props.onShelfUpdate}
                                        />
                                    )) }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    { wantToRead.map(book => (
                                        <Book
                                            key={book.id}
                                            book={book}
                                            onShelfUpdate={this.props.onShelfUpdate}
                                        />
                                    )) }
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    { read.map(book => (
                                        <Book
                                            key={book.id}
                                            book={book}
                                            onShelfUpdate={this.props.onShelfUpdate}
                                        />
                                    )) }
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Search a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks