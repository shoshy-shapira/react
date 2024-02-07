import './App.css';
import BusinesData from './businesData/BusinesData';
import BusinesDataStore from './businesData/BusinesDataStore';
import Login from './admin/Login';
import onlyLogo from './images/onlyLogo.png'
import { useNavigate } from "react-router-dom";

function App() {
  const navigat = useNavigate();
  BusinesDataStore.isLogin = false;



  return (
    <>
      <BusinesData />
      <div className="homepage_tag">
        <div className="homepage-container">
          <h1 className="homepage-title">ברוכים הבאים</h1>
        </div>
        <div className="flex_home">
        <div className="login-container">
          <button onClick={() => navigat('/user')} >
            לכניסת משתמשים
            <img src={onlyLogo} alt="Button" style={{ marginRight: '8px' }} />
            </button>
            </div>

          <div className="login-container">
            <Login />
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
