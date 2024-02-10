import React from 'react';
import style from './contact.module.css';

export default function Contact() {
  return (
    <>
            <h2 className="text-center text-uppercase  pt-5">CONATCT SECTION</h2>
            
            <div className="d-flex justify-content-center align-items-center list-unstyled my-1">
                
            <div className={`${style.line}`}></div>
            <i className={`${style.goldstar} fa-solid fa-star`}></i>
            <div className={`${style.line}`}></div>

            </div>
<br/>
<br/>
            <div className="container my-4">
              <input type='text' placeholder='user name' autoFocus className='form-control w-75 p-2 my-4 mx-auto'/>
              <input type='number' placeholder='user age' className='form-control w-75 p-2 my-4 mx-auto'/>
              <input type='email' placeholder='user email' className='form-control w-75 p-2 my-4 mx-auto'/>
              <input type='password' placeholder='userpassword' className='form-control w-75 p-2 my-4 mx-auto'/>
               <div className='w-75 mx-auto'><button className='btn btn-success'>send message</button></div>
            </div>
    </>
  )
}
