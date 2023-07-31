import './Order.css';
import OrderItem from '../OrderItem/OrderItem';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default async function Order({ order }) {
	const orderItems = await axios.get('http://localhost:3001/api/orders');
	return (
		<>
			<Link to={`/orders/${order._id}`} state={{order}}>
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