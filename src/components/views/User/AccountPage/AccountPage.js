import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get, set, useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, userSelector, clearState, clearUser } from 'services/User/UserSlice';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import OrderTable from 'components/tables/Order/OrderTable'

import '../Authorization.styles.css';
import './AccountPage.styles.css';

import store from "store";
import api from 'api';
import services from './AccountPage.service'

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
    await services.getOrders(store.getState().user.id)
      .then(res => {
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
        <div className='account-info'>
          <p>{store.getState().user.name}</p>
          <p>{store.getState().user.phoneNumber}</p>
          <button className='logOut' onClick={logOut}><p>Log Out</p></button>
        </div>
        <div className='orders-info'>
          <h2>Orders</h2>
          <OrderTable orders={ordersList}></OrderTable>
        </div>
       
      </div>
  ) 
}

export default AccountPage;

