import React from 'react';
// import ReactDOM from 'react-router-dom'
import Header from './Header/header'
import About from './About-Us/about-us'
import Services from './Services/services'
import Portfolio from './Portfolio/portfolio'
import Business from './Business/business'
import Team from './Team/team'
import Footer from './Footer/footer'
import '../CSS/style.css'
// import {BrowserRouter as Router ,Route ,Switch} from 'react-router-dom'
class App extends React.Component{
    render(){
        return <div>
              <Header/>
              <About/>
              <Services/>
              <Portfolio/>
              <Business/>
              <Team/>
              <Footer/>
        </div>
    }
}
export default App;