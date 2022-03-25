import React from 'react';
import Vr from './Vr';

export default function Book() {
  return (
    <div className="book">
      <div>
        <h6>Action</h6>
        <h2>The Hunger Games</h2>
        <h5>Suzanne Collins</h5>
        <div className="book-options">
          <button type="submit">
            Comment
          </button>
          <Vr />
          <button type="submit">
            Remove
          </button>
          <Vr />
          <button type="submit">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
