import React, { useState } from 'react';
import AddBilling from './AddBilling';

const SearchBilling = ({ handleSearchInput, handleSearch }) => {
  const [addBillModal, setAddBillModal] = useState(null);

  return (
    <div class="bg-gray-400 text-white my-4 p-2 flex flex-row items-center justify-around">
      <div class="flex flex-row items-center justify-around">
        <div className="mx-16">
          <p className="text-xl text-left">Billings</p>
        </div>
        <div class="form-control">
          <form onSubmit={handleSearch}>
            {/* Search Input Start */}

            {/* <div className="flex justify-end"> */}
            {/* <input
              type="text"
              placeholder="Search"
              class="input input-bordered"
            /> */}
            <input
              onBlur={handleSearchInput}
              // required
              type="text"
              name="search"
              className="shadow-md text-black p-3"
              on
              placeholder="Search"
            ></input>

            {/* Search Input End */}

            <button type="submit" className="btn">
              <label
              // htmlFor="my-modal-5"
              // className="btn btn-ghost btn-circle hover:bg-transparent hover:shadow-md hover:shadow-neutral "
              >
                {' '}
                Search
              </label>
            </button>
            {/* </div> */}
          </form>
        </div>
      </div>
      <div class=" gap-2">
        <button
          className="btn btn-primary"
          onClick={() =>
            setAddBillModal({
              name: 'name',
              email: 'email',
              phone: 'phone',
              paidAmount: 'paidAmount',
            })
          }
        >
          {' '}
          Add New billing{' '}
        </button>
      </div>
      {addBillModal && <AddBilling setAddBillModal={setAddBillModal} />}
    </div>
  );
};

export default SearchBilling;
