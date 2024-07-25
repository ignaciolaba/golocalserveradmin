export async function getData() {
    const res = await fetch('/api/route', {
      method: 'GET',
    });
  
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
  }