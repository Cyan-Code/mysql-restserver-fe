import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store'
import { Routes } from './routes/AppRoutes';
import { Buffer } from 'buffer';
global.Buffer = Buffer;

function App () {
  
  return (
    <Provider store = {store}>
      <Routes/>
    </Provider>
  );
}

export default App;
