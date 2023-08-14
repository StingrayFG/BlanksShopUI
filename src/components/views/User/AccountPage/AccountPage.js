import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState, clearUser } from 'services/User/UserSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import '../LoginPage.styles.css';

import store from "store";

const AccountPage = ({}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, errors, handleSubmit } = useForm();
  const { isFetching, isSuccess, isError, errorMessage } = useSelector(
    userSelector
  );

  const user = useSelector(state => state.user);

  const logOut = (data) => {
    dispatch(clearUser());
    navigate('/')
  };

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage);
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      navigate('/');
    }
  }, [isError, isSuccess]);
  
  return(
      <div className="std">
        <h2>Account</h2>
        <h2>{store.getState().user.name}</h2>
        <button onClick={logOut}><p>Log Out</p></button>
      </div>
  ) 
}

export default AccountPage;

