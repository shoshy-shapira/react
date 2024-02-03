import { loginTo } from "../service/serviceServer";
import {  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import BusinesDataStore from "../businesData/BusinesDataStore"; //עבור isLogin
import onlyLogo from '../images/onlyLogo.png'




function Login() {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    // try {
    const { value: formValues } = await Swal.fire({
      title: 'התחברות',
      html: `
            <label>שם משתמש:
              <input type="text" id="username" class="swal2-input">
            </label>
            <label>סיסמה:
              <input type="password" id="password" class="swal2-input">
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
    if (x === 2)
      navigate('/failed');
    })

    //מכאן לסרבר
    //   if (formValues) {
    //     const { username, password } = formValues;
    //     const response = await axios.post('http://localhost:8787/login', { name: username, password });
    //     if (response.status === 200) {
    //       console.log('success');
    //       BusinesDataStore.isLogin=true;
    //       // onLoginSuccess();
    //       navigate('/admin');
    //     }
    //   }
    // } catch (error) {
    //   if (error.response && error.response.status === 401) {
    //     console.log('login failed');
    //     navigate('/failed');
    //   } else {
    //     console.log(error);
    //     navigate('/failed');
    //   }
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
