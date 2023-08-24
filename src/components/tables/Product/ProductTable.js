import React from 'react';
import { Navigate } from 'react-router-dom';

import Product from 'components/views/Product/Product';

import './ProductTable.styles.css'

import store from "store";
import api from 'api';  

class ProductTable extends React.Component {

    constructor(props) {
        super(props);
    };

    render()
    {
        if (this.props.mode == "cart")
        {
            return(
                <table className="products-table">
                    <tbody>
                        <tr>
                            <td className="products-table-type-cell"><p>Type</p></td>
                            <td className="products-table-cell"><p>Width</p></td>
                            <td className="products-table-cell"><p>Height</p></td>
                            <td className="products-table-cell"><p>Length</p></td>
                            <td className="products-table-cell"><p>Price</p></td>
                            <td className="products-table-cell"><p>Count</p></td>
                        </tr> 
                        {this.props.products.map((element) => (
                            <Product key={element.id} json={element} mode={this.props.mode} updateTable={this.props.updateTable}></Product>
                        ))}
                    </tbody>
                </table>
            )
        }    
        else if (this.props.mode == "page")
        {
            return(
                <table className="products-table">
                    <tbody>
                        <tr>
                            <td className="products-table-cell"><p>Width</p></td>
                            <td className="products-table-cell"><p>Height</p></td>
                            <td className="products-table-cell"><p>Length</p></td>
                            <td className="products-table-cell"><p>Price</p></td>
                            <td className="products-table-cell"><p>In stock</p></td>
                        </tr>
                        {this.props.products.map(element => (
                            <Product key={element.id} json={element} mode={this.props.mode} updateTable={this.props.updateTable}></Product>
                        ))} 
                    </tbody>
                </table>
            )
        }
        else if (this.props.mode == "order")
        {
            return(
                
                    <tr>
                        <tr>
                            <td className="products-table-type-cell"><p>Type</p></td>
                            <td className="products-table-cell"><p>Width</p></td>
                            <td className="products-table-cell"><p>Height</p></td>
                            <td className="products-table-cell"><p>Length</p></td>
                            <td className="products-table-cell"><p>Price</p></td>
                            <td className="products-table-cell"><p>Count</p></td>
                        </tr>
                        {this.props.products.map(element => (
                            <Product key={element.id} json={element} mode={this.props.mode} updateTable={this.props.updateTable}></Product>
                        ))} 
                    </tr>
               
            )
        }
    }
}

export default ProductTable;