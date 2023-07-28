export default function Item({item}) {
    return (
       <>
          <h3>Title: {item.title}</h3>
          <p>Price: {item.price}</p>
       </>
    )
}