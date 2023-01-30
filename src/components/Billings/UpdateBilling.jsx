import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const UpdateBilling = ({ updateBillModal, setUpdateBillModal }) => {
  const { _id, name, email, phone, paidAmount } = updateBillModal;
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    getValues,
  } = useForm();

  const onSubmit = () => {
    const name = watch('name').toUpperCase();
    const email = watch('email');
    const phone = watch('phone');
    const paidAmount = parseFloat(watch('paidAmount'));

    const updateBilling = {
      name,
      email,
      phone,
      paidAmount,
    };

    fetch(`http://localhost:5000/api/update-billing/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
      },
      body: JSON.stringify(updateBilling),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(data?.message);

        // to close the modal
        setUpdateBillModal(null);
      })
      .catch((err) => {
        //   console.log(err)
        toast.error(err.message);
      });
  };

  return (
    <div>
      <input type="checkbox" id="update-bill-modal" className="modal-toggle" />
      <div
        className="modal modal-bottom sm:modal-middle"
        style={{ backgroundColor: '#FFFFFF', color: 'black' }}
      >
        <div
          className="modal-box relative"
          style={{ backgroundColor: '#FFFFFF', color: 'black' }}
        >
          <label
            htmlFor="update-bill-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            style={{ backgroundColor: '#FFFFFF', color: 'black' }}
          >
            ✕
          </label>
          <h1
            className="text-2xl text-secondary text-center p-4"
            style={{ backgroundColor: '#FFFFFF' }}
          >
            Add new billing detail
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ backgroundColor: '#FFFFFF', color: 'black' }}
          >
            <div className="form-control mb-4">
              <input
                type="text"
                placeholder="Full Name"
                defaultValue={name}
                //   value={user?.name}
                className="input input-bordered input-primary"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                  maxLength: {
                    value: 100,
                    message: 'Name can not be more than 100 letters',
                  },
                })}
                //   readOnly
                required
                // disabled
                style={{ backgroundColor: '#FFFFFF', color: 'black' }}
              />
              <p className="text-red-500 font-semibold">
                {errors?.name?.type === 'required' && (
                  <span>{errors?.name?.message}</span>
                )}
                {errors?.name?.type === 'maxLength' && (
                  <span>{errors?.name?.message}</span>
                )}
              </p>
            </div>
            <div className="form-control mb-4">
              {/* <label className="label">
                <span className="label-text text-primary font-bold">Email</span>
              </label> */}
              <input
                type="email"
                placeholder="Email"
                defaultValue={email}
                //   value={user?.email}
                className="input input-bordered input-primary"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: 'Invalid Email',
                  },
                })}
                //   readOnly
                required
                // disabled
                style={{ backgroundColor: '#FFFFFF', color: 'black' }}
              />
              <p className="text-red-500 font-semibold">
                {errors.email?.type === 'required' && (
                  <span>{errors?.email?.message}</span>
                )}
                {errors.email?.type === 'pattern' && (
                  <span>{errors?.email?.message}</span>
                )}
              </p>
            </div>

            <div className="form-control mb-4">
              {/* <label className="label">
                <span className="label-text text-primary font-bold">
                  Name
                </span>
              </label> */}
              <input
                type="tel"
                placeholder="Phone"
                defaultValue={phone}
                className="input input-bordered input-primary"
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'Phone Number is required',
                  },
                  minLength: {
                    value: 11,
                    message: 'Phone Number can not be less than 11 letters',
                  },
                  maxLength: {
                    value: 11,
                    message: 'Phone Number can not be more than 11 letters',
                  },
                })}
                style={{ backgroundColor: '#FFFFFF', color: 'black' }}
              />
              <p className="text-red-500 font-semibold">
                {errors.phone?.type === 'required' && (
                  <span>{errors?.phone?.message}</span>
                )}
                {errors?.phone?.type === 'minLength' && (
                  <span>{errors?.phone?.message}</span>
                )}
                {errors?.phone?.type === 'maxLength' && (
                  <span>{errors?.phone?.message}</span>
                )}
              </p>{' '}
            </div>

            <div className="form-control mb-4">
              {/* <label className="label">
                <span className="label-text text-primary font-bold">
                  Name
                </span>
              </label> */}
              <input
                type="text"
                placeholder="Amount to Pay"
                defaultValue={paidAmount}
                className="input input-bordered input-primary"
                {...register('paidAmount', {
                  required: {
                    value: true,
                    message: 'Amount is required',
                  },
                  //   min: {
                  //     value: 100,
                  //     message: `Bills can not be count below 100 tk`,
                  //   },
                  // max: {
                  //   value: avaialablepaidAmount,
                  //   message: `You can not order above ${avaialablepaidAmount} pcs`,
                  // },
                })}
                style={{ backgroundColor: '#FFFFFF', color: 'black' }}
              />
              <p className="text-red-500 font-semibold">
                {errors.paidAmount?.type === 'required' && (
                  <span>{errors?.paidAmount?.message}</span>
                )}
                {/*      {errors.paidAmount?.type === 'min' && (
                    <span>{errors?.paidAmount?.message}</span>
                  )}
                   {errors.paidAmount?.type === 'max' && (
                    <span>{errors?.paidAmount?.message}</span>
                  )} */}
              </p>{' '}
            </div>

            <div className="form-control mt-6">
              {/* {errorMessage} */}
              <input
                type="submit"
                className="btn btn-primary text-white uppercase"
                value="Update Bill Details"
                //   disabled={errors?.paidAmount}
              />{' '}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBilling;
