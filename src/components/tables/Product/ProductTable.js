import React from 'react';

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
        if (this.props.mode === "cart")
        {
            return(
                <div>
                    <table className="products-table">
                        <tbody>
                            <tr>
                                <td className="products-table-type-cell"><p>Type</p></td>
                                <td className="products-table-cell"><p>Dimensions, mm</p></td>
                                <td className="products-table-cell"><p>Price, $</p></td>
                                <td className="products-table-cell"><p>Count</p></td>
                                <td className="products-table-cell"></td>
                            </tr> 
                            {this.props.products.map((element) => (
                                <Product key={element.id} json={element} mode={this.props.mode} updateTable={this.props.updateTable}></Product>
                            ))}
                        </tbody>
                    </table>
                </div>
            )
        }    
        else if (this.props.mode === "page")
        {
            return(
                <div>
                    <table className="products-table products-table-page">
                        <tbody>
                            <tr>
                                <td className="products-table-cell"><p>Dimensions, mm</p></td>
                                <td className="products-table-cell"><p>Price, $</p></td>
                                <td className="products-table-cell"><p>In stock</p></td>
                                <td className="products-table-cell"></td>
                            </tr>
                            {this.props.products.map(element => (
                                <Product key={element.id} json={element} mode={this.props.mode} updateTable={this.props.updateTable}></Product>
                            ))} 
                        </tbody>
                    </table>
                </div>
            )
        }
        else if (this.props.mode === "order")
        {
            return(
                <div>
                    <table className="products-table products-table-order">
                        <tbody>
                            <tr>
                                <td className="products-table-type-cell"><p>Type</p></td>
                                <td className="products-table-cell"><p>Dimensions, mm</p></td>
                                <td className="products-table-cell"><p>Price, $</p></td>
                                <td className="products-table-cell"><p>Count</p></td>
                            </tr>
                            {this.props.products.map(element => (
                                <Product key={element.id} json={element} mode={this.props.mode} updateTable={this.props.updateTable}></Product>
                            ))} 

                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default ProductTable;