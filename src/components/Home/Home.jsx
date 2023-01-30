import React from 'react';

const Home = () => {
  const user = localStorage?.getItem('accessToken');
  return (
    <div className="hero-content text-center p-4">
      <h1 className="text-xl font-semibold">
        Welcome to the Jikmunn Billing Tracking page.{' '}
        {!user ? <>'Please Login to track your billing data!!'</> : ''}
      </h1>
    </div>
  );
};

export default Home;
