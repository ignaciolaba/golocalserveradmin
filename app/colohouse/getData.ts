export default async function getData() {
    try {
      const response = await fetch('https://core.hivelocity.net/api/v2/account/controlled-client', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-api-key': process.env.API_KEY as string, // Asegúrate de que la clave de API está definida
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; // Re-lanza el error para que pueda ser manejado en la llamada a getData
    }
  }