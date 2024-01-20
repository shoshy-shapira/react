import './App.css'
import Login from './admin/Login'
import AdminHome from './admin/AdminHome';
import { useState } from 'react'

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {
        !isLogin ?
          <Login onLoginSuccess={() => setIsLogin(true)} /> :
          <AdminHome/>//רק במקרה ויהיה אמת יועבר לקומפוננטה
          
      }

    </>
  )
}

export default App
