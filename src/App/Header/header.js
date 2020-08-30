import React from 'react'
import content from '../Data/data'
// import logo from '../../images/logo.png'
import '../../CSS/header.css'
class Header extends React.Component{
    state={
     data:content
    }
     
    render(){
        let response = this.state.data.map((item,index)=>{
            let nav_items = item.nav.map((link,ind)=>{
                return (<li key={ind}>
                    {link}
                    </li>)
              });
            return <div className="header-holder" key={index}>
                <div className="navbar">
            <div className="logo">
                <img src={item.logo}/>
            </div>
            <div className="nav-right">
            <ul className="main-menu">
                {nav_items}  
                </ul>
            <button className="nav-btn">{item.navbtn}</button>
            <span><i class="fas fa-search"></i></span>
            </div>
            </div>
            <div className="header-text">
            <h1>{item.header_text.heading1}</h1>
            <h2>{item.header_text.heading2}</h2>
            <p>{item.header_text.paragragh}</p>
            <button>{item.header_text.btn_text}</button>
            </div>
            </div>
            
        });
        return <div className='header'>
               {response}             
        </div>
    }
}

export default Header;