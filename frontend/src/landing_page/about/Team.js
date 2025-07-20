import React from "react";
function Team() {
  return (
    <div className="container ">
      <div className="row text-center border-top  p-5">
        <h1 className="fs-4 text-muted">People</h1>
      </div>
      <div className="row p-2">
        <div className="col-6 text-center">
          <img
            style={{ width: "60%", borderRadius: "50%" }}
            src="media/image/nithinKamath.jpg"
          />
          <h4 className="mt-2">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6  pl-0 pr-5 mt-4">
          <p style={{ lineHeight: "25px" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{ lineHeight: "25px" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{ lineHeight: "25px" }}> Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a style={{ textDecoration: "none" }} href="#">
              Homepage
            </a>{" "}
            /{" "}
            <a style={{ textDecoration: "none" }} href="#">
              TradingQnA{" "}
            </a>
            /
            <a style={{ textDecoration: "none" }} href="#">
              Twitter{" "}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
