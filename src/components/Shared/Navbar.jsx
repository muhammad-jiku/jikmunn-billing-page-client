import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-slate-500">
      <div className="flex-1">
        <p className="btn btn-ghost normal-case text-xl">Jikmunn Billing</p>
      </div>
      <div className="flex-none">
        <p> Total Paid: 0</p>
      </div>
    </div>
  );
};

export default Navbar;
