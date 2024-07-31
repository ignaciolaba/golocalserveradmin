'use server'

export default async function getData() {
    try {
      const response = await fetch('https://core.hivelocity.net/api/v2/profile/basic', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-api-key': process.env.API_KEY as string,
        },
      });
  
      if (!response.ok) {
    console.log('Failed to fetch data');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }