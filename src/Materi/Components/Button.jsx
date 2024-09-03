import style from '../Styling/Module/style.module.css';

export default function Button({ value, onClickButton }) {
  return (
    <button className={style.btn_module} onClick={onClickButton} value={value}>
      Count: {value}
    </button>
  );
}
