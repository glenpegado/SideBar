import { useGlobalContext } from '../customHooks/context';
import { FaTimes } from 'react-icons/fa';

function Modal() {
  //custom Hook
  const { isModalOpen, closeModal } = useGlobalContext();

  //RETURN
  return (
    <div className={isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
