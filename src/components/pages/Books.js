import React from 'react';
import BookForm from '../BookForm';
import Book from '../Book';

export default function Books() {
  return (
    <div>
      <Book title="The Hunger Games" author="Suzanne Collins" />
      <Book title="Dune" author="Frank Herbert" />
      <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" />
      <hr />
      <BookForm />
    </div>
  );
}
