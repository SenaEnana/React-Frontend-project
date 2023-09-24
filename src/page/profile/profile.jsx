

function Profile(){
return(
    <div className='float-end'>
    <h5 className="text-lighter p-2">name:</h5>
    <h5 className="text-lighter p-2">email:</h5>
    <h5 className="text-lighter p-2">phone:</h5>
    <h5 className="text-lighter p-2">address:</h5>
    <h5 className="text-lighter p-2">password:</h5>
    <button className="btn btn-danger d-block mb-2" onClick="">update profile</button>
 <button className="btn btn-info" onClick="">change your password</button>
    </div>
);
}
export default Profile;