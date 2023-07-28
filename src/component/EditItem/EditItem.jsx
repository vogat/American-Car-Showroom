import {useState} from 'react'

const Edit = ({handleEdit,editedItem}) => {
  const [item, setItem] = useState({...editedItem})

  const handleChange = (event) => {
    setItem({...item, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleEdit(item)
  }

  return (
    <>
      <details>
        <summary>Edit Item</summary>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='title' name='title'  value={item.title} onChange={handleChange} />
                <br />
                <br />
                <input type='text' placeholder='description' name='description' value={item.description} onChange={handleChange} />
                <br />
                <br />
                <input type='number' name='price' value={item.price} onChange={handleChange} />
                <br />
                <br />
                <select name='category' value={item.category} onChange={handleChange}>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="American">American</option>
                </select>
                <br />
                <br />
                <input type='text' placeholder='image'name='img' value={item.img} onChange={handleChange} />
                <br />
                <br />
                <input type='submit' />
        </form>
      </details>
    </>
  )
}

export default Edit