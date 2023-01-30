import React from 'react';
import { toast } from 'react-toastify';

const DeleteBill = ({ confirmDltBillModal, setConfirmDltBillModal }) => {
  const { _id } = confirmDltBillModal;
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/api/delete-billing/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data?.acknowledged) {
        toast.success(data?.message);
        setConfirmDltBillModal(null);
        // }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message);
      });
  };

  return (
    <div style={{ backgroundColor: '#F3EEEE', color: 'black' }}>
      <input type="checkbox" id="confirm-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div
          className="modal-box"
          style={{ backgroundColor: '#F3EEEE', color: 'black' }}
        >
          <h3 className="font-bold text-lg text-red-700">
            are you sure want to remove billing id: {_id}, from the collection?
          </h3>

          <div className="modal-action">
            <button
              className="btn btn-error text-white font-bold"
              onClick={() => handleDelete(_id)}
            >
              Yes
            </button>
            <label htmlFor="confirm-modal" className="btn">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBill;
