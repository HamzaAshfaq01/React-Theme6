import React from 'react'
import content from '../Data/data'
// import logo from '../../images/logo.png'
import '../../CSS/footer.css'
class Footer extends React.Component{
    state={
     data:content
    }
     
    render(){
        let response = this.state.data.map((item,index)=>{            
            let footer_menu=item.footer.footer_menus.map((list,i)=>{
                return (
                <li key={i}>{list}</li>
                )
            })
            return <div className="footer-holder" key={index}>
                   <div className="footer-logo"><img src={item.footer.footer_logo}/></div>
                   <div className="footer-contact-info">
                    <h3>{item.footer.footer_contact.heading}</h3>
                   <div className="contact-inner">
                  <div className="location">
                      <i class="fas fa-map-marker-alt">
                      </i>{item.footer.footer_contact.address}
                      </div>
                <div className="email">
                    <i class="far fa-envelope"></i>
                    <small>{item.footer.footer_contact.email1}</small>
                    <small>{item.footer.footer_contact.email2}</small></div>
                <div className="phone">
                <i class="fas fa-phone"></i>
                <small>{item.footer.footer_contact.phone}</small>
                <small>{item.footer.footer_contact.phone}</small>
                </div>
                   </div>
                   <ul className="social">
                      <li><i class="fab fa-facebook-f"></i></li> 
                      <li><i class="fab fa-twitter"></i></li> 
                      <li><i class="fab fa-linkedin-in"></i></li> 
                      <li><i class="fab fa-google-plus-g"></i></li> 
                   </ul>
                   </div>
                   <div className="menus">
                   <h3>{item.footer.footer_menu_heading}</h3>
                   {footer_menu}
                   </div>
                   <div className="recent-post">
                    <h3>{item.footer.footer_post_heading}</h3>
                    <small>
                        {item.footer.footer_contact.recent_post}
                    </small>
                   </div>
                   <div className="newsletter">
                    <h3>{item.footer.footer_newsletter_heading}</h3>
                    <input type="text" placeholder="Your Email"/>
                    <button>{item.footer.footer_contact.newsletter_btn}</button>
                   </div>
            </div>
            
        });
        return <div className='footer'>
               {response}             
        </div>
    }
}

export default Footer;