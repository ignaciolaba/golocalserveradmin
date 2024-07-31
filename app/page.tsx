// pages/index.tsx
'use client'
import { useEffect, useState } from 'react';
import { getProfileBasic } from './api/getData';
import { getOrders } from './api/getData';

interface ControlledClientData {
  id: string;
  name: string;
  // Agrega los campos adicionales que sean necesarios
}

const Home = () => {
  const [profileBasic, setProfileBasic] = useState<ControlledClientData | null>(null);
  const [errorProfileBasic, setErrorProfileBasic] = useState<string | null>(null);
  const [orders, setOrders] = useState<ControlledClientData | null>(null);
  const [errorOrders, setErrorOrders] = useState<string | null>(null);


  useEffect(() => {
    getProfileBasic()
      .then((profileBasic: any) => setProfileBasic(profileBasic))
      .catch((errorProfileBasic: any) => setErrorProfileBasic(errorProfileBasic.message));
  }, []);

  if (errorProfileBasic) {
    return <div>Error: {errorProfileBasic}</div>;
  }

  if (!profileBasic) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    getOrders()
      .then((orders: any) => setOrders(orders))
      .catch((errorOrders: any) => setErrorOrders(errorOrders.message));
  }, []);

  if (errorOrders) {
    return <div>Error: {errorOrders}</div>;
  }

  if (!orders) {
    return <div>Loading...</div>;
  }
  

  return (
    <main>
      <h1>Profile</h1>
      <pre>{JSON.stringify(profileBasic, null, 2)}</pre>
      <h1>Orders</h1>
      <pre>{JSON.stringify(orders, null, 2)}</pre>
    </main>
  );
}

export default Home;