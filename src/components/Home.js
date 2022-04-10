import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import GetIcon from "./GetIcon";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setTimeout(async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await response.json();
      setUsers(json);
    }, 250);
  }, []);

  return (
    <div className="home">
      <div className="user-list">
        <h3>Users</h3>
        {users.length === 0 ? (
          <div>
            <h4>Loading...</h4>
          </div>
        ) : (
          users.map((user) => (
            <div className="user" key={user.id}>
              <h3>{user.name}</h3>
              <Link to={`user/${user.id}`} className="user-detail-link">
                <GetIcon icon="BsArrowRight" size={18} />
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
