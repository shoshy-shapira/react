import BusinesDataStore from "../businesData/BusinesDataStore"; //עבור isLogin
import { loginTo } from "../service/serviceServer";
import onlyLogo from '../images/onlyLogo.png'
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from "react";




function Login() {
  // useEffect(()=>{

  // },[])
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { value: formValues } = await Swal.fire({
      title: 'התחברות',
      html: `
            <label>שם משתמש:
              <input type="text" id="username" className="swal2-input">
            </label>
            <label>סיסמה:
              <input type="password" id="password" className="swal2-input">
            </label>
          `,
      focusConfirm: false,
      preConfirm: () => {
        const username = Swal.getPopup().querySelector('#username').value;
        const password = Swal.getPopup().querySelector('#password').value;
        return { username, password };
      }
    });
    loginTo(formValues).then(x=>{
    console.log(x)
    if (x === 1){
      navigate('/admin');
      BusinesDataStore.isLogin=true;
    }
    if (x === 2)
      navigate('/failed');
    if (x === 3)
      navigate('/failed');
      
    
    })

  }


  return (
    <>


      <button onClick={handleLogin} >
        לכניסת מנהל
        <img src={onlyLogo} alt="Button" style={{ marginRight: '8px' }} />
      </button>


    </>
  )
}

export default Login
