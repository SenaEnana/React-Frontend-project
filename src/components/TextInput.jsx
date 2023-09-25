const TextInput = ({ value, type, name, label, onChange, error }) => {
  return (
    <div className="m-2 col-12 ">
      <div>
        <label className="float-start">{label}</label>
      </div>
      <input
        className="form-control"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <label className="text-danger float-start">{error}</label>}
    </div>
  );
};
export default TextInput;

// php artisan config:cache
