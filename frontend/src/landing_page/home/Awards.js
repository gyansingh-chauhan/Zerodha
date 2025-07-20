import React from 'react';
function Awards() {
    return ( 
        <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <img src='media/image/largestBroker.svg'/>
                    </div>
                    <div className='col-6'>
                        <h1>Largest stock broker in India</h1>
                        <p className='p-2'>2+ million of Zerodha client contibute to over 15%  of all retailer order
                            volumes in India by trading and Investing in it.
                        </p>
                        <div className='row p-3'>
                            <div className='col-6 p-2'>
                                    <ul>
                                        <li className='p-1'>Futures and Options</li>
                                        <li className='p-1'>Commodity derivatives</li>
                                        <li className='p-1'>Currency derivatives</li>
                                    </ul>
                            </div>
                            <div className='col-6 p-2'>
                                    <ul>
                                        <li className='p-1'>Stocks and IPOs</li>
                                        <li className='p-1'> Direct Mutual funds</li>
                                        <li className='p-1'>Bond and Gov. securities</li>
                                    </ul>
                            </div>
                            <img style={{width:"90%"}} className='mt-5' src='media/image/pressLogos.png'/>
                        </div>
                    </div>
                </div>
        </div>
     );
}

export default Awards;