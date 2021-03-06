import React from 'react';

const SignUp = ({handleChange}) => (
  <div>
    <h4>Sign Up</h4>
    <label htmlFor="display-name"> Name: </label>
    <input onChange={handleChange} type="text" id="display-name" name="username"  required />
    <label htmlFor="display-password"> Password:</label>
    <input onChange={handleChange} type="text" id="display-password"  name="password"  required />
    <button name="submit" type="submit" value="submit-true">
    Submit
    </button>
  </div>
)

export default SignUp;