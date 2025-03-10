import { ReactNode } from 'react';
import { FcCancel } from 'react-icons/fc';

interface ModalChildren {
  children: ReactNode;
  onClose: () => void;
}

function Modal({ children, onClose }: ModalChildren) {
  return (
    <div
      // onClick={onClose}
      className="fixed inset-0 flex items-center justify-center bg-gray-800/60"
    >
      <div className="relative rounded-lg bg-gray-800 p-4 shadow">
        {children}
        <button onClick={onClose} className="btn absolute top-2 right-2 bg-gray-800">
          <FcCancel size={24} />
        </button>
      </div>
    </div>
  );
}
export default Modal;
