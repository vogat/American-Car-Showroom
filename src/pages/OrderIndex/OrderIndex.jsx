import Header from '../../component/Header/Header';
import NavBar from '../../component/NavBar/NavBar';
import './OrderIndex.css';
import axios from 'axios';
import { Fragment } from 'react';
import Order from '../../component/Order/Order'


export default function OrderIndex({ orders, setOrders }) {

    async function getOrderDetails(order) {
		try {
			const response = await axios.get(`http://localhost:3001/api/orders/${order._id}`);
			setOrders(response.data);
		} catch (err) {
			console.log(err);
		}
	}
	console.log(orders);
    const allOrders = orders.map(order => {
		console.log(order);
        return (
                <Fragment key={order._id}>
                    <Order order={order} />
                </Fragment>
        );
        }
    )

    return(
    <div className="Home">
        <NavBar />
        <Header />
        {allOrders}
    </div>
    )
}