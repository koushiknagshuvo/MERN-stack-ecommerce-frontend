import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import Spinner from '../Spinner';

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get('/api/v1/auth/admin-auth', {
        headers: {
          Authorization: auth?.token,
        },
      });
      if (res.data.ok) {
        setOk(true);
        console.log('olk');
      } else {
        setOk(false);
        console.log('olklk');
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner path="" />;
}
