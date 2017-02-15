import React from 'react';
import {Link} from 'react-router';

export default function ActionButton() {
  return (
    <div className="fixed-action-btn">
      <button className="btn-floating btn-large purple">
        <i className="large material-icons">mode_edit</i>
      </button>
      <ul>
        <li>
          <Link to="/dashboard/setting" className="btn-floating yellow">
            <i className="material-icons">settings</i>
          </Link>
        </li>
      </ul>
    </div>
  );
}