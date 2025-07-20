import React from "react";
import { Link } from "react-router-dom";
function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <p className="fs-4 text-muted">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog
        </p>
        <h2 className="mt-5 mb-3">The Zerodha Universe</h2>
        <p className=" text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center">
        <div className="col-3 mt-5 p-4">
          <img
            style={{ width: "70%" }}
            src="media/image/zerodhaFundhouse.png"
          />
          <p style={{ fontSize: "15px" }} className="text-muted mt-4">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3 mt-5 p-4">
          <img style={{ width: "100%" }} src="media/image/sensibullLogo.svg" />
          <p style={{ fontSize: "15px" }} className="text-muted mt-4 ">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3 mt-5 p-4">
          <img style={{ width: "60%" }} src="media/image/tijori.svg" />
          <p style={{ fontSize: "15px" }} className="text-muted mt-4 ">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-3 mt-5 p-4">
          <img style={{ width: "70%" }} src="media/image/streakLogo.png" />
          <p style={{ fontSize: "15px" }} className="text-muted mt-4">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3 mt-5 p-4">
          <img style={{ width: "100%" }} src="media/image/smallcaseLogo.png" />
          <p style={{ fontSize: "15px" }} className="text-muted mt-4 ">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-1"></div>
        <div className="col-3 mt-5 p-4">
          <img style={{ width: "60%" }} src="media/image/dittoLogo.png" />
          <p style={{ fontSize: "15px" }} className="text-muted mt-4 ">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "20vh" }}
        >
          <button className="btn btn-primary w-25 py-2">Sign up for free</button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
