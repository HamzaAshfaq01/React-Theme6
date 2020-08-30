import React from 'react'
import content from '../Data/data'
// import logo from '../../images/logo.png'
import '../../CSS/business.css'
class Business extends React.Component{
    state={
     data:content
    }
     
    render(){
        let response = this.state.data.map((item,index)=>{            
            let boxes=item.business_boxes.map((box,i)=>{
                return (
                    <div className="business-box" key={i}>
                        <h1>{box.box_numb}</h1>
                         <h3>{box.box_text}</h3>
                       </div>
                )
            })
            return <div className="business-holder" key={index}>
                   <div className="business-heading">
                   <div className="numb"><h1>{item.business_header.number}</h1></div>
                   <div className="business-heading-right">
                  <h5>{item.business_header.aboutus}</h5>
                  <h1>{item.business_header.grow}<span>  {item.business_header.grow_span}</span></h1>
                  <p>{item.business_header.para}</p>
                   </div>
                   </div>
                  <p>{item.business_header.paragraph}</p>
                  <button className="business-btn">{item.business_header.btn_text}</button>
                   <div className="business-boxes">
                       {boxes}  
                   </div>
                   
                
            </div>
            
        });
        return <div className='business'>
               {response}             
        </div>
    }
}

export default Business;