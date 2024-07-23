export default async function handler(req, res) {
    const response = await fetch('https://core.hivelocity.net/api/v2/inventory/product?location=MAIN&group_by=facility', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'X-API-KEY': 'd796b881166d994d42231c5b3fae878ce7ad71fe'
      }
    });
  
    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch data' });
      return;
    }
  
    const data = await response.json();
    res.status(200).json(data);
  }