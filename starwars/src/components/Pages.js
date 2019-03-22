import React from 'react'
const btnStyle = {
    margin: '20px',
    bacgkround: 'white',
    borderRadius: '12px',
    height: '50px',
    width: '100px'
}


const Pages = () => {
    return(
<div>

<button style ={btnStyle}>Previous</button>
<button style ={btnStyle}>Next</button>

</div>

    )
}


export default Pages;