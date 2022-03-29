import React from 'react';
import { useSelector } from 'react-redux';
import BookForm from '../BookForm';
import Book from '../Book';

export default function Books() {
  const booksList = useSelector((state) => state.bookReducer);
  return (
    <div>
      <div>
        {
          booksList.length > 0
            ? booksList.map(
              (book) => <Book key={book.id} title={book.title} author={book.author} id={book.id} />,
            )
            : <h3> There are no available titles, please add one</h3>
      }
      </div>
      <hr />
      <BookForm />
    </div>
  );
}
