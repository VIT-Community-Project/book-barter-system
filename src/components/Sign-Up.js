import React from 'react'

const SignUp = () => {
  return (
    <>
      <section className='showcase login'>
        <div className='showcase-overlay'>
          <form className='form-control'>
            <input
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              required
            />
            <input
              type='phoneNumber'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='PhoneNumber'
              required
            />
            <input
              type='street'
              name='street'
              id='street'
              placeholder='HouseNumber/Street'
              required
            />
            <input
              type='city'
              name='city'
              id='city'
              placeholder='City'
              required
            />
            <input
              type='state'
              name='state'
              id='state'
              placeholder='State'
              required
            />
            <input
              type='country'
              name='country'
              id='country'
              placeholder='Country'
              required
            />
            <input
              type='pincode'
              name='pincode'
              id='pincoder'
              placeholder='ZIP Code'
              required
            />
            <input
            type='email'
            name='email'
            id='email'
            placeholder='Email address'
            required
          />
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Choose your password'
            />
            <input
              type='password'
              name='password2'
              id='password2'
              placeholder='Confirm your password'
            />

            <button type='submit'>Create Your Account</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default SignUp
