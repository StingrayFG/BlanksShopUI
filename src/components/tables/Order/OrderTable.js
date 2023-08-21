import React from 'react';
import { Navigate } from 'react-router-dom';

import Order from 'components/views/Order/Order';

import './OrderTable.styles.css'

import store from "store";
import api from 'api';  


class OrderTable extends React.Component {

    constructor(props) {
        super(props);
    };

    render()
    {
        return(
            <table className="products-table">
                <tbody>
                    {this.props.orders.map((element) => (
                        <Order key={element.id} json={element} mode={this.props.mode} updateTable={this.props.updateTable}/>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default OrderTable;