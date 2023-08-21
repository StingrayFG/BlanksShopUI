import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get, set, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState, clearUser } from 'services/User/UserSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import OrderTable from 'components/tables/Order/OrderTable'

import '../LoginPage.styles.css';

import store from "store";
import api from 'api';

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

  async function getOrders () {
    await fetch(api.baseUrl + 'order/get/bycustomer?customerID=' + store.getState().user.id)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setOrdersList(res);
      })
      .catch(error => console.error(error))
  }
  
  const [ordersList, setOrdersList] = useState([])

  useEffect(() => {
    getOrders()
  }, [])

  return(
      <div className="std">
        <h2>Account</h2>
        <h2>{store.getState().user.name}</h2>
        <button onClick={logOut}><p>Log Out</p></button>
        <h2>Orders</h2>
        <OrderTable orders={ordersList}></OrderTable>
      </div>
  ) 
}

export default AccountPage;

