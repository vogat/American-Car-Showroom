import {useState} from 'react'

const Add = ({ handleCreate }) => {
    const defaultItem = {
        title: '',
        description: '',
        price: 0,
        category: 'Italian',
        img: ''
    }

    const [item, setItem] = useState(defaultItem)

    const handleChange = (event) => {
        setItem({...item, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleCreate(item)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='title' name='title' onChange={handleChange} />
                <br />
                <br />
                <input type='text' placeholder='description' name='description' onChange={handleChange} />
                <br />
                <br />
                <input type='number' name='price' onChange={handleChange} />
                <br />
                <br />
                <select name='category' onChange={handleChange}>
                    <option value="Italian">Italian</option>
                    <option value="Mexican">Mexican</option>
                    <option value="American">American</option>
                </select>
                <br />
                <br />
                <input type='text' placeholder='image'name='img' onChange={handleChange} />
                <br />
                <br />
                <input type='submit' />
            </form>
        </>
    )
}

export default Add