import React from 'react'
import content from '../Data/data'
// import logo from '../../images/logo.png'
import '../../CSS/team.css'
class Team extends React.Component{
    state={
     data:content
    }
     
    render(){
        let response = this.state.data.map((item,index)=>{            
            let boxes=item.team_boxes.map((box,i)=>{
                return (
                    <div className="team-box" key={i}>
                        <div className="team-image">
                            <img src={box.team_img}/>
                            <h2>{box.team_name}</h2>
                            <p>{box.team_info}</p>
                        </div>
                       </div>
                )
            })
            return <div className="team-holder" key={index}>
                   <div className="team-heading">
                   <div className="numb"><h1>{item.team_header.number}</h1></div>
                   <div className="team-heading-right">
                  <h5>{item.team_header.aboutus}</h5>
                  <h1><span>{item.team_header.grow_span} </span>{item.team_header.grow}</h1>
                   </div>
                   </div>
                   <div className="team-boxes">
                       {boxes}  
                   </div>
                   
                
            </div>
            
        });
        return <div className='team'>
               {response}             
        </div>
    }
}

export default Team;