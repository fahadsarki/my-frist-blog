import React, {useState} from 'react'
import styled from 'styled-components';
const NumberCounter = () => {
  const [counter, setCounter] = useState(0);

  const Button = styled.button ({
    margin : "0.5rem",
  });

  return (
    <div>
      {counter}
      <Button>☝️</Button>
      <Button>👇</Button>
    </div>
  )
}

export default NumberCounter