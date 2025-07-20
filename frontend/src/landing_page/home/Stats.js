import React from 'react';
function Stats() {
    return (  
        <div className='container p-3'>
                <div className='row p-5'>
                    <div className='col-6 p-5'>
                        <h1 className='fs-2 mb-2'>Trust with confidence</h1>
                        <h2 className='fs-4' >Customer first always</h2>
                        <p className='text-muted' >Thats why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores
                             worth of equity</p>
                        <h2 className='fs-4' >No spam or gimmicks</h2>
                        <p className='text-muted'>No gimmicks, spam "Gamification", or annoying push notification. 
                            High quality apps that you use at your pace, the way you like</p>
                        <h2 className='fs-4' >The Zerodha Universe</h2>
                        <p className='text-muted'>Not just an app, but a whole ecosystem, our investment in 30+ fintech 
                            startups offer you tailerod services</p>
                        <h2 className='fs-4' >Do better with Money</h2>
                        <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transaction, but 
                            actively help you do better with your Money </p>
                    </div>
                    <div className='col-6 p-5'>
                        <img style={{width:"95%"}} src='media/image/ecosystem.png'/>
                        <div className='text-center mt-3'>
                            <a href='' style={{textDecoration:"none"}} className='mx-5'>Explore our Product <i class="fa-solid fa-arrow-right"></i></a>
                            <a href=''style={{textDecoration:"none"}} className=''>Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Stats;
