import React from 'react'
import {Spring} from 'react-spring/renderprops'

export default function Component1() {
    return (
        <Spring 
            from={{opacity : 0 , marginTop : -500}}
            to={{opacity : 1 , marginTop : 0}}>
                {props => (
            <div style={props}>
                <div style={c1Style}>
                    <h1>Header</h1>
                    <p>
                        Hey, this is the initial para . we're gonna use react spring animations . This is the Top component which is gonna drop from top with a transition of delay and duration.
                        
                    </p>
                    <Spring 
                        from={{number : 0}}
                        to={{number:10}}
                        config={{duration:10000}}>
                            {props => (
                                <div style={props}>
                                    <h2 style={counter}>{props.number.toFixed()}</h2>
                                </div>
                            )}
                    </Spring>
                </div>
            </div>
            )}
        </Spring>
    )
}
const c1Style = {
    padding : '1.5rem',
    background: 'green',
    color : 'white'
}
const counter = {
    background : '#333',
    textAlign : 'center',
    width : '100px',
    borderRadius : '50%',
    margin : '1rem auto'
}