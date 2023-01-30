import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const BillingLists = () => {
  const [bills, setBills] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    fetch(`http://localhost:5000/api/billing-list?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setBills(data?.data);
        setNumberOfPages(data?.totalPages);
      });
  }, [pageNumber]);

  return (
    <div>
      {bills?.map((bill) => (
        <h1 key={bill?._id}>Hello there</h1>
      ))}
      {pages.map((pageIndex) => (
        <button key={pageIndex} onClick={() => setPageNumber(pageIndex + 1)}>
          {/* {' '}
          {console.log(pages)}
          console.log( '-------------' ) console.log(pageIndex) */}
          {pageIndex + 1}
        </button>
      ))}
    </div>
  );
};

export default BillingLists;
