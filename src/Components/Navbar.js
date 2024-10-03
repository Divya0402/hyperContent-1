import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const yellowInitial = { backgroundColor: "#FDBA2F", color: "#000000" };
const yellowMid = {backgroundColor: "#FDBA2F" ,color: "#ffffff"};
const yellowFinal = {backgroundColor: "#000000" ,color: "#ffffff", borderColor: "#FDBA2F", borderRadius: "7px"};
//const transparentInitial = { backgroundColor: "transparent", color: "#ffffff", borderColor: "#ffffff", borderRadius: "7px" };
//const transparentMid = { backgroundColor: "transparent", color: "#000000", borderColor: "#ffffff", borderRadius: "7px" };
//const transparentFinal = { backgroundColor: "#FDBA2F", color: "#000000", borderColor: "#ffffff", borderRadius: "7px" };
const greenInitial = { backgroundColor: "#008000", color: "#000000", borderColor: "#ffffff", borderRadius: "7px" };
const greenMid = { backgroundColor: "#008000", color: "#ffffff", borderColor: "#008000", borderRadius: "7px" };
const greenFinal = { backgroundColor: "#000000", color: "#ffffff", borderColor: "#008000", borderRadius: "7px" };

export default function Navbar({reference}) {

  const callNowNavRef = useRef(null);
  const callNowNavRippleRef = useRef(null);

  const callNowNavHandleClick = (event) => {
    const callNowNav = callNowNavRef.current;
    const callNowNavRipple = callNowNavRippleRef.current;
    const callNowNavRect = callNowNav.getBoundingClientRect();
    const {left, top} = callNowNavRect;
    const callNowNavLeftPosition = event.clientX - left;
    const callNowNavTopPosition = event.clientY - top;
    callNowNavRipple.style.left = callNowNavLeftPosition + "px";
    callNowNavRipple.style.top = callNowNavTopPosition + "px";
    callNowNavRipple.classList.add("callNowNavActive");
    setTimeout(() => {
      callNowNavRipple.classList.remove("callNowNavActive");
    },1000);
    setColor(yellowMid);
    setTimeout(() => {
      setColor(yellowFinal);
    },600);
  }

  const callNowNavHandleClickRemove = () => {
    const callNowNavRipple = callNowNavRippleRef.current;
    setColor(yellowInitial);
    callNowNavRipple.classList.remove("callNowNavActive");
  }

  const whatsappNavRef = useRef(null);
  const whatsappNavRippleRef = useRef(null);

  const whatsappNavHandleClick = (event) => {
    const whatsappNav = whatsappNavRef.current;
    const whatsappNavRipple = whatsappNavRippleRef.current;
    const whatsappNavRect = whatsappNav.getBoundingClientRect();
    const {left, top} = whatsappNavRect;
    const whatsappNavLeftPosition = event.clientX - left;
    const whatsappNavTopPosition = event.clientY - top;
    whatsappNavRipple.style.left = whatsappNavLeftPosition + "px";
    whatsappNavRipple.style.top = whatsappNavTopPosition + "px";
    whatsappNavRipple.classList.add("whatsappNavActive");
    setTimeout(() => {
      whatsappNavRipple.classList.remove("whatsappNavActive");
    },1000);
    setColour(greenMid);
    setTimeout(() => {
      setColour(greenFinal);
    },600);
  }

  const whatsappNavHandleClickRemove = () => {
    const whatsappNavRipple = whatsappNavRippleRef.current;
    setColour(greenInitial);
    whatsappNavRipple.classList.remove("whatsappNavActive");
  }


  const callNowNav2HandleClick = () => {
    setColor(yellowMid);
    setTimeout(() => {
      setColor(yellowInitial);
    },600);
  }

  const callNowNav2HandleClickRemove = () => {
    setColor(yellowInitial);
  }

  const whatsappNav2HandleClick = () => {
    setColour(greenMid);
    setTimeout(() => {
      setColour(greenInitial);
    },600);
  }

  const whatsappNav2HandleClickRemove = () => {
    setColour(greenInitial);
  }

  const handleToggler = ()=>{
    if (toggler === false) {
      setToggler(true);
    } else {
      setToggler(false);
    }
  }

  const handleTogglerContent = ()=>{
    setToggler(false);
  }

  const handleTogglerHomeContent = ()=>{
    setToggler(false);
    setVisible(true);
  }

  const handleTogglerBlogsContent = ()=>{
    setToggler(false);
    setVisible(false);
  }

  const handleTogglerAboutContent = ()=>{
    setToggler(false);
    reference.current.scrollIntoView({behavior:"smooth"});
    
  }

  const handleClickHome = ()=>{
    setVisible(true);
  }

  const handleClickBlogs = ()=>{
    setVisible(false);
  }

  const [color, setColor] = useState(yellowInitial);
  const [colour, setColour] = useState(greenInitial);
  const [toggler, setToggler] =useState(false);
  const [visible, setVisible] =useState(true);



  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#05010E" }}>
      <div className="container-fluid">
        <Link className="navbar-brand mx-3" to="/" onClick={handleTogglerHomeContent}>
          <img src="logo.jpeg" alt="logo" style={{ height: "40px", width: "40px" }} />
        </Link>
        <button onClick={handleToggler} style={{marginRight:"20px"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="#navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="#navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item" onClick={handleClickHome}>
              <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#ffffff" }}>Home</Link>
            </li>

            {visible?<li className="nav-item" onClick={handleTogglerAboutContent}>
              <Link className="nav-link" to="#" style={{ color: "#ffffff" }}>About</Link>
            </li>:null}
          
            <li className="nav-item" onClick={handleClickBlogs}>
              <Link className="nav-link active" aria-current="page" to="/blogs" style={{ color: "#ffffff" }}>Blogs</Link>
            </li>
          </ul>
          <div>
            <button className="btn me-2 callNowNav" ref={callNowNavRef} type="button" onMouseEnter={callNowNavHandleClick} onMouseLeave={callNowNavHandleClickRemove} style={color}>
              <span className="callNowNavText">Call Now</span>
              <span ref={callNowNavRippleRef} className="callNowNavRippleEffect"></span>
            </button>
          </div>
          <div>
            <button className="btn me-2 whatsappNav" ref={whatsappNavRef} type="button" onMouseEnter={whatsappNavHandleClick} onMouseLeave={whatsappNavHandleClickRemove} style={colour}>
              <span className="whatsappNavText">Whatsapp</span>
              <span ref={whatsappNavRippleRef} className="whatsappNavRippleEffect"></span>
            </button>
          </div>
          
        </div>
      </div>
      <div>
        {
          toggler?<div className="togglerDiv" style={{width:"100vw", backgroundColor:"transparent"}}>
            <ul className="navbar-nav" style={{padding:"0 20px"}}>
              <li className="nav-item" onClick={handleTogglerHomeContent}>
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#ffffff" }}>Home</Link>
              </li>
              {visible?<li className="nav-item" onClick={handleTogglerAboutContent}>
                <Link className="nav-link" to="#" style={{ color: "#ffffff" }}>About</Link>
              </li>:null}
              <li className="nav-item" onClick={handleTogglerBlogsContent}>
                <Link className="nav-link active" aria-current="page" to="/blogs" style={{ color: "#ffffff" }}>Blogs</Link>
              </li>
            </ul>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", textAlign:"center",padding:"0 20px"}}>

              <button className="btn togglerInsideBtn" type="button" onClick={handleTogglerContent} onMouseEnter={callNowNav2HandleClick} onMouseLeave={callNowNav2HandleClickRemove} style={color}>
                Call Us
              </button>

              <button className="btn togglerInsideBtn" type="button" onClick={handleTogglerContent} onMouseEnter={whatsappNav2HandleClick} onMouseLeave={whatsappNav2HandleClickRemove} style={colour}>
                Whatsapp
              </button>
            </div>
          </div>:null
        }
      </div>
        
    </nav>
  );
}
