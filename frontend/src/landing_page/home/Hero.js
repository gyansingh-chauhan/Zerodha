import React from 'react';
function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center' >
                <img src='media/image/homeHero.png' className='mb-5' alt='Hero_Image'/>
                <h1 className='mt-5'>Invest in Everything</h1>
                <p>Online platform to Invest in stocks, derivatives, mutual funds</p>
                <button className='p-2 btn btn-primary fs-5' style={{width:"30%",margin:'0 auto'}}>Signup Now</button>
            </div>

        </div>
     );
}

export default Hero;
