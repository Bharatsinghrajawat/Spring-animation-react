import React,{useState} from 'react';
import {Transition , animated} from 'react-spring/renderprops';
import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

function App() {
  const [showComplete3, setShowComplete3] = useState(false);
  const toggle = (e) => {
    setShowComplete3(!showComplete3);
  }

  return (
    <div>
        <Component1 />
        <Component2 toggle={toggle}/>
        <Transition 
            native
            items={showComplete3}
            from={{opacity : 0}}
            enter={{opacity: 1}}
            leave={{opacity : 0}}>
              {show => show && (props=> (
                <animated.div style={props}>
                    <Component3 />
                </animated.div>
              ))}
        </Transition>
    </div>
  );
}

export default App;
