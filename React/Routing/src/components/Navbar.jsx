
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <Link to="/"><li>Home</li></Link>
    <Link to="/Product"><li>Products</li></Link>
     <Link to="/Product/:id"><li>ProductList</li></Link> 
    </div>
  )
}

export default Navbar
