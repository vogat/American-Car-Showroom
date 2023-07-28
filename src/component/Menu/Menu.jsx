import Item from '../../component/Item/Item';
import { Fragment } from 'react';

export default function Menu({ items }) {
    const allItems = items.map(item => {
        return (
            <Fragment key={item._id}>
                <Item item={item} />
                <hr />
            </Fragment>
        );
    });
    return(
        <>
			{allItems}
		</>
    )
}