import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastSuccessMessage } from '../utils/toastMessages';

function GoogleLoginButton() {

  const navigate = useNavigate();  
    
  const handleSuccess = async (credentialResponse) => {
    const res = await axios.post(
      'http://localhost:8000/user/auth/google/',
      { token: credentialResponse.credential }
    );

    localStorage.setItem('accessToken', res.data.access);
    localStorage.setItem('refreshToken', res.data.refresh);
    ToastSuccessMessage("Login Successful");
    navigate('/')
  };

  return (
    <GoogleLogin
      onSuccess={handleSuccess}
      onError={() => console.log("Login Failed")}
      theme='filled_blue'
    />
  );
}
export default GoogleLoginButton;