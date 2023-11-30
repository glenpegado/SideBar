import { useGlobalContext } from '../customHooks/context';
import { FaBars } from 'react-icons/fa';

function Home() {
  // custom hook
  const { openSidebar, openModal } = useGlobalContext();

  // Body
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={openModal} className='btn'>
        show modal
      </button>
    </main>
  );
}

export default Home;
