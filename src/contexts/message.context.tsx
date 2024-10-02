import { createContext, ReactNode, useContext, useState } from 'react';
import styles from '@/styles/context-api.module.css';
import { ToastMessage } from '@/components/ToastMessage';
import { IToastMessage } from '@/types/toast-message';

type MessagePartialType = {
  message: string;
  duration?: number;
};

type MessageContextType = {
  showSuccessMessage: (props: MessagePartialType) => void;
  showErrorMessage: (props: MessagePartialType) => void;
};

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const showSuccessMessage = ({ message, duration }: MessagePartialType) => {
    setMessages((old) => {
      const lenght = old.length;
      const id = lenght + 1;
      return [...old, { id: id.toString(), message, type: 'success', duration }];
    });
  };

  const showErrorMessage = ({ message, duration }: MessagePartialType) => {
    setMessages((old) => {
      const lenght = old.length;
      const id = lenght + 1;
      return [...old, { id: id.toString(), message, type: 'error', duration }];
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
