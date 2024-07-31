'use client'
import React, { useEffect, useState } from "react";
import { getProfileBasic } from "../api/getData";

interface ControlledClientData {
    id: string;
    name: string;
    // Agrega los campos adicionales que sean necesarios
  }

const ProfilePage = () => {
    const [profileBasic, setProfileBasic] = useState<ControlledClientData | null>(null);
    const [errorProfileBasic, setErrorProfileBasic] = useState<string | null>(null);

    useEffect(() => {
        getProfileBasic()
          .then((profileBasic: any) => setProfileBasic(profileBasic))
          .catch((errorProfileBasic: any) => setErrorProfileBasic(errorProfileBasic.message));
      }, []);

      if (errorProfileBasic) {
        return <div>Error: {errorProfileBasic}</div>;
      }
    
      if (!profileBasic) {
        return <div>Loading...</div>;
      }

    return ( 
        <div>
            <h1>Profile Page</h1>
            <pre>{JSON.stringify(profileBasic, null, 2)}</pre>

        </div>
    )
}

export default ProfilePage