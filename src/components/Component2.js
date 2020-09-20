import React from 'react'
import {Spring} from 'react-spring/renderprops'
export default function Component2({toggle}) {
    return (
        <Spring 
            from={{opacity:0}}
            to={{opacity:1}}
            config={{delay:1000, duration:1000}}>
            {props => (
                <div style={props}>
                    <div style={c2Style}>
                        <h1>Header 2</h1>
                        <p>Hey, this is the another para with animation.</p>
                        <button style={btn} onClick={toggle}>Toggle Component 3</button>
                    </div>
                </div>
            )}
        </Spring>
    )
}
const c2Style = {
    background : 'lightgreen',
    color : 'white',
    padding : '1.5rem'
}
const btn = {
    background : '#4325',
    color : 'white',
    padding : '1rem 2rem',
    border : 'none',
    textTransform : 'uppercase',
    margin : '15px 0',

}