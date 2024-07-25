// pages/api/your-endpoint.ts

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest , res: NextApiResponse) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Reemplaza '*' con tu dominio en producción
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
  
    // Aquí va el resto de la lógica de tu endpoint API
    res.json({ message: 'Hello World' });
  }