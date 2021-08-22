import React, { useState } from 'react';

const Counter = () => {
  const [ count, setCount ] = useState(0);

  const getCount = () => !count ? 'Ноль' : count;

  const getCountClasses = () => {
    const isDanger = !count ? 'danger' : 'primary';
    return `badge m-2 bg-${isDanger}`;
  }

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <span className={getCountClasses()}>{getCount()}</span>
      <button className='btn btn-secondary btn-sm' onClick={() => handleIncrement({ id: 1 })}>+</button>
      <button className='btn btn-secondary btn-sm' onClick={() => handleDecrement({ id: 1 })} disabled={!count}>-</button>
    </>
  );
}

export default Counter;
