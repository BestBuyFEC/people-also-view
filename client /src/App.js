import React from 'react';
import './App.css';


import { useEffect, useState } from 'react';
import DemoCarousel from './slider';


function App() {
  const [product, setproduct] = useState(null)
    
  useEffect(() => {
      getlist()
  },[])

  const getlist = () => {
      fetch('http://localhost:3025/api/product')
      .then(res => res.json())
      .then(data => setproduct(data))
      .catch(error => console.log(error))
  }
  return (
    <div className="also_viewed">
      <DemoCarousel product={product}/>
   
    </div>
  );
}

export default App;
