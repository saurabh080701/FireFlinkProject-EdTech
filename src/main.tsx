
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UserContextProvider from './Context/AuthContext.tsx'
import UsersContextProvider from './Context/UserContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <UserContextProvider>
      <UsersContextProvider>
        <App/>
      </UsersContextProvider>
    </UserContextProvider>
  
)
