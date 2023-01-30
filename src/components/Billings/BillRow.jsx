import React, { useState } from 'react';

const BillRow = ({ bill, setUpdateBillModal, setConfirmDltBillModal }) => {
  const { _id, name, email, phone, paidAmount } = bill;
  return (
    <tr>
      <th style={{ backgroundColor: 'white' }}>{_id}</th>
      <th style={{ backgroundColor: 'white' }}>{name}</th>
      <th style={{ backgroundColor: 'white' }}>{email}</th>
      <th style={{ backgroundColor: 'white' }}>{phone}</th>
      <th style={{ backgroundColor: 'white' }}>{paidAmount}</th>

      <th style={{ backgroundColor: 'white' }}>
        <label
          htmlFor="update-bill-modal"
          className="btn btn-primary text-white font-bold"
          onClick={() => setUpdateBillModal(bill)}
        >
          Edit
        </label>{' '}
        <label
          htmlFor="confirm-modal"
          className="btn btn-error text-white font-bold"
          onClick={() => setConfirmDltBillModal(bill)}
        >
          Remove
        </label>
      </th>
    </tr>
  );
};

export default BillRow;
