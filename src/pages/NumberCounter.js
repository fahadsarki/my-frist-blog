import React, {useState} from 'react'
import styled from 'styled-components';

const NumberCounter = () => {
  const [counter, setCounter] = useState(0);

  const Button = styled.button ({
    margin : "0.5rem",
  });

  const Heading = styled.h1 ({
    margin : "1rem",
  });

  const Increment = () => {
    setCounter(counter + 1);
  };

  const Decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
    
     
      <Button onClick={Increment} >☝️</Button>
      <Heading> {counter} </Heading> 
      <Button onClick={Decrement} >👇</Button>
    </div>
  )
}

export default NumberCounter