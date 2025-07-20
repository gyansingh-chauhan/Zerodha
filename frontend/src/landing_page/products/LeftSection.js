import React from "react";
function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mb-5">
        <div className="row">
            <div className="col-5 p-5" >
                <img   src={imageUrl}/>
            </div>
            <div className="col-2"></div>
            <div className="col-5 p-5 mt-5" >
                <h1>{productName}</h1>
                <p>{productDescription}</p>

                <div>
                <a style={{textDecoration:"none",marginRight:"125px"}} href={tryDemo}> Try Demo</a>
                <a style={{textDecoration:"none"}} href={learnMore}>Learn More</a>
                </div>
                <div>
                <a style={{textDecoration:"none",marginRight:"50px"}} href={googlePlay}><img src='media/image/googlePlayBadge.svg'  /></a>
                <a style={{textDecoration:"none"}} href={appStore}><img src='media/image/appStoreBadge.svg'  /></a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default LeftSection;
