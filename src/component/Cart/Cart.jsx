import './Cart.css';
import OrderItem from '../../component/OrderItem/OrderItem';
import { Fragment } from 'react';

export default function Cart({ orderItems }) {
    const cartItems = items.map(orderItem => {
        return (
                <Fragment key={orderItem._id}>
                    <OrderItem orderItem={orderItem} />
                </Fragment>
        );
    });
    return(
        <>
            <div className='CartArea'>
                <h2>Menu</h2>
                <div className='Cart'>
                    {cartItems}
                </div>
            </div>
        </>
    )
}