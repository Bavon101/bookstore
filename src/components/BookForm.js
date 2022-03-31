import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import apiConstants from '../api/constants';
import { addBook } from '../api/data_fetch';

export default function BookForm() {
  const [title, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const { baseUrl, app } = apiConstants;
  const url = `${baseUrl}/apps/${app}/books`;
  return (
    <div className="book-form">
      <h2>
        ADD NEW BOOK
      </h2>
      <form
        action="submit"
        onSubmit={(e) => {
          dispatch(addBook(
            url,
            {
              title,
              author,
              item_id: new Date().getTime(),
              category: 'Tests',
            },
          ));
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
