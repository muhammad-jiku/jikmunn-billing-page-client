import React, { useState } from 'react';
import AddBilling from './AddBilling';

const SearchBilling = ({ handleSearchInput, handleSearch }) => {
  const [addBillModal, setAddBillModal] = useState(null);

  return (
    <div className="bg-gray-400 text-white my-4 p-2 flex flex-row items-center justify-around">
      <div className="flex flex-row items-center justify-around">
        <div className="mx-16">
          <p className="text-xl text-left">Billings</p>
        </div>
        <div className="form-control">
          {/* <form onSubmit={handleSearch}> */}
          {/* Search Input Start */}
          {/* <div className="flex justify-end"> */}
          {/* <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            /> */}
          <input
            onChange={handleSearchInput}
            // required
            type="text"
            name="search"
            className="shadow-md text-black p-3"
            on
            placeholder="Search"
          ></input>
          {/* Search Input End */}
          {/* <button type="submit" className="btn">
              <label
              // htmlFor="my-modal-5"
              // className="btn btn-ghost btn-circle hover:bg-transparent hover:shadow-md hover:shadow-neutral "
              >
                {' '}
                Search
              </label>
            </button>
            {/* </div> */}
          {/* </form> */}
        </div>
      </div>
      <div className=" gap-2">
        <label
          htmlFor="add-new-bill-modal"
          onClick={() =>
            setAddBillModal({
              name: 'name',
              email: 'email',
              phone: 'phone',
              paidAmount: 'paidAmount',
            })
          }
          className="btn btn-primary my-6 modal-button"
        >
          Add New billing
        </label>
      </div>
      {addBillModal && <AddBilling setAddBillModal={setAddBillModal} />}
    </div>
  );
};

export default SearchBilling;
