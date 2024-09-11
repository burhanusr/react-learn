import { Link } from 'react-router-dom';

export default function NotFound() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5em',
  };

  return (
    <div style={style}>
      <div>404 Not Found</div>
      <button>
        <Link to={'/'}>Kembali</Link>
      </button>
    </div>
  );
}
