import React from 'react'
import { Link } from 'gatsby'

const navbar = () => {
  return (
    <nav id="main-nav">
      {/* <div className="main-nav">
        <button className="menu-icon" id="menu-icon">
          <i className="fas fa-bars"></i>
        </button>
        <div className="logo">
          <a href="./index.html">
            <h1>Theo's Boutique</h1>
          </a>
          <span className="established">Est. 1982</span>
        </div>
        <div className="shopping-cart-icon" id="shopping-cart-icon">
          <a href="#"><i className="fas fa-shopping-cart"></i></a>
          <span className="num-cart-items" id="num-cart-items">2</span>
        </div>
      </div> */}
      <div className="sub-nav">
        <div className="menu-items" id="menu-items">
          <ul>
            <li><Link to='#new-arrivals'>New Arrivals</Link></li>
            <li><Link to='/boots'>Boots</Link></li>
            <li><Link to='/dress'>Dress</Link></li>
            <li><Link to='/heels'>Heels</Link></li>
            <li><Link to='/athletic'>Athletic</Link></li>
            <li><Link to='#on-sale'>On Sale</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default navbar
