import React from 'react';
import BookForm from '../../BookForm';
import Book from '../Book';

export default function Books() {
  return (
    <div>
      <Book />
      <Book />
      <Book />
      <hr />
      <BookForm />
    </div>
  );
}
