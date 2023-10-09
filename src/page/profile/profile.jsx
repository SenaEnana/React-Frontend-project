import { useState, useEffect } from "react";

function Profile() {
  const [userData, setUserData] = useState([]);

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
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>
              <img
                style={{ width: 100 }}
                src={
                  "http://localhost:8000/storage/app/public/users_image/" +
                  user.file_path
                }
              />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
export default Profile;
