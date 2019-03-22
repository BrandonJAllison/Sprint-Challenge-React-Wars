import React from 'react'
const btnStyle = {
    margin: '20px',
    bacgkround: 'white',
    borderRadius: '12px',
    height: '50px',
    width: '100px'
}


const Pages = (props) => {
    console.log('page', props)
    return(
<div>

<button onClick={() => props.getCharacter(props.data.previous)} style ={btnStyle}>Previous</button>
<button onClick={() => props.getCharacter(props.data.next)} style ={btnStyle}>Next</button>

</div>

    )
}


export default Pages;