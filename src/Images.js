import React from 'react';

const Images=(props)=>{
    return (
        <div>
            <img src={`./images/${props.conditions}.png`} alt=''/>
        </div>
    )
}

export default Images