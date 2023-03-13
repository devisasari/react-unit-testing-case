import { useState } from 'react';
import Input from './components/Input';
import Fibonacci from './components/Fibonacci';
import Card from './components/Card';
import './App.css';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [sequence, setSequence] = useState([]);

  const handleSubmit = (x, y) => {
    setX(x);
    setY(y);
    let sequence = Fibonacci(x, y);
    setSequence(sequence);
  };

  return (
    <div className="App">
      <h1>Fibonacci Sequence</h1>
      <Input onSubmit={handleSubmit} />
      <Card>
        <Fibonacci x={x} y={y} sequence={sequence} />
      </Card>
    </div>
  );
};

export default App;
