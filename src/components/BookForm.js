import React , {useState} from 'react';
import {useContext} from 'react';
import { BookContext } from '../context/BookContext';


const  BookForm = () => {

    const { addBooks}= useContext(BookContext);
    const [title ,setTitle] = useState('');
    const [author,setAuthor]= useState('');

    const handleSubmit =(e)=>{
        e.preventDefault();
        addBooks(title,author);
        setTitle('')
        setAuthor('')
    }
    return (  
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={title} 
            placeholder="enter title"
                onChange={(e)=>setTitle(e.target.value)}
                required
            />
            <input 
            type="text"
            value={author} 
            placeholder="enter author name"
                onChange={(e)=>setAuthor(e.target.value)}
                required

            />
            <input type="submit" value="Add Book"/>
        </form>
    );
}
 
export default  BookForm;

