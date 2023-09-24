const TextInput = ({ value, type, name, label, onChange, error }) => {
  return (
    <div className=" col-12 row">
      <div>
        <label className="float-start">{label}</label>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      {<p className="text-danger text-start m-2">{error}</p>}
    </div>
  );
};
export default TextInput;

// php artisan config:cache
