import { Button } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { server } from '../../main';
import { useDispatch } from "react-redux";
import { login, logout } from '../../store/reducer/Reducers';

const VenderDashbord = () => {
  const dispatch=useDispatch();


    const info= async()=>{
      try {
        console.log('Attempting to fetch data...');
        const { data } = await axios.get(`${server}/vender/details`,{ withCredentials: true,});
        console.log('Data received:', data);
        dispatch(login())
      } catch (error) {
        dispatch(logout())
        console.error('Error fetching data:', error);
      }
    }


  return (
      <div>VenderDashbord

        <Button onClick={info}>Info</Button>

    </div>
  )
}

export default VenderDashbord