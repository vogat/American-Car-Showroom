import Header from '../../component/Header/Header';
import NavBar from '../../component/NavBar/NavBar';
import './OrderIndex.css';


export default function Order({ orders }) {

    async function getOrderDetails(order) {
		try {
			const response = await axios.get(`http://localhost:3001/api/orders/${order._id}`);
			setItems(response.data);
		} catch (err) {
			console.log(err);
		}
	}

    const allOrders = orders.map(order => {
        return (
                <Fragment key={order._id}>
                    <OrderItem order={order} />
                </Fragment>
        );
        }
    )

    return(
    <div className="Home">
        <NavBar />
        <Header />
        <Cart orderItems={orderItems} />
    </div>
    )
}