import Header from '../../component/Header/Header';
import NavBar from '../../component/NavBar/NavBar';
import './OrderIndex.css';
import axios from 'axios';
import { Fragment, useState } from 'react';
import Order from '../../component/Order/Order'


export default function OrderIndex({ orders, setOrders }) {
	const [orderDetail, setOrderDetail] = useState({});

    async function getOrderDetails(order) {
		try {
			const response = await axios.get(`http://meltinpot.onrender.com/api/orders/${order._id}/`);
			
			setOrderDetail(response.data);
		} catch (err) {
			console.log(err);
		}
	}
	console.log(orders)
    const allOrders = orders.map(order => {
        return (
                <Fragment key={order._id}>
                    <Order order={order} orderDetail={orderDetail} getOrderDetails={getOrderDetails}/>
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
