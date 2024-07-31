'use server'

export async function getProfileBasic() {
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


export async function getOrders() {
  try {
    const response = await fetch('https://core.hivelocity.net/api/v2/order', {
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