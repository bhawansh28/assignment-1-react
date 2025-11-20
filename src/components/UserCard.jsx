const UserCard = ({ user }) => {
  const isAPI = user.picture !== undefined;

  return (
    <div className="card">
      {isAPI && <img src={user.picture.medium} alt={user.name.first} />}

      <h2>
        {isAPI ? `${user.name.first} ${user.name.last}` : user.name}
      </h2>

      <p>Age: {isAPI ? user.dob.age : user.age}</p>
      <p>City: {isAPI ? user.location.city : user.city}</p>
      <p>Role: {isAPI ? "From API" : user.role}</p>
    </div>
  );
};

export default UserCard;



// const UserCard = ({ user }) => {
//   return (
//     <div className="card">
//       <img src={user.picture.medium} alt={user.name.first} />

//       <h2>{user.name.first} {user.name.last}</h2>
//       <p>Age: {user.dob.age}</p>
//       <p>City: {user.location.city}</p>
//       <p>Email: {user.email}</p>
//     </div>
//   );
// };

// export default UserCard;






// const UserCard = ({ name, age, city, role }) => {
//   return (
//     <div className="card">
//       <h2>{name}</h2>
//       <p>Age: {age}</p>
//       <p>City: {city}</p>
//       <p>Role: {role}</p>
//     </div>
//   );
// };

// export default UserCard;
