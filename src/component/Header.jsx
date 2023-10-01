import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div style={{ padding: "5px" ,display:"flex",flexDirection:"row"}}>
          <input
            type="text"
            className="text-sm input-group h-1/2 w-4/5 px-4 rounded-md input mt-2"
            placeholder="Search for ..."
            style={{ padding: "5px" }}
          />

         
<div className="btn btn-primary" type="button" style={{ margin: "2px",paddingbottom:"2px" ,marginTop:"8px"}}>
                  <i className="fas fa-search fa-sm"></i>
                </div>
        </div>
        <div
          className="w-1/2 flex flex-row justify-end items-center nav"
          style={{ padding: "5px" }}
        >
          <a
            className="a-1 flex items-center px-3"
            role="button"
            style={{ padding: "5px" }}
          >
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger badge-counter ml-1">3+</span>
          </a>
          <a
            className="a-1 flex items-center px-3"
            role="button"
            style={{ padding: "5px" }}
          >
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger badge-counter ml-2">7</span>
          </a>
        </div>
        <div style={{ padding: "5px" }}>
          <a
            className="a-1 flex items-center px-3"
            role="button"
            style={{ display: "flex" }}
          >
            <span  style={{padding: "8px"}}>Ajey Srinivasu</span>
            <img className="img-profile rounded-full " style={{width:"28px",height:"28px",padding: "2px"}} src="src/assets/profile.svg"  alt=' not' />
          </a>
        </div>
        
      </div>
     
    </>
  );
};

export default Header;
