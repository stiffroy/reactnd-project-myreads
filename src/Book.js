import React from 'react';
import PropTypes from 'prop-types'

class Book extends React.Component{
    static propTypes = {
        book: PropTypes.object.isRequired,
        onShelfUpdate: PropTypes.func.isRequired,
    }
    render() {
        const {book, onShelfUpdate} = this.props
        const image = book.imageLinks ? book.imageLinks.thumbnail : 'https://dummyimage.com/128x193&text=No+Image'

        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                        <div className="book-shelf-changer">
                            <select
                                value={book.shelf ? book.shelf : 'none'}
                                onChange={(event) => onShelfUpdate(book, event.target.value)}
                            >
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">
                        {book.authors && book.authors.map(author => (
                            <span key={author}>{author} <br/></span>
                        ))}
                    </div>
                </div>
            </li>
        )
    }
}

export default Book