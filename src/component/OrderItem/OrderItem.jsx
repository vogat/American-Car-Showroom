import './OrderItem.css'

export default function OrderItem({item}) {
	const order = useLocation().state.order;
    return (
      <div id="orderItems">
          <h3 id="title">Title: {item.title}</h3>
          <p id="price">Price: {item.price}</p>
          <img id="img" src={item.img} />
       </div>
    )
}