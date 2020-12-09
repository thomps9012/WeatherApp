import React from 'react';

const Form = (props) => {
    return(
        <form onSubmit={props.getWeather}>
            <input
                type='text'
                placeholder='city'
                name='city'
                />
                <br></br>
                <br></br>
            <input
                type='text'
                placeholder='country'
                name='country'
                />
                <br></br>
                <br></br>
                <button class="btn btn-outline-dark btn-lg">Submit</button>
        </form>
    )
}

export default Form;