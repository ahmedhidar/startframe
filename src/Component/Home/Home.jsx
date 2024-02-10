import { Component } from "react";
import style from './home.module.css';
import homePic from '../../assets/imgs/avataaars.svg'; 

class Home extends Component {

    render(){
        return<>
        <div className={`${style.bg} p-2`}>
        <div className="container">
        <br/>
            <div className="home-pic py-3 mx-auto text-center">
                <img className={`${style.avatar} mx-auto`} src={homePic} alt="hi"/>
            </div>
            <h2 className="text-center text-uppercase">start framework</h2>
            
            <div className="d-flex justify-content-center align-items-center list-unstyled my-1">
                
            <div className={`${style.line}`}></div>
            <i className={`${style.goldstar} fa-solid fa-star`}></i>
            <div className={`${style.line}`}></div>

            </div>

            <p className="text-center text-white fs-5">Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
        </>
    }
}
export default Home;