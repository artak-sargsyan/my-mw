import React from 'react'
import './FormStyles.css'
import {useEffect} from 'react';




const Form = () => {
  

function handeleCallbackResponse(response){
    console.log("Encoded JWT ID token:" + response.credentials);
  }

// useEffect(() => {

//   google.accounts.id.initialize({
//     client_id:"48631160555-7sati5jnc4nelb90lt5pp83bgklkli5t.apps.googleusercontent.com",
//     callback: handeleCallbackResponse
//   });

//   google.accounts.id.renderButton(
//     document.getElementById("signInDiv"),
//     {theme: "outline", size:"large"}
//   );


// },[])

  return (
    <div className='form'>
       <form >
           <label>անուն</label>
           <input type='text'></input>
           <label>ազգանուն</label>
           <input type='text'></input>
           <label>email</label>
           <input type='text'></input>
           <label>մեկնաբանություն</label>
           <textarea rows='6' placeholder='գրեք Ձեր կարծիքը'/>
           <button className='btn'>ՀԱՍՏԱՏԵԼ </button>
           <button id="signInDiv" > </button>

       </form>
    </div>
  )
}

export default Form