import { Link } from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return(
        <div className="NavBar">
            <div className="NavItems">
                <h2>NavBar</h2>
                <Link to='/'>Home</Link>
                <br/>
                <br/>
                <Link to='/orders'>Orders</Link>
            </div>
        </div>
    )
}