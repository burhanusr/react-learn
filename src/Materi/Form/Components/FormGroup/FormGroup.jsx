import './index.css';

const FormGroup = ({ type, name, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <span className={`icon ${name}`}></span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default FormGroup;
