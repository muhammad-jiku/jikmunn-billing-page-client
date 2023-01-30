import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import BillRow from './BillRow';
import DeleteBill from './DeleteBill';
import SearchBilling from './SearchBilling';
import UpdateBilling from './UpdateBilling';

const BillingLists = () => {
  const [bills, setBills] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [updateBillModal, setUpdateBillModal] = useState(null);
  const [confirmDltBillModal, setConfirmDltBillModal] = useState(null);

  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);

  useEffect(() => {
    fetch(`http://localhost:5000/api/billing-list?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => {
        setBills(data?.data);
        setNumberOfPages(data?.totalPages);
      });
  }, [bills, pageNumber]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/search-billing-list/${searchValue}?page=${pageNumber}`
    )
      .then((response) => response.json())
      .then((data) => {
        setBills(data?.data);
        setNumberOfPages(data?.totalPages);
      });
  }, [bills, searchValue, pageNumber]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, parseInt(pageNumber) - 1));
  };

  const gotoNext = () => {
    setPageNumber(
      Math.min(parseInt(numberOfPages) - 1, parseInt(pageNumber) + 1)
    );
  };

  const handleSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    console.log(searchValue);
    if (searchValue === '') {
      toast('please write something');
      return;
    } else {
      fetch(
        `http://localhost:5000/api/search-billing-list/${searchValue}?page=${pageNumber}`
      )
        .then((res) => res.json())
        .then((data) => {
          setBills(data?.data);
          setNumberOfPages(data?.totalPages);
        });
    }
  };

  return (
    <div>
      {bills?.length === 0 ? (
        <h1 className="text-center text-3xl text-red-500 my-6">
          No Bill details is added yet!
        </h1>
      ) : (
        <>
          <div className="overflow-x-auto w-full p-8">
            <SearchBilling
              handleSearchInput={handleSearchInput}
              handleSearch={handleSearch}
            />
            <table className="table w-full">
              <thead>
                <tr>
                  <th style={{ backgroundColor: '#F3EEEE', color: 'black' }}>
                    Billing Id
                  </th>
                  <th style={{ backgroundColor: '#F3EEEE', color: 'black' }}>
                    Full Name
                  </th>
                  <th style={{ backgroundColor: '#F3EEEE', color: 'black' }}>
                    email
                  </th>
                  <th style={{ backgroundColor: '#F3EEEE', color: 'black' }}>
                    Phone
                  </th>
                  <th style={{ backgroundColor: '#F3EEEE', color: 'black' }}>
                    Bill to pay
                  </th>
                  <th style={{ backgroundColor: '#F3EEEE', color: 'black' }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {bills?.map((bill, idx) => (
                  <BillRow
                    key={idx}
                    bill={bill}
                    idx={idx}
                    setUpdateBillModal={setUpdateBillModal}
                    setConfirmDltBillModal={setConfirmDltBillModal}
                  />
                ))}
              </tbody>
            </table>
            <div className="btn-group flex justify-center">
              <button className="btn focus:btn-active" onClick={gotoPrevious}>
                &lt; &lt; &lt;
              </button>
              {pages.map((pageIndex) => (
                <button
                  key={pageIndex}
                  className="btn focus:btn-active"
                  onClick={() => setPageNumber(pageIndex + 1)}
                >
                  {pageIndex + 1}
                </button>
              ))}{' '}
              <button className="btn focus:btn-active" onClick={gotoNext}>
                &gt; &gt; &gt;
              </button>
            </div>
          </div>{' '}
          {updateBillModal && (
            <UpdateBilling
              updateBillModal={updateBillModal}
              setUpdateBillModal={setUpdateBillModal}
            />
          )}
          {confirmDltBillModal && (
            <DeleteBill
              confirmDltBillModal={confirmDltBillModal}
              setConfirmDltBillModal={setConfirmDltBillModal}
            />
          )}
        </>
      )}
    </div>
  );
};

export default BillingLists;
