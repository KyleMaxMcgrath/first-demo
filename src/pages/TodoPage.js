import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

function TodoPage() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  console.log("HERE")
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Card>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Add a new todo"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          <Button variant="primary" type="submit">
            Add Todo
          </Button>
          </InputGroup>
        </Form>
        <ul>
          {todos.map((item, index) => (
            <li key={window.crypto.randomUUID()}>
              {item}
              <Button 
                variant="danger" 
                size="sm" 
                onClick={() => handleDelete(index)}
                style={{ marginLeft: '10px' }}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
}

export default TodoPage;

