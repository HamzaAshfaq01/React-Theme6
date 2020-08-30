import React from 'react'
import content from '../Data/data'
// import logo from '../../images/logo.png'
import '../../CSS/portfolio.css'
class Portfolio extends React.Component{
    state={
     data:content
    }
     
    render(){
        let response = this.state.data.map((item,index)=>{            
            let boxes=item.portfolio_images.map((img,i)=>{
                return (
                    <div className="portfolio-box" key={i}>
                        <img src={img.portfolio_img}/>
                       </div>
                )
            })
            return <div className="portfolio-holder" key={index}>
                   <div className="portfolio-heading">
                   <div className="numb"><h1>{item.portfolio_header.number}</h1></div>
                   <div className="portfolio-heading-right">
                  <h5>{item.portfolio_header.aboutus}</h5>
                  <h1><span>{item.portfolio_header.grow_span}</span> {item.portfolio_header.grow}</h1>
                  <p>{item.portfolio_header.para}</p>
                   </div>
                   </div>
                   <div className="portfolio-boxes">
                       {boxes}  
                   </div>
                   <p>{item.portfolio_header.paragraph}</p>
                   <button className="portfolio-btn">{item.portfolio_header.btn_text}</button>
            </div>
            
        });
        return <div className='portfolio'>
               {response}             
        </div>
    }
}

export default Portfolio;