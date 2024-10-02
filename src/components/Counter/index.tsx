import { publish } from '@/utils/events';
import { useState, useEffect } from 'react';

type CounterProps = {
  initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  useEffect(() => {
    console.log('Componente montado!');
    publish('onCounterMount', { count });

    return () => {
      console.log('Componente desmontado!');
      publish('onCounterUnmount', { count });
    };
  }, []);

  useEffect(() => {
    console.log('Componente atualizado!');
    publish('onCounterUpdate', { count });
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar +</button>
    </div>
  );
};
