import { useState } from 'react';
import {Link} from 'react-router-dom'

const Navbar = ({category,page}) => {
  
  if(page)
  return (
    <div>
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                NewsApp
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link active" style={{color:page === 'world' ? 'white' : 'grey'}} href="/" onClick={()=> category('world')}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link"  style={{color:page === 'sports' ? 'white' : 'grey'}} href="/sports" onClick={()=> category('sports')}>
                      Sports
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" style={{color:page === 'politics' ? 'white' : 'grey'}} href="/politics" onClick={()=> category('politics')}>
                      Politics
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" style={{color:page === 'cricket' ? 'white' : 'grey'}} href="/" onClick={()=> category('cricket')}>
                      Cricket
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" style={{color:page === 'football' ? 'white' : 'grey'}} href="/" onClick={()=> category('football')}>
                      Football
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" style={{color:page === 'india' ? 'white' : 'grey'}} href="/" onClick={()=> category('india')}>
                      India
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
  )
}

export default Navbar;
