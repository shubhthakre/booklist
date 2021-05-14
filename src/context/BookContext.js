import { createContext } from "react";
import React , { useState} from 'react';
// import uuidv1 from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) =>{

    const [books , setBooks] = useState([
        {title: "An idealist View of Life", author: "Dr.S. Radhakrishnan" , id :1},
        {title: "Arion and the Dolphin", author: "Vikram Seth", id:2}
    ])
    const addBooks= (title,author)=>{
        setBooks([...books,{title,author,id:3}]);
      }

      const removeBooks = (id)=>{
          setBooks(books.filter((book)=>book.id !== id))
      }

      return(
          <BookContext.Provider value={{books , addBooks ,removeBooks}}>
              {props.children}
          </BookContext.Provider>
      )
}

export default BookContextProvider;