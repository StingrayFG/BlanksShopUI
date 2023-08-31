import React from 'react';

import api from 'api';

const ProductService = {

    addToCart: async function (userID, productID)
    {
        await fetch(api.baseUrl + 'shoppingcart/add/product?customerID=' + userID + '&productID=' + productID, {method: 'POST'})
    },

    removeFromCart: async function (userID, productID)
    {
        await fetch(api.baseUrl + 'shoppingcart/delete/product?customerID=' + userID + '&productID=' + productID, {method: 'DELETE'})
    },

    updateCount: async function (userID, productID, newCount)
    {
        await fetch(api.baseUrl + 'shoppingcart/update/product/count?customerID=' + userID + '&productID=' + productID + '&count=' + newCount, {method: 'PUT'})
    }
}

export default ProductService;
