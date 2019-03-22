import React from 'react';
import StarWars from './StarWars';




const StarWarsList = (props) => {
    console.log(props);
    return (
        <div className='container'>
            {props.starwarsChars.map((char) => {
                return <StarWars char={char} />
            })
            }
        </div>
    )
}


export default StarWarsList;