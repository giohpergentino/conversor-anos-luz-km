import './sidebar.css'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer'

export default function Sidebar() {
  return (
    <div className='containerSidebar'>
      <div className='sidebar'>
        <Link className='link' to="/">
          <p>Pagina Inicial</p></Link>
        <Link className='link' to="/infos">
          <p>Info</p>
        </Link>
        
      </div>
      <Footer/>
    </div>
  )
}
