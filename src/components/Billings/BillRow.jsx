import React from 'react';

const BillRow = ({ bill }) => {
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
          htmlFor="update-modal"
          className="btn btn-primary text-white font-bold"
          //  onClick={() => setConfirmDeleteAccessoryModal(carItem)}
        >
          Edit
        </label>{' '}
        <label
          htmlFor="confirm-modal"
          className="btn btn-error text-white font-bold"
          //  onClick={() => setConfirmDeleteAccessoryModal(carItem)}
        >
          Remove
        </label>
      </th>
    </tr>
  );
};

export default BillRow;