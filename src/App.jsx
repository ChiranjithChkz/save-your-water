 
import { Suspense } from 'react';
import './App.css'
import Bottles from './components/Bottles/Bottles'
import Bottle from './components/Bottle/Bottle';

function App() {

  const bottlesPromise = fetch("/public/bottle.json")
  .then(res => res.json());


  return (
    <>
      
      <h1>Water Bottle</h1>
      <Suspense fallback={<h3>Bottles are loading....</h3>}>
      <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
      
      
    </>
  )
}

export default App
