import React from 'react';
import {
  Link,
} from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>
        Bookstore CMS
      </h1>
      <Link className="Link" to="/">BOOKS</Link>
      <Link className="Link" to="/categories">CATEGORIES</Link>
    </header>
  );
}
