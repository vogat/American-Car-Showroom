import Header from '../../component/Header/Header'
import Menu from '../../component/Menu/Menu'

export default function Home({ items }) {
    return(
    <div className="Home">
        <Header />
        <Menu items={items} />
    </div>
    )
}