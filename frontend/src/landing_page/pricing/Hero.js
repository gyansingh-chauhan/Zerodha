import React from "react";
function Hero() {
  return (
    <div className="container ">
      <div className="row text-center p-5 mt-5 mb-5">
        <h2>Charges</h2>
        <h5 className="text-muted">List of all charges and taxes</h5>
      </div>
      <div className="row ">
        <div className="col p-5">
          <img src="media/image/pricing0.svg" />
          <h1 className="fs-4">Free equity delivery</h1>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-5">
          <img src="media/image/intradayTrades.svg" />
          <h1 className="fs-4">Intraday and F&O trades</h1>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-5">
          <img src="media/image/pricingMF.svg" />
          <h1 className="fs-4">Free direct MF</h1>
          <p className="text-muted mt-3">
           All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
