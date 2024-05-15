import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
     <header>
         <div className="container">
          <div className="inner-content">
               <div className="brand">
                 <Link to={"/"}>Your`s Watch List</Link>
                 </div>
               <ul className="nav-links">
                <li> <Link to={"/Watched "}> Watched</Link>  </li>
                <li>
                   <Link to={"/add"} className='btn'> + Add</Link>
                </li>
               </ul>
          </div>
        </div>
     </header>
  )
}

export default  Header
