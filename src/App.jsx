import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { UserContext } from './contexts/UserContext';
import { Theme } from './contexts/Theme';

function App() {
  // Here we are definining where the "user" state actually exists
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('beachWave');

  // Here we are defining what is the value provided by our context
  // We are "Providing" this value so that descendent elements can "Consume" it from the context
  const contextValue = { user, setUser };
  const themeContextValue = { theme, setTheme };
  return (
    <Theme.Provider value={themeContextValue}>
       <UserContext.Provider value={contextValue}>
        <div className={`wrapper ${theme}`}>
        <div className={`App ${theme}`}>
   
           <h1>Codelicious TODO</h1>
   
           {user && <Heading />}
           {user && <TodoList />}
           {!user && <Login />}
   
            </div>
          </div>
       </UserContext.Provider> 
    </Theme.Provider>
  );
}

export default App;
