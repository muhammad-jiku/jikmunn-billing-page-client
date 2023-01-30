import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage?.getItem('accessToken');

  useEffect(() => {
    if (user) {
    }
  }, [user]);

  const signingOut = async () => {
    await localStorage?.removeItem('accessToken');
    navigate('/login');
  };
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
        <ul className="menu menu-horizontal px-1">
          {user ? (
            <>
              <li>
                {' '}
                <p>Total Cost: 0</p>{' '}
              </li>{' '}
              <li>
                <button
                  className="btn btn-primary text-white"
                  onClick={signingOut}
                >
                  Sign out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
