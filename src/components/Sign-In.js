import React from 'react';
//import Axios from 'axios';

const Login = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Email address'
              required
            />
            <input type='password' name='password' id='password' />
            <button type='submit'>Log In</button>
          </form>
        </div>
      </section>
    </>
  )
}

//Login:-

// Axios.get("http://localhost:3000/api/v1/user/login").get(
//   (data)=> {
//     console.log(data)
//   }
// )

export default Login
