const TextInput = ({
  value,
  type,
  name,
  label,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div className="col-12 row">
      <div>
        <label className="float-start">{label}</label>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          placeholder={placeholder}
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
