import React, {useContext} from 'react';
import { BookContext } from '../context/BookContext';
import BookDetails from './BookDetail';

const BookList = () => {
    const {books} = useContext(BookContext);
    return books.length ?  (
        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return(
                        <BookDetails  book={book} key={book.id}/>
                    ) 
                })}
            </ul>
        </div>
      ): (
        <div className="empty"> No books to read</div>
    )
}
 
export default BookList;