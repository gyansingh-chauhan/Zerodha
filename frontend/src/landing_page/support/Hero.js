import React from 'react';
function Hero() {
    return ( 
        <section className='container-fluid' id='supportHero'>
            <div style={{paddingRight:"10px",paddingLeft:"50px"}} className='  ' id='supportWrapper'>
                <h4>Support portal</h4>
                <a href='#'>Track Ticket</a>
            </div>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-3'>Serch for an answer or browse help topics to create a ticket</h1>
                    <input placeholder='Eg. how do i activate F&O'/> <br/>
                    <a  href='#' style={{}}>Track account opening</a>
                    <a href='#' style={{}}>track segment activation</a>
                    <a href='#' style={{}}>intraday  margin</a>
                    <a href='#' style={{}}>Kite user manual</a>
                </div>
                 <div className='col-6 p-5'>
                <h1 className='fs-3'>Featured </h1>
                <ol>
                    <li><a href='#'>Current takeover and delisting-january 2024</a></li>
                    <li><a href='#'>Latest intraday leverages-MIS & CO</a></li>
                </ol>
            </div>
            </div>
           

        </section>
     );
}

export default Hero;