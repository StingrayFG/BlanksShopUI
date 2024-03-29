import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState } from 'services/User/UserSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import '../Authorization.styles.css';
const LoginPage = ({}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, errors, handleSubmit } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );
  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      alert("Wrong login or password")
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      navigate('/');
    }
  }, [isError, isSuccess]);
  
  return(
      <div className="std">
        <h2>Login</h2>
        <div className="login-window">
          <div className="login-window-frame">
            <form onSubmit = {handleSubmit(onSubmit)}>
              <label>
                <p>Phone Number</p>
                <input 
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  type="text"
                  />
              </label>
              <label>
                <p>Password</p>
                <input 
                  id="password"
                  {...register("password")}
                  type="password"
                  />
              </label>
              <div>
                <button><p>Log In</p></button>
              </div>
            </form>
          </div>
        </div>
      </div>
  ) 
}

export default LoginPage;

