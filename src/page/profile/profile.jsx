import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setUserData(result);
  }

  return (
    <div className="float-end">
      <table className="table table-hover">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Image</th>
        </tr>

        {userData.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <img
                style={{ width: 100, borderRadius: 100 }}
                src={
                  "http://127.0.0.1:8000/storage/users_image/" + user.file_path
                }
                alt=""
              />
            </td>
            <td>
              <button
                className="btn btn-sm btn-outline-info"
                onClick={() => {
                  navigate("/updateProfile");
                }}
              >
                update profile
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Profile;
