import React from 'react';
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
    state = {
        query: '',
        books: []
    }
    updateQuery = (query) => {
        let newQuery = query.trim()
        this.setState({
            query: newQuery
        })
        BooksAPI.search(newQuery).then((res) => {
            console.log(res)
            this.setState({
                books: res && !res.error ? res : []
            })
        })
    }
    render() {
        const { query, books } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            defaultValue={query}
                            onKeyUp={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        { books.length > 0 ? books.map(book => (
                            <Book
                                key={book.id}
                                book={book}
                                onShelfUpdate={this.props.onShelfUpdate}
                            />
                        )) : (
                            <span>No results to show</span>
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks