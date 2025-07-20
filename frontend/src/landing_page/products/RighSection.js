import React from "react";
function RightSection({
  imageUrl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container ">
      <div className="row ">
        <div style={{paddingTop:"50px"}} className="col-5  p-5">
          <h3 className="text-muted">{productName}</h3>
          <p className="text-muted">{productDescription}</p>
          <a style={{ textDecoration: "none" }} href={learnMore}>
            Learn more
          </a>
        </div>
        <div className="col-7">
          <img  src={imageUrl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
