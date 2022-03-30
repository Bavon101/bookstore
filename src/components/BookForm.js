import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addedBook } from '../redux/books/books';

export default function BookForm() {
  const [title, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="book-form">
      <h2>
        ADD NEW BOOK
      </h2>
      <form
        action="submit"
        onSubmit={(e) => {
          dispatch(addedBook({
            title,
            author,
            id: new Date().getTime(),
          }));
          e.preventDefault();
          setBookTitle('');
          setAuthor('');
        }}
      >
        <input value={title} onInput={(e) => setBookTitle(e.target.value)} type="text" required placeholder="Book title" />
        <input value={author} onInput={(e) => setAuthor(e.target.value)} type="text" required placeholder="Author" />
        <button type="submit">
          ADD BOOK

        </button>
      </form>
    </div>
  );
}
