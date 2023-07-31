import './Order.css';
import OrderItem from '../OrderItem/OrderItem';
import { Fragment } from 'react';

export default function Order({ order }) {
    return(
        <>
            <div className='CartArea'>
                <h2>{order.username}</h2>
                <h2>{order.price}</h2>
                <h2>{order.isPaid}</h2>
                <div className='Cart'></div>
            </div>
        </>
    )
}