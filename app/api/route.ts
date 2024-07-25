import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Reemplaza '*' con tu dominio en producción
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const response = await fetch('https://core.hivelocity.net/api/v2/inventory/locations', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'x-api-key': process.env.API_KEY as string,
    },
  });

  if (!response.ok) {
    res.status(response.status).end();
    return;
  }

  const data = await response.json();
  res.status(200).json(data);
}