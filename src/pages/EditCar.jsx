import {useLocation} from 'react-router-dom';

function EditCar() {
    let data = useLocation().state.data;
    return ( 
        console.log(data)
     );
}

export default EditCar;