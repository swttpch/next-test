/**
 * Context Api ✅
 *
 * - Criar um contexto para exibir mensagens de sucesso e erro
 * - Criar um componente para exibir as mensagens
 * - Criar um hook para disparar e consumir as mensagens
 * - Disparar as mensagens a partir dos botões abaixo
 */

import { MessageProvider } from '@/contexts/message.context';
import ShowMessages from '@/components/ShowMessages';

export default function ContextApi() {
  return (
    <MessageProvider>
      <ShowMessages />
    </MessageProvider>
  );
}
