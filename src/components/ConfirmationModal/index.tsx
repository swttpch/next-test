import { Modal } from '../Modal';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  children,
}) => {
  return (
    <Modal isOpen={isOpen} title="Confirmação" onClose={onClose} onConfirm={onConfirm}>
      {children}
    </Modal>
  );
};

export default ConfirmationModal;
