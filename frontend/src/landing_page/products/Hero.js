import React from "react";
function Hero() {
  return (
    <div className="container border-bottom mb-5 p-4">
      <div className="row text-center mt-5 mb-5 ">
        <h2>Zerodha Products</h2>
        <h4 className="text-muted">Sleek, modern, and intuitive trading platforms</h4>
        <p>
          Check out our{" "}
          <a style={{ textDecoration: "none" }} href="#">
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
