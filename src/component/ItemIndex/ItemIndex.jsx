import { useState } from 'react';
import EditItem from '../../component/EditItem/EditItem';
import Item from '../../component/Item/Item';
import { Fragment } from 'react';

export default function ItemIndex({items, handleEdit, handleDelete}) {
	const allItemsAdmin = items.map(item => {
		return (
			<Fragment key={item._id}>
				<Item item={item} />
				<EditItem editedItem={item} handleEdit={handleEdit} />
				<button onClick={() => {
					handleDelete(item);
				}}>x
				</button>
				<hr />
			</Fragment>
		);
	});

	return (
		<>
			{allItemsAdmin}
		</>
	)
}
