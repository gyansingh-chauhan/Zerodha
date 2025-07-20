import React from 'react';
function Education() {
    return (  
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                    <img src='media/image/Education.svg' style={{width:"70%"}}/>
                </div>
                <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free and open market education</h1>
                    <p>Varsity, The largest online stock market education book in the world covering
                        everything from basic to advanced trading.
                    </p>
                    <a href='' style={{textDecoration:"none"}} >Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className='mt-5'>TradingQ&A, is the most active trading and investment community in India for
                    all related market queries</p>
                    <a href='' style={{textDecoration:"none"}} >TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>

                </div>
            </div>
        </div>
    );
}

export default Education;