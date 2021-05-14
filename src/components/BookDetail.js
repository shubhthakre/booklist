import React , {useContext} from 'react'; 
import { BookContext } from '../context/BookContext';



const BookDetails = ( { book } ) => {
    const {removeBooks } = useContext(BookContext);

    return ( 
        <li onClick={(id)=>removeBooks(book.id)}>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
        </li>

     );
}
 
export default BookDetails;