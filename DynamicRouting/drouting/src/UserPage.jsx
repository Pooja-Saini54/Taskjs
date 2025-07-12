import React from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
  const { id } = useParams();

  const userData = [
    { id: 123, Name: "Mohan" },
    { id: 234, Name: "Vimal" },
    { id: 345, Name: "Bhanu" },
    { id: 456, Name: "Kamal" }
  ];

  const matchedUser = userData.filter((item) => item.id === Number(id));

  return (
    <div>
      <h2>Matched User</h2>

      {
        matchedUser.map((item) => (
          <div key={item.id}>
            <p>Name: {item.Name}</p>
            <p>ID: {item.id}</p>
          </div>
        ))[0] 
        
      }

    </div>
  );
}

export default UserPage;
