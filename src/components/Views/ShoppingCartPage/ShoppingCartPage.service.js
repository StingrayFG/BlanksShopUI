import React from 'react';

import api from 'api';
import store from "store";

const CatalogPageService = {

  getCart: async function() {
    return await fetch(api.baseUrl + 'shoppingcart/get/currentbycustomer?customerID=' + store.getState().user.id, {method: 'GET'})
        .then(res => res.json())
        .then(res => {
            return res;
        })
        .catch(error => {
            console.error(error);
            return null;
        })
  },

  createOrder: async function()
  {
    fetch(api.baseUrl + 'order/add?customerID=' + store.getState().user.id + '&paymentMethod=cash', {method: 'POST'})
        .then(res => {
            return res;
        })
  }

}

export default CatalogPageService;
