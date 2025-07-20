import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-2'>Unbeatable Pricing</h1>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in indian.
                    Flat fees and no hidden charges.</p>
                    <a href='' style={{textDecoration:"none"}} >See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                    
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-2 border'>
                            <h1  className='mb-2'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
                            <p>Free equity delivery and <br/> direct mutual funds</p>
                        </div>
                        <div className='col p-2 border'>
                            <h1 className='mb-2'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
     );
}

export default Pricing;