import React from 'react';
import pic1 from '../../assets/imgs/poert1.png';
import pic2 from '../../assets/imgs/port2.png';
import pic3 from '../../assets/imgs/port3.png';
import style from './portfolio.module.css';

export default function Portfolio() {
  return (
    <>


    <div className="container">
      <div className="row gx-5 gy-3">
        <div className="col-md-12">
        <h2 className="text-center text-uppercase  pt-5">PORTFOLIO COMPONENT</h2>
            
            <div className="d-flex justify-content-center align-items-center list-unstyled my-1">
                
            <div className={`${style.line}`}></div>
            <i className={`${style.goldstar} fa-solid fa-star`}></i>
            <div className={`${style.line}`}></div>

            </div>
        </div>
        <div className='col-lg-4 col-md-6 py-3'>
          <div className={`${style.main}`}>
          <img className={`${style.portpic} rounded`} src={pic1} alt='jj'/>
          <div className={`${style.layerss}`}>
          <i className={`${style.icona} fa-solid fa-plus  text-white`}></i>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 py-3'>
          <div className={`${style.main}`}>
          <img className={`${style.portpic} rounded`} src={pic2} alt='oj'/>
          <div className={`${style.layerss}`}>
          <i className={`${style.icona} fa-solid fa-plus  text-white`}></i>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 py-3'>
          <div className={`${style.main}`}>
          <img className={`${style.portpic} rounded`} src={pic3} alt='mlm'/>
          <div className={`${style.layerss}`}>
          <i className={`${style.icona} fa-solid fa-plus  text-white`}></i>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 py-3'>
          <div className={`${style.main}`}>
          <img className={`${style.portpic} rounded`} src={pic1} alt='lm;l'/>
          <div className={`${style.layerss}`}>
          <i className={`${style.icona} fa-solid fa-plus  text-white`}></i>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 py-3'>
          <div className={`${style.main}`}>
          <img className={`${style.portpic} rounded`} src={pic2} alt='lmlpp'/>
          <div className={`${style.layerss}`}>
          <i className={`${style.icona} fa-solid fa-plus  text-white`}></i>
          </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 py-3'>
          <div className={`${style.main}`}>
          <img className={`${style.portpic} rounded`} src={pic3} alt='jjhg'/>
          <div className={`${style.layerss}`}>
          <i className={`${style.icona} fa-solid fa-plus  text-white`}></i>
          </div>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}
