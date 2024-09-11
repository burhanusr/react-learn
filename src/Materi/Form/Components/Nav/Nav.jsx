import { Link } from 'react-router-dom';

const style = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5em',
};

export default function Nav() {
  return (
    <div style={style}>
      <button>
        <Link to={'/components'}>Materi Komponen</Link>
      </button>
      <button>
        <Link to={'/styling'}>Materi Styling</Link>
      </button>
    </div>
  );
}
