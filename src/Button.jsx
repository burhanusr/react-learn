export default function Button({ value, onClickButton }) {
  return (
    <button onClick={onClickButton} value={value}>
      {value}
    </button>
  );
}
