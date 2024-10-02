import { useMessage } from '@/contexts/message.context';
import styles from '@/styles/context-api.module.css';

function ShowMessages() {
  const { showErrorMessage, showSuccessMessage } = useMessage();

  function handleSuccessButtonClick() {
    showSuccessMessage({ message: 'Mensagem de sucesso' });
  }

  function handleErrorButtonClick() {
    showErrorMessage({ message: 'Mensagem de erro' });
  }
  return (
    <>
      <div className={styles.container}>
        <button type="button" onClick={handleSuccessButtonClick}>
          Disparar mensagem de sucesso
        </button>
        <button type="button" onClick={handleErrorButtonClick}>
          Disparar mensagem de erro
        </button>
      </div>
    </>
  );
}

export default ShowMessages;
