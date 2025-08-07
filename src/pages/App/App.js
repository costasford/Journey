import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import Recordings from '../Recordings/Recordings';
import Layout from '../Layout/Layout';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/Login';
import userService from '../../utils/userService';
import { useState, useEffect } from 'react';
import Dashboard from '../Dashboard/Dashboard';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import Behaviors from '../Behaviors/Behaviors'
import Graph from '../Graph/Graph';
import { getAllBehaviors } from '../../utils/behaviorApi';
import { showAllRecords } from '../../utils/recordApi';
import RecordingList from '../../components/RecordingList/RecordingList';
import DemoNotice from '../../components/DemoNotice/DemoNotice';
import { api, isDemoMode } from '../../utils/apiWrapper';

export default function App() {

  const [user, setUser] = useState(userService.getUser());
  const [behaviors, setBehaviors] = useState([]);
  const [getRecords, setGetRecords] = useState([]);
  const [error, setError] = useState('');
  const [check, setCheck] = useState('Checking value...')

  function handleSignUpOrLogin(){
    setUser(userService.getUser());
  }

  function handleLogout(){
    userService.logout()
    setUser(null);
  }

  async function showAllBehaviors(){
    try {
      const data = isDemoMode() 
        ? await api.getAllBehaviors() 
        : await getAllBehaviors();
      
      setBehaviors(isDemoMode() ? data : {...data.behaviors})
    }catch(err){
      setError(err.message);
      console.log(err, "dashboard page")
    }
}

  useEffect(() => {
    let isMounted = true;
    showAllBehaviors()
      .then(() => {
        if(isMounted) {
          setCheck("Done!")
        }
      });
      return () => {
        isMounted = false;
      }
  }, []);

  async function getAllRecords(){
    try{
      const data = isDemoMode() 
        ? await api.getAllRecordings() 
        : await showAllRecords();
        
      setGetRecords(isDemoMode() ? data : {...data.records})
    }catch(err){
      setError(err.message);
      console.log(err, 'dashboard page')
    }
  }

  useEffect(() => {
    let isMounted = true;
    getAllRecords()
    .then(() => {
      if(isMounted) {
        setCheck("Done!")
      }
    });
    return () => {
      isMounted = false;
    }
  }, [])

  if(user){
    return (
      <>
        <DemoNotice />
        <Routes>
          <Route path="/" element={<Layout handleLogout={handleLogout} user={user} />}>
            <Route index element={<HomePage />}/>
            <Route path='aboutus' element={<AboutUs />}/>
            <Route path="contactus" element={<ContactUs />}/>
            <Route path="recordings" element={<Recordings />}/>
            <Route path="signup" element={<SignUp handleSignUpOrLogin={handleSignUpOrLogin} />}/>
            <Route path="login" element={<Login handleSignUpOrLogin={handleSignUpOrLogin} />}/>
            <Route path='dashboard' element={<DashboardLayout user={user} />}>
              <Route index element={<Dashboard behaviors={behaviors} />}/>
              <Route path='behaviorform' element={<Behaviors />}/>
              <Route path='behavior/:id' element={<Graph behaviors={behaviors}/>}/>
              <Route path='behavior/:id/records' element={<RecordingList behaviors={behaviors} getRecords={getRecords}/>}/>
            </Route>
          </Route>
        </Routes>
      </>
    )
  }

  return (
    <>
      <DemoNotice />
      <Routes>
        <Route path="/" element={<Layout handleLogout={handleLogout} user={user} />}>
          <Route index element={<HomePage />}/>
          <Route path='aboutus' element={<AboutUs />}/>
          <Route path="contactus" element={<ContactUs />}/>
          <Route path="recordings" element={<Recordings />}/>
          <Route path="signup" element={<SignUp handleSignUpOrLogin={handleSignUpOrLogin} />}/>
          <Route path="login" element={<Login handleSignUpOrLogin={handleSignUpOrLogin} />}/>
        </Route>
      </Routes>
    </>
  );
}
