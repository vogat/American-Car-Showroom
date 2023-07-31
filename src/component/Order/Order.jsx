import './Order.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Order({ order, getOrderDetails }) {
	const response = getOrderDetails(order);
	// console.log(response.then(a => console.log(a)));
	console.log(response)
	const data = response
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