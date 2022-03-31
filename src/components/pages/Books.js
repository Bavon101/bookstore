import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookForm from '../BookForm';
import Book from '../Book';
import apiConstants from '../../api/constants';
import { fetchBooks } from '../../api/data_fetch';

export default function Books() {
  const booksList = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();

  const { baseUrl, app } = apiConstants;
  const url = `${baseUrl}/apps/${app}/books`;
  useEffect(() => {
    dispatch(fetchBooks(url));
  }, []);
  return (
    <div>
      <div>
        {
          booksList.books.length > 0
            ? booksList.books.map(
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
