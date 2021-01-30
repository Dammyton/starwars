import React from 'react';

function Spinner() {
    return (
        <div className="text-primary mt-5" id="loading-spinner-div">
           <i>Loading starships</i> <i className="fas fa-spinner fa-pulse fa-2x ml-2"></i>
        </div>
    );
}

export default Spinner;