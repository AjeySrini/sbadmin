import React, { useState } from "react";
import {
    AiOutlineVerticalRight,AiOutlineVerticalLeft
} from "react-icons/ai";

const Sidebar = ({ children }) => {
  const [isActive, setActive] = useState(null);

  const handleClick = (elementId) => {
    if (elementId === isActive) {
      setActive(null); // Close the clicked element if already active
    } else {
      setActive(elementId); // Open the clicked element
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div className="container">
      <div style={{ width: isOpen ? "500px" : "75px" }} className="sidebar">
        <div className="top_section">
          <div className="sidebar-brand rotate-n-15">
            <i className="fas fa-laugh-wink icon"></i>
          </div>
          <div
            className="hidden md:inline ml-4"
            style={{ display: isOpen ? "block" : "none" }}
          >
            SB ADMIN<sup className="font-extrabold">2</sup>
          </div>
        </div>
        <hr className="border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0" />
        <div className="sidebar-brand flex flex-col md:flex-row justify-evenly items-center mt-0 md:mt-2 w-full">
          <i className="fas fa-fw fa-tachometer-alt text-sm w-1/10 text-center"></i>
          <span className="text-xs md:text-base font-bold mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4" style={{ display: isOpen ? "block" : "none" }} >
            Dashboard
          </span>
         
        </div>
        <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}>Dashboard</p>
        <hr className="border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0" />
        <div className="sidebar-brand flex flex-col md:flex-row justify-center md:justify-start items-center text-white text-xs mt-4 md:ml-4 font-light"  style={{ display: isOpen ? "block" : "none" }}>
          INTERFACE
        </div>
        <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}>INTERFACE</p>
        <div
          className="flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer"
          onClick={() => handleClick("div1")}
        >
          <div className="sidebar-brand flex flex-col md:flex-row justify-evenly items-center mt-0 md:mt-2 w-full">
            <i className="fas fa-fw fa-cog w-1/10 text-center"></i>
            <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4" style={{ display: isOpen ? "block" : "none" }}>
              Components
            </span>
            <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
          </div>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingRight:"4px"}}>Components</p>
       
          {isActive === "div1" && (
            <div className="flex flex-col bg-white mt-2 rounded-md  w-full justify-start">
              <h6 className="collapse-header">Custom Components:</h6>
              <p className="collapse-item">Buttons</p>
              <p className="collapse-item">Cards</p>
            </div>
          )}
        </div>
        <div
          className="flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer"
          onClick={() => handleClick("div2")}
        >
          <div className="sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full">
            <i className="fas fa-fw fa-cog w-1/10 text-left"></i>
            <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4" style={{ display: isOpen ? "block" : "none" }}>
              Utilities
            </span>
            <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
          </div>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"5px"}}>Utilities</p>
       
          {isActive === "div2" && (
            <div className="flex-col bg-white mt-2 rounded-md  w-full">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <p className="collapse-item">Colors</p>
              <p className="collapse-item">Borders</p>
              <p className="collapse-item">Animation</p>
              <p className="collapse-item">Other</p>
            </div>
          )}
        </div>
        <hr className="border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0" />
        <div className="sidebar-brand flex flex-col md:flex-row justify-center md:justify-start items-center text-white text-xs mt-4 md:ml-4 font-light" style={{ display: isOpen ? "block" : "none" }}>
          ADDONS
        </div>
        <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}>ADDONS</p>
       
        <div
          className="flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer"
          onClick={() => handleClick("div3")}
        >
          <div className="sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full">
            <i className="fas fa-fw fa-folder w-1/10 text-left"></i>
            <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4" style={{ display: isOpen ? "block" : "none" }}>
              Pages
            </span>
            <i className="fa-solid fa-chevron-right hidden md:inline w-1/10 text-end"></i>
          </div>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}>Pages</p>
       
          {isActive === "div3" && (
            <div className="flex flex-col bg-white mt-2 rounded-md  w-full">
              <h6 className="collapse-header">Login Screens:</h6>
              <p className="collapse-item">Login</p>
              <p className="collapse-item">Register</p>
              <p className="collapse-item">Forgot</p>
              <h6 className="collapse-header">Other Pages:</h6>
              <p className="collapse-item">404 Page</p>
              <p className="collapse-item">Blank Page</p>
            </div>
          )}
        </div>
        <div className="flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer">
          <div className="sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full">
            <i className="fas fa-fw fa-chart-area w-1/10 text-left"></i>
            <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4"  style={{ display: isOpen ? "block" : "none" }}>
              Charts
            </span>
          </div>
        </div>
        <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}>Charts</p>
       
        <div className="flex flex-col items-start justify-start text-base  text-white md:px-4 md:py-2 mt-2 pointer">
          <div className="sidebar-brand flex flex-col md:flex-row justify-start text-start items-center mt-4 md:mt-0 w-full">
            <i className="fas fa-fw fa-table w-1/10 text-left"></i>
            <span className="text-xs md:text-sm font-light mt-2 md:mt-0 w-4/5 text-center md:text-left md:px-4"  style={{ display: isOpen ? "block" : "none" }}>
              Tables
            </span>
          </div>
        </div>
        <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}>Tables</p>
       

        <hr className="border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0" />
        <div className="top_section" style={{display:"flex",alignItems:"center",justifyContent:"center"}} onClick={toggle}> 
          {isOpen ? <AiOutlineVerticalRight size={38} />:<AiOutlineVerticalLeft  size={38}/>}
        </div>

        <div className="text-center hidden md:flex items-center justify-center mt-4 ">
          <button
            className="rounded-full text-white w-10 h-10 button"
            type="button"
            id="toggleBtn"
          ></button>
        </div>

        <hr className="border-t-1 border-solid border-white ml-2 mr-2 box-content h-0 mt-2 md:mt-0" />
        <div className="text-center hidden md:flex items-center justify-center mt-4 ">
          <button
            className="rounded-full text-white w-10 h-10 button"
            type="button"
            id="toggleBtn"
          ></button>
        </div>
        <div class="sidebar-card d-none d-lg-flex">
          <img
            class="sidebar-card-illustration mb-2"
            src="src/assets/rocket.svg"
            alt="..."
            style={{width:"50%", height:"50%"}}
          />
          <div>
          <p class="text-center mb-2 text-xs color"  style={{ display: isOpen ? "block" : "none" }}>
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}> <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!</p>
       
          <a
            class="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
            style={{ display: isOpen ? "block" : "none" }}
          >
            Upgrade to Pro!
          </a>
          <p style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"white" ,display: isOpen ? "none" : "block",paddingLeft:"8px"}}> Upgrade to Pro!</p>
       
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
