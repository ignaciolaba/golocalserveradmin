// pages/index.tsx
'use client'
import { useEffect, useState } from 'react';
import getData from './api/getData';

interface ControlledClientData {
  id: string;
  name: string;
  // Agrega los campos adicionales que sean necesarios
}

const Home = () => {
  const [data, setData] = useState<ControlledClientData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getData()
      .then((data) => setData(data))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Prueba</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

export default Home;