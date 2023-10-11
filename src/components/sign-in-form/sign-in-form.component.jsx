import {useState} from 'react';

import FormInput from '../input-button/input-button.component';
import  Button  from '../button/button.component';

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: ''
}


const SignINForm = () => {
    const [formFields, setFromFields] = useState(defaultFormFields);
    const {email, password } = formFields;
    
  
  const resetFormFields = () => {
    setFromFields(defaultFormFields)
  }
  
   const signInWithGoogle = async () => {
     await signInWithGooglePopup();
   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
       await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case "auth/wrong-password" :
          alert('incorrect password');
          break;
        case "auth/user-not-found" :
          alert('incorrect password');
          break;
        case "auth/invalid-login-credentials" :
          alert('Check your email and password again.');
          break;
        default:
          console.log(error);
      }
    }
  }
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFromFields({ ...formFields, [name]: value });
    };

    return (
      <div className="sign-up-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <div className='buttons-container'>          
          <Button type="submit">Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>;
</div>
        </form>
      </div>
    );
}


export default SignINForm;


