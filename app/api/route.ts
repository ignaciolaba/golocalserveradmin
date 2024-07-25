export async function getData() {
  const res = await fetch('https://core.hivelocity.net/api/v2/inventory/locations', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-api-key': process.env.API_KEY as string,
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "*" , // Reemplaza "*" con tu dominio en producción
       "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT,OPTIONS",
        "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  }});


  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}