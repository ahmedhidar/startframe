import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.css';

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
  <div className="container">
    <Link className="navbar-brand fs-3 fw-bolder text-uppercase" to="">start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`${style.navhover} fw-bold nav-link fs-5 text-capitalize`} to="about">about</Link>
        </li>
        <li className="nav-item">
          <Link className={`${style.navhover} fw-bold nav-link fs-5 text-capitalize`} to="portfolio">portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className={`${style.navhover} fw-bold nav-link fs-5 text-capitalize`} to="contact">contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
