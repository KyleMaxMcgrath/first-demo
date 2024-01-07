import React, { useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';


function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <InputGroup>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <FormControl type="text" value={count} readOnly />
    </InputGroup>
  );
}

export default CounterPage;

