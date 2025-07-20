import React from 'react';
function CreateTicket() {
    return ( 
       <div className='conatiner'>
        <div className='row mt-5 mb-5 p-5'>
            <h1 className='fs-2'>To create a ticket, select a relevent topic</h1>
            <div className='col-4 mt-5 mb-5 p-5'>
                <h4> <i class='fa fa-plus-circle' aria-hidden="true" ></i> Account opening</h4>
            </div>
        </div>
       </div>
     );
}

export default CreateTicket;