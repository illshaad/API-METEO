import React from 'react';
// import Images from './Images'

const Infos = (props)=>{
    return (
        <div>
            <h4>Location: {props.bidule.name}</h4>
            <h4>Humidity: {props.bidule.main.humidity} %</h4>
            <h4>Temperature: {Math.floor(props.bidule.main.temp-273.15)}°C</h4>
            <h4>Conditions: {props.bidule.weather[0].main}</h4>
            <img src={`./images/${props.bidule.weather[0].main}.png`} width='200'/>
            {/* <Images conditions = {props.bidule.weather[0].main} /> */}
        </div>
    )
}
export default Infos;