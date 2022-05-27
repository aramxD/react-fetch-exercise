
import './App.css';
import Articles from './container/Articles';
import Header from './container/Header';
import { UserProvider } from './context/UserContext';


function App() {
  return (
    <div className="App">

      <UserProvider>
      <Header/>
      

      
       <Articles/>
       </UserProvider>
    </div>
  );
}

export default App;
