import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    

  function showMessage() {
    alert("Button Clicked!");
  }

  function showStudent(Name) {
    alert("Stdent Name:" + Name);
  }

  function change(Event) {
    console.log(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted")
  }

  function handleClick() {
    console.log("Button Clicked")
  }

  function handleMouseEnter() {
    console.log("Mouse Entered")
  }



  return (


//     <div>
// <h2>React Event Example</h2>

// <button onclick ={showMessage}>
//   Click Me 
// </button>
//     </div>

    // <button onclick ={() => alert("Hello React!")}>
    //   click me
    // </button>

/* <div>
  <button onClick={() => showStudent("Akash")}>
    Student 
  </button>
</div> */

/* <div>
  <input type="text" onChange={change} />

</div> */

/* <form onSubmit="{handleSubmit">
  <input type="text" />
  <button type="submit"> Submit </button>
</form> */

<div>
  <button onClick={handleClick} onMouseEnter = {handleMouseEnter}>
    Click Me
  </button>
  <br /> <br />
  <input type="text" onChange={handleChange} />
</div>


    




    
  )
}

export default App
