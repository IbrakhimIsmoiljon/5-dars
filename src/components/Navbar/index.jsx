import React from "react";
// import LogoImage from '../assets/images/Group 137.png'
import logo from '../../assets/images/Group 137.png'

const index = () => {
  return (
    <>
      <header className="bg-success">
        <div className="navbar">
          <div className="container">
            <nav className="nav d-flex w-100 justify-content-between">
              <h2 className="nav__logo">
                <img src={logo} alt="" />
              </h2>
              <ul className="nav__ul w-50 d-flex justify-content-between list-unstyled text-uppercase align-items-center">
                <li className="nav__ul--list">
                  <a href="#" className="nav__ul--list-link text-light text-decoration-none">
                    Beranda
                  </a>
                </li>
                <li className="nav__ul--list">
                  <a href="#" className="nav__ul--list-link text-light text-decoration-none">
                    Koleksi
                  </a>
                </li>
                <li className="nav__ul--list">
                  <a href="#" className="nav__ul--list-link text-light text-decoration-none">
                    Syarat dan Ketentuan
                  </a>
                </li>
                <li className="nav__ul--list">
                  <a href="#" className="nav__ul--list-link text-light text-decoration-none">
                    Kontak
                  </a>
                </li>
                <button className="btn btn-outline-light">Masuk</button>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
