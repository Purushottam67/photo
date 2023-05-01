

import './App.css';
import {  useRef, useState } from 'react';

function App() {
  const refl  = useRef()
  const [image ,  setimage] = useState("")
  const handle =(event)=>{
    setimage(URL.createObjectURL(event.target.files[0]))

  }
 
  
  return (
    <>
    <div className="App">
      <header className="App-header">
                                


<hr />

<input type="file"  ref={refl} onChange={handle }    />

<hr />
<img src={image} height= "250" width="250" alt="" />
<button  onClick={han
} >clickme</button>







      </header>
    </div>
    </>
  );
}

export default App;
