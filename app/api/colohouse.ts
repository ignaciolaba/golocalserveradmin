import type { NextApiRequest, NextApiResponse } from 'next';

export const dynamic = 'force-dynamic'; // defaults to auto

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const response = await fetch('https://core.hivelocity.net/api/v2/account/controlled-client', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-api-key': process.env.API_KEY as string,
      },
    });

    if (!response.ok) {
      res.status(response.status).json({ error: 'Failed to fetch data' });
      return;
    }

    const controlledClientData = await response.json();
    res.status(200).json(controlledClientData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}