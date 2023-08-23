import React from 'react';

import ProductCard from '../Product/Card'

import api from 'api';

const CatalogService = {

  getCards: async function () {
    return await fetch(api.baseUrl + 'catalog/get/all', {method: 'GET'})
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(error => console.error(error))
  }
}

export default CatalogService;
