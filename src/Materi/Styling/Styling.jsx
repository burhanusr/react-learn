import { Link } from 'react-router-dom';
import Plain from './Components/Plain/Plain';
import Sass from './Components/Sass/Sass';
import Inline from './Components/Inline/Inline';
import Styled from './Components/Styled/Styled';
import ReactBootstrap from './Components/React-Bootstrap/ReactBootstrap';

export default function Styling() {
  return (
    <>
      <Plain />
      <Sass />
      <Inline />
      <Styled />
      <ReactBootstrap />
      <button>
        <Link to={'/'}>Kembali</Link>
      </button>
    </>
  );
}
