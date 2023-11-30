import logo from '../logo.svg';
import { useGlobalContext } from '../customHooks/context';
import { links, social } from '../data.jsx';
import { FaTimes } from 'react-icons/fa';

function Sidebar() {
  //custom hook
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  //BODY
  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className='sidebar-header'>
        <img src={logo} alt='codding addict' />
        <button onClick={closeSidebar} className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((el) => {
          const { id, url, text, icon } = el;
          return (
            <div key={id}>
              <li>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            </div>
          );
        })}
      </ul>
      <ul className='social-links'>
        {social.map((el) => {
          const { id, url, icon } = el;
          return (
            <div key={id}>
              <li>
                <a href={url}>{icon}</a>
              </li>
            </div>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
