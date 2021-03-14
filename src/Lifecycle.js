import React, {useState, useEffect} from 'react';

const Lifecycle = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  useEffect(() => {
    console.log(`Este es un useEffect sin dependencias`);
  })
  useEffect(() => {
    console.log(`Este es un useEffect con un [] como dependencias`);
  }, [])
  useEffect(() => {
    console.log(`Este es un useEffect con dependencias para el counter1`);
  }, [count1])
  useEffect(() => {
    console.log(`Este es un useEffect con dependencias para el counter2`);
  }, [count2])

  return (
    <div>
      <h1>Click c1 { count1 }</h1>
      <h1>Click c2 { count2 }</h1>
      <button onClick={() => setCount1(count1 + 1)}>Ingremento c1</button>
      <button onClick={() => setCount2(count2 + 1)}>Ingremento c2</button>
    </div>
  )
};

export default  Lifecycle;