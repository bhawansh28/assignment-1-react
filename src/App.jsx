import { useState } from "react";
import users from "./data/users";      // local data
import Header from "./components/header.jsx";
import UserList from "./components/userList.jsx";

const App = () => {
  const [userData, setUserData] = useState([]);

  const loadLocalData = () => {
    setUserData(users);
  };

  
  const loadFromAPI = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=30");
      const result = await response.json();
      setUserData(result.results);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div>
      <Header />

      <div style={{ textAlign: "center", marginTop: "20px" }}>

        <button className="load-btn" onClick={loadLocalData}>
          Load Local Data
        </button>

        <button className="api-btn" onClick={loadFromAPI} style={{ marginLeft: "10px" }}>
          Load API Data
        </button>
      </div>

      <UserList data={userData} />
    </div>
  );
};

export default App;



// import { useState } from "react";
// import Header from "./components/header.jsx";
// import UserList from "./components/userList.jsx";

// const App = () => {
//   const [userData, setUserData] = useState([]);

//   const loadFromAPI = async () => {
//     const response = await fetch("https://randomuser.me/api/?results=30");
//     const json = await response.json();

//     // API returns: json.results (array of users)
//     setUserData(json.results);
//   };

//   return (
//     <div>
//       <Header />

//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button onClick={loadFromAPI} className="load-btn">
//           Load Users From API
//         </button>
//       </div>

//       <UserList data={userData} />
//     </div>
//   );
// };

// export default App;






// import { useState } from "react";
// import users from "./data/users";
// import Header from "./components/header.jsx";
// import UserList from "./components/userList.jsx";

// const App = () => {
//   const [userData, setUserData] = useState([]);

//   const handleLoadUsers = () => {
//     // simulate fetching data
//     setUserData(users);
//   };

//   return (
//     <div>
//       <Header />

//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button onClick={handleLoadUsers} className="load-btn">
//           Load Users
//         </button>
//       </div>

//       <UserList data={userData} />
//     </div>
//   );
// };

// export default App;
