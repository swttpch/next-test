import { createContext, ReactNode, useContext, useState } from 'react';
import styles from '@/styles/context-api.module.css';
import { ToastMessage } from '@/components/ToastMessage';
import { IToastMessage } from '@/types/toast-message';

type MessageContextType = {
  showSuccessMessage: () => void;
  showErrorMessage: () => void;
};

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const showSuccessMessage = () => {
    setMessages((old) => {
      const lenght = old.length;
      const id = lenght + 1;
      return [...old, { id: id.toString(), message: 'Mensagem de sucesso', type: 'success' }];
    });
  };

  const showErrorMessage = () => {
    setMessages((old) => {
      const lenght = old.length;
      const id = lenght + 1;
      return [...old, { id: id.toString(), message: 'Mensagem de erro', type: 'error' }];
    });
  };

  const handleRemoveMessage = (id: string) => {
    setMessages((old) => old.filter((message) => message.id !== id));
  };

  return (
    <MessageContext.Provider
      value={{
        showSuccessMessage,
        showErrorMessage,
      }}
    >
      {children}

      <div className={styles['toast-container']}>
        {messages.map((message) => (
          <ToastMessage key={message.id} content={message} onClose={handleRemoveMessage} />
        ))}
      </div>
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};
