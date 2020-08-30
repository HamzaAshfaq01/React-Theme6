import React from 'react'
import content from '../Data/data'
// import logo from '../../images/logo.png'
import '../../CSS/services.css'
class Services extends React.Component{
    state={
     data:content
    }
     
    render(){
        let response = this.state.data.map((item,index)=>{            
            let boxes=item.services_boxes.map((box,i)=>{
                return (
                    <div className="service-box" key={i}>
                        <img src={box.box_image}/>
                        <h3>{box.box_heading}</h3>
                        <p>{box.box_paragraph}</p>
                       </div>
                )
            })
            return <div className="services-holder" key={index}>
                   <div className="services-heading">
                   <div className="numb"><h1>{item.services_header.number}</h1></div>
                   <div className="services-heading-right">
                  <h5>{item.services_header.aboutus}</h5>
                  <h1><span>{item.services_header.grow_span}</span> {item.services_header.grow}</h1>
                   </div>
                   </div>
                   <div className="services-boxes">
                       {boxes}  
                   </div>
            </div>
            
        });
        return <div className='services'>
               {response}             
        </div>
    }
}

export default Services;