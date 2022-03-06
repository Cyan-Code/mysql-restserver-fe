import './App.css';
import { AuthProvider } from './context/AuthProvider';
import { AppRoute } from './routes/AppRoute';

function App () {
  
  return (
    <AuthProvider>
      <AppRoute/>
    </AuthProvider>
  );
}

export default App;
