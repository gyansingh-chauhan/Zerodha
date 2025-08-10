import React,{useState} from "react";

function OtpPage() {
   
  const divLoginStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    /*  backgroundColor:"skyblue", */
  };
  const inputStyle = {
    width: "60%",
    height: "35px",
    borderRadius: "2%",
  };


const [optNumber,setOtpNumber]=useState(0);
  return (
    <div className="container">
      <div className="row m-5">
        <div className="col-7">
          <img src="media/image/kite.png" alt="kite " />
        </div>
        <div style={divLoginStyle} className="col-5 ">
          <div className="">
            <h1 className="mt-4 mb-4 ">Enter OTP </h1>
            <p className="text-muted">or track your existing application</p>
            <label className="text-muted" htmlFor="mobile-number">
              Enter-OTP
            </label>
            <br></br>

            <input  style={inputStyle} className="" />

            <p className="mt-3" style={{ fontSize: "13px" }}>
              you will receive OTP on entered number
            </p>
            <button style={{ width: "30%" }} className="btn btn-primary">
              Continue
            </button>
          </div>
        </div>
        <p className="text-muted text-center mt-5" style={{ fontSize: "13px" }}>
          By submitting your contact details. You authorise Zerodha to call or
          text you for the puspose of account opening even though you may be
          register on DND
        </p>
      </div>
    </div>
  );
}

export default OtpPage;
