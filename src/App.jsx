import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './components/start'





function App() {

const [iserror , setiserror] = useState(false);

function  displayerror(){
  setiserror(true);
}

  return (
    <> 
     { 
       !iserror ? <Start  iserror={iserror}  displayerror={displayerror} /> : (
          <div  className='errorpage'>
               <h1> Unexpected error occured !!!!</h1>
          </div>
       )
     }
      

    </>
  )
}

export default App
