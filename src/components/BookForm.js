import React from 'react';

export default function BookForm() {
  return (
    <div className="book-form">
      <h2>
        ADD NEW BOOK
      </h2>
      <form action="submit">
        <input type="text" required placeholder="Book title" />
        <input type="text" required placeholder="Author" />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}
