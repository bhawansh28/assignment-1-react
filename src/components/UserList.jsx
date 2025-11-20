import UserCard from "./userCard.jsx";

const UserList = ({ data }) => {
  return (
    <div className="grid">
      {data.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
};

export default UserList;





// import { useEffect, useState } from "react";
// import UserCard from "./userCard.jsx";

// const UserList = ({ data }) => {
//   const [users, setUsers] = useState([]);

//   // load received data
//   useEffect(() => {
//     setUsers(data);
//   }, [data]);

//   return (
//     <div className="grid">
//       {users.map((user) => (
//         <UserCard 
//           key={user.id} 
//           name={user.name} 
//           age={user.age} 
//           city={user.city} 
//           role={user.role}
//         />
//       ))}
//     </div>
//   );
// };

// export default UserList;
