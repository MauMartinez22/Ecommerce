import React from 'react';
import '../assests/styles/loader.css'

const Loader = () => {
    return (
<div className='overlay'>
    <div class="half-circle-spinner">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
    </div>
</div>
        )
};

export default Loader;