import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Redux() {
  const btnStyle = {
    padding: '0 1em',
    fontSize: '1rem',
  };

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ display: 'flex', gap: '1em' }}>
        <button
          style={btnStyle}
          onClick={() => dispatch({ type: 'INCREMENT', payload: 1 })}
        >
          +
        </button>
        <h1>{count}</h1>
        <button
          style={btnStyle}
          onClick={() => dispatch({ type: 'DECREMENT', payload: 1 })}
        >
          -
        </button>
      </div>
      <div>
        <button>
          <Link to={'/'}>Kembali</Link>
        </button>
      </div>
    </div>
  );
}
