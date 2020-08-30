import React from 'react'
import content from '../Data/data'
// import logo from '../../images/logo.png'
import '../../CSS/about-us.css'
class About extends React.Component{
    state={
     data:content
    }
     
    render(){
        let response = this.state.data.map((item,index)=>{
            return <div className="about-holder" key={index}>
                   <div className="about-heading">
                   <div className="numb"><h1>{item.about_header.number}</h1></div>
                   <div className="about-heading-right">
                  <h5>{item.about_header.aboutus}</h5>
                  <h1><span>{item.about_header.grow_span}</span> {item.about_header.grow}</h1>
                  <p>{item.about_header.paragraph}</p>
                   </div>
                   </div>
                   <div className="about-left">
                       <img src={item.about_left_img}/>
                   </div>
                   <div className="about-right">
        <h1>{item.about_right.heading}</h1>
        <p>{item.about_right.paragraph}</p>
                   </div>
            </div>
            
        });
        return <div className='about'>
               {response}             
        </div>
    }
}

export default About;