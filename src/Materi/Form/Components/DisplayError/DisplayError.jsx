import './index.css';

const DisplayError = ({ errors }) => {
  return (
    <ul className="error-list" style={{ color: 'red' }}>
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
};

export default DisplayError;
