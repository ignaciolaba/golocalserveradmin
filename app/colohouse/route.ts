export async function getData() {
    const res = await fetch('https://core.hivelocity.net/api/v2/inventory/locations', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-api-key': process.env.API_KEY as string,
      },
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }