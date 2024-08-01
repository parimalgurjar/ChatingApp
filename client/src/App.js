import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './components/context/AccountProvider';


function App() {
  const clientId='936950268148-qno7d5v0d90ecavsldhq0bsu179r54br.apps.googleusercontent.com'
  return (
    < GoogleOAuthProvider clientId={clientId} >
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    
    </ GoogleOAuthProvider >
  );
}

export default App;
