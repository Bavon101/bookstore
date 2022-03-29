import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  return (
    <div>
      <button type="submit" className="status-btn" onClick={() => dispatch(checkStatus())}>
        Check status
      </button>
    </div>
  );
}
