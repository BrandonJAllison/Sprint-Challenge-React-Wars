import React from 'react';

const StarWars = (props) => {
    console.log(props);
    return(
    <div className ="characterCard">

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