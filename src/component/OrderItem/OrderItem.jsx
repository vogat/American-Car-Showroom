import './OrderItem.css'
import {useLocation} from 'react-router-dom';

export default function OrderItem() {
	console.log('here')
	const data = useLocation().state.data;
	console.log(data)
	console.log(data.order)
	console.log(data.orderItems)
	const allItems = data.orderItems.map(item => {
		return <h6>{item.title}</h6>
	})
    return (
      <div id="orderItems">
          <h3 id="title">Title: {data.order.username} - {data.order.price}</h3>
          
       </div>
    )
}