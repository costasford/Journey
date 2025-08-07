import './Header.css';
import { Link } from 'react-router-dom';

export default function Header ({handleLogout, user}){

  if(user){
    return (
      <section className="navbar">
      <div className="navbar-items">
        <div className="nav-item"><Link to="/">Home</Link></div>
        <div className="nav-item"><Link to="/aboutus">About Us</Link></div>
        <div className="nav-item"><Link to="/recordings">Recordings</Link></div>
        <div className="nav-item"><Link to="/contactus">Contact Us</Link></div>
        <div className="nav-item"><Link to="/dashboard">Dashboard</Link></div>
      </div>
      <div className='navbar-right'>
        <div className="nav-item"><button className="active nav-button" onClick={handleLogout}>Logout</button></div>
      </div>
    </section> 
    )
  }else{
    return (
      <section className="navbar">
      <div className="navbar-items">
        <div className="nav-item"><Link to="/">Home</Link></div>
        <div className="nav-item"><Link to="/aboutus">About Us</Link></div>
        <div className="nav-item"><Link to="/recordings">Recordings</Link></div>
        <div className="nav-item"><Link to="/contactus">Contact Us</Link></div>
      </div>
      <div className='navbar-right'>
        <div className="nav-item"><Link className="active" to="/login">Login</Link></div>
        <div className="nav-item"><Link to="/signup">Sign Up</Link></div>
      </div>
    </section> 
    )
  }
}