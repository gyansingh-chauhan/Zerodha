import React from 'react';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const newStyle = {
    textDecoration: "none",
    lineHeight: "30px",
    color: "black",
  };

  const menuStyle = {
    position: "absolute",
    top: "70px", // adjust based on your header height
    right: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
    width: "250px", // optional
  };
  const innerStyle={
    marginLeft:"15px",
    marginTop:"15px",
    marginRight:"15px"
  }
  const spanStyle={
    display:"inline-Block",
    height:"20px",
    width:"20px",
    border:"1px solid black",
    borderRadius:"50%",
    padding:"10px",
    margin:"auto 0",
   /*  justifyContent:"center", */
  }
  const topDivStyle={
    display:"flex",
    justifyContent:"center",
     alignItems:"center",

  }
  const iconStyle={
    width:"28px",
    height:"28px",
    display:"flex",
   justifyContent:"center",
   /*
    alignItems:"center", */
    borderRadius:"50%",
    border:"1px solid white",
    backgroundColor:"rgba(243, 200, 243, 0.4)",
    color:"purple",

    
  }


  return (
    <div className='pop-outer' style={menuStyle}>
      <div id='pop-inner' style={innerStyle} className="">
            <div style={topDivStyle}><div style={iconStyle}>Gy</div><h3> &nbsp;Gyansingh chauhan</h3></div>
{/*          <h4 style={{lineHeight:"30px"}}> <span style={spanStyle}>Gy</span> &nbsp;Gyansingh Chauhan</h4>
 */}         <div style={{width: "100%", height: "1px", backgroundColor: "black", border: "none", margin: "8px 0"}}></div>
        <div className="pl-4"> <Link style={newStyle} className="text-muted">View Profile</Link></div>
        <div style={{width: "100%", height: "1px", backgroundColor: "black", border: "none", margin: "8px 0"}}></div>

        <div className="pl-4"> <Link style={newStyle} className="text-muted">Edit Profile</Link></div>
        <div style={{width: "100%", height: "1px", backgroundColor: "black", border: "none", margin: "8px 0"}}></div>

        <div className="pl-4"> <Link style={newStyle} className="m-2">My Orders</Link></div>
        <div style={{width: "100%", height: "1px", backgroundColor: "black", border: "none", margin: "8px 0"}}></div>

        <div className="pl-4"> <Link style={newStyle} className="muted-text">Account Settings</Link></div>
        <div style={{width: "100%", height: "1px", backgroundColor: "black", border: "none", margin: "8px 0"}}></div>

        <div className=""> <Link style={newStyle} className="m-2">Change Password</Link></div>
      </div>
    </div>
  );
};

export default UserMenu;
