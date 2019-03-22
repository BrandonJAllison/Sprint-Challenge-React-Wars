import React from 'react';

const cardStyle = {
border: '2px solid black',
backgroundColor: 'white', 
width: '400px',
height: 'auto',
margin: '15px',
borderRadius: '10px',
fontFamily: 'Roboto Mono',
boxShadow: '-1px 27px 38px -15px rgba(0,0,0,0.75)',

}

const StarWars = (props) => {
    console.log(props);
    return(
    <div style = {cardStyle} >

        <h1>{props.char.name}</h1>
        <h4>Gender:</h4>
        <p>{props.char.gender}</p>
        <h4>Height:</h4>
        <p>{props.char.height}</p>
        <h4>Mass:</h4>
        <p>{props.char.mass}</p>
        <h4>Skin Color:</h4>
        <p>{props.char.skin_color}</p>
        <h4>Eye Color:</h4>
        <p>{props.char.eye_color}</p>

    </div>

    );
}


export default StarWars;