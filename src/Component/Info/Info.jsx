import React from 'react'

export default function Info() {
  return (
    <>
    <div className="container-fluid">

    <div className=' row justify-content-center bg-secondary p-5'>
    <div className="col-lg-3 text-center">
      <h3 className='text-white'>LOCATION</h3>
      <p className='text-white'>2215 John Daniel Drive</p>
      <p className='text-white'>Clark, MO 65243 </p>
    </div>

    <div className="col-lg-3">
    <h3 className='text-white text-center'>AROUND THE WEB</h3>
    <ul className='d-flex list-unstyled justify-content-center'>
      <li><i className="fa-brands fa-facebook fs-4 text-white p-2"></i></li>
      <li><i className="fa-brands fa-twitter fs-4 text-white p-2"></i></li>
      <li><i className="fa-brands fa-linkedin-in fs-4 text-white p-2"></i></li>
      <li><i className="fa-solid fa-globe fs-4 text-white p-2"></i></li>
    </ul>
    </div>
    <div className="col-lg-3">
    <h3 className='text-white text-center'>ABOUT FREELANCER</h3>
    <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

    </div>


    </div>
    </div>
    </>
  )
}
