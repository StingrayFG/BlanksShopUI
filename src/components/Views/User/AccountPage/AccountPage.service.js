import React from 'react';

import api from 'api';

const AccountPageService = {

  getOrders: async function  (id) {
    return await fetch(api.baseUrl + 'order/get/bycustomer?customerID=' + id, {method: 'GET'})
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(error => console.error(error))
  }
}

export default AccountPageService;
