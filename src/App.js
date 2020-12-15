import React from 'react'
import './App.css'
import AddComments from './Components/AddComments/AddComment'
import Inform from './Components/Inform/Inform'

const App =(props)=> {
  return (
    <div className='App'>
      <div><Inform /></div>
      <div><AddComments /></div>
    </div>
  );
}

export default App;
