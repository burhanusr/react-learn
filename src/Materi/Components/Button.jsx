import { Link } from 'react-router-dom';
import style from '../Styling/Components/Module/style.module.css';

export default function Button({ value, onClickButton }) {
  return (
    <>
      <button
        className={style.btn_module}
        onClick={onClickButton}
        value={value}
      >
        Count: {value}
      </button>
      <button>
        <Link to={'/'}>Kembali</Link>
      </button>
    </>
  );
}
