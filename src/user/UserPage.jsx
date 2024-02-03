
import { useNavigate } from 'react-router-dom';
import Login from '../admin/Login';
import BusinesData from '../businesData/BusinesData';
import BusinesDataStore from '../businesData/BusinesDataStore';
import ServiceList from '../service/ServiceList';
function UserPage() {

  const navigate = useNavigate();


  return (
    <>
      <BusinesData />
        <div class="oneDiv" >
          <ServiceList />
          <button class="Button" onClick={() => navigate('/addMeeting')}> לקביעת פגישה</button>
        </div>
      </>
      


  )
}

export default UserPage

