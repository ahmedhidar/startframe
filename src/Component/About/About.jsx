import React from 'react';
import style from './about.module.css';

export default function About() {
  return (
    <>
    <div className={`${style.bg}`}>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h2 className="text-center text-white text-uppercase  pt-3">ABOUT COMPONENT</h2>
            
            <div className="d-flex justify-content-center align-items-center list-unstyled my-1">
                
            <div className={`${style.line}`}></div>
            <i className={`${style.goldstar} fa-solid fa-star`}></i>
            <div className={`${style.line}`}></div>

            </div>
            <div className="container-fluid">
              <div className="row justify-content-center p-3">
                <div className="col-md-5 p-3">
                  <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-5 p-3">
                  <p className='text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
              </div>
            </div>
    </div>
    </>
  )
}
