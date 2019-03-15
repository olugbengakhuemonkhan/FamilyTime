import React, {Component} from 'react'
//import About from './About';
import { Link } from 'react-router-dom'



class NavBar extends Component {
  constructor(){
		super();
		this.state = {
			activeLink: ""
		}
	}

	setActiveLink(linkRoute){
		this.setState({
			activeLink: linkRoute
		})
	}
  render(){
    return(
      <div className="container">
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo right">Family Time</a>

            <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li className= "col s1"><Link onClick={()=>{this.setActiveLink('/')}} to="/">
              <span className={this.state.activeLink=='/' ? 'active' : ""}>Home</span></Link></li>
              <li className= "col s1"><Link onClick={()=>{this.setActiveLink('/about')}} to="/about">
                <span className={this.state.activeLink=='/about' ? 'active' : ""}>About</span></Link></li>
              <li className= "col s1"><Link onClick={()=>{this.setActiveLink('/weather')}} to="/weather">
                <span className={this.state.activeLink=='/weather' ? 'active' : ""}>Weather</span></Link></li>
              <li className= "col s1"><Link onClick={()=>{this.setActiveLink('/myCalendar')}} to="/myCalendar">
                <span className={this.state.activeLink=='/myCalendar' ? 'active' : ""}>MyCalendar</span></Link></li>
              <li className= "col s1"><Link onClick={()=>{this.setActiveLink('/movies')}} to="/movies">
                <span className={this.state.activeLink=='/movies' ? 'active' : ""}>Movies</span></Link></li>
              <li className= "col s1"><Link onClick={()=>{this.setActiveLink('/event')}} to="/event">
                <span className={this.state.activeLink=='/event' ? 'active' : ""}>Event</span></Link></li>
            </ul>
          </div>
        </nav>
      </div>





    )
  }
}
export default NavBar;
