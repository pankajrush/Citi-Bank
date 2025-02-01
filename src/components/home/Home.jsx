import React from "react";
import "./Home.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/twostepverify')
  }

  return (
    <div className="home">
      <div className="navbar">
        <div className="left-nav">
          <img src={logo} alt="" />
        </div>
        <div className="right-nav">
          <div className="firstone first">
            <span className="material-symbols-outlined">location_on</span>
            <p>ATM / BRANCH</p>
          </div>
          <div className="secondone first">
            <span className="material-symbols-outlined">language</span>
            <p>ESPANOL</p>
          </div>
        </div>
      </div>
      <div className="home-body">
        <form className="body-container" onSubmit={handleSubmit}>
          <h1>Sign On</h1>
          <div className="inputfield">
            <input type="text" placeholder="User ID" required/>
            <input type="password" placeholder="Password" required/>
          </div>
          <div className="checkbox">
            <input type="checkbox" required />
            <p>Remember User ID</p>
          </div>
          <button>Sign On</button>
          <div className="footer">
            <div className="first-footer">
              <p>Forgot User ID?</p>
              <p>Forgot Password</p>
            </div>
            <div className="second-footer">
              <p>Active a Card</p>
              <p>Register for Online Access</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
