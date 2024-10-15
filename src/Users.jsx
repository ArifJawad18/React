import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data)); 
     //  console.log((data)) 
  }, []);

  useEffect(() => {}, []);
  return <div>
     <h3>Users:{users.length}</h3>
  </div>;
}
