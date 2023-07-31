import './Order.css';
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Order({ order, orderDetail, getOrderDetails }) {
	
	useEffect(() => {
		getOrderDetails(order);
	}, []);

	const data = orderDetail;
	return (
		<>
			<Link to={`/orders/${order._id}`} state={{data}}>
				<div className='CartArea'>
					<h2>{order.username}</h2>
					<h2>{order.price}</h2>
					<h2>{order.isPaid}</h2>
					<div className='Cart'></div>
				</div>
			</Link>
		</>
	);
}