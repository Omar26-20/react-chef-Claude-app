import React from 'react';
import './App.css'
import Header from './Header'
import Main from './Main'


function App() {

  

  
  return (
    <>
      <Header />
      <Main />     
      
    </>
  )
}

export default App



/*
function signUp(formData) {
      const email = formData.get("email");
      const password = formData.get("password");
      const employmentStatus = formData.get("employmentStatus");
      console.log(email);
      console.log(password);
      console.log(employmentStatus);
  }  

  const [username, setUsername] = React.useState("Omar");


const handleClick = () => {
    console.log("I was clicked!")
  }
  
  const mouseOver = () => {
    alert("Mouse is over the image!")
  }

*/


/*
<main className='app-main'>
            <section>
              <h1>Signup Form</h1>
              <form action={signUp} method="POST" className='app-form'>
                <label htmlFor='email'>Email: </label>
                <input id="email" type="email" name='email' placeholder='omar@example.com'/>
                <br />

                <label htmlFor='password'>Password: </label>
                <input id="password" type='password' name='password' />
                <br />

                <label htmlFor='description'>Description: </label> <br />
                <textarea id="description" name='description'></textarea>
                <br />

                <fieldset>
                  <legend>Employment Status</legend>
                  <label>
                    <input type='radio' name='employmentStatus' value="Unemployed"/>
                    Unemployed
                  </label>
                  <label>
                    <input type='radio' name='employmentStatus' value="Part-time"/>
                    Part-time
                  </label>
                  <label>
                    <input type='radio' name='employmentStatus' value="Full-time"/>
                    Full-time
                  </label>
                </fieldset>

                <button>Submit</button>

              </form>
            </section>
      </main>
*/