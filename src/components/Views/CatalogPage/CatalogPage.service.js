import React from 'react';

import api from 'api';

const CatalogPageService = {

  getCards: async function () {
    return await fetch(api.baseUrl + 'catalog/get/all', {method: 'GET'})
      .then(res => res.json())
      .then(res => {
        return res;
      })
      .catch(error => {
        console.error(error);
        return null;
      })
  }
}

export default CatalogPageService;
