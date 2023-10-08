function Profile() {
  return (
    <div className="float-end">
      <h5 className="text-lighter p-2">name:</h5>
      <h5 className="text-lighter p-2">email:</h5>
      <h5 className="text-lighter p-2">role:</h5>
      <h5 className="text-lighter p-2">image:</h5>
      <h5 className="text-lighter p-2">password:</h5>
      <button className="btn btn-outline-danger d-block mb-2" onClick="">
        update profile
      </button>
      <button className="btn btn-outline-info" onClick="">
        change your password
      </button>
    </div>
  );
}
export default Profile;
