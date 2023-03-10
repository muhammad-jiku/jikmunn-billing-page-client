import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LogIn = () => {
  const [signInToken, setSignInToken] = useState('');

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const location = useLocation();
  const navigate = useNavigate();

  let errorMessage;
  let from = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (signInToken) {
      navigate(from, { replace: true });
    }
  }, [signInToken, navigate, from]);

  const onSubmit = async () => {
    const email = watch('email');
    const password = watch('password');

    const oldUser = {
      email: email,
      password: password,
    };

    // console.log(oldUser);

    // sign in method
    await fetch(`http://localhost:5000/api/login`, {
      method: 'POST',
      headers: {
        // authorization: `Bearer ${localStorage?.getItem('accessToken')}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify(oldUser),
    })
      .then((res) => {
        // console.log('res ', res);
        return res.json();
      })
      .then((data) => {
        if (data) {
          // console.log('data inside user token ', data);
          const accessToken = data?.accessToken;
          localStorage?.setItem('accessToken', accessToken);
          setSignInToken(accessToken);

          toast.success(data?.message);
          reset();
        } else {
          toast.error('Something went wrong');
        }
      })
      .catch((err) => {
        // console.log(err)
        toast.error(err.message);
      });
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Welcome to the Jikmunn Billing. Here you can track your billing
            services cost. So, Login now to start your journey
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-primary font-bold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                  style={{ backgroundColor: 'white' }}
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
                <label className="label">
                  <span className="label-text text-primary font-bold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered input-primary"
                  {...register('password', {
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Password must be at least six letters',
                    },
                  })}
                  style={{ backgroundColor: 'white' }}
                />
                <p className="text-red-500 font-semibold">
                  {errors.password?.type === 'required' && (
                    <span>{errors?.password?.message}</span>
                  )}
                  {errors.password?.type === 'minLength' && (
                    <span>{errors?.password?.message}</span>
                  )}
                </p>
              </div>
              <div className="form-control mt-6">
                {errorMessage}
                <input
                  type="submit"
                  className="btn btn-primary text-white uppercase"
                  value="Login"
                />{' '}
                <p className="text-center font-bold">
                  New here?{' '}
                  <span
                    className="text-primary cursor-pointer"
                    onClick={() => navigate('/registration')}
                  >
                    {' '}
                    sign up now!
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
