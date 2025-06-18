import React, { useEffect,useState  } from 'react'

const APIIntegrationUsingfetch = () => {
    // API Integration in React means connecting your React frontend with a backend or third-party service to 
    // fetch, send, update, or delete data using HTTP requests — typically via fetch or axios.

    // 🧠 APIs (Application Programming Interfaces) allow your frontend to “talk” to a server or database and 
    // get real-time data.
  const [users, setUsers] = useState([]);
  useEffect(()=>{

    //https://jsonplaceholder.typicode.com/users
    // [
    //     {
    //         "id": 1,
    //         "name": "Leanne Graham",
    //         "username": "Bret",
    //         "email": "Sincere@april.biz",
    //         "address": {
    //             "street": "Kulas Light",
    //             "suite": "Apt. 556",
    //             "city": "Gwenborough",
    //             "zipcode": "92998-3874",
    //             "geo": {
    //                 "lat": "-37.3159",
    //                 "lng": "81.1496"
    //             }
    //         },
    //         "phone": "1-770-736-8031 x56442",
    //         "website": "hildegard.org",
    //         "company": {
    //             "name": "Romaguera-Crona",
    //             "catchPhrase": "Multi-layered client-server neural-net",
    //             "bs": "harness real-time e-markets"
    //         }
    //     },
    //     {
    //         "id": 2,
    //         "name": "Ervin Howell",
    //         "username": "Antonette",
    //         "email": "Shanna@melissa.tv",
    //         "address": {
    //             "street": "Victor Plains",
    //             "suite": "Suite 879",
    //             "city": "Wisokyburgh",
    //             "zipcode": "90566-7771",
    //             "geo": {
    //                 "lat": "-43.9509",
    //                 "lng": "-34.4618"
    //             }
    //         },
    //         "phone": "010-692-6593 x09125",
    //         "website": "anastasia.net",
    //         "company": {
    //             "name": "Deckow-Crist",
    //             "catchPhrase": "Proactive didactic contingency",
    //             "bs": "synergize scalable supply-chains"
    //         }
    //     }
    // ]
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => setUsers(data))
    .catch((err) => console.log(err));
  },[])
  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user)=>(
            <li key={user.id}>{user.name} - {user.email} - {user.company.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default APIIntegrationUsingfetch
