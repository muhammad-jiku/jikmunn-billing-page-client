import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar bg-gray-400">
      <div className="flex-1">
        <ul className="btn btn-ghost normal-case text-xl">
          <li>
            <Link to="/">Jikmunn Billing</Link>
          </li>
        </ul>
      </div>
      <div className="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            {' '}
            <p>Total Cost: 0</p>{' '}
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
