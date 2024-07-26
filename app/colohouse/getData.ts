// colohouse/getData.ts
export default async function getData() {
    try {
      const response = await fetch('/api/colohouse', {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await fetch('https://core.hivelocity.net/api/v2/account/controlled-client');
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }