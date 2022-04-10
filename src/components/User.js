import "../styles/User.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
    const json = await response.json();
    setUser(json[0]);
  }, [id]);

  return (
    <div className="detail-user">
      <h3>User Detail </h3>
      <div className="detail-user-info">
        <ul>
          {user !== null &&
            Object.entries(user).map(([key, value]) => (
              <li key={key}>
                <span> {key} </span>
                <span>{JSON.stringify(value)}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default User;
